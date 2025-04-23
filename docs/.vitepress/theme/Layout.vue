<!-- Layout.vue -->
<template>
  <Layout>
    <template #doc-after>
      <star-dialog/>
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
import StarDialog from "../../components/StarDialog.vue";

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
});
</script>
