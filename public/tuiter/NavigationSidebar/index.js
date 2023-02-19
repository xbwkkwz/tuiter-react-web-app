const NavigationSidebar = (active) => {
  return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fa-brands fa-twitter"></i></a>
      
      <a class="list-group-item list-group-item-action ${active === 'Home' ? 'active': ''}" href="../HomeScreen/index.html">
        <i class="fa-solid fa-house" title="Home"></i>
        <span class="d-none d-xl-inline">Home</span></a>
      
      <a class="list-group-item list-group-item-action ${active === 'Explore' ? 'active': ''}" href="../ExploreScreen/index.html">
        <i class="fa-solid fa-hashtag" title="Explore"></i>
        <span class="d-none d-xl-inline">Explore</span></a>

      <a class="list-group-item list-group-item-action ${active === 'Notifications' ? 'active': ''}" href="/">
        <i class="fa-solid fa-bell" title="Notifications"></i>
        <span class="d-none d-xl-inline">Notifications</span></a>
      
      <a class="list-group-item list-group-item-action ${active === 'Messages' ? 'active': ''}" href="/">
        <i class="fa-solid fa-envelope" title="Messages"></i>
        <span class="d-none d-xl-inline">Messages</span></a>

      <a class="list-group-item list-group-item-action ${active === 'Bookmarks' ? 'active': ''}" href="/">
        <i class="fa-solid fa-bookmark" title="Bookmarks"></i>
        <span class="d-none d-xl-inline">Bookmarks</span></a>

      <a class="list-group-item list-group-item-action ${active === 'Lists' ? 'active': ''}" href="/">
        <i class="fa-solid fa-list" title="Lists"></i>
        <span class="d-none d-xl-inline">Lists</span></a>
      
      <a class="list-group-item list-group-item-action ${active === 'Profile' ? 'active': ''}" href="/">
        <i class="fa-solid fa-user" title="Profile"></i>
        <span class="d-none d-xl-inline">Profile</span></a>

      <a class="list-group-item list-group-item-action ${active === 'More' ? 'active': ''}" href="/">
        <i class="fa-solid fa-ellipsis" title="More"></i>
        <span class="d-none d-xl-inline">More</span></a>
      
    </div>

    <div class="d-grid mt-2">
      <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
      
    </div>
  `);
}
export default NavigationSidebar;
