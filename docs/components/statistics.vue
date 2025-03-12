<script setup>
import {ref} from "vue";

let releases = ref([])

fetch('https://api.github.com/repos/wushuo894/ani-rss/releases?page=1&per_page=20')
    .then(res => res.json())
    .then(data => {
      releases.value = data
    })

let formatDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>

<template>
  <h1>下载统计</h1>

  <div v-if="releases.length === 0">
    正在获取中, 请坐和放宽
  </div>
  <div v-for="item in releases" :key="item.id" v-else>
    <a :href="item['html_url']" target="_blank"><h2>{{ item.name }}</h2></a>
    <p>共下载
      {{ item['assets'].filter(it => !it.name.endsWith('.md5')).reduce((sum, it) => sum + it['download_count'], 0) }}
      次</p>
    <table>
      <thead>
      <tr>
        <th scope="col">文件名</th>
        <th scope="col">大小</th>
        <th scope="col">下载次数</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="asset in item['assets'].filter(it => !it.name.endsWith('.md5'))">
        <td>
          <a :href="asset['browser_download_url']" target="_blank">{{ asset.name }}</a>
        </td>
        <td>{{ Number(asset.size / 1024 / 1024).toFixed(2) }}MB</td>
        <td>{{ asset['download_count'] }}</td>
      </tr>
      </tbody>
    </table>
    <p>{{ formatDate(item['created_at']) }}</p>
  </div>
</template>

