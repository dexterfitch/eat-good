restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];

  $scope.addRestaurant = function() {
    var spendyLevelToText = "";

    if ($scope.restaurantSpendyLevel === "1") {
      spendyLevelToText = "Under $8"
    } else if ($scope.restaurantSpendyLevel === "2") {
      spendyLevelToText = "$8 - $15"
    } else if ($scope.restaurantSpendyLevel === "3") {
      spendyLevelToText = "$16 - $25"
    } else if ($scope.restaurantSpendyLevel === "4") {
      spendyLevelToText = "$26 - $35"
    } else {
      spendyLevelToText = "Over $35"
    }

    $scope.restaurants.push({
      name: $scope.restaurantName,
      website: $scope.restaurantWebsite,
      spendyText: spendyLevelToText,
      spendyLevel: $scope.restaurantSpendyLevel
    });

    $scope.restaurantName = null;
    $scope.restaurantWebsite = null;
    $scope.restaurantSpendyLevel = "";
  };

});
