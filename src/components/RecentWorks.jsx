// Init
import React from 'react';
import ProjectCard from './common/ProjectCard';
// import RepisodicLogo from '../assets/repisodic_logo.svg';
// import Repisodic from '../assets/repisodic.png';
// import RepisodicMob from '../assets/repisodicMob.png';
import Nationwide from '../assets/nationwide.png';
import NationwideLogo from '../assets/nationwideLogo.svg';
import NationwideMob from '../assets/nationwideMobBg.svg';
// import SalesPro from '../assets/salesPro.png';
// import SalesProMob from '../assets/salesproMob.png';
// import SalesProLogo from '../assets/salesPro_logo.svg';
import MdiBg from '../assets/mdiBg.png';
import MdiLogo from '../assets/mdiLogo.svg';
import MdiMob from '../assets/mdiMobBg.svg';
// import Kidcab from '../assets/kidcab.png';
// import KidcabLogo from '../assets/kidcab_logo.svg';
// import KidcabMob from '../assets/kidcabMob.png';
import BlinkBg from '../assets/blinkBg.png';
import BlinkLogo from '../assets/blinkLogo.svg';
import BlinkMob from '../assets/blinkMobBg.svg';
import Bibo from '../assets/bibo.png';
import BiboMob from '../assets/biboMobBg.svg';
import BiboLogo from '../assets/bibo_logo.svg';

// Component
export default function RecentWorks() {
  return (
    <div className="recentWorkContainer">
      <ProjectCard
        topHeading
        Logo={NationwideLogo}
        desp="Redesigned mobile app and updated the web app, focusing on enhancing user engagement and optimizing navigation for the UAE real estate market. Delivered an experience that encourages regular use, with improvements based on local market insights and user feedback, leading to increased usability and user satisfaction."
        // linkText="www.repisodic.com"
        link="https://www.nwmea.com/"
        tag1="Real Estate"
        tag2="Property Management"
        tag3="Rental Property"
        TagBg="#AA8A39"
        bgImage={Nationwide}
        bgImageMob={NationwideMob}
        gradientColor1="#AA8A39"
        gradientColor2="#0D2952"
      />
      <ProjectCard
        Logo={MdiLogo}
        desp="Designed an AI-driven document signing platform for seamless contract management among multiple parties. Focused on enhancing user experience through comprehensive UX research and mobile responsiveness, ensuring a smooth and efficient signing process across devices. Delivered an intuitive and secure interface that simplifies complex workflows and improves user satisfaction."
        // linkText="www.salesprodirect.com"
        link="https://www.figma.com/proto/qggHlgzqNa9wxuPC8xlu9O/IMDI?node-id=302-714&t=PTbAWXBsTihoK7dx-1&starting-point-node-id=302%3A714"
        tag1="Document Signing"
        tag2="AI-Driven"
        tag3="Document Management"
        TagBg="#4C81E8"
        bgImage={MdiBg}
        bgImageMob={MdiMob}
        gradientColor1="#4C81E8"
        gradientColor2="#00419D"
      />
      <ProjectCard
        Logo={BlinkLogo}
        desp="I contributed to a high-end event management platform designed to streamline VIP experiences. Developed a seamless and dynamic interface for managing events, integrating features for travel, logistics, and real-time updates. Focused on delivering design that enhanced operational efficiency and guest satisfaction, transforming complex event management into a smooth, organized experience."
        // linkText="www.kidcab.fr"
        link="https://blink.global/"
        tag1="Event Management"
        tag2="Hospitality"
        tag3="SaaS"
        TagBg="#060606"
        bgImage={BlinkBg}
        bgImageMob={BlinkMob}
        gradientColor1="#393A3A"
        gradientColor2="#000"
      />
      <ProjectCard
        Logo={BiboLogo}
        desp="I played a pivotal role in designing an innovative mobile and web app aimed at revolutionizing the point-of-sale experience. Through our user-centric approach and elegant interfaces, we simplified transactions and enhanced retail operations. Our solution streamlined point-of-sale interactions, leading to increased operational efficiency and customer satisfaction. The intuitive design has profoundly impacted how businesses handle transactions, setting new standards in the retail sector."
        // linkText="Google Play Store"
        link="https://play.google.com/store/apps/details?id=com.ako.bibopos"
        tag1="FinTech"
        tag2="RetailTech"
        tag3="Mobile Payments"
        TagBg="#036399"
        bgImage={Bibo}
        bgImageMob={BiboMob}
        gradientColor1="#006BA6"
        gradientColor2="#033E5E"
      />
    </div>
  );
}
