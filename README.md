# Website Time Tracker Extension

## Description

The **Website Time Tracker** Chrome extension helps users track the time they spend on various websites and classify them as productive or unproductive. Users can customize which websites are considered productive, and the extension will show a report of time spent on each website along with its productivity category.

## Features

- Tracks time spent on websites visited in Chrome.
- Categorizes websites as **Productive** or **Unproductive** based on user input.
- Displays time spent on each website in a popup window.
- Users can define their own list of productive websites via an options page.
- Time data persists even after restarting the browser.

## Installation

### 1. Clone the Repository or Download the ZIP:
Clone this repository or download the ZIP file and extract it to your local machine.

### 2. Load the Extension in Chrome:
- Open Chrome and navigate to `chrome://extensions/`.
- Enable **Developer mode** by toggling the switch in the top right corner.
- Click **Load unpacked** and select the folder where the extension files are located.
- The extension will now appear in your toolbar.

### 3. Set Up Productive Websites:
- Click on the extension icon and open the popup.
- Navigate to the **Options** page from the popup or through the extension menu.
- Enter the URLs of websites you want to categorize as productive (one per line).
- Save your changes.

### 4. View Time Tracking:
- Click on the extension icon to view the time spent on websites in the popup.
- The websites will be categorized as **Productive** or **Unproductive**, and the time spent will be displayed in minutes.

## Usage

1. After installation, the extension will automatically track the time spent on websites as you browse.
2. Visit websites, and the extension will start recording the time you spend on each.
3. Open the extension’s popup to view statistics.
4. Use the **Options** page to add or remove productive websites from your list.


## Permissions

- **tabs**: To monitor the websites that are being visited.
- **storage**: To store and retrieve the user's data (time spent on websites, productive websites).
