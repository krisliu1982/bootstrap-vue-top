<template>
    <button type="button" class="btn btn-primary" @click="handleClick">Alert Box</button>
</template>

<script setup>
import { alertBox } from '@lib'

function handleClick() {
    alertBox({ message: 'This is a AlertBox  message.' })
}
</script>