<!-- JsDocs.vue -->
<script setup>
import {ref} from 'vue'
import Code from './code.vue'

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

let content = null
if (props.name === 'live-alert') {
  content = `const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    ``<div class="alert alert-${type} alert-dismissible" role="alert">``,
    ``   <div>${message}</div>``,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}`
} else if (props.name === 'varying-modal-content') {
  content = `const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = ``New message to ${recipient}``
    modalBodyInput.value = recipient
  })
}`
} else if (props.name === 'live-toast') {
  content = `const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}`
} else if (props.name === 'allow-list') {
  content = `const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

export const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}`
}

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