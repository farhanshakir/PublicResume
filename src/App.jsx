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
        <title>Farhan Shakir - Sr. UX/UI Designer Resume | SaaS Expertise</title>
        <meta
          name="description"
          content="Explore the resume of Farhan Shakir, a seasoned Senior UX/UI designer renowned for crafting innovative and user-friendly digital experiences across diverse sectors including health, e-commerce, and transportation. With a special focus on SaaS projects, discover seamless interfaces blending creativity and functionality, designed to elevate user experiences"
        />
        <meta
          name="keywords"
          content="UX/UI Designer, User Experience, User Interface, Design Portfolio, Figma Expert, SaaS Expertise, Senior Designer, Innovative UX/UI, Health Design, E-commerce, Transportation, Creative Design Solutions, Farhan Shakir"
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
