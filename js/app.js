var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {
    console.log("In my controller...");

    $scope.newContact = {};
    $scope.clickedContact = {};

    $scope.contacts = [{
            fullname: "Name One",
            mobile: "1234567890"
        },
        {
            fullname: "Name Two",
            mobile: "0987654321"
        }
    ];

    $scope.saveContact = function () {
        //console.log($scope.newContact);
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
    };

    $scope.selectContact = function (contact) {
        //console.log(contact);
        $scope.clickedContact = contact;
    };

    $scope.updateUser = function () {

    };

    $scope.deleteUser = function () {
        $scope.contacts.splice($scope.contacts.indexOf($scope.clickedContact));
    };
});