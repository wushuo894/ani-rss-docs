<img alt="mikan-pic.png" height="80" width="80" src="./image/mikan-pic.png"/>

## 快速开始

[群晖NAS](#群晖nas)

默认 用户名: admin 密码: admin

### Windows

分为两个版本

[ani-rss.win.x86_64.zip](https://github.com/wushuo894/ani-rss/releases/latest) 自带jdk, 解压后即可运行

[ani-rss-launcher.exe](https://github.com/wushuo894/ani-rss/releases/latest) 需要 [自行安装jdk](#windows)

运行后 **右下角会出现托盘** 可通过其打开浏览器

#### 开机自启动

```md
将 ani-rss-launcher.exe 创建快捷方式
将快捷方式移动到 C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup
```

### 安装 java

推荐使用 jdk11 或 jdk17
如果已经有了可以跳过

##### Windows

```bash
winget install 'OpenJDK 11'
```

##### Linux

```bash
sudo apt update
sudo apt install openjdk-11-jdk
```

#### macOS

```bash
brew update
brew install openjdk@11
```

### 运行

下载最新的 **ani-rss-jar-with-dependencies.jar** [链接](https://github.com/wushuo894/ani-rss/releases/latest)

```bash
java -jar -Xmx1g ./ani-rss-jar-with-dependencies.jar --port 7789
```

使用 `--gui` 参数使 桌面端 显示托盘

#### 脚本运行 支持自动重启

```bash
wget https://github.com/wushuo894/ani-rss/raw/master/docker/run.sh
sudo chmod -R 777 ./run.sh
sudo bash ./run.sh
```

通过 **http://[ip]:7789** 访问

### 群晖NAS

**请提前安装 Java 17 OpenJdk 套件**

离线安装 [ani-rss_v1.1.110_noarch-DSM7.spk](https://github.com/wushuo894/ani-rss/releases/download/v1.1.110/ANI-RSS_v1.1.110_noarch-DSM7.spk)

或者

使用矿神套件源 `https://spk7.imnks.com` , 搜索 `ani-rss` 安装

![Xnip2024-11-05_05-41-50.png](./image/Xnip2024-11-05_05-41-50.png)
