# Docker 部署

<div>

![Docker Image Size (tag)](https://img.shields.io/docker/image-size/wushuo894/ani-rss/latest)
[![Docker Pulls](https://img.shields.io/docker/pulls/wushuo894/ani-rss)](https://hub.docker.com/r/wushuo894/ani-rss)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github)](https://github.com/wushuo894/ani-rss)
</div>

<img src="/image/screenshot/screenshot.webp" alt="screenshot" class="light-only">
<img src="/image/screenshot/screenshot-dark.webp" alt="screenshot-dark" class="dark-only">

::: info 默认账号

用户名: `admin` 密码: `admin`
:::

::: warning
**使用 Docker 部署时，务必让 `ani-rss` 与 `下载器` 的挂载路径保持一致**
:::

<div style="overflow-x: auto;">
<div style="width: 1200px">

| 镜像                          | 架构                        | 底层镜像          | JDK                                                                         | github                                                                    |
|-----------------------------|---------------------------|---------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `wushuo894/ani-rss:latest`  | `linux/amd64,linux/arm64` | alpine:latest | [eclipse-temurin](https://adoptium.net)                                     | [wushuo894/eclipse-temurin](https://github.com/wushuo894/eclipse-temurin) |   
| `wushuo894/ani-rss:openj9`  | `linux/amd64,linux/arm64` | ubuntu:noble  | [ibm-semeru-runtimes](https://developer.ibm.com/languages/semeru-runtimes/) | [wushuo894/openj9-docker](https://github.com/wushuo894/openj9-docker)     |   
| `wushuo894/ani-rss:arm32v7` | `linux/arm32v7`           | ubuntu:noble  | [eclipse-temurin](https://adoptium.net)                                     | [wushuo894/eclipse-temurin](https://github.com/wushuo894/eclipse-temurin) |

</div>
</div>

::: info

- **eclipse-temurin**：拥有更小的镜像体积
- **ibm-semeru-runtimes**：拥有更少的内存占用
  :::

::: code-group

```yaml:line-numbers [docker-compose.yml]
version: "3"
services:
  ani-rss:
    image: wushuo894/ani-rss:latest
    container_name: ani-rss
    # 自定义 DNS
    # dns: 8.8.8.8
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
      - PORT=7789 # ani-rss 端口
      - CONFIG=/config
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/ani-rss/config:/config
      - /volume2/wushuo/Media:/Media # 番剧挂载路径，两侧须保持一致
    restart: always
    network_mode: host
  qBittorrent:
    image: linuxserver/qbittorrent:latest
    container_name: qBittorrent
    environment:
      - PUID=0
      - PGID=0
      - WEBUI_PORT=8080 # qBittorrent 端口
      - TZ=Asia/Shanghai
    volumes:
      - /volume1/docker/qBittorrent/config:/config
      - /volume2/wushuo/downloads:/downloads
      - /volume2/wushuo/Media:/Media # 番剧挂载路径，两侧须保持一致
    restart: always
    network_mode: host
```

```bash:line-numbers [docker run]
# ani-rss
docker run -d \
    --name ani-rss \
    -v /volume1/docker/ani-rss/config:/config \
    -v /volume2/wushuo/Media:/Media \
    -e PUID=0 \
    -e PGID=0 \
    -e UMASK=022 \
    -e PORT=7789 \
    -e CONFIG=/config \
    -e TZ=Asia/Shanghai \
    --network host \
    --restart always \
    wushuo894/ani-rss:latest

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
    linuxserver/qbittorrent:latest
```

:::

::: info 启动容器

```bash
docker compose up -d
```

:::

::: info
如需对 Docker 容器内的 `ani-rss` 设置本机跳过身份验证，请留意登录日志内的 IP 信息。
:::

如果使用了上述配置，请将 [下载设置](../config/download#下载工具) 修改为如下配置：

| 条目      | 内容                                    |
|---------|---------------------------------------|
| 下载工具    | qBittorrent                           |
| 地址      | http://[ip]:8080                      |
| 用户名     | admin                                 |
| 密码      |                                       |
| 保存位置    | `/Media/番剧/${title}/Season ${season}` |
| 剧场版保存位置 | `/Media/剧场版/${title}`                 |

::: info
初次启动时 `qBittorrent` 会为 `admin` 用户生成一个随机密码，请查看容器日志获取初始密码。
:::

