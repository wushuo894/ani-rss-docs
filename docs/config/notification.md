# 通知

在「设置 → 通知」中，可以添加多条通知配置，将订阅事件发送到不同渠道，也可以在下载完成后刷新媒体库、移动文件或上传至 OpenList。

## 快速配置

1. 点击「添加通知」，选择通知类型。
2. 填写对应渠道的地址、密钥或目标位置，建议添加备注以便区分。
3. 勾选需要接收的[通知状态](#notification-status)，并打开「开启」开关。
4. 点击「测试」，确认目标渠道收到消息，或根据下文说明确认自动处理配置。
5. 点击「确定」关闭弹窗，再点击设置页右上角的「保存」。
6. 在需要接收通知的订阅中，打开该订阅的「通知」开关。

::: tip 通知需要同时满足三个条件
通知配置已启用、勾选了对应的事件状态、订阅自身开启了「通知」。关闭订阅的「通知」会跳过该订阅的所有通知处理，包括文件移动和 OpenList 上传。
:::

<img src="/image/screenshot/notification-screenshot.webp" alt="通知配置示例（浅色模式）" class="light-only dialog-screenshot">
<img src="/image/screenshot/notification-screenshot-dark.webp" alt="通知配置示例（深色模式）" class="dark-only dialog-screenshot">

### 管理通知

通知卡片标题旁的实心绿点表示已启用，空心灰点表示已禁用；悬停在状态点上可以查看文字说明。

点击卡片的「···」可以快速启用、禁用、编辑或删除通知。修改后仍需点击设置页的「保存」。

每条通知都有以下通用设置：

| 设置 | 说明 |
| --- | --- |
| 备注 | 用于区分同一类型的多条配置，例如「私人 Telegram」「家庭群」 |
| 通知状态 | 选择触发这条通知的事件，可以多选 |
| 顺序 | 数值越小越先处理，默认 `10` |
| 重试 | 默认 `3`，设为 `0` 时不重试 |
| 开启 | 控制这条通知是否参与事件处理 |

### 「测试」会做什么

「测试」使用示例订阅，不会替代实际事件的触发条件，也不会保存设置。不同类型的测试行为如下：

| 类型 | 测试行为 |
| --- | --- |
| 消息渠道 | 实际向目标渠道发送测试消息 |
| Emby 媒体库刷新 | 实际请求刷新所选媒体库，测试时不等待配置的延迟 |
| 执行外部程序 | 实际执行填写的命令 |
| 文件移动 | 只检查是否勾选「下载完成」，不移动文件 |
| OpenList 上传 | 检查是否勾选「下载完成」，并请求 OpenList 验证访问凭据，不上传文件 |

消息通知请以目标渠道实际收到消息为准。文件移动和上传还需要在真实下载完成后确认结果。

## 通知状态 {#notification-status}

| 状态 | 触发说明 |
| --- | --- |
| 开始下载 | 订阅资源开始下载时通知 |
| 下载完成 | 下载完成后通知，也用于触发文件移动和 OpenList 上传 |
| 缺集 | 遗漏检测发现缺少集数时通知，需开启[遗漏检测](/config/basic/rss#遗漏检测) |
| 错误 | 订阅处理发生相关错误时通知 |
| 订阅完结 | 达到总集数并自动禁用订阅时通知，需开启[自动禁用订阅](/config/basic/rss#自动禁用订阅) |
| 摸鱼检测 | RSS 长时间未更新时通知，需同时开启全局和订阅自身的[摸鱼检测](/config/basic/rss#procrastinating) |

新建通知默认勾选「开始下载」「缺集」「错误」。需要接收下载完成消息时，请手动勾选「下载完成」。

::: warning 下载完成的限制
Aria2 不支持下载完成通知，因此也不能通过该事件触发文件移动和 OpenList 上传。各下载器的支持情况见[下载工具](/config/download#下载工具)。
:::

## 消息渠道

以下渠道用于接收消息。带有「通知模版」输入框的渠道，默认填写 `${notification}`，表示沿用[全局通知模板](#notification-template)。

### Telegram

通知类型选择「TG 通知」。

1. 通过 [BotFather 创建机器人](https://core.telegram.org/bots/features#botfather)，取得 Bot Token。
2. 向机器人发送消息；要接收群组通知时，将机器人加入目标群组并在群内发送消息。
3. 填写 `Token`，点击 `ChatId` 旁的刷新按钮，选择目标会话，也可以直接填写 ChatId。
4. 按需设置话题、图片和消息格式，再点击「测试」。

| 设置 | 说明 |
| --- | --- |
| Api Host | 默认 `https://api.telegram.org`，也可填写可用的 Telegram Bot API 服务地址 |
| Token | BotFather 提供的 Bot Token |
| ChatId | 接收消息的用户或群组 ID |
| 话题ID | 群组话题的 ID；`-1` 表示不指定话题 |
| 图片 | 是否附带番剧封面 |
| 格式 | `None`、`Markdown` 或 `HTML`；模板内容需符合所选格式 |

### 邮箱

通知类型选择「邮箱通知」。填写发件邮箱的 SMTP 配置和收件地址。

「收件人邮箱」支持多个地址，用英文逗号或分号分隔，例如 `first@example.com,second@example.com`。发件人与收件人可以不同；「图片」控制是否附带番剧封面。

#### QQ 邮箱示例

| 设置 | 填写示例 |
| --- | --- |
| SMTP地址 | `smtp.qq.com` |
| SMTP端口 | `465` |
| 发件人邮箱 | `你的QQ号@qq.com` |
| 密码 | QQ 邮箱的 SMTP 授权码，见下文 |
| SSL | 开启 |
| STARTTLS | 关闭 |
| 收件人邮箱 | 接收通知的邮箱地址 |

#### 获取 QQ 邮箱授权码 {#qq-mail-password}

在电脑浏览器打开 [QQ 邮箱](https://mail.qq.com)，进入设置，找到 POP3/IMAP/SMTP 等服务设置，开启 SMTP 相关服务并生成授权码。将授权码填入 ANI-RSS 的「密码」，不要填写网页登录密码。

其他邮箱请使用对应服务商提供的 SMTP 地址、端口和加密配置。

### Server 酱

通知类型选择「Server 酱」，再根据使用的服务选择 `Type`。

| Type | 需要填写 |
| --- | --- |
| `ServerChan` | `sendKey`：服务提供的推送密钥 |
| `ServerChan3` | `apiUrl`：服务提供的完整推送地址 |

「事件标题」开启后，消息标题中会包含「开始下载」「下载完成」等事件名称。

Server 酱³ 的账号与推送地址配置见[官方使用说明](https://doc.sc3.ft07.com/)。

### Bark

通知类型选择「Bark 通知」。

| 设置 | 说明 |
| --- | --- |
| ServerUrl | Bark 服务地址，默认 `https://api.day.app` |
| DeviceKeys | 接收通知的设备 Key，可以添加多个 |
| Group | 通知分组，默认 `ani-rss` |
| Level | 通知提示级别 |
| Volume | 音量，范围 `1–10` |
| Other → Use Markdown | 使用 Markdown 内容发送通知 |

### AstrBot {#astrbot}

通知类型选择「AstrBot」，通过 AstrBot 已连接的机器人将通知发送到目标私聊或群聊。

需要 AstrBot **v4.18.0 及以上版本**，配置方法及接口说明见 [AstrBot HTTP API 文档](https://docs.astrbot.app/dev/openapi.html)。

1. 在 AstrBot WebUI 的「设置 → OpenAPI」中创建 API Key，授予 `im` 权限。需要发送封面时，同时授予 `file` 权限。
2. 在目标私聊或群聊中向机器人发送 `/sid`，复制返回的完整 UMO。
3. 在 ANI-RSS 中填写以下配置，点击「测试」，确认目标会话收到消息。

| 设置 | 说明 |
| --- | --- |
| 服务地址 | ANI-RSS 可访问的 AstrBot 根地址，例如 `http://192.168.1.10:6185`；有反向代理子路径时保留路径前缀，无需添加 `/api/v1/im/message` |
| API Key | 创建的密钥，例如 `abk_xxx`，无需添加 `Bearer` 前缀 |
| 目标 UMO | `/sid` 返回的完整会话标识，每条通知填写一个目标 |
| 通知模版 | 默认 `${notification}`，也可使用[通知变量](#template-variables)自定义正文 |
| 发送图片 | 默认开启，将本地缓存的番剧封面与正文一起发送，需要 `im` 和 `file` 权限 |

正文按文本发送，Markdown 的显示效果取决于目标平台。没有可用的本地封面时只发送文本；封面上传失败时会反馈错误，可关闭「发送图片」使用纯文本通知。

### Webhook

通知类型选择「WebHook」，按目标服务的接口要求填写请求。

| 设置 | 说明 |
| --- | --- |
| Method | `POST`、`GET`、`PUT` 或 `DELETE` |
| URL | 目标服务的请求地址，可使用通知变量 |
| Header | 每行填写一个请求头，格式为 `名称: 值` |
| Body | 请求正文，可使用通知变量 |

例如，向接受纯文本的接口发送通知：

- `Method`：`POST`
- `URL`：目标接口地址
- `Header`：`Content-Type: text/plain; charset=utf-8`
- `Body`：`${notification}`

除了[通用通知变量](#template-variables)，Webhook 还支持：

| 变量 | 说明 |
| --- | --- |
| `${image}` | 番剧封面图片链接 |
| `${imageBase64}` | 本地封面的 Base64 内容，不含前缀；在 Body 中使用 |

目标接口需要 Base64 前缀时，按接口要求添加，例如 `data:image/png;base64,${imageBase64}` 或 `base64://${imageBase64}`。使用 Data URL 时，图片类型应与实际封面一致。

::: tip JSON 请求
发送 JSON 时，在 Header 中设置 `Content-Type: application/json`。模板变量按文本替换，替换后的引号、换行等仍需符合 JSON 语法；直接将多行通知放进 JSON 字符串可能使正文无效。
:::

## 自动处理

这些类型也在通知中配置，遵循同样的启用开关、触发状态和处理顺序。

### Emby 媒体库刷新

通知类型选择「Emby 媒体库刷新」。通常搭配「下载完成」状态使用。

1. 在 Emby 的「设置 → 高级 → API 密钥」中创建密钥。
2. 填写 `EmbyHost` 和「Emby密钥」，例如 `http://192.168.1.10:8096`。
3. 点击「媒体库」旁的刷新按钮，获取并勾选需要刷新的媒体库。
4. 按需设置「延迟」，单位为秒，用于推迟刷新请求。

### 执行外部程序（Shell）

通知类型选择「执行外部程序」。

- **Shell**：在 ANI-RSS 所在设备执行的命令，支持[通知变量](#template-variables)。
- **存活限制**：单位为秒，命令运行超过限制时会尝试停止进程。

Windows 使用 `cmd.exe /c`，其他系统使用 `sh -c`。命令、文件路径和依赖都必须在 ANI-RSS 的运行环境中可用；使用 Docker 时，命令在容器内执行。

「测试」也会实际执行命令。

### 文件移动

通知类型选择「文件移动」，通知状态勾选 **「下载完成」**。

用于将下载完成的文件移至另一个本地目录，也可以配合 CD2 等挂载目录，将文件写入网盘。

| 设置 | 说明 |
| --- | --- |
| 目标位置 | 番剧的目标目录 |
| 目标位置（剧场版） | OVA／剧场版的目标目录 |
| 复制模式 | 开启时保留源文件；关闭时复制成功后删除源文件 |
| 删除旧的同集文件 | 清理目标目录中的同集旧版本，用于洗版 |

目标位置支持[保存位置模板变量](/config/download#save-path)，例如：

```txt
/CD2/115/Media/番剧/${title}/Season ${season}
```

使用 qBittorrent 时，请在下载器设置中开启 **「为不完整的文件添加扩展名 `.!qB`」**，避免尚未下载完成的文件参与移动。

源目录和目标目录都需要对 ANI-RSS 进程可见且具有相应权限。使用 Docker 时，请配置对应的目录映射。移动后会删除源文件，需要继续保留本地文件或做种时，可使用「复制模式」。

### OpenList 上传 {#openlist-upload}

通知类型选择「OpenList 上传」，通知状态勾选 **「下载完成」**。

| 设置 | 说明 |
| --- | --- |
| Host | OpenList 的 HTTP 服务地址，例如 `http://192.168.1.10:5244` |
| ApiKey | OpenList 令牌，在 OpenList 管理页面的「设置 → 其他 → 令牌」中获取 |
| 上传位置 | OpenList 中的番剧目标目录 |
| 上传位置（剧场版） | OpenList 中的 OVA／剧场版目标目录 |
| 上传完成后删除本地文件 | 上传成功后删除本地副本；需要保留文件或继续做种时请关闭 |
| 删除旧的同集文件 | 清理上传目标中的同集旧版本，用于洗版 |

上传位置填写 **OpenList 内的路径**，支持[保存位置模板变量](/config/download#save-path)，例如：

```txt
/115/Media/番剧/${title}/Season ${season}
```

订阅中开启「自定义上传」并填写路径后，会覆盖这里的上传位置。待上传的本地文件必须能被 ANI-RSS 读取。

OpenList 上传使用「下载完成」事件，没有单独的「OpenList 上传」事件。OpenList 已不再作为下载工具提供，但此处的上传功能仍可使用。

## 通知模板 {#notification-template}

### 全局模板与渠道模板

- **全局模板**：在通知页面顶部展开「通知模板」编辑，统一定义通知正文。
- **渠道模板**：在某条通知的「通知模版」中编辑。默认 `${notification}` 会插入全局模板生成的正文，也可以直接使用变量为该渠道单独编写内容。
- **Webhook**：直接在 URL 和 Body 中使用变量，没有单独的渠道模板输入框。

全局模板中不要填写 `${notification}`，它是渠道引用全局模板的占位符。

#### 简洁模板

将下面内容填入全局模板：

```txt
${emoji} ${action}
${title} · S${seasonFormat}E${episodeFormat}
进度：${currentEpisodeNumber}/${totalEpisodeNumber}
${text}
```

渠道模板保留默认值：

```txt
${notification}
```

::: details 详细模板示例

```txt
${emoji} ${action}
标题：${title}
日文标题：${jpTitle}
评分：${score}
字幕组：${subgroup}
季 / 集：${season} / ${episode}
进度：${currentEpisodeNumber}/${totalEpisodeNumber}
首播：${year}年${month}月${date}日
TMDB 标题：${themoviedbName}
TMDB ID：${tmdbid}
TMDB：${tmdburl}
Bangumi：${bgmUrl}
TMDB 集标题：${episodeTitle}
Bangumi 集标题：${bgmEpisodeTitle}
Bangumi 日文集标题：${bgmJpEpisodeTitle}
下载位置：${downloadPath}
事件内容：${text}
```

:::

### 模板变量 {#template-variables}

#### 事件与进度

| 变量 | 说明 | 示例 |
| --- | --- | --- |
| `${emoji}` | 事件对应的 Emoji | `🎈`、`🎉`、`❌` |
| `${action}` | 事件名称 | `开始下载`、`下载完成` |
| `${text}` | 本次事件的具体内容 | 下载提示、错误信息等 |
| `${season}` / `${seasonFormat}` | 季号 / 补零季号 | `1` / `01` |
| `${episode}` / `${episodeFormat}` | 集号 / 补零集号 | `1` / `01` |
| `${currentEpisodeNumber}` | 当前订阅进度 | `6` |
| `${totalEpisodeNumber}` | 总集数 | `12` |
| `${downloadPath}` | 订阅的下载目录 | `/Media/番剧/番剧名/Season 1` |

集号从事件内容中提取。缺集、错误、订阅完结等事件不一定对应某一集，建议同时保留 `${text}`，不要只依赖集号判断事件内容。

#### 番剧信息

| 变量 | 说明 |
| --- | --- |
| `${title}` | 订阅标题 |
| `${jpTitle}` | Bangumi 日文标题 |
| `${score}` | 评分 |
| `${subgroup}` | 字幕组 |
| `${year}` / `${month}` / `${date}` | 首播日期的年、月、日 |
| `${themoviedbName}` | TMDB 标题 |
| `${tmdbid}` | TMDB ID |
| `${tmdburl}` | TMDB 页面链接 |
| `${bgmUrl}` | Bangumi 页面链接 |
| `${episodeTitle}` | TMDB 集标题 |
| `${bgmEpisodeTitle}` | Bangumi 中文集标题 |
| `${bgmJpEpisodeTitle}` | Bangumi 日文集标题 |

番剧信息取决于订阅已获取的数据。无法获取集标题时会回退为「第 N 集」。通知模板与重命名模板的变量不完全相同，`${itemTitle}`、`${resolution}` 不适用于通知模板。

#### 渠道专用变量

| 变量 | 使用位置 | 说明 |
| --- | --- | --- |
| `${notification}` | 渠道模板、Webhook 的 URL / Body | 全局模板生成的完整通知正文 |
| `${comment}` | 渠道模板、Shell 命令 | 当前通知配置的备注，未填写时为「无备注」 |
| `${image}` | Webhook 的 URL / Body | 封面链接 |
| `${imageBase64}` | Webhook 的 Body | 封面 Base64 内容 |

## 常见问题

### 测试能收到，实际事件没有通知

依次确认：

1. 修改后已点击设置页的「保存」。
2. 通知配置已启用，且勾选了实际发生的事件状态。
3. 对应订阅已开启「通知」。
4. 使用的下载器支持该事件；「订阅完结」「缺集」「摸鱼检测」还需开启对应功能。

测试使用示例事件，不代表所有实际触发条件都已满足。

### Docker 中应该填写哪个地址

服务地址必须能从 **ANI-RSS 容器内部** 访问。同一 Docker 网络内可使用服务名，例如 `http://astrbot:6185`；其他部署方式填写可达的主机地址和映射端口。

`127.0.0.1` 指向 ANI-RSS 自身所在的网络环境，不能直接用它访问另一个独立容器。文件移动使用的目录也必须映射进 ANI-RSS 容器。

### AstrBot 返回错误或目标会话收不到消息

| 现象 | 排查方向 |
| --- | --- |
| HTTP 401 | API Key 是否正确、是否已被撤销 |
| HTTP 403 | API Key 是否具有 `im` 权限；发送图片时还需 `file` 权限 |
| HTTP 404 或响应格式不正确 | 服务根地址、反向代理路径和 AstrBot 版本是否正确 |
| 目标会话未收到 | UMO 是否来自目标会话、对应机器人是否在线，查看测试反馈和 AstrBot 日志 |

### 文件没有移动或上传

确认已选择「下载完成」，并检查订阅的「通知」开关、下载器支持情况及 ANI-RSS 对源文件的访问权限。

文件移动的「测试」不执行移动，OpenList 上传的「测试」也不会上传文件。实际处理失败时，请结合 ANI-RSS 日志检查本地路径、目标目录和访问凭据。
