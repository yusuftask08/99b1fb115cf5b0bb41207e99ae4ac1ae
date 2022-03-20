<template>
  <div class="card" @click="showCardDetail = !showCardDetail">
    <div class="card-img">
      <img :src="products.image.src" />
    </div>
    <div class="card-text">
      <h4>{{ products.title }}</h4>
      <h4>{{ products.variants[0].price }} $</h4>
    </div>
    <div v-if="showCardDetail" class="card-info">
      <span v-html="products.body_html" />
    </div>
  </div>
</template>
<script>
import Button from "@/components/ui/Button";
export default {
  name: "Search-input-list",
  components: { Button },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showCardDetail: false,
    };
  },
  created() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.showCardDetail = false;
      }
    });
  },
};
</script>
