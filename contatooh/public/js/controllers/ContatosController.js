<<<<<<< HEAD
angular.module('contatooh').controller('ContatosController',function($scope, $http) {
   
   $scope.contatos = [];
=======
angular.module('contatooh').controller('ContatosController',function($scope) {
   
   $scope.contatos = [
    {_id:1,nome:'Contato Exemplo 1',email:'cont1@empresa.com.br'},
    {_id:2,nome:'Contato Exemplo 2',email:'cont2@empresa.com.br'},
    {_id:3,nome:'Contato Exemplo 3',email:'cont2@empresa.com.br'}
   ];
>>>>>>> 4aed1c6aeb51175eed9a48aad02c74f113b1c349

   $scope.total = 0; 

   $scope.filtro = '';

   $scope.incrementa = function () {
     $scope.total++;  
   };

<<<<<<< HEAD
   $http.get('/contatos')
   .sucess(function(data){
     $scope.contatos = data;
   })
   .error(function(statusText){
     console.log("Não foi possível obter a lista de contatos");
     console.log(statusText);
   });

=======
>>>>>>> 4aed1c6aeb51175eed9a48aad02c74f113b1c349
});