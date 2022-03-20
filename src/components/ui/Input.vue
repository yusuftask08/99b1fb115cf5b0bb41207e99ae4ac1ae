<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    type="text"
    :class="onClass"
    @keydown.enter="$emit('keydown-enter', $event.target.value)"
    :style="onStyle"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    onClass: {
      type: String,
      required: true,
    },
    onStyle: {
      type: String,
      required: true,
    },
  },
};
</script>