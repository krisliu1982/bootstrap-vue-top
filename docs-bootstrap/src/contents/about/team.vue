
<template>
  <article>
    <h1>Team</h1>
    <p>An overview of the founding team and core contributors to Bootstrap.</p>

    <p>Bootstrap is maintained by the founding team and a small group of invaluable core contributors, with the massive support and involvement of our community.</p>
    <div class="list-group mb-3">
      <a v-for="member in data['core-team']" class="list-group-item list-group-item-action d-flex align-items-center" :href="`https://github.com/${member.user}`">
            <img :src="`https://github.com/${member.user}.png`" :alt="`@${member.user}`" width="32" height="32" class="rounded me-2" loading="lazy"/>
            <span>
              <strong>{{member.name}}</strong> @{{member.user}}
            </span>
          </a>
    </div><p>Get involved with Bootstrap development by <a href="https://github.com/twbs/bootstrap/issues/new/choose">opening an issue</a> or submitting a pull request. Read our <a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.github/CONTRIBUTING.md">contributing guidelines</a> for information on how we develop.</p>
  </article>
</template>

<script setup>
import data from '@/data/data.js'
</script>
