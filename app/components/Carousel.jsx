'use client'
import { Carousel } from 'react-bootstrap';
import styles from "../styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/banner.jpg" alt="" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/banner2movil.png" alt="" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/banner1movil.png" alt=""/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default CarouselComponent;
