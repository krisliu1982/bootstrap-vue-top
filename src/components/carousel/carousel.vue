<template>
  <div :id="id" class="carousel slide" :class="props.carouselClass">
    <div v-if="props.indicator" class="carousel-indicators">
      <template v-for="(item, index) in props.items" :key="index">
        <button
          type="button"
          :data-bs-target="`#${id}`"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="item.title"
        ></button>
      </template>
    </div>
    <div class="carousel-inner">
      <template v-for="(item, index) in props.items" :key="index">
        <div class="carousel-item" :class="{ active: index === 0 }">
          <img :src="item.image" class="d-block w-100" :alt="item.title ?? ''" />
          <div class="carousel-caption">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </template>
    </div>
    <template v-if="props.control">
      <button class="carousel-control-prev" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </template>
  </div>
</template>

<script setup>
import { useId, onMounted, onBeforeUnmount } from 'vue';
import { Carousel } from 'bootstrap';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  carouselClass: {
    type: String,
    default: null
  },
  interval: {
    type: Number,
    default: 5000
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  pause: {
    type: [String, Boolean],
    default: 'hover'
  },
  ride: {
    type: [String, Boolean],
    default: false
  },
  touch: {
    type: Boolean,
    default: true
  },
  wrap: {
    type: Boolean,
    default: true
  },
  control: {
    type: Boolean,
    default: true
  },
  indicator: {
    type: Boolean,
    default: true
  }
});

const id = useId();

let carousel = null;
onMounted(() => {
  carousel = new Carousel(`#${id}`, {
    interval: props.interval,
    keyboard: props.keyboard,
    pause: props.pause,
    ride: props.ride,
    touch: props.touch,
    wrap: props.wrap
  });
});

onBeforeUnmount(() => {
  if (carousel !== null) {
    carousel.dispose();
    carousel = null;
  }
});
</script>
