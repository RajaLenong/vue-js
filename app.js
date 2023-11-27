const app = Vue.createApp({
    data() {
      return {
        name: '',
        confirmedName: ''
      }
    },
    methods: {
        setName() {
            return this.name = event.target.value;
        },
        confirmedInput() {
            return this.confirmedName = this.name;
        },
        submitForm() {
          alert('any text of your choice');
        }
    }
  });
  
  app.mount('#assignment');