
<template>
  <article>
    <h1>Checks and radios</h1>
    <p>Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.</p>

    <h2 id="approach">Approach<a class="anchor-link" href="#approach" aria-label="Link to Approach"></a></h2>
    <p>Browser default checkboxes and radios are replaced with the help of <code>.form-check</code>, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</p>
    <p>Structurally, our <code>&lt;input&gt;</code>s and <code>&lt;label&gt;</code>s are sibling elements as opposed to an <code>&lt;input&gt;</code> within a <code>&lt;label&gt;</code>. This is slightly more verbose as you must specify <code>id</code> and <code>for</code> attributes to relate the <code>&lt;input&gt;</code> and <code>&lt;label&gt;</code>. We use the sibling selector (<code>~</code>) for all our <code>&lt;input&gt;</code> states, like <code>:checked</code> or <code>:disabled</code>. When combined with the <code>.form-check-label</code> class, we can easily style the text for each item based on the <code>&lt;input&gt;</code>’s state.</p>
    <p>Our checks use custom Bootstrap icons to indicate checked or indeterminate states.</p>
    <h2 id="checks">Checks<a class="anchor-link" href="#checks" aria-label="Link to Checks"></a></h2>
    <Example code='<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkDefault">
        <label class="form-check-label" for="checkDefault">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked>
        <label class="form-check-label" for="checkChecked">
          Checked checkbox
        </label>
      </div>' /><h3 id="indeterminate">Indeterminate<a class="anchor-link" href="#indeterminate" aria-label="Link to Indeterminate"></a></h3>
    <p>Checkboxes can utilize the <code>:indeterminate</code> pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).</p>
    <Example addStackblitzJs class="docs-example-indeterminate" code='<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
        <label class="form-check-label" for="checkIndeterminate">
          Indeterminate checkbox
        </label>
      </div>' /><h3 id="disabled">Disabled<a class="anchor-link" href="#disabled" aria-label="Link to Disabled"></a></h3>
    <p>Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s are automatically styled to match with a lighter color to help indicate the input’s state.</p>
    <Example addStackblitzJs class="docs-example-indeterminate" code='<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled>
        <label class="form-check-label" for="checkIndeterminateDisabled">
          Disabled indeterminate checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled>
        <label class="form-check-label" for="checkDisabled">
          Disabled checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled>
        <label class="form-check-label" for="checkCheckedDisabled">
          Disabled checked checkbox
        </label>
      </div>' /><h2 id="radios">Radios<a class="anchor-link" href="#radios" aria-label="Link to Radios"></a></h2>
    <Example code='<div class="form-check">
        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
        <label class="form-check-label" for="radioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
        <label class="form-check-label" for="radioDefault2">
          Default checked radio
        </label>
      </div>' /><h3 id="disabled-1">Disabled<a class="anchor-link" href="#disabled-1" aria-label="Link to Disabled"></a></h3>
    <p>Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s are automatically styled to match with a lighter color to help indicate the input’s state.</p>
    <Example code='<div class="form-check">
        <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled>
        <label class="form-check-label" for="radioDisabled">
          Disabled radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked disabled>
        <label class="form-check-label" for="radioCheckedDisabled">
          Disabled checked radio
        </label>
      </div>' /><h2 id="switches">Switches<a class="anchor-link" href="#switches" aria-label="Link to Switches"></a></h2>
    <p>A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch. Consider using <code>role=&quot;switch&quot;</code> to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the <code>disabled</code> attribute.</p>
    <Example code='<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
        <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
        <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled>
        <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled>
        <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
      </div>' /><h3 id="native-switches">Native switches<a class="anchor-link" href="#native-switches" aria-label="Link to Native switches"></a></h3>
    <p>Progressively enhance your switches for mobile Safari (iOS 17.4+) by adding a <code>switch</code> attribute to your input to enable haptic feedback when toggling switches, just like native iOS switches. There are no style changes attached to using this attribute in Bootstrap as all our switches use custom styles.</p>
    <Example code='<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch>
        <label class="form-check-label" for="checkNativeSwitch">
          Native switch haptics
        </label>
      </div>' /><p>Be sure to read more about <a href="https://webkit.org/blog/15054/an-html-switch-control/">the switch attribute on the WebKit blog</a>. Safari 17.4+ on macOS and iOS both have native-style switches in HTML while other browsers simply fall back to the standard checkbox appearance. Applying the attribute to a non-Bootstrap checkbox in more recent versions of Safari will render a native switch.</p>
    <h2 id="default-stacked">Default (stacked)<a class="anchor-link" href="#default-stacked" aria-label="Link to Default (stacked)"></a></h2>
    <p>By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <code>.form-check</code>.</p>
    <Example code='<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
        <label class="form-check-label" for="defaultCheck2">
          Disabled checkbox
        </label>
      </div>' /><Example code='<div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
        <label class="form-check-label" for="exampleRadios1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
        <label class="form-check-label" for="exampleRadios3">
          Disabled radio
        </label>
      </div>' /><h2 id="inline">Inline<a class="anchor-link" href="#inline" aria-label="Link to Inline"></a></h2>
    <p>Group checkboxes or radios on the same horizontal row by adding <code>.form-check-inline</code> to any <code>.form-check</code>.</p>
    <Example code='<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
      </div>' /><Example code='<div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
      </div>' /><h2 id="reverse">Reverse<a class="anchor-link" href="#reverse" aria-label="Link to Reverse"></a></h2>
    <p>Put your checkboxes, radios, and switches on the opposite side with the <code>.form-check-reverse</code> modifier class.</p>
    <Example code='<div class="form-check form-check-reverse">
        <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
        <label class="form-check-label" for="reverseCheck1">
          Reverse checkbox
        </label>
      </div>
      <div class="form-check form-check-reverse">
        <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
        <label class="form-check-label" for="reverseCheck2">
          Disabled reverse checkbox
        </label>
      </div>

      <div class="form-check form-switch form-check-reverse">
        <input class="form-check-input" type="checkbox" id="switchCheckReverse">
        <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
      </div>' /><h2 id="without-labels">Without labels<a class="anchor-link" href="#without-labels" aria-label="Link to Without labels"></a></h2>
    <p>Omit the wrapping <code>.form-check</code> for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using <code>aria-label</code>). See the <a href="[[docsref:/forms/overview/#accessibility]]">forms overview accessibility</a> section for details.</p>
    <Example code='<div>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
      </div>

      <div>
        <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
      </div>' /><h2 id="toggle-buttons">Toggle buttons<a class="anchor-link" href="#toggle-buttons" aria-label="Link to Toggle buttons"></a></h2>
    <p>Create button-like checkboxes and radio buttons by using <code>.btn</code> styles rather than <code>.form-check-label</code> on the <code>&lt;label&gt;</code> elements. These toggle buttons can further be grouped in a <a href="[[docsref:/components/button-group]]">button group</a> if needed.</p>
    <h3 id="checkbox-toggle-buttons">Checkbox toggle buttons<a class="anchor-link" href="#checkbox-toggle-buttons" aria-label="Link to Checkbox toggle buttons"></a></h3>
    <Example code='<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
    <label class="btn btn-primary" for="btn-check">Single toggle</label>

    <input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
    <label class="btn btn-primary" for="btn-check-2">Checked</label>

    <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
    <label class="btn btn-primary" for="btn-check-3">Disabled</label>' /><Example code='<input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off">
    <label class="btn" for="btn-check-4">Single toggle</label>

    <input type="checkbox" class="btn-check" id="btn-check-5" checked autocomplete="off">
    <label class="btn" for="btn-check-5">Checked</label>

    <input type="checkbox" class="btn-check" id="btn-check-6" autocomplete="off" disabled>
    <label class="btn" for="btn-check-6">Disabled</label>' /><Callout>
    <p>Visually, these checkbox toggle buttons are identical to the <a href="[[docsref:/components/buttons#button-plugin]]">button plugin toggle buttons</a>. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked“/“not checked“ (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as “button“/“button pressed“. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.</p>
    </Callout><h3 id="radio-toggle-buttons">Radio toggle buttons<a class="anchor-link" href="#radio-toggle-buttons" aria-label="Link to Radio toggle buttons"></a></h3>
    <Example code='<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
    <label class="btn btn-secondary" for="option1">Checked</label>

    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
    <label class="btn btn-secondary" for="option2">Radio</label>

    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
    <label class="btn btn-secondary" for="option3">Disabled</label>

    <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
    <label class="btn btn-secondary" for="option4">Radio</label>' /><Example code='<input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off" checked>
    <label class="btn" for="option5">Checked</label>

    <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off">
    <label class="btn" for="option6">Radio</label>

    <input type="radio" class="btn-check" name="options-base" id="option7" autocomplete="off" disabled>
    <label class="btn" for="option7">Disabled</label>

    <input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off">
    <label class="btn" for="option8">Radio</label>' /><h3 id="outlined-styles">Outlined styles<a class="anchor-link" href="#outlined-styles" aria-label="Link to Outlined styles"></a></h3>
    <p>Different variants of <code>.btn</code>, such as the various outlined styles, are supported.</p>
    <Example code='<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br>

    <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br>

    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
    <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Variables for checks:</p>
    <ScssDocs name="form-check-variables" file="scss/_variables.scss" /><p>Variables for switches:</p>
    <ScssDocs name="form-switch-variables" file="scss/_variables.scss" />
  </article>
</template>
