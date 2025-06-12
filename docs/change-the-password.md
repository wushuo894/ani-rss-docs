# 忘记密码

::: tip
本程序的密码存储为MD5摘要, 无法查看原密码

将 `config.v2.json` 上传并修改用户名与密码

下载后替换掉原 `config.v2.json` 文件并重启程序即可
:::

<script setup>
import ChangeThePassword from './components/ChangeThePassword.vue'
</script>

<ChangeThePassword/>
