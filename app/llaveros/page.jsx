import React from 'react';
import CardSection from '../components/CardSection';

const Page = () => {
    return (
        <>
             <div class="banner">
                <img class="banner__imagen" src="/images/llaveros.jpg" alt="llaveros" />
                <h2 class="banner__titulo">LLAVEROS</h2>
            </div>
            <CardSection categoria={"llaveros"} />
        </>
    );
}

export default Page;
