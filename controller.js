'use restrict'; //Modo restrito

//Limpar formulário
const limparFormulrio = (endereco) =>{
   document.getElementById('rua').value ='';
   document.getElementById('bairro').value ='';
   document.getElementById('cidade').value ='';
   document.getElementById('estado').value ='';
}

//Verifiva se CEP é válido
const eNumero =(numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Preenche campos do formulário
const preencherformulário = (endereco) =>{
   document.getElementById('rua').value= endereco.logradouro;
   document.getElementById('bairro').value= endereco.bairro ; 
   document.getElementById('cidade').value= endereco.localidade;
   document.getElementById('uf').value= endereco.uf;
}

/* Função para consummo de API 
utilizando a função assincrona
*/
const pesquisarcep = async() =>{
    limparFormulrio();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
   if (cepValido(cep.value)){ 
      const dados = await fetch(url);
      const addres = await dados.json();
      
      if(addres.hasOwnProperty('erro')){
         alert('cep não encontrado');
         
      }else{
         preencherformulário(addres);
      }
   }else{
     alert('CEP incorreto'); 
   }
} 

// Adiciona um evento CEP, no imput CEP
document.getElementById('cep').addEventListener('focusout',pesquisarcep);

class produto {

   constructor() {
         this.id = 0;
         this.nomeproduto = '';
         this.valor = 0;
   }
     
     adicionar() {
          alert('vamos adicionar um produto!');
         //...
     }
 
    excluir() {
 
        //..
 
        alert('item deletado')
    }
 
 }
 
 var porduto = new produto();