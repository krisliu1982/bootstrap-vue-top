<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-position">
      <a href="#position-value">位置值</a>
      <a href="#position-arrange">排列元素</a>
      <a href="#position-center">中心元素</a>
      <a href="#position-example">示例</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-position" class="docs-content">
    <h1>Position 位置</h1>
    <p class="fs-4 fw-light">
      使用这些简写工具可以快速设置元素的位置。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/position/" target="_blank">Boostrap Position</a>
    </p>

    <h2 id="position-value">
      位置值<a class="anchor-link" aria-label="Link to this section: 位置值" href="#position-value"> </a>
    </h2>
    <p>有快速定位功能的版本可供选择，不过它们的响应性欠佳。</p>
    <code-highlight type="html" :code="valueCode" label="html" />

    <h2 id="position-arrange">
      排列元素<a class="anchor-link" aria-label="Link to this section: 排列元素" href="#position-arrange"> </a>
    </h2>
    <p>利用边缘定位工具可以轻松排列元素。其格式为 <code>{property}-{position}</code> 。</p>
    <p>其中 <em>property</em> 指的是以下之一：</p>
    <ul class="docs-content-list">
      <li><code>top</code> - for the vertical <code>top</code> position</li>
      <li><code>start</code> - for the horizontal <code>left</code> position (in LTR)</li>
      <li><code>bottom</code> - for the vertical <code>bottom</code> position</li>
      <li><code>end</code> - for the horizontal <code>right</code> position (in LTR)</li>
    </ul>
    <p>其中 <em>position</em> 指的是以下之一：</p>
    <ul class="docs-content-list">
      <li><code>0</code> - for <code>0</code> edge position</li>
      <li><code>50</code> - for <code>50%</code> edge position</li>
      <li><code>100</code> - for <code>100%</code> edge position</li>
    </ul>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="position-relative bg-body-secondary" style="height: 200px">
          <div class="position-absolute top-0 start-0 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div class="position-absolute top-0 end-0 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div class="position-absolute top-50 start-50 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div class="position-absolute bottom-50 end-50 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div class="position-absolute bottom-0 start-0 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div class="position-absolute bottom-0 end-0 bg-dark" style="width: 2rem; height: 2rem"></div>
        </div>
      </div>
      <code-highlight type="html" :code="arrangeCode" label="html" />
    </div>

    <h2 id="position-center">
      中心元素<a class="anchor-link" aria-label="Link to this section: 中心元素" href="#position-center"> </a>
    </h2>
    <p>此外，您还可以使用 transform 工具类 <code>.translate-middle</code> 来对元素进行居中处理。</p>
    <p>
      此类应用了 translateX(-50%) 和 translateY(-50%)
      这两个变换操作到元素上，与边缘定位工具结合使用后，能够让您将元素绝对居中显示。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="position-relative bg-body-secondary" style="height: 200px">
          <div class="position-absolute top-0 start-0 translate-middle bg-dark" style="width: 2rem; height: 2rem"></div>
          <div
            class="position-absolute top-0 start-50 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-0 start-100 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-50 start-0 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-50 start-50 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-50 start-100 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-100 start-0 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-100 start-50 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-100 start-100 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
        </div>
      </div>
      <code-highlight type="html" :code="centerCode" label="html" />
    </div>
    <p>
      通过添加 <code>.translate-middle-x</code> 或
      <code>.translate-middle-y</code> 类，元素就可以仅在水平方向或垂直方向上进行定位。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="position-relative bg-body-secondary" style="height: 200px">
          <div class="position-absolute top-0 start-0 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div
            class="position-absolute top-0 start-50 translate-middle-x bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div class="position-absolute top-0 end-0 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div
            class="position-absolute top-50 start-0 translate-middle-y bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-50 start-50 translate-middle bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div
            class="position-absolute top-50 end-0 translate-middle-y bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div class="position-absolute bottom-0 start-0 bg-dark" style="width: 2rem; height: 2rem"></div>
          <div
            class="position-absolute bottom-0 start-50 translate-middle-x bg-dark"
            style="width: 2rem; height: 2rem"
          ></div>
          <div class="position-absolute bottom-0 end-0 bg-dark" style="width: 2rem; height: 2rem"></div>
        </div>
      </div>
      <code-highlight type="html" :code="center1Code" label="html" />
    </div>

    <h2 id="position-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#position-example"> </a>
    </h2>
    <p>以下是这些课程在现实生活中的几个实例：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-5 flex-wrap">
          <button type="button" class="btn btn-primary position-relative">
            Mails
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary"
              >+99 <span class="visually-hidden">unread messages</span></span
            >
          </button>

          <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
            Marker
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="position-absolute top-100 start-50 translate-middle mt-1"
              fill="var(--bs-secondary)"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
          </div>

          <button type="button" class="btn btn-primary position-relative">
            Alerts
            <span
              class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"
              ><span class="visually-hidden">unread messages</span></span
            >
          </button>
        </div>
      </div>
      <code-highlight type="html" :code="example1Code" label="html" />
    </div>
    <p>
      您可以将这些类与现有的组件结合使用，从而创建新的组件。请记住，您可以通过向
      <code>$position-values</code> 变量中添加条目来扩展其功能。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="position-relative m-4">
          <div
            class="progress"
            role="progressbar"
            aria-label="Progress"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 1px"
          >
            <div class="progress-bar" style="width: 50%"></div>
          </div>
          <button
            type="button"
            class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
            style="width: 2rem; height: 2rem"
          >
            1
          </button>
          <button
            type="button"
            class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
            style="width: 2rem; height: 2rem"
          >
            2
          </button>
          <button
            type="button"
            class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
            style="width: 2rem; height: 2rem"
          >
            3
          </button>
        </div>
      </div>
      <code-highlight type="html" :code="example2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const valueCode = `
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>`;

const arrangeCode = `
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>`;

const centerCode = `
<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle"></div>
  <div class="position-absolute top-0 start-50 translate-middle"></div>
  <div class="position-absolute top-0 start-100 translate-middle"></div>
  <div class="position-absolute top-50 start-0 translate-middle"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 start-100 translate-middle"></div>
  <div class="position-absolute top-100 start-0 translate-middle"></div>
  <div class="position-absolute top-100 start-50 translate-middle"></div>
  <div class="position-absolute top-100 start-100 translate-middle"></div>
</div>`;

const center1Code = `
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>`;

const example1Code = `
<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</div>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>`;

const example2Code = `
<div class="position-relative m-4">
  <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
    <div class="progress-bar" style="width: 50%"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>`;
</script>
