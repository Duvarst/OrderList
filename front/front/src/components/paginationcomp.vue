<template>
  <div class="container_pagination">
    <ul class="pagination" ref="blockPage">
      <li
        class="pg_items"
        v-for="numPage in navPages"
        :key="numPage"
        @click="pagesClick(numPage)"
      >
        {{ numPage }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: function () {
    return {
      items: 1,
      itemsPerPage: 8,
      page: 1,
    };
  },
  methods: {
    ...mapActions("searchResult", { setRange: "setRange" }),
    pagesClick(val) {
      this.page = val;
      this.paginate();
      this.activePage();
      this.$emit("pagetransition", this.range);
    },
    async activePage() {
      let arr = await [...this.$refs.blockPage.children];
      arr.forEach((el) => {
        if (el.classList.contains("pg_items")) {
          el.classList.remove("active");
        }
      });
      arr[this.page - 1].classList.add("active");
    },
    paginate() {
      let page = this.page;
      let itemsPerPage = this.itemsPerPage;
      let from = page * itemsPerPage - itemsPerPage;
      let to = page * itemsPerPage;
      this.setRange([from, to]);
    },
  },
  computed: {
    ...mapGetters("searchResult", {
      overallSearchResult: "overallSearchResult",
    }),
    ...mapGetters("OrderStore", {
      allListOrder: "allListOrder",
    }),
    navPages() {
      let arr = [];
      if (this.overallSearchResult && this.overallSearchResult.length > 0) {
        arr = this.overallSearchResult;
      } else {
        arr = this.allListOrder;
      }
      let pageNumbers = Math.ceil(arr.length / this.itemsPerPage);
      let arrPages = [];
      for (let ind = 1; ind <= pageNumbers; ind++) {
        arrPages.push(ind);
      }
      return arrPages;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.activePage();
    });
  },
};
</script>
<style scoped>
.pg_items {
  display: inline-block;
  font-size: 1.2rem;
  border: 1px solid #000;
  padding: 2px 5px;
  margin: 0px 2px;
  cursor: pointer;
}
.pg_items.active {
  background: #000;
  color: #fff;
}
</style>
