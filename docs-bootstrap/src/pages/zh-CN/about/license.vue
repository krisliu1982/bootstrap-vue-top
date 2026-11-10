<template>
  <article class="bd-content">
    <h1>许可证常见问题</h1>
    <p class="lead">关于 Bootstrap 开源许可证的常见问题。</p>

    <p>Bootstrap 基于 MIT 许可证发布，版权所有者为 2025 年。概括来说，可用以下条件说明。</p>
    <h2 id="it-requires-you-to">它要求你：<a class="anchor-link" href="#it-requires-you-to" aria-label="它要求你：链接"></a></h2>
    <ul>
      <li>当你在自己的作品中使用 Bootstrap 的 CSS 和 JavaScript 文件时，保留其中包含的许可证和版权声明</li>
    </ul>
    <h2 id="it-permits-you-to">它允许你：<a class="anchor-link" href="#it-permits-you-to" aria-label="它允许你：链接"></a></h2>
    <ul>
      <li>出于个人、私有、公司内部或商业目的，自由下载并全部或部分使用 Bootstrap</li>
      <li>在你创建的软件包或发行版中使用 Bootstrap</li>
      <li>修改源代码</li>
      <li>授予他人再许可，以修改并向许可证未涵盖的第三方分发 Bootstrap</li>
    </ul>
    <h2 id="it-forbids-you-to">它禁止你：<a class="anchor-link" href="#it-forbids-you-to" aria-label="它禁止你：链接"></a></h2>
    <ul>
      <li>要求作者和许可证所有者对损害承担责任，因为 Bootstrap 按“原样”提供，不附带任何担保</li>
      <li>要求 Bootstrap 的创作者或版权持有者承担责任</li>
      <li>在未适当署名的情况下再分发 Bootstrap 的任何部分</li>
      <li>以任何可能声明或暗示 Bootstrap 认可你的发行版的方式使用 Bootstrap 拥有的任何标志</li>
      <li>以任何可能声明或暗示你创建了相关 Bootstrap 软件的方式使用 Bootstrap 拥有的任何标志</li>
    </ul>
    <h2 id="it-does-not-require-you-to">它不要求你：<a class="anchor-link" href="#it-does-not-require-you-to" aria-label="它不要求你：链接"></a></h2>
    <ul>
      <li>在你组装并包含 Bootstrap 的任何再分发中，一并包含 Bootstrap 本身或你对其所做任何修改的源代码</li>
      <li>将你对 Bootstrap 所做的更改提交回 Bootstrap 项目（不过我们鼓励此类反馈）</li>
    </ul>
    <p>
      完整的 Bootstrap 许可证位于
     <a href="https://github.com/twbs/bootstrap/blob/v5.3.8/LICENSE">项目仓库中</a>，以获取更多信息。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#it-requires-you-to">它要求你：</a></li>
      <li><a href="#it-permits-you-to">它允许你：</a></li>
      <li><a href="#it-forbids-you-to">它禁止你：</a></li>
      <li>
       <a href="#it-does-not-require-you-to">它不要求你：</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
