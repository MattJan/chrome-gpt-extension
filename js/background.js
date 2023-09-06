// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === 'submitPrompt') {
//     chrome.tabs.create({ url: 'https://chat.openai.com/' }, (tab) => {
//       // Inject the content script after the tab is fully loaded
//       chrome.tabs.executeScript(tab.id, { file: 'js/content.js' }, () => {
//         chrome.tabs.executeScript(tab.id, { code: 'alert("Task completed!");' });
//       });
//     });
//   }
// });

// check tab and send message to content.js
// chrome.tabs.query({ url: 'https://chat.openai.com/*' }, (tabs) => {
//   for(let tab of tabs) {
//     if(tab.status === 'complete') {
//       chrome.tabs.sendMessage(tab.id, { action: 'updateDOM' }, (response) => {
//         if (chrome.runtime.lastError) {
//           console.error(chrome.runtime.lastError);
//           console.log("error", chrome.runtime.lastError)
//           return;
//         } else {
//           console.log("successfully triggered update")
//         }
//       });
//     }
//   }
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete') {
//     chrome.tabs.sendMessage(tabId, { action: 'updateDOM' });
//   }
// });


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message === 'ping') {
//     sendResponse('pong');
//   }
// });



// chrome.tabs.query({ url: '*://*.openai.com/*' }, (tabs) => {
//   for (let tab of tabs) {
//     if (tab.status === 'complete') {
//       chrome.tabs.sendMessage(tab , { action: 'updateDOM' }, (response) => {
//         if (chrome.runtime.lastError) {
//           console.error(chrome.runtime.lastError);
//           return;
//         } else {
//           console.log("successfully triggered update")
//         }
//       });
//     }
//   }
// });