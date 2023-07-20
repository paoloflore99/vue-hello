
//versione snella 
//Vue.createApp({}).mount("#app")


//createApp ritorna un ogetto di Vue 
const app = Vue.createApp({
    data() { // seno data: function(){}
        //la funzione dat deve ritornare un ogetto
        return {
            //ritorniamo un ogetto 
            //le proprieta possono eseere riutilizzate nel html
            mesaggio: "ciao prima prova"
        }
    },
    methods: { //click
        eseguiLogin(){
            console.log("vediamo se funziona");
        }

    }
});

//attiva Vue sull'elemnto con id app
app.mount("#app");

//consol 
console.log(app);

// const mesaggio = "ciao com valaa"

// console.log(`<h1>${mesaggio}</h1>`)

