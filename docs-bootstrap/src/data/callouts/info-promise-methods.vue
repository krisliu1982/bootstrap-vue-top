<template>
  <p>
    <strong>用于显示或隐藏组件的方法会返回一个 Promise。</strong>该 Promise 在过渡结束时兑现，因此 <code>await</code> 会在 <code>shown.bs.*</code> 或 <code>hidden.bs.*</code> 监听器执行的同一时刻继续。这些方法仍会立即返回，绝不会阻塞调用方。对已在过渡中的组件调用将不会产生任何效果，并会立即兑现。
    <a href="/docs/[[config:docs_version]]/getting-started/javascript/#promises-and-transitions">在 JavaScript 文档中了解更多。</a>
  </p>
</template>
