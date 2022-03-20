<template>
  <div>
    <transition name="fade" mode="out-in">
      <div class="cards">
        <search-input-list
          v-for="products in productListFilter"
          :key="products.id"
          :products="products"
        />
      </div>
    </transition>
    <div>
      <pagination />
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import SearchInputList from "./SearchInputList.vue";
export default {
  components: { SearchInputList, Pagination },
  name: "Search-result",
  computed: {
    productList() {
      return this.$store.getters.getProductList;
    },
    currentPage() {
      return this.$store.getters.getCurrentPage;
    },
    productListFilter() {
      return this.productList.slice(
        (this.currentPage - 1) * 10,
        this.currentPage * 10
      );
    },
  },
};
</script>
