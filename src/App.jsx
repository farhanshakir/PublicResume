// Init
import React from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';

// Files
import Index from './routes/index';
import './css/index.css';

// Component
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Farhan Shakir - Product Designer Resume | SaaS Expertise</title>
        <meta
          name="description"
          content="Product Designer ready for your next project. Hire me for innovative designs in diverse sectors including healthcare, real estate, e-commerce, transportation, SaaS, etc."
        />
        <meta
          name="keywords"
          content="Product Designer, UX/UI Designer, User Experience, User Interface, Design Portfolio, Figma Expert, SaaS Expertise, Senior Designer, Innovative UX/UI, Health Design, E-commerce, Transportation, Creative Design Solutions, Farhan Shakir"
        />
      </Helmet>
      {/* toastify Container for Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar transition={Flip} />
      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
