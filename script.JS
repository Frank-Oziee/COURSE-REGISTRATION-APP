$(document).ready(function(){

    //Code for making the preloader run before the App displays;
    function hidePreloader() {
        $(".preloader").fadeOut("slow");
      }
      // Simulate app loading (remove this in your actual code)
      setTimeout(hidePreloader, 250); // This simulates that the app has finished loading after 2.5 seconds

    //Code for 'dialog box' and input field manipulation on button click;
    $("#button").click(function(){
        // Check if the input field is not empty
        if ($(".input-control").val() !== '') {
            // Show the dialog only when there is a value in the input field
            $("#dialog").dialog("open");
            // Clear the input field when the dialog is opened
            $(".input-control").val('');
        } else {
            // Display an alert or message if the input field is empty
            alert("Please enter a value in the input field.");
        }
    })
    //Code for the 'dialog box' UI display;
    $("#dialog").dialog({
        title: "Thank you for registering!",
        closeOnEscape: false,
        modal: true,
        autoOpen: false
    })

})



