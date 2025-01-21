chrome.storage.local.get('websiteData', (data) => {
    const websiteData = data.websiteData || {};
    const websiteList = document.getElementById('website-list');
    websiteList.innerHTML = '';
  
    for (const domain in websiteData) {
      const website = websiteData[domain];
      const div = document.createElement('div');
      div.className = 'website';
  
      const name = document.createElement('p');
      name.textContent = `${domain}:`;
  
      const time = document.createElement('p');
      time.textContent = `Time Spent: ${website.timeSpent}s`;
  
      const productivity = document.createElement('p');
      productivity.textContent = `Productivity: ${website.productive ? 'Productive' : 'Unproductive'}`;
  
      div.appendChild(name);
      div.appendChild(time);
      div.appendChild(productivity);
      websiteList.appendChild(div);
    }
  });