formApp.controller('DynamicFormController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        var formName = $routeParams.formName;
        $scope.formData = JSON.parse(localStorage.getItem('form_data'));
        $scope.data = [];
        $scope.types = [];
        $scope.validity = [];
        $scope.notFound = true;
        $scope.open = function () {
            var modalInstance = $modal.open({
                templateUrl: 'pages/modal.html',
                windowClass: 'form-modal'
            });
        }
        $scope.getData = function () {
            debugger
            if (localStorage['forms'] != undefined) {
                var formData = JSON.parse(localStorage['forms']);
                for (var i = 0; i < formData.length; i++) {
                    if (formData[i].name == formName) {
                        $scope.notFound = false;
                        $scope.data = formData[i].fields;
                        checkDataType();
                    }
                }
            }
            else $scope.notFound = true;
        };

        var checkDataType = function () {
            $scope.data.forEach(field => {
                if (field.dataType == "STRING") {
                    $scope.types.push("text");
                }
                else {
                    $scope.types.push("number");
                }
            });
        }

        $scope.getData();
    }
]);

