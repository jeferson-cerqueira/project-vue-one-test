const MYPERSON = {
    data() {
        return {
            name: "",
            age: "22",
            input_name: ""
        };
    },
    methods: {
        submitForm(e) {
            e.preventDefault(); 
            console.log("this.input_name"); 
            this.name = this.input_name;
        }
    }
};

Vue.createApp(MYPERSON).mount('#app');
