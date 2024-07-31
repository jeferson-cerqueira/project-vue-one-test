const MYPERSON = {
    data() {
        return {
            name: "Jeferson",
            age: "22",
            sex: "Men"
        };
    }
};

Vue.createApp(MYPERSON).mount('#app');