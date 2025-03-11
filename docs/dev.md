# 参与开发

## 基本流程

1. **fork** 本项目
2. 将项目克隆到本地
3. 创建新的分支，并切换到新分支
4. 在新分支上进行开发，并提交代码
5. 提交 **Pull Request** 到原项目的 `test` 分支并解决冲突
6. 若自动测试结果无异常则由维护者审核及合并

::: warning

1. 请先将代码 **fork** 到自己的仓库，再进行开发
2. 请不要将代码直接提交到 `master` 分支
3. 请在提交 **Pull Request** 之前，先在本地进行测试，确保代码能够正常运行
   :::

## 环境配置

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
# 下载解压并配置环境变量 -> https://phoenixnap.com/kb/install-maven-windows

# 安装 git
winget install --id Git.Git

# 安装 nodejs
winget install --id OpenJS.NodeJS

# 安装 pnpm
npm install -g pnpm
```

:::

## 开始开发

### 1. 关闭本地正在运行的 `ani-rss`

::: info
如果没有端口冲突可以跳过这一步
:::

### 2. 启动后端服务

- 用 [IntelliJ IDEA](https://www.jetbrains.com/idea/) 打开本项目。
- 找到 `/src/main/java/ani/rss/Main.java` 并点击右上角的绿色调试按钮就好了。

### 3. 启动前端开发环境

```bash:line-numbers
# 进入前端目录
cd ui

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

::: info
浏览器访问 <http://127.0.0.1:30000> 即可
:::

### 4. 编写代码

开始你的表演👏

## 本地编译

### 1. 编译前端代码

::: info
除本步骤外，其余步骤的命令均在根目录执行
:::

```bash:line-numbers
# 切换工作目录
cd ui
pnpm run build
```

::: info
出现 `✓ built in 0.00s` 表示编译成功
:::

### 2. 最后准备

- 将编译好的前端静态文件拷贝到 `/src/main/resources/dist`

- [ani-rss-update.exe](https://github.com/wushuo894/ani-rss-update/releases/download/latest/ani-rss-update.exe) 放入
  `/src/main/resources/`

### 3. 编译后端代码

```bash
mvn -B package -DskipTests --file pom.xml
```

::: info

出现 `BUILD SUCCESS` 表示编译成功

编译结果存放在 `target` 文件夹下

- ani-rss-jar-with-dependencies.jar
- ani-rss-launcher.exe

:::

### 其他操作

请参考 [package.sh](https://github.com/wushuo894/ani-rss/blob/master/package.sh)
、[package-win.sh](https://github.com/wushuo894/ani-rss/blob/master/package-win.sh)
