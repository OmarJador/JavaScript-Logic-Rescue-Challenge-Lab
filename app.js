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

trouverMaxMatrice(notesHebdomadaires)