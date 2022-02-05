<template>
  <div class="header-list main_content">
    <div class="items_main_content">
      <span class="title_block">Data</span>
      <div class="line"></div>
    </div>
    <div class="items_main_content">
      <span class="title_block">Title</span>
      <div class="line"></div>
    </div>
    <div class="items_main_content">
      <span class="title_block">Quantity</span>
      <div class="line"></div>
    </div>
    <div class="items_main_content">
      <span class="title_block">Distance</span>
      <div class="line"></div>
    </div>
  </div>
  <section class="wrap-main-content" v-for="it in dispalyList" :key="it.id">
    <div class="main_content">
      <div class="items_main_content">
        <div>{{ it.data }}</div>
      </div>
      <div class="items_main_content">
        <div>{{ it.title }}</div>
      </div>
      <div class="items_main_content">
        <div>{{ it.quantity }}</div>
      </div>
      <div class="items_main_content last_item">
        <div>{{ it.distance }} км</div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("OrderStore", { allListOrder: "allListOrder" }),
    ...mapGetters("searchResult", { displayRangePages: "displayRangePages" }),
    ...mapGetters("searchResult", {
      overallSearchResult: "overallSearchResult",
    }),
    dispalyList() {
      if (this.overallSearchResult && this.overallSearchResult.length > 0) {
        return this.overallSearchResult.slice(
          this.displayRangePages[0],
          this.displayRangePages[1]
        );
      } else {
        return this.allListOrder.slice(
          this.displayRangePages[0],
          this.displayRangePages[1]
        );
      }
    },
  },
};
</script>
<style scoped>
.wrap-main-content {
  border: 3px solid #000;
  border-radius: 10px;
  margin: 10px 0px;
}
.title_block {
  font-size: 1.5rem;
  margin: 0px;
}
.items_main_content {
  font-size: 1.2rem;
  padding: 10px 10px;
  width: 30%;
  border-right: 3px solid #000;
}
.last_item {
  border-right: none;
}
.main_content {
  display: flex;
  justify-content: space-around;
}
.line {
  height: 3px;
  width: 100%;
  background: #000;
  margin: 5px 0px 0px 0px;
}
</style>
