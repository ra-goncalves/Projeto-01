const form = document.querySelector(".loginform"),
campoEmail = form.querySelector(".email"),
dadosEmail = campoEmail.querySelector("input"),
campoSenha = form.querySelector(".senha"),
dadosSenha = campoSenha.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault();
  
    if(dadosEmail.value == ""){
      campoEmail.classList.add("shake", "erros");
    }else{
      checarEmail();
    }
    if(dadosSenha.value == ""){
      campoSenha.classList.add("shake", "erros");
    }else{
      campoSenha.classList.remove("erros");
    }

    setTimeout(()=>{
      campoEmail.classList.remove("shake");
      campoSenha.classList.remove("shake");
    }, 500);

    dadosEmail.onkeyup = ()=>{
      checarEmail();
    }

    function checarEmail(){
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!dadosEmail.value.match(pattern)){
        campoEmail.classList.add("erros");
        let erromsg = campoEmail.querySelector(".erro-msg");
        (dadosEmail.value != "") ? erromsg.innerText = "O email tem que ser valido" : erromsg.innerText = "O email não pode estar em branco";
      }else{
        campoEmail.classList.remove("erros");
      }
    }

    if(!campoEmail.classList.contains("erros") && !campoSenha.classList.contains("erros")){
      window.location.href = "index.html";
      console.log("Sucesso")
    }
}

function cadastrar() {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".campo-cadastro").style.display = "block";
}

function home() {
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".home").style.display = "block";
}

function relatorio(){
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none"; 
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".relatorio").style.display = "block";
}

function cadastrarDados(){
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "block";
}

function listarDados(){
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "block";
}