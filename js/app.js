angular.module('buttonGenerator', [])

.controller('Main', ['$scope',
	function(scope) {
		scope.buttonText = "Exemplo";
		scope.color = "blue";
		scope.icon = "";

		scope.generateImage = function() {
			html2canvas(angular.element(buttons), {
				onrendered: function(canvas) {
					var filename = scope.buttonText + ".png";
					canvas.toBlob(function(blob) {
						saveAs(blob, filename);
					});
				}
			});
		};
	}
])

.directive("fileread", [function () {
	return {
		scope: {
			fileread: "="
		},
		link: function (scope, element, attributes) {
			element.bind("change", function (changeEvent) {
				var reader = new FileReader();
				reader.onload = function (loadEvent) {
					scope.$apply(function () {
						scope.fileread = loadEvent.target.result;
					});
				};
				reader.readAsDataURL(changeEvent.target.files[0]);
			});
		}
	};
}]);