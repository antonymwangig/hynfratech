import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/style.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './components/auth-guard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    
    <GoogleOAuthProvider clientId="1083069333675-7t6r092torbg1gfnctfge0ahu1k8v1m1.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
