console.log('background script')

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });

});

// runs code after having listened to browser action
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "change_elements" ) {

		chrome.tabs.insertCSS({
			file: "addedStyles.css"
		});

    }
  }
);
