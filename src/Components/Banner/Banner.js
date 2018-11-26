import React , { Component } from 'react';
import './Banner.css';
import one from '../../assets/img/main.jpg';
import two from '../../assets/img/two.jpg';
import three from '../../assets/img/three.jpg';
import four from '../../assets/img/four.jpg';
import five from '../../assets/img/five.jpg';
import six from '../../assets/img/six.jpg';
import seven from '../../assets/img/seven.jpg';
import eight from '../../assets/img/eight.jpg';
import socialIcon from '../../assets/img/social-icons.png';
class Banner extends Component{
  constructor(){
    super()
    this.state = {
      mainImg  : one,
      active : false
    }
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(src){
    this.setState({mainImg : src,active : !this.state.active});
  }
  render(){
    return(
      <div className="Banner">
         <div className="banner-head">
            <div className="banner-content">
              <div className="container">

                <div className="row">


                   <div className="col-md-7 col-sm-1">
                     <img src={this.state.mainImg} alt="imagea" className="main-img img-fluid"/>
                   </div>


                   <div className="col-md-5 col-11">
                      <div className="row">
                          <div className={"col-md-6 img-class col-6"}>
                            <img src={one} alt="images" className={"banner-image img-fluid "+(this.state.mainImg === one ? "remove" : "active")} onClick={() => this.changeImage(one)}/>
                          </div>
                          <div className={"col-md-6 img-class col-6"}>
                              <img src={two} alt="imaged" className={"banner-image img-fluid " + (this.state.mainImg === two ? "remove" : "active")} onClick={() => this.changeImage(two)}/>
                          </div>
                      </div>
                      <div className="row">
                          <div className={"col-md-6 img-class col-6"}>
                              <img src={three} alt="imagef" className={"banner-image img-fluid " + (this.state.mainImg === three ? "remove" : "active")} onClick={() => this.changeImage(three)}/>
                          </div>
                          <div className={"col-md-6 img-class col-6"}>
                              <img src={four} alt="imageg" className={"banner-image img-fluid " + (this.state.mainImg === four ? "remove" : "active")} onClick={() => this.changeImage(four)}/>
                          </div>
                      </div>
                      <div className="row">
                          <div className={"col-md-6 img-class col-6"}>
                              <img src={five} alt="imageh" className={"banner-image img-fluid " + (this.state.mainImg === five ? "remove" : "active")} onClick={() => this.changeImage(five)}/>
                          </div>
                          <div className={"col-md-6 img-class col-6"}>
                              <img src={six} alt="imagej" className={"banner-image img-fluid " + (this.state.mainImg === six ? "remove" : "active")} onClick={() => this.changeImage(six)}/>
                          </div>
                      </div>
                   </div>

                </div>


                <div className="row banner-text">
                   <div className="col-md-3">
                      <h2>HELLO!</h2>
                   </div>
                   <div className="col-md-9">
                      <p><b>Interior Design</b> is one of <a href="/#">free website templates</a> created by TemplateMonster.com team. This website template is opti mized for 1024X768 screen resolution. It is also XHTML & CSS valid. It has several pages: <u>About</u>, <u>Services</u>, <u>Catalogue</u>, <u>Pricing</u>, <u>Contact</u> Us (note that contact us form – doesn’t work).</p>
                   </div>
                </div>

              </div>
            </div>


            <div className="banner-head-content container">
                <h2>Our Services List</h2>
                <div className="row banner-inner">
                    <div className="col-md-5">
                      <img src={seven} alt="image2" className="img-thumbnail img-fluid"/>
                        <ul>
                         <li>Interior <br />Decorating Services</li>
                         <li>Complete Color <br />Analysis</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                      <img src={eight} alt="image1" className="img-thumbnail img-fluid"/>
                        <ul>
                         <li>Design Services <br />for Home Construction</li>
                         <li>Interior Design <br />Remodeling</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="banner-content-second">
              <div className="row">
                  <div className="col-md-4">
                      <h2>About Us</h2>
                      <p>This <a href="/#">Interior Design Template</a> goes with two pack ages: with PSD source files and without them.
                        PSD source files are available for free for the registered members of Templates.com.
                         The basic package (without PSD source) is available for anyone without registration.</p>
                  </div>
                  <div className="col-md-4">
                      <h2>Testimonials</h2>
                      <i class="fa fa-quote-left"></i><p>At vero eos et accusamus et iusto odio tium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate.<br /><br />
                        <p><b>James Reese</b><br />Managing Director</p></p>
                  </div>
                  <div className="col-md-4">
                      <h2>What's New?</h2>
                      <h6><b>15.08.2011</b></h6>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                      <h6><b>11.08.2011</b></h6>
                      <p>Totam rem aperiam, eaque ipsa quae ab illo inven tore veritatis et quasi architecto.</p>
                  </div>
              </div>
            </div>

                <div className="footer">
                <br /><br />
                   <div className="row container mx-auto">
                      <div className="col-md-3">
                        <p>Interior Design © 2011 Privacy Policy
                        Website Template by <a href="/#">www.templatemonster.com</a></p>
                      </div>
                      <div className="col-md-3 offset-md-1">
                          <h3><span><sub>+1(800)</sub></span> 123-1234</h3>
                      </div>
                      <div className="col-md-3 offset-md-2">
                          <img src={socialIcon} alt="image4" className="img-fluid"/>
                      </div>
                   </div>
                </div>

         </div>
      </div>
    )
  }
}

export default Banner;
