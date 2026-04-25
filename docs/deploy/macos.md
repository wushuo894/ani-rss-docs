# macOS 部署

## 通过 Homebrew 安装

```bash:line-numbers
# 安装 jdk
brew install graalvm-jdk@25

# 安装主程序
brew install --cask wushuo894/tap/ani-rss
```

## 或: 下载可执行程序

<a href="https://github.com/wushuo894/ani-rss/releases/latest/download/ani-rss.dmg" target="_blank">
    <el-button type="primary" icon="Download" bg text>ani-rss.dmg</el-button>
</a>

运行后，**菜单栏会出现程序图标**，可通过其打开浏览器

::: details 遇到程序无法打开的提示

<img src="/image/macos-cannot-open.webp" alt="macos-cannot-open">

<img src="/image/macos-setting-open.webp" alt="macos-setting-open">

在 `设置-隐私与安全性` **安全性** 选择 **仍要打开**
:::

[macOS无法进行更新 Read-only file system](/faq#macos-update)

## 开机自启动

<img src="/image/macos-autostart.webp" alt="macos-autostart">

在 `设置-登陆项与扩展` 手动添加本程序至 **登录时打开**

::: info 默认账号

用户名: `admin` 密码: `admin`
:::
