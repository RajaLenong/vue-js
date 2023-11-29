const app = Vue.createApp({
    data() {
      return {
        name: '',
        confirmedName: '',
        confirmedName2: ''
      }
    },
    methods: {
        setName(event) {
            return this.name = event.target.value;
        },
        confirmedInput() {
            return this.confirmedName = this.name;
        },
        confirmedInput2() {
          return this.confirmedName2 = this.name;
      },
        submitForm() {
          alert('selamat datang bossss');
        }
    }
  });
  
  app.mount('#assignment');