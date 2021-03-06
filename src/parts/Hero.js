import React from 'react';
import ImageHero from 'assets/images/img-hero.jpg';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon-cities.svg';
import IconTraveler from 'assets/images/icons/icon-traveler.svg';
import IconTreasure from 'assets/images/icons/icon-treasure.svg';
import Button from 'elements/Button';
import formatNumber from 'utls/formatNumber';
import Fade from 'react-reveal/Fade';

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <Fade bottom>
            <section className='container'>
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-wight-bold line-height-1 mb-3">
                            Lupakan Pekerjaanmu, <br />
                            Mari Berlibur
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                            Kami menyediakan apa yang anda butuhkan bersama keluarga selama liburan. Waktunya membuat moment paling berkesan.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me
                        </Button>

                        <div className="row" style={{ marginTop: 80 }}>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img src={IconTraveler}
                                    alt={`${props.data.travelers} Travelers`}
                                    width="36"
                                    height="36"
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Travelers
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img src={IconTreasure}
                                    alt={`${props.data.treasures} Treasures`}
                                    width="36"
                                    height="36"
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img src={IconCities}
                                    alt={`${props.data.cities} Cities`}
                                    width="36"
                                    height="36"
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5">
                        <div style={{ width: 520, height: 410 }}>
                            <img
                                src={ImageHero}
                                alt="Room with Couches"
                                className="img-fluid position-absolute"
                                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                            />
                            <img
                                src={ImageHero_}
                                alt="Room with Couches Frame"
                                className="img-fluid position-absolute"
                                style={{ margin: "0 -15px -15px 0" }}
                            />
                        </div>
                    </div>
                </div>
            </section >
        </Fade>
    )
}
