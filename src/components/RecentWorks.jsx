// Init
import React from 'react';
import ProjectCard from './common/ProjectCard';
import RepisodicLogo from '../assets/repisodic_logo.svg';
import Repisodic from '../assets/repisodic.png';
import RepisodicMob from '../assets/repisodicMob.png';
import SalesPro from '../assets/salesPro.png';
import SalesProMob from '../assets/salesproMob.png';
import SalesProLogo from '../assets/salesPro_logo.svg';
import Kidcab from '../assets/kidcab.png';
import KidcabMob from '../assets/kidcabMob.png';
import KidcabLogo from '../assets/kidcab_logo.svg';
import Bibo from '../assets/bibo.png';
import BiboMob from '../assets/biboMob.png';
import BiboLogo from '../assets/bibo_logo.svg';

// Component
export default function RecentWorks() {
  return (
    <div className="recentWorkContainer">
      <ProjectCard
        topHeading
        Logo={RepisodicLogo}
        desp="Transforming the Healthcare Experience: At Repisodic, I played a pivotal role in
              crafting a patient-centric platform that empowers individuals and families to make
              informed decisions about post-acute care. Through intuitive user interfaces and
              streamlined interactions, we revolutionized the post-acute care selection process."
        linkText="www.repisodic.com"
        link="https://www.repisodic.com/"
        tag1="HealthTech"
        tag2="Health Management"
        tag3="Patient Care"
        bgImage={Repisodic}
        bgImageMob={RepisodicMob}
        gradientColor1="#006ca9"
        gradientColor2="#05af96"
      />
      <ProjectCard
        Logo={SalesProLogo}
        desp="Elevating E-Commerce Excellence: As part of the SalesPro Direct team, I contributed to creating a seamless and engaging online shopping destination. Our focus on user-friendly interfaces and captivating design resulted in an enhanced retail experience that boosts customer engagement and conversions."
        linkText="www.salesprodirect.com"
        link="https://salesprodirect.com/"
        tag1="Retail Branding"
        tag2="E-Commerce"
        tag3="Business/Productivity"
        bgImage={SalesPro}
        bgImageMob={SalesProMob}
        gradientColor1="#236FDA"
        gradientColor2="#2A7FF8"
      />
      <ProjectCard
        Logo={KidcabLogo}
        desp="Revolutionizing Child Transportation: Kidcab presented an exciting opportunity to design a kid-friendly transportation service. Through creative UX solutions and child-centric interfaces, we created an app that ensures safe and enjoyable rides for young passengers."
        linkText="www.kidcab.fr"
        link="https://kidcab.fr/"
        tag1="Transportation"
        tag2="Child Services"
        tag3="FamilyTech"
        bgImage={Kidcab}
        bgImageMob={KidcabMob}
        gradientColor1="#47B9B4"
        gradientColor2="#47B9B4"
      />
      <ProjectCard
        Logo={BiboLogo}
        desp="Simplifying Point-of-Sale Transactions: With Bibo, we aimed to revolutionize the point-of-sale experience. I actively participated in designing an innovative mobile solution that streamlines transactions and enhances retail operations. Our user-centric approach and elegant interfaces transformed the way businesses handle transactions."
        linkText="Google Play Store"
        link="https://play.google.com/store/apps/details?id=com.ako.bibopos"
        tag1="FinTech"
        tag2="RetailTech"
        tag3="Mobile Payments"
        bgImage={Bibo}
        bgImageMob={BiboMob}
        gradientColor1="#006BA6"
        gradientColor2="#006BA6"
      />
    </div>
  );
}
