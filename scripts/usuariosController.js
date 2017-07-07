angular.module('app').controller("usersCtrl",['$scope','$http', 'usuariosService', function($scope,$http, usuariosService){
    ng = $scope;
    ng.newUsuario = {
            nome:"",
            email:"",
            senha:"",
            pokemon:""
    };
    ng.usuarios = [];

    ng.usuarios = usuariosService.getUsuarios();

    console.log(ng.usuarios);

    ng.novosUsuarios = ng.usuarios;

    ng.salvar = function(user){
        ng.novosUsuarios.push(user);
        usuariosService.postUsuarios(ng.novosUsuarios);
    };
     
    ng.deletar = function(pos){ 
        var index = ng.novosUsuarios.indexOf(pos);
        $ng.novosUsuarios.splice(pos, 1);
        ng.usuariosService.postUsuarios(ng.novosUsuarios);
    }
}]);