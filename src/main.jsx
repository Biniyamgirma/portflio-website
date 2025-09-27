import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//step 1 I had regstered the plugin here
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
