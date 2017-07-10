angular.module('app')
    .service('usuarioFactory', function($http){
    var usuarioFactory = {};

    function getUsuarios (){
		return $http.get("data/select.php");
	};
    usuarioFactory.getUsuarios = getUsuarios;
    return usuarioFactory;
    });