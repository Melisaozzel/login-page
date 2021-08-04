const mybutton = document.getElementById("button");
let name = document.getElementById("name");

const nametext = document.querySelector(".nametext");
const mailtext = document.querySelector(".mailtext");
const gsmtext = document.querySelector(".gsmtext");

mybutton.addEventListener("click", func);

function func(event) {
   
  let name = document.getElementById("name").value;
  let gsm = document.getElementById("gsm").value;
  let mail = document.getElementById("mail").value;

   
  localStorage.setItem("NAME",name);
  localStorage.setItem("GSM",gsm);
  localStorage.setItem("MAIL",mail);

  


  let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (name == "") {
    nametext.classList.add("nametext-error");
    nametext.classList.remove("nametext");
    console.log(name);
    event.preventDefault();
  } else {
    nametext.classList.add("nametext");
    nametext.classList.remove("nametext-error");
  }

  if (mail == "") {
    mailtext.classList.add("mailtext-error");
    mailtext.classList.remove("mailtext");
    event.preventDefault();
  } else if (!pattern.test(mail)) {
    mailtext.classList.remove("mailtext");
    mailtext.innerHTML = "Adres mail formatına uygun değildir.";
    mailtext.classList.add("mailtext-error");
    event.preventDefault();
  } else {
    mailtext.classList.add("mailtext");
    mailtext.classList.remove("mailtext-error");
  }

  if (gsm == "") {
    gsmtext.classList.add("gsmtext-error");
    gsmtext.classList.remove("gsmtext");
    event.preventDefault();
  } else if (isNaN(gsm) || gsm.length < 11) {
    gsmtext.classList.add("gsmtext-error");
    gsmtext.classList.remove("gsmtext");
    gsmtext.innerHTML = "Telefon numaranız 11 adet rakamdan oluşmalıdır.";
    event.preventDefault();
  } else {
    gsmtext.classList.add("gsmtext");
    gsmtext.classList.remove("gsmtext-error");
  }
  
}

