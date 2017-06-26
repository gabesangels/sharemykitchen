import React from 'react'

const HomePageCarousel = () => {
  return (
    <div className="columns">
      <div className="column col-12 centered">
        <div className="carousel centered">
          <input
            type="radio"
            id="slide-1"
            name="carousel-radio"
            hidden
            className="carousel-locator"
            checked
          />
          <input
            type="radio"
            id="slide-2"
            name="carousel-radio"
            className="carousel-locator"
            hidden
            defaultChecked
          />
          <input
            type="radio"
            id="slide-3"
            name="carousel-radio"
            hidden
            className="carousel-locator"
            defaultChecked
          />
          <input
            type="radio"
            id="slide-4"
            name="carousel-radio"
            hidden
            className="carousel-locator"
            defaultChecked
          />
          <div className="carousel-container centered">
            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4">
                <i className="icon icon-arrow-left" />
              </label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-2">
                <i className="icon icon-arrow-right" />
              </label>
              <div className="custom-carousel-item">
                <h3 className="custom-carousel-item-text">sharemykitchen</h3>
              </div>
            </figure>

            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1">
                <i className="icon icon-arrow-left" />
              </label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-3">
                <i className="icon icon-arrow-right" />
              </label>
              <img
                src="/static/images/c2.jpg"
                className="img-responsive rounded"
                alt="macOS Yosemite Wallpaper"
              />
            </figure>

            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2">
                <i className="icon icon-arrow-left" />
              </label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-4">
                <i className="icon icon-arrow-right" />
              </label>
              <img
                src="/static/images/c3.jpg"
                className="img-responsive rounded"
                alt="macOS Yosemite Wallpaper"
              />
            </figure>

            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-3">
                <i className="icon icon-arrow-left" />
              </label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-1">
                <i className="icon icon-arrow-right" />
              </label>
              <img
                src="/static/images/c4.jpg"
                className="img-responsive rounded"
                alt="macOS Yosemite Wallpaper"
              />
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
