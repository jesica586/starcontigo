import React from 'react';
import Link from 'next/link';

const TitleSection = () => {
    return (
        <div class="categorias">
            <div class="categorias__llaveros">

                <Link href="/llaveros">
                    <div class="contenedor llaveros">
                        <h2 class="contenedor__titulo">LLAVEROS</h2>
                    </div>
                </Link>

            </div>
            <div class="categorias__polaroids">
                <Link href="/fotografias">
                    <div class="contenedor polaroids">
                        <h2 class="contenedor__titulo">POLAROIDS</h2>
                    </div>
                </Link>
            </div>
            <div class="categorias__cuadros">
                <Link href="/cuadros">
                    <div class="contenedor cuadros">
                        <h2 class="contenedor__titulo">CUADROS</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TitleSection;
