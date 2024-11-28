chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
  console.log("Im wordking!");
  console.log(tabId);
  console.log(tab.url);
  if (!tabId) return;
  if (!tab.url?.includes("youtube.com")) return;

  // chrome.tabs.sendMessage(tabId, {
  //   tabId,
  // });
  // chrome.scripting.insertCSS({
  //   css: "#items > ytd-compact-link-renderer:nth-child(3) { display: none }",
  //   target: { tabId },
  // });
  await chrome.scripting.insertCSS({
    css: "ytd-compact-link-renderer:has(a[href='/logout']) { display: none; }",
    target: { tabId },
  });
});
