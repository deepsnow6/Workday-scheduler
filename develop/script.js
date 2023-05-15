$(function () {
    // add a listener for click events on the save button.
    $(".saveBtn").on("click", function () {
    // use the id in the containing time-block as a key to save the user input in local storage.
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
    });
    
    // apply the past, present, or future class to each time block.
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
    $(this).addClass("past");
    } else if (blockHour === currentHour) {
    $(this).addClass("present");
    } else {
    $(this).addClass("future");
    }
    });
    
    // get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    $(".description").each(function () {
    var key = $(this).parent().attr("id");
    var value = localStorage.getItem(key);
    $(this).val(value);
    });
    
    // display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
    });

    // get current hour in military time
    const currentHour = moment().hour();

    // loop through each time-block div
    $(".time-block").each(function () {
    const blockHour = parseInt($(this).attr("id").split("-")[1]);

     // add appropriate class based on comparison to current hour
     if (blockHour < currentHour) {
    $(this).addClass("past").removeClass("present future");
    } else if (blockHour === currentHour) {
    $(this).addClass("present").removeClass("past future");
    } else {
    $(this).addClass("future").removeClass("past present");
    }
    });
