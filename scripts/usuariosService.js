angular.module('app')
    .service('usuariosService', function($http){
        
        this.getUsuarios = function(){
            var usuario =  $http.get('data/data.json').then(function(response){
                console.log(response.data);
                return response.data;
            });
        };

        this.postUsuario = function(user){
            $http.post('data/data.json', user)
                .then(function(response){
             });
        }
    });