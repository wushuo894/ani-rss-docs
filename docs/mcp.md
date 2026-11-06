# 🤖 MCP 工具

MCP 可让支持 Streamable HTTP 的客户端查询、添加和管理 ANI-RSS 订阅。

## 连接 {#connection}

1. 启动程序时设置环境变量 `MCP_ENABLED=true`，或添加启动参数 `--mcp-enabled=true`。
2. 客户端传输类型选择 Streamable HTTP，端点填写 `http://你的地址:7789/api/mcp`。使用反向代理子路径时，地址应包含该前缀。
3. 请求头填写 `api-key: 你的APIKey`，Key 从[安全设置](/config/security#api-key)复制。
4. 客户端请求超时可设为 `30` 秒，执行超时可设为 `300` 秒；搜索和 RSS 解析依赖程序到源站的网络。

工具的精确参数结构以连接后客户端发现的 Schema 为准。普通 REST 接口的路径与参数不能直接当作 MCP 工具参数使用。

## 工具列表

| 工具 | 用途与主要参数 |
| --- | --- |
| `list_subscriptions` | 查询已有订阅；`enabled` 为 `true` / `false` 时筛选启用 / 禁用，不传则返回全部 |
| `search_mikan` | 获取 Mikan 番剧，支持 `text` 关键词与 `season` 季度条件 |
| `search_anibt` | 获取 AniBT 番剧列表，当前不接收关键词参数 |
| `search_anime_garden` | 获取 AnimeGarden 番剧列表，当前不接收关键词参数 |
| `get_mikan_groups` | 按 Mikan 番剧页面 URL 获取字幕组 RSS |
| `get_anibt_groups` | 按 Bangumi 条目 ID 获取 AniBT 字幕组 RSS |
| `get_anime_garden_groups` | 按 Bangumi 条目 ID 获取 AnimeGarden 字幕组 RSS |
| `rss_to_subscription` | 根据 RSS 及来源类型解析完整订阅；可传 Bangumi 链接、字幕组、启用状态和备用 RSS |
| `preview_subscription_items` | 传入完整订阅对象，预览匹配、排除、集数偏移等规则处理后的条目 |
| `add_subscription` | 添加完整订阅对象，默认拒绝重复，不提供覆盖参数 |
| `edit_subscription` | 修改已有订阅，需提交保留原 `id` 的完整对象 |
| `delete_subscription` | 按 `ids` 列表删除一条或多条订阅；`deleteFiles` 默认 `false` |

## 添加订阅

推荐流程：

1. 使用搜索和字幕组工具找到目标 RSS。
2. 调用 `rss_to_subscription`，`type` 使用 `mikan`、`ani-bt`、`anime-garden` 或 `other` 中对应的来源类型。
3. 在返回的完整订阅对象上调整标题、季、偏移、匹配规则、备用 RSS 等字段。
4. 调用 `preview_subscription_items`，确认结果符合预期。
5. 将完整对象传给 `add_subscription`。

同 ID 或同标题、同季的重复订阅会报错。已有订阅的变更应使用编辑工具，重复规则见[添加订阅](/add-rss#duplicate-subscriptions)。

## 编辑订阅

先调用 `list_subscriptions` 取得目标订阅的完整对象，保留 `id` 与无需修改的字段，仅调整需要变更的内容，再传入 `edit_subscription`。它不是仅提交几个字段的补丁接口。

调整匹配、排除、RSS 或偏移后，可以先预览修改后的完整对象，再保存。

## 删除订阅

`ids` 是要删除的订阅 ID 列表，`deleteFiles` 控制是否一并删除下载数据：

- 不传或为 `false`：删除订阅，保留下载器任务和本地视频。
- 为 `true`：还会删除相关下载器任务和本地视频文件。

需要保留媒体时使用默认值。删除后若要恢复订阅，可使用事先导出的[备份](/config/basic/backup)；备份不包含视频文件。
