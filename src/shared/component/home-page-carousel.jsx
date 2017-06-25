import React from 'react'

const HomePageCarousel = function(props) {
  return (
      <div className="columns">
            <div className="column col-12 centered">
              <div className="carousel centered">
                <input type="radio" id="slide-1" name="carousel-radio" hidden className="carousel-locator" checked />
                <input type="radio" id="slide-2" name="carousel-radio" hidden className="carousel-locator" defaultChecked />
                <input type="radio" id="slide-3" name="carousel-radio" hidden className="carousel-locator" defaultChecked />
                <input type="radio" id="slide-4" name="carousel-radio" hidden className="carousel-locator" defaultChecked />
                <div className="carousel-container centered">
                  <figure className="carousel-item">
                    <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4">
                      <i className="icon icon-arrow-left"></i>
                    </label>
                    <label className="item-next btn btn-action btn-lg" htmlFor="slide-2">
                      <i className="icon icon-arrow-right"></i>
                    </label>
                    <img src="http://www.loversiq.com/daut/as/f/k/kitchen-modern-white-cabinets-making-your-look-picture-cabinet-also-kitchne_beautiful-white-kitchens_home-decor_unique-home-decor-sincere-websites-fabric-decorating-blogs-catalog-blog-fall-catalogs.jpg" className="img-responsive rounded" alt="macOS Yosemite Wallpaper" />
                  </figure>

                  <figure className="carousel-item">
                    <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1">
                      <i className="icon icon-arrow-left"></i>
                    </label>
                    <label className="item-next btn btn-action btn-lg" htmlFor="slide-3">
                      <i className="icon icon-arrow-right"></i>
                    </label>
                    <img src="https://cdn.homebnc.com/homeimg/2016/02/13-contemporary-elegant-kitchen-cabinet-ideas-homebnc.jpg" className="img-responsive rounded" alt="macOS Yosemite Wallpaper" />
                  </figure>

                  <figure className="carousel-item">
                    <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2">
                      <i className="icon icon-arrow-left"></i>
                    </label>
                    <label className="item-next btn btn-action btn-lg" htmlFor="slide-4">
                      <i className="icon icon-arrow-right"></i>
                    </label>
                    <img src="http://cdn.decoist.com/wp-content/uploads/2016/05/Transitional-kitchen-with-blue-cabinets-and-a-copper-glint.jpg" className="img-responsive rounded" alt="macOS Yosemite Wallpaper" />
                  </figure>

                  <figure className="carousel-item">
                    <label className="item-prev btn btn-action btn-lg" htmlFor="slide-3">
                      <i className="icon icon-arrow-left"></i>
                    </label>
                    <label className="item-next btn btn-action btn-lg" htmlFor="slide-1">
                      <i className="icon icon-arrow-right"></i>
                    </label>
                    <img src="http://www.freshpalace.com/wp-content/uploads/2014/04/Plants-Sofa-Dining-Kitchen-Loft-Style-Home-Terrassa-Spain.jpg" className="img-responsive rounded" alt="macOS Yosemite Wallpaper" />
                  </figure>
                </div>
                <div className="carousel-nav">
                  <label className="nav-item text-hide hand" htmlFor="slide-1">1</label>
                  <label className="nav-item text-hide hand" htmlFor="slide-2">2</label>
                  <label className="nav-item text-hide hand" htmlFor="slide-3">3</label>
                  <label className="nav-item text-hide hand" htmlFor="slide-4">4</label>
                </div>
              </div>
            </div>
          </div>
    )
}

export default HomePageCarousel
