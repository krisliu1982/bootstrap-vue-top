<template>
  <p>
    可以通过按钮上的 <code>data-bs-dismiss</code> 属性来实现关闭，该按钮位于 <strong>{{ props.name }} 内部</strong>，如下所示：
  </p>

  <CodeWrapper :code="`<button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;${props.name}&quot; aria-label=&quot;Close&quot;></button>`" lang="html" />

  <p>
    或者，也可以使用额外的 <code>data-bs-target</code>，通过位于 <strong>{{ props.name }} 外部</strong>的按钮来实现关闭，如下所示：
  </p>

  <CodeWrapper :code="`<button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;${props.name}&quot; data-bs-target=&quot;#my-${props.name}&quot; aria-label=&quot;Close&quot;></button>`" lang="html" />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: null
  }
});
</script>
