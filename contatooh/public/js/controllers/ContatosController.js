angular.module('contatooh').controller('ContatosController',function($scope) {
   
   $scope.contatos = [
    {_id:1,nome:'Contato Exemplo 1',email:'cont1@empresa.com.br'},
    {_id:2,nome:'Contato Exemplo 2',email:'cont2@empresa.com.br'},
    {_id:3,nome:'Contato Exemplo 3',email:'cont2@empresa.com.br'}
   ];

   $scope.total = 0; 

   $scope.filtro = '';

   $scope.incrementa = function () {
     $scope.total++;  
   };

});