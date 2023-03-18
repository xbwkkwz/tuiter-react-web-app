import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./index.css";

const ProfileComponent= () => {
  const profile = useSelector(state => state.profile);

  const month = {"01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June",
                 "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"};

  return(
    <div className="border rounded-2">
      {/* 1 head */}
      <div className="d-flex px-2 my-2">
        <Link to="/tuiter/" style={{textDecorationLine:"none"}} className="fs-2 fw-bold me-5 text-black" title="Back to Home"><i className="bi bi-arrow-left"></i></Link>
        <div><div className="fs-4 fw-bold">{profile.userName}</div><div className="text-secondary">{profile.numOfTuit} Tuits</div></div>
      </div>

      {/* 2 profile background */}
      <img className="w-100 mb-2" src={`/images/${profile.bannerPicture}`} alt=""/>

      {/* 3 icon and button */}
      <div className="position-relative px-2">
        <img className="rounded-circle position-absolute" width={160} src={`/images/${profile.avatarIcon}`} alt="" style={{top:"-80px", left:"20px"}}/>
        <Link to="/tuiter/edit-profile" className="btn btn-outline-dark rounded-pill float-end">Edit profile</Link>
      </div>

      {/* 4 name */}
      <div className="px-2 wd-top-margin-80 fs-4 fw-bold">{profile.userName}</div>
      
      {/* 5 handle */}
      <div className="px-2 mb-2 text-secondary">@{profile.handle}</div>
      
      {/* 6 bio */}
      {("bio" in profile) && (profile.bio !== "") &&
        <><div className="px-2">{profile.bio}</div></>}
      
      {/* 7 website */}
      {("website" in profile) && (profile.website !== "") &&
        <><div className="px-2 mb-2 text-secondary"><i className="bi bi-link me-1"></i><Link to={`https://${profile.website}`} style={{textDecorationLine:"none"}} className="text-secondary">{profile.website}</Link></div></>}
      
      {/* 8 location */}
      <div className="px-2 mb-2 text-secondary">
        {("location" in profile) && (profile.location !== "") && 
          <><i className="bi bi-geo-alt"></i><span className="ms-1 me-3">{profile.location}</span></>}
        {("dateOfBirth" in profile) && (profile.dateOfBirth !== "") && 
          <><i className="bi bi-balloon"></i><span className="ms-1 me-3">Born {month[profile.dateOfBirth.slice(5,7)] + " " + profile.dateOfBirth.slice(8,10) + ", " + profile.dateOfBirth.slice(0,4)}</span></>}
        <i className="bi bi-calendar"></i><span className="ms-1 me-3">Joined {month[profile.dateJoined.slice(5,7)] + " " + profile.dateJoined.slice(0,4)}</span>
      </div>
      
      {/* 9 followers */}
      <div className="px-2 mb-2">
        <span className="fw-bold">{profile.followingCount}</span><span className="ms-1 me-3 text-secondary">Following</span>
        <span className="fw-bold">{profile.followersCount}</span><span className="ms-1 me-3 text-secondary">Followers</span>
      </div>
      
    </div>
  );
}
export default ProfileComponent;