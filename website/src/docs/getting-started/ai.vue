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
        <h1>Using Bootstrap with AI</h1>
        <p>Learn about Bootstrap’s machine-readable docs and skills files for working with LLMs and agentic developer
            tools.</p>
        <h2 id="llm-ready-docs">
            LLM-ready docs
            <a class="anchor-link" href="#llm-ready-docs" aria-label="链接到LLM-ready docs章节"></a>
        </h2>
        <p>Our docs are available in a machine-readable format, following the <a
                href="https://llmstxt.org/">llms.txt</a> convention.</p>

        <div class="table-responsive">
            <table class="table md:table-stacked">
                <thead>
                    <tr>
                        <th>File</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>llms.txt</code></td>
                        <td>A curated index of every documentation page with links and descriptions.</td>
                        <td><a href="/llms.txt">/llms.txt</a></td>
                    </tr>
                    <tr>
                        <td><code>llms-full.txt</code></td>
                        <td>The full text of the documentation concatenated into a single file for direct ingestion.
                        </td>
                        <td><a href="/llms-full.txt">/llms-full.txt</a></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 id="skills">
            Skills
            <a class="anchor-link" href="#skills" aria-label="链接到Skills章节"></a>
        </h2>
        <p>Install every Bootstrap skill into your coding agent:</p>

        <CodeWrapper code="npx skills add twbs/bootstrap" lang="shell" />

        <p>The Skills CLI copies each <code>SKILL.md</code> from our repository into your agent. <a
                href="https://skills.sh">skills.sh</a> lists the package after people run that command. There is no
            submit form.</p>

        <p>Bootstrap also ships the same <a href="https://github.com/twbs/bootstrap/tree/main/skills">agent skills</a>
            in the <code>skills/</code> directory of our repository. Each skill is a focused, step-by-step playbook for
            one Bootstrap task, from migrating a project or setting up a new build to authoring a component and
            customizing our color system.</p>

        <p>To use one without the CLI, point your agent at the relevant <code>SKILL.md</code> file and describe what you
            want to do. The skill’s <code>description</code> field tells the agent when it applies, and its steps keep
            the agent aligned with our official guidance. Always review an agent’s changes against the matching
            documentation.</p>

        <div class="table-responsive">
            <table class="table md:table-stacked">
                <thead>
                    <tr>
                        <th scope="col">Skill</th>
                        <th scope="col">Description</th>
                        <th scope="col">Guide</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v4-v6-migration"><code
                                    class="text-nowrap">bootstrap-v4-v6-migration</code></a></td>
                        <td>Migrate a project from Bootstrap 4 to Bootstrap 6. Use when upgrading from Bootstrap 4,
                            jumping two major versions, or updating v4 class names, data attributes, forms, and
                            JavaScript across the v4-to-v5 and v5-to-v6 steps.</td>
                        <td><a href="/docs/guides/migration">Migration</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v5-v6-migration"><code
                                    class="text-nowrap">bootstrap-v5-v6-migration</code></a></td>
                        <td>Migrate projects from Bootstrap 5 to Bootstrap 6. Use when upgrading from Bootstrap 5,
                            migrating v5 to v6, or updating v5 class names, components, Sass, or JavaScript to the
                            latest version. For Bootstrap 4 projects, start with the v4-to-v6 migration skill instead.
                        </td>
                        <td><a href="/docs/guides/migration">Migration</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v6-install"><code
                                    class="text-nowrap">bootstrap-v6-install</code></a></td>
                        <td>Add Bootstrap 6 to a project and set it up for local development. Use when installing
                            Bootstrap, adding Bootstrap to a new or existing project, or setting up Bootstrap's CSS and
                            JavaScript via CDN or a package manager.</td>
                        <td><a href="/docs/getting-started/install">Install Bootstrap</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-npm"><code
                                    class="text-nowrap">bootstrap-npm</code></a></td>
                        <td>Build a Bootstrap 6 starter project using just npm and command-line tools (no bundler). Use
                            when setting up Bootstrap with npm, compiling Bootstrap's Sass to CSS from the command line,
                            or creating an npm-based Bootstrap project.</td>
                        <td><a href="/docs/guides/npm">Bootstrap and npm</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-webpack"><code
                                    class="text-nowrap">bootstrap-webpack</code></a></td>
                        <td>Include and bundle Bootstrap 6's CSS and JavaScript in a project using Webpack. Use when
                            setting up Bootstrap with Webpack, configuring Webpack loaders for Bootstrap's Sass and JS,
                            or creating a Webpack-based Bootstrap project.</td>
                        <td><a href="/docs/guides/webpack">Bootstrap and Webpack</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-parcel"><code
                                    class="text-nowrap">bootstrap-parcel</code></a></td>
                        <td>Include and bundle Bootstrap 6's CSS and JavaScript in a project using Parcel. Use when
                            setting up Bootstrap with Parcel, bundling Bootstrap's Sass and JS through Parcel, or
                            creating a Parcel-based Bootstrap project.</td>
                        <td><a href="/docs/guides/parcel">Bootstrap and Parcel</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-vite"><code
                                    class="text-nowrap">bootstrap-vite</code></a></td>
                        <td>Include and bundle Bootstrap 6's CSS and JavaScript in a project using Vite. Use when
                            setting up Bootstrap with Vite, bundling Bootstrap's Sass and JS through Vite, or creating a
                            Vite-based Bootstrap project.</td>
                        <td><a href="/docs/guides/vite">Bootstrap and Vite</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-component"><code
                                    class="text-nowrap">bootstrap-component</code></a></td>
                        <td>Build a Bootstrap 6 component's CSS and markup. Use when creating a new component, adding
                            modifier or variant classes, or authoring component styles with Bootstrap's Sass token maps
                            and theme overrides.</td>
                        <td><a href="/docs/customize/components">Components</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-component-js"><code
                                    class="text-nowrap">bootstrap-component-js</code></a></td>
                        <td>Add JavaScript behavior to a Bootstrap 6 component. Use when writing a component's
                            TypeScript source, extending BaseComponent, wiring the data API, adding events or config
                            options, or integrating Floating UI or a third-party library.</td>
                        <td><a href="/docs/getting-started/javascript">JavaScript</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-color-system"><code
                                    class="text-nowrap">bootstrap-color-system</code></a></td>
                        <td>Work with Bootstrap 6's color system in Sass and CSS. Use when customizing colors, adding or
                            overriding theme colors, working with color modes, or using the color scales, semantic
                            tokens, and theme classes.</td>
                        <td><a href="/docs/customize/color">Color</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-utility-api"><code
                                    class="text-nowrap">bootstrap-utility-api</code></a></td>
                        <td>Use, extend, and customize Bootstrap 6's utility API. Use when adding a custom utility
                            class, modifying or removing Bootstrap's default utilities, enabling responsive or state
                            variants, or trimming the generated utility CSS.</td>
                        <td><a href="/docs/utilities/api">Utility API</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>

    <nav class="docs-toc" id="table-of-contents" aria-label="Table of contents">
        <ul>
            <li>
                <a href="#llm-ready-docs">LLM-ready docs</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
        </ul>
    </nav>
</template>