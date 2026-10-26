<template>
    <div class="docs-code-snippet">
        <div class="hstack align-items-center highlight-toolbar">
            <a v-if="props.file" class="text-decoration-none font-monospace fs-xs fg-3" :href="data['blob-url'] + '/' + props.file"
                target="_blank" rel="noopener noreferrer">{{ props.file }}</a>
            <div v-else class="font-monospace fs-xs fg-3">SCSS</div>
            <div class="ms-auto">
                <BiCheckLg v-if="isCopy" class="fg-success" />
                <a v-else role="button" class="fg-body" title="Copy" aria-label="Copy" @click="handleCopy">
                    <BiCopy />
                </a>
            </div>
        </div>
        <Code :code="code" lang="scss" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Code from './code.vue'
import data from '@data/data.js'

const props = defineProps({
    name: {
        type: String,
        default: null
    },
    file: {
        type: String,
        default: 'html'
    }
});

const code = computed(() => {
    if (Object.hasOwn(data.scss, props.name)) {
        return data.scss[props.name]
    } else {
        return ''
    }
});

const isCopy = ref(false);
function handleCopy() {
    navigator.clipboard
        .writeText(code)
        .then(() => {
            isCopy.value = true;
            setTimeout(() => {
                isCopy.value = false;
            }, 2000);
        })
        .catch((err) => {
            isCopy.value = false;
            console.log('复制错误', err);
        });
}
</script>