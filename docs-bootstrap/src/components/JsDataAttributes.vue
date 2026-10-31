<template>
<p>
  As options can be passed via data attributes or JavaScript, you can append an option name to <code>data-bs-</code>, as in <code>data-bs-animation="{value}"</code>. Make sure to change the case type of the option name from “<em>camelCase</em>” to “<em>kebab-case</em>” when passing the options via data attributes. For example, use <code>data-bs-custom-class="beautifier"</code> instead of <code>data-bs-customClass="beautifier"</code>.
</p>

<p>
  As of Bootstrap 5.2.0, all components support an <strong>experimental</strong> reserved data attribute <code>data-bs-config</code> that can house simple component configuration as a JSON string. When an element has <code>data-bs-config='{"delay":0, "title":123}'</code> and <code>data-bs-title="456"</code> attributes, the final <code>title</code> value will be <code>456</code> and the separate data attributes will override values given on <code>data-bs-config</code>. In addition, existing data attributes are able to house JSON values like <code>data-bs-delay='{"show":0,"hide":150}'</code>.
</p>

<p>
  The final configuration object is the merged result of <code>data-bs-config</code>, <code>data-bs-</code>, and <code>js object</code> where the latest given key-value overrides the others.
</p>
</template>