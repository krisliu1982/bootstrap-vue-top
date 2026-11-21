<template>
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-success" @click="handleClickSuccess">Success</button>
          <button type="button" class="btn btn-danger" @click="handleClickDanger">Danger</button>
          <button type="button" class="btn btn-warning" @click="handleClickWarning">Warning</button>
          <button type="button" class="btn btn-info" @click="handleClickInfo">Info</button>
        </div>
</template>

<script setup>
import { toast } from '@lib'

function handleClickSuccess() {
  toast({
    type: 'success',
    title: 'success',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickDanger() {
  toast({
    type: 'danger',
    title: 'danger',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickWarning() {
  toast({
    type: 'warning',
    title: 'warning',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickInfo() {
  toast({
    type: 'info',
    title: 'info',
    message: 'Hello, world! This is a toast message.'
  });
}

</script>