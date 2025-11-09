# Windows 部署

提供两个版本供选择：

- **[ani-rss.win.x86_64.zip](https://github.com/wushuo894/ani-rss/releases/latest/download/ani-rss.win.x86_64.zip)**：自带 JDK，解压后即可运行
- **[ani-rss-launcher.exe](https://github.com/wushuo894/ani-rss/releases/latest/download/ani-rss-launcher.exe)**：需要 [自行安装 JDK](#install-jdk)

运行后，**右下角系统托盘会出现程序图标**，可通过其打开浏览器

## 安装 JDK {#install-jdk}

```ps
winget install --id Amazon.Corretto.17
```

## 开机自启动

`ani-rss.win.x86_64.zip` 内已包含 `设置开机自启动.bat` 脚本，右键 **以管理员身份运行** 即可设置开机自启动。

::: info 默认账号

用户名: `admin` 密码: `admin`
:::
