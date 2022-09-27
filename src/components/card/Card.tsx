import "./Card.css";

function Card() {
  return (
    <div className="pub-card">
      <img src="./img-1.jpeg" alt="" className="pub-img" />;
      <div className="pub-description">
        <h3 className="pub-head">Title</h3>
        <span className="pub-span">1839-1850</span>
        <p className="pub-p">English Lang</p>
        <a href="#" className="pub-link">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
