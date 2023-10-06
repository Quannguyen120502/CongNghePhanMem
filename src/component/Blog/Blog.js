import "./BlogStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";

function Blog() {
  return (
    <div className="blog">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Blog</span>
                  </p>
                  <p className="breadcrumb-text">
                  <a href="home"> Home </a><RightOutlined /> Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="img-news">
                <img src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/news-wood-6.jpg" />
              </div>
              <div className="content-new">
                <p className="time-new">06.08.2022 - Flooring</p>
                <p className="title-new">What is vinyl flooring?</p>
                <p className="sub-new">
                  Vinyl coating applications are products that can be used in
                  […]
                </p>
                <a href="/" className="more">
                  More
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="img-news">
                <img src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/news-wood-6.jpg" />
              </div>
              <div className="content-new">
                <p className="time-new">06.08.2022 - Flooring</p>
                <p className="title-new">What is vinyl flooring?</p>
                <p className="sub-new">
                  Vinyl coating applications are products that can be used in
                  […]
                </p>
                <a href="/" className="more">
                  More
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="img-news">
                <img src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/news-wood-6.jpg" />
              </div>
              <div className="content-new">
                <p className="time-new">06.08.2022 - Flooring</p>
                <p className="title-new">What is vinyl flooring?</p>
                <p className="sub-new">
                  Vinyl coating applications are products that can be used in
                  […]
                </p>
                <a href="/" className="more">
                  More
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="img-news">
                  <img src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/news-wood-6.jpg" />
                </div>
                <div className="content-new">
                  <p className="time-new">06.08.2022 - Flooring</p>
                  <p className="title-new">What is vinyl flooring?</p>
                  <p className="sub-new">
                    Vinyl coating applications are products that can be used in
                    […]
                  </p>
                  <a href="/" className="more">
                    More
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div className="img-news">
                  <img src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/news-wood-6.jpg" />
                </div>
                <div className="content-new">
                  <p className="time-new">06.08.2022 - Flooring</p>
                  <p className="title-new">What is vinyl flooring?</p>
                  <p className="sub-new">
                    Vinyl coating applications are products that can be used in
                    […]
                  </p>
                  <a href="/" className="more">
                    More
                  </a>
                </div>
              </div>
              <div className="col-3">
                <div className="img-news">
                  <img src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/08/news-wood-6.jpg" />
                </div>
                <div className="content-new">
                  <p className="time-new">06.08.2022 - Flooring</p>
                  <p className="title-new">What is vinyl flooring?</p>
                  <p className="sub-new">
                    Vinyl coating applications are products that can be used in
                    […]
                  </p>
                  <a href="/" className="more">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
