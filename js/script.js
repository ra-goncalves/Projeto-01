const form = document.querySelector(".loginform"),
campoEmail = form.querySelector(".email"),
dadosEmail = campoEmail.querySelector("input"),
campoSenha = form.querySelector(".senha"),
dadosSenha = campoSenha.querySelector("input");

/* Vericar email e senha */
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

/*Tela padrão do site */
function home() {
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".home").style.display = "block";
}
/*Tela princial de relatorio*/
function relatorio(){
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none"; 
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".relatorio").style.display = "block";
}
/* Tela princial de cadastro */
function cadastrarDados(){
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "block";
}
/* Campo de cadastro */
function cadastrar() {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "none";
  document.querySelector(".campo-cadastro").style.display = "block";
}

/* Campo de impressão */
function listarDados(){
  document.querySelector(".campo-cadastro").style.display = "none";
  document.querySelector(".home").style.display = "none";
  document.querySelector(".relatorio").style.display = "none";
  document.querySelector(".campo-cadastrar-dados").style.display = "none";
  document.querySelector(".campo-relatorio").style.display = "block";
}

/* Vericar se o campo "Nome" foi preenchido do Campo de cadastro*/
function verificarCampos(e){
  const nomeInput = document.querySelector("#iNome").value;

  if(nomeInput === ''){
    alert("O campo nome não pode estar vazio");
    e.preventDefault;
  }else{
    alert("Cadastro efetuado");
    e.preventDefault;
  }
}