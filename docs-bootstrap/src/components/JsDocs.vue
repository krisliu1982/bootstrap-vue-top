<!-- JsDocs.vue -->
<script setup>
import { ref } from 'vue'
import Code from './code.vue'

// 构建时把候选源文件以 raw 字符串全部导入。
// 范围按项目实际情况收窄；key 形如 '/src/js/demo.js'
const rawFiles = import.meta.glob(['@data/js/snippets.js', '@data/js/sanitizer.js'], {
  query: '?raw',
  import: 'default',
  eager: true
})

const props = defineProps({
  /**
   * Reference name used to find the content to display within the content of the `file` prop.
   */
  name: { type: String, required: true },
  /**
   * File path that contains the content to display relative to the root of the repository.
   */
  file: { type: String, required: true }
})

if (!props.name || !props.file) {
  throw new Error(
    `Missing required parameter(s) for the '<JsDocs />' component, expected both 'name' and 'file' but got 'name: ${props.name}' and 'file: ${props.file}'.`
  )
}

// file 是静态的，直接精确匹配 glob key（统一成以 / 开头）
const key = `/${props.file.replaceAll('\\', '/').replace(/^\//, '')}`

const fileContent = rawFiles[key]

if (fileContent == null) {
  throw new Error(
    `Failed to find the content to render in the '<JsDocs />' component at '${props.file}'. Make sure the file is covered by the import.meta.glob pattern and the path matches a glob key.`
  )
}

const matches = fileContent.match(
  new RegExp(`// js-docs-start ${props.name}\\n((?:.|\\n)*)// js-docs-end ${props.name}`, 'm')
)

if (!matches || !matches[1]) {
  throw new Error(
    `Failed to find the content named '${props.name}', make sure that '// js-docs-start ${props.name}' and '// js-docs-end ${props.name}' are defined.`
  )
}

let content = matches[1]

// Fix the indentation by removing extra spaces at the beginning of each line
const lines = content.split('\n')
const spaceCounts = lines
  .filter((line) => line.trim().length > 0)
  .map((line) => line.match(/^ */)[0].length)
const minSpaces = spaceCounts.length ? Math.min(...spaceCounts) : 0
content = lines.map((line) => line.slice(minSpaces)).join('\n')

const isCopy = ref(false);
function handleCopy() {
  navigator.clipboard
    .writeText(props.code)
    .then(() => {
      isCopy.value = true;
      setTimeout(() => {
        isCopy.value = false;
      }, 2000);
    })
    .catch((err) => {
      isCopy.value = false;
      console.log('复制错误', err);
    });
}
</script>

<template>
      <div class="docs-code-snippet docs-example-snippet">
      <div class="d-flex align-items-center highlight-toolbar px-3 py-2 border-0 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
        :href="`https://github.com/twbs/bootstrap/blob/v5.3.8/${props.file}`">{{ props.file }}</a>
      <div class="ms-auto">
        <BiCheckLg v-if="isCopy" class="text-success" />
        <a v-else role="button" class="text-body" title="Copy" aria-label="Copy" @click="handleCopy">
          <BiCopy />
        </a>
      </div>
    </div>
    <Code :code="content" lang="javascript" />
  </div>
</template>