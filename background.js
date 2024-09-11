chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("mindfulReminder", { delayInMinutes: 15, periodInMinutes: 15 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "mindfulReminder") {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Clock1.png',
      title: 'Mindful Reminder',
      message: 'Time for a short mindful break. Take a breath or stretch.',
      priority: 2
    });
  }
});
