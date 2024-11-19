import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <span style={{ position: 'absolute', bottom: 50, left: 90, fontSize: '13px' }}>
        Mahesh
      </span>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
