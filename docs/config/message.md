# 通知

### 通知模版示例

```txt
${emoji}${emoji}${emoji}
事件类型: ${action}
标题: ${title}
评分: ${score}
TMDB: ${tmdbid}
BGM: ${bgmUrl}
季: ${season}
集: ${episode}
字幕组: ${subgroup}
进度: ${currentEpisodeNumber}/${totalEpisodeNumber}
首播:  ${year}年${month}月${date}日
事件: ${text}
${emoji}${emoji}${emoji}
```

::: info webhook
`${message}` 会自动替换为信息

`${image}` 会自动替换为图片链接
:::

### 通知类型

开始下载、下载完成、缺集、错误

::: warning
下载完成通知暂不支持 Aria2
:::

## 通知方式

<img src="/screenshot/286fd4f8eb5e70a8664b2f63ef5f18ef-msg-screenshot.png" alt="msg-screenshot" id="msg-screenshot">

::: info TG通知
[Creating a new bot](https://core.telegram.org/bots/features#botfather:~:text=and%20managing%20bots.-,Creating%20a%20new%20bot,-Use%20the%20/newbot)
:::

::: details 邮箱通知

### QQ邮箱设置示例

| 参数名      | 参数值                         |
|----------|-----------------------------|
| SMTP地址   | `smtp.qq.com`               |
| SMTP端口   | `465`                       |
| 发件人邮箱    | `[qq号]@qq.com`              |
| 密码       | [QQ邮箱密码](#qq-mail-password) |
| SSL      | 开启✅                         |
| STARTTLS | 关闭❌                         |
| 收件人邮箱    | `[qq号]@qq.com`              |
| 图片       | 开启✅                         |

### QQ邮箱密码 { id=qq-mail-password }

**以下请在电脑网页端操作** <https://mail.qq.com>

- `设置 - 账号 - POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务`
- `开启服务并生成授权码`

:::

::: info Server酱
[Server酱³ 使用说明书](https://doc.sc3.ft07.com/)
:::

::: info WebHook
[Discussions 简单的钉钉、飞书和企业微信的webhook通知模板，可以直接抄作业](https://github.com/wushuo894/ani-rss/discussions/182)
:::
