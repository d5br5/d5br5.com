const Navi = () => {
  return <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#"></a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#main" data-after="Home">Home</a></li>
            <li><a href="#exp" data-after="Experience">Experience</a></li>
            <li><a href="#skill" data-after="skill">skill</a></li>
            <li><a href="#hobby" data-after="hobby">hobby</a></li>
            <li><a href="#contact" data-after="contact">contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
}

export default Navi;