var textEl = document.getElementById("text");

function setTextFromStorage() {
  chrome.storage.sync.get('text', r => { textEl.value = r.text });
}

textEl.addEventListener('input', _ => {
  var text = textEl.value;
  chrome.storage.sync.set({'text': text});
});

function attachSurfBack(id) {
  chrome.tabs.onActivated.addListener(activeInfo => {
    if (activeInfo.tabId == id) setTextFromStorage();
  })}

chrome.tabs.getCurrent(function(tab) {attachSurfBack(tab.id)});

setTextFromStorage();

/*
textEl.addEventListener('blur', _ => {
  //activateLinks();
  console.log('blur');
})

textEl.addEventListener('focus', _ => {
  setTextFromStorage();
  console.log('focus');
})
*/
