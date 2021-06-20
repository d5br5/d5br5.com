const Experience = () => {
  return <section id="exp">
    <div className="exp container">
      <div className="title">
        <h1 className="section-title">experience</h1>
        <p>Information's pretty thin stuff,<br/>unless mixed with Experience</p><p>- Clarence Day -</p>
      </div>
      <div className="items">
        <hr/>
        <div className="itemlist" id="education">
          <h2>education</h2>
          <div className="item">

            <div className="info">
              <h3>
                서울대학교
              </h3>
              <h5>Seoul Nat'l University</h5>
              <h4>2015 -</h4>
            </div>
            <div className="desc">
              <p>기계공학 전공</p>
              <p>벤처경영학 연합전공</p>
              <p>해비타트 햇빛봉사단</p>
              <p>H.I.S locking, poppin</p>
              <p>CrossFit SNUWOD</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <h3>
                오산고등학교
              </h3>
              <h5>Osan High School</h5>
              <h4>2012 - 2014</h4>
            </div>
            <div className="desc">
              <p>총학생회장</p>
              <p>발명동아리 사이언스베슬</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Experience;