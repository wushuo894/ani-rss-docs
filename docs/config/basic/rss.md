## RSS 设置

### RSS开关

RSS开关

### RSS间隔

RSS间隔, 单位 分钟

### 自动跳过

自动检测季度文件夹下是否已经下载某集

::: warning
此选项 **必须启用自动重命名**。确保 **下载工具** 与 **ani-rss** 的 docker 映射挂载路径 **保持一致**
:::

#### docker映射挂载

如:

ani-rss:

```bash
docker run -d \
--name ani-rss \
-v /volume1/docker/ani-rss/config:/config \
-v /volume2/Media:/Media \
-p 7789:7789 \
-e PORT="7789" \
-e CONFIG="/config" \
-e TZ=Asia/Shanghai \
--restart always \
wushuo894/ani-rss
```

qbittorrent:

```bash
docker run -d --name qbittorrent \
-v /volume1/docker/qbittorrent/config:/config \
-v /volume2/downloads:/downloads \
-v /volume2/Media:/Media \
-p 8080:8080 \
-p 6881:6881 \
-e TZ=Asia/Shanghai \
--restart always \
linuxserver/qbittorrent
```

其中 ani-rss 设置中的 **保存位置** 位于 `/Media` 下

两者 `/Media` 挂载路径一致 `-v /volume2/Media/:/Media`

截图示例：

![Xnip2024-11-05_06-13-47.png](/image/Xnip2024-11-05_06-13-47.png)

![Xnip2024-11-05_06-13-22.png](/image/Xnip2024-11-05_06-13-22.png)

::: warning
确保 下载工具 与 ani-rss 的 docker 映射挂载路径一致
:::

### 自动禁用订阅

根据 Bangumi 获取总集数 当所有集数都已下载时自动禁用该订阅

### 自动跳过X.5集

程序本身是 **不支持** .5的重命名的，因为.5和S00E0X没有 **明确的关系**

### 遗漏检测

检测最小集数与最大集数之前是否存在遗漏

若有遗漏会自动发送通知

### 备用RSS { #back-rss }

优先下载备用RSS

#### 如何洗版？

推荐使用默认重命名模版

对 tr 与 aria2 的兼容性 不太稳定

开启 自动删除

关闭 自动跳过

(需要映射路径与下载器一致，否则若旧视频为mp4新视频为mkv时无法完成自动删除旧视频。)

(windows自动删除旧视频可能会出现文件被占用无法删除的问题)

