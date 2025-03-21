# Docker部署

<div>

![Docker Image Size (tag)](https://img.shields.io/docker/image-size/wushuo894/ani-rss/latest)
[![Docker Pulls](https://img.shields.io/docker/pulls/wushuo894/ani-rss)](https://hub.docker.com/r/wushuo894/ani-rss)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github)](https://github.com/wushuo894/ani-rss)
</div>

::: info docker镜像加速监控
<https://status.1panel.top/status/docker>
:::

<img src="/screenshot/62f73859bd2fb7063f7f1eff12545fec-screenshot.png" alt="screenshot" id="screenshot">

::: info 默认账号

用户名: `admin` 密码: `admin`
:::

::: warning
**使用docker部署时, 务必让 `ani-rss` 与 `下载器` 路径保持一致**
:::

::: details 视频教程 {id=video}

[阿里云盘](https://www.alipan.com/s/eqt2XLZJThu)

<div style="overflow-x: auto;">
<iframe 
width="560" 
height="315" 
src="https://www.youtube.com/embed/y9-mgvnSnxs?si=CCz_58LaZu3mbpr5" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen>
</iframe>
</div>

:::

::: code-group

```yaml:line-numbers [docker-compose.yml]
version: "3"
services:
  ani-rss:
    image: wushuo894/ani-rss
    container_name: ani-rss
    environment:
      - PORT=7789 # ani-rss 端口
      - CONFIG=/config
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/ani-rss/config:/config
      - /volume2/wushuo/Media:/Media # 番剧挂载路径两侧须一致
    restart: always
    network_mode: host
  qBittorrent:
    image: linuxserver/qbittorrent
    container_name: qBittorrent
    environment:
      - PUID=0
      - PGID=0
      - WEBUI_PORT=8080 # qBittorrent 端口
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/qBittorrent/config:/config
      - /volume2/wushuo/downloads:/downloads
      - /volume2/wushuo/Media:/Media # 番剧挂载路径两侧须一致
    restart: always
    network_mode: host
```

```bash:line-numbers [docker run]
# ani-rss
docker run -d \
--name ani-rss \
-v /volume1/docker/ani-rss/config:/config \
-v /volume2/wushuo/Media:/Media \
-e PORT=7789 \
-e CONFIG=/config \
-e TZ=Asia/Shanghai \
--network host \
--restart always \
wushuo894/ani-rss

# qBittorrent
docker run -d \
--name qBittorrent \
-v /volume1/docker/qBittorrent/config:/config \
-v /volume2/wushuo/downloads:/downloads \
-v /volume2/wushuo/Media:/Media \
-e PUID=0 \
-e PGID=0 \
-e WEBUI_PORT=8080 \
-e TZ=Asia/Shanghai \
--network host \
--restart always \
linuxserver/qbittorrent
```

:::

::: info 启动容器

```bash
docker compose up -d
```

:::

::: info
如需对 `docker` 内的 `ani-rss` 设置本机跳过身份验证，请留意登录日志内的IP信息。
:::

如果使用了如上配置，请将 [下载设置](../config/download#下载工具) 修改为如下配置：

| 条目      | 内容               |
|---------|------------------|
| 下载工具    | qBittorrent      |
| 地址      | http://[ip]:8080 |
| 用户名     | admin            |
| 密码      |                  |
| 保存位置    | /Media/番剧        |
| 剧场版保存位置 | /Media/剧场版       |

::: info
初次启动时 `qBittorrent` 会为 `admin` 用户生成一个随机密码，请查看日志获取初始密码。
:::

