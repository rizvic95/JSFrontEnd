import './FeatureSection.css';
import React from 'react';
import AppFeatureCard from './AppFeatureCard';

// Import your images here
import iPhonefour from '../images/iPhone12four.jpg';
import EasyPayments from '../images/EasyPayments.jpg';
import DataSecurity from '../images/DataSecurity.jpg';
import CostStatistics from '../images/CostStatistics.jpg';
import Support24 from '../images/Support24.jpg';
import RegularCashback from '../images/RegularCashback.jpg';
import TopStandards from '../images/TopStandards.jpg';

function FeatureSection() {
  return (
    <div className="wrapper">
    <section className="feature-section">
      <div className="iphone-feature">
        <img src={iPhonefour} alt="Mobile phone 4" className="iphone-feature-image" />
      </div>
      <div className="feature-content">
        <h2>App Features</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        <div className="features">
          <AppFeatureCard
            icon={EasyPayments}
            title="Easy Payments"
            description="Id mollis consectetur congue egestas egestas suspendisse sed justo."
          />
          <AppFeatureCard
            icon={DataSecurity}
            title="Data Security"
            description="Augue pulvinar justo, fermentum faucibus aliquam accumsan vestibulum non."
          />
          <AppFeatureCard
            icon={CostStatistics}
            title="Cost Statistics"
            description="Id mollis consectetur congue egestas egestas suspendisse sed justo."
          />
          <AppFeatureCard
            icon={Support24}
            title="Support 24/7"
            description="Augue pulvinar justo, fermentum faucibus aliquam accumsan vestibulum non."
          />
          <AppFeatureCard
            icon={RegularCashback}
            title="Regular Cashback"
            description="Augue pulvinar justo, fermentum faucibus aliquam accumsan vestibulum non."
          />
          <AppFeatureCard
            icon={TopStandards}
            title="Top Standards"
            description="Augue pulvinar justo, fermentum faucibus aliquam accumsan vestibulum non."
          />
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default FeatureSection;
