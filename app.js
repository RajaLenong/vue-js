const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: ''
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
        }
    }
  });
  
  app.mount('#events');