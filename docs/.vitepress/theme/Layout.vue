<!-- Layout.vue -->
<template>
  <Layout>
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
      <div style="margin-top: 24px">
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
import {watch} from "vue";
import {inBrowser, useData} from "vitepress";

const {isDark, page} = useData();

const {Layout} = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
      .querySelector("giscus-widget")
      ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
      {giscus: {setConfig: {theme: dark ? "dark" : "light"}}},
      "https://giscus.app"
  );
})
</script>
