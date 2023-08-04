import React from 'react';
import CardSection from '../components/CardSection';

const Page = () => {
    return (
        <>
             <div class="banner">
                <img class="banner__imagen" src="/images/polaroids.jpg" alt="fotografias" />
                <h2 class="banner__titulo">FOTOGRAFIAS</h2>
            </div>
            <CardSection categoria={"fotografias"} />
        </>
    );
}

export default Page;
