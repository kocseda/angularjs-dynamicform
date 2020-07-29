formApp.controller('FormModalController', ['$scope', '$rootScope', '$modal', '$window', 
    function ($scope, $rootScope, $modal, $window) {

        $scope.dataTypes = ["STRING", "NUMBER"];

        $scope.formFormat = { "name": "", "description": "", "createdAt": new Date(), "fields": [{ "id": 1, "required": true, "name": "", "dataType": "STRING" }] };

        $scope.warning = { "formName": false, "description": false, "fields": [] };

        $scope.index = $scope.formFormat.fields.length;

        $scope.addNewField = function () {
            var newId = ++$scope.index;
            $scope.formFormat.fields.push({ 'id': newId, "required": true, "name": "", "dataType": "STRING" });
        };

        $scope.removeField = function (id) {

            if ($scope.formFormat.fields.length <= 1) {
                alert("input cannot be less than 1");
                return;
            }

            var index = -1;
            var comArr = eval($scope.formFormat.fields);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === id) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.formFormat.fields.splice(index, 1);
        };

        var resetWarning = function () {
            $scope.warning.formName = false;
            $scope.warning.description = false;
            $scope.formFormat.fields.forEach(field => {
                field = false;
            });
        }

        var checkFormValidation = function () {
            resetWarning();
            var isValid = true;
            if ($scope.formFormat.name == "") {
                $scope.warning.formName = true;
                isValid = false;
            }
            if ($scope.formFormat.description == "") {
                $scope.warning.description = true;
                isValid = false;
            }
            $scope.formFormat.fields.forEach(field => {
                if (field.name == "") {
                    $scope.warning.fields.push(true);
                    isValid = false;
                }
                else {
                    $scope.warning.fields.push(false);
                }
            });
            return isValid;
        }

        $scope.saveForm = function () {
            var isValid = checkFormValidation();
            if (isValid == true) {
                $scope.formFormat.createdAt = new Date();
                var formData = [];
                if (localStorage["forms"] != undefined) {
                    formData = JSON.parse(localStorage['forms']);
                }
                formData.push($scope.formFormat);
                localStorage["forms"] = JSON.stringify(formData);
                debugger
                $window.location.reload();
            }
        }

        $scope.close = function() {
            $rootScope.modalInstance.dismiss('cancel');
        }
    }
]);