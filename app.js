const app = Vue.createApp({
    data(){
        return{
            yourName: '',
            yourAge: null
        }
    },
    // mounted(){
    //     this.futureAge = this.yourAge + 5
    // },
    methods: {
        favoriteNumber(){
            const randomNumber = Math.random();
            console.log(randomNumber);
            if(randomNumber < 0.5){
                return 1;
            } else {
                return 0;
            }
        },
        futureAge(){
            return (this.yourAge) + 5
        }
    }
});

app.mount('#assignment')