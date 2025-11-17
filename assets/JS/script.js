const form = document.querySelector("#form");
const containerCards = document.querySelector("#containerCard");



let editingId = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ajoutecard();
  form.reset();


});


let personnes = JSON.parse(localStorage.getItem("personnes")) || [];
function afficher(){
    containerCards.innerHTML=""
    personnes.forEach(item=>{
        let div = document.createElement("div")
        div.innerHTML = `<div class="pb-[20px] max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col justify-center">
      <div class="w-[80px] h-[80px] bg-gray-200">
        <img src="${item.image}" alt="Photo Personne" class="w-full h-full object-cover">
      </div>
      <div class="p-5 space-y-3">
        <h2 class="text-xl font-semibold text-gray-800">${item.name} ${item.prenomm}</h2>
        <div class="text-sm text-gray-600">
          <p><span class="font-semibold text-gray-800">Ville :</span> ${item.vill}</p>
          <p><span class="font-semibold text-gray-800">Adresse :</span> ${item.adresse}</p>
          <p><span class="font-semibold text-gray-800">Date de naissance :</span> ${item.dateNaissance}</p>
        </div>
      </div>
      <button data-id="${item.id}"  class="editButton bg-[red] w-[50px]">edit</button>

    </div>`
    containerCards.append(div)
    
    
})

}

afficher();




function modifier(){

    personnes.find(item=>{

    })
}


function ajoutecard() {
  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const DNaiss = document.querySelector("#DNaiss").value
  const adress = document.querySelector("#adresse").value
  const ville = document.querySelector("#ville").value
  const photo = document.querySelector("#photo").value


function regex(){
    
}
  

  const personne = {
    id : Date.now(),
    name : nom,
    prenomm : prenom,
    dateNaissance: DNaiss,
    adresse: adress,
    vill : ville,
    image: photo,
  };

 
  
  personnes.push(personne);
  localStorage.setItem("personnes", JSON.stringify(personnes));
  afficher()




//creer ID 
//set attribute fdak l id onder fih date now bach ikun unique
//addEventListener n affecter id litzad l button l global id
//dak global id n find bih wst mn array wach kayn wahd bhalo
//n7at values li fdak objet f inputs lwlin
//ander set f array dok editing li dert jdad









  
//   containerCards.innerHTML += `
//     <div class="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
//       <div class="w-[80px] h-[80px] bg-gray-200 ">
//         <img src="${photoURL}" alt="Photo Personne" class="w-full h-full object-cover">
//       </div>
//       <div class="p-5 space-y-3">
//         <h2 class="text-xl font-semibold text-gray-800">${nom} ${prenom}</h2>
//         <div class="text-sm text-gray-600">
//           <p><span class="font-semibold text-gray-800">Ville :</span> ${ville}</p>
//           <p><span class="font-semibold text-gray-800">Adresse :</span> ${adress}</p>
//           <p><span class="font-semibold text-gray-800">Date de naissance :</span> ${DNaiss}</p>
//         </div>
//       </div>
//     </div>
//   `;
}
