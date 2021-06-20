const ExerciseSet = ({src, name, href, location}) =>{
  return <div className="exerciseset">
    <div className="img">
      <img src={src} alt=""/>
    </div>
    <h3 className="name">
      {name}
    </h3>
    <div className="location">
      <a target="_blank" href={href} rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        {location}
      </a>
    </div>
  </div>;
}

export default ExerciseSet;