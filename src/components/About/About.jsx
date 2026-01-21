// import React from "react";
// import "./aboutStyles.css";
// import FadeAnimation from "../FadeAnimation/FadeAnimation";
// import { SiJavascript, SiReact, SiPython, SiNodedotjs, SiMysql, SiTableau } from "react-icons/si";
// import { SiPlaystation } from "react-icons/si";
// import { LuDumbbell, LuLaptop } from "react-icons/lu";
// import { RiBookMarkedLine, RiBilliardsLine, RiSwordLine } from "react-icons/ri";
// import { FaRegLightbulb, FaHamburger, FaHome } from "react-icons/fa";

// const About = () => {
//   return (
//     <section className="about">
//       <FadeAnimation>
//         <div className="section-header ">/ about me </div>
//         <div className="about-content">
//           <div className="about-blurb">
//             <FadeAnimation delay="100ms">
//               <p>
//                 I am a Software Engineer crafting user-centric applications with strategies that unify viability and
//                 sophistication, balancing intricacy and simplicity for seamless experiences.
//               </p>
//               {"Here are some technologies I have been working with:"}
//             </FadeAnimation>
//             <FadeAnimation delay="200ms">
//               <ul className="tech-stack">
//                 <li>
//                   <SiJavascript /> Javascript
//                 </li>
//                 <li>
//                   <SiReact /> React
//                 </li>
//                 <li>
//                   <SiNodedotjs /> Node.js
//                 </li>
//                 <li>
//                   <SiPython /> Python
//                 </li>
//                 <li>
//                   <SiMysql /> SQL
//                 </li>
//                 <li>
//                   <SiTableau /> Tableau
//                 </li>
//               </ul>
//             </FadeAnimation>
//             <FadeAnimation delay="100ms">{"I'm a homebody, but these are my hobbies: "}</FadeAnimation>
//             <FadeAnimation delay="200ms">
//               <ul className="hobby-stack">
//                 <li>
//                   <RiSwordLine /> Anime
//                 </li>
//                 <li>
//                   <SiPlaystation /> Gaming
//                 </li>
//                 <li>
//                   <LuLaptop /> Techie
//                 </li>
//                 <li>
//                   <FaHamburger /> Foodie
//                 </li>
//                 <li>
//                   <LuDumbbell /> Fitness
//                 </li>
//                 <li>
//                   <RiBilliardsLine /> Pool
//                 </li>
//                 <li>
//                   <FaHome /> Lifestyle
//                 </li>
//                 <li>
//                   <FaRegLightbulb /> Design
//                 </li>
//                 <li>
//                   <RiBookMarkedLine /> Reading
//                 </li>
//               </ul>
//             </FadeAnimation>
//           </div>
//           <div className="about-selfie">
//             <img  src="me.png" alt="it me scott" />
//           </div>
//         </div>
//       </FadeAnimation>
//     </section>
//   );
// };

// export default About;

import React from "react";
import "./aboutStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import { SiJavascript, SiReact, SiPython, SiNodedotjs, SiMysql, SiTableau } from "react-icons/si";
import { SiPlaystation } from "react-icons/si";
import { LuDumbbell, LuLaptop } from "react-icons/lu";
import { RiBookMarkedLine, RiBilliardsLine, RiSwordLine } from "react-icons/ri";
import { FaRegLightbulb, FaHamburger, FaHome } from "react-icons/fa";

const About = () => {
  // Define tech stack as an array of objects
  const techStack = [
    { icon: <SiJavascript />, text: "Javascript" },
    { icon: <SiReact />, text: "React" },
    { icon: <SiNodedotjs />, text: "Node.js" },
    { icon: <SiPython />, text: "Python" },
    { icon: <SiMysql />, text: "SQL" },
    { icon: <SiTableau />, text: "Tableau" },
  ];

  // Define hobbies as an array of objects
  const hobbies = [
    { icon: <RiSwordLine />, text: "Anime" },
    { icon: <SiPlaystation />, text: "Gaming" },
    { icon: <LuLaptop />, text: "Techie" },
    { icon: <FaHamburger />, text: "Foodie" },
    { icon: <LuDumbbell />, text: "Fitness" },
    { icon: <RiBilliardsLine />, text: "Pool" },
    { icon: <FaHome />, text: "Lifestyle" },
    { icon: <FaRegLightbulb />, text: "Design" },
    { icon: <RiBookMarkedLine />, text: "Reading" },
  ];

  return (
    <section className="about">
      <FadeAnimation>
        <div className="section-header">/ about me</div>
        <div className="about-content">
          <div className="about-blurb">
            <FadeAnimation delay="100ms">
              <p>
                I am a Software Engineer crafting user-centric applications with strategies that unify viability and
                sophistication, balancing intricacy and simplicity for seamless experiences.
              </p>
              {"Here are some technologies I have been working with:"}
            </FadeAnimation>
            <FadeAnimation delay="200ms">
              <ul className="tech-stack">
                {techStack.map((item) => (
                  <li key={item.text}>
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
            </FadeAnimation>
            <FadeAnimation delay="100ms">{"I'm a homebody, but these are my hobbies:"}</FadeAnimation>
            <FadeAnimation delay="200ms">
              <ul className="hobby-stack">
                {hobbies.map((item) => (
                  <li key={item.text}>
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
            </FadeAnimation>
          </div>
          <div className="about-selfie">
            <img src="me.png" alt="it me scott" />
          </div>
        </div>
      </FadeAnimation>
    </section>
  );
};

export default About;
