import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './service/QueryClient.ts'
import "./language/index.ts"
import { Toaster } from './components/ui/toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </QueryClientProvider>,
)
