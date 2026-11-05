<template>
  <article ref="contentRef" class="bd-content">
    <h1>Best practices</h1>
    <p>Learn about some of the best practices we’ve gathered from years of working on and using Bootstrap.</p>

    <p>
      We’ve designed and developed Bootstrap to work in a number of environments. Here are some of the best practices we’ve gathered from years of working on and using it
      ourselves.
    </p>
    <Callout>
      <p><strong>Heads up!</strong> This copy is a work in progress.</p>
    </Callout>
    <h3 id="general-outline">General outline<a class="anchor-link" href="#general-outline" aria-label="Link to General outline"></a></h3>
    <ul>
      <li>Working with CSS</li>
      <li>Working with Sass files</li>
      <li>Building new CSS components</li>
      <li>Working with flexbox</li>
      <li>Ask in <a href="https://github.com/twbs/bootstrap/discussions">our GitHub Discussions</a></li>
    </ul>
  <DocsPager /></article>

  <nav ref="tocRef" class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#general-outline">General outline</a></li>
    </ul>
  </nav>
</template>

<script setup>import {ref} from 'vue'; const contentRef = ref(null);const tocRef = ref(null);
import { useContent } from '@/assets/content-handle.js'

useContent(contentRef.value,  tocRef.value)
</script>
