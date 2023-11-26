const app = Vue.createApp({
    data(){
        return{
            yourName: 'Ahmad Husein',
            yourAge: 27,
            futureAge: 0
        }
    },
    mounted(){
        this.futureAge = this.yourAge + 5
    },
    methods: {
        favoriteNumber(){
            const randomNumber = Math.random();
            console.log(randomNumber);
            if(randomNumber < 0,5){
                return 1;
            } else {
                return 0;
            }
        }
    }
});

app.mount('#assignment')