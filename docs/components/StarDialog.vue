<template>
  <el-dialog v-model="dialogVisible" title="支持我们"
             width="500"
             center align-center :close-on-click-modal="false"
             @close="close">
    <div class="dialog-content">
      <p>如果您觉得这个项目有用，请考虑在 GitHub 上给我们点个 Star！</p>
      <div style="justify-content: end;width: 100%;display: flex;margin-top: 8px;">
        <el-button type="primary" @click="goToGitHub" bg text :icon="Github">前往 GitHub 点 Star</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import {onMounted, ref} from "vue";

import {Github} from "@vicons/fa";
import {useLocalStorage} from "@vueuse/core";

let dialogVisible = ref(false)

let goToGitHub = () => {
  window.open('https://github.com/wushuo894/ani-rss', '_blank')
  close()
}

let starDialog = useLocalStorage('star-dialog', false)

let close = () => {
  starDialog.value = true
  dialogVisible.value = false
}

onMounted(() => {
  if (starDialog.value) {
    return;
  }
  setTimeout(() => {
    dialogVisible.value = true
  }, 5 * 1000);
})

</script>

<style>
.dialog-content {
  text-align: center;
}
</style>