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