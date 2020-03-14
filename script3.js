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
var inputDisabled = "false"
var thisSubmitButton;
//listener function to create the input field
taskDiv.on("click", function () {
    if (inputDisabled === "false") {
        taskInput = $("<input>");
        $(this).append(taskInput);
       //this if statemtent keeps the submit button from activating in a different div while the 
       //taskInput is still on the page (fixes a bug where a submit- button would activate after another
       //submit-button other than the one on the div had been clicked )
        if (taskInput) {
            thisSubmitButton = $(this).next();
            thisSubmitButton.data("disabled", "false");
            inputDisabled = "true";
            console.log(inputDisabled);
            console.log(thisSubmitButton.data("disabled"));
        }
    } else {
        return;
    }
//listener for the submit button    
    thisSubmitButton.on("click", function () {
        $(this).prev().text(taskInput.val());
        // this line sets local storage value
        localStorage.setItem($(this).prev().data("hour"), taskInput.val());
        inputDisabled = "false";
        thisSubmitButton.data("disabled", "true")
        console.log(inputDisabled);
        console.log(thisSubmitButton.data("disabled"));
    })
})

//variable storing hour in 24-hr format
var hour = moment().format("HH");

//for loop to change the background of taskDivs depending on time of day
for (var i = 0; i < taskDivArray.length; i++) {
    if (taskDivArray[i].data("hour") < hour) {
        taskDivArray[i].attr("style", "background-color:lightgray");
    } else if (taskDivArray[i].data("hour") === Number(hour)) {
        taskDivArray[i].attr("style", "background-color:lightgreen");
    } else {
        (taskDivArray[i].attr("style", "background-color:lightblue"))
    }
}
//function to populate taskDivs with localStorage info
function getItems() {

    for (var i = 0; i < taskDivArray.length; i++) {
        var existingTask = localStorage.getItem(taskDivArray[i].data("hour"));
        if (existingTask === null) {
            taskDivArray[i].text("")
        } else {
            taskDivArray[i].text(existingTask);
        }
    }
}
getItems();