# Windows 部署

## 安装 JDK { #install-jdk }

```ps
winget install --id EclipseAdoptium.Temurin.25.JDK
```

## 下载可执行程序

<a href="https://github.com/wushuo894/ani-rss/releases/latest/download/ani-rss.exe" target="_blank">
    <el-button type="primary" icon="Download" bg text>ani-rss.exe</el-button>
</a>

运行后，**右下角系统托盘会出现程序图标**，可通过其打开浏览器

## 开机自启动

可下载脚本至程序同级目录下, 右键 **以管理员身份运行** 即可设置开机自启动。

<el-space :size="4">
    <a href="https://github.com/wushuo894/ani-rss/raw/master/windows/设置开机自启动.bat" target="_blank" download>
        <el-button type="primary" icon="Download" bg text>设置开机自启动.bat</el-button>
    </a>
    <a href="https://github.com/wushuo894/ani-rss/raw/master/windows/删除开机自启动.bat" target="_blank" download>
        <el-button type="primary" icon="Download" bg text>删除开机自启动.bat</el-button>
    </a>
</el-space>

::: info 默认账号

用户名: `admin` 密码: `admin`
:::
