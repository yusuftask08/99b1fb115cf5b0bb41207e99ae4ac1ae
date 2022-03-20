<template>
  <div class="pagination__container" v-show="pageNumbers > 1">
    <div class="pagination-list">
      <Button class="pagination-list-item previous" @onClick="previousPage">
        Previous
      </Button>
      <div
        class="pagination-list-numbers"
        v-for="(number, index) in pageNumbers"
        :key="index"
      >
        <span
          @click="numberNextPage(index + 1)"
          :class="{ select: currentPage == index + 1 }"
        >
          {{ number }}
        </span>
      </div>
      <Button class="pagination-list-item next" @onClick="nextPage">
        Next
      </Button>
    </div>
  </div>
</template>

<script>
import { SET_CURRENT_PAGE } from "@/store/mutations.type";
import { mapGetters } from "vuex";
import Button from "@/components/ui/Button";
export default {
  components: {
    Button,
  },
  methods: {
    nextPage() {
      this.$store.commit(
        SET_CURRENT_PAGE,
        this.pageNumbers === this.currentPage
          ? this.currentPage
          : this.currentPage + 1
      );
    },
    numberNextPage(indexNumber) {
      this.$store.commit(SET_CURRENT_PAGE, indexNumber);
    },
    previousPage() {
      this.$store.commit(SET_CURRENT_PAGE, this.currentPage - 1);
    },
  },
  computed: {
    ...mapGetters({
      productList: "getProductList",
      currentPage: "getCurrentPage",
    }),
    pageNumbers() {
      return Math.ceil(this.productList.length / 10);
    },
  },
};
</script>
