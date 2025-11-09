<script setup>
import {ref} from "vue";
import markdownit from 'markdown-it'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import {VPBadge as Badge} from "vitepress/theme"
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css'
import 'markdown-it-github-alerts/styles/github-base.css'
import {ElMessage} from "element-plus";
import {onMounted} from "vue";

let releases = ref([])

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
  linkify: true
})

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  token.attrSet('target', '_blank') // 强制添加属性
  return self.renderToken(tokens, idx, options)
}

md.use(MarkdownItGitHubAlerts)

const loadList = async () => {
  let res = await fetch(`https://api.github.com/repos/wushuo894/ani-rss/releases?page=${page.value.currentPage}&per_page=${page.value.size}`)
  let data = await res.json()
  if (data.message) {
    ElMessage.error(data.message)
    return
  }
  for (let item of data) {
    let {assets} = item
    assets = assets.filter(it => !it.name.endsWith('.md5') && !it.name.endsWith('.json'))
    item['assets'] = assets
  }
  releases.value = data

  let linkHeader = res.headers.get('Link');
  if (!linkHeader) {
    return
  }
  const links = linkHeader.split(',');
  for (const link of links) {
    const [urlPart, relPart] = link.split(';');
    const cleanUrl = urlPart.trim().replace(/[<>]/g, ''); // 移除 < 和 >
    const rel = relPart.trim();
    if (rel !== 'rel="last"') {
      continue
    }
    const pageParam = new URL(cleanUrl).searchParams.get('page');
    if (!pageParam) {
      continue
    }
    page.value.totalPage = Number.parseInt(pageParam)
  }
}

onMounted(() => load())

const load = () => {
  loading.value = true
  loadList()
      .finally(() =>
          loading.value = false
      )
}

const page = ref({
  currentPage: 1,
  size: 10,
  totalPage: 1
})

const loading = ref(true)

const isLatest = (it) => {
  if (page.value.currentPage !== 1) {
    return false
  }
  return releases.value.indexOf(it) === 0;
}
</script>

<template>
  <h1>更新历史</h1>
  <div style="min-height: 300px" v-loading="loading">
    <ul>
      <li v-for="(item,index) in releases" :key="item.id">
        <h2>
          <a :href="item['html_url']" target="_blank">
            {{ item.name }}
          </a>
          <Badge v-if="isLatest(item)" type="tip" text="最新版本"/>
        </h2>
        <div>
          <div v-html="md.render(item['body'])" class="markdown-body"></div>
        </div>
        <el-collapse v-if="item['assets'].length" expand-icon-position="left"
                     :model-value="isLatest(item) ? 'assets' : ''">
          <el-collapse-item title="Assets" name="assets">
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
          </el-collapse-item>
        </el-collapse>
        <el-text size="small" v-if="item['assets'].length">
          {{ formatDate(item['created_at']) }} 共下载
          {{ item['assets'].reduce((sum, it) => sum + it['download_count'], 0) }}
          次
        </el-text>
      </li>
    </ul>
    <div style="display: flex;justify-content: center;">
      <el-pagination
          :page-sizes="[10, 20, 30, 40]"
          v-model:page-size="page.size"
          v-model:page-count="page.totalPage"
          v-model:current-page="page.currentPage"
          :hide-on-single-page="true"
          @current-change="load"
          @size-change="() => {
            page.currentPage = 1
            load()
          }"
          layout="prev, pager, next, sizes"
      />
    </div>
  </div>
</template>

<style>
.el-pagination li + li {
  margin-top: 0;
}

.el-collapse, .el-collapse-item__header, .el-collapse-item__wrap {
  border: none;
}

.el-collapse table {
  margin: 0;
}
</style>
