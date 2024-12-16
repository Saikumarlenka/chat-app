import React from "react";
import avatar from "../../images/avatar.png";
import moreIcon from "../../images/more.png";
import videoIcon from "../../images/video.png";
import editIcon from "../../images/edit.png";

// Reusable image class
const imageClass = "w-5 h-5 cursor-pointer";

const Userinfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h2 className="font-bold">Saikumar</h2>
      </div>
      <div className="flex gap-5">
        <img src={moreIcon} alt="More" className={imageClass} />
        <img src={videoIcon} alt="Video" className={imageClass} />
        <img src={editIcon} alt="Edit" className={imageClass} />
      </div>
    </div>
  );
};

export default Userinfo;
