/**
 * Created by Dheeraj on 13-06-2017.
 */
nameApp.factory('taskManager', function () {
    // factory object created
    var factory = {};
    // creating a fn for adding name
    factory.addingName = function (taskAdd, inputName) {
        // fetching key from controller and then converting into array and afterwards performing operation fro pushing
        var startTaskData = JSON.parse(localStorage.getItem(taskAdd));
        if (startTaskData!= null && startTaskData!= undefined) {
            startTaskData.push(inputName);
        } else {
            startTaskData = [inputName];
        }
        localStorage.setItem(taskAdd, JSON.stringify(startTaskData));
        // sending data back in the foramt of string
        return JSON.stringify(startTaskData);
    };
    factory.shiftingName = function (indexId, task1, task2) {
        var startTaskData = JSON.parse(localStorage.getItem(task1));
        var middleTaskData = JSON.parse(localStorage.getItem(task2));
        var temp = startTaskData[indexId];
        if (middleTaskData != null && middleTaskData != undefined) {
            middleTaskData.push(temp);
        } else {
            middleTaskData = [temp];
        }
        startTaskData.splice(indexId, 1);
        localStorage.setItem(task1, JSON.stringify(startTaskData));
        localStorage.setItem(task2, JSON.stringify(middleTaskData));
        return {'task1': JSON.stringify(startTaskData), 'task2': JSON.stringify(middleTaskData)};
    };

    factory.updating = function (start, middle, final, task1, task2, task3) {
        localStorage.setItem(start, JSON.stringify(task1));
        localStorage.setItem(middle, JSON.stringify(task2));
        localStorage.setItem(final, JSON.stringify(task3));
    };
    return factory;
});
