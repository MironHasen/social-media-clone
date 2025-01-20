import React, { useState } from "react";
import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const Playvideo = ({videoId}) => {
  const [apiData, setApiData] = useState(null);
  const fetchVideoData = async() => {
     
  };
  return (
    <div className="play_video">
      <video src={video1} controls autoPlay muted></video>
      {/* iframe */}
      <h3>Best youtube channel to learn web development</h3>
      <div className="play_video_info">
        <p>1525 views &bull, 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Miron Hasen</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="Video_description">
        <p>Channel that makes learning easy </p>
        <p>Subscribe Miron Hasen to watch more tutorial on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jacn Nick <span>1 day ago</span>
            </h3>
            <p>Wow, nice video carry on</p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jacn Nick <span>1 day ago</span>
            </h3>
            <p>Wow, nice video carry on</p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jacn Nick <span>1 day ago</span>
            </h3>
            <p>Wow, nice video carry on</p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jacn Nick <span>1 day ago</span>
            </h3>
            <p>Wow, nice video carry on</p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
