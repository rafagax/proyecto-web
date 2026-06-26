import { Link } from 'react-router-dom';
import { Wrench, ArrowLeft } from 'lucide-react';
import './UnderConstruction.css';

const UnderConstruction = ({ title }) => {
  return (
    <div className="construction-container animate-fade-in">
      <div className="construction-bg-glow"></div>
      <div className="construction-bg-glow secondary"></div>
      
      <div className="construction-card">
        <div className="construction-icon-wrapper">
          <Wrench size={40} className="construction-icon animate-wrench" />
        </div>
        
        <span className="construction-tag">Under Development</span>
        <h1 className="construction-title text-gradient">{title}</h1>
        
        <p className="construction-subtitle">
          We are designing an amazing digital experience for this section. 
          Check back soon to discover all the new updates.
        </p>
        
        <div className="construction-divider"></div>
        
        <Link to="/" className="btn btn-primary btn-back">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
