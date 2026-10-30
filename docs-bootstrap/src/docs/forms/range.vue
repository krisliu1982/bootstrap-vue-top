
<template>
  <article>
    <h1>Range</h1>
    <p>Use our custom range inputs for consistent cross-browser styling and built-in customization.</p>

    <h2 id="overview">Overview<a class="anchor-link" href="#overview" aria-label="Link to Overview"></a></h2>
    <p>Create custom <code>&lt;input type=&quot;range&quot;&gt;</code> controls with <code>.form-range</code>. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.</p>
    <Example code={`<label for="range1" class="form-label">Example range</label>
    <input type="range" class="form-range" id="range1">`} /><h2 id="disabled">Disabled<a class="anchor-link" href="#disabled" aria-label="Link to Disabled"></a></h2>
    <p>Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.</p>
    <Example code={`<label for="disabledRange" class="form-label">Disabled range</label>
    <input type="range" class="form-range" id="disabledRange" disabled>`} /><h2 id="min-and-max">Min and max<a class="anchor-link" href="#min-and-max" aria-label="Link to Min and max"></a></h2>
    <p>Range inputs have implicit values for <code>min</code> and <code>max</code>—<code>0</code> and <code>100</code>, respectively. You may specify new values for those using the <code>min</code> and <code>max</code> attributes.</p>
    <Example code={`<label for="range2" class="form-label">Example range</label>
    <input type="range" class="form-range" min="0" max="5" id="range2">`} /><h2 id="steps">Steps<a class="anchor-link" href="#steps" aria-label="Link to Steps"></a></h2>
    <p>By default, range inputs “snap” to integer values. To change this, you can specify a <code>step</code> value. In the example below, we double the number of steps by using <code>step=&quot;0.5&quot;</code>.</p>
    <Example code={`<label for="range3" class="form-label">Example range</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="range3">`} /><h2 id="output-value">Output value<a class="anchor-link" href="#output-value" aria-label="Link to Output value"></a></h2>
    <p>The value of the range input can be shown using the <code>output</code> element and a bit of JavaScript.</p>
    <Example code={`<label for="range4" class="form-label">Example range</label>
      <input type="range" class="form-range" min="0" max="100" value="50" id="range4">
      <output for="range4" id="rangeValue" aria-hidden="true"></output>

      <script>
        // This is an example script, please modify as needed
        const rangeInput = document.getElementById('range4');
        const rangeOutput = document.getElementById('rangeValue');

        // Set initial value
        rangeOutput.textContent = rangeInput.value;

        rangeInput.addEventListener('input', function() {
          rangeOutput.textContent = this.value;
        });
      </script>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="form-range-variables" file="scss/_variables.scss" />
  </article>
</template>
