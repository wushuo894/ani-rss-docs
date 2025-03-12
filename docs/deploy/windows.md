# Windows

分为两个版本

[ani-rss.win.x86_64.zip](https://github.com/wushuo894/ani-rss/releases/latest/download/ani-rss.win.x86_64.zip) 自带jdk, 解压后即可运行

[ani-rss-launcher.exe](https://github.com/wushuo894/ani-rss/releases/latest/download/ani-rss-launcher.exe) 需要 [自行安装jdk](#install-jdk)

运行后 **右下角会出现托盘** 可通过其打开浏览器

## 安装 JDK {#install-jdk}

```ps
winget install --id Amazon.Corretto.17
```

## 开机自启动

~~将 ani-rss-launcher.exe 创建快捷方式~~

~~将快捷方式移动到 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup~~

`ani-rss.win.x86_64.zip` 内已包含 `设置开机自启动.bat` 脚本, 双击即可执行

::: info 默认账号

用户名: `admin` 密码: `admin`
:::
