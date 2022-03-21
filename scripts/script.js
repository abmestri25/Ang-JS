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
        {name : 'Ben',gender:'Male',salary : 55000.45,city:'London'},
        {name : 'Mark',gender:'Male',salary : 552400.45,city:'Mumbai'},
        {name : 'Sara',gender:'Female',salary : 35000.45,city:'USA'},
        {name : 'John',gender:'Male',salary : 25000.45,city:'Chennai'},
        {name : 'Mia',gender:'Female',salary : 15000.45,city:'London'},
    ]

    $scope.employees = employees;
    // $scope.searchText = '';
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

    $scope.search = function(item){
        if($scope.searchText == undefined){
            return true;
        }
        else{
            if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ){
                return true
            }
        }
        return false;
    }
})