// $(".hour-div").on("click", function(){
//     $(this).html("<input>");

// })
var textValue;
var taskInput;
var hourButton = $(".hour-button"); //give each button a data-id and 
//listener to expand taskDiv to 25%
hourButton.on("click", function () {
    if($(this).attr("data-clicked", "false)")){
        $(this).off("click");
        $(this).next().animate({ "width": "25%" });
        $(this).attr("data-clicked", "true");
       taskInput = $(this).next().append($("<input>"));
    }
    taskInput.on("keypress", function(event){
        textValue = taskInput.val();
        if(event.which === 13){
        $(this).animate({"width" : "75%"});
        $(this).text(textValue);
        console.log($(this).val())
    }
        
    })
        
})


    



var date = moment().format("MMM Do, YYYY, h:mm:ss a");;
var dateHeader = $(".date-header").text(date);

var hour = moment().format("hh");

console.log(hour);
