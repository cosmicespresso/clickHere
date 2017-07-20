
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "change_elements" ) {
		
		// chrome.tabs.executeScript({
		// 	code: 'document.body.style.backgroundColor="rgb(0,0,255)"'
		// });

		chrome.tabs.insertCSS({
			file: "addedStyles.css"
		});

        // chrome.tabs.create({"url": request.url});
    }
  }
);