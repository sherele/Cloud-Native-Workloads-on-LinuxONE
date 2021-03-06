angular.module('accountService', [])

	// super simple service
	// each function returns a promise object
	.factory('Accounts', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/accounts');
			},
			create : function(accountData) {
				return $http.post('/api/accounts', accountData);
			},
			put : function(id, accountData) {
				return $http.put('/api/accounts/' + id, accountData);
			},
			delete : function(id) {
				return $http.delete('/api/accounts/' + id);
			}
		}
	}]);
