import "./Area.css";
import { Link } from "react-router-dom";
import backArrow from "../images/back-arrow.svg";

const Area = ({ data, title }) => {
  const { image, imagePosition, description } = data;
  return (
    <div className="area">
      <div className="areaHeader">
        <Link to="/">
          <button className="backButton">
              <img src={backArrow} alt="Back arrow"/>
              <span>Back</span>
          </button>
        </Link>
        <span>{title}</span>
      </div>
      {/* certain images have better positioning when dynamically injected here, so this is defined in gameData.json */}
      <img style={{objectPosition: `${imagePosition}`}} src={image} alt={title}/>
      <p className="description">{description}</p>
    </div>
  )
}

export default Area;