import React, { useEffect } from 'react'
import './CaseStudy.css'
import Marquee from 'react-fast-marquee'

const CaseStudy = () => {
    

  return (
    <div>
    <div className="case-studies-containers">
      <div className="case-studies-text">
        <h2>READ OUR</h2>
        <h2>CASE STUDIES</h2>
        <p>
        Explore how our innovative solutions have transformed businesses across industries. 
        Through the expertise of our multidisciplinary team, we craft impactful strategies that drive engagement, 
        enhance user experiences, and deliver measurable success. Discover the power of collaboration and innovation in every case study we showcase.
        </p>
      </div>
      <div className="case-studies-image">
        <img src="/caseStudy.jpg" alt="Case Studies" />
      </div>
    </div>
    <div className="tech-stack-section">
        <h2>OUR TECH STACK</h2>
        
      </div>
      <div className="brand-slider">
        <Marquee speed={50} gradient={false}>
          <img src="/React.png" alt="Brand 1" className="brand-logo" style={{ marginRight: "10px" }} />
          <img src="/Amazon.png" alt="Brand 2" className="brand-logo" style={{ marginRight: "10px" }} />
          <img src="/Microsoft.png" alt="Brand 3" className="brand-logo" style={{ marginRight: "10px" }} />
          <img src="/aws.png" alt="Brand 4" className="brand-logo" style={{ marginRight: "10px" }}/>
          <img src="/php.png" alt="Brand 4" className="brand-logo" style={{ marginRight: "10px" }} />
          <img src="/asp.net.png" alt="Brand 4" className="brand-logo" style={{ marginRight: "10px" }}/>
          <img src="/MongoDB.jpg" alt="Brand 4" className="brand-logo" style={{ marginRight: "10px" }} />
          <img src="/amazon1.png" alt="Brand 4" className="brand-logo" style={{ marginRight: "10px" }}/>
        </Marquee>
      </div>

      <div className="case-studies-container">
      <div className="case-studies-image" >
        <img src="/website(1).jpg" alt="Case Studies" />
      </div>
      <div className="case-studies-text">
      <h2 className="case-number">01</h2>
        <h2>READ OUR</h2>
        <h2>WEBSITE DESIGN & DEVELOPMENT STUDY</h2>
        <p>
        Our website design and development solutions have empowered businesses to establish a strong online presence,
         enhance user engagement, and drive measurable growth. By crafting visually stunning, user-friendly,
          and responsive websites, we ensure seamless navigation and an intuitive user experience. Our approach integrates
           modern UI/UX principles, fast-loading architectures, and SEO-optimized structures to maximize visibility and conversions.
            From custom website development to interactive features and secure integrations, we create digital platforms that not only reflect brand identity but also deliver long-term success
             in today’s competitive digital landscape.

        </p>
      </div>
    </div>
      <div className="case-studies-container">
      <div className="case-studies-text">
      <h2 className="case-number">02</h2>
        <h2>READ OUR</h2>
        <h2>2D ANIMATION STUDY</h2>
        <p>
        Our 2D animation solutions have helped businesses captivate audiences, simplify complex ideas,
         and enhance brand engagement. By crafting compelling narratives, designing smooth animations,
          and aligning visuals with brand identity, we have empowered companies to stand out in a competitive market.
           From explainer videos to social media animations, our work has driven higher retention rates, increased conversions,
            and strengthened brand recognition, making 2D animation a powerful tool for digital success.
        </p>
      </div>
      <div className="case-studies-image" >
        <img src="/2d.jpg" alt="Case Studies" />
      </div>
    </div>
    <div className="case-studies-container">
      <div className="case-studies-image" >
        <img src="/vd.jpg" alt="Case Studies" />
      </div>
      <div className="case-studies-text">
      <h2 className="case-number">03</h2>
        <h2>READ OUR</h2>
        <h2>VIDEO EDITING STUDY</h2>
        <p>
        Our video editing solutions have helped businesses create compelling visual stories, 
        enhance audience engagement, and drive impactful results. By combining advanced editing techniques, seamless transitions, 
        and high-quality effects, we craft videos that capture attention and communicate messages effectively.
         Our expertise includes color grading, motion graphics, sound design, and dynamic storytelling to ensure a polished and professional final product. 
         From promotional content to social media videos and corporate presentations, our video editing services help brands leave a lasting impression in today’s fast-paced digital world.
        </p>
      </div>
    </div>
    
    </div>
    
  )
}

export default CaseStudy