import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient,QueryClientProvider} from 'react-query'

const queryclient=new QueryClient()
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryclient}>

    <App />
    </QueryClientProvider>
)
