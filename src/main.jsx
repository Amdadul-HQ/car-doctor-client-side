import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ContextComponent from './Context/ContextComponent.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ContextComponent>
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>,
    </ContextComponent>
  </QueryClientProvider>
)
