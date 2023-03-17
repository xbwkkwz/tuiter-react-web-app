import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    const newTuit = {"tuit": whatsHappening};
    dispatch(createTuit(newTuit));
  };
  
  const tuitChangeHandler = (event) => {
    const tuitValue = event.target.value;
    setWhatsHappening(tuitValue);
  };

  return (
    <div className="row mx-0">
      <div className="col-2 px-0">
        <img src="/images/nasa-logo.jpg" width={60}/>
      </div>

      <div className="col-10 px-0">
        <textarea className="form-control border-1 mb-1"
          value={whatsHappening} placeholder="What's happening?"
          onChange={tuitChangeHandler}>
        </textarea>
        <div>
          <button className="btn btn-primary rounded-pill float-end ps-3 pe-3"
            onClick={tuitClickHandler}>
            Tuit
          </button>

          <div className="text-secondary fs-5">
            <i className="bi bi-card-image me-3"></i>
            <i className="bi bi-filetype-gif me-3"></i>
            <i className="bi bi-bar-chart me-3"></i>
            <i className="bi bi-emoji-smile me-3"></i>
            <i className="bi bi-geo-alt"></i>
          </div>
        </div>
      </div>

      <div className="col-12 px-0"><hr/></div>
    </div>
  );
}
export default WhatsHappening;
