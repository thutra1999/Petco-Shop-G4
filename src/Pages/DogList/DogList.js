import img01 from "../../img/2.png"
import img02 from "../../img/3.png"
import img03 from "../../img/4.png"
import "./DogList.css"


const DogList = (props) => {

  return (
    <>
      <div className="container-fluide">
        {/* Carousel */}

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img02} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>We Offer Quality Pet Services </h5>
                <p className="title_item">We make your pets happy</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img01} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Taking Care Of Your Furry Friends</h5>
                <p className="title_item">We make your pets happy</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img03} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>All Kind Of Services For Dogs</h5>
                <p className="title_item">We make your pets happy</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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
                <img className="picture_item" src="https://petclub.themerex.net/wp-content/uploads/2021/12/image-2.jpg" />
                <h3 className="title_item">Hướng dẫn cách làm pate cho chó thơm ngon, chó biếng ăn cũng phải thèm</h3>
                <p>Lưu ý: Rửa sạch gan heo, sau đó cắt thành từng miếng nhỏ vào xay chung với thịt heo</p>
                <p>
                  <a href="https://www.bachhoaxanh.com/kinh-nghiem-hay/huong-dan-cach-lam-pate-cho-cho-thom-ngon-cho-bieng-an-cung-phai-them-1343514">
                    <button type="button" class="btn btn-danger" >Xem chi tiết</button>
                  </a>
                </p>
              </div>

              <div className="col-lg-4">
                <img className="picture_item" src="https://petclub.themerex.net/wp-content/uploads/2021/12/image-5-840x473.jpg" />
                <h3 className="title_item">Lợi ích của việc cho trẻ nuôi thú cưng</h3>
                <p>Lưu ý: Gia đình có trẻ nhỏ mắc các bệnh về dị ứng và hen suyễn thì không nên cho bé tiếp xúc gần với thú cưng</p>
                <p>
                  <a href="https://www.petcity.vn/loi-ich-cua-viec-cho-tre-nuoi-thu-cung.html-1" alt="Lợi ích của việc cho trẻ nuôi thú cưng">
                    <button type="button" class="btn btn-danger" >Xem chi tiết</button>
                  </a>
                </p>

              </div>

              <div className="col-lg-4">
                <img className="picture_item" src="https://petclub.themerex.net/wp-content/uploads/2021/07/image-10.jpg" />
                <h3 className="title_item">Sự thật bất ngờ về giấc ngủ của chó</h3>
                <p>Lưu ý: Nếu phát hiện chó của bạn bị thiếu ngủ hay mất ngủ đột ngột, hãy mang cún yêu đến bác sĩ thú y để kiểm tra ngay nhé !</p>
                <p>
                  <a href="https://belppet.com/su-that-bat-ngo-ve-giac-ngu-cua-cho-belp-pets" alt="Lợi ích của việc cho trẻ nuôi thú cưng">
                    <button type="button" class="btn btn-danger" >Xem chi tiết</button>
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
              Bật mí kinh nghiệm chọn nhà cho chó<br></br>
              phù hợp với tính cách của bé</h1>
            <p>
              <a href="https://noithatthucung.com/2020/05/04/bat-mi-kinh-nghiem-chon-nha-cho-cho-phu-hop-voi-tinh-cach-cua-be/">
                <button type="button" class="btn btn-danger left" >Xem chi tiết</button>
              </a>
            </p>
          </div>

          <div className="col-md-5">
            <img className="pic_left" src="https://petclub.themerex.net/wp-content/uploads/2021/07/image-12.jpg" />
          </div>
        </div>
        {/* End of line 2 */}

        <hr class="featurette-divider"></hr>

        {/* Line 3 */}
        <div className="row feturette">
          <div className="col-md-7 order-md-2 ">
            <h1 className="title_left">
              Tuổi thọ trung bình của chó mèo là bao nhiêu?<br></br>
              Cách quy đổi tuổi chó mèo sang tuổi người</h1>
            <p>
              <a href="https://noithatthucung.com/2020/04/26/tuoi-tho-trung-binh-cua-cho-meo-la-bao-nhieu-cach-quy-doi-tuoi-meo-sang-tuoi-nguoi/">
                <button type="button" class="btn btn-danger left" >Xem chi tiết</button>
              </a>
            </p>
          </div>

          <div className="col-md-5 order-md-1">
            <img className="pic_left" src="https://petclub.themerex.net/wp-content/uploads/2021/08/image-9-1-1024x683.jpg" />
          </div>
        </div>
        {/* End of line 3 */}

      </div>

    </>
  )
}
export default DogList