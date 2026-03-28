<template>
  <Transition name="fadeIn" @after-leave="$emit('destroy')">
    <div v-show="visible" ref="elementRef" tabindex="-1" class="alert-box d-flex justify-content-center align-items-start" role="alert">
      <div class="shadow rounded bg-body p-3 col-sm-9 col-md-6 col-lg-4 col-xl-3" style="margin-top: 25vh">
        <div class="d-flex justify-content-center align-items-center">
          <div class="me-2"><BiExclamationCircle class="text-danger fs-5" /></div>
          <div class="fs-5 fw-bolder">{{ message }}</div>
        </div>
        <hr />
        <div class="text-center">
          <button type="button" class="btn btn-primary" @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { createFocusTrap } from 'focus-trap'

const elementRef = ref(null)
let focusTrapInstance = null

const props = defineProps({
  message: {
    type: String,
    default: 'Alert Box'
  }
})

const visible = ref(false)

onMounted(() => {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.clientWidth}px;`
  }
  visible.value = true

  nextTick(() => {
    //焦点陷阱
    if (elementRef.value !== null) {
      focusTrapInstance = createFocusTrap(elementRef.value, {
        initialFocus: false
      })
      focusTrapInstance.activate()
    }
  })

  //添加监听keydown
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style = null
  }

  //停止焦点陷阱
  if (focusTrapInstance !== null) {
    focusTrapInstance.deactivate()
  }

  //移除监听keydown
  document.removeEventListener('keydown', handleKeyDown)
})

function confirm() {
  visible.value = false
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    confirm()
  }
}
</script>
