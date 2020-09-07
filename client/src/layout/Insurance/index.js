import React from "react";
import "./style.scss";
import {
  insuranceCategory,
  rupiahFormatter,
  showConfirm,
} from "../../util/insurance";
import { Link } from "react-router-dom";

import Slider from "react-slick";

function Insurance() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const linkMarkUp = (link) => (
    <Link to={`/${link}`}>
      <button>Pilih</button>
    </Link>
  );

  return (
    <div className="insurance-wrapper container" id="insurance">
      <h2>Kategori Produk</h2>
      <Slider {...settings}>
        {insuranceCategory.map((item, index) => (
          <div className="slider-container">
            <h3>{item.name}</h3>
            <div className="insurance-content" key={index}>
              <img
                src={item.image}
                alt={`Asuransi ${item.name}`}
                className="insurance-image"
              />
              {item.category.map((categoryItem, index) => (
                <div className="insurance-card" key={index}>
                  <div className="card-header">
                    <span className="card-title">{categoryItem.title}</span>
                    <h4>{rupiahFormatter(categoryItem.price)}</h4>
                  </div>
                  <div className="card-body">
                    <h4>Benefit</h4>
                    <ul>
                      {categoryItem.benefit.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer">
                    {item.name === "Kesehatan" ? (
                      linkMarkUp(categoryItem.link)
                    ) : (
                      <button onClick={() => showConfirm(categoryItem.title)}>
                        Pilih
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Insurance;
