<template>
  <p>
    由于选项既可以通过数据属性（data attributes）传递，也可以通过 JavaScript 传递，因此你可以在 <code>data-bs-</code> 后面附加选项名，例如 <code>data-bs-animation="{value}"</code>。当通过数据属性传递选项时，请务必将选项名的命名格式从“<em>camelCase</em>（驼峰式）”改为“<em>kebab-case</em>（短横线式）”。例如，应使用
    <code>data-bs-custom-class="beautifier"</code>，而不是 <code>data-bs-customClass="beautifier"</code>。
  </p>

  <p>
    从 Bootstrap 5.2.0 起，所有组件都支持一个<strong>实验性的</strong>保留数据属性 <code>data-bs-config</code>，它可以用 JSON 字符串的形式存放简单的组件配置。当一个元素同时具有 <code>data-bs-config='{"delay":0, "title":123}'</code> 和 <code>data-bs-title="456"</code> 属性时，最终的
    <code>title</code> 值将是 <code>456</code>，并且单独的数据属性会覆盖 <code>data-bs-config</code> 中给出的值。此外，现有的数据属性也能够存放 JSON 值，例如 <code>data-bs-delay='{"show":0,"hide":150}'</code>。
  </p>

  <p>最终的配置对象是 <code>data-bs-config</code>、<code>data-bs-</code> 和 <code>js object</code>（JavaScript 对象）合并后的结果，其中最后给出的键值对会覆盖其他来源中的同名键值。</p>
</template>