import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation('common')
  const toggle = () => i18n.changeLanguage(i18n.resolvedLanguage?.startsWith('en') ? 'pt-BR' : 'en')

  return (
    <>
    <Suspense fallback="Carregando traducoes...">
      <h1 className="text-3xl font-bold underline">
        { t('title', { name: 'Maicon '})}
      </h1>
      <button onClick={toggle}>{t('switch')}</button>
    </Suspense>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
