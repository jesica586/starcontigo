'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSection from './components/CardSection';
import CarouselComponent from './components/Carousel'
import TitleSection from './components/TitleSection'


export default function Home() {

  return (
    <>
      <CarouselComponent />
      <TitleSection />
      <CardSection categoria={"all"}/>
    </>
  )
}
