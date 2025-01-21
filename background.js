let websiteData = {};

// When a tab is activated (switched or opened), track the active tab's URL
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    const url = new URL(tab.url);
    const domain = url.hostname; // Get the domain name of the current tab

    // If the website isn't in the websiteData object, initialize it
    if (!websiteData[domain]) {
      websiteData[domain] = { timeSpent: 0, productive: true };  // Default as productive
    }

    // Start a timer to track time spent on the website
    let startTime = Date.now();

    // Update time spent every second
    const interval = setInterval(() => {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Convert to seconds
      websiteData[domain].timeSpent = elapsedTime; // Update the time spent for the domain
      chrome.storage.local.set({ websiteData }); // Save data to local storage
    }, 1000);

    // Stop the timer when the tab is closed or switched
    chrome.tabs.onRemoved.addListener((tabId) => {
      if (tabId === activeInfo.tabId) {
        clearInterval(interval); // Stop the timer when the tab is removed
      }
    });
  });
});