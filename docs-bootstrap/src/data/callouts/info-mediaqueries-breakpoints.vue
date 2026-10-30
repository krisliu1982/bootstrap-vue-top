<template>
<p><strong>Why subtract .02px?</strong> Browsers don’t currently support <a href="https://www.w3.org/TR/mediaqueries-4/#range-context">range context queries</a>, so we work around the limitations of <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"><code>min-</code> and <code>max-</code> prefixes</a> and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision.</p>
</template>
