const app = {
    data(){
        return{
            afficheAcceuil : false,
            afficheFormulaire: false,
            afficheTableau : false,
        }
    },
    methods:{
        alleracceuil(){
            this.changementEtatdeNavigation("acceuil")
        },

        allerformulaire(){
            this.changementEtatdeNavigation("afficheform")
        },

        allertableau(){
            this.changementEtatdeNavigation("affichetable")
        },


        changementEtatdeNavigation(destination){
            this.afficheAcceuil = false
            this.afficheTableau = false
            this.afficheFormulaire = false

            switch (destination) {
                case "acceuil":
                    this.afficheAcceuil = true
                    break;
                
                    case "afficheform":
                    this.afficheFormulaire = true
                    break;
                    
                case "affichetable":
                    this.afficheTableau = true
                    break;
            
                default:
                    this.afficheAcceuil = true
                    break;
            }
        }
    },

    mounted(){
        this.changementEtatdeNavigation("acceuil")
    }, 
}

Vue.createApp(app).mount('#app') 