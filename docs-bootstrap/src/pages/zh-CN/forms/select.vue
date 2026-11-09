<template>
  <article class="bd-content">
    <h1>选择框</h1>
    <p>使用自定义 CSS 定制原生 `&lt;select&gt;`，改变元素的初始外观。</p>

    <h2 id="default">默认<a class="anchor-link" href="#default" aria-label="默认链接"></a></h2>
    <p>自定义 <code>&lt;select&gt;</code> 菜单只需一个自定义类 <code>.form-select</code> 即可触发自定义样式。由于浏览器限制，自定义样式仅限于 <code>&lt;select&gt;</code> 的初始外观，无法修改 <code>&lt;option&gt;</code>。</p>
    <Example
      code='<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>'
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>你还可以选择小型和大型自定义选择框，以匹配尺寸相同的文本输入框。</p>
    <Example
      code='<select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>'
    />
    <p>同样支持 <code>multiple</code> 属性：</p>
    <Example
      code='<select class="form-select" multiple aria-label="Multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>'
    />
    <p><code>size</code> 属性也是如此：</p>
    <Example
      code='<select class="form-select" size="3" aria-label="Size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>'
    />
    <h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2>
    <p>在选择框上添加 <code>disabled</code> 布尔属性，可使其呈现灰色外观并移除指针事件。</p>
    <Example
      code='<select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="form-select-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#default">默认</a></li>
      <li><a href="#sizing">尺寸</a></li>
      <li><a href="#disabled">禁用状态</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
