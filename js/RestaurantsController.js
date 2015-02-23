restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];

  $scope.createSpendyText = function(spendyLevel) {
    var spendyLevelToText = "";

    if (spendyLevel === "1") {
      spendyLevelToText = "Under $8"
    } else if (spendyLevel === "2") {
      spendyLevelToText = "$8 - $15"
    } else if (spendyLevel === "3") {
      spendyLevelToText = "$16 - $25"
    } else if (spendyLevel === "4") {
      spendyLevelToText = "$26 - $35"
    } else {
      spendyLevelToText = "Over $35"
    }

    return spendyLevelToText;
  }

  $scope.addRestaurant = function() {

    $scope.restaurants.push({
      name: $scope.restaurantName,
      website: $scope.restaurantWebsite,
      cuisine: $scope.restaurantCuisine,
      spendyLevel: $scope.restaurantSpendyLevel
    });

    $scope.restaurantName = null;
    $scope.restaurantWebsite = null;
    $scope.restaurantCuisine = null;
    $scope.restaurantSpendyLevel = "";
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };

});
