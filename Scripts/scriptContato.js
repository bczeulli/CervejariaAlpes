const buttonContato = document.getElementById("buttonContato");
const nomeContato = document.querySelector(".nome");
const emailContato = document.querySelector(".email");
const phoneContato = document.querySelector(".phone");
const tipoContato = document.querySelector(".tipo");
const assuntoContato = document.getElementById("subject");
const mensagemContato = document.getElementById("description");
const toastSucessoContato = document.getElementById("toastSuccessoContato");
const exampleModal = document.getElementById("exampleModal");
let nomeContatoValidado = false;
let emailContatoValidado = false;
let phoneContatoValidado = false;
let tipoContatoValidado = false;
let assuntoContatoValidado = false;
let mensagemContatoValidado = false;

/* Máscara para telefone e celular */
const telefoneMascaraContato = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value;
}

function ContatoValidado(){
    const modal = bootstrap.Modal.getInstance(exampleModal); 
    modal.hide();
    const toast = new bootstrap.Toast(toastSucessoContato);
    toast.show();
    setTimeout(() => {
        return true;
    }, 6000);
}

/* VALIDAÇÕES DOS CAMPOS EM CONTATO*/
nomeContato.addEventListener("blur", () => {
    let validacaoContatoNome = document.getElementById('validacaoContatoNome');
    
    if(nomeContato.value){
        validacaoContatoNome.innerText = "";
        nomeContato.style.borderColor = "#d4d8da";
        nomeContatoValidado = true;
        
    } else {
        nomeContato.style.borderColor = "red";
        validacaoContatoNome.innerText = "Nome deve ser preenchido";
        validacaoContatoNome.style.color = "red";
        nomeContatoValidado = false;
    }
    validaFormContato(nomeContatoValidado, emailContatoValidado, phoneContatoValidado, tipoContatoValidado, assuntoContatoValidado, mensagemContatoValidado);
})

emailContato.addEventListener("blur", () => {
    let validacaoContatoEmail = document.getElementById('validacaoContatoEmail');
    
    if(emailContato.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        validacaoContatoEmail.innerText = "";
        emailContato.style.borderColor = "#d4d8da";
        emailContatoValidado = true;
        
    } else {
        emailContato.style.borderColor = "red";
        validacaoContatoEmail.innerText = "Nome deve ser preenchido";
        validacaoContatoEmail.style.color = "red";
        emailContatoValidado = false;
    }
    validaFormContato(nomeContatoValidado, emailContatoValidado, phoneContatoValidado, tipoContatoValidado, assuntoContatoValidado, mensagemContatoValidado);
})

phoneContato.addEventListener("blur", () => {
    let validacaoContatoPhone = document.getElementById('validacaoContatoPhone');
    
    if(phoneContato.value){
        validacaoContatoPhone.innerText = "";
        phoneContato.style.borderColor = "#d4d8da";
        phoneContatoValidado = true;
        
    } else {
        phoneContato.style.borderColor = "red";
        validacaoContatoPhone.innerText = "Nome deve ser preenchido";
        validacaoContatoPhone.style.color = "red";
        phoneContatoValidado = false;
    }
    validaFormContato(nomeContatoValidado, emailContatoValidado, phoneContatoValidado, tipoContatoValidado, assuntoContatoValidado, mensagemContatoValidado);
})

phoneContato.addEventListener("keyup", (event) => {
    let input = event.target;
    input.value = telefoneMascaraContato(input.value)
    
})

tipoContato.addEventListener("blur", () => {
    let validacaoContatoTipo = document.getElementById('validacaoContatoTipo');
    
    if(tipoContato.value){
        validacaoContatoTipo.innerText = "";
        tipoContato.style.borderColor = "#d4d8da";
        tipoContatoValidado = true;
        
    } else {
        tipoContato.style.borderColor = "red";
        validacaoContatoTipo.innerText = "Nome deve ser preenchido";
        validacaoContatoTipo.style.color = "red";
        tipoContatoValidado = false;
    }
    validaFormContato(nomeContatoValidado, emailContatoValidado, phoneContatoValidado, tipoContatoValidado, assuntoContatoValidado, mensagemContatoValidado);
})

assuntoContato.addEventListener("blur", () => {
    let validacaoContatoAssunto = document.getElementById('validacaoContatoAssunto');
    
    if(assuntoContato.value){
        validacaoContatoAssunto.innerText = "";
        assuntoContato.style.borderColor = "#d4d8da";
        assuntoContatoValidado = true;
        
    } else {
        assuntoContato.style.borderColor = "red";
        validacaoContatoAssunto.innerText = "Nome deve ser preenchido";
        validacaoContatoAssunto.style.color = "red";
        assuntoContatoValidado = false;
    }
    validaFormContato(nomeContatoValidado, emailContatoValidado, phoneContatoValidado, tipoContatoValidado, assuntoContatoValidado, mensagemContatoValidado);
})

mensagemContato.addEventListener("blur", () => {
    let validacaoContatoMensagem = document.getElementById('validacaoContatoMensagem');
    
    if(mensagemContato.value){
        validacaoContatoMensagem.innerText = "";
        mensagemContato.style.borderColor = "#d4d8da";
        mensagemContatoValidado = true;
        
    } else {
        mensagemContato.style.borderColor = "red";
        validacaoContatoMensagem.innerText = "Nome deve ser preenchido";
        validacaoContatoMensagem.style.color = "red";
        mensagemContatoValidado = false;
    }
    validaFormContato(nomeContatoValidado, emailContatoValidado, phoneContatoValidado, tipoContatoValidado, assuntoContatoValidado, mensagemContatoValidado);
})

/* Função que valida os campos no formulário de contato e libera o botão enviar*/
function validaFormContato(nome, email, phone, tipo, assunto, mensagem) {

    if (nome && email && phone && tipo && assunto && mensagem) {

        buttonContato.removeAttribute("disabled");
        buttonContato.classList.add("btn-primary");
        return true;

    } else {
        
        buttonContato.setAttribute("disabled", "true")
        buttonContato.classList.remove("btn-primary");
        return false;
    }
}