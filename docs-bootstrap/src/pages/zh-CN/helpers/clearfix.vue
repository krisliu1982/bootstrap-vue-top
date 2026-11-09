<template>
  <article class="bd-content">
    <h1>清除浮动</h1>
    <p>通过添加清除浮动工具类，快速轻松地清除容器内的浮动内容。</p>

    <p>为<strong>父元素</strong>添加 <code>.clearfix</code> 即可轻松清除 <code>float</code> 浮动。它也可以作为 mixin 使用。</p>
    <p>在 HTML 中的用法：</p>
    <CodeWrapper code='&lt;div class="clearfix"&gt;...&lt;/div&gt;' lang="html" />
    <p>mixin 源代码：</p>
    <ScssDocs name="clearfix" file="scss/mixins/_clearfix.scss" />
    <p>在 SCSS 中使用该 mixin：</p>
    <CodeWrapper
      code=".element {
  @include clearfix;
}
"
      lang="scss"
    />
    <p>以下示例演示了清除浮动的用法。如果不使用清除浮动，外层 div 将无法包裹按钮，从而导致布局错乱。</p>
    <Example
      code='<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>'
    />
    <DocsPager />
  </article>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
