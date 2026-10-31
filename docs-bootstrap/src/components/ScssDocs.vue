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
    <Code :code="content" lang="scss" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Code from './code.vue'

const props = defineProps({
  /**
   * Reference name used to find the content to display within the content of the `file` prop.
   */
  name: {
    type: String,
    required: true,
  },
  /**
   * File path that contains the content to display relative to the root of the repository.
   */
  file: {
    type: String,
    required: true,
  },
})

if (!props.name || !props.file) {
  throw new Error(
    `Missing required parameter(s) for the '<ScssDocs />' component, expected both 'name' and 'file' but got 'name: ${props.name}' and 'file: ${props.file}'.`
  )
}

// 构建时：把所有可能被引用的 scss 文件以 raw 字符串形式收集进来
// eager: true 让它同步可用，直接拿到 string
const rawFiles = import.meta.glob(['@data/scss/_variables.scss', 
'@data/scss/_accordion.scss', 
'@data/scss/_alert.scss', 
'@data/scss/mixins/_alert.scss', 
'@data/scss/_badge.scss', 
'@data/scss/_breadcrumb.scss', 
'@data/scss/_buttons.scss', 
'@data/scss//mixins/_buttons.scss', 
'@data/scss/_card.scss', 
'@data/scss/_close.scss', 
'@data/scss/_transitions.scss', 
'@data/scss/_dropdown.scss', 
'@data/scss/mixins/_caret.scss', 
'@data/scss/_list-group.scss', 
'@data/scss/_modal.scss', 
'@data/scss/_navbar.scss', 
'@data/scss/_nav.scss', 
'@data/scss/_utilities.scss', 
'@data/scss/_maps.scss', 
'@data/scss/mixins/_border-radius.scss', 
'@data/scss/_root.scss', 
'@data/scss/_gradients.scss', 
'@data/scss/helpers/_stacks.scss', 
'@data/scss/mixins/_clearfix.scss', 
'@data/scss/forms/_validation.scss', 
'@data/scss/mixins/_forms'], {
  query: '?raw',
  import: 'default',
  eager: true,
})

/**
 * 把运行时传入的 file 归一化成 glob key 的形式。
 * import.meta.glob 的 key 是相对项目根、以 / 开头的绝对路径，
 * 而 props.file 可能是不带前导 /、用 \ 分隔、或含 ../ 的相对路径。
 */
function normalizeKey(file) {
  let key = file.replaceAll('\\', '/')
  // 统一成以 / 开头
  if (!key.startsWith('/')) key = '/' + key
  return key
}

function parseContent(fileContent, name, file) {
  try {
    const matches = fileContent.match(
      new RegExp(`// scss-docs-start ${name}\n((?:.|\\n)*)// scss-docs-end ${name}`, 'm')
    )

    if (!matches || !matches[1]) {
      throw new Error(
        `Failed to find the content named '${name}', make sure that '// scss-docs-start ${name}' and '// scss-docs-end ${name}' are defined.`
      )
    }

    let content = matches[1].replaceAll(' !default', '')

    // Fix the indentation by removing extra spaces at the beginning of each line
    const lines = content.split('\n')
    const spaceCounts = lines
      .filter((line) => line.trim().length > 0)
      .map((line) => line.match(/^ */)[0].length)
    const minSpaces = spaceCounts.length ? Math.min(...spaceCounts) : 0
    content = lines.map((line) => line.slice(minSpaces)).join('\n')

    return content
  } catch (error) {
    throw new Error(
      `Failed to find the content to render in the '<ScssDocs />' component at '${file}'.`,
      { cause: error }
    )
  }
}

function extractContent(name, file) {
  const normalized = normalizeKey(file)
  const fileContent = rawFiles[normalized]

  if (!fileContent) {
    // 兜底：用后缀匹配，应对路径前缀不完全一致的情况
    const matchedKey = Object.keys(rawFiles).find((k) => k.endsWith(normalized))
    if (!matchedKey) {
      throw new Error(
        `Failed to find the content to render in the '<ScssDocs />' component at '${file}'. ` +
        `Make sure the file is matched by the import.meta.glob pattern.`
      )
    }
    return parseContent(rawFiles[matchedKey], name, file)
  }

  return parseContent(fileContent, name, file)
}

const content = extractContent(props.name, props.file)

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