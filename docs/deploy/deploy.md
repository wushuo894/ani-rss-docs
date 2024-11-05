# 部署程序

## 安装 JDK

推荐使用 jdk11 或 jdk17
如果已经有了可以跳过

#### Linux

```bash
sudo apt update
sudo apt install openjdk-11-jdk
```

### macOS

```bash
brew update
brew install openjdk@11
```

## 运行

```bash
wget https://github.com/wushuo894/ani-rss/raw/master/docker/run.sh
sudo chmod -R 777 ./run.sh
sudo bash ./run.sh
```

## 默认配置

| 名称  | 参数    |
|-----|-------|
| 端口  | 7789  |
| 用户名 | admin |
| 密码  | admin |
