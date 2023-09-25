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
