import { createRoot } from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

*/
