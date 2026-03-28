<template>
    <div class="position-relative" :class="{ 'pe-none': loading }">
        <slot></slot>
        <Transition name="fadeIn">
            <div v-if="loading" class="position-absolute top-0 start-0 w-100 h-100 text-center z-1"
                style="background-color: rgba(255, 255, 255, 0.5);">
                <div class="spinner-border text-primary" style="margin-top: 2rem;">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
})
</script>
