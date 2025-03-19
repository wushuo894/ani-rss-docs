# 下载设置

<img src="/screenshot/73147386fca70f09e22aadac950f93a1-download-screenshot.png" alt="download-screenshot" id="download-screenshot">

## 下载工具

<div>
<img src="/image/tr.png" alt="transmission" width="60">
<img src="/image/qb.png" alt="qbittorrent" width="60">
<img src="/image/aria2.png" alt="qbittorrent" width="60">
</div>

- `ani-rss` 支持 **Transmission**、**qBittorrent**、**Aria2** 三种下载工具。
- 受 `api` 限制 `ani-rss`的支持情况如下

<div style="overflow-x: auto;">
<div style="width: 1050px;">

| 名称           | 自动下载 | 下载时重命名 | 下载时复杂解构重命名 | 下载完成后重命名 | 做种时修改下载位置 | 下载完成通知 | AList自动上传 |
|--------------|------|--------|------------|----------|-----------|--------|-----------|
| qBittorrent  | ✅    | ✅      | ✅          | ✅        | ✅         | ✅      | ✅         |
| Transmission | ✅    | ✅      | ❌          | ✅        | ✅         | ✅      | ✅         |
| Aria2        | ✅    | ❌      | ❌          | ✅        | ❌         | ❌      | ❌         |
| Alist        | ✅    | ❌      | ❌          | ✅        | ❌         | ❌      | ❌         |

</div>
</div>

*（强烈推荐使用 **qBittorrent**）*

::: details qBittorrent设置

1. 在设置面板中打开WebUI并设置用户名和密码。

![qBittorrent设置](/image/qBittorrent_settings.png)

2. 在浏览器中打开 `http://localhost:8989`
   （注意将端口号改为与设置qBittorrent中一致）。不出意外的话应该能进入WebUI，登陆成功后应该能见到如下页面，说明`qBittorrent`
   端设置无误。（如果无法打开页面，请重新检查`qBittorrent`的设置）

![qBittorrent页面](/image/qBittorrent_WebUI.png)

3. 在`ani-rss`中将上述的地址，用户名，密码填入后点击`测试`。

![qBittorrent测试](/image/qBittorrent_test.png)

如果出现`登陆成功`则说明设置成功。

:::

::: warning Alist
请在 alist -> 设置-> 其他 -> 配置临时目录

支持使用alist离线下载到115、PikPak
:::

::: warning
**使用docker部署时, 务必让 `ani-rss` 与 `下载器` 路径保持一致**

你也可以参考 [附带qBittorrent的Docker Compose 部署](/deploy/docker#all-docker-compose)

或者观看 [视频教程](/deploy/docker#video)
:::

::: info 不支持下载时重命名会导致的问题

在视频文件未重命名时已经有 emby 生成视频缩略图 .nfo 元数据,
当重命名后还会再次生成一次。且重命名后的视频再次被刮削到时 emby 无法触发 Webhook 通知。

个人喜欢设置 [Emby](https://emby.media/) 的 Webhook 通知让 [EmbyPinyin](https://github.com/wushuo894/EmbyPinyin)
处理中文拼音首字母索引

:::

## 保存位置 {id=save-path}

下载器的保存位置

::: warning
如果为空则 `不会进行下载`
:::

## 剧场版保存位置

如果为空则使用 [保存位置](#save-path)

## 自动删除 { id=auto-delete }

自动删除已完成的任务, 不会删除本地文件

如果同时开启了 [备用rss](/config/basic/rss#back-rss) 将会自动删除对应洗版视频, 以实现 `主rss` 的替换

### 等待做种完毕

等待做种完成后才会删除任务

::: warning
推荐等待做种，否则可能被 [PeerBanHelper](https://github.com/PBH-BTN/PeerBanHelper) 标记为吸血
:::

### 仅在主RSS更新后删除备用RSS

主RSS将 `不会自动删除`，仅在其更新后删除对应 `备用RSS` 的任务与文件

## 拼音首字母

用于整理番剧到 `A-Z` 文件夹中, 如一下结构:

```txt
├── A
│   └── 安达与岛村
│       └── S01
│           ├── 安达与岛村 S01E01.mp4
│           ├── 安达与岛村 S01E02.mp4
│           ├── 安达与岛村 S01E03.mp4
│           └── 安达与岛村 S01E04.mp4
├── B
│   └── BanG Dream! It's MyGO!!!!!
│       └── S01
│           ├── BanG Dream! It's MyGO!!!!! S01E01.mp4
│           ├── BanG Dream! It's MyGO!!!!! S01E02.mp4
│           ├── BanG Dream! It's MyGO!!!!! S01E03.mp4
```

## 季度

将番剧存放于 `yyyy-MM` 下 如 `2024-07`

## 同时下载限制

防止同时下载任务过多导致 **qBittorrent** 卡死

强烈建议视性能设置, 推荐 `3-5`

## 延迟下载

主要用于需要同步到网盘的场景

一般30分钟后就支持秒传了

## 检测是否死种

RSS更新后添加下载任务时如果出现异常则会发送 [通知](/config/message)
