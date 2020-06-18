import React from "react";
import certificates from '../../data/certificates.json'
import modal from '../../scripts/modal'

class Certificates extends React.Component {
    constructor(props) {
        super(props);

        this.certs = certificates.reverse();

        this.state = {
            styles: {},
            slides: null,
            classNames: {
                carousell: ['carousell-wrapper', 'transition'],
            },
            arrows: {
                arrRight: ['arrow', 'arr-right'],
                arrLeft: ['arrow', 'arr-left'],
            },
            intervalState: null,
            position: 0,
        }

        this.plusSlide = this.plusSlide.bind(this);
        this.minusSlide = this.minusSlide.bind(this);
        this.calcSlidesOnResize = this.calcSlidesOnResize.bind(this);
        this.stopSliderAutoplay = this.stopSliderAutoplay.bind(this);
        this.startSliderAutoplay = this.startSliderAutoplay.bind(this);
        this.popup = this.popup.bind(this);
    }

    async componentDidMount() {
        this.slider = {
            transition: false,
            defaultSlidesToShow: 5,
            slidesToShow: 0,
            interval: 1600,
            visibleArea: {
                width: 0,
                indent: 40
            },
            hiddenArea: {
                width: 0
            },
            slide: {
                width: 0,
                indent: 10
            },
            arr:{
                visible: true
            }
        };

        //show Slides
        this.calcSlidesOnResize();

        // lunch slider autoplay
        this.startSliderAutoplay();

        // calc slider actual slider width
        this.slider.visibleArea.width = document.querySelector('#stats .row .col-twelve').clientWidth;
        this.slider.visibleArea.width -= this.slider.visibleArea.indent;

        // calc slide width
        this.slider.slide.width = this.slider.visibleArea.width / this.slider.slidesToShow + (this.slider.slide.indent / this.slider.slidesToShow);


        // hidden area width
        this.slider.hiddenArea.width = this.slider.slide.width * this.certs.length;



        // add transition to slider
        this.slider.transition = true;

        await this.setState({
            styles: {
                carousell: {
                    width: this.slider.hiddenArea.width + 'px',
                    transform: `translate(${this.state.position}px)`,
                },
                slide: {
                    width: this.slider.slide.width + 'px',
                    paddingRight: this.slider.slide.indent + 'px'
                }
            }
        })

        this.init()
    }
    init() {
        const slides = this.certs.map((item, index) => {
            return (
                <div
                    className="slide"
                    style={this.state.styles.slide}
                    key={index}
                    onClick={this.popup}
                >
                    <img className="image-pop" src={item.url} alt="Slide" />
                </div>
            );
        })

        this.setState({
            slides
        })
    }

    async plusSlide() {
            this.calcSlidesOnResize ();
            let oldPosition = this.state.position;
            let pos = this.state.position -this.slider.slide.width;
            pos = Math.max(pos, -this.slider.slide.width * (this.certs.length - this.slider.slidesToShow));
            if(pos === oldPosition) {
                await this.setState({
                    position: 0
                })
            }
            else {
                await this.setState({
                    position: pos
                })
            }

            await this.setState({
                styles: {
                    carousell: {
                        width: this.slider.hiddenArea.width + 'px',
                        transform: `translate(${this.state.position}px)`,
                    },
                    slide: {
                        width: this.slider.slide.width + 'px',
                        paddingRight: this.slider.slide.indent + 'px'
                    }
                },
            })


    };
    async minusSlide () {
        this.calcSlidesOnResize ();
        let oldPosition = this.state.position;
        let pos = this.state.position + this.slider.slide.width;
        pos = Math.min(pos, 0);

        if(oldPosition === 0) {
            await this.setState({
                position: pos - this.slider.slide.width * (this.certs.length  - this.slider.slidesToShow)
            })
        } else {
            await this.setState({
                position: pos
            })
        }

        await this.setState({
            styles: {
                carousell: {
                    width: this.slider.hiddenArea.width + 'px',
                    transform: `translate(${this.state.position}px)`,
                },
                slide: {
                    width: this.slider.slide.width + 'px',
                    paddingRight: this.slider.slide.indent + 'px'
                }
            },
        })

    };
    calcSlidesOnResize () {
        if(document.body.clientWidth >= 992) {
            this.slider.slidesToShow = this.slider.defaultSlidesToShow;
        } else if(document.body.clientWidth >= 767) {
            this.slider.slidesToShow = 3;
        } else {
            this.slider.slidesToShow = 1;
        }
    };

    async stopSliderAutoplay (event) {
        if(event) await this.showHideArrows(true)

        this.setState({
            intervalState: clearInterval(this.state.intervalState)
        })

    };
    async startSliderAutoplay (event) {
        if(event) await this.showHideArrows(false)

        this.setState({
            intervalState: setInterval(this.plusSlide, this.slider.interval),
        })
    };
    async showHideArrows(trig = false) {
        let arrLeft = this.state.arrows.arrLeft;
        let arrRight = this.state.arrows.arrRight;

        if(trig) {
            arrLeft.push('visible');
            arrRight.push('visible');
        } else {
            arrLeft.splice(arrLeft.indexOf('visible'), 1);
            arrRight.splice(arrRight.indexOf('visible'), 1);
        }

        await this.setState({
            arrows: {
                arrLeft,
                arrRight,
            }
        })
    }

    popup(event) {
        if(event.currentTarget && event.currentTarget.querySelector('.image-pop')) {
            const img = event.currentTarget.querySelector('.image-pop');
            modal.open(img.src, 'imagesPop');
        }
    };



    render() {
        return (
            <section id="stats" className="count-up">
                <div onMouseOver={this.stopSliderAutoplay} onMouseOut={this.startSliderAutoplay}>

                     <div className="row">
                        <div className="col-twelve">
                            <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
                                <div
                                    className={this.state.classNames.carousell.join(' ')}
                                    style={this.state.styles.carousell}
                                >
                                    {this.state.slides}
                                 </div>
                            </div>
                        </div>
                        <div
                            onClick={this.minusSlide}
                            className={this.state.arrows.arrLeft.join(' ')}
                        >
                            <i className="fa fa-chevron-left" />
                        </div>
                        <div
                            onClick={this.plusSlide}
                            className={this.state.arrows.arrRight.join(' ')}
                        >
                            <i className="fa fa-chevron-right" />
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Certificates