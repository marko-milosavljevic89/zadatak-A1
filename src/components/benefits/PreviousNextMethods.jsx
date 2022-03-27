import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="previous-next-container">
        <div className="button-bar" style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
          <GrPrevious className="previous"/>
          </button>
          <button className="button" onClick={this.next}>
            <GrNext className="next"/>
          </button>
        </div>
        <Slider className="slides-container" ref={c => (this.slider = c)} {...settings}>
          <div className="slides-content-container slides-content-container-red" key={1}>
            <h3>1/3</h3>

                <h2>Uz svaku NEO tarifu možeš da ćaskaš i kuckaš NEOgraničeno</h2>
       
          </div>
          <div className="slides-content-container slides-content-container-blue" key={2}>
            <h3>2/3</h3>
            <div>
                <h2>Ne možeš da prekoračiš svoje gigabajte</h2>
                <p>NEO ima zaštitu od prekoračenja interneta u nacionalnom saobraćaju.</p>
            </div>
          </div>
          <div className="slides-content-container slides-content-container-black" key={3}>
            <h3>3/3</h3>
            <div>
                <h2>Aktiviraj preko moj A1</h2>
                <p>Prepusti se neograničenom netu za Deezer i Hopster koje aktiviraš besplatno preko Moj A1 aplikacije uze NEO15 postpaid paket.</p>
            </div>
          </div>
        </Slider>
        
      </div>
    );
  }
}