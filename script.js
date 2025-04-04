
function validarCPF(cpf) {
  //Remove mascara
  // cpf = cpf.replace(/[^\d]+/g, "");

  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }
  var soma = 0;

  //Soma os 9 primeiros Digitos multiplicados de 10 a 2
  for (var i = 0; i < 9; i++) {
    soma += cpf.charAt(i) * (10 - i);
  }

  // Validação do Primeiro Digito
  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != cpf.charAt(9)) {
    return false;
  }

  soma = 0;

  //Soma os 10 primeiros Digitos multiplicados de 11 a 2
  for (var k = 0; k < 10; k++) {
    soma += cpf.charAt(k) * (11 - k);
  }

  // Validação do Segundo Digito
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != cpf.charAt(10)) {
    return false;
  }

  return true;
}

/**
 * Mostra em Tela , se o CPF é valido ou Inválido
 * @description
 * 10/05/2022 vlima
 */

function validacao() {
  //Limpar Mensagem
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  //Recebe Dados digitados pelo usuario
  let cpf = document.getElementById("cpf_digitado").value;

  let resultadovalidacao = validarCPF(cpf);
  // Mostra Resultado em  Tela
  if (resultadovalidacao) {
    document.getElementById("success").style.display = "block";
    document.getElementById("origem").innerHTML = this.validaOrigemCPF(cpf);
  } else {
    document.getElementById("error").style.display = "block";
  }
}

/**
 * Mostra no console do navegador, a Origem do CPF
 * @description
 * 11/05/2022 vlima
 */
function validaOrigemCPF(cpf) {
  //Valida Origem do CPF
  switch (cpf.charAt(8)) {
    case "1":
      return " Distrito Federal, Goiás, Mato Grosso do Sul ou Tocantins";

    case "2":
      return " Pará, Amazonas, Acre, Amapá, Rondônia ou Roraima";

    case "3":
      return " Ceará, Maranhão ou Piau";

    case "4":
      return " Pernambuco, Rio Grande do Norte, Paraíba ou Alagoas";

    case "5":
      return " Bahia ou Sergipe";

    case "6":
      return " Minas Gerais";

    case "7":
      return " Rio de Janeiro ou Espírito Santo";

    case "8":
      return " São Paulo";

    case "9":
      return " Paraná ou Santa Catarina";

    case "0":
      return " Rio Grande do Sul";
  }
}
