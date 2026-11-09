const squads = [
  {
    id: 1,
    nom: "Alpha",
    apprenants: [
      {
        id: 101,
        nom: "Amine",
        notes: { javascript: 16, html: 14, css: 18 },
        competences: ["DOM", "Arrays"]
      },
      {
        id: 102,
        nom: "Salma",
        notes: { javascript: 12, html: 17, css: 15 },
        competences: ["HTML", "CSS"]
      }
    ]
  },
  {
    id: 2,
    nom: "Beta",
    apprenants: [
      {
        id: 103,
        nom: "Yassine",
        notes: { javascript: 18, html: 15, css: 17 },
        competences: ["DOM", "Objects"]
      },
      {
        id: 104,
        nom: "Sara",
        notes: { javascript: 9, html: 13, css: 11 },
        competences: ["HTML"]
      }
    ]
  },
  {
    id: 3,
    nom: "Gamma",
    apprenants: [
      {
        id: 105,
        nom: "Omar",
        notes: { javascript: 15, html: 16, css: 14 },
        competences: ["Arrays", "DOM"]
      },
      {
        id: 106,
        nom: "Lina",
        notes: { javascript: 19, html: 18, css: 17 },
        competences: ["DOM", "Arrays", "Objects"]
      }
    ]
  }
];

const notesHebdomadaires = [
  [12, 15, 17],
  [8, 11, 14],
  [16, 18, 19]
];

// Challenge 01

// 1. Affiche la deuxième note du premier tableau.

console.log(notesHebdomadaires[0][1])

// 2. Calcule la somme des notes de chaque ligne.

notesHebdomadaires.forEach(arr => console.log(arr.reduce((a,b) => a+b)))

// 3. Affiche toutes les notes supérieures ou égales à 15.

notesHebdomadaires.forEach(arr => console.log(arr.filter(note => note >= 15)))

// 4. Trouve la note la plus élevée de toute la matrice.

function trouverMaxMatrice(matrice){
    eleSupFinal = 0
   matrice.forEach(arr => {
    eleSup = arr[0]

    arr.forEach(ele => {
        if(ele>eleSup){
            eleSup = ele
        }
    })

    if(eleSup>eleSupFinal){
        eleSupFinal = eleSup
    }

   })
    console.log(eleSupFinal)
}

console.log("Max de matrice est :")+trouverMaxMatrice(notesHebdomadaires)



// Challenge 02

// 1. Affiche le nom de chaque squad.

squads.forEach(squad => {
    console.log(`Nom de squad ${squad.id} : ${squad.nom}`)
})

// 2. Affiche le nom et la note JavaScript de chaque etudiant.

console.log("Les apprenants")

squads.forEach(squad => {
    squad.apprenants.forEach(apprenant => {
        console.log(`Nom : ${apprenant.nom}`)+console.log(`note JavaScript : ${apprenant.notes.javascript}`)
    })
})

// 3. Modifie la note JavaScript de Salma à 15.

let squadSalma = squads.find(squad => squad.apprenants.find(apprenant => apprenant.nom == 'Salma'))

let squadSalmaApprenants = squadSalma.apprenants

let salma = squadSalmaApprenants.find(apprenant => apprenant.nom == "Salma")

salma.notes.javascript = 15

console.log(salma)

// 4. Ajoute la compétence "JavaScript" à Salma.

salma.competences.push("Javascript")

console.log(salma)

// 5. Ajoute un nouvel étudiant dans la squad Gamma.

let squadGamma = squads.find(squad => squad.nom == "Gamma")

squadGamma.apprenants.push({id : 107, nom: 'NouveauApprenant', notes: [], competences: []})

console.log(squadGamma)