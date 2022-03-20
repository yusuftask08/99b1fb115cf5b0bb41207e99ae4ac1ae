<template>
  <div class="search-input-container">
    <Input
      :onClass="'search-input'"
      v-model="searchQuery"
      @keydown-enter="sendSearchQuery"
      :placeholder="'search for products'"
      :onStyle="notFoundData == false ? 'border:2px solid red' : ''"
    />
  </div>
</template>

<script>
import { GET_PRODUCT_LIST } from "@/store/actions.type";
import { SET_PRODUCT_LIST } from "@/store/mutations.type";
import Input from "@/components/ui/Input";
export default {
  name: "Search-input",
  components: {
    Input,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    sendSearchQuery() {
      if (!this.searchQuery) return;
      this.$store.commit(SET_PRODUCT_LIST, this.searchQuery);
    },
    init() {
      this.$store.dispatch(GET_PRODUCT_LIST);
    },
  },
  created() {
    this.init();
  },
  computed: {
    notFoundData() {
      return this.$store.getters.getNotFoundData;
    },
  },
};
</script>
