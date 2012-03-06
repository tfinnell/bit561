// JavaScript Document

(function() {

  function CODESNIPPETSCONTROL() {

  }

  $CS = new CODESNIPPETSCONTROL();
  $CS.fn = CODESNIPPETSCONTROL.prototype;

  $CS.fn.init = function() {
  };

  $CS.fn.getThis = function() {
    return this;
  };

  $CS.fn.setUpCodeSnippets = function() {

    // Put all javascript variable declarations at the top of the function.
    var codeSnippets = {
      pipe : "codeSnippets",
      tableName : "codeSnippets",
      queryType : "select",
      code: "%"
    },
    snippetnames = [];

    // Load the data into structure, a jagged associative array.
    post(codeSnippets);

    snippetnames = $S.getType("codeSnippets");

    if ( snippetnames.length > 0 ) {
      $F.fillCategorySelector("codeSnippets")
    }

    // Display the first data value or a clear screen.
    if ( snippetnames.length > 0 ) {
      
      $F.clearForm("codeSnippets");
    }

    // Establish the carousel and set its events.
    $C.setC(snippetnames);
    $C.setSelect("codeSnippetselect", $C.getC(), "codeSnippets", "snippet");
    $C.makeEventHandlers("codeSnippetscontrol", "codeSnippets", $CS.bailout );

  };
 
   
		
  // Do nothing on bailout at the moment.
  $CS.fn.bailout = function() {
  };

})();


// Establish the helpful hints for the forms input elements.
$(document).ready( function() {
  $("fieldset").click( function() {

    var top = 0,
    topStr = "",
    message = "",
    formLocation = {};

  $("fieldset").css("background-color", "#FFFFFF");
  $(this).css("background-color", "#DCCEA6");
  formLocation = $(this).position();
  top = Math.floor(formLocation.top) + 90;
  topStr = top + "px";
  $("#helpComments").css("top", topStr);
  switch ($(this).attr("id")) {

    case "code":
      message = "<br /><br />Enter your snippet of code. ";
      break;

    case "FK_language":
      message = "<br /><br />Enter the language your snippet is in.";
      break;

    case "description":
      message = "<br /><br />Enter a description for your code snippet.";
      break;

    case "FK_user":
      message = "<br /><br />Select a user from the dropdown.";
      break;

    default:
      message = "";
      break;

  }
  $("#helpComments").html(message);
  });
});


