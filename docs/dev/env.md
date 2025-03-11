# 环境配置

::: code-group

```bash:line-numbers [macOS]
# 安装 brew 包管理器
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 更新软件源
brew update

# 安装 git
brew install git

# 安装 jdk17
brew install openjdk@17

# 安装 maven
brew install maven

# 安装 nodejs
brew install node

# 安装 pnpm
npm install -g pnpm
```

```bash:line-numbers [Linux]
# 适用于 Debian 系 Linux 发行版, 如 Debian、Ubuntu、Kali 等
# 更新软件源
sudo apt update

# 安装 git
sudo apt install git

# 安装 jdk17
sudo apt install openjdk-17-jdk

# 安装 maven
sudo apt install maven

# 安装 nodejs
sudo apt install nodejs npm

# 安装 pnpm
npm install -g pnpm
```

```ps:line-numbers [Windows]
# 安装 git
winget install --id Git.Git

# 安装 jdk17
winget install --id Amazon.Corretto.17

# 安装 maven
# winget 包管理器中没有 maven 💩
# 需要自己下载解压并配置环境变量 https://maven.apache.org/download.cgi

# 安装 git
winget install --id Git.Git

# 安装 nodejs
winget install --id OpenJS.NodeJS

# 安装 pnpm
npm install -g pnpm
```

:::
