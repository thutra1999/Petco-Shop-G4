import "./Intro.css"
import img04 from "../../img/banner01.png"

const Intro = () => {
  return (
    <>
      <div class="container-fluide ">
        <div class="row content">
          <div class="col-sm-2 sidenav">
            {/* <!-- <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p> --> */}
          </div>
          <div class="col-sm-8 text-left">

            <div class="text-left">
              <h3>GIỚI THIỆU</h3>
              <h5>Cửa hàng Petco Shop</h5>
              <br></br>
            </div>


            <p>Petco Shop được mở bởi các thành viên chung niềm đam mê nuôi dưỡng, chăm sóc thú cưng. Bán hàng với giá rẻ nhất thị trường không phải là mục tiêu của Petco Shop, chất lượng sản phẩm và dịch vụ mới là tiêu chí hàng đầu.

              Petco Shop hướng tới lợi ích tối ưu cho khách hàng qua việc đem tới những sản phẩm có chất lượng tốt nhất với mức giá hợp lý nhất. Với phương châm tạo sự tiện lợi và thoải mái nhất cho khách hàng, từ việc tư vấn chi tiết chủng loại, giá cả cho khách hàng đến việc giao hàng và chăm sóc khách hàng, Petco Shop luôn quan tâm để ý một cách chu đáo nhất.</p>

            <p>Spa và chăm sóc thú cưng tại khu vực Hoàng Cầu, Đống Đa, Hà Nội.

              Nhằm phát huy các lợi thế sẵn có, chúng tôi không ngừng nỗ lực, phấn đấu trở thành một cửa hàng phân phối các mặt hàng chất lượng, hiện đại, thẩm mỹ, tinh tế.

              Luôn mang lại giá trị tốt nhất đến Quý Đối tác và Quý Khách hàng với uy tín, chất lượng và trách nhiệm cao.
            </p>

            <p>Chúng tôi rất mong tiếp tục nhận được sự hợp tác và ủng hộ Quý Đối Tác, Quý Khách hàng trong thời gian tới.

              Kính chúc Quý vị sức khỏe, thành công!
            </p>

            <p>Mọi chi tiết xin vui lòng liên hệ Petco Shop </p>

            <div className="bottom">
              <p>
                <span><b>Trụ sở chính:</b></span>
                <span> 36 Hoàng Cầu, Đống Đa, Hà Nội</span>
              </p>
              <p>
                <span><b>Cơ sở 2:</b></span>
                <span> 24 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội</span>
              </p>
              <div >
                <span >
                  <span><b>Hotline:</b></span>
                </span>
                <a href="tel:0869125610"> 0869125610</a>
              </div>
              <div >
                <span >
                  <span><b>Email:</b></span>
                </span>
                <a href="mailto:petcolu@gmail.com"> petcolu@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm-2 sidenav">
        </div>

        {/* <div className='container-fluide'>
          <img className='banner' src={img04} />
        </div> */}

      </div>
    </>
  )
};

export default Intro;