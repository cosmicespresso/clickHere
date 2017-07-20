chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      //grab first link
      var firstHref =  $("a:first")[0];
      var firstH1 = $("h1:first")[0];
      console.log(firstHref, firstH1);

      // Communicate with background.js
      chrome.runtime.sendMessage({
      	"message": "change_elements", 
      	"url": firstHref, 
      	"H1": firstH1
      });
    }
  }
);