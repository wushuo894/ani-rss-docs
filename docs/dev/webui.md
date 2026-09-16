# 第三方 WebUI 制作标准与指南

第三方 WebUI 是由 ANI-RSS 托管的静态前端，通过现有 API 操作订阅、下载和设置。可以使用 Vue、React 或原生
JavaScript，发布时交付可直接运行的 ZIP 构建产物。

本文以当前后端实现为准；发布时请注明实际测试过的 ANI-RSS 版本。`/api/webui/*` 接口用于安装、更新和移除前端；业务功能使用其他
`/api/*` 接口。

## 制作标准

交付的 WebUI 应满足以下要求：

1. ZIP 根目录包含 `index.html`、`webui.json` 和运行所需的全部静态资源，无需用户启动 Node.js 服务。
2. 资源和 API 地址适配部署路径；单页应用建议使用 hash 路由，刷新子页面后仍能访问。
3. 提供登录、登录失效处理、请求失败提示和加载状态；依据 JSON 中的 `code` 判断业务是否成功。
4. 提供上传替换和恢复默认界面的入口；支持在线更新时，展示当前版本、最新版本和更新说明，由用户触发安装。
5. 在项目说明或 Release 中注明后端兼容版本、已支持的功能、安装方法和恢复方法。后端不会根据 `webui.json` 自动检查兼容性。

建议支持窄屏、键盘操作和清晰的表单标签。删除订阅、删除媒体文件、覆盖安装等操作应说明影响并防止重复提交。尚未实现的功能应明确标注。

## 包结构与元数据

### ZIP 目录结构

```text
my-webui.zip
├── index.html
├── webui.json
├── favicon.ico
└── assets/
    ├── app-a1b2c3.js
    └── app-d4e5f6.css
```

压缩包内不能再套一层 `dist/`、`my-webui/` 或 `webui/`。上传文件扩展名必须为小写 `.zip`，默认单文件和整个 multipart 请求上限均为
`50MB`，打包时应为请求开销留出余量；反向代理也可能有更小的限制。

上传接口目前只检查扩展名和 ZIP 根目录是否存在 `webui.json`，不会检查 JSON 内容、`index.html` 或页面能否运行。因此，上传成功不等于包制作正确。

### webui.json

```json
{
  "owner": "your-github-name",
  "repo": "my-ani-rss-webui",
  "version": "1.2.3",
  "filename": "my-webui.zip"
}
```

将示例中的仓库信息替换为自己的值。

| 字段       | 类型   | 用途与约定                                                      |
|------------|--------|-----------------------------------------------------------------|
| `owner`    | string | GitHub 用户或组织名，不是完整 URL                               |
| `repo`     | string | GitHub 仓库名，不包含 owner 或 `.git`                           |
| `version`  | string | 当前包版本，建议使用 `1.2.3` 格式，不带 `v`                     |
| `filename` | string | GitHub Release 附件的完整文件名，区分大小写，建议各版本保持一致 |

这是后端识别的四个更新字段。要使用内置更新接口，需完整填写；即使只支持手动安装，也建议保留相同结构并在界面隐藏在线更新入口。不存在后端认可的
`updateUrl`、`minBackendVersion` 等字段，自行增加的字段不会参与更新或兼容性校验。

`webui.json` 会作为静态文件公开提供，可从部署根路径下的 `webui.json` 读取；不要放入密码、Token 或 API Key。目前没有
`/api/webui/info` 或 `/api/webui/version` 接口。

## 静态资源、路由与本地开发

### 加载规则

上传后，文件解压到当前配置目录下的 `webui/`，配置目录由 `CONFIG` 等启动配置决定，见[参数与变量](/args-and-env)
。请求静态资源时，后端先查找此目录，再查找内置前端的同名资源。

例如，`webui/index.html` 对应站点的 `/index.html`，`webui/assets/app.js` 对应 `/assets/app.js`，不需要增加 `/webui/` URL
前缀。不要依赖内置前端的资源文件名，它们可能随后端更新变化。

后端会将非 `/api`、没有扩展名且不以 `/` 结尾的路径转发到同名 `.html`，例如 `/settings` 转发到 `/settings.html`
。它没有为任意前端路由提供 `index.html` 回退。单页应用推荐 hash 路由，例如 `/#/settings`；官方 Vue 前端使用
`createWebHashHistory()`。

部分静态资源（包括 JS、CSS）默认缓存一天。构建产物应使用带内容 hash 的文件名，安装、更新或删除 WebUI 后重新加载页面。若使用
Service Worker，应自行处理更新和卸载时的缓存，避免继续显示旧界面。

### 开发代理

可参考官方 `ani-rss-ui/vite.config.js`。下面是 Vite 的基础配置，框架插件按项目需要添加：

```js
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    port: 37789,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7789',
        changeOrigin: true
      }
    }
  }
})
```

先[启动后端](/dev/start)，再启动自己的前端开发服务。开发时通过代理访问 `/api`，生产时由后端同源托管，避免把开发机地址写进产物。

如需部署在 `/ani-rss/` 这样的反向代理子路径下，应由代理去除该前缀后转发，并将静态资源与 API 基路径统一设为 `/ani-rss/`
。使用相对地址 `api/webui/upload` 可保留此前缀，写死 `/api/webui/upload` 则会请求域名根路径。访问子路径入口时保留末尾 `/`
，并实际验证代理配置；`base: './'` 只处理构建资源地址。

### 构建与打包

将 `webui.json` 放在构建工具会原样复制到输出根目录的位置，例如 Vite 的 `public/webui.json`。使用项目自己的构建命令生成产物后，压缩输出目录中的内容：

```bash
npm run build
cd dist
# 使用一个尚不存在的输出文件名，避免 zip 向旧包追加文件
zip -r ../my-webui.zip .
# 检查包内路径，确认 index.html 和 webui.json 位于根目录
unzip -l ../my-webui.zip
```

Windows 可选中 `dist` 内的全部文件进行 ZIP 压缩。不要把源码、`node_modules`、开发配置或凭据打包进去。

## API 基础约定

### 鉴权

浏览器 WebUI 推荐通过登录获取 Token：

```http
POST /api/login
Content-Type: application/json

{"username":"your-user","password":"<明文密码的 MD5 摘要>"}
```

密码字段传普通 MD5 的 32 位小写十六进制字符串。登录成功后，响应的 `data` 是 Token，后续请求直接携带：

```http
Authorization: <登录返回的 Token>
```

这里不加 `Bearer ` 前缀。登录有效期、IP 校验、禁止多设备登录或修改密码都可能使 Token 失效，前端应清理失效凭据、停止受保护接口的轮询并返回登录状态。

脚本也可以使用在[登录设置](/config/login)中配置的 API Key：

```http
api-key: <用户配置的 API Key>
```

后端还接受 `x-api-key` 和 `s`，这里统一使用 `api-key` 请求头。不要把 API Key 写死在公开的前端产物中。IP
白名单可能允许免登录，不能仅凭本机请求成功判断鉴权已正确实现。

### 响应与错误

这些 WebUI 管理接口使用统一 JSON 响应，例如上传成功：

```json
{
  "code": 200,
  "message": "WebUI 上传完成, 请刷新页面",
  "t": 1788847200000
}
```

| 字段      | 含义                                                     |
|-----------|----------------------------------------------------------|
| `code`    | 业务状态码，成功为 `200`；常见错误为 `403`、`404`、`500` |
| `message` | 可向用户显示的结果或错误信息                             |
| `data`    | 接口数据，无数据时可能省略                               |
| `t`       | 服务端 Unix 时间戳，单位为毫秒                           |

HTTP 状态为 `200` 时，JSON 的 `code` 仍可能是 `403` 或 `500`。应同时检查 HTTP 状态和业务状态；代理错误还可能返回 HTML
或空响应。不要只检查 `response.ok`，也不要假定每个成功响应都有 `data`。

### 可复用的请求示例

以下示例适用于部署根入口或 `index.html` 配合 hash 路由的页面；如使用其他入口布局，请显式设置 `appBase`。Token 暂存于当前标签页的
`sessionStorage`，存储方式可按项目需求调整。

```js
const appBase = new URL('./', window.location.href)
const tokenKey = 'my-webui-token'

async function api(path, { method = 'POST', body, auth = true } = {}) {
  const headers = new Headers()
  const token = sessionStorage.getItem(tokenKey)
  if (auth && token) headers.set('Authorization', token)

  let payload = body
  if (body !== undefined && !(body instanceof FormData)) {
    headers.set('Content-Type', 'application/json')
    payload = JSON.stringify(body)
  }

  const response = await fetch(new URL('api/' + path, appBase), {
    method,
    headers,
    body: payload
  })
  if (response.status === 403) {
    sessionStorage.removeItem(tokenKey)
    window.dispatchEvent(new Event('ani-rss-login-required'))
  }

  let result
  try {
    result = await response.json()
  } catch {
    throw new Error('接口未返回 JSON，请检查服务地址和代理，HTTP ' + response.status)
  }

  if (result.code === 403) {
    sessionStorage.removeItem(tokenKey)
    window.dispatchEvent(new Event('ani-rss-login-required'))
  }
  if (!response.ok || result.code !== 200) {
    throw Object.assign(new Error(result.message || '请求失败'), {
      code: result.code,
      httpStatus: response.status
    })
  }
  return result
}
```

在界面中监听 `ani-rss-login-required`，停止轮询并显示登录页；调用方通过 `try/catch/finally` 展示错误及恢复按钮状态，不应静默重试鉴权失败的请求。

安装 `js-md5` 后，可在同一模块中完成登录：

```js
import { md5 } from 'js-md5'

async function login(username, plainPassword) {
  const result = await api('login', {
    auth: false,
    body: { username, password: md5(plainPassword) }
  })
  sessionStorage.setItem(tokenKey, result.data)
}
```

MD5 是当前登录协议的字段格式；通过 HTTPS 部署来保护传输中的登录信息和 Token。

## /api/webui/* 接口参考

下表列出实际请求路径。所有接口都需要通过鉴权，查询更新也使用 `POST`。

| 接口                        | 请求体                        | 成功结果                                |
|-----------------------------|-------------------------------|-----------------------------------------|
| `POST /api/webui/upload`    | multipart 表单，字段名 `file` | `message: "WebUI 上传完成, 请刷新页面"` |
| `POST /api/webui/delete`    | 无                            | `message: "WebUI 删除完成"`             |
| `POST /api/webui/getUpdate` | 无                            | `data` 为更新信息对象                   |
| `POST /api/webui/update`    | 无                            | `message: "WebUI 更新完成, 请刷新页面"` |

### 上传与替换

```js
async function uploadWebUI(file) {
    const form = new FormData()
    form.append('file', file)
    const result = await api('webui/upload', {body: form})
    window.location.reload()
    return result
}
```

将文件选择器取得的 `File` 传入此函数。不要手动设置 `Content-Type`，浏览器需要为 multipart 自动生成 boundary。不能使用
JSON、Base64 或裸 ZIP 二进制代替 `file` 表单字段。

常见业务错误包括 `文件格式错误`（扩展名不为小写 `zip`）和 `上传 WebUI 失败`（读取失败、ZIP 损坏或根目录没有 `webui.json`）。

上传会删除旧 `webui/` 后解压新包，不会合并文件。应提供完整产物，并保留上一个可用
ZIP；当前实现没有原子切换或失败回滚。上传、更新和删除期间应禁用其他维护按钮，避免并发操作。

### 查询更新

```js
const {data: updateInfo} = await api('webui/getUpdate')
// 仅在 updateInfo.update 为 true 时启用“安装更新”按钮
```

可更新时的 `data` 示例（下载地址和摘要为示意值）：

```json
{
  "latest": "1.2.4",
  "downloadUrl": "https://github.com/your-github-name/my-ani-rss-webui/releases/download/v1.2.4/my-webui.zip",
  "update": true,
  "autoUpdate": true,
  "sha256": "<64 位 SHA-256 十六进制摘要>",
  "size": 1048576,
  "formatSize": "1 MiB",
  "markdownBody": "修复页面显示问题",
  "date": "2026-09-08 12:00:00"
}
```

| 字段           | 类型    | 说明                                                                         |
|----------------|---------|------------------------------------------------------------------------------|
| `latest`       | string  | Release tag 去掉小写 `v` 后的版本                                            |
| `update`       | boolean | 有匹配附件且版本高于当前版本时为 `true`                                      |
| `autoUpdate`   | boolean | 最新与当前版本的前两段版本号是否相同，如同属 `1.2`；它不是启用自动更新的开关 |
| `downloadUrl`  | string  | 匹配附件的下载地址，由后端用于下载                                           |
| `sha256`       | string  | 附件的 SHA-256 摘要，不含 `sha256:` 前缀                                     |
| `size`         | number  | 附件字节数                                                                   |
| `formatSize`   | string  | 格式化后的大小，适合展示                                                     |
| `markdownBody` | string  | Release 更新说明，渲染时应禁用原始 HTML 或做清理                             |
| `date`         | string  | 发布时间，格式为 `yyyy-MM-dd HH:mm:ss`，不是带时区的 ISO 字符串；可能省略    |

必须区分以下状态：

| 情况                                       | 返回行为                                                        |
|--------------------------------------------|-----------------------------------------------------------------|
| 未安装 `webui.json`                        | 业务 `code: 500`，`message: "无 WebUI 更新"`                    |
| 已安装，没有更高版本                       | `code: 200`，`data.update: false`                               |
| GitHub latest 接口返回 404                 | `code: 200`，`data.update: false`，`latest` 为空字符串          |
| 有 Release，但没有与 `filename` 匹配的附件 | `code: 200`，`data.update: false`；仍可能有 `latest` 和更新说明 |
| 网络、元数据解析或附件摘要异常             | 返回错误，应展示失败原因，不能当作“已经是最新版”                |

读取当前版本可请求静态文件 `new URL('webui.json', appBase)` 并解析 JSON，它不是 `Result`
包装体；请求失败时应提示无法读取元数据，不要仅凭失败就断定使用的是默认界面。

### 安装更新

```js
// 在用户确认安装后调用
async function installWebUIUpdate() {
    const result = await api('webui/update')
    window.location.reload()
    return result
}
```

请求不接受 URL、版本号或更新信息作为参数。后端会重新查询最新 Release，要求 `update: true`，然后下载并校验文件大小和
SHA-256，通过后删除旧目录并解压。不可更新时返回业务错误 `无 WebUI 更新`。

查询与安装之间如果发布了新版本，实际安装的版本可能变化。这个接口不能用来锁定版本或降级；安装指定版本时，请下载对应的完整 ZIP
后使用上传接口。

`autoUpdate: false` 不会阻止用户调用此接口。当前后端没有定时自动更新 WebUI 的任务，前端不能把这个字段显示为“已开启自动更新”。

### 删除并恢复默认界面

```js
// 在用户确认恢复默认界面后调用
async function restoreDefaultWebUI() {
    const result = await api('webui/delete')
    window.location.assign(appBase.href)
    return result
}
```

该接口删除配置目录下的 `webui/`，后续页面请求回到内置静态资源。它不删除订阅、下载文件或其他设置。跳回部署入口也可避免默认前端无法识别第三方前端的
hash 路由。

如果第三方页面已经打不开，可从命令行调用删除接口，或在服务器上将配置目录中的 `webui` 文件夹移走留作备份，再重新打开页面。若仍显示旧页面，请强制刷新并检查第三方
Service Worker 的缓存。

### cURL 示例

以下使用 Bash 和 API Key。先设置服务地址（保留末尾 `/`；有代理子路径时一并填写），再输入 API Key：

```bash
ANI_RSS_URL='http://127.0.0.1:7789/'
read -r -s -p 'API Key: ' ANI_RSS_API_KEY
```

按需单独执行对应操作；每次检查返回 JSON 中的 `code`：

```bash
# 上传或替换完整 WebUI
curl --silent --show-error -X POST "${ANI_RSS_URL}api/webui/upload" \
  -H "api-key: ${ANI_RSS_API_KEY}" \
  -F 'file=@./my-webui.zip'

# 查询更新，不安装
curl --silent --show-error -X POST "${ANI_RSS_URL}api/webui/getUpdate" \
  -H "api-key: ${ANI_RSS_API_KEY}"

# 安装查询时最新的可用版本
curl --silent --show-error -X POST "${ANI_RSS_URL}api/webui/update" \
  -H "api-key: ${ANI_RSS_API_KEY}"

# 删除第三方 WebUI，恢复默认界面
curl --silent --show-error -X POST "${ANI_RSS_URL}api/webui/delete" \
  -H "api-key: ${ANI_RSS_API_KEY}"
```

也可以把 `api-key` 请求头换为 `Authorization: <登录返回的 Token>`。如果没有可用 API Key，可先按上文登录协议调用
`/api/login` 获取 Token。

## GitHub Release 更新发布规范

后端根据已安装的 `webui.json` 请求 `https://api.github.com/repos/{owner}/{repo}/releases/latest`，不会扫描所有
tag，也不支持自定义更新地址。

发布流程：

1. 更新 `webui.json` 的 `version`，例如 `1.2.4`，再构建并打包。
2. 创建对应的 Release，建议 tag 使用 `v1.2.4`，确保它可由 `releases/latest` 返回。
3. 上传完整构建 ZIP 作为 Release 附件，附件名必须与已安装包的 `filename` 完全相同，例如始终为 `my-webui.zip`。不要使用
   GitHub 自动生成的源码 ZIP 代替构建产物。
4. 检查该附件 API 数据中的 `name`、`browser_download_url`、`size` 和 `digest`。当前实现要求 `digest` 提供 `sha256:...`；另附
   `.sha256` 文件不会被读取，缺少 `digest` 可能使检查更新失败。
5. 从上一个已发布版本实际调用 `getUpdate` 和 `update`，验证版本比较、下载校验、刷新和新包内的版本信息。

`version` 必须与包的实际版本一致，否则安装后可能重复提示同一个更新。建议使用常规三段数字版本，避免依赖任意字符串或预发布标签的比较行为。修改
owner、repo 或附件命名时，还需考虑旧包仍使用旧元数据查询更新。

网络访问发生在 ANI-RSS 后端，包括 GitHub API 查询与附件下载；浏览器可以下载不代表服务器也可以。查询使用后端配置的 GitHub
Token（如已配置）。下载或摘要校验失败时先检查后端网络、GitHub 返回结果和附件完整性。在线更新的解压步骤不会重复检查 ZIP 根目录的
`webui.json`，发布者必须自行验证包结构。

## 接入完整业务功能

第三方前端可复用现有业务接口。建议先实现登录与订阅列表，再逐步接入编辑、下载状态、日志和设置，以下是常用入口：

| 功能                 | 接口或参考方式                                                                                                  |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| 连通性检查           | `/api/ping`，不要求登录，不能用来判断登录状态                                                                   |
| 订阅列表             | `POST /api/listAni`；`data` 为包含 `releaseDateList`、`weekList`、`total` 的对象，`weekList` 内按组存放 `items` |
| 生成订阅草稿         | `POST /api/rssToAni`，再根据需要调用 `/api/previewAni`、`/api/addAni`                                           |
| 编辑订阅             | `POST /api/setAni`，在已读取的完整对象上修改并提交，避免遗漏字段导致旧值被覆盖                                  |
| 读取、保存设置       | `POST /api/config`、`POST /api/setConfig`；保留后端返回但前端不认识的字段                                       |
| 用户自定义样式与脚本 | `GET /api/custom.css`、`GET /api/custom.js`，按需接入；返回静态文本而非 `Result` JSON                           |

保存设置不是任意深度的 JSON 合并：后端忽略顶层 `null`
值，但嵌套对象会作为字段整体复制。应先读取当前设置，再修改需要编辑的部分；不要用自己写的默认对象覆盖用户配置。修改账号密码后还应处理登录状态失效。

需要详细参数和响应结构时，可使用：

- 实例接口文档：通过环境变量 `SWAGGER_ENABLED=true` 启动后端，访问 `/swagger-ui/index.html`。接口声明使用 `api-key`
  请求头鉴权；JSON 描述受 `/api` 全局前缀影响，当前映射为 `/api/v3/api-docs`。
- 后端源码：`ani-rss-application/src/main/java/ani/rss/controller/` 中的路由与参数，`entity/` 中的字段，`service/`
  中的实际处理逻辑。
- 官方调用示例：`ani-rss-ui/src/js/api.js`、`src/view/custom/UploadView.vue`、`src/view/config/basic/PageView.vue` 及各业务页面。

接口未使用版本化路径，后端升级时请重新核对调用契约。文件下载、静态文本或流式接口应按其实际类型处理，不要一律交给上面的 JSON
请求封装。

## 发布前验收

- 在声明支持的后端版本上检查全新登录、错误密码、Token 失效和 API Key 调用。
- 从 ZIP 安装，确认入口、资源、hash 子页面刷新、窄屏操作，以及声明支持的代理子路径正常。
- 测试已有订阅和设置的读取与保存，确认未展示的字段得到保留。
- 验证上传失败、检查更新失败、无新版本、有新版本及缺少附件时的提示。
- 从上一版本在线更新到新版本，确认资源缓存刷新后显示正确版本。
- 实际执行恢复默认界面，并验证页面损坏时可通过命令行恢复。

交付时附上构建 ZIP、版本及兼容范围、更新说明和恢复步骤。安装入口见[页面设置中的 WebUI](/config/basic/page#webui)。
