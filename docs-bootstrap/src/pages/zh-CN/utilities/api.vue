<template>
  <article class="bd-content">
    <h1>工具类 API</h1>
    <p>工具类 API 是一个基于 Sass 的工具，用于生成工具类。</p>

    <p>
      Bootstrap 的工具类由我们的工具类 API 生成，你可以通过 Sass 修改或扩展默认的工具类集合。我们的工具类 API 基于一系列 Sass 映射和函数，用于生成带有各种选项的类族。如果你不熟悉 Sass 映射，请先阅读
     <a href="https://sass-lang.com/documentation/values/maps/">Sass 官方文档</a>以入门。
    </p>
    <p><code>$utilities</code> 映射包含我们的所有工具类，如果存在自定义的 <code>$utilities</code> 映射，它稍后会与之合并。工具类映射包含一个带键的工具类组列表，这些组接受以下选项：</p>
    <div class="table-responsive">
      <table class="table table-utilities">
        <thead>
          <tr>
            <th>选项</th>
            <th>类型</th>
            <th>默认值</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
             <a href="#property"><code>property</code></a>
            </td>
            <td><strong>必需</strong></td>
            <td>–</td>
            <td>属性名称，可以是字符串或字符串数组（例如水平内边距或外边距）。</td>
          </tr>
          <tr>
            <td>
             <a href="#values"><code>values</code></a>
            </td>
            <td><strong>必需</strong></td>
            <td>–</td>
            <td>
              值列表，或者当你希望类名与值不同时使用映射。如果将
              <code>null</code> 用作映射键，则 <code>class</code> 不会作为前缀添加到类名中。
            </td>
          </tr>
          <tr>
            <td>
             <a href="#class"><code>class</code></a>
            </td>
            <td>可选</td>
            <td>null</td>
            <td>生成的类的名称。如果未提供且 <code>property</code> 是字符串数组，<code>class</code> 将默认为 <code>property</code> 数组的第一个元素。如果未提供且 <code>property</code> 是字符串，则使用 <code>values</code> 的键作为 <code>class</code> 名称。</td>
          </tr>
          <tr>
            <td>
             <a href="#css-variable-utilities"><code>css-var</code></a>
            </td>
            <td>可选</td>
            <td><code>false</code></td>
            <td>布尔值，用于生成 CSS 变量而不是 CSS 规则。</td>
          </tr>
          <tr>
            <td>
             <a href="#css-variable-utilities"><code>css-variable-name</code></a>
            </td>
            <td>可选</td>
            <td>null</td>
            <td>规则集中 CSS 变量的自定义无前缀名称。</td>
          </tr>
          <tr>
            <td>
             <a href="#local-css-variables"><code>local-vars</code></a>
            </td>
            <td>可选</td>
            <td>null</td>
            <td>要在 CSS 规则之外额外生成的局部 CSS 变量映射。</td>
          </tr>
          <tr>
            <td>
             <a href="#states"><code>state</code></a>
            </td>
            <td>可选</td>
            <td>null</td>
            <td>要生成的伪类变体列表（例如 <code>:hover</code> 或 <code>:focus</code>）。</td>
          </tr>
          <tr>
            <td>
             <a href="#responsive"><code>responsive</code></a>
            </td>
            <td>可选</td>
            <td><code>false</code></td>
            <td>布尔值，表示是否应生成响应式类。</td>
          </tr>
          <tr>
            <td><code>rfs</code></td>
            <td>可选</td>
            <td><code>false</code></td>
            <td>布尔值，用于启用<a href="/getting-started/rfs">使用 RFS 的流式重新缩放</a>。</td>
          </tr>
          <tr>
            <td>
             <a href="#print"><code>print</code></a>
            </td>
            <td>可选</td>
            <td><code>false</code></td>
            <td>布尔值，表示是否需要生成打印类。</td>
          </tr>
          <tr>
            <td><code>rtl</code></td>
            <td>可选</td>
            <td><code>true</code></td>
            <td>布尔值，表示该工具类是否应在 RTL 中保留。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 id="api-explained">API 说明<a class="anchor-link" href="#api-explained" aria-label="API 说明"></a></h2>
    <p>所有工具类变量都被添加到 <code>_utilities.scss</code> 样式表中的 <code>$utilities</code> 变量中。每个工具类组看起来大致如下：</p>
    <CodeWrapper
      code='$utilities: (
  "opacity": (
    property: opacity,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
'
      lang="scss"
    />
    <p>其输出结果如下：</p>
    <CodeWrapper
      code=".opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }
"
      lang="css"
    />
    <h3 id="property">property 属性<a class="anchor-link" href="#property" aria-label="property 属性"></a></h3>
    <p>任何工具类都必须设置必需的 <code>property</code> 键，且它必须包含有效的 CSS 属性。该属性用于生成工具类的规则集。当省略 <code>class</code> 键时，它也会作为默认类名。请参考 <code>text-decoration</code> 工具类：</p>
    <CodeWrapper
      code='$utilities: (
  "text-decoration": (
    property: text-decoration,
    values: none underline line-through
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".text-decoration-none { text-decoration: none !important; }
.text-decoration-underline { text-decoration: underline !important; }
.text-decoration-line-through { text-decoration: line-through !important; }
"
      lang="css"
    />
    <h3 id="values">values 值<a class="anchor-link" href="#values" aria-label="values 值"></a></h3>
    <p>使用 <code>values</code> 键来指定生成的类名和规则中应为指定的 <code>property</code> 使用哪些值。它可以是列表或映射（在工具类中或 Sass 变量中设置）。</p>
    <p>
      作为列表，就像
     <a href="/utilities/text#text-decoration"><code>text-decoration</code> 工具类</a>那样：
    </p>
    <CodeWrapper
      code="values: none underline line-through
"
      lang="scss"
    />
    <p>
      作为映射，就像<a href="/utilities/opacity"><code>opacity</code> 工具类</a>那样：
    </p>
    <CodeWrapper
      code="values: (
  0: 0,
  25: .25,
  50: .5,
  75: .75,
  100: 1,
)
"
      lang="scss"
    />
    <p>
      作为设置列表或映射的 Sass 变量，就像我们的
     <a href="/utilities/position"><code>position</code> 工具类</a>那样：
    </p>
    <CodeWrapper
      code="values: $position-values
"
      lang="scss"
    />
    <h3 id="class">class 类<a class="anchor-link" href="#class" aria-label="class 类"></a></h3>
    <p>使用 <code>class</code> 选项可以更改编译后的 CSS 中使用的类前缀。例如，将 <code>.opacity-*</code> 改为 <code>.o-*</code>：</p>
    <CodeWrapper
      code='$utilities: (
  "opacity": (
    property: opacity,
    class: o,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".o-0 { opacity: 0 !important; }
.o-25 { opacity: .25 !important; }
.o-50 { opacity: .5 !important; }
.o-75 { opacity: .75 !important; }
.o-100 { opacity: 1 !important; }
"
      lang="css"
    />
    <p>如果 <code>class: null</code>，则会为每个 <code>values</code> 键生成类：</p>
    <CodeWrapper
      code='$utilities: (
  "visibility": (
    property: visibility,
    class: null,
    values: (
      visible: visible,
      invisible: hidden,
    )
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".visible { visibility: visible !important; }
.invisible { visibility: hidden !important; }
"
      lang="css"
    />
    <h3 id="css-variable-utilities">CSS 变量工具类<a class="anchor-link" href="#css-variable-utilities" aria-label="CSS 变量工具类"></a></h3>
    <p>将 <code>css-var</code> 布尔选项设为 <code>true</code>，API 就会为给定选择器生成局部 CSS 变量，而不是通常的 <code>property: value</code> 规则。可以添加可选的 <code>css-variable-name</code>，以设置与类名不同的 CSS 变量名。</p>
    <p>请参考我们的 <code>.text-opacity-*</code> 工具类。如果添加 <code>css-variable-name</code> 选项，我们将得到自定义输出。</p>
    <CodeWrapper
      code='$utilities: (
  "text-opacity": (
    css-var: true,
    css-variable-name: text-alpha,
    class: text-opacity,
    values: (
      25: .25,
      50: .5,
      75: .75,
      100: 1
    )
  ),
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".text-opacity-25 { --bs-text-alpha: .25; }
.text-opacity-50 { --bs-text-alpha: .5; }
.text-opacity-75 { --bs-text-alpha: .75; }
.text-opacity-100 { --bs-text-alpha: 1; }
"
      lang="css"
    />
    <h3 id="local-css-variables">局部 CSS 变量<a class="anchor-link" href="#local-css-variables" aria-label="局部 CSS 变量"></a></h3>
    <p>使用 <code>local-vars</code> 选项可以指定一个 Sass 映射，在该工具类规则的规则集中生成局部 CSS 变量。请注意，在生成的 CSS 规则中使用这些局部 CSS 变量可能需要额外的工作。例如，请参考我们的 <code>.bg-*</code> 工具类：</p>
    <CodeWrapper
      code='$utilities: (
  "background-color": (
    property: background-color,
    class: bg,
    local-vars: (
      "bg-opacity": 1
    ),
    values: map-merge(
      $utilities-bg-colors,
      (
        "transparent": transparent
      )
    )
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
"
      lang="css"
    />
    <h3 id="states">状态<a class="anchor-link" href="#states" aria-label="状态"></a></h3>
    <p>
      使用 <code>state</code> 选项可以生成伪类变体。例如伪类 <code>:hover</code> 和 <code>:focus</code>。提供状态列表时，会为该伪类创建类名。例如，要在悬停时更改不透明度，添加 <code>state: hover</code>，编译后的 CSS 中就会得到
      <code>.opacity-hover:hover</code>。
    </p>
    <p>需要多个伪类？使用以空格分隔的状态列表：<code>state: hover focus</code>。</p>
    <CodeWrapper
      code='$utilities: (
  "opacity": (
    property: opacity,
    class: opacity,
    state: hover,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".opacity-0-hover:hover { opacity: 0 !important; }
.opacity-25-hover:hover { opacity: .25 !important; }
.opacity-50-hover:hover { opacity: .5 !important; }
.opacity-75-hover:hover { opacity: .75 !important; }
.opacity-100-hover:hover { opacity: 1 !important; }
"
      lang="css"
    />
    <h3 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式"></a></h3>
    <p>添加 <code>responsive</code> 布尔值以在<a href="/layout/breakpoints">所有断点</a>生成响应式工具类（例如 <code>.opacity-md-25</code>）。</p>
    <CodeWrapper
      code='$utilities: (
  "opacity": (
    property: opacity,
    responsive: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media (min-width: 576px) {
  .opacity-sm-0 { opacity: 0 !important; }
  .opacity-sm-25 { opacity: .25 !important; }
  .opacity-sm-50 { opacity: .5 !important; }
  .opacity-sm-75 { opacity: .75 !important; }
  .opacity-sm-100 { opacity: 1 !important; }
}

@media (min-width: 768px) {
  .opacity-md-0 { opacity: 0 !important; }
  .opacity-md-25 { opacity: .25 !important; }
  .opacity-md-50 { opacity: .5 !important; }
  .opacity-md-75 { opacity: .75 !important; }
  .opacity-md-100 { opacity: 1 !important; }
}

@media (min-width: 992px) {
  .opacity-lg-0 { opacity: 0 !important; }
  .opacity-lg-25 { opacity: .25 !important; }
  .opacity-lg-50 { opacity: .5 !important; }
  .opacity-lg-75 { opacity: .75 !important; }
  .opacity-lg-100 { opacity: 1 !important; }
}

@media (min-width: 1200px) {
  .opacity-xl-0 { opacity: 0 !important; }
  .opacity-xl-25 { opacity: .25 !important; }
  .opacity-xl-50 { opacity: .5 !important; }
  .opacity-xl-75 { opacity: .75 !important; }
  .opacity-xl-100 { opacity: 1 !important; }
}

@media (min-width: 1400px) {
  .opacity-xxl-0 { opacity: 0 !important; }
  .opacity-xxl-25 { opacity: .25 !important; }
  .opacity-xxl-50 { opacity: .5 !important; }
  .opacity-xxl-75 { opacity: .75 !important; }
  .opacity-xxl-100 { opacity: 1 !important; }
}
"
      lang="css"
    />
    <h3 id="print">打印<a class="anchor-link" href="#print" aria-label="打印"></a></h3>
    <p>启用 <code>print</code> 选项还会<strong>另外</strong>为打印生成工具类，这些类仅在 <code>@media print { ... }</code> 媒体查询中生效。</p>
    <CodeWrapper
      code='$utilities: (
  "opacity": (
    property: opacity,
    print: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code=".opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media print {
  .opacity-print-0 { opacity: 0 !important; }
  .opacity-print-25 { opacity: .25 !important; }
  .opacity-print-50 { opacity: .5 !important; }
  .opacity-print-75 { opacity: .75 !important; }
  .opacity-print-100 { opacity: 1 !important; }
}
"
      lang="css"
    />
    <h2 id="importance">重要性<a class="anchor-link" href="#importance" aria-label="重要性"></a></h2>
    <p>API 生成的所有工具类都包含 <code>!important</code>，以确保它们按预期覆盖组件和修饰类。你可以使用 <code>$enable-important-utilities</code> 变量（默认为 <code>true</code>）在全局范围内切换此设置。</p>
    <h2 id="using-the-api">使用 API<a class="anchor-link" href="#using-the-api" aria-label="使用 API"></a></h2>
    <p>现在你已了解工具类 API 的工作原理，接下来学习如何添加自定义类以及修改默认的工具类。</p>
    <h3 id="override-utilities">覆盖工具类<a class="anchor-link" href="#override-utilities" aria-label="覆盖工具类"></a></h3>
    <p>使用相同的键即可覆盖已有的工具类。例如，如果你想要额外的响应式 overflow 工具类，可以这样做：</p>
    <CodeWrapper
      code='$utilities: (
  "overflow": (
    responsive: true,
    property: overflow,
    values: visible hidden scroll auto,
  ),
);
'
      lang="scss"
    />
    <h3 id="add-utilities">添加工具类<a class="anchor-link" href="#add-utilities" aria-label="添加工具类"></a></h3>
    <p>
      可以使用 <code>map-merge</code> 将新工具类添加到默认的 <code>$utilities</code> 映射中。请确保先导入必需的 Sass 文件和 <code>_utilities.scss</code>，然后使用 <code>map-merge</code> 添加额外的工具类。例如，下面演示如何添加一个包含三个值的响应式 <code>cursor</code> 工具类。
    </p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <h3 id="modify-utilities">修改工具类<a class="anchor-link" href="#modify-utilities" aria-label="修改工具类"></a></h3>
    <p>
      可以使用 <code>map-get</code> 和 <code>map-merge</code> 函数修改默认 <code>$utilities</code> 映射中已有的工具类。在下面的示例中，我们为 <code>width</code> 工具类添加了一个额外的值。首先进行一次初始的 <code>map-merge</code>，然后指定要修改的工具类。接着，使用 <code>map-get</code> 获取嵌套的 <code>&quot;width&quot;</code> 映射，以访问并修改该工具类的选项和值。
    </p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": map-merge(
      map-get($utilities, "width"),
      (
        values: map-merge(
          map-get(map-get($utilities, "width"), "values"),
          (10: 10%),
        ),
      ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <h4 id="enable-responsive">启用响应式</h4>
    <p>你可以为一组现有的、默认不支持响应式的工具类启用响应式类。例如，让 <code>border</code> 类支持响应式：</p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <p>现在这将为每个断点生成 <code>.border</code> 和 <code>.border-0</code> 的响应式变体。生成的 CSS 如下所示：</p>
    <CodeWrapper
      code=".border { ... }
.border-0 { ... }

@media (min-width: 576px) {
  .border-sm { ... }
  .border-sm-0 { ... }
}

@media (min-width: 768px) {
  .border-md { ... }
  .border-md-0 { ... }
}

@media (min-width: 992px) {
  .border-lg { ... }
  .border-lg-0 { ... }
}

@media (min-width: 1200px) {
  .border-xl { ... }
  .border-xl-0 { ... }
}

@media (min-width: 1400px) {
  .border-xxl { ... }
  .border-xxl-0 { ... }
}
"
      lang="css"
    />
    <h4 id="rename-utilities">重命名工具类</h4>
    <p>缺少 v4 工具类，或已经习惯了其他命名约定？可以使用工具类 API 覆盖给定工具类的生成结果 <code>class</code>——例如，将 <code>.ms-*</code> 工具类重命名为旧式的 <code>.ml-*</code>：</p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "margin-start": map-merge(
      map-get($utilities, "margin-start"),
      ( class: ml ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <h3 id="remove-utilities">移除工具类<a class="anchor-link" href="#remove-utilities" aria-label="移除工具类"></a></h3>
    <p>
      使用
     <a href="https://sass-lang.com/documentation/modules/map/#remove"><code>map-remove()</code> Sass 函数</a>移除任意默认工具类。
    </p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

// Remove multiple utilities with a comma-separated list
$utilities: map-remove($utilities, "width", "float");

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <p>
      你也可以使用
     <a href="https://sass-lang.com/documentation/modules/map/#merge"><code>map-merge()</code> Sass 函数</a>，并将组的键设为 <code>null</code> 来移除该工具类。
    </p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": null
  )
);

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <h3 id="add-remove-modify">添加、移除与修改<a class="anchor-link" href="#add-remove-modify" aria-label="添加、移除与修改"></a></h3>
    <p>
      你可以使用
     <a href="https://sass-lang.com/documentation/modules/map/#merge"><code>map-merge()</code> Sass 函数</a>一次性添加、移除和修改多个工具类。下面展示了如何将前面的示例合并为一个更大的映射。
    </p>
    <CodeWrapper
      code='@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    // Remove the `width` utility
    "width": null,
    // Make an existing utility responsive
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),
    // Add new utilities
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);

@import "bootstrap/scss/utilities/api";
'
      lang="scss"
    />
    <h4 id="remove-utility-in-rtl">在 RTL 中移除工具类</h4>
    <p>
      某些边缘情况会使
     <a href="https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl">RTL 样式编写变得困难</a>，例如阿拉伯语中的换行。因此，可以通过将 <code>rtl</code> 选项设为 <code>false</code>，将工具类从 RTL 输出中移除：
    </p>
    <CodeWrapper
      code='$utilities: (
  "word-wrap": (
    property: word-wrap word-break,
    class: text,
    values: (break: break-word),
    rtl: false
  ),
);
'
      lang="scss"
    />
    <p>输出：</p>
    <CodeWrapper
      code="/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
/* rtl:end:remove */
"
      lang="css"
    />
    <p>
      由于使用了
     <a href="https://rtlcss.com/learn/usage-guide/control-directives/#remove">RTLCSS 的 <code>remove</code> 控制指令</a>，这在 RTL 中不会输出任何内容。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
       <a href="#api-explained">API 说明</a>
        <ul>
          <li><a href="#property">property 属性</a></li>
          <li><a href="#values">values 值</a></li>
          <li><a href="#class">class 类</a></li>
          <li><a href="#css-variable-utilities">CSS 变量工具类</a></li>
          <li><a href="#local-css-variables">局部 CSS 变量</a></li>
          <li><a href="#states">状态</a></li>
          <li><a href="#responsive">响应式</a></li>
          <li><a href="#print">打印</a></li>
        </ul>
      </li>
      <li><a href="#importance">重要性</a></li>
      <li>
       <a href="#using-the-api">使用 API</a>
        <ul>
          <li><a href="#override-utilities">覆盖工具类</a></li>
          <li><a href="#add-utilities">添加工具类</a></li>
          <li><a href="#modify-utilities">修改工具类</a></li>
          <li><a href="#remove-utilities">移除工具类</a></li>
          <li><a href="#add-remove-modify">添加、移除与修改</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
