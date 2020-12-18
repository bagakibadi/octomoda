<template>
<div>

  <input type="text" v-model="firstName" name="" id="">
  <input type="text" v-model="lastName" name="" id="">
  <div>{{ fullName }}</div>
  <form action="">
    <select required v-model="rayons" class="form-control form-control-lg">
      <option value="" selected>Mail AJG</option>
      <option v-for="(items, index) in rayon" :key="index" :value="items.kode">{{items.keterangan}}</option>
    </select>
    <button type="submit">submit</button>
  </form>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      fullName: '',
      rayons: ''
    }
  },
  computed: {
    ...mapState(['rayon']),
    ...mapState(['provinsi']),
    // ...mapState(['kabupaten'])
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
      console.log(val)
    },
    lastName: function (val) {
      console.log(val)
      this.fullName = this.firstName + ' ' + val
    }
  }
}
</script>

<style>

</style>