import { Link } from "react-router-dom";
import "./NoPage.css"

const NoPage = () => {
  return (
    <div>
      <figure className="nopage">
        <div class="sad-mac"></div>
        <figcaption>
          <span class="sr-text">Error 404: Not Found</span>
          <span class="e"></span>
          <span class="r"></span>
          <span class="r"></span>
          <span class="o"></span>
          <span class="r"></span>
          <span class="_4"></span>
          <span class="_0"></span>
          <span class="_4"></span>
          <span class="n"></span>
          <span class="o"></span>
          <span class="t"></span>
          <span class="f"></span>
          <span class="o"></span>
          <span class="u"></span>
          <span class="n"></span>
          <span class="d"></span><br/>
          <Link to="/"><button className="btn btn-light" >Trở về trang chủ</button></Link>
        </figcaption>
      </figure>
  
    </div>

  )
};

export default NoPage;