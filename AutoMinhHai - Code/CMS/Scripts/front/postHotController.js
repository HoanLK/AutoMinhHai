frontApp.controller("postHotController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.tinNoiBats = [];

    $http.get('/API/PostsAPI?att=feature&&value=' + 1)
        .success(function (posts) {
            $scope.tinNoiBats = posts;
        });
}]);