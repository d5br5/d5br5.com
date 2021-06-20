const TravelSet = ({src, country, details}) =>{
  return <div className="travelset">
    <div className="country">
      <img src={src} alt=""/>
    </div>
    <div className="desc">
      <div className="name">{country}</div>
      {details.map((detail, index)=><div key={index} className="detail">{detail}</div>)}
    </div>
  </div>
}

export default TravelSet;