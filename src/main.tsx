
// Initialize theme before anything else renders to prevent flash of unstyled content
(function initializeTheme() {
  if (typeof window !== 'undefined') {
    // Check localStorage for user preference
    const savedTheme = localStorage.getItem('theme');
    
    // Apply theme based on localStorage or system preference
    if (savedTheme === 'dark' || 
        (savedTheme !== 'light' && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
})();

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
