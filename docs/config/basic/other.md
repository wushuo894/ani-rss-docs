# 其他配置

## Mikan 域名

自定义 Mikan 的访问域名，支持使用第三方镜像站或自建服务。

::: info **推荐镜像站：** `https://mikan.sakiko.de/`

可以设置为第三方蜜柑镜像站或您自己搭建的服务
:::

## TMDB API 地址

此设置现位于“基本设置 → 刮削设置”。API 地址、密钥和图片地址说明见[TMDB 接口配置](/config/basic/scrape)。

## TMDB API 密钥

设置自备的 TMDB API 密钥，用于获取影视作品的元数据信息；留空使用系统默认。入口同上。

## Bangumi Token

此设置现位于“基本设置 → Bangumi”，支持手工输入和自动获取、续期两种方式。配置步骤见[Bangumi 设置](/config/basic/bangumi)。

::: info

**自动点格子功能：** 设置 BgmToken 与 Emby Webhook 后，支持自动在 Bangumi 上标记观看进度
:::

### Emby Webhook 通知设置 {#emby-webhook}

在 Emby 中配置 Webhook 通知，实现与 Bangumi 的自动同步。

**配置步骤：** `Emby - 设置 - 通知 - 添加通知`

| 参数名                                     | 参数值                                           |
|--------------------------------------------|--------------------------------------------------|
| 名称                                       | `bgm`                                            |
| URL                                        | `http://[IP]:7789/api/embyWebHook?s=[ApiKey]`    |
| 请求内容类型                               | `application/json`                               |
| Events                                     | `播放`, `用户-标记为已播放`, `用户-标记为未播放` |
| 播放, 用户-标记为已播放, 用户-标记为未播放 | `番剧`                                           |

**如何查看 ApiKey：** 请参考 [API 密钥获取方法](/config/security#api-key)

::: info

**最佳实践：** 保持 Emby 与 ani-rss 的映射路径一致，可以获得更好的同步效果
:::

## ICS 日历 {#ics-calendar}

在“设置 → 基本设置 → 其他”点击“复制 ics”，将链接粘贴到日历应用的“订阅日历 / 通过 URL 添加”入口。

日历接口为 `/api/calendar.ics?api-key=你的APIKey`，只包含当前启用的订阅，按订阅首播日期生成日程；TV 条目按周重复，剧场版为单次日程。日期按 `Asia/Shanghai` 处理，不代表字幕组实际发布或下载完成时间。

订阅链接包含 API Key，应作为私密链接保存。重新生成 API Key 后需更新日历链接；刷新频率取决于日历客户端。

## GitHub Token

在“其他”中填写 GitHub Token，或点击“获取GithubToken”完成获取流程，用于程序访问 GitHub API，例如查询版本信息。Token 需要随设置保存，不必修改订阅内容。

## 系统设置

### 最大日志条数

设置系统保留的最大日志条数，超出限制的旧日志将被自动清理。

### 自动更新

系统将在每天 06:00 自动检查并更新程序。

::: info

**更新范围：** 仅进行小版本号更新（如：`1.2.x`），不会自动更新主版本号
:::

### 调试模式

启用调试模式后，系统将显示 DEBUG 级别的详细日志信息，便于问题排查和系统监控。

**日志示例：**

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

### 缓存管理

清理系统中不再使用的缓存文件，释放存储空间并优化系统性能。

### 开机自启

通过“开机自启”开关管理支持环境中的自启动。Docker 和系统服务部署的启动策略应由容器或服务管理器配置；平台部署说明见[快速开始](/start)。

### 备份

自动备份、导出和导入已独立放在“基本设置 → 备份”，具体范围与覆盖行为见[备份与恢复](/config/basic/backup)。
