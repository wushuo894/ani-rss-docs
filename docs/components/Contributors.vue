<template>
  <template v-for="it in contributors">
    <el-tooltip :content="it['login']">
      <a :href="it['html_url']" target="_blank">
        <el-avatar :src="it['avatar_url']" style="margin-right: 8px;" :alt="it['login']" size="large"/>
      </a>
    </el-tooltip>
  </template>
</template>
<script setup>

import {onMounted, ref} from "vue";

let contributors = ref([])

onMounted(() => {
  fetch('https://api.github.com/repos/wushuo894/ani-rss/contributors')
      .then(res => res.json())
      .then(data => contributors.value = data)
})

</script>