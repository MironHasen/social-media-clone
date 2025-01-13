import React from "react";
import "./Sidebar.css";
import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles_icon from "../../assets/automobiles.png";
import sports_icon from "../../assets/sports.png";
import entertainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar? "" : "small_sidebar"}`}>
      <div className="sortcut_links">
        <div className= {`side_link ${category === 0? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={home_icon} alt="" /> <p>Home</p>
        </div>
        <div className={`side_link ${category === 20? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>{" "}
        <div className={`side_link ${category === 2? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={automobiles_icon} alt="" /> <p>Automobiles</p>
        </div>{" "}
        <div className={`side_link ${category === 17? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={sports_icon} alt="" /> <p>Sports</p>
        </div>{" "}
        <div className={`side_link ${category === 24? "active" : ""}`} onClick={() => setCategory(24)}>
          <img src={entertainment_icon} alt="" /> <p>Entertainment</p>
        </div>{" "}
        <div className={`side_link ${category === 28? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={tech_icon} alt="" /> <p>Technology</p>
        </div>{" "}
        <div className={`side_link ${category === 10? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={music_icon} alt="" /> <p>Music</p>
        </div>{" "}
        <div className={`side_link ${category === 22? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={blogs_icon} alt="" /> <p>Blogs</p>
        </div>
        <div className={`side_link ${category === 25? "active" : ""}`} onClick={() => setCategory(25)}>
          <img src={news_icon} alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed_list">
        <h3>Subscribed</h3>
        <div className="side_link">
          <img src={jack} alt="" /> <p>Piediepie</p>
        </div>
        <div className="side_link">
          <img src={simon} alt="" /> <p>mrbeast</p>
        </div>{" "}
        <div className="side_link">
          <img src={tom} alt="" /> <p>tommy</p>
        </div>
        <div className="side_link">
          <img src={megan} alt="" /> <p>mega</p>
        </div>
        <div className="side_link">
          <img src={cameron} alt="" /> <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
