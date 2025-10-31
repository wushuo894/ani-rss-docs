# 重命名设置

自动命名视频和字幕文件，便于媒体库刮削识别

```log:line-numbers
2024-09-01 13:29:06.865 [rss-task-thread] INFO ani.rss.util.TorrentUtil - 添加下载 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:06.866 [rss-task-thread] INFO ani.rss.util.TorrentUtil - 下载种子 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:46.352 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].mkv ==> Wonderful 光之美少女！ S01E31.mkv
2024-09-01 13:29:46.362 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].cht.ass ==> Wonderful 光之美少女！ S01E31.cht.ass
2024-09-01 13:29:46.365 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].chs.ass ==> Wonderful 光之美少女！ S01E31.chs.ass
2024-09-01 13:38:49.392 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 删除已完成任务 Wonderful 光之美少女！ S01E31
```

### 自动重命名

启用后，下载完成的文件将根据模板自动重命名

::: info
重命名操作不会影响 BT 做种
:::

### 重命名间隔

设置重命名任务的执行间隔，单位为分钟

### 最大文件名长度

设置文件名的最大长度，超过该长度将自动截断。长度计算不包含文件扩展名。

例如：`S01E01.mkv` 的文件名长度为 6（不包含 `.mkv`）。请根据你的预期效果设置该值（建议设置为预期长度减 4）。

### 重命名模板 {#rename-template}

::: info 默认模板

```txt
[${subgroup}] ${title} S${seasonFormat}E${episodeFormat}
```

:::

::: warning
模板中至少需要保留 `S${seasonFormat}E${episodeFormat}` 或 `S${season}E${episode}`，否则将无法正常重命名
:::

<div style="overflow-x: auto;">
<div style="width: 1200px;">

| 数据                                             | 模板                     | 结果示例                                                                    |  
|------------------------------------------------|------------------------|-------------------------------------------------------------------------|
| 标题                                             | `${title}`             | `Re：从零开始的异世界生活`                                                         |  
| TMDB 标题                                        | `${themoviedbName}`    | `Re：从零开始的异世界生活`                                                         |  
| Bangumi 日文标题                                   | `${jpTitle}`           | `Re:ゼロから始める異世界生活`                                                       |  
| 字幕组                                            | `${subgroup}`          | `ANi`                                                                   |   
| 季                                              | `${seasonFormat}`      | `01`                                                                    |   
| 季                                              | `${season}`            | `1`                                                                     |  
| 集                                              | `${episodeFormat}`     | `01`                                                                    |  
| 集                                              | `${episode}`           | `1`                                                                     |  
| 原始标题                                           | `${itemTitle}`         | `[ANi] Re：从零开始的异世界生活 第三季 - 01 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]` |  
| 分辨率                                            | `${resolution}`        | `720p`、`1080p`、`2160p`                                                  |
| TMDB ID                                        | `${tmdbid}`            | `65942`                                                                 |
| 集标题（通过 [TMDB](https://www.themoviedb.org/) 获取） | `${episodeTitle}`      | `起始的终结与终结的起始`、`再会的魔女`、`从零开始的异世界生活`                                      |
| 集标题（通过 [Bangumi](https://bgm.tv/) 获取）          | `${bgmEpisodeTitle}`   | `起始的终结与终结的起始`、`再会的魔女`、`从零开始的异世界生活`                                      |
| 日文集标题（通过 [Bangumi](https://bgm.tv/) 获取）        | `${bgmJpEpisodeTitle}` | `始まりの終わりと終わりの始まり`、`再会の魔女`、`ゼロから始まる異世界生活`                                |

</div>
</div>

### 剔除年份

重命名时自动剔除文件名中的年份信息，例如：`(2024)`

### 剔除 TMDB ID

重命名时自动剔除文件名中的 TMDB ID 标识，例如：`[tmdbid=242143]`
