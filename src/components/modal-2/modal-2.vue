<template>
  <Teleport to="body">
    <Transition name="fadeIn">
      <div
        v-show="visible"
        ref="modalRef"
        class="modal modal-2"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div class="modal-dialog" :class="dialogClass">
          <div v-if="rendered" ref="contentRef" class="modal-content">
            <div ref="headerRef" class="modal-header" :style="{ cursor: draggable ? 'move' : 'auto' }">
              <h1 class="modal-title fs-5">{{ title }}</h1>
              <button type="button" class="btn-close" @click="visible = false" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div v-if="$slots.footer" class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, shallowRef, watch, nextTick, onBeforeUnmount, onMounted } from 'vue';
import { createFocusTrap } from 'focus-trap';
import counter from './counter.js';

const modalRef = shallowRef(null);
const contentRef = shallowRef(null);
const headerRef = shallowRef(null);

const visible = defineModel({ type: Boolean, required: true });
const rendered = ref(false);
let index = 0;
let focusTrapInstance = null;
const props = defineProps({
  title: {
    type: String,
    default: 'Modal2'
  },
  backdrop: {
    type: [String, Boolean],
    default: true
  },
  dialogClass: {
    type: String,
    default: null
  },
  destory: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  }
});

watch(visible, (val) => {
  val ? open() : close();
});

function open() {
  if (counter.get() === 0) {
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.clientWidth}px;`;
    }
  }

  rendered.value = true;

  nextTick(() => {
    //焦点陷阱
    if (focusTrapInstance === null) {
      focusTrapInstance = createFocusTrap(modalRef.value, {
        initialFocus: false,
        isolateSubtrees: true
      });
    }
    focusTrapInstance.activate();

    //开启拖动
    if (props.draggable) {
      onDraggable();
    }
  });

  index = counter.increment();

  //添加监听keydown
  document.addEventListener('keydown', handleKeyDown);
}

function close() {
  counter.decrement();
  if (counter.get() === 0) {
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style = null;
    }
  }

  if (props.destory) {
    rendered.value = false;
  }

  //停止焦点陷阱
  if (focusTrapInstance !== null) {
    focusTrapInstance.deactivate();
  }

  //关闭拖动
  if (props.draggable) {
    offDraggable();
  }

  //移除监听keydown
  document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === 'Escape' && index === counter.get()) {
    visible.value = false;
  }
}

//拖动
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;
let rafId = null;
let removeWillChangeTimeout = null;
const onDraggable = () => {
  headerRef.value.addEventListener('mousedown', handleMousedown);
  window.addEventListener('resize', resetPosition);
};
const offDraggable = () => {
  if (props.destory) {
    resetPosition();
  } else {
    headerRef.value.removeEventListener('mousedown', handleMousedown);
  }
  window.removeEventListener('resize', resetPosition);
};
function handleMousedown(e) {
  e.preventDefault();

  if (removeWillChangeTimeout !== null) {
    clearTimeout(removeWillChangeTimeout);
    removeWillChangeTimeout = null;
  }

  contentRef.value.style.willChange = 'transform';

  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  document.addEventListener('mousemove', handleMousemove);
  document.addEventListener('mouseup', handleMouseup);
}
function handleMousemove(e) {
  e.preventDefault();

  currentX = e.clientX - initialX;
  currentY = e.clientY - initialY;
  xOffset = currentX;
  yOffset = currentY;

  if (rafId === null) {
    rafId = requestAnimationFrame(updatePosition);
  }
}
function handleMouseup() {
  // 延迟移除 will-change
  removeWillChangeTimeout = setTimeout(() => {
    contentRef.value.style.willChange = 'auto';
  }, 300);

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  document.removeEventListener('mousemove', handleMousemove);
  document.removeEventListener('mouseup', handleMouseup);
}
function updatePosition() {
  contentRef.value.style.transform = `translate(${currentX}px, ${currentY}px)`;
  rafId = null;
}
function resetPosition() {
  xOffset = 0;
  yOffset = 0;
  if (contentRef.value) {
    contentRef.value.style.transform = 'none';
  }
}

onMounted(() => {
  if (props.backdrop === true) {
    modalRef.value.addEventListener('click', function (event) {
      if (event.target === modalRef.value) {
        visible.value = false;
      }
    });
  } else if (props.backdrop === 'static') {
    let count = 0;
    modalRef.value.addEventListener('click', function (event) {
      if (event.target === modalRef.value) {
        if (count === 0) {
          count++;
          contentRef.value.style.transition = 'transform 0.3s ease-out';
          contentRef.value.style.transform = 'scale(1.02)';
          contentRef.value.addEventListener(
            'transitionend',
            function () {
              contentRef.value.style.transform = 'none';
              contentRef.value.addEventListener(
                'transitionend',
                function () {
                  contentRef.value.style.transition = 'none';
                  count--;
                },
                { once: true }
              );
            },
            { once: true }
          );
        }
      }
    });
  }
});

onBeforeUnmount(() => {
  counter.reset();

  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style = null;
  }

  //停止焦点陷阱
  if (focusTrapInstance !== null) {
    focusTrapInstance.deactivate();
  }

  //移除监听
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('mousemove', handleMousemove);
  document.removeEventListener('mouseup', handleMouseup);
  window.removeEventListener('resize', resetPosition);
});
</script>
