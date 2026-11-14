<template>
  <article class="bd-content" data-pagefind-body>
    <h1>警告框</h1>
    <p class="lead">使用少量灵活可用的警告消息，为典型的用户操作提供情境反馈。</p>

    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <p>警告框可容纳任意长度的文本，并可选带有关闭按钮。为了获得正确的样式，请使用八个<strong>必需的</strong>情境类之一（例如 <code>.alert-success</code>）。若需行内关闭，请使用 <a href="#dismissing">警告框 JavaScript 插件</a> 。</p>
    <Callout>
      <p><strong>注意！</strong> 从 v5.3.0 开始，<code>alert-variant()</code> Sass mixin 已被弃用。现在警告框变体通过 <a href="#sass-loops">Sass 循环</a> 覆盖其 CSS 变量。</p>
    </Callout>
    <Example
      :code="
        data['theme-colors']
          .map(
            (themeColor) => `<div class=&quot;alert alert-${themeColor.name}&quot; role=&quot;alert&quot;>
  A simple ${themeColor.name} alert—check it out!
</div>`
          )
          .join('\n')
      "
    />
    <Callout name="warning-color-assistive-technologies" />
    <h3 id="live-example">实时示例<a class="anchor-link" href="#live-example" aria-label="实时示例链接"></a></h3>
    <p>点击下面的按钮显示一个警告框（初始时通过行内样式隐藏），然后使用内置的关闭按钮将其关闭（并销毁）。</p>
    <Example
      addStackblitzJs
      code='<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>'
    />
    <p>我们使用以下 JavaScript 来触发实时警告框演示：</p>

    <JsDocs name="live-alert" file="site/src/assets/partials/snippets.js" />
    <h3 id="link-color">链接颜色<a class="anchor-link" href="#link-color" aria-label="链接颜色链接"></a></h3>

    <p>使用 <code>.alert-link</code> 工具类，可以在任意警告框内快速提供颜色匹配的链接。</p>

    <Example
      :code="
        data['theme-colors']
          .map(
            (themeColor) => `<div class=&quot;alert alert-${themeColor.name}&quot; role=&quot;alert&quot;>
  A simple ${themeColor.name} alert with <a href=&quot;#&quot; class=&quot;alert-link&quot;>an example link</a> . Give it a click if you like.
</div>`
          )
          .join('\n')
      "
    />

    <h3 id="additional-content">附加内容<a class="anchor-link" href="#additional-content" aria-label="附加内容链接"></a></h3>
    <p>警告框还可以包含其他 HTML 元素，例如标题、段落和分隔线。</p>
    <Example
      code='<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>'
    />
    <h3 id="icons">图标<a class="anchor-link" href="#icons" aria-label="图标链接"></a></h3>
    <p>同样，你可以使用 <a href="/utilities/flex">flexbox 工具类</a> 和 <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> 创建带图标的警告框。根据你的图标和内容，可能需要添加更多工具类或自定义样式。</p>
    <Example
      code='<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>'
    />
    <p>警告框需要多个图标？可以考虑使用更多 Bootstrap Icons 并创建一个本地 SVG sprite，以便轻松重复引用相同的图标。</p>
    <Example
      code='<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
  <div>
    An example alert with an icon
  </div>
</div>
<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    An example success alert with an icon
  </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    An example warning alert with an icon
  </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    An example danger alert with an icon
  </div>
</div>'
    />
    <h3 id="dismissing">关闭<a class="anchor-link" href="#dismissing" aria-label="关闭链接"></a></h3>
    <p>使用警告框 JavaScript 插件，可以在行内关闭任意警告框。方法如下：</p>
    <ul>
      <li>请确保已加载警告框插件，或已编译的 Bootstrap JavaScript。</li>
      <li>添加一个 <a href="/components/close-button">关闭按钮</a> 和 <code>.alert-dismissible</code> 类，后者会在警告框右侧添加额外内边距并为关闭按钮定位。</li>
      <li>在关闭按钮上添加 <code>data-bs-dismiss=&quot;alert&quot;</code> 属性，以触发 JavaScript 功能。请务必搭配使用 <code>&lt;button&gt;</code> 元素，以确保在所有设备上行为正确。</li>
      <li>若要在关闭时对警告框进行动画处理，请务必添加 <code>.fade</code> 和 <code>.show</code> 类。</li>
    </ul>
    <p>你可以通过下面的实时演示查看效果：</p>
    <Example
      code='<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>'
    /><Callout type="warning">
      <p>
        警告框被关闭时，该元素会从页面结构中完全移除。如果键盘用户使用关闭按钮关闭警告框，其焦点会突然丢失，并且可能因浏览器而异被重置到页面/文档的开头。因此，我们建议加入额外的 JavaScript，监听
        <code>closed.bs.alert</code> 事件，并以编程方式将 <code>focus()</code> 设置到页面中最合适的位置。如果你打算将焦点移到通常不会获得焦点的非交互元素上，请务必为该元素添加 <code>tabindex=&quot;-1&quot;</code>。
      </p>
    </Callout>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，警告框现在在
      <code>.alert</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值由 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="alert-css-vars" file="scss/_alert.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="alert-variables" file="scss/_variables.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin链接"></a></h3>
    <DeprecatedIn version="5.3.0" /><ScssDocs name="alert-variant-mixin" file="scss/mixins/_alert.scss" removeIndentation="{false}" />
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <p>生成修饰类并覆盖 CSS 变量的循环。</p>
    <ScssDocs name="alert-modifiers" file="scss/_alert.scss" removeIndentation="{false}" />
    <h2 id="javascript-behavior">JavaScript 行为<a class="anchor-link" href="#javascript-behavior" aria-label="JavaScript 行为链接"></a></h2>
    <h3 id="initialize">初始化<a class="anchor-link" href="#initialize" aria-label="初始化链接"></a></h3>
    <p>将元素初始化为警告框</p>
    <CodeWrapper
      code="const alertList = document.querySelectorAll(&#39;.alert&#39;)
const alerts = [...alertList].map(element =&gt; new bootstrap.Alert(element))
"
      lang="javascript"
    />
    <Callout>
      <p>
        如果仅仅是为了关闭警告框，则无需通过 JS API 手动初始化该组件。通过使用
        <code>data-bs-dismiss=&quot;alert&quot;</code>，组件将自动初始化并正确关闭。
      </p>
      <p>更多细节请参阅 <a href="#triggers">触发器</a> 章节。</p>
    </Callout>
    <h3 id="triggers">触发器<a class="anchor-link" href="#triggers" aria-label="触发器链接"></a></h3>
    <JsDismiss name="alert" />
    <p><strong>请注意，关闭警告框会将其从 DOM 中移除。</strong></p>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <p>你可以使用警告框构造函数创建一个警告框实例，例如：</p>
    <CodeWrapper
      code="const bsAlert = new bootstrap.Alert(&#39;#myAlert&#39;)
"
      lang="javascript"
    />
    <p>
      这会使警告框监听具有
      <code>data-bs-dismiss=&quot;alert&quot;</code> 属性的后代元素上的点击事件。（使用 data-api 自动初始化时无需这样做。）
    </p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>方法</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>close</code></td>
            <td>通过从 DOM 中移除此元素来关闭警告框。如果元素上存在 <code>.fade</code> 和 <code>.show</code> 类，警告框将在移除前淡出。</td>
          </tr>
          <tr>
            <td><code>dispose</code></td>
            <td>销毁元素的警告框功能。（移除 DOM 元素上存储的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>
              静态方法，用于获取与某个 DOM 元素关联的警告框实例。例如：
              <code>bootstrap.Alert.getInstance(alert)</code>。
            </td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与某个 DOM 元素关联的警告框实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Alert.getOrCreateInstance(element)</code>。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>基本用法：</p>
    <CodeWrapper
      code="const alert = bootstrap.Alert.getOrCreateInstance(&#39;#myAlert&#39;)
alert.close()
"
      lang="javascript"
    />
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>Bootstrap 的警告框插件暴露了几个事件，用于挂接警告框功能。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>事件</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>close.bs.alert</code></td>
            <td>当调用 <code>close</code> 实例方法时立即触发。</td>
          </tr>
          <tr>
            <td><code>closed.bs.alert</code></td>
            <td>当警告框已关闭且 CSS 过渡完成时触发。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myAlert = document.getElementById(&#39;myAlert&#39;)
myAlert.addEventListener(&#39;closed.bs.alert&#39;, event =&gt; {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn’t get lost/reset to the start of the page
  // document.getElementById(&#39;...&#39;).focus()
})
"
      lang="javascript"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
        <a href="#examples">示例</a>
        <ul>
          <li><a href="#live-example">实时示例</a></li>
          <li><a href="#link-color">链接颜色</a></li>
          <li><a href="#additional-content">附加内容</a></li>
          <li><a href="#icons">图标</a></li>
          <li><a href="#dismissing">关闭</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
        </ul>
      </li>
      <li>
        <a href="#javascript-behavior">JavaScript 行为</a>
        <ul>
          <li><a href="#initialize">初始化</a></li>
          <li><a href="#triggers">触发器</a></li>
          <li><a href="#methods">方法</a></li>
          <li><a href="#events">事件</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
import data from '@/data/data.js';

import { onMounted } from 'vue';

onMounted(() => {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [`<div class="alert alert-${type} alert-dismissible" role="alert">`, `   <div>${message}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');

    alertPlaceholder.append(wrapper);
  };
  const alertTrigger = document.getElementById('liveAlertBtn');
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success');
    });
  }
});
</script>
