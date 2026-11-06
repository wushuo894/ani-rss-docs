# 通知

可以添加多条通知配置，分别选择通知类型、触发状态、备注、顺序、重试和启用开关。配置按“顺序”值从小到大提交处理；可先用“测试”确认配置，再保存设置。

订阅自身的“通知”也需要开启。关闭该开关会跳过此订阅的所有通知处理，包括文件移动和 OpenList 上传。

### 通知模板示例

```txt
${emoji}${emoji}${emoji}
事件类型: ${action}
标题: ${title}
BGM日文标题: ${jpTitle}
评分: ${score}
TMDB标题: ${themoviedbName}
TMDB_ID: ${tmdbid}
TMDB链接: ${tmdburl}
BGM: ${bgmUrl}
季: ${season}
集: ${episode}
字幕组: ${subgroup}
进度: ${currentEpisodeNumber}/${totalEpisodeNumber}
首播:  ${year}年${month}月${date}日
事件: ${text}
下载位置: ${downloadPath}
TMDB集标题: ${episodeTitle}
BGM集标题: ${bgmEpisodeTitle}
BGM日文集标题: ${bgmJpEpisodeTitle}
${emoji}${emoji}${emoji}
```

::: info Webhook
`${notification}` 会自动替换为信息

`${image}` 会自动替换为图片链接

`${imageBase64}` 会自动替换为图片的 base64 编码，默认不带前缀，如果你需要带前缀的 base64 图片，请在模板中自行添加，例如：
`data:image/png;base64,${imageBase64}`，或者有些 bot 支持 `base64://${imageBase64}`
:::

::: details 具体解释

<div style="overflow-x: auto;">
<div style="width: 1200px;">

| 数据                                                   | 模版                     | 结果示例                                                                    |  
|------------------------------------------------------|------------------------|-------------------------------------------------------------------------|
| Emoji                                                | `${emoji}`             | `🎈、🎉、⚠、❌、🙌、🎊、🐟`                                                    |
| 事件类型                                                 | `${action}`            | `开始下载、下载完成、缺少集数、发生错误、订阅完结、摸鱼检测`                            |
| 标题                                                   | `${title}`             | `Re：从零开始的异世界生活`                                                         |  
| TMDB标题                                               | `${themoviedbName}`    | `Re：从零开始的异世界生活`                                                         |  
| BGM日文标题                                              | `${jpTitle}`           | `Re:ゼロから始める異世界生活`                                                       |  
| 字幕组                                                  | `${subgroup}`          | `ANi`                                                                   |   
| 季                                                    | `${seasonFormat}`      | `01`                                                                    |   
| 季                                                    | `${season}`            | `1`                                                                     |  
| 集                                                    | `${episodeFormat}`     | `01`                                                                    |  
| 集                                                    | `${episode}`           | `1`                                                                     |  
| 原始标题                                                 | `${itemTitle}`         | `[ANi] Re：从零开始的异世界生活 第三季 - 01 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]` |  
| 分辨率                                                  | `${resolution}`        | `720p`、`1080p`、`2160p`                                                  |
| TMDB_ID                                              | `${tmdbid}`            | `65942`                                                                 |
| 集标题(`通过` [TMDB](https://www.themoviedb.org/) `获取到的`) | `${episodeTitle}`      | `起始的终结与终结的起始`、`再会的魔女`、`从零开始的异世界生活`                                      |
| 集标题(`通过` [Bangumi](https://bgm.tv/) `获取到的`)          | `${bgmEpisodeTitle}`   | `起始的终结与终结的起始`、`再会的魔女`、`从零开始的异世界生活`                                      |
| 日文集标题(`通过` [Bangumi](https://bgm.tv/) `获取到的`)        | `${bgmJpEpisodeTitle}` | `始まりの終わりと終わりの始まり`、`再会の魔女`、`ゼロから始まる異世界生活`                                |

</div>
</div>
:::

### 通知状态 {#notification-status}

开始下载、下载完成、缺集、错误、订阅完结、摸鱼检测。每条通知可以选择多个状态；摸鱼检测还需开启全局和订阅级的[摸鱼检测](/config/basic/rss#procrastinating)。

::: warning
下载完成通知暂不支持 Aria2

订阅完结通知 需要同时开启 [自动禁用订阅](/config/basic/rss#自动禁用订阅) 功能
:::

## 通知方式

支持 Telegram、邮箱、Server 酱、Bark、Webhook、系统通知、Shell、Emby 媒体库刷新、文件移动和 OpenList 上传。

<img src="/image/screenshot/notification-screenshot.webp" alt="notification-screenshot" class="light-only dialog-screenshot">
<img src="/image/screenshot/notification-screenshot-dark.webp" alt="notification-screenshot" class="dark-only dialog-screenshot">

::: info TG通知
[Creating a new bot](https://core.telegram.org/bots/features#botfather:~:text=and%20managing%20bots.-,Creating%20a%20new%20bot,-Use%20the%20/newbot)
:::

### Telegram

填写 API Host、Bot Token 和 ChatId。可点击 ChatId 旁的刷新按钮获取会话，再选择目标会话。群组话题可填写“话题ID”，设为 `-1` 时不指定话题。

“图片”决定是否附带封面；格式可选 None、Markdown 或 HTML，模板需使用与所选格式兼容的内容。

::: details 邮箱通知

“收件人邮箱”支持多个地址，用英文逗号或分号分隔，例如 `first@example.com,second@example.com`。发件账号与收件人可以不同。

### QQ邮箱设置示例

| 参数名      | 参数值                         |
|----------|-----------------------------|
| SMTP地址   | `smtp.qq.com`               |
| SMTP端口   | `465`                       |
| 发件人邮箱    | `[qq号]@qq.com`              |
| 密码       | [QQ邮箱密码](#qq-mail-password) |
| SSL      | 开启✅                         |
| STARTTLS | 关闭❌                         |
| 收件人邮箱    | `[qq号]@qq.com`              |
| 图片       | 开启✅                         |

### QQ邮箱密码 {#qq-mail-password}

**以下请在电脑网页端操作** <https://mail.qq.com>

- `设置 - 账号 - POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务`
- `开启服务并生成授权码`

:::

::: info Server酱
[Server酱³ 使用说明书](https://doc.sc3.ft07.com/)
:::

### Bark

填写 `ServerUrl` 和一个或多个 `DeviceKeys`。可设置通知模板、分组 `Group`、提示级别 `Level` 和音量 `Volume`；`Other` 中可开启 `Use Markdown`。

### Webhook

设置 HTTP 方法、URL、Header 和 Body，可用于接入自己的消息服务。正文可使用本页的通知变量，`${notification}` 为生成的完整通知文字。JSON 请求需设置匹配的 Content-Type，并确保变量替换后的正文仍是有效 JSON。

### 系统通知

在程序运行所在的系统上发送桌面通知，可设置通知模板。Docker 或无桌面环境中，不应将其作为客户端桌面通知使用。

### Shell

在 ANI-RSS 所在设备执行命令，支持通知模板变量。“存活限制”的单位为秒，超过限制会尝试停止进程。Windows 使用 `cmd.exe /c`，其他系统使用 `sh -c`；命令、路径与依赖必须在程序运行环境中可用。“测试”也会实际执行填写的命令。

::: details Emby媒体库刷新

**EmbyHost:** 填写emby的服务器地址, 例: `http://192.168.5.4:8096`

**Emby密钥:** 在 `emby` -> `设置` -> `高级` -> `API密钥` -> `创建一个密钥`

**媒体库:** 选择刷新的媒体库

**延迟:** 推迟刷新媒体库的时机

:::

::: details 文件移动

**⚠️仅支持设置为下载完成通知**

**作用:** 文件移动仅支持下载完成通知, 开发目的是为了配合CD2网盘挂载。自动将下载完成的视频移动到挂载目录以达到上传的目的

**注意:** 使用QB下载器请勾选设置中的选项 `为不完整的文件添加扩展名 "!.QB"`

分别设置番剧和剧场版的目标位置，支持[保存位置模板变量](/config/download#save-path)。开启“复制模式”会保留源文件；未开启时复制成功后删除源文件。“删除旧的同集文件”用于清理目标位置的旧版本，实现洗版。

移动和复制操作发生在 ANI-RSS 所在设备，目标挂载目录必须对该进程可见。

:::

### OpenList 上传 {#openlist-upload}

::: details 配置说明

**⚠️仅支持设置为下载完成通知**

自动将下载完成的文件上传至 `OpenList`

**Host:** `OpenList` 的 `HTTP` 地址

**ApiKey:** 令牌，可在 `OpenList 网页 -> 管理 -> 设置 -> 其他 -> 令牌` 找到

分别填写番剧和剧场版的上传位置，路径指 OpenList 中的目标目录，支持[保存位置模板变量](/config/download#save-path)。订阅的“自定义上传”可覆盖该目标路径。

- **上传完成后删除本地文件：** 上传成功后删除本地副本，开启前应确认这符合本地保留和做种需求。
- **删除旧的同集文件：** 清理目标位置同集旧版本，以便洗版。

OpenList 下载器已移除，但这里的上传通知仍可使用。触发状态选择“下载完成”，没有独立的“OpenList上传通知”事件。
:::
