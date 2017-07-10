angular.module('app').controller("usersCtrl",['$scope','$http', 'usuarioFactory', function($scope,$http, usuarioFactory){
    ng = $scope;
    ng.newUsuario = {
            nome:"",
            email:"",
            senha:"",
            pokemon:""
    };
    ng.usuarios = [];
    console.log(ng.usuarios.length);
    //GET
    ng.getUsuarios = function(){
		usuarioFactory.getUsuarios().success(function(data){
			ng.usuarios=data;
		});
        console.log(ng.usuarios);        
        console.log(ng.usuarios.length);


	}
    ng.getUsuarios();
    
    //INSERT
    ng.novoUsuario  = function(){
            console.log(ng.newUsuario);
            $http.post("data/insert.php",
            {
                'id':0, 
                'nome': ng.newUsuario.nome, 
                'email':ng.newUsuario.email,
                'senha':ng.newUsuario.senha,
                'pokemon':ng.newUsuario.pokemon
            })
            .success(function(){
                ng.getUsuarios();
                console.log(ng.usuarios);
		});
    }
    //DELETE
    ng.deletarUsuario=function(id){
		$http.post("data/delete.php",{'id':id})
		.success(function(){
				console.log("deletou com sucesso");
				ng.getUsuarios();
				console.log(ng.usuarios);
                

		});
	}
    //UPDATE
    ng.editarUsuario = function(usuario){
        $http.post("data/update.php",
        {
            'id':usuario.id, 
            'nome':usuario.nome, 
            'email':usuario.email,
            'senha':usuario.senha,
            'pokemon':usuario.pokemon
            })
		.success(function(){
				console.log("editou com sucesso");
				ng.getUsuarios();

		});
    }

    ng.setUsuarioEdit = function(usuario){
        ng.usuarioEdit = angular.copy(usuario);
    };

}]);