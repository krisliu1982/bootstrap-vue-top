<!--
---
title: Using Bootstrap with AI
description: Learn about Bootstrap’s machine-readable docs and skills files for working with LLMs and agentic developer tools.
toc: true
---

Bootstrap ships resources built for large language models and AI-powered coding tools: machine-readable documentation you can feed to an LLM, and a set of agent skills that walk agents through common Bootstrap tasks step by step.

## LLM-ready docs

Our docs are available in a machine-readable format, following the [llms.txt](https://llmstxt.org/) convention.

<BsTable>
| File | Description | Link |
| --- | --- | --- |
| `llms.txt` | A curated index of every documentation page with links and descriptions. | [/llms.txt](/llms.txt) |
| `llms-full.txt` | The full text of the documentation concatenated into a single file for direct ingestion. | [/llms-full.txt](/llms-full.txt) |
</BsTable>

## Skills

Install every Bootstrap skill into your coding agent:

```sh
npx skills add twbs/bootstrap
```

The Skills CLI copies each `SKILL.md` from our repository into your agent. [skills.sh](https://skills.sh) lists the package after people run that command. There is no submit form.

Bootstrap also ships the same [agent skills](https://github.com/twbs/bootstrap/tree/main/skills) in the `skills/` directory of our repository. Each skill is a focused, step-by-step playbook for one Bootstrap task, from migrating a project or setting up a new build to authoring a component and customizing our color system.

To use one without the CLI, point your agent at the relevant `SKILL.md` file and describe what you want to do. The skill’s `description` field tells the agent when it applies, and its steps keep the agent aligned with our official guidance. Always review an agent’s changes against the matching documentation.

<SkillsTable />
-->

<template>
<article class="docs-content prose">
        <h1>在 AI 中使用 Bootstrap</h1>
        <p>了解 Bootstrap 面向 LLM 和智能体开发工具的机器可读文档与 skills 文件。</p>
        <h2 id="llm-ready-docs">
            面向 LLM 的文档
            <a class="anchor-link" href="#llm-ready-docs" aria-label="链接到面向 LLM 的文档章节"></a>
        </h2>
        <p>我们的文档提供机器可读格式，遵循 <a
                href="https://llmstxt.org/">llms.txt</a> 约定。</p>

        <div class="table-responsive">
            <table class="table md:table-stacked">
                <thead>
                    <tr>
                        <th>文件</th>
                        <th>说明</th>
                        <th>链接</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>llms.txt</code></td>
                        <td>每个文档页面的精选索引，包含链接和说明。</td>
                        <td><a href="https://getbootstrap.com/llms.txt">/llms.txt</a></td>
                    </tr>
                    <tr>
                        <td><code>llms-full.txt</code></td>
                        <td>将文档全文合并为单个文件，便于直接输入模型。</td>
                        <td><a href="https://getbootstrap.com/llms-full.txt">/llms-full.txt</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 id="skills">
            Skills
            <a class="anchor-link" href="#skills" aria-label="链接到Skills章节"></a>
        </h2>
        <p>将所有 Bootstrap skill 安装到你的编码智能体中：</p>

        <CodeWrapper code="npx skills add twbs/bootstrap" lang="shell" />

        <p>Skills CLI 会将我们仓库中的每个 <code>SKILL.md</code> 复制到你的智能体中。在人们运行该命令后，<a
                href="https://skills.sh">skills.sh</a> 会列出这个包。没有提交表单。</p>

        <p>Bootstrap 也在仓库的 <code>skills/</code> 目录中提供了同样的<a href="https://github.com/twbs/bootstrap/tree/main/skills">agent skills</a>。每个 skill 都是针对一项 Bootstrap 任务的分步操作手册，从迁移项目、搭建新构建，到编写组件、自定义配色系统。</p>

        <p>如果不想使用 CLI，可以让你的智能体指向相关的 <code>SKILL.md</code> 文件，并描述你想做的事情。skill 的 <code>description</code> 字段告诉智能体何时适用，其步骤能让智能体与我们的官方指南保持一致。请始终对照匹配的文档审查智能体的改动。</p>

        <div class="table-responsive">
            <table class="table md:table-stacked">
                <thead>
                    <tr>
                        <th scope="col">Skill</th>
                        <th scope="col">说明</th>
                        <th scope="col">指南</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v4-v6-migration"><code
                                    class="text-nowrap">bootstrap-v4-v6-migration</code></a></td>
                        <td>将项目从 Bootstrap 4 迁移到 Bootstrap 6。适用于从 Bootstrap 4 升级、跨两个大版本升级，或在 v4 到 v5、v5 到 v6 的步骤中更新 v4 类名、数据属性、表单和 JavaScript。</td>
                        <td><a href="/docs/guides/migration">迁移</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v5-v6-migration"><code
                                    class="text-nowrap">bootstrap-v5-v6-migration</code></a></td>
                        <td>将项目从 Bootstrap 5 迁移到 Bootstrap 6。适用于从 Bootstrap 5 升级、将 v5 迁移到 v6，或把 v5 的类名、组件、Sass 或 JavaScript 更新到最新版本。Bootstrap 4 项目请先使用 v4 到 v6 的迁移 skill。</td>
                        <td><a href="/docs/guides/migration">迁移</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v6-install"><code
                                    class="text-nowrap">bootstrap-v6-install</code></a></td>
                        <td>将 Bootstrap 6 添加到项目并配置本地开发环境。适用于安装 Bootstrap、将 Bootstrap 添加到新项目或现有项目，或通过 CDN 或包管理器配置 Bootstrap 的 CSS 和 JavaScript。</td>
                        <td><a href="/docs/getting-started/install">安装 Bootstrap</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-npm"><code
                                    class="text-nowrap">bootstrap-npm</code></a></td>
                        <td>仅使用 npm 和命令行工具（无打包器）构建 Bootstrap 6 起步项目。适用于用 npm 配置 Bootstrap、从命令行将 Bootstrap 的 Sass 编译为 CSS，或创建基于 npm 的 Bootstrap 项目。</td>
                        <td><a href="/docs/guides/npm">Bootstrap 与 npm</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-webpack"><code
                                    class="text-nowrap">bootstrap-webpack</code></a></td>
                        <td>使用 Webpack 在项目中引入并打包 Bootstrap 6 的 CSS 和 JavaScript。适用于用 Webpack 配置 Bootstrap、为 Bootstrap 的 Sass 和 JS 配置 Webpack loader，或创建基于 Webpack 的 Bootstrap 项目。</td>
                        <td><a href="/docs/guides/webpack">Bootstrap 与 Webpack</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-parcel"><code
                                    class="text-nowrap">bootstrap-parcel</code></a></td>
                        <td>使用 Parcel 在项目中引入并打包 Bootstrap 6 的 CSS 和 JavaScript。适用于用 Parcel 配置 Bootstrap、通过 Parcel 打包 Bootstrap 的 Sass 和 JS，或创建基于 Parcel 的 Bootstrap 项目。</td>
                        <td><a href="/docs/guides/parcel">Bootstrap 与 Parcel</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-vite"><code
                                    class="text-nowrap">bootstrap-vite</code></a></td>
                        <td>使用 Vite 在项目中引入并打包 Bootstrap 6 的 CSS 和 JavaScript。适用于用 Vite 配置 Bootstrap、通过 Vite 打包 Bootstrap 的 Sass 和 JS，或创建基于 Vite 的 Bootstrap 项目。</td>
                        <td><a href="/docs/guides/vite">Bootstrap 与 Vite</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-component"><code
                                    class="text-nowrap">bootstrap-component</code></a></td>
                        <td>构建 Bootstrap 6 组件的 CSS 和标记。适用于创建新组件、添加修饰符或变体类，或使用 Bootstrap 的 Sass token 映射和主题覆盖编写组件样式。</td>
                        <td><a href="/docs/customize/components">组件</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-component-js"><code
                                    class="text-nowrap">bootstrap-component-js</code></a></td>
                        <td>为 Bootstrap 6 组件添加 JavaScript 行为。适用于编写组件的 TypeScript 源码、扩展 BaseComponent、接入 data API、添加事件或配置选项，或集成 Floating UI 或第三方库。</td>
                        <td><a href="/docs/getting-started/javascript">JavaScript</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-color-system"><code
                                    class="text-nowrap">bootstrap-color-system</code></a></td>
                        <td>在 Sass 和 CSS 中使用 Bootstrap 6 的配色系统。适用于自定义颜色、添加或覆盖主题颜色、使用颜色模式，或使用色阶、语义 token 和主题类。</td>
                        <td><a href="/docs/customize/color">颜色</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-utility-api"><code
                                    class="text-nowrap">bootstrap-utility-api</code></a></td>
                        <td>使用、扩展和自定义 Bootstrap 6 的 utility API。适用于添加自定义工具类、修改或删除 Bootstrap 默认工具类、启用响应式或状态变体，或精简生成的工具类 CSS。</td>
                        <td><a href="/docs/utilities/api">Utility API</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>

    <nav class="docs-toc" id="table-of-contents" aria-label="Table of contents">
        <ul>
            <li>
                <a href="#llm-ready-docs">面向 LLM 的文档</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
        </ul>
    </nav>
</template>