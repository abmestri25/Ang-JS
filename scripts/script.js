angular.module("MyModule",[])
.controller("myController",function($scope){
    // var technologies = [
    //     {name : 'C#',likes : 0,dislikes:0},
    //     {name : 'ASP.NET',likes : 0,dislikes:0},
    //     {name : 'AngularJS',likes : 0,dislikes:0},
    //     {name : 'React',likes : 0,dislikes:0},
    // ]

    // $scope.technologies = technologies;

    // $scope.incrementLikes = function(technology){
    //     technology.likes++;
    // }
    // $scope.incrementDislikes = function(technology){
    //     technology.dislikes++;
    // }


    var employees = [
        {name : 'Ben',dateOfBirth : new Date('November 13,1950'),gender:'Male',salary : 55000.45},
        {name : 'Mark',dateOfBirth : new Date('March 3,1940'),gender:'Male',salary : 552400.45},
        {name : 'Sara',dateOfBirth : new Date('February 15,1930'),gender:'Female',salary : 35000.45},
        {name : 'John',dateOfBirth : new Date('April 1,1920'),gender:'Male',salary : 25000.45},
        {name : 'Mia',dateOfBirth : new Date('January 20,1910'),gender:'Female',salary : 15000.45},
    ]

    $scope.employees = employees;
    $scope.sortCol = 'name';
    $scope.reverseSort = false;

    $scope.sortData = function(col){
        $scope.reverseSort = ($scope.sortCol == col) ? !$scope.reverseSort : false;
        $scope.sortCol = col;
    }

    $scope.getSortClass = function(col){
        if($scope.sortCol == col){
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }


})