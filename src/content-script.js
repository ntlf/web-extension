console.log('content-script.js loaded')

chrome.runtime.onMessage.addListener(
  async ({ type, payload }, options, callback) => {
    console.log(type, payload)

    if (type === 'REMOVE_TOKEN') {
      window.localStorage.removeItem('token')
      window.location.reload()
      callback()
    }
  }
)
