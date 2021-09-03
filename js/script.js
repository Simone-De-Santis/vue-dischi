console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    diskList: []
  },
  methods: {
  },
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {

      const disk = res.data.response

      this.diskList.push(disk);

      console.log(this.diskList)

    })
  }
});
