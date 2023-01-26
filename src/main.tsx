import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'

import '@/styles/index.css'

async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./__mocks__/browser')

    return worker.start()
  }

  return Promise.resolve()
}

prepare().then(() =>
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  ),
)
