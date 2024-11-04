<img alt="mikan-pic.png" height="80" width="80" src="./image/mikan-pic.png"/>

## 常见问题

### Windows 端口被占用

```log
BindException: Address already in use: bind
```

可能是 Hyper-V 随机占用端口导致的

可通过创建快捷方式并添加参数修改端口号

```md
--port [端口号 如 13888]
```

<img src="./image/PixPin_2024-10-17_03-37-35.png" alt="PixPin_2024-10-17_03-37-35.png" width="300">

### qBittorrent 未配置完成

```md
是否已配置下载器的 地址、用户名、密码 和 下载位置
```

### 为什么程序的自更新无法使用

```md
更新时使用的是 Github, 请检查你的网络条件
```

### 自动跳过无法生效

```md
请确保ani-rss和qb的映射位置一致
```

### 开启备用RSS后自动洗版无法自动删除旧的视频

```md
请确保ani-rss和qb的映射位置一致
请关闭 自动跳过
请开启 修改任务标题、自动删除
```

### 删除了视频 在预览中还是显示本地存在

```md
在预览界面删除对应的种子缓存
```

### 为什么没有第X集

```md
检查源rss是否包含该集
检查排除规则
```

### 不会自动下载某集的v2、v3版本, 并覆盖老版本

```md
请关闭 自动跳过
请开启 自动删除任务、修改任务标题
```

### 有些NSFW番剧无法解析

```md
请在设置中完善 BgmToken
```