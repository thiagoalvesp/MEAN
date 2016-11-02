angular.module('contatooh').controller('ContatosController', function ($scope, $resource) {

  $scope.contatos = [];
  $scope.filtro = '';
  $scope.mensagem = {texto:''};

  var Contato = $resource('/contatos/:id');

  function buscaContatos() {
    Contato.query(
      function (contatos) {
        $scope.contatos = contatos;
         $scope.mensagem = {};
      },
      function (erro) {
        console.log("Não foi possível obter a lista de contatos");
        console.log(erro);
      }
    );
  };
  buscaContatos();


  $scope.remove = function(contato){
    Contato.delete({id: contato._id},
    buscaContatos,
    function(erro){
      $scope.mensagem = {texto:'Não Foi possível remover o contato'};
      console.log(erro);
    });
  }


});