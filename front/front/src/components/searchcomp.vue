<template>
  <div class="search-wrap">
    <input
      type="text"
      v-model="inputVal"
      @input="searchInList"
      ref="inputsearch"
    />
    <select name="" id="" v-model="searchType">
      <option disabled value="">Выберите тип поиска</option>
      <option value="title">Поиск по названию</option>
      <option value="quantity">Поиск по количеству</option>
      <option value="distance">Поиск по расстоянию</option>
    </select>
    <select name="" id="" v-model="searchCondition">
      <option disabled value="">Выберите условие для поиска</option>
      <option value="equality">Равенство</option>
      <option value="concidence">Совпадение</option>
      <option value="less">Меньше</option>
      <option value="more">Больше</option>
    </select>
    <button class="btn" @click="cancelInput">Cancel</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: function () {
    return {
      inputVal: "",
      searchType: "",
      searchCondition: "",
    };
  },
  methods: {
    ...mapActions("searchResult", { setResult: "setResult" }),

    disabledInput() {
      if (this.searchType !== "" && this.searchCondition !== "") {
        this.$refs.inputsearch.disabled = false;
        this.inputVal = "";
        this.searchInList();
      }
    },
    cancelInput() {
      (this.searchType = ""), (this.searchCondition = ""), (this.inputVal = "");
      this.$refs.inputsearch.disabled = true;
    },
    searchInList() {
      let arr = [];
      if (this.inputVal !== "") {
        let dubArr = this.allListOrder;
        let search = this.inputVal.toLowerCase();

        if (this.searchType === "title") {
          dubArr.forEach((element) => {
            if (element.title.toLowerCase().indexOf(search, 0) !== -1) {
              arr.push(element);
            }
          });
        } else if (this.searchType === "quantity") {
          dubArr.forEach((element) => {
            let flag = false;
            if (this.searchCondition === "equality") {
              if (element.quantity == search) {
                flag = true;
              }
            }
            if (this.searchCondition === "concidence") {
              if (element.quantity == search) {
                flag = true;
              }
            }
            if (this.searchCondition === "less") {
              if (element.quantity <= search) {
                flag = true;
              }
            }
            if (this.searchCondition === "more") {
              if (element.quantity >= search) {
                flag = true;
              }
            }
            if (flag) {
              arr.push(element);
            }
          });
        } else if (this.searchType === "distance") {
          dubArr.forEach((element) => {
            let flag = false;
            if (this.searchCondition === "equality") {
              if (element.distance == search) {
                flag = true;
              }
            }
            if (this.searchCondition === "concidence") {
              if (element.distance == search) {
                flag = true;
              }
            }
            if (this.searchCondition === "less") {
              if (element.distance <= search) {
                flag = true;
              }
            }
            if (this.searchCondition === "more") {
              if (element.distance >= search) {
                flag = true;
              }
            }

            if (flag) {
              arr.push(element);
            }
          });
        }

        this.setResult(arr);
      } else {
        this.setResult(arr);
      }
    },
  },
  computed: {
    ...mapGetters("OrderStore", { allListOrder: "allListOrder" }),
  },
  watch: {
    searchType() {
      this.disabledInput();
    },
    searchCondition() {
      this.disabledInput();
    },
  },
  mounted() {
    this.searchType == "";
    this.searchCondition == "";
    this.$refs.inputsearch.disabled = true;
  },
};
</script>
<style scoped>
.search-wrap {
  display: flex;
}
select {
  margin: 0px 10px;
}
.btn {
  padding: 0px 15px;
  background: #000;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
</style>
