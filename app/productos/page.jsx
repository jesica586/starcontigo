import React from 'react';
import CardSection from '../components/CardSection';

const Page = () => {
    return (
        <>
            <div class="banner">
                <img class="banner__imagen" src="/images/cuadros.jpg" alt="mapa estelar" />
                    <h2 class="banner__titulo">TODOS LOS PRODUCTOS</h2>
            </div>
            <CardSection categoria={"all"} />
        </>
    );
}

export default Page;
