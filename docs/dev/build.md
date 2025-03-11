# 本地编译

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
