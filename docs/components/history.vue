<script setup>
import {ref} from "vue";
import markdownit from 'markdown-it'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import {VPBadge as Badge} from "vitepress/theme"
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css'
import 'markdown-it-github-alerts/styles/github-base.css'

let releases = ref([])

fetch('https://api.github.com/repos/wushuo894/ani-rss/releases?page=1&per_page=20')
    .then(res => res.json())
    .then(data => {
      for (let item of data) {
        let {assets} = item
        assets = assets.filter(it => !it.name.endsWith('.md5') && !it.name.endsWith('.json'))
        item['assets'] = assets
      }
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

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

let md = markdownit({
  html: true,
})

md.use(MarkdownItGitHubAlerts)
</script>

<template>
  <h1>更新历史</h1>
  <div v-if="releases.length === 0" style="margin-top: 50px;">
    正在获取中, 请坐和放宽
  </div>
  <div v-for="(item,index) in releases" :key="item.id" v-else>
    <a :href="item['html_url']" target="_blank">
      <h2>
        {{ item.name }}
        <Badge v-if="index === 0" type="tip" text="最新版本"/>
      </h2>
    </a>
    <div>
      <div v-html="md.render(item['body'])" class="markdown-body"></div>
    </div>
    <div style="overflow-x: auto;">
      <div style="min-width: 500px;">
        <table>
          <thead>
          <tr>
            <th scope="col">文件名</th>
            <th scope="col">大小</th>
            <th scope="col">下载次数</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="asset in item['assets']">
            <td>
              <a :href="asset['browser_download_url']" target="_blank">{{ asset.name }}</a>
            </td>
            <td>{{ Number(asset.size / 1024 / 1024).toFixed(2) }}MB</td>
            <td>{{ asset['download_count'] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p style="
    color: var(--vp-c-text-2);
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
    ">
      {{ formatDate(item['created_at']) }} 共下载
      {{ item['assets'].reduce((sum, it) => sum + it['download_count'], 0) }}
      次</p>
  </div>
</template>

