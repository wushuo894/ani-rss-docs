# 常见问题

[[toc]]

## 网络超时、SSL握手异常、DNS 解析出错 { id=ssl-error }

```log:line-numbers
2025-03-11 02:20:26 ERROR ani.rss.util.HttpRequestPlus - url: https://mikanani.me/RSS/Bangumi?bangumiId=3428&subgroupid=583, error: SSL握手异常
2025-03-11 02:20:26 ERROR ani.rss.task.RssTask - 暗杀女仆冥土小姐 SSL握手异常
2025-03-11 02:20:26 ERROR ani.rss.task.RssTask - SSL握手异常
cn.hutool.core.io.IORuntimeException: SSLHandshakeException: Remote host terminated the handshake
        at cn.hutool.http.HttpRequest.send(HttpRequest.java:1350)
        at cn.hutool.http.HttpRequest.doExecute(HttpRequest.java:1188)
        at cn.hutool.http.HttpRequest.execute(HttpRequest.java:1051)
        at ani.rss.util.HttpRequestPlus.execute(HttpRequestPlus.java:42)
        at cn.hutool.http.HttpRequest.thenFunction(HttpRequest.java:1077)
        at ani.rss.util.ItemsUtil.getItems(ItemsUtil.java:67)
        at ani.rss.util.TorrentUtil.downloadAni(TorrentUtil.java:54)
        at ani.rss.task.RssTask.download(RssTask.java:63)
        at ani.rss.task.RssTask.run(RssTask.java:104)
```

::: info 解决方案
请使用代理网络，不要使用运营商默认的DNS
:::

## 无法调用 VLC、MPV 播放器 { id=player }

需要安装以下项目：

- [northsea4/vlc-protocol](https://github.com/northsea4/vlc-protocol)
- [northsea4/mpvplay-protocol](https://github.com/northsea4/mpvplay-protocol)

## 集数识别错误 { id=episode-error }

::: info 解决方案

- 开启 [自定义集数规则](add-rss#custom-episode)
- 如果默认的集数规则也无法识别，可以自己修改正则表达式
- 如果不会正则表达式，可以让 AI 生成

[菜鸟教程-正则表达式](https://www.runoob.com/regexp/regexp-tutorial.html)

:::

## 自动重命名不生效 { id=auto-rename }

::: info 解决方案

- 如果使用的是 **aria2**，需要 **ani-rss** 与 **aria2** 的 **Docker** 挂载路径一致
- 确保 **qBittorrent** 版本在 **4.6.11** 以上
- 确保 [重命名模版](config/basic/rename#rename-template) 包含 `S${seasonFormat}E${episodeFormat}` 这样的格式

:::

## qBittorrent 下载时出现错误 { id=qb-download-error }

::: info 解决方案
大概率为权限问题

修改 **qBittorrent** 容器的 `PUID` 与 `GUID` 为 `0`

或者使用命令赋予文件夹权限
:::

::: details 使用命令赋予文件夹权限

```bash
chmod -R 777 /Media
```

:::

::: warning 进一步排查
如果还未解决请自行查看 qBittorrent 日志进行排查
:::

## Windows 端口被占用 { id=windows-port-error }

```log
BindException: Address already in use: bind
```

可能是 Hyper-V 随机占用端口导致的

具体原因可以搜索：<https://www.bing.com/search?q=Hyper-V随机占用端口>

**以下有两种解决方法**

::: details 修改Hyper-V动态端口解决

可以通过以下命令去调整 TCP 动态端口范围

``` bat:line-numbers
netsh int ipv4 set dynamic tcp start=55000 num=10536
netsh int ipv6 set dynamic tcp start=55000 num=10536
```

此时重启电脑，Hyper-V 就会从 55000 - 65565 范围内选取一些端口进行占用，而不会占用日常开发的端口。

:::

::: details 修改程序端口解决

可通过创建快捷方式并添加参数修改端口号

```md
--port [端口号 如 13888]
```

<img src="./image/PixPin_2024-10-17_03-37-35.webp" alt="PixPin_2024-10-17_03-37-35.webp" width="300">
:::

## qBittorrent 未配置完成 { id=qb-config }

::: info 检查项目
是否已配置下载器的 **地址、用户名、密码** 和 **下载位置**
:::

## 为什么程序的自更新无法使用 {id=update-error}

::: info 网络检查
更新时使用的是 [GitHub](https://github.com)，请检查你的网络条件
:::

## 自动跳过无法生效 { id=auto-skip }

::: info 路径检查
请确保 **ani-rss** 和 **qBittorrent** 的映射位置一致
:::

## 开启备用RSS后自动洗版无法自动删除旧的视频 { id=standby-rss-error }

::: info 配置检查

- 请确保 **ani-rss** 和 **qBittorrent** 的映射位置一致
- 请关闭❌ [自动跳过](config/basic/rss#auto-skip)
- 请开启✅ [自动删除](config/download#auto-delete)

:::

## 删除了视频，在预览中还是显示本地存在 { id=items-delete }

::: info 解决方案
在预览界面删除对应的种子缓存
:::

## 为什么没有第X集

::: info 检查项目

- 检查源 RSS 是否包含该集
- 检查排除规则

:::

## 不会自动下载某集的v2、v3版本，并覆盖老版本 { id=download-v2 }

::: info 配置调整

- 请关闭❌ [自动跳过](config/basic/rss#auto-skip)
- 请开启✅ [自动删除](config/download#auto-delete)

:::

## 套件版qbittorrent和ani-ass的兼容问题

::: info 解决方案
灵活使用映射, 脑子不要太死板

参照: <https://github.com/wushuo894/ani-rss/issues/611>
:::

## 有些NSFW番剧无法解析 { id=nsfw }

::: info 解决方案
请在设置中完善 [BgmToken](config/basic/other#bgmtoken)
:::
