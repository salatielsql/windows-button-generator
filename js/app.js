angular.module('buttonGenerator', [])

.controller('Main', ['$scope',
	function(scope) {
		scope.buttonText = "Exemplo"
		scope.color = "blue";
		scope.icon = "";
	}
])

.directive('myFile', [

	function() {
		return {
			restrict: 'A',
			link: function(scope, elem, attrs) {
				var reader = new FileReader();
				reader.onload = function(e) {
					scope.icon = e.target.result;
					scope.$apply();
				}

				elem.on('change', function() {
					reader.readAsDataURL(elem[0].files[0]);
				});
			}
		};
	}
]);