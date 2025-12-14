# 本地编译指南

## 编译代码

::: TIP
由于编译过程需要使用 Unix/GNU 命令，如果你使用的是 Windows 系统，请将以下路径添加到系统环境变量 `PATH` 中；macOS/Linux 用户可忽略此步骤。

```
C:\Program Files\Git\bin
C:\Program Files\Git\usr\bin
C:\Program Files\Git\mingw64\bin
```
:::

执行以下命令进行编译：

```bash
mvn -B package -DskipTests --file pom.xml
```

::: info 编译成功标志
当出现 `BUILD SUCCESS` 提示时，表示编译成功。

编译结果存放在 `ani-rss-application/target` 文件夹下：
- `ani-rss-jar-with-dependencies.jar`：可执行 JAR 文件
- `ani-rss-launcher.exe`：Windows 启动器
:::

## 其他操作

如需了解更多打包脚本，请参考：
- [package.sh](https://github.com/wushuo894/ani-rss/blob/master/package.sh)（Linux/macOS）
- [package-win.sh](https://github.com/wushuo894/ani-rss/blob/master/package-win.sh)（Windows）
