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
      project : "BIT561"
    },
        snippets = [];

    // Load the data into structure, a jagged associative array.
    post(codesnippets);

    snippets = $S.getType("codeSnippets");

    // Set up the category selector.  Assumes the data objects have a category member.
    if ( snippets.length > 0 ) {
      $F.fillCategorySelector("codeSnippets", "selectCodeCategory");
    }

    // Display the first data value or a clear screen.
    if ( snippets.length > 0 ) {
      $F.present("codeSnippets", snippets[0]);
    } else {
      $F.clearForm("codeSnippets");
    }

    // Establish the carousel and set its events.
    $C.setC(snippets);
    $C.setSelect("fileselect", $C.getC(), "codeSnippets", "name");
    $C.makeEventHandlers("filecontrol", "codeSnippets", $CS.bailout );

    // Put an event on the category selector.
    $("#selectFileCategory")
      .change(function(e) {
        $F.categorySelector(this, "fileselect", "codeSnippets");
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

    case "source":
      message = "Type in the location of the source code file being converted into HTML. ";
      message += "Put in the complete location: drive, path, filename, and extension.";
      break;

    case "destination":
      message = "Enter the location of the HTML file created by the autodoc conversion. ";
      message += "Put in the complete location: drive, path, filename, and extension.";
      break;

    case "project":
      message = "Enter the name of the project files to be processed with the autodoc ";
      message += "command.";
      break;

    case "name":
      message = "Name is a short, one line description of the file being converted.  ";
      message += "Names are used in indexes and drop down selectors as a quick way ";
      message += "to indicate which file is being chosen.";
      break;

    case "description":
      message = "A longer description of the contents of a project source code file. ";
      message += "The description can be used in a document describing all project ";
      message += "work.";
      break;

    case "category":
      message = "Creating categories such a php, css, etc., makes it easier to find ";
      message += "particular files in projects with a large number of files.";
      break;

    default:
      message = "";
      break;

  }
  $("#helpComments").html(message);
  });
});


