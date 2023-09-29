'use restrict'; //Modo restrito

//Limpar formulário
const limparFormulrio = (endereco) =>{
   document.getElementById('rua').value ='';
   document.getElementById('bairro').value ='';
   document.getElementById('cidade').value ='';
   document.getElementById('estado').value ='';
}

//Verifiva se CEP é válido
const eNumero =(eNumero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Preenche campos do formulário
const preencherformulário = (endereco) =>{
   document.getElementById('rua').value= endereco.lograradouro;
   document.getElementById('bairro').value= endereco.bairro ;
   document.getElementById('cidade').value= endereco.localidade;
   document.getElementById('uf').value= endereco.uf;
}
