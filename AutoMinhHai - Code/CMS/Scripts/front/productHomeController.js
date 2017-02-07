frontApp.controller("productHomeController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.spNoiBats = [];

    $http.get('/API/ProductsAPI?att=xeCuHome&&value=1')
    .success(function (products) {
        $scope.spNoiBats = products;
    });
}]);