# 🔑 Bangumi 设置

入口：**设置 → 基本设置 → Bangumi**。这里配置 Bangumi API 地址与 Token 授权，Emby 自动点格子设置见[Emby Webhook](/config/basic/other#emby-webhook)。

## BgmApi

Bangumi API 地址，默认 `https://api.bgm.tv`。更换地址时需要保证接口兼容且程序可以访问。

## 手动输入 Token

将“获取方式”设为“手动输入”，在 [Bangumi Token 页面](https://next.bgm.tv/demo/access-token)生成 Access Token，填入 Token 后保存设置。

手工 Token 不会通过此模式自动续期，过期后需重新生成并保存。

## 自动获取与续期

1. 在 [Bangumi 开发者平台](https://bgm.tv/dev/app)创建自己的应用。
2. 将获取方式设为“自动获取”，填写应用的 `App ID` 与 `App Secret`。
3. 填写当前实例的回调地址，或点击旁边的刷新按钮按访问地址生成。形式为 `https://你的地址/bgm-oauth-callback`；使用反向代理子路径时应包含对应前缀。
4. 在 Bangumi 应用中配置与此处完全一致的回调地址。
5. 点击“获取授权”，完成 Bangumi 授权流程；完成后可使用“查看授权状态”检查账号与剩余有效期，并保存设置。

自动模式会保留 Refresh Token。后台检查发现 Token 剩余有效期不足 3 天时，会尝试自动刷新；续期依赖有效的应用信息、Refresh Token 和可用网络。

## 与自动点格子的关系

Token 授权与 Emby Webhook 需要分别配置。仅填写 Token 不会自动同步观看进度，还需要 Emby 发出对应事件，并确保 ANI-RSS 能匹配到订阅和集数。
