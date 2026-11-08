<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-alerts-message">
      <a href="#alerts-message-base">基础用法</a>
      <a href="#alerts-message-type">不同类型</a>
      <a href="#alerts-message-duration">显示时间</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-alerts-message" class="docs-content">
    <h1>Alerts Message 警示消息</h1>
    <p class="fs-4 fw-light">常用于主动操作后的反馈提示。与 Toast 的区别是后者更多用于的被动提示。</p>

    <h2 id="alerts-message-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#alerts-message-base"> </a>
    </h2>
    <p>
      通过提供 <code>alertMessage</code> 方法并且它接受一个 <code>Object</code> 作为其参数。 你可以通过
      <code>message</code> 属性来设置消息内容。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="handleClick">Alert Message</button>
        </div>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="alerts-message-type">
      不同类型<a class="anchor-link" aria-label="Link to this section: 不同类型" href="#alerts-message-type"> </a>
    </h2>
    <p>
      通过设置
      <code>type</code> 做出不同的操作反馈提示。提供八种消息类型为：<code>{{ messageTypes.join(' | ') }}</code
      >，默认为 <code>info</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <button
            v-for="item in messageTypes"
            type="button"
            class="btn"
            :class="`btn-${item}`"
            @click="alertMessage({ type: item, message: `Message ${item}` })"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <code-highlight type="vue" :code="typeCode" label="vue" />
    </div>

    <h2 id="alerts-message-duration">
      显示时间<a class="anchor-link" aria-label="Link to this section: 显示时间" href="#alerts-message-duration"> </a>
    </h2>
    <p>通过设置 <code>duration</code> 用于控制显示消息的时间。默认为 <code>3000</code> 毫秒。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button
          type="button"
          class="btn btn-primary"
          @click="
            alertMessage({
              type: item,
              message: 'Message info',
              duration: 1000
            })
          "
        >
          1000毫秒显示
        </button>
      </div>
      <code-highlight type="vue" :code="durationCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-top';

function handleClick() {
  alertMessage({ message: 'This is a alert-message message.' });
}

const messageTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const baseCode = `
<template>
  <button type="button" class="btn btn-primary" 
    @click="handleClick">Alert Message</button>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-top'

function handleClick() {
  alertMessage({ message: 'This is a alert-message message.' })
}
<\/script>`;

const typeCode = `
<template>
  <div class="hstack gap-3 flex-wrap">
    <button v-for="item in messageTypes" type="button" class="btn" :class="\`btn-\${item}\`"
      @click="alertMessage({ type: item, message: \`Message \${item}\` })">
      {{ item }}
    </button>
  </div>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-top'

const messageTypes = [
  'primary', 
  'secondary', 
  'success', 
  'danger', 
  'warning', 
  'info', 
  'light', 
  'dark']
<\/script>`;

const durationCode = `
<template>
  <button type="button" class="btn btn-primary"
    @click="alertMessage({ type: item, message: 'Message info', duration: 1000 })">
    1000毫秒显示
  </button>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-top'
<\/script>`;
</script>
