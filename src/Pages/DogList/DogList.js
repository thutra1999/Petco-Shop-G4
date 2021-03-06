import './DogList.css';
import React from "react";
const DogList = (props) => {
  return (
    <>
      <div className="container-fluide doglist">
        {/* Carousel */}

        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../img/3.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>We Offer Quality Pet Services </h5>
                <p className="title_item">We make your pets happy</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../img/2.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Taking Care Of Your Furry Friends</h5>
                <p className="title_item">We make your pets happy</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../img/4.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>All Kind Of Services For Dogs</h5>
                <p className="title_item">We make your pets happy</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* End of Carousel */}

        {/* Line 1 */}
        <div className="container-fluide">
          <div className="container pic_item">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="picture_item"
                  src="https://petclub.themerex.net/wp-content/uploads/2021/12/image-2.jpg"
                />
                <h3 className="title_item">
                  H?????ng d???n c??ch l??m pate cho ch?? th??m ngon, ch?? bi???ng ??n c??ng
                  ph???i th??m
                </h3>
                <p>
                  L??u ??: R???a s???ch gan heo, sau ???? c???t th??nh t???ng mi???ng nh??? v??o
                  xay chung v???i th???t heo
                </p>
                <p className="text-center">
                  <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/huong-dan-cach-lam-pate-cho-cho-thom-ngon-cho-bieng-an-cung-phai-them-1343514">
                    <button type="button" class="btn btn-danger">
                      Xem chi ti???t
                    </button>
                  </a>
                </p>
              </div>

              <div className="col-lg-4">
                <img
                  className="picture_item"
                  src="https://petclub.themerex.net/wp-content/uploads/2021/12/image-5-840x473.jpg"
                />
                <h3 className="title_item">
                  L???i ??ch c???a vi???c cho tr??? nu??i th?? c??ng
                </h3>
                <p>
                  L??u ??: Gia ????nh c?? tr??? nh??? m???c c??c b???nh v??? d??? ???ng v?? hen suy???n
                  th?? kh??ng n??n cho b?? ti???p x??c g???n v???i th?? c??ng
                </p>
                <p className="text-center">
                  <a
                    href="https://www.petcity.vn/loi-ich-cua-viec-cho-tre-nuoi-thu-cung.html-1"
                    alt="L???i ??ch c???a vi???c cho tr??? nu??i th?? c??ng"
                  >
                    <button type="button" class="btn btn-danger">
                      Xem chi ti???t
                    </button>
                  </a>
                </p>
              </div>

              <div className="col-lg-4">
                <img
                  className="picture_item"
                  src="https://petclub.themerex.net/wp-content/uploads/2021/07/image-10.jpg"
                />
                <h3 className="title_item">
                  S??? th???t b???t ng??? v??? gi???c ng??? c???a ch??
                </h3>
                <p>
                  L??u ??: N???u ph??t hi???n ch?? c???a b???n b??? thi???u ng??? hay m???t ng??? ?????t
                  ng???t, h??y mang c??n y??u ?????n b??c s?? th?? y ????? ki???m tra ngay nh?? !
                </p>
                <p className="text-center">
                  <a
                    href="https://belppet.com/su-that-bat-ngo-ve-giac-ngu-cua-cho-belp-pets"
                    alt="L???i ??ch c???a vi???c cho tr??? nu??i th?? c??ng"
                  >
                    <button type="button" class="btn btn-danger">
                      Xem chi ti???t
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End of line 1 */}
        <hr class="featurette-divider"></hr>

        {/* Line 2 */}
        <div className="row feturette">
          <div className="col-md-7">
            <h1 className="title_left">
              B???t m?? kinh nghi???m ch???n nh?? cho ch??<br></br>
              ph?? h???p v???i t??nh c??ch c???a b??
            </h1>
            <p className="text-center">
              <a href="https://noithatthucung.com/2020/05/04/bat-mi-kinh-nghiem-chon-nha-cho-cho-phu-hop-voi-tinh-cach-cua-be/">
                <button type="button" class="btn btn-danger left">
                  Xem chi ti???t
                </button>
              </a>
            </p>
          </div>

          <div className="col-md-5">
            <img
              className="pic_left"
              src="https://petclub.themerex.net/wp-content/uploads/2021/07/image-12.jpg"
            />
          </div>
        </div>
        {/* End of line 2 */}

        <hr class="featurette-divider"></hr>

        {/* Line 3 */}
        <div className="row feturette">
          <div className="col-md-7 order-md-2 ">
            <h1 className="text-center">
              Tu???i th??? trung b??nh c???a ch?? m??o l?? bao nhi??u?<br></br>
              C??ch quy ?????i tu???i ch?? m??o sang tu???i ng?????i
            </h1>
            <p className="text-center">
              <a href="https://noithatthucung.com/2020/04/26/tuoi-tho-trung-binh-cua-cho-meo-la-bao-nhieu-cach-quy-doi-tuoi-meo-sang-tuoi-nguoi/">
                <button type="button" class="btn btn-danger left">
                  Xem chi ti???t
                </button>
              </a>
            </p>
          </div>

          <div className="col-md-5 order-md-1">
            <img
              className="pic_left"
              src="https://petclub.themerex.net/wp-content/uploads/2021/08/image-9-1-1024x683.jpg"
            />
          </div>
        </div>
        {/* End of line 3 */}
      </div>
    </>
  );
};
export default DogList;
