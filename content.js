chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      //grab first link
      var firstHref =  $("a:first")[0];

      // Communicate with background.js
      chrome.runtime.sendMessage({
      	"message": "change_elements", 
      	"url": firstHref
      });
    }
  }
);