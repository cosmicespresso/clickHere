console.log('content script')

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      // Communicates with background.js
      chrome.runtime.sendMessage({
      	"message": "change_elements"
      });
    }
  }
);
