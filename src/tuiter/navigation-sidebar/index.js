import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];

  return (
    <>
      <div className="list-group mb-2">
        <Link to="/" className="list-group-item">
        <i className="bi bi-align-top" title="Tuiter"></i>
        <span className="d-none d-xl-inline"> Labs</span></Link>

        <Link to="/tuiter/" className={`list-group-item ${active === '' ? 'active' : ''}`}>
          <i className="bi bi-house" title="Home"></i>
          <span className="d-none d-xl-inline"> Home</span></Link>
        
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
          <i className="bi bi-hash" title="Explore"></i>
          <span className="d-none d-xl-inline"> Explore</span></Link>

        <Link to="/" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
          <i className="bi bi-bell" title="Notifications"></i>
          <span className="d-none d-xl-inline"> Notifications</span></Link>

        <Link to="/" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
          <i className="bi bi-envelope" title="Messages"></i>
          <span className="d-none d-xl-inline"> Messages</span></Link>

        <Link to="/" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
          <i className="bi bi-bookmark" title="Bookmarks"></i>
          <span className="d-none d-xl-inline"> Bookmarks</span></Link>

        <Link to="/" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
          <i className="bi bi-list" title="Lists"></i>
          <span className="d-none d-xl-inline"> Lists</span></Link>

        <Link to="/" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
          <i className="bi bi-person" title="Profile"></i>
          <span className="d-none d-xl-inline"> Profile</span></Link>

        <Link to="/" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
          <i className="bi bi-three-dots" title="More"></i>
          <span className="d-none d-xl-inline"> More</span></Link>
      </div>
      <div className="d-grid"><button className="btn btn-primary rounded-pill">Tuit</button></div>
    </>
  );
};
export default NavigationSidebar;

