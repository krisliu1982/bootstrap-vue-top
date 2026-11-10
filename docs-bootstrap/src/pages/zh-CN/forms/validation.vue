<template>
  <article class="bd-content">
    <h1>校验</h1>
    <p class="lead">通过浏览器默认行为，或自定义样式与 JavaScript，利用 HTML5 表单校验为你的用户提供有价值且可操作的反馈。</p>

    <Callout type="warning">
      <p>我们知道，目前客户端自定义校验样式和工具提示尚不具备无障碍性，因为它们未暴露给辅助技术。在我们寻求解决方案的同时，建议你使用服务端方案或浏览器默认校验方式。</p>
    </Callout>
    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>Bootstrap 的表单校验工作原理如下：</p>
    <ul>
      <li>HTML 表单校验通过 CSS 的两个伪类 <code>:invalid</code> 和 <code>:valid</code> 应用，作用于 <code>&lt;input&gt;</code>、<code>&lt;select&gt;</code> 和 <code>&lt;textarea&gt;</code> 元素。</li>
      <li>
        Bootstrap 将 <code>:invalid</code> 和 <code>:valid</code> 样式的作用范围限定为父级 <code>.was-validated</code> 类，该类通常应用于 <code>&lt;form&gt;</code>。否则，任何没有值的必填字段都会在页面加载时显示为无效。这样，你可以自行选择何时激活这些样式（通常在尝试提交表单之后）。
      </li>
      <li>要重置表单的外观（例如在使用 Ajax 动态提交表单的情况下），可在提交后再次从 <code>&lt;form&gt;</code> 中移除 <code>.was-validated</code> 类。</li>
      <li>作为后备方案，<a href="#server-side">服务端校验</a>可以使用 <code>.is-invalid</code> 和 <code>.is-valid</code> 类代替伪类，它们不需要父级 <code>.was-validated</code> 类。</li>
      <li>由于 CSS 工作原理的限制，我们目前无法在没有任何自定义 JavaScript 帮助下，对 DOM 中位于表单控件之前的 <code>&lt;label&gt;</code> 应用样式。</li>
      <li>
        所有现代浏览器都支持<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api">约束校验 API</a>，这是一系列用于校验表单控件的 JavaScript 方法。
      </li>
      <li>反馈消息可以使用<a href="#browser-defaults">浏览器默认样式</a>（每个浏览器各不相同，且无法通过 CSS 设置样式），也可以使用我们借助额外 HTML 和 CSS 的自定义反馈样式。</li>
      <li>你可以在 JavaScript 中使用 <code>setCustomValidity</code> 提供自定义的有效性消息。</li>
    </ul>
    <p>基于以上说明，请查看下面关于我们的自定义表单校验样式、可选的服务端类和浏览器默认样式的演示。</p>
    <h2 id="custom-styles">自定义样式<a class="anchor-link" href="#custom-styles" aria-label="自定义样式链接"></a></h2>
    <p>
      要使用 Bootstrap 自定义表单校验消息，你需要为 <code>&lt;form&gt;</code> 添加 <code>novalidate</code> 布尔属性。这会禁用浏览器默认的反馈工具提示，但仍可通过 JavaScript 访问表单校验 API。请尝试提交下面的表单，我们的 JavaScript 会拦截提交按钮并将反馈传达给你。尝试提交时，你会看到 <code>:invalid</code> 和 <code>:valid</code> 样式应用到表单控件上。
    </p>
    <p>自定义反馈样式会应用自定义颜色、边框、聚焦样式和背景图标，以更好地传达反馈。<code>&lt;select&gt;</code> 的背景图标仅在使用 <code>.form-select</code> 时可用，使用 <code>.form-control</code> 时不可用。</p>
    <Example
      code='<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>'
    />
    <CodeWrapper
      code="// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()"
      lang="javascript"
    />
    <h2 id="browser-defaults">浏览器默认样式<a class="anchor-link" href="#browser-defaults" aria-label="浏览器默认样式链接"></a></h2>
    <p>不想使用自定义校验反馈消息，也不想编写 JavaScript 来改变表单行为？完全没问题，你可以使用浏览器默认样式。请尝试提交下面的表单。根据浏览器和操作系统的不同，你会看到略有差异的反馈样式。</p>
    <p>虽然这些反馈样式无法通过 CSS 设置，但你仍然可以通过 JavaScript 自定义反馈文本。</p>
    <Example
      code='<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>'
    />
    <h2 id="server-side">服务端<a class="anchor-link" href="#server-side" aria-label="服务端链接"></a></h2>
    <p>我们推荐使用客户端校验，但如果你需要服务端校验，可以使用 <code>.is-invalid</code> 和 <code>.is-valid</code> 来标记无效和有效的表单字段。请注意，这些类同样支持 <code>.invalid-feedback</code>。</p>
    <p>对于无效字段，请使用 <code>aria-describedby</code> 确保无效反馈/错误消息与相关表单字段关联（注意，该属性允许引用多个 <code>id</code>，以防该字段已指向其他表单文本）。</p>
    <p>为了解决<a href="https://github.com/twbs/bootstrap/issues/25110">圆角问题</a>，输入框组需要额外添加 <code>.has-validation</code> 类。</p>
    <Example
      code='<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>'
    />
    <h2 id="supported-elements">支持的元素<a class="anchor-link" href="#supported-elements" aria-label="支持的元素链接"></a></h2>
    <p>以下表单控件和组件支持校验样式：</p>
    <ul>
      <li>带有 <code>.form-control</code> 的 <code>&lt;input&gt;</code> 和 <code>&lt;textarea&gt;</code>（包括输入框组中最多一个 <code>.form-control</code>）</li>
      <li>带有 <code>.form-select</code> 的 <code>&lt;select&gt;</code></li>
      <li><code>.form-check</code></li>
    </ul>
    <Example
      code='<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required>
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>'
    />
    <h2 id="tooltips">工具提示<a class="anchor-link" href="#tooltips" aria-label="工具提示链接"></a></h2>
    <p>
      如果表单布局允许，你可以将 <code>.{valid|invalid}-feedback</code> 类换成 <code>.{valid|invalid}-tooltip</code> 类，以样式化的工具提示显示校验反馈。请确保其父元素设置了 <code>position: relative</code>，以便定位工具提示。在下面的示例中，我们的列类已经具备此属性，但你的项目可能需要其他设置。
    </p>
    <Example
      code='<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" required>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" required>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.3.0" />
    <p>作为 Bootstrap 不断演进的 CSS 变量方案的一部分，表单现在使用局部 CSS 变量进行校验，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。</p>
    <ScssDocs name="root-form-validation-variables" file="scss/_root.scss" />
    <p>这些变量还会自适应颜色模式，即在深色模式下会改变颜色。</p>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="form-feedback-variables" file="scss/_variables.scss" /><ScssDocs name="form-validation-colors" file="scss/_variables.scss" /><ScssDocs name="form-validation-colors-dark" file="scss/_variables-dark.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin 链接"></a></h3>
    <p>两个 mixin 通过我们的<a href="#sass-loops">循环</a>组合起来，用于生成表单校验反馈样式。</p>
    <ScssDocs name="form-validation-mixins" file="scss/mixins/_forms.scss" />
    <h3 id="sass-maps">Sass map<a class="anchor-link" href="#sass-maps" aria-label="Sass map 链接"></a></h3>
    <p>这是来自 <code>_variables.scss</code> 的校验 Sass map。覆盖或扩展它即可生成不同或额外的状态。</p>
    <ScssDocs name="form-validation-states" file="scss/_variables.scss" />
    <p><code>$form-validation-states</code> 的 map 可以包含三个可选参数，用于覆盖工具提示和聚焦样式。</p>
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <p>用于遍历 <code>$form-validation-states</code> map 的值来生成校验样式。对上述 Sass map 的任何修改都会通过此循环反映到你编译后的 CSS 中。</p>
    <ScssDocs name="form-validation-states-loop" file="scss/forms/_validation.scss" />
    <h3 id="customizing">自定义<a class="anchor-link" href="#customizing" aria-label="自定义链接"></a></h3>
    <p>
      可以通过 Sass 使用 <code>$form-validation-states</code> map 自定义校验状态。该 Sass map 位于我们的 <code>_variables.scss</code> 文件中，我们正是通过它生成默认的 <code>valid</code>/<code>invalid</code> 校验状态。其中包含一个嵌套 map，用于自定义每个状态的颜色、图标、工具提示颜色和聚焦阴影。虽然浏览器不支持其他状态，但使用自定义样式的人可以轻松添加更复杂的表单反馈。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li><a href="#custom-styles">自定义样式</a></li>
      <li><a href="#browser-defaults">浏览器默认样式</a></li>
      <li><a href="#server-side">服务端</a></li>
      <li><a href="#supported-elements">支持的元素</a></li>
      <li><a href="#tooltips">工具提示</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
          <li><a href="#sass-maps">Sass map</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
          <li><a href="#customizing">自定义</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import { onMounted } from 'vue';

onMounted(() => {
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
});
</script>
