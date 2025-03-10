# 部署程序

## 安装 JDK { id=install-jdk }

推荐使用 jdk17
如果已经有了可以跳过

::: code-group

```bash [macOS]
brew update
brew install openjdk@17
```

```bash [Linux]
sudo apt update
sudo apt install openjdk-17-jdk
```

:::

## 运行

```bash
wget https://github.com/wushuo894/ani-rss/raw/master/docker/run.sh
sudo chmod -R 777 ./run.sh
bash ./run.sh
```

访问网页 `http://127.0.0.1:7789`

::: info 默认账号

用户名: `admin` 密码: `admin`
:::

## 启动参数 {id=argument}

| 参数名   | 参数     | 示例             |
|-------|--------|----------------|
| 端口    | --port | --port 7789    |
| IP绑定  | --host | --host 0.0.0.0 |
| GUI菜单 | --gui  | --gui          |

## 环境变量

| 变量名  | 变量   | 示例      |
|------|------|---------|
| 端口   | PORT | 7789    |
| IP绑定 | HOST | 0.0.0.0 |
