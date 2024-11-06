## 重命名设置

自动命名视频与字幕让其易于刮削

如:

```log
2024-09-01 13:29:06.865 [rss-task-thread] INFO ani.rss.util.TorrentUtil - 添加下载 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:06.866 [rss-task-thread] INFO ani.rss.util.TorrentUtil - 下载种子 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:46.352 [rename-task-thread] INFO ani.rss.util.TorrentUtil -
重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].mkv ==> Wonderful 光之美少女！
S01E31.mkv
2024-09-01 13:29:46.362 [rename-task-thread] INFO ani.rss.util.TorrentUtil -
重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].cht.ass ==> Wonderful 光之美少女！
S01E31.cht.ass
2024-09-01 13:29:46.365 [rename-task-thread] INFO ani.rss.util.TorrentUtil -
重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].chs.ass ==> Wonderful 光之美少女！
S01E31.chs.ass
2024-09-01 13:38:49.392 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 删除已完成任务 Wonderful 光之美少女！ S01E31
```

### 自动重命名

开启自动重命名

#### 重命名影响做种吗？

不会影响

### 重命名间隔

重命名间隔, 单位 分钟

### 季命名方式

设置季命名方式 如 **Season 1**、**Season 01**、**S1**、**S01**、**None**

设置为None则不会存在季文件夹

### 重命名模版 {#rename-template}

<div style="overflow-x: auto;">
<div style="width: 900px;">

| 数据   | 模版                 | 结果示例                                                                    |  
|------|--------------------|-------------------------------------------------------------------------|
| 标题   | `${title}`         | `Re：从零开始的异世界生活`                                                         |  
| 字幕组  | `${subgroup}`      | `ANi`                                                                   |   
| 季    | `${seasonFormat}`  | `01`                                                                    |   
| 季    | `${season}`        | `1`                                                                     |  
| 集    | `${episodeFormat}` | `01`                                                                    |  
| 集    | `${episode}`       | `1`                                                                     |  
| 原始标题 | `${itemTitle}`     | `[ANi] Re：从零开始的异世界生活 第三季 - 01 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]` |  
</div>
</div>

::: warning
请务必保留: `${title} S${seasonFormat}E${episodeFormat}`。

如果想使用洗版功能请不要在重命名模版添加 `${subgroup}、${itemTitle}`，

否则可能会出现 备用rss 洗版到 主rss 时出现错误。
:::

### 剔除年份

重命名时 ${title} 剔除 年份, 如 `(2024)`

### 剔除TMDB ID

重命名时 ${title} 剔除 tmdbid, 如 `[tmdbid=242143]`
