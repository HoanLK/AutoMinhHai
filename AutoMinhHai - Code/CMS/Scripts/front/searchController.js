frontApp.controller("searchController", ['$scope', '$http', '$window', '$cookieStore', function ($scope, $http, $window, $cookieStore) {

    $scope.search = function () {
        if ($scope.searchText == null) {
            alert('Bạn vui lòng nhập từ khóa cần tìm kiếm');
        } else {
            $cookieStore.put('search', $scope.searchText);

            $window.location.href = '/tim-kiem';
        }

    };

    $scope.test = function () {

    }
}]);