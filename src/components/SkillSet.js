function printLevel(level) {
  if (level === '1') return '★☆☆☆☆';
  else if (level === '2') return '★★☆☆☆';
  else if (level === '3') return '★★★☆☆';
  else if (level === '4') return '★★★★☆';
  else if (level === '5') return '★★★★★';
  else return '☆☆☆☆☆';
}

const SkillSet = ({toolName, toolImg, level}) => {
  return <div className="skillset">
    <div className="logo"><img src={toolImg} alt=""/></div>
    <div className="skillname">{toolName}</div>
    <div className="skillful">{printLevel(level)}</div>
  </div>;
};

export default SkillSet;