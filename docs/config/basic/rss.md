## RSS 设置

### RSS开关

RSS开关

### RSS间隔

RSS间隔, 单位 分钟

### 自动跳过 {#auto-skip}

自动检测季度文件夹下是否已经下载某集

::: warning
此选项 **必须启用自动重命名**。确保 **下载工具**、**ani-rss** 的 docker 映射挂载路径 **保持一致**

你也可以参考 [附带qBittorrent的Docker Compose 部署](/deploy/docker#all-docker-compose)

或者观看 [视频教程](/deploy/docker#video)
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

```md
推荐使用默认重命名模版
对 tr 与 aria2 的兼容性 不太稳定
```

- 开启 自动删除

- 关闭 自动跳过

::: warning
需要映射路径与下载器一致，否则若旧视频为mp4新视频为mkv时无法完成自动删除旧视频。

windows平台开启自动删除可能会出现文件被占用无法删除的问题, 这是windows的特性(💩)
:::