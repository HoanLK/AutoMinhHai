frontApp.controller("productHomeController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.spNoiBats = [];

    $http.get('/API/ProductsAPI?att=xeCuHome&&value=')
    .success(function (posts) {
        $scope.spNoiBats = posts;
    });
}]);