import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-left">
            <p className="h3 text-center">GỬI PHẢN HỒI</p>

            <form action="#" method="post">
              <div className="input-group mb-3">
                <input type="text" placeholder="Họ tên" className="form-control" id="fullname" name="fullname" aria-describedby="fullname_label" />
                <span className="input-group-text" id="fullname_label"><i className="fa fa-solid fa-user"></i></span>
              </div>
              <div className="input-group mb-3">
                <input type="text" placeholder="Nhập email" className="form-control" id="email" name="email" aria-describedby="email_label" />
                <span className="input-group-text" id="email_label"><i className="fa fa-solid fa-envelope"></i></span>
              </div>
              <div className="input-group mb-3">
                <input type="text" placeholder="Nhập số điện thoại" className="form-control" id="content" name="content" aria-describedby="content_label" />
                <span className="input-group-text" id="content_label"><i className="fa fa-solid fa-phone"></i></span>
              </div>
              <div className="input-group mb-3">
                <input type="text" placeholder="Tiêu đề" className="form-control" id="subject" name="subject" aria-describedby="subject_label" />
                <span className="input-group-text" id="subject_label"><i className="fa fa-solid fa-file"></i></span>
              </div>
              
              <div className="input-group mb-3">
                <textarea className="form-control" id="descrition" placeholder="Nhập nội dung vào đây!"></textarea>
                <label htmlFor="floatingTextarea2"></label>
              </div>

              <button type="submit" className="btn btn-danger">Gửi</button>

            </form>


          </div>
          <div className="col-md-6 col-sm-12 col-right">
            <p className="h3 text-center">THÔNG TIN LIÊN HỆ</p>
            <div className="content">
              <p>
                <strong>
                  Địa chỉ:
                </strong>
                 36 Hoàng Cầu, Đống Đa, Hà Nội
              </p>
              <p>
                <strong>
                  Hotline:
                </strong>
                <a href="tel:0869.125.610">
                   0869.125.610
                </a>
              </p>
              <p>
                <strong>
                  Email:
                </strong>
                <a href="mailto:contact.trianh@gmail.com">
                   petcolu@gmail.com
                </a>
              </p>
            </div>
            <div className="my_iframe">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3395744560726!2d105.82218501540221!3d21.019094593483043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab797c957f3d%3A0x80675d0ba06ea09f!2zMzYgUC4gSG_DoG5nIEPhuqd1LCBDaOG7oyBE4burYSwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655288712541!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;