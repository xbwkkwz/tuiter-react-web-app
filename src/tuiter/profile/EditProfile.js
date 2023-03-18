import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import "./index.css";
import {editName, editBio, editLocation, editWebsite, editBirth} from "./profile-reducer";


const EditProfile= () => {
  const profile = useSelector(state => state.profile);
  const [tempProfile, setProfile] = useState(profile);
  const dispatch = useDispatch();

  // change user name
  const nameChangeHandler = (event) => {
    const input = event.target.value;
    let newProfile = {...tempProfile, "userName": input};
    setProfile(newProfile);
  };

  // change user bio
  const bioChangeHandler = (event) => {
    const input = event.target.value;
    let newProfile = {...tempProfile, "bio": input};
    setProfile(newProfile);
  };

  // change website address
  const websiteChangeHandler = (event) => {
    const input = event.target.value;
    let newProfile = {...tempProfile, "website": input};
    setProfile(newProfile);
  };

  // change location
  const locationChangeHandler = (event) => {
    const input = event.target.value;
    let newProfile = {...tempProfile, "location": input};
    setProfile(newProfile);
  };

  // change birth
  const birthChangeHandler = (event) => {
    const input = event.target.value;
    let newProfile = {...tempProfile, "dateOfBirth": input};
    setProfile(newProfile);
  };

  const saveClickHandler = () => {
    if (tempProfile.userName === "") {
      alert("User name cannot be empty!");
    }
    else {
      const name = {"userName": tempProfile.userName};
      dispatch(editName(name));
    }

    const bio = {"bio": tempProfile.bio};
    dispatch(editBio(bio));

    const website = {"website": tempProfile.website};
    dispatch(editWebsite(website));

    const location = {"location": tempProfile.location};
    dispatch(editLocation(location));

    const birth = {"dateOfBirth": tempProfile.dateOfBirth};
    dispatch(editBirth(birth));
  };

  return(
    <div className="border rounded-2">
      {/* 1 head */}
      <div className="px-2 my-2">
        <Link to="/tuiter/profile" style={{textDecorationLine:"none"}} className="fs-4 fw-bold me-5 text-black" title="Cancel edit"><i className="bi bi-x-lg"></i></Link>
        <span className="fs-4 fw-bold">Edit profile</span>
        <Link to="/tuiter/profile" className="btn btn-dark rounded-pill float-end" onClick={saveClickHandler}>Save</Link>
      </div>

      {/* 2 profile background */}
      <img className="w-100 mb-2" src={`/images/${profile.bannerPicture}`} alt=""/>

      {/* 3 icon and button */}
      <div className="position-relative px-2">
        <img className="rounded-circle position-absolute wd-nudge-up" width={160} src={`/images/${profile.avatarIcon}`} alt=""/>
        <button className="btn btn-secondary rounded-pill position-absolute opacity-75" style={{top:"-30px", left:"70px"}} title="Change"><i className="bi bi-camera fs-3 text-white"></i></button>
        <button className="btn btn-secondary rounded-pill position-absolute opacity-75" style={{top:"-200px", left:"250px"}} title="Change"><i className="bi bi-camera fs-3 text-white"></i></button>
        <button className="btn btn-secondary rounded-pill position-absolute opacity-75" style={{top:"-200px", left:"330px"}} title="Cancel"><i className="bi bi-x-lg fs-3 text-white"></i></button>
      </div>

      {/* 4 name */}
      <label className="px-2 wd-top-margin-80 mb-2 fw-bold w-100">Name:
        <input className="form-control border-1 mb-1" type={"text"}
          value={tempProfile.userName} placeholder={profile.userName}
          onChange={nameChangeHandler}>
        </input>
      </label>

      {/* 5 intro bio */}
      <label className="px-2 mb-2 fw-bold w-100">Bio:
        <textarea className="form-control border-1 mb-1"
          value={tempProfile.bio} placeholder={profile.bio}
          onChange={bioChangeHandler}>
        </textarea>
      </label>

      {/* 6 website */}
      <label className="px-2 mb-2 fw-bold w-100">Website:
        <input className="form-control border-1 mb-1" type={"text"}
          value={tempProfile.website} placeholder={profile.website}
          onChange={websiteChangeHandler}>
        </input>
      </label>

      {/* 7 location */}
      <label className="px-2 mb-2 fw-bold w-100">Location:
        <input className="form-control border-1 mb-1" type={"text"}
          value={tempProfile.location} placeholder={profile.location}
          onChange={locationChangeHandler}>
        </input>
      </label>

      {/* 8 birth date */}
      <label className="px-2 mb-2 fw-bold w-100">Birth Date:
        <input className="form-control border-1 mb-1" type={"date"}
          value={tempProfile.dateOfBirth} placeholder={profile.dateOfBirth}
          onChange={birthChangeHandler}>
        </input>
      </label>

      <hr/>
      {/* 9 last switch account type */}
      <div className="px-2 mb-2">
        <Link to="" style={{textDecorationLine:"none"}} className="text-black">
          Switch to professional
          <i className="bi bi-arrow-right float-end"></i>
        </Link>
      </div>
    </div>
  );
}
export default EditProfile;