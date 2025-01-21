document.getElementById('save').addEventListener('click', function() {
    const productiveWebsites = document.getElementById('productive-websites').value.split('\n').map(url => url.trim());
    chrome.storage.local.set({ productiveWebsites: productiveWebsites });
});
