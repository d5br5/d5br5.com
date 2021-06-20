import {profile} from './images';

const Main = () => {
  return <section id="main">
    <div className="main container">
      <div className="profile">
        <img src={profile}/>
      </div>
      <div className="description">
        <h1>Doh Kim<span></span></h1>
      </div>
    </div>
  </section>
};

export default Main;