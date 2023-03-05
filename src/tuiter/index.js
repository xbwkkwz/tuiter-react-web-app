// import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import PostSummaryList from "./post-summary-list";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";

function Tuiter() {
  return (
    <div className="row mt-2 mb-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore"/>
      </div>

      <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
        <Routes>
          <Route path="home" element={<HomeComponent/>}/>
          <Route path="explore" element={<ExploreComponent/>}/>
        </Routes>
      </div>
      
      <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <Routes>
          <Route path="home" element={<PostSummaryList/>}/>
          <Route path="explore" element={<WhoToFollowList/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default Tuiter;