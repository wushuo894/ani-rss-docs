<template>
  <div>
    <el-tag v-if="configJson" closable @close="configJson = ''">
      {{ filename }}
    </el-tag>
    <el-upload
        v-else
        :before-upload="beforeAvatarUpload"
        :show-file-list="false"
        class="upload-demo"
        drag
        multiple
        style="width: 100%"
    >
      <el-icon class="el-icon--upload">
        <upload-filled/>
      </el-icon>
      <div class="el-upload__text">
        在这里拖放 config.v2.json 文件或 <em>点击上传</em>
      </div>
    </el-upload>
  </div>
  <div style="margin-top: 14px;">
    <el-form label-width="auto">
      <el-form-item label="用户名">
        <el-input placeholder="username" v-model="config.login.username">
          <template #prefix>
            <el-icon class="el-input__icon">
              <User/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="password" v-model="config.login.password">
          <template #prefix>
            <el-icon class="el-input__icon">
              <Key/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
  <div style="display: flex;width: 100%;justify-content: end;">
    <el-button bg text type="primary"
               @click="download"
               :icon="Download"
               :disabled="!configJson || !config.login.username || !config.login.password">
      下载修改后的 config.v2.json
    </el-button>
  </div>
</template>
<script setup>
import {Download, Key, UploadFilled, User} from "@element-plus/icons-vue"
import {ref} from "vue"
import {ElMessage} from "element-plus"
import md5 from "md5"

let configJson = ref("")

let config = ref({
  login: {
    username: "admin",
    password: ""
  },
})

let filename = ref("")

let beforeAvatarUpload = (rawFile) => {
  if (['config.json', 'config.v2.json'].indexOf(rawFile.name) < 0) {
    ElMessage.error('请上传 config.v2.json !')
    return false
  }
  filename.value = rawFile.name;
  (async () => {
    try {
      configJson.value = await readJSONFile(rawFile)
      config.value.login.username = configJson.value['login'].username
    } catch (error) {
      ElMessage.error(error.message)
    }
  })();
  return false
}


let readJSONFile = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = (event) => {
      try {
        let jsonData = JSON.parse(event.target.result);
        resolve(jsonData);
      } catch (error) {
        reject(`JSON解析失败: ${error.message}`);
      }
    };

    reader.onerror = () => {
      reject("文件读取失败");
    };

    reader.readAsText(file);
  });
}

let download = () => {
  let {username, password} = config.value.login
  username = username.trim()
  password = password.trim()

  if (!username || !password) {
    ElMessage.error('请输入修改后的账号与密码')
    return
  }

  configJson.value['login'].username = username
  configJson.value['login'].password = md5(password)

  const textContent = JSON.stringify(configJson.value);
  const blob = new Blob([textContent], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = filename.value;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

</script>
