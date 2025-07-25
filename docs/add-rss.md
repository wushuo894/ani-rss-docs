# 添加订阅

### 标题

订阅的标题

### TMDB

[TMDB](https://www.themoviedb.org/) 获取到的番剧名称

### 剧集组

使用剧集组后集标题将根据剧集组获取

::: info
剧集组与 [tvshow.nfo](/config/basic/add#tvshow-nfo) 也有联动效果
::::

### BgmUrl

[Bangumi](https://bgm.tv/) 的番剧链接

### 主 RSS

订阅链接

### 备用RSS

可设置多个

[详细说明](/config/basic/rss#back-rss)

::: warning
如需使用请前往设置开启 [备用RSS](/config/basic/rss#back-rss)
:::

### 日期

番剧首播日期

### 季

季度

### 集数偏移

[详细说明](/config/basic/add#自动推断剧集偏移)

### 总集数

通过 [Bangumi](https://bgm.tv/) 获取到的总集数

可用于自动禁用订阅

### 匹配

支持正则表达式

### 排除

支持正则表达式

### 全局排除

使用全局排除

### 剧场版

若 `剧场版保存位置` 为空则使用 `保存位置`

由于剧场版命名与文件结构各异, 故并不会使用重命名功能

::: info
`Emby` 会自动根据文件夹名获取正确的剧场版原数据，因此不重命名也不影响刮削
:::

### 自定义集数规则 { id=custom-episode }

如果默认的规则无法获取，你可以试试自定义集数规则

### 自定义下载

自定义下载

### 遗漏检测

检测最小集数与最大集数之前是否存在遗漏

若有遗漏会自动发送通知

::: warning
缺少集数大于10个时可能是误判。因此不进行通知
:::

### 只下载最新集

只下载最新集

### 启用

是否开启订阅

