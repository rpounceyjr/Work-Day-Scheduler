var date = moment().format("MMM Do, YYYY");;
var dateHeader = $(".date-header").text(date);

var taskDiv = $(".task-div");
var taskDiv8 = $(".task-div8");
var taskDiv9 = $(".task-div9");
var taskDiv10 = $(".task-div10");
var taskDiv11 = $(".task-div11");
var taskDiv12 = $(".task-div12");
var taskDiv13 = $(".task-div13");
var taskDiv14 = $(".task-div14");
var taskDiv15 = $(".task-div15");
var taskDiv16 = $(".task-div16");
var taskDiv17 = $(".task-div17");

var taskDivArray = [taskDiv8, taskDiv9, taskDiv10, taskDiv11, taskDiv12, taskDiv13, taskDiv14, taskDiv15, taskDiv16, taskDiv17]

var taskInput = "";
//"on/off switch" for the inputListener
var inputDisabled = "false"

taskDiv.on("click", function () {
    if (inputDisabled === "false") {
        taskInput = $("<input>");
        $(this).append(taskInput);
        inputDisabled = "true"
    } else {
        return;
    }
})

// listener to add text from input into the calendar
$("button").on("click", function () {
    $(this).prev().text(taskInput.val());
    //this line sets local storage value
    localStorage.setItem($(this).prev().data("hour"), taskInput.val());
    taskInput.val("");
    inputDisabled = "false";
    console.log(inputDisabled);
})

//listener to add text from input into the calendar
// $(".submit-button").on("click", function(){
//     $(this).prev().text(taskInput.val());
//     inputDisabled = "false";
//     console.log(inputDisabled);
// })
//listener to clear task
// $(".clear-button").on("click", function(){
//     $(this).prev().prev().text().clear();
//     inputDisabled = "false"
// })

//variable storing hour in 24-hr format
var hour = moment().format("HH");
console.log(hour);

//for loop to change the background of taskDivs depeneding on time of day
for (var i = 0; i < taskDivArray.length; i++) {
    if (taskDivArray[i].data("hour") < hour) {
        taskDivArray[i].attr("style", "background-color:lightgray");
        console.log(taskDivArray.length);
    }
}

//function to populate taskDivs with localStorage info

function getItems(){ 
   
    for(var i = 0; i < taskDivArray.length; i++){
        var existingTask = localStorage.getItem(taskDivArray[i].data("hour"));
        if(existingTask === null){
            taskDivArray[i].text("")
        }else{
            taskDivArray[i].text(existingTask);
        }
    }
}
getItems();