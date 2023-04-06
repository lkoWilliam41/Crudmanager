const AGENTSDB = "agentsDB"


// fonction pour retourner la base de données locale
function getlocalDB (){
    if(!localStorage.getItem(AGENTSDB)){
        localStorage.setItem(AGENTSDB, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(AGENTSDB))
}



//fonction mettre à jour la base
function update(db){
    localStorage.setItem(AGENTSDB, JSON.stringify(db))
}



//fonction d'ajout des agents
function addagentDB(agent){
    const db = getlocalDB()
    agent.id = Date.now()+""
    db.push(agent)
    update(db)
}

//fonction pour mettre à jour l'agent
function updateagentDB(agent){
    const db = getlocalDB()
    const updatedDB = db.map(function(curagent){
        if(curagent.id == agent.id){
            return {
                nom: agent.nom,
                prenom: agent.prenom,
                dateNaissance: agent.dateNaissance,
                niveauScolaire: agent.niveauScolaire,
                id: agent.id
            }
        }
        return curagent
    })
    update(updatedDB)
}

//fonction pour supprimer un agent
function deletagent(agent){
    const db = getlocalDB()
    const updatedDB= db.filter(function(curagent){
        return curagent.id != agent.id;
    })
    update(updatedDB)
}

//fonction recuperer l'agent par rapport à son id
function getagent(id){
    const db = getlocalDB()
    var filteredDB = db.filter((curagent)=> curagent.id == id)
    if(filteredDB > 0){
        return filteredDB[0]
    }
    return null
}


//fonction pour rechercher un étudiant par son nom ou prenom
function getagentbyname(name){
    const db = getlocalDB()
    const filteredDB = db.filter((curname)=>{
        return curname.nom.toLowerCase().includes(name.toLowercase()) || curname.prenom.toLowerCase().includes(name.toLowerCase())
    }) 

    return filteredDB
}
