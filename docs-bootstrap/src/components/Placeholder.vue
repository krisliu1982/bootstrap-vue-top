<template>
    <template v-if="props.markup === 'svg'">
        <svg :aria-hidden="placeholderAriaHidden" :aria-label="placeholderLabel" :height="props.height"
            class="docs-placeholder-img" :role="placeholderRole" :width="props.width"
            xmlns="http://www.w3.org/2000/svg">
            <title v-if="props.title !== false">{{ props.title }}</title>
            <rect width="100%" height="100%" :fill="props.background"></rect>
            <text v-if="props.text !== false" x="50%" y="50%" fill="#dee2e6" dy=".3em">
                {{ props.text }}
            </text>
        </svg>
    </template>
    <template v-if="props.markup === 'img'">
        <img :alt="placeholderLabel" :height="props.height" :width="props.width" :src="srcVal" />
    </template>
</template>

<script setup>

const props = defineProps({
    height: { type: String, default: '180' },
    width: { type: String, default: '100%' },
    background: { type: String, default: '#868e96' },
    color: { type: String, default: '#dee2e6' },
    markup: { type: String, default: 'svg' },
    width: { type: String, default: '100%' },
    text: { type: String || Boolean, default: 'w*h' },
    title: { type: String || Boolean, default: 'Placeholder' }
})


const placeholderAriaHidden = props.title === false && props.text === false ? 'true' : undefined
const placeholderLabel =
    props.text !== false || props.title !== false
        ? `${props.title !== false ? props.title : ''}${props.text !== false && props.title !== false ? ': ' : ''}${props.text !== false ? props.text : ''}`
        : undefined

const placeholderRole = props.text !== false || props.title !== false ? 'img' : undefined

const srcVal = getPlaceholderSrc(props.title !== false, props.text !== false, {
    background: props.background,
    color: props.color,
    text: props.text,
    title: props.title
})
function getPlaceholderSrc(
    showTitle,
    showText,
    { background, color, text, title }
) {
    // Sanitize the background and text colors by removing the leading hash if any.
    const bgColor = background.replace(/^#/, '')
    const textColor = color.replace(/^#/, '')

    // Build the raw SVG string first
    let svg = `<svg style='font-size: 1.125rem; font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; -webkit-user-select: none; -moz-user-select: none; user-select: none; text-anchor: middle;' width='200' height='200' xmlns='http://www.w3.org/2000/svg'>`

    if (showTitle) {
        svg += `<title>${title}</title>`
    }

    svg += `<rect width='100%' height='100%' fill='#${bgColor}'></rect>`

    if (showText) {
        svg += `<text x='50%' y='50%' fill='#${textColor}' dy='.3em'>${text}</text>`
    }

    svg += `</svg>`

    const encodedSvg = encodeURIComponent(svg)

    return `data:image/svg+xml,${encodedSvg}`
}
</script>