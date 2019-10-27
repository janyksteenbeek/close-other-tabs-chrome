var title = "Close Other Tabs";
chrome.contextMenus.create({"title": title, "contexts": ["all"], "id": "CLOSE_ALL_TABS_CONTEXT"});
chrome.contextMenus.onClicked.addListener(closeAllTabsHandler);

function closeAllTabsHandler(info, tab) {
    chrome.tabs.query({"active": false, "pinned": false}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.remove(tab.id);
        });
	});
}
