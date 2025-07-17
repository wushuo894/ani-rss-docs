# Alist

自动将下载完成的文件上传至 `alist`

## AlistHost

`alist` 的 `http` 地址

## AlistToken

令牌, 可在 `alist网页 -> 管理 -> 设置 -> 其他 -> 令牌` 找到

## 上传位置 / 剧场版上传位置

如:

`/115/Media/番剧/${letter}/${title}/Season ${season}`

`/115/Media/剧场版/${letter}/${title}`

若 `剧场版上传位置` 为空则默认使用 `上传位置`

位置模版可参考 [保存位置](/config/download#save-path)

## 失败重试次数

当上传失败后的重试次数

## 上传开关

自动将下载完成的文件上传至 alist

## 刷新开关

刷新alist目录
