const button = document.getElementById("button");
const nome = document.getElementById("first_name");
const sobreNome = document.getElementById("last_name");
const email = document.getElementById("email");
const telefone = document.getElementById("phone");
const celular = document.getElementById("mobile");
const cidade = document.getElementById("city");
const estado = document.getElementById("state");
const cnpj = document.getElementById("00NDn00000Mc1M9");
const tipoNegocio = document.getElementById("00NDn00000Mc1ME");
const toastSucesso = document.getElementById("toastSuccesso");
const form = document.getElementById("form");
var UFs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
let nomeValidado = false;
let sobrenomeValidado = false;
let emailValidado = false;
let celularValidado = false;
let cidadeValidado = false;
let estadoValidado = false;
let cnpjValidado = false;
let tipoNegocioValidado = false;



/* Máscara para telefone e celular */
const telefoneMascara = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{2})(\d)/,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");
    return value;
}

// Criando as TAGs Options de forma dinâmica no html.
(() => {
for(i of UFs){
    let option = `<option value="${i}">${i}</option>`;
    estado.innerHTML += option;
}
})();

function validado(){
    const toast = new bootstrap.Toast(toastSucesso);
    toast.show();
    setTimeout(() => {
        return true;
    }, 3000);
}

/* VALIDAÇÕES DOS CAMPOS */
nome.addEventListener("blur", () => {
    let validacaoNome = document.getElementById('validacaoNome');
    
    if(nome.value){
        validacaoNome.innerText = "";
        nome.style.borderColor = "#d4d8da";
        nomeValidado = true;
        
    } else {
        nome.style.borderColor = "red";
        validacaoNome.innerText = "Nome deve ser preenchido";
        validacaoNome.style.color = "red";
        nomeValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

sobreNome.addEventListener("blur", () => {
    let validacaoSobrenome = document.getElementById('validacaoSobrenome');
    
    if(sobreNome.value){
        validacaoSobrenome.innerText = "";
        sobreNome.style.borderColor = "#d4d8da";
        sobrenomeValidado = true;
    } else {
        sobreNome.style.borderColor = "red";
        validacaoSobrenome.innerText = "Sobrenome deve ser preenchido";
        validacaoSobrenome.style.color = "red";
        sobrenomeValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

email.addEventListener("blur", () => {
    let validacaoEmail = document.getElementById('validacaoEmail');
    
    if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        validacaoEmail.innerText = "";
        email.style.borderColor = "#d4d8da";
        emailValidado = true;
        
    } else {
        email.style.borderColor = "red";
        validacaoEmail.innerText = "E-mail deve ser preenchido corretamente";
        validacaoEmail.style.color = "red";
        validacaoEmail.classList.add("ms-5");
        emailValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

telefone.addEventListener("keyup", (event) => {
    let input = event.target;
    input.value = telefoneMascara(input.value)
    
})

celular.addEventListener("blur", () => {
    let validacaoMobile = document.getElementById('validacaoMobile');
    
    if(celular.value){
        validacaoMobile.innerText = "";
        celular.style.borderColor = "#d4d8da";
        celularValidado = true;
        
    } else {
        celular.style.borderColor = "red";
        validacaoMobile.innerText = "Sobrenome deve ser preenchido";
        validacaoMobile.style.color = "red";
        celularValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

celular.addEventListener("keyup", (event) => {
    let input = event.target;
    input.value = telefoneMascara(input.value)
    
})

cidade.addEventListener("blur", () => {
    let validacaoCidade = document.getElementById('validacaoCidade');
    
    if(cidade.value){
        validacaoCidade.innerText = "";
        cidade.style.borderColor = "#d4d8da";
        cidadeValidado = true;
        
    } else {
        cidade.style.borderColor = "red";
        validacaoCidade.innerText = "Cidade deve ser preenchido";
        validacaoCidade.style.color = "red";
        cidadeValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

estado.addEventListener("blur", () => {
    let validacaoEstado = document.getElementById('validacaoEstado');
    
    if(estado.value){
        validacaoEstado.innerText = "";
        estado.style.borderColor = "#d4d8da";
        estadoValidado = true;
        
    } else {
        estado.style.borderColor = "red";
        validacaoEstado.innerText = "Estado é obrigatório";
        validacaoEstado.style.color = "red";
        estadoValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

cnpj.addEventListener("blur", () => {
    let validacaoCnpj = document.getElementById('validacaoCnpj');
    
    if(validarCNPJ(cnpj.value)){
        validacaoCnpj.innerText = "";
        cnpj.style.borderColor = "#d4d8da";
        cnpjValidado = true;
        
    } else {
        cnpj.style.borderColor = "red";
        validacaoCnpj.innerText = "Apenas CNPJs válidos são aceitos";
        validacaoCnpj.style.color = "red";
        cnpjValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

tipoNegocio.addEventListener("blur", () => {
    let validacaoTipoNegocio = document.getElementById('validacaoTipoNegocio');
    
    if(tipoNegocio.value){
        validacaoTipoNegocio.innerText = "";
        tipoNegocio.style.borderColor = "#d4d8da";
        tipoNegocioValidado = true;
        
    } else {
        tipoNegocio.style.borderColor = "red";
        validacaoTipoNegocio.innerText = "Tipo de negócio deve ser preenchido";
        validacaoTipoNegocio.style.color = "red";
        tipoNegocioValidado = false;
    }
    validaForm(nomeValidado, sobrenomeValidado, emailValidado, celularValidado, cidadeValidado, estadoValidado, cnpjValidado, tipoNegocioValidado);
})

/* Função que valida os campos no formulário e libera o botão enviar*/
function validaForm(firstName, lastName, email, mobile, city, state, cnpj, tipoNegocio) {

    if (firstName && lastName && email && mobile && city && state && cnpj && tipoNegocio) {

        button.removeAttribute("disabled");
        button.classList.add("btn-primary");
        button.innerText = "Enviar";
        return true;

    } else {
        
        button.setAttribute("disabled", "true")
        button.classList.remove("btn-primary");
        return false;
    }
}

function validarCNPJ(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}
AOS.init();

