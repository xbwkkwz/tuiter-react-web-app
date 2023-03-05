import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];

  return (
    <>
      <div className="list-group mb-2">
        <Link to="/" className="list-group-item" href="#">
        <i className="bi bi-align-top" title="Tuiter"></i>
        <span className="d-none d-xl-inline"> Back to Labs</span></Link>

        <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="#">
          <i className="bi bi-house" title="Home"></i>
          <span className="d-none d-xl-inline"> Home</span></Link>
        
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="#">
          <i className="bi bi-hash" title="Explore"></i>
          <span className="d-none d-xl-inline"> Explore</span></Link>

        <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="#">
          <i className="bi bi-bell" title="Notifications"></i>
          <span className="d-none d-xl-inline"> Notifications</span></a>

        <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="#">
          <i className="bi bi-envelope" title="Messages"></i>
          <span className="d-none d-xl-inline"> Messages</span></a>

        <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="#">
          <i className="bi bi-bookmark" title="Bookmarks"></i>
          <span className="d-none d-xl-inline"> Bookmarks</span></a>

        <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="#">
          <i className="bi bi-list" title="Lists"></i>
          <span className="d-none d-xl-inline"> Lists</span></a>

        <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="#">
          <i className="bi bi-person" title="Profile"></i>
          <span className="d-none d-xl-inline"> Profile</span></a>

        <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="#">
          <i className="bi bi-three-dots" title="More"></i>
          <span className="d-none d-xl-inline"> More</span></a>
      </div>
      <div className="d-grid"><button className="btn btn-primary rounded-pill">Tuit</button></div>
    </>
  );
};
export default NavigationSidebar;

