﻿frontApp.controller("categoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categoryProducts = [];
    $scope.products = [];
    $scope.idCategoryProduct = angular.element('#idCategoryProduct').val();
    $scope.product = {};

    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI?att=idCategoryParent&&value=' + $scope.idCategoryProduct)
        .success(function (categoryProducts) {
            $scope.categoryProducts = categoryProducts;

            angular.forEach($scope.categoryProducts, function (value, index) {
                //Hiện thị sản phẩm mới ở Menu
                $http.get('/Products/Get4NewByCategory/' + value.idCategory)
                    .success(function (products) {
                        $scope.categoryProducts[index].new4Products = angular.copy(products);
                    });

                //Hiển thị sản phẩm nổi bật ở từng danh mục
                $http.get('/Products/Get4FeatureByCategory/' + value.idCategory)
                    .success(function (products) {

                        //Giới hạn ký tự cho Mô tả
                        angular.forEach(products, function (valueProduct, indexProduct) {
                            valueProduct.description = (valueProduct.description.length > 97) ? CutString(valueProduct.description, 100) : valueProduct.description;
                        });

                        $scope.categoryProducts[index].homeProducts = angular.copy(products);
                    });

            });
        });

    //Xem sản phẩm
    $scope.show = function (id) {
        $scope.id = id;
        $http.get('/API/ProductsAPI/' + id)
       .success(function (data) {
           $scope.product = data;
       });
    }

    //Danh sách sản phẩm
    $http.get('/API/ProductsAPI?att=idCategoryProduct&&value=' + $scope.idCategoryProduct)
    .success(function (products) {
        $scope.products = products;
    });
    
//FUNCTION
    function CutString(input, limit) {
        var output = angular.copy(input);
        var index = angular.copy(limit - 1);

        while ((output[index] != ' ') && index < (output.length - 1)) {
            index++;
        }

        return (output.substring(0, index) +  "...");
    }

}]);