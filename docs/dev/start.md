# 开发环境启动指南

### 1. 关闭本地正在运行的 `ani-rss`

::: info 端口冲突检查
如果没有端口冲突可以跳过此步骤
:::

### 2. 启动后端服务

- 使用 [IntelliJ IDEA](https://www.jetbrains.com/idea/) 打开本项目
- 找到 `/src/main/java/ani/rss/Main.java` 文件
- 点击右上角的绿色调试按钮启动服务

### 3. 启动前端开发环境

```bash:line-numbers
# 进入前端目录
cd ui

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

::: info 访问地址
浏览器访问 <http://127.0.0.1:30000> 即可开始开发
:::

### 4. 开始开发

现在可以开始你的开发工作了！🎉
