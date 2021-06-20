import {
  macao,
  china,
  hongkong,
  japan,
  north_korea,
  philippines,
  singapore,
  taiwan,
  united_states
} from './images';
import {gymnastics, kettlebell, running} from './images';

import ExerciseSet from "../components/ExerciseSet";
import TravelSet from "../components/TravelSet";

const Hobby = () => {
  return <section id="hobby">
    <div className="hobby container">
      <div className="title">
        <h1 className="section-title">Hobby</h1>
        <p>A child who stays only at home is foolish.</p><p>- An Iceland Proverb -
      </p>
      </div>
      <div className="items">
        <hr/>
        <h2>Exercise</h2>
        <div className="itemlist" id="Exercise">
          <ExerciseSet src={kettlebell} name="CrossFit" href="http://www.painstorm.co.kr/" location="Painstorm"/>
          <ExerciseSet src={running} name="Running"
                       href="https://map.naver.com/v5/search/%ED%95%9C%EA%B0%95?c=14129258.0796867,4514072.3083808,15,0,0,0,dh"
                       location="Han River"/>
          <ExerciseSet src={gymnastics} name="Gymnastics"
                       href="https://map.naver.com/v5/search/%EB%93%9C%EA%B0%80%EC%B2%B4%ED%94%84/place/37741957?c=14135191.5040073,4507601.4362050,15,0,0,0,dh"
                       location="Tkatchev"/>
        </div>
        <hr/>
        <h2>Travel</h2>
        <div className="itemlist" id="travel">
          <TravelSet src={japan} country="Japan" details={['Fukuoka (2007, 2008)', 'Osaka (2012)', 'Nagoya (2018)']}/>
          <TravelSet src={china} country="China" details={['Xiamen (2008)', 'Beijing (2012)']}/>
          <TravelSet src={united_states} country="United States" details={['California (2014)']}/>
          <TravelSet src={north_korea} country="North Korea" details={['Mt. Geumgang (2006)']}/>
          <TravelSet src={philippines} country="Philippines" details={['Cebu (2019)']}/>
          <TravelSet src={singapore} country="Singapore" details={['Singapore (2012)']}/>
          <TravelSet src={hongkong} country="Hong Kong" details={['Hong Kong (2017)']}/>
          <TravelSet src={macao} country="Macao" details={['Macao (2017)']}/>
          <TravelSet src={taiwan} country="Taiwan" details={['Taiwan (2017)']}/>
        </div>
      </div>
    </div>
  </section>
}

export default Hobby;