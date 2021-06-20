const ContactSet = ({href, icon, path}) =>{
  return <div className="item">
    <a href={href} target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" className={`bi bi-${icon}`} viewBox="0 0 16 16">
        <path d={path}/>
      </svg>
    </a>
  </div>;
}

export default ContactSet;