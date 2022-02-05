<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="title">
            <h1>List of Orders</h1>
          </div>
          <div class="search_block">
            <searchcomp></searchcomp>
          </div>
        </div>
        <hr />
      </div>
    </header>
    <RenderingOrderList />
    <div class="block_pagination">
      <paginationcomp></paginationcomp>
    </div>
  </div>
</template>
<script>
import RenderingOrderList from "./components/RenderingOrderList.vue";
import searchcomp from "./components/searchcomp.vue";
import paginationcomp from "./components/paginationcomp.vue";

export default {
  components: {
    RenderingOrderList,
    searchcomp,
    paginationcomp,
  },
};
</script>

<style>
.block_pagination {
  width: 100%;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  padding: 10px 20px;
}
.search_block {
  padding: 0px 20px;
  margin: auto 0px;
}
.row {
  justify-content: space-between;
  display: flex;
}
</style>
