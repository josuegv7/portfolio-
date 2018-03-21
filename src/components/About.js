import React, {Component} from "react";
import hero from '../assets/images/hero3.jpg';
import style from '../style/About.css';

export default class About extends Component {
  render() {
    return (
      <div className={style.about}>
        <div className={style.aboutcontainer}>
          <div className="section-title text-center center">
          <h2>About Me</h2>
          <hr/>
          </div>
          <div>
            <div className={style.textcenter} className="col-md-12 text-center"><img src={hero}/></div>
            <div className={style.aboutinfo}>
              <div className={style.abouttext}>
                <h4>Need a dynamic developer?</h4>
                 <p>I am a passionate full stack developer, 
                    interested in the intersection of technology and healthcare. 
                    I focus on accessible Front End Development and
                    Back End Applications. My passion is to use 
                    technology-based solutions, to help solve your challenges. 
                    When I’m not working on a project,
                    you can find me on the soccer field, watching my favorite
                    British comedies or cooking authentic Ecuadorian cuisine.</p>
                <a href="#portfolio" className={style.aboutButton}>My Portfolio</a> </div>
                
              </div>
            </div>
          </div>
        </div>

    )
  }
}



// <!-- About Section -->
// <div id="about">
//   <div class="container">
//     <div class="section-title text-center center">
//       <h2>About Me</h2>
//       <hr>
//     </div>
//     <div class="row">
//       <div class="col-md-12 text-center"><img src="img/about.jpg" class="img-responsive"></div>
//       <div class="col-md-8 col-md-offset-2">
//         <div class="about-text">
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
//           <a href="#portfolio" class="btn btn-default btn-lg page-scroll">My Portfolio</a> </div>
//       </div>
//     </div>
//   </div>
// </div>



//       <section style={aboutStyle}>
//         <div className="container">
//           <h3 style = {aboutTitle}> About Me </h3>
//           <div className="row">
//             <div className="col-md-6 col-xs-6 " style={aboutLeft}>
//               <img src={hero} style={herostyle} alt='ME'/>
//             </div>
//             <div className= "col-md-6 col-xs-6 clearfix"  style={aboutRight}>
//               <p>
//                 In need of a dynamic developer?
//                 I am a passionate full stack developer.
//                 I focus on accessible Front End Development and
//                 Back End Applications. I am very detail oriented and love
//                 maintaining clean code.
//                 My passion is to use technology-based solutions, to help
//                 solve your challenges. When I’m not working on a project,
//                 you can find me on the soccer field, watching my favorite
//                 British comedies or cooking authentic Ecuadorian cuisine.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>