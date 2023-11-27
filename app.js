const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        name: '',
        confirmedName: ''
      }
    },
    methods: {
        add(num) {
            return this.counter = this.counter + num;
        },
        substract(num) {
            return this.counter = this.counter - num;
        },
        setName(event, lastName) {
            return this.name = event.target.value + ' ' + lastName;
        },
        confirmedInput() {
            return this.confirmedName = this.name;
        },
        submitForm() {
          alert('Submitted');
        }
    }
  });
  
  app.mount('#events');