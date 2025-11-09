# 部署程序

## 安装 JDK { id=install-jdk }

推荐使用 JDK 17，如果已经安装了可以跳过此步骤

::: code-group

```bash:line-numbers [macOS]
brew update
brew install openjdk@17
```

```bash:line-numbers [Linux]
sudo apt update
sudo apt install openjdk-17-jdk
```

:::

## Linux 系统安装

::: tip 适用系统
Ubuntu / Debian / CentOS / RHEL
:::

```bash
sudo bash -c "$(curl -fsSL https://github.com/wushuo894/ani-rss/raw/master/linux/install-ani-rss.sh)"
```

## 直接运行

```bash:line-numbers
wget https://github.com/wushuo894/ani-rss/raw/master/docker/run.sh
sudo chmod -R 777 ./run.sh
bash ./run.sh
```

访问网页：`http://127.0.0.1:7789`

::: info 默认账号

用户名: `admin` 密码: `admin`
:::

## 启动参数 {id=argument}

| 参数名   | 参数     | 示例             | 说明           |
|-------|--------|----------------|--------------|
| 端口    | --port | --port 7789    | 指定服务端口      |
| IP绑定  | --host | --host 0.0.0.0 | 指定绑定IP地址    |
| GUI菜单 | --gui  | --gui          | 启用图形界面菜单   |

## 环境变量

| 变量名  | 变量   | 示例      | 说明           |
|------|------|---------|--------------|
| 端口   | PORT | 7789    | 指定服务端口      |
| IP绑定 | HOST | 0.0.0.0 | 指定绑定IP地址    |
