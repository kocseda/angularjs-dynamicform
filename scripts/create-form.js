formApp.controller('CreateFormController', function ($scope, $modal, $rootScope) {
    $scope.data = [];
    $scope.labels = ["name", "description", "createdAt"];
    $scope.open = function () {
        $rootScope.modalInstance = $modal.open({
            templateUrl: 'pages/modal.html',
            windowClass: 'form-modal'
        });
    }
    $scope.getData = function () {
        if (localStorage['forms'] != undefined) {
            var formData = JSON.parse(localStorage['forms']);
            $scope.data = formData;
        }
    };
    $scope.getData();
});

