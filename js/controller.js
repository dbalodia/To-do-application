/**
 * Created by Dheeraj on 06-06-2017.
 */
var nameApp = angular.module('nameApp', ['dndLists', 'ui.router']);
nameApp.controller('NameCtrl', function ($scope, taskManager) {
    // defining arrays for saving
    $scope.startingTask = [];
    $scope.middleTask = [];
    $scope.finalTask = [];
    if (localStorage.getItem("startingTask") != null && localStorage.getItem("startingTask") != undefined) {
        $scope.startingTask = JSON.parse(localStorage.getItem("startingTask"));
    }
    if (localStorage.getItem("middleTask") != null && localStorage.getItem("middleTask") != undefined) {
        $scope.middleTask = JSON.parse(localStorage.getItem("middleTask"));
    }
    if (localStorage.getItem("finalTask") != null && localStorage.getItem("finalTask") != undefined) {
        $scope.finalTask = JSON.parse(localStorage.getItem("finalTask"));
    }
    // starting task and adding the task
    $scope.addName = function () {
        $scope.startingTask = JSON.parse(taskManager.addingName("startingTask", $scope.enteredName));
        $scope.enteredName = '';
    };
    // by pressing button moving task from one place to another all three task
    $scope.taskDoing = function (name, list1, list2) {
        var data = taskManager.shiftingName(name, list1, list2);
        $scope[list1] = JSON.parse(data.task1);
        $scope[list2] = JSON.parse(data.task2);

    };
    $scope.saveData = function () {
        var obj = {};
        var startingTask = $scope.enteredName;
        obj.enteredName = startingTask;
        var preData = JSON.parse(localStorage.getItem("startingValue"));
        if (preData) {
            preData.push(obj);
            console.log(preData);
            localStorage.setItem("startingValue", JSON.stringify(preData));
        } else {
            var temp = [];
            temp.push(obj);
            console.log(temp);
            localStorage.setItem("startingValue", JSON.stringify(temp));
        }
    };
    $scope.updateValue = function () {
        taskManager.updating("startingTask", "middleTask", "finalTask", $scope.startingTask, $scope.middleTask, $scope.finalTask);
    };
});
