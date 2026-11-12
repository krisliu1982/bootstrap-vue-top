<template>
  <article class="bd-content" data-pagefind-body>
    <h1>团队</h1>
    <p class="lead">关于 Bootstrap 创始团队和核心贡献者的概述。</p>

    <p>Bootstrap 由创始团队和一小群不可或缺的核心贡献者维护，并得到了社区的巨力支持与参与。</p>
    <div class="list-group mb-3">
     <a v-for="member in data['core-team']" class="list-group-item list-group-item-action d-flex align-items-center" :href="`https://github.com/${member.user}`">
        <img :src="`https://github.com/${member.user}.png`" :alt="`@${member.user}`" width="32" height="32" class="rounded me-2" loading="lazy" />
        <span>
          <strong>{{ member.name }}</strong> @{{ member.user }}
        </span>
      </a>
    </div>
    <p>
      通过<a href="https://github.com/twbs/bootstrap/issues/new/choose">提交 issue</a>或提交 pull request 来参与 Bootstrap 的开发。阅读我们的<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.github/CONTRIBUTING.md">贡献指南</a>，了解我们的开发方式。
    </p>
    <DocsPager />
  </article>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
