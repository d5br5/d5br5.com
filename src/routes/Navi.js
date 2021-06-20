import {useRef} from 'react';
import {useScroll} from "../js/useScroll";



const Navi = () => {

  const scroll = useScroll();

  const hamburger = useRef();
  const mobile_menu = useRef();
  const topButton = useRef();

  const onMenuClick = () => {
    hamburger.current.classList.toggle('active');
    mobile_menu.current.classList.toggle('active');
  }

  const useStyle1 = (location) => {
    if (location.y > 150) return {backgroundColor: "#02343F"};
    else return {backgroundColor: "transparent"}
  }

  const useStyle2 = (location) =>{
    if (location.y > 150) return {display: "inherit"};
    else return {display: "none"}
  }

  return <section id="header">
    <div className="header container" style={useStyle1(scroll)}>

      <div className="nav-bar">
        <div/>
        <div className="nav-list">
          <div className="hamburger" ref={hamburger} onClick={() => {
            hamburger.current.classList.toggle('active');
            mobile_menu.current.classList.toggle('active');
          }
          }>
            <div className="bar"></div>
          </div>
          <ul ref={mobile_menu}>
            <li><a onClick={onMenuClick} href="#main" data-after="Home">Home</a></li>
            <li><a onClick={onMenuClick} href="#skill" data-after="skill">skill</a></li>
            <li><a onClick={onMenuClick} href="#exp" data-after="Experience">Experience</a></li>
            <li><a onClick={onMenuClick} href="#hobby" data-after="hobby">hobby</a></li>
            <li><a onClick={onMenuClick} href="#contact" data-after="contact">contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <a href='#main'>
      <div className="topButton" style={useStyle2(scroll)}>
        TOP
      </div>
    </a>
  </section>
}

export default Navi;