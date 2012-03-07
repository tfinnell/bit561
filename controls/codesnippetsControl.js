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
    var codesnippets = {
      pipe : "codeSnippets",
      tableName : "codeSnippets",
      queryType : "select",
      code : "%"
    },
        snippets = [];

    // Load the data into structure, a jagged associative array.
    post(codesnippets);

    snippets = $S.getType("codeSnippets");

    // Set up the category selector.  Assumes the data objects have a category member.
    if ( snippets.length > 0 ) {
      $F.fillCategorySelector("codeSnippets", "selectCodeCategory", "FK_language");
    }

    // Display the first data value or a clear screen.
    if ( snippets.length > 0 ) {
      $F.present("codeSnippets", snippets[0]);
    } else {
      $F.clearForm("codeSnippets");
    }

    // Establish the carousel and set its events.
    $C.setC(snippets);
    $C.setSelect("codeselect", $C.getC(), "codeSnippets", "code");
    $C.makeEventHandlers("codecontrol", "codeSnippets", $CS.bailout );

    // Put an event on the category selector.
    $("#selectCodeCategory")
      .change(function(e) {
        $F.categorySelector(this, "codeselect", "codeSnippets", "FK_language");
      });

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

    case "FK_language":
      message = "Enter the programming language that the snippet is written in.";
      break;

    case "code":
      message = "Paste or enter the code snippet.";
      break;

    case "description":
      message = "Enter a description of the snippet of code that was entered.";
      break;

    case "FK_user":
      message = "Select the user this snippet belongs to.";
      break;

    default:
      message = "";
      break;

  }
  $("#helpComments").html(message);
  });
});


