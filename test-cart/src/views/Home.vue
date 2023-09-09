<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <div class="from_info">
        <label>
          <input type="radio" value="Nam" v-model="form.sex" />Anh
        </label>

        <label> <input type="radio" value="Nữ" v-model="form.sex" />Chị </label>

        <div>
          <input
            type="text"
            placeholder="Họ và Tên"
            v-model="form.name"
            class="input_text"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Số điện thoại"
            v-model="form.phoneNumber"
            class="input_text"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Yêu cầu khác"
            v-model="form.anotherRequest"
            class="input_text"
          />
        </div>
      </div>

      <div class="from_location">
        <select
          class="input_text"
          @change="onchangeTinhThanh(form.curCity)"
          v-model="form.curCity"
        >
          <option value="">Chọn thành phố</option>
          <option
            v-for="i in tinh_thanh"
            v-bind:value="{ id: i.province_id, name: i.province_name }"
            :key="i.province_id"
          >
            {{ i.province_name }}
          </option>
        </select>

        <select
          class="input_text"
          @change="onchangeQuanHuyen(form.curDistrict)"
          v-model="form.curDistrict"
        >
          <option value="">Chọn quận huyện</option>
          <option
            v-for="i in quan_huyen"
            v-bind:value="{ id: i.district_id, name: i.district_name }"
            :key="i.district_id"
          >
            {{ i.district_name }}
          </option>
        </select>

        <select class="input_text" v-model="form.curWard">
          <option value="">Chọn phường xã</option>
          <option
            v-for="i in phuong_xa"
            :value="{ id: i.ward_id, name: i.ward_name }"
            :key="i.ward_id"
          >
            {{ i.ward_name }}
          </option>
        </select>

        <!-- <button @click="SetDataAPI">Call api</button>
      <p>{{ getDataAPI }}</p> -->
      </div>
    </div>
    <button @click.prevent="onPost">Finish</button>
    <button @click="onGetMusicList">load list music on Log</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      form: {
        sex: "",
        name: "",
        phoneNumber: "",
        anotherRequest: "",
        curCity: "",
        curDistrict: "",
        curWard: "",
      },
    };
  },
  created() {
    this.getDataListTinhThanh();
  },
  computed: {
    ...mapGetters(["tinh_thanh", "quan_huyen", "phuong_xa", "getDataAPI"]),
  },
  methods: {
    ...mapActions([
      "getDataListTinhThanh",
      "getDataListQuanHuyen",
      "getDataListPhuongXa",
      "SetDataAPI",
      "GetAPIMusic"
    ]),

    onGetMusicList(){
      this.GetAPIMusic()
    },

    //onchange get data
    onchangeTinhThanh(selectedValue) {
      this.getDataListQuanHuyen(selectedValue.id);
      console.log(selectedValue.id);
    },

    onchangeQuanHuyen(selectedValue) {
      this.getDataListPhuongXa(selectedValue.id);
      console.log(selectedValue.id);
    },

    onPost() {
      let form = this.form;
      // let reqData = {
      //   address: from.curCity + ", " + from.curDistrict + ", " + from.curWard,
      // }
      let reqData = {
        cusName: form.name,
        cusSex: form.sex,
        cusPhone: form.phoneNumber,
        address:
          form.curCity.name +
          ", " +
          form.curDistrict.name +
          ", " +
          form.curWard.name,
        cusReq: form.anotherRequest,
      };
      console.log(reqData);
    },
  },
};
</script>
<style scoped>
.input_text {
  margin: 15px;
  padding: 10px;
  width: 30%;
  background: azure;
  border: none;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
}
</style>
