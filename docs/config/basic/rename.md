# 重命名设置

自动命名视频与字幕让其易于刮削

```log:line-numbers
2024-09-01 13:29:06.865 [rss-task-thread] INFO ani.rss.util.TorrentUtil - 添加下载 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:06.866 [rss-task-thread] INFO ani.rss.util.TorrentUtil - 下载种子 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:46.352 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].mkv ==> Wonderful 光之美少女！ S01E31.mkv
2024-09-01 13:29:46.362 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].cht.ass ==> Wonderful 光之美少女！ S01E31.cht.ass
2024-09-01 13:29:46.365 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].chs.ass ==> Wonderful 光之美少女！ S01E31.chs.ass
2024-09-01 13:38:49.392 [rename-task-thread] INFO ani.rss.util.TorrentUtil - 删除已完成任务 Wonderful 光之美少女！ S01E31
```

### 自动重命名

开启自动重命名

::: info
重命名不会影响做种
:::

### 重命名间隔

重命名间隔, 单位 分钟

### 季命名方式

设置季命名方式 如 `Season 1、Season 01、S1、S01、None`

::: info
设置为 `None` 则不会存在季文件夹
:::

### 重命名模版 {#rename-template}

<div style="overflow-x: auto;">
<div style="width: 1200px;">

| 数据                                                   | 模版                     | 结果示例                                                                    |  
|------------------------------------------------------|------------------------|-------------------------------------------------------------------------|
| 标题                                                   | `${title}`             | `Re：从零开始的异世界生活`                                                         |  
| TMDB标题                                               | `${themoviedbName}`    | `Re：从零开始的异世界生活`                                                         |  
| bgm日文标题                                              | `${jpTitle}`           | `Re:ゼロから始める異世界生活`                                                       |  
| 字幕组                                                  | `${subgroup}`          | `ANi`                                                                   |   
| 季                                                    | `${seasonFormat}`      | `01`                                                                    |   
| 季                                                    | `${season}`            | `1`                                                                     |  
| 集                                                    | `${episodeFormat}`     | `01`                                                                    |  
| 集                                                    | `${episode}`           | `1`                                                                     |  
| 原始标题                                                 | `${itemTitle}`         | `[ANi] Re：从零开始的异世界生活 第三季 - 01 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]` |  
| 分辨率                                                  | `${resolution}`        | `720p`、`1080p`、`2160p`                                                  |
| TMDB ID                                              | `${tmdbid}`            | `65942`                                                                 |
| 集标题(`通过` [TMDB](https://www.themoviedb.org/) `获取到的`) | `${episodeTitle}`      | `起始的终结与终结的起始`、`再会的魔女`、`从零开始的异世界生活`                                      |
| 集标题(`通过` [Bangumi](https://bgm.tv/) `获取到的`)          | `${bgmEpisodeTitle}`   | `起始的终结与终结的起始`、`再会的魔女`、`从零开始的异世界生活`                                      |
| 日文集标题(`通过` [Bangumi](https://bgm.tv/) `获取到的`)        | `${bgmJpEpisodeTitle}` | `始まりの終わりと終わりの始まり`、`再会の魔女`、`ゼロから始まる異世界生活`                                |

</div>
</div>

### 剔除年份

重命名时将会从模板 `${title}` 中剔除年份, 如 `(2024)`

### 剔除TMDB ID

重命名时将会从模板 `${title}` 中剔除 tmdbid, 如 `[tmdbid=242143]`
