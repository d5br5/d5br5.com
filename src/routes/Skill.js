import {css, express, html, javascript, mongodb, mysql, nodejs, php, python, react} from './images';
import {china, japan, south_korea, spains, united_states} from './images';
import {illustrator, indesign, photoshop, premier} from './images';
import {excel, github, gsuit, hancom, notion, powerpoint, slack, word, surge, vercel} from './images';

import SkillSet from '../components/SkillSet';

const Skill = () => {
  return (<section id="skill">
    <div className="skill container">
      <div className="title">
        <h1 className="section-title">Skill</h1>
        <p>"If you are not willing to risk the usual,<br/>You will have to Settle for the Ordinary"</p>
        <p>- Jim Rohn-</p>
      </div>
      <div className="items">
        <hr/>
        <h2>Programming</h2>
        <div className="itemlist" id="programming">
          <SkillSet toolImg={html} toolName="HTML" level='4'/>
          <SkillSet toolImg={css} toolName="CSS" level='4'/>
          <SkillSet toolImg={javascript} toolName="JavaScript" level='3'/>
          <SkillSet toolImg={php} toolName="PHP" level='3'/>
          <SkillSet toolImg={mysql} toolName="MySQL" level='3'/>
          <SkillSet toolImg={mongodb} toolName="MongoDB" level='2'/>
          <SkillSet toolImg={express} toolName="ExpressJS" level='2'/>
          <SkillSet toolImg={nodejs} toolName="NodeJS" level='2'/>
          <SkillSet toolImg={python} toolName="Python" level='2'/>
          <SkillSet toolImg={react} toolName="ReactJs" level='3'/>
        </div>
        <hr/>
        <h2>Design</h2>
        <div className="itemlist" id="design">
          <SkillSet toolImg={indesign} toolName="Indesign" level='4'/>
          <SkillSet toolImg={premier} toolName="Premier" level='3'/>
          <SkillSet toolImg={photoshop} toolName="Photoshop" level='2'/>
          <SkillSet toolImg={illustrator} toolName="Illustrator" level='1'/>
        </div>
        <hr/>
        <h2>Language</h2>
        <div className="itemlist" id="design">
          <SkillSet toolImg={south_korea} toolName="한국어" level='5'/>
          <SkillSet toolImg={china} toolName="漢文" level='4'/>
          <SkillSet toolImg={united_states} toolName="English" level='4'/>
          <SkillSet toolImg={japan} toolName="日本語" level='3'/>
          <SkillSet toolImg={spains} toolName="Español" level='1'/>
        </div>
        <hr/>
        <h2>Office & Cowork</h2>
        <div className="itemlist" id="design">
          <SkillSet toolImg={excel} toolName="Excel" level='5'/>
          <SkillSet toolImg={hancom} toolName="Hancom" level='5'/>
          <SkillSet toolImg={word} toolName="MS Word" level='4'/>
          <SkillSet toolImg={powerpoint} toolName="Powerpoint" level='4'/>
          <SkillSet toolImg={notion} toolName="Notion" level='4'/>
          <SkillSet toolImg={github} toolName="Github" level='3'/>
          <SkillSet toolImg={gsuit} toolName="G suite" level='4'/>
          <SkillSet toolImg={slack} toolName="Slack" level='4'/>
          <SkillSet toolImg={surge} toolName="Surge" level='4'/>
          <SkillSet toolImg={vercel} toolName="Vercel" level='4'/>
        </div>
      </div>
    </div>
  </section>)
};

export default Skill;