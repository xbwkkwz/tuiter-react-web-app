import largeImage from "./largeImage.js";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <!-- search field and cog -->
    <div class="wd-main-1 position-relative d-flex align-items-center mb-2">
      <div class="wd-main-1-glass position-absolute start-0 ms-3"><i class="fa-solid fa-magnifying-glass"></i></div>
      <div class="wd-main-1-search w-100 me-4"><form action=""><input class="form-control rounded-pill ps-5" type="text" placeholder="Search Twitter" name="search"></form></div>
      <div class="wd-main-1-setting"><a href="#" title="Settings"><i class="fa-solid fa-gear"></i></a></div>
    </div>

    <!-- navigation bar -->
    <ul class="wd-main-2 nav nav-tabs mb-2">
      <li class="nav-item"><a class="nav-link active" href="#">For you</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Trending</a></li>
      <li class="nav-item"><a class="nav-link" href="#">News</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Sports</a></li>
      <li class="nav-item d-none d-md-inline"><a class="nav-link" href="#">Entertainment</a></li>
    </ul>

    <!-- image with overlaid text -->
    <div class="wd-main-3 position-relative mb-2">
      <img class="w-100" src=${largeImage[0].image} alt="">
      <div class="position-absolute bottom-0 start-0 ms-2 mb-1 fs-2 fw-bold text-white">${largeImage[0].title}</div>
    </div>

    <!-- Main posts -->
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;
