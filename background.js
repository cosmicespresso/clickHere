console.log('background script')

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  // Background.js needs to identify which tab we want to work on
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });

});

// inserts the new style sheet for the tab identified before
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "change_elements" ) {

		chrome.tabs.insertCSS({
			file: "addedStyles.css"
		});

    }
  }
);
