import React from "react";
const SocialMedia = () => {
  return (
    <div className="social_media">
      <ul className="ul">
        <li>
          <a href="https://www.facebook.com/AdrianTech-115638889801392" target="_blank" rel="noopener noreferrer">
            {" "}
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCfwoNzsaKqjWg4kM7GtGaxQ" target="_blank" rel="noopener noreferrer">
            {" "}
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/AdrianTech" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMedia;
