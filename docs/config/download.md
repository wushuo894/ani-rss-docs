# 下载设置

<img src="/image/screenshot/download-screenshot.webp" alt="download-screenshot" class="light-only">
<img src="/image/screenshot/download-screenshot-dark.webp" alt="download-screenshot" class="dark-only">

## 下载工具

<div>
<img src="/image/Transmission.webp" alt="transmission" width="60">
<img src="/image/Qbittorrent.webp" alt="qbittorrent" width="60">
<img src="/image/Aria2.webp" alt="aria2" width="60">
<img src="/image/OpenList.webp" alt="OpenList" width="60">
</div>

- `ani-rss` 支持 **Transmission**、**qBittorrent**、**Aria2**、**OpenList** 四种下载工具
- 由于各下载工具的 API 限制，`ani-rss` 对各工具的功能支持情况如下

<div style="overflow-x: auto;">
<div style="width: 1400px;">

| 名称           | 版本         | 自动下载 | 下载时重命名 | 下载时复杂解构重命名 | 下载完成后重命名 | 做种时修改下载位置 | 下载完成通知 | OpenList自动上传 | 自动刮削 |
|--------------|------------|------|--------|------------|----------|-----------|--------|--------------|------|
| qBittorrent  | `5.0.4`    | ✅    | ✅      | ✅          | ✅        | ✅         | ✅      | ✅            | ✅    |
| Transmission | `4.0.6-27` | ✅    | ✅      | ❌          | ✅        | ✅         | ✅      | ✅            | ✅    |
| Aria2        | `1.37.0-2` | ✅    | ❌      | ❌          | ✅        | ❌         | ❌      | ❌            | ❌    |
| OpenList     | `3.44.0`   | ✅    | ❌      | ❌          | ✅        | ❌         | ✅      | ❌            | ❌    |

</div>
</div>

> **强烈推荐使用 qBittorrent**

::: details qBittorrent 设置

1. 在设置面板中打开 WebUI 并设置用户名和密码

![qBittorrent设置](/image/qBittorrent_settings.webp)

2. 在浏览器中打开 `http://localhost:8989`
   （注意将端口号改为与 qBittorrent 设置中一致）。正常情况下应该能进入 WebUI，登录成功后应该能看到如下页面，说明 qBittorrent
   端设置无误（如果无法打开页面，请重新检查 qBittorrent 的设置）

![qBittorrent页面](/image/qBittorrent_WebUI.webp)

3. 在 `ani-rss` 中将上述的地址、用户名、密码填入后点击 `测试`

![qBittorrent测试](/image/qBittorrent_test.webp)

如果出现 `登录成功` 则说明设置成功

:::

::: warning OpenList
请在 OpenList -> 设置 -> 其他 -> 配置临时目录

支持使用 OpenList 离线下载到 115、PikPak、迅雷云盘
:::

::: warning
**使用 Docker 部署时，务必让 `ani-rss` 与 `下载器` 路径保持一致**
:::

::: info 不支持下载时重命名会导致的问题

在视频文件未重命名时已经有 Emby 生成视频缩略图 .nfo 元数据，当重命名后还会再次生成一次。且重命名后的视频再次被刮削到时
Emby 无法触发 Webhook 通知。

个人推荐设置 [Emby](https://emby.media/) 的 Webhook 通知让 [EmbyPinyin](https://github.com/wushuo894/EmbyPinyin)
处理中文拼音首字母索引

:::

## 保存位置 {id=save-path}

下载器的保存位置

::: info 默认保存位置

```txt
/Media/番剧/${letter}/${title}/Season ${season}
```

:::

<div style="overflow-x: auto;">
<div style="width: 500px;">

| 数据      | 模版                  | 结果示例               |  
|---------|---------------------|--------------------|
| 拼音首字母   | `${letter}`         | `0、#、A、B、C、D...Z`  |
| 年份      | `${year}`           | `2024、2025`        |
| 月份      | `${month}`          | `1、2、3、4...12`     |
| 月份      | `${monthFormat}`    | `01、02、03、04...12` |
| 季度      | `${quarter}`        | `1、4、7、10`         |
| 季度      | `${quarterFormat}`  | `01、04、07、10`      |
| 季度      | `${quarterName}`    | `冬、春、夏、秋`          |
| 标题      | `${title}`          | `Re：从零开始的异世界生活`    |  
| TMDB_ID | `${tmdbid}`         | `65942`            |  
| TMDB标题  | `${themoviedbName}` | `Re：从零开始的异世界生活`    |  
| bgm日文标题 | `${jpTitle}`        | `Re:ゼロから始める異世界生活`  |  
| 字幕组     | `${subgroup}`       | `ANi`              |
| 季       | `${season}`         | `1`                |
| 季       | `${seasonFormat}`   | `01`               |   

</div>
</div>

## 剧场版保存位置

::: info 默认剧场版保存位置

```txt
/Media/剧场版/${letter}/${title}
```

:::

## 自动删除 {id=auto-delete}

自动删除已完成的任务，不会删除本地文件

如果同时开启了 [备用 RSS](/config/basic/rss#back-rss) 将会自动删除对应洗版视频，以实现 `主 RSS` 的替换

### 等待做种完毕

等待做种完成后才会删除任务

::: warning
推荐等待做种，否则可能被 [PeerBanHelper](https://github.com/PBH-BTN/PeerBanHelper) 标记为吸血
:::

### 仅在主 RSS 更新后删除备用 RSS

主 RSS 将 `不会自动删除`，仅在其更新后删除对应 `备用 RSS` 的任务与文件

## 失败重试次数

添加到下载器时遇到错误的重试次数

## 同时下载限制

防止同时下载任务过多导致 **qBittorrent** 卡死

强烈建议根据性能设置，推荐 `3-5`

## 延迟下载

`种子发布时间` + `延迟下载时间` = `下载时间`

主要用于需要同步到网盘的场景

一般 30 分钟后就支持秒传了

## 检测添加失败

RSS 更新后添加下载任务时如果出现异常则会发送 [通知](/config/notification)
