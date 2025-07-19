# 其他

### Mikan

自定义mikan的域名

::: info
可以设置为第三方蜜柑镜像站或者你自己搭建的

镜像站推荐 `https://mikan.sakiko.de/`
:::

### TmdbApi

tmdb的api调用地址

可以替换为镜像地址

### TmdbApiKey

tmdb密钥

### BgmToken

你可以在 [https://next.bgm.tv/demo/access-token](https://next.bgm.tv/demo/access-token)
生成一个 Access Token

::: info
设置 BgmToken 与 emby-webhook 后支持自动点格子
:::

#### Emby Webhook 通知设置 {#emby-webhook}

`Emby - 设置 - 通知 - 添加通知`

| 参数名                      | 参数值                             |
|--------------------------|---------------------------------|
| 名称                       | `bgm`                           |
| url                      | `http://[IP]:7789/api/web_hook` |
| 请求内容类型                   | `application/json`              |
| Events                   | `播放`, `用户-标记为已播放`, `用户-标记为未播放`  |
| 播放, 用户-标记为已播放, 用户-标记为未播放 | `番剧`                            |

如果你没有设置 [ApiKey](/config/login#api-key), 默认只有内网能够访问 `webhook`

设置 [ApiKey](/config/login#api-key) 后请将url改为 `http://[IP]:7789/api/web_hook?s=[ApiKey]`

::: info
保持 **emby** 与 **ani-rss** 的映射路径一致可以有更好的效果
:::

### 最大日志条数

最大日志条数

### 自动更新

每天 06:00 自动更新程序

自动更新仅会进行小版本号的更新 如: `1.2.x`

### DEBUG

可以看到 debug 级别的日志

```log:line-numbers
2024-09-03 14:26:01 INFO ani.rss.util.TorrentUtil - 已下载 深夜冲击 S01E01
2024-09-03 14:26:01 INFO ani.rss.util.TorrentUtil - 下载种子 深夜冲击 S01E01
2024-09-03 14:26:02 DEBUG ani.rss.util.TorrentUtil - 本地文件已存在 深夜冲击 S01E01
2024-09-03 14:26:02 DEBUG ani.rss.util.TorrentUtil - {
"title": "[ANi] Mayonaka Punch / 深夜 Punch - 02 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]",
"reName": "深夜冲击 S01E02",
"torrent": "https://mikanani.me/Download/20240715/1ef6e3168b72cef9a30edb9b97490158629ba7d0.torrent",
"episode": 2
}
2024-09-03 14:26:02 INFO ani.rss.util.TorrentUtil - 已下载 深夜冲击 S01E02
2024-09-03 14:26:02 INFO ani.rss.util.TorrentUtil - 下载种子 深夜冲击 S01E02
2024-09-03 14:26:03 DEBUG ani.rss.util.TorrentUtil - 本地文件已存在 深夜冲击 S01E02
2024-09-03 14:26:03 DEBUG ani.rss.util.TorrentUtil - {
"title": "[ANi] Mayonaka Punch / 深夜 Punch - 03 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]",
"reName": "深夜冲击 S01E03",
"torrent": "https://mikanani.me/Download/20240722/ec1ec2faf5356d4b363e42d99b799d31450bc34d.torrent",
"episode": 3
}
```

### 缓存

清理现在不被使用的缓存
