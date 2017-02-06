frontApp.controller("postHotHomeController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.tinNoiBats = [];

    $http.get('/API/PostsAPI?att=featureHome&&value=' + 1)
        .success(function (posts) {
            $scope.tinNoiBats = posts;
        });
}]);