<!-- Layout.vue -->
<template>
  <Layout>
    <template #layout-bottom>
      <el-backtop :right="width > 600 ? 100 : 20" :bottom="100" style="z-index: 20"/>
    </template>
    <template #doc-after>
      <div style="margin-top: 24px;">
        <el-alert type="info" show-icon center
                  :closable="false">
          <template #title>
            <p style="text-align: center">
              如果您觉得这个项目对您有用的话，请考虑在
              <el-link href="https://github.com/wushuo894/ani-rss" target="_blank">GitHub</el-link>
              上点个 Star！
            </p>
          </template>
        </el-alert>
      </div>
      <div style="margin-top: 24px;width: 100%;">
        <Giscus
            :key="page.filePath"
            repo="wushuo894/ani-rss-docs"
            repo-id="R_kgDONKaoJw"
            category="Polls"
            category-id="DIC_kwDONKaoJ84Cn0w0"
            mapping="url"
            strict="1"
            reactions-enabled="0"
            emit-metadata="0"
            input-position="bottom"
            :theme="isDark ? 'dark' : 'light'"
            lang="zh-CN"
        />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme";
import {useSnowfall} from 'vue-snowfall'
import {onBeforeUnmount, onMounted, watch} from "vue";
import {inBrowser, useData} from "vitepress";
import {useWindowSize} from "@vueuse/core";

const {isDark, page} = useData();

const {Layout} = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;

  changeBarColor(dark);

  const iframe = document
      .querySelector("giscus-widget")
      ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
      {giscus: {setConfig: {theme: dark ? "dark" : "light"}}},
      "https://giscus.app"
  );
})

let {width} = useWindowSize()

let changeBarColor = (isDark) => {
  if (!inBrowser) return;

  if (isDark) {
    snowfall.startSnowflakes()
  } else {
    snowfall.stopSnowflakes()
  }

  const meta = document.getElementById('themeColorMeta');
  meta.content = isDark ? '#000000' : '#ffffff';
}

let snowfall = null

onMounted(() => {
  let snowflakesContent = document.createElement('div');
  snowflakesContent.classList.add('snowflakes-content');
  document.body.appendChild(snowflakesContent);

  snowfall = useSnowfall({
    interval: 300,           // Create snowflake every 300ms
    minSpeed: 15,           // Minimum falling speed (seconds)
    maxSpeed: 25,           // Maximum falling speed (seconds)
    minSize: 5,            // Minimum size in pixels
    maxSize: 20,            // Maximum size in pixels
    color: '#ffffff',       // Snowflake color
    zIndex: 999,            // Z-index for snowflakes
    maxFlakes: 100,         // Maximum number of snowflakes (optional)
    chaos: 50,              // Chaos level for random movement (0-100)
    container: snowflakesContent // Container element or selector
  })

  changeBarColor(isDark.value)

  setTimeout(() => {
    let {title, description} = page.value
    if (title !== '404') {
      return
    }
    if (description !== 'Not Found') {
      return
    }
    location.href = '/'
  }, 3000)
})

onBeforeUnmount(() => {
  snowfall.stopSnowflakes()
})

</script>
<style>
.snowflakes-content {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
</style>
