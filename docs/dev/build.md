# 本地编译指南

### 1. 编译前端代码

::: info 重要提示
除本步骤外，其余步骤的命令均在项目根目录执行
:::

```bash:line-numbers
# 切换工作目录
cd ui
pnpm run build
```

::: info 编译成功标志
出现 `✓ built in 0.00s` 表示前端编译成功
:::

### 2. 最后准备

- 将编译好的前端静态文件拷贝到 `/src/main/resources/dist`
- 下载 [ani-rss-update.exe](https://github.com/wushuo894/ani-rss-update/releases/download/latest/ani-rss-update.exe) 并放入 `/src/main/resources/` 目录

### 3. 编译后端代码

```bash
mvn -B package -DskipTests --file pom.xml
```

::: info 编译成功标志
出现 `BUILD SUCCESS` 表示后端编译成功

编译结果存放在 `target` 文件夹下：
- `ani-rss-jar-with-dependencies.jar`：可执行 JAR 文件
- `ani-rss-launcher.exe`：Windows 启动器
:::

### 其他操作

更多打包脚本请参考：
- [package.sh](https://github.com/wushuo894/ani-rss/blob/master/package.sh)（Linux/macOS）
- [package-win.sh](https://github.com/wushuo894/ani-rss/blob/master/package-win.sh)（Windows）
