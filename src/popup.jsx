import React from 'react'
import ReactDOM from 'react-dom'

function Popup() {
  return (
    <div className="min-w-[375px] p-4 bg-gray-800">
      <h2 className="text-xl font-bold leading-7 text-white font-sans">
        Web Extension
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="px-4 py-3 flex items-center justify-between border rounded border-gray-600">
          <div className="text-sm text-white font-bold">
            Remove{' '}
            <span className="font-mono font-normal text-yellow-300 text-xs">
              localStorage.token
            </span>
          </div>
          <button
            onClick={async () => {
              chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                  chrome.tabs.sendMessage(tabs[0].id, {
                    type: 'REMOVE_TOKEN',
                  })
                }
              )
            }}
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm text-xs font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Run
          </button>
        </div>
        <div className="px-4 py-3 flex items-center justify-between border rounded border-gray-600">
          <div className="text-sm text-white font-bold">Reload extension</div>
          <button
            onClick={async () => {
              chrome.runtime.reload()
            }}
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent rounded shadow-sm text-xs font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Run
          </button>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
)
