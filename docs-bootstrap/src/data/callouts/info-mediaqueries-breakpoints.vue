<template>
  <p>
    <strong>为什么要减去 .02px？</strong>浏览器目前不支持<a href="https://www.w3.org/TR/mediaqueries-4/#range-context">范围上下文查询</a>，因此我们通过使用精度更高的值，来规避 <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"><code>min-</code> 和 <code>max-</code> 前缀</a>以及视口宽度带小数（例如在高 DPI 设备的某些情况下会出现）所带来的限制。
  </p>
</template>
