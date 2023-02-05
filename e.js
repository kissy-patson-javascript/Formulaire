// récupération des éléments(id) et les stocker
const form = document.querySelector("#form");
const nom = document.querySelector("#name");
// Patson: J'ai changé le name en nom parce que le mot name est un mot réservé en JS et ne peut être utilisé comme variable
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const number = document.querySelector("#number");

// les évènements 
form.addEventListener('submit',e=>{
   e.preventDefault(); //vérification pour empecher le comportement de la soumission du formulaire

   form_verify();
})

//  les fonctions
function form_verify(){
   //obtenir toutes les valeurs des inputs
   const nameValue = nom.value.trim();
   const surnameValue = surname.value.trim();
   const emailValue = email.value.trim();
   const numberValue = number.value.trim();
   
   console.log("====================================");
   console.log(nameValue);
   console.log(surnameValue);
   console.log(emailValue);
   console.log(numberValue); 
   console.log("====================================");

   //vérification du nom d'utilisateur
   if (nameValue === "") { //si le champs est vide
      var message = ("le champs nom ne peut pas être vide");
      setError(nom, message);
   } else {
      setSuccess(nom);
      }
   //verification du prénom
   if (surnameValue === "") {
      var message = ("le champs nom ne peut pas être vide");
      setError(surname, message);
   }
   else {
      setSuccess(surname);
      }
   //verification de l'email
   if (emailValue === "") {
      var message = ("le champs nom ne peut pas être vide");
      setError(email, message);
   } else {
      setSuccess(email);
      }
   //verification du téléphone
   if (numberValue === "") {
      var message = ("le champs nom ne peut pas être vide");
      setError(number, message);
   }
   //si les champs sont ok, l'icone success
   else {
   setSuccess(number);
   }
   
}
function setError(elem, message) {
   const formControl = elem.parentElement; //récupération de div control en prenant son parent
   const small = formControl.querySelector('small');//small permet d'afficher l'erreur.et est mis dans formcontrol

   //ajout du message d'erreur
   small.innerText = message;

   //ajout de la classe error
   formControl.className = "form-control error";
}

function setSuccess(elem) {
   const formControl = elem.parentElement;
   formControl.className = "form-control success";
}

