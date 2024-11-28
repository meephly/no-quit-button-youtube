chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
  if (!tabId) return;
  if (!tab.url?.includes("youtube.com")) return;

  await chrome.scripting.insertCSS({
    css: "ytd-compact-link-renderer:has(a[href='/logout']) { display: none; }",
    target: { tabId },
  });
});
