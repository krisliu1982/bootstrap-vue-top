
<template>
  <article>
    <h1>Translations</h1>
    <p>Links to community-translated Bootstrap documentation sites.</p>

    <p>Community members have translated Bootstrap’s documentation into various languages. None are officially supported and they may not always be up-to-date.</p>
    <ul>
      <li v-for="translation in data.translations"><a :href="translation.url" :hreflang="translation.code" :lang="translation.code" >{{translation.description}} ({{translation.name}})</a></li>
    </ul><p><strong>We don’t help organize or host translations, we just link to them.</strong></p>
    <p>Finished a new or better translation? Open a pull request to add it to our list.</p>
  </article>
</template>

<script setup>
import data from '@data/data.js'
</script>
