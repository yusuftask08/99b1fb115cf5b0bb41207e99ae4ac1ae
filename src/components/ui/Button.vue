<template>
  <button :class="onClass" @click="$emit('onClick', $event)" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "submit",
    },
    onClass: {
      type: String,
      default: "button",
    },
  },
};
</script>