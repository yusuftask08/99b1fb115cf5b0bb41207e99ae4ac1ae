<template>
  <div class="home-container">
    <search-input />
    <search-result />
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "Home",
  components: { SearchInput, SearchResult },
};
</script>

