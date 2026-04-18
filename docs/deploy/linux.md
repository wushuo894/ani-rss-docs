# Linux 部署

## 安装为服务

::: tip 适用系统
Ubuntu / Debian / CentOS / RHEL
:::

```bash:line-numbers
# 安装 jdk
sudo apt install openjdk-25-jdk

# 安装主程序
sudo bash -c "$(curl -fsSL https://github.com/wushuo894/ani-rss/raw/master/linux/install-ani-rss.sh)"
```

## 或: 直接运行

```bash:line-numbers
# 创建程序目录
mkdir /opt/ani-rss && cd /opt/ani-rss

# 下载运行脚本
wget https://github.com/wushuo894/ani-rss/raw/master/docker/run.sh

# 启动
bash ./run.sh
```

访问网页：`http://127.0.0.1:7789`

::: info 默认账号

用户名: `admin` 密码: `admin`
:::

## 启动参数

| 参数名   | 参数                 | 示例                         | 说明       |
|-------|--------------------|----------------------------|----------|
| 端口    | `--server.port`    | `--server.port 7789`       | 指定服务端口   |
| IP绑定  | `--server.address` | `--server.address 0.0.0.0` | 指定绑定IP地址 |
| GUI菜单 | `--gui`            | `--gui`                    | 启用图形界面菜单 |

## 环境变量

| 变量名  | 变量               | 示例        | 说明       |
|------|------------------|-----------|----------|
| 端口   | `SERVER_PORT`    | `7789`    | 指定服务端口   |
| IP绑定 | `SERVER_ADDRESS` | `0.0.0.0` | 指定绑定IP地址 |
