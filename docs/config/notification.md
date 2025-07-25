# 通知

### 通知模版示例

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

::: info webhook
`${notification}` 会自动替换为信息

`${image}` 会自动替换为图片链接
:::

::: details 具体解释

<div style="overflow-x: auto;">
<div style="width: 1200px;">

| 数据                                                   | 模版                     | 结果示例                                                                    |  
|------------------------------------------------------|------------------------|-------------------------------------------------------------------------|
| Emoji                                                | `${emoji}`             | `🎈、🎉、⚠、❌、🙌、🎊、🐟`                                                    |
| 事件类型                                                 | `${action}`            | `开始下载、下载完成、缺少集数、发生错误、Alist上传通知、订阅完结、摸鱼检测`                               |
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

### 通知状态

开始下载、下载完成、缺集、错误、订阅完结

::: warning
下载完成通知暂不支持 Aria2

订阅完结通知 需要同时开启 [自动禁用订阅](/config/basic/rss#自动禁用订阅) 功能
:::

## 通知方式

<img src="/screenshot/286fd4f8eb5e70a8664b2f63ef5f18ef-msg-screenshot.webp" alt="msg-screenshot" id="msg-screenshot">

::: info TG通知
[Creating a new bot](https://core.telegram.org/bots/features#botfather:~:text=and%20managing%20bots.-,Creating%20a%20new%20bot,-Use%20the%20/newbot)
:::

::: details 邮箱通知

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

### QQ邮箱密码 { id=qq-mail-password }

**以下请在电脑网页端操作** <https://mail.qq.com>

- `设置 - 账号 - POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务`
- `开启服务并生成授权码`

:::

::: info Server酱
[Server酱³ 使用说明书](https://doc.sc3.ft07.com/)
:::

::: details Emby媒体库刷新

### EmbyHost

填写emby的服务器地址, 例: `http://192.168.5.4:8096`

### Emby密钥

在 `emby` -> `设置` -> `高级` -> `API密钥` -> `创建一个密钥`

### 媒体库

选择刷新的媒体库

### 延迟

推迟刷新媒体库的时机

:::
