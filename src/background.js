console.log('background.js loaded')

chrome.runtime.onInstalled.addListener(async () => {
  console.log('installed')

  const notificationId = `WE-installed-${+new Date()}`
  chrome.notifications.create(notificationId, {
    title: 'Web Extenstion',
    iconUrl: '/bad-pig-icon.png',
    message: 'Installed',
    type: 'basic',
  })
  await new Promise((r) => setTimeout(r, 2000))
  chrome.notifications.clear(notificationId)
})
