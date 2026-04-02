<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-toasts">
      <a href="#toasts-base">基础用法</a>
      <a href="#toasts-type">类型调整</a>
      <a href="#toasts-position">弹出位置</a>
      <a href="#toasts-html">HTML正文</a>
      <a href="#toasts-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-toasts" class="docs-content">
    <h1>Toasts 轻提示</h1>
    <p class="fs-4 fw-light">
      通过弹出提示的方式向您的访客发送通知，这是一种简洁且易于自定义的提醒信息。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/scrollspy/" target="_blank">Bootstrap Toasts</a>
    </p>

    <h2 id="toasts-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#toasts-base"> </a>
    </h2>
    <p>
      通过提供 <code>toast</code> 方法并且它接受一个 <code>Object</code> 作为其参数。 在最简单的情况下，你可以通过设置
      <code>title</code> 和 <code>message</code> 属性来设置通知的标题和HTML正文。
      默认情况下，通知在5000毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。
      如果你将它设置为 <code>0</code>，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 接收一个
      <code>Number</code>，单位为毫秒。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <button type="button" class="btn btn-primary" @click="handleClick1">Closes automatically</button>
          <button type="button" class="btn btn-primary" @click="handleClick2">Won't close automatically</button>
        </div>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="toasts-type">
      类型调整<a class="anchor-link" aria-label="Link to this section: 类型调整" href="#toasts-type"> </a>
    </h2>
    <p>
      我们提供了四种不同类型:
      <code>success | danger | warning | info</code>。可以设置 <code>type</code> 字段来修改，默认 <code>info</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <button type="button" class="btn btn-success" @click="handleClickSuccess">Success</button>
          <button type="button" class="btn btn-danger" @click="handleClickDanger">Danger</button>
          <button type="button" class="btn btn-warning" @click="handleClickWarning">Warning</button>
          <button type="button" class="btn btn-info" @click="handleClickInfo">Info</button>
        </div>
      </div>
      <code-highlight type="vue" :code="typeCode" label="vue" />
    </div>

    <h2 id="toasts-position">
      弹出位置<a class="anchor-link" aria-label="Link to this section: 弹出位置" href="#toasts-position"> </a>
    </h2>
    <p>
      使用 position 属性设置的弹出位置， 支持五个选项:
      <code>top-right | top-left | top-center | bottom-right | bottom-left</code>， 默认为 <code>top-right</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="handleClickTopRight">TopRight</button>
          <button type="button" class="btn btn-primary" @click="handleClickTopLeft">TopLeft</button>
          <button type="button" class="btn btn-primary" @click="handleClickTopCenter">TopCenter</button>
          <button type="button" class="btn btn-primary" @click="handleClickBottomRight">BottomRight</button>
          <button type="button" class="btn btn-primary" @click="handleClickBottomLeft">BottomLeft</button>
        </div>
      </div>
      <code-highlight type="vue" :code="positionCode" label="vue" />
    </div>

    <h2 id="toasts-html">
      HTML正文<a class="anchor-link" aria-label="Link to this section: HTML正文" href="#toasts-html"> </a>
    </h2>
    <p><code>message</code> 字段可以为 HTML 内容。</p>
    <p class="text-bg-danger">
      在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。永远不要使用用户提供的 HTML 内容。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="handleClickHtml">Html content</button>
      </div>
      <code-highlight type="vue" :code="contentCode" label="vue" />
    </div>

    <h2 id="toasts-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#toasts-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，下拉菜单现在在
      <code>.toast</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_spinners.scss" />
  </div>
</template>

<script setup>
import { toast } from 'bootstrap-vue-ui';

function handleClick1() {
  toast({
    title: 'Closes automatically',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClick2() {
  toast({
    title: "Won't close automatically",
    message: `<p class="fs-5">Hello, world! This is a toast message.</p>`,
    duration: 0
  });
}

function handleClickSuccess() {
  toast({
    type: 'success',
    title: 'success',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickDanger() {
  toast({
    type: 'danger',
    title: 'danger',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickWarning() {
  toast({
    type: 'warning',
    title: 'warning',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickInfo() {
  toast({
    type: 'info',
    title: 'info',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickTopRight() {
  toast({
    position: 'top-right',
    title: 'top-right',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickTopLeft() {
  toast({
    position: 'top-left',
    title: 'top-right',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickTopCenter() {
  toast({
    position: 'top-center',
    title: 'top-center',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickBottomRight() {
  toast({
    position: 'bottom-right',
    title: 'bottom-right',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickBottomLeft() {
  toast({
    position: 'bottom-left',
    title: 'bottom-left',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickHtml() {
  toast({
    title: 'Html content',
    message: `<p class="text-bg-success p-2">Hello, world! This is a toast message.</p>
                <p class="text-bg-danger p-2 fs-5">Hello, world! This is a toast message.</p>`
  });
}
const baseCode = `
<template>
  <div class="hstack gap-3">
    <button type="button" class="btn btn-primary" 
      @click="handleClick1">Closes automatically</button>
    <button type="button" class="btn btn-primary" 
      @click="handleClick2">Won't close automatically</button>
  </div>
</template>

<script setup>
import { toast } from 'bootstrap-vue-ui'

function handleClick1() {
  toast({
   title: 'Closes automatically', 
   message: 'Hello, world! This is a toast message.' 
  })
}

function handleClick2() {
  toast({ 
    title: 'Won't close automatically', 
    message: \`<p class="fs-5">Hello, world! This is a toast message.</p>\`, 
    duration: 0 
  })
}
<\/script>`;

const typeCode = `
<template>
  <div class="hstack gap-3">
    <button type="button" class="btn btn-success" 
      @click="handleClickSuccess">Success</button>
    <button type="button" class="btn btn-danger" 
      @click="handleClickDanger">Danger</button>
    <button type="button" class="btn btn-warning" 
      @click="handleClickWarning">Warning</button>
    <button type="button" class="btn btn-info" 
      @click="handleClickInfo">Info</button>
  </div>
</template>

<script setup>
import { toast } from 'bootstrap-vue-ui'

function handleClickSuccess() {
  toast({ 
    type: 'success', 
    title: 'success', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickDanger() {
  toast({ 
    type: 'danger', 
    title: 'danger', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickWarning() {
  toast({ 
    type: 'warning', 
    title: 'warning', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickInfo() {
  toast({ 
    type: 'info', 
    title: 'info', 
    message: 'Hello, world! This is a toast message.' })
}
<\/script>`;

const positionCode = `
<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" 
      @click="handleClickTopRight">TopRight</button>
    <button type="button" class="btn btn-primary" 
      @click="handleClickTopLeft">TopLeft</button>
    <button type="button" class="btn btn-primary" 
      @click="handleClickTopCenter">TopCenter</button>
    <button type="button" class="btn btn-primary" 
      @click="handleClickBottomRight">BottomRight</button>
    <button type="button" class="btn btn-primary" 
      @click="handleClickBottomLeft">BottomLeft</button>
  </div>
</template><script setup>
import { toast } from 'bootstrap-vue-ui'

function handleClickTopRight() {
  toast({ 
    position: 'top-right', 
    title: 'top-right', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickTopLeft() {
  toast({ 
    position: 'top-left', 
    title: 'top-right', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickTopCenter() {
  toast({
    position: 'top-center', 
    title: 'top-center', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickBottomRight() {
  toast({ 
    position: 'bottom-right', 
    title: 'bottom-right', 
    message: 'Hello, world! This is a toast message.' })
}

function handleClickBottomLeft() {
  toast({ 
    position: 'bottom-left', 
    title: 'bottom-left', 
    message: 'Hello, world! This is a toast message.' })
}
<\/script>`;

const contentCode = `
<template>
  <button type="button" class="btn btn-primary" 
    @click="handleClickHtml">Html content</button>
</template>

<script setup>
import { toast } from 'bootstrap-vue-ui'

function handleClickHtml() {
  toast({ 
    title: 'Html content', 
    message: \`<p class="text-bg-success p-2">Hello, world! This is a toast message.</p>
              <p class="text-bg-danger p-2 fs-5">Hello, world! This is a toast message.</p>\` 
  })
}
<\/script>`;

const css1Code = `
--#{$prefix}toast-zindex: #{$zindex-toast};
--#{$prefix}toast-padding-x: #{$toast-padding-x};
--#{$prefix}toast-padding-y: #{$toast-padding-y};
--#{$prefix}toast-spacing: #{$toast-spacing};
--#{$prefix}toast-max-width: #{$toast-max-width};
@include rfs($toast-font-size, --#{$prefix}toast-font-size);
--#{$prefix}toast-color: #{$toast-color};
--#{$prefix}toast-bg: #{$toast-background-color};
--#{$prefix}toast-border-width: #{$toast-border-width};
--#{$prefix}toast-border-color: #{$toast-border-color};
--#{$prefix}toast-border-radius: #{$toast-border-radius};
--#{$prefix}toast-box-shadow: #{$toast-box-shadow};
--#{$prefix}toast-header-color: #{$toast-header-color};
--#{$prefix}toast-header-bg: #{$toast-header-background-color};
--#{$prefix}toast-header-border-color: #{$toast-header-border-color};`;
</script>
