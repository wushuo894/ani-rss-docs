## 其他

### Mikan

自定义mikan的域名

::: info
可以设置为第三方蜜柑镜像站或者你自己搭建的

镜像站推荐 `https://mikan.sakiko.de/`
:::

### BgmToken

你可以在 [https://next.bgm.tv/demo/access-token](https://next.bgm.tv/demo/access-token)
生成一个 Access Token

::: info
设置 BgmToken 与 emby-webhook 后支持自动点格子
:::

#### Emby-Webhook通知设置 {#emby-webhook}

```md
名称: bgm
url: http://[IP]:7789/api/web_hook
请求内容类型: application/json
勾选: 播放, 用户-标记为已播放, 用户-标记为未播放
将媒体库事件限制为：番剧
```

如果你没有设置ApiKey, 默认只有内网能够访问webhook

设置ApiKey后请将url改为

```md
http://[IP]:7789/api/web_hook?s=[ApiKey]
```

::: info
保持 **emby** 与 **ani-rss** 的映射路径一致可以有更好的效果
:::

### 禁止公网访问

禁止公网访问

### 最大日志条数

最大日志条数

### 自动更新

每天 06:00 自动更新程序

### DEBUG

可以看到 debug 级别的日志

```log
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
