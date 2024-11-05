<!--@include: ../head.md-->

## 通知模版示例

```md
标题: ${title}
评分: ${score}
TMDB: ${themoviedbName}
BGM: ${bgmUrl}
季: ${season}
集: ${episode}
字幕组: ${subgroup}
进度: ${currentEpisodeNumber}/${totalEpisodeNumber}
首播: ${year}年${month}月${date}日
事件: ${text}
```

webhook

```md
${message} 会自动替换为信息
${image} 会自动替换为图片链接
```

### 通知类型

开始下载、下载完成、缺集、错误

::: warning
下载完成通知暂不支持 Aria2
:::

## 邮件通知

![Xnip2024-11-05_06-02-38.png](/image/Xnip2024-11-05_06-02-38.png)

### QQ邮箱设置示例

```md
SMTP地址: smtp.qq.com
SMTP端口: 465
发件人邮箱: [qq号]@qq.com
密码: xxxx
SSL: 开启
收件人邮箱: [qq号]@qq.com
```

### QQ邮箱密码

QQ邮箱 - 常规 - 第三方服务 - IMAP/SMTP服务

开启并 生成授权码