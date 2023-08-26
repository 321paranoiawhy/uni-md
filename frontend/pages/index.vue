<template>
  <div class="root">
    <div class="upload-file" v-if="fileList && fileList.length">
      <Icon name="bi:markdown" color="#606266" size="18" />
      <!-- {{ fileList?.[0].raw?.name }} -->
      <span class="name">{{ fileList[0].name }}</span>
      <!-- <span>{{ fileList[0].uid }}</span> -->
      <span class="time">{{ new Date(fileList![0].uid!) }}</span>
    </div>

    <!-- markdown MIME type: text/markdown -->
    <!-- see: https://www.rfc-editor.org/rfc/rfc7763 -->
    <el-upload
      class="upload-markdown"
      ref="upload"
      drag
      action="http://localhost:3002/uni-md/api/file/upload"
      accept=".md"
      :auto-upload="false"
      :show-file-list="false"
      :limit="1"
      v-model:file-list="fileList"
      :on-exceed="onExceed"
      :before-upload="beforeUpload"
      :on-change="onChange"
      :on-remove="onRemove"
      :on-progress="onProgress"
      :on-success="onSuccess"
      :on-error="onError"
    >
      <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
      <el-icon class="el-icon--upload"><el-icon-upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <!-- <template #tip>
      <div center class="el-upload__tip">a single markdown file</div>
    </template> -->
      <template #file> </template>
    </el-upload>

    <div class="upload-tip">
      <div>Tips:</div>
      <ul>
        <li>Only support markdown file with the extension <span>.md</span>.</li>
        <li>
          At most one markdown file can be uploaded. and file size should be
          less than <span>512kb</span>.
        </li>
        <li>
          Uploaded markdown file can be deleted and then another new markdown
          file can be added.
        </li>
      </ul>
    </div>

    <NuxtLink to="/markdown-preview">Markdown Preview</NuxtLink>

    <!-- <SignInWithGoogle></SignInWithGoogle> -->

    <AnimatedList animation="stagger" />
  </div>
</template>

<script setup lang="ts">
import { genFileId } from "element-plus";
import type {
  UploadInstance,
  UploadProps,
  UploadRawFile,
  UploadFile,
  UploadFiles,
  UploadUserFile,
  UploadProgressEvent,
} from "element-plus";

definePageMeta({
  // Route Validation
  // https://nuxt.com/docs/getting-started/routing#route-validation
  validate: async (route) => {
    console.log("validate query", route.query);
    const queryLength = Object.keys(route.query).length;
    console.log("queryLength", queryLength);
    // 没有查询参数
    if (queryLength === 0) {
      console.log("登录后进入了首页");
      return true;
    } else if (queryLength === 1 && route.query.cookie) {
      // 仅有 cookie 一个查询参数
      return true;
    } else {
      // 返回 (跳转) 404 页面
      return false;
    }
  },
});

const route = useRoute();
const router = useRouter();

// setTimeout(() => {
//   navigateTo("/?cookie=111111", { redirectCode: 301, replace: true });
// }, 3000);

watch(
  () => route,
  () => {
    console.log("index query", route.query);
    if (route.query.cookie) {
      // navigateTo("/");
      router.replace({ path: "/", query: {} });
    }
  }
);

const upload = ref<UploadInstance>();
const fileList = ref<UploadUserFile[]>();

const fileToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(); // 定义方法读取文件
    reader.readAsDataURL(file); // 开始读文件 进行base64加密形成字符串
    reader.onload = () => resolve(reader.result); // 成功返回对应的值
    reader.onerror = (error) => reject(error); // 失败返回失败信息
  });
};

// onMounted(() => {
//   ElNotification({
//     title: "Success",
//     message: "Upload markdown file successfully",
//     type: "success",
//     position: "top-right",
//   });
// });

// 上传文件超出数量限制回调
const onExceed: UploadProps["onExceed"] = (files: File[]) => {
  ElMessageBox.confirm(
    "Already upload a markdown file, this would delete the old file, continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
    }
  )
    .then(() => {
      // 清空
      upload.value!.clearFiles();
      const file = files[0] as UploadRawFile;
      file.uid = genFileId();
      upload.value!.handleStart(file);
    })
    .catch(() => {
      //   ElMessage.success("Delete canceled.");
    });
};

// 上传前回调
const beforeUpload = (rawFile: UploadRawFile) => {
  console.log(rawFile);
};

// 上传文件发生变化回调
const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log(uploadFile, uploadFiles);
  // 限制上传文件大小
  if (uploadFile?.size && uploadFile.size >= 512 * 1024) {
    console.log("size", uploadFile.size);
  } else {
    upload.value?.submit();
  }
};

// 成功删除上传文件回调
const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {};

const onProgress = (
  evt: UploadProgressEvent,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log(evt.percent);
};

const onSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log("upload file success", response);
};

const onError = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log("upload file error", error);
};
</script>

<style scoped lang="scss">
div.upload-file {
  color: var(--el-text-color-regular);
  text-align: center;
  font-size: var(--el-font-size-base);

  & svg {
    margin-right: 8px;
  }

  & span.name {
    margin-right: 12px;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 100px;
    border: 1px solid #d0d7de;
    color: #1a7f37;
    background-color: #dafbe1;
  }

  // & span.time {
  // }
  margin-bottom: 16px;
}

div.upload-markdown {
  margin: 32px;
}

div.upload-tip {
  margin-top: 32px;

  & ul li {
    padding: 0.5rem 0;
    color: rgb(47, 73, 94);

    & span {
      color: rgba(245, 101, 101, 1);
      background-color: rgba(247, 250, 252, 1);
      padding: 0.25rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
    }
  }
}

a {
  text-decoration: none;
}
</style>
