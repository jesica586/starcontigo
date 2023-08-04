import React from 'react';

const Page = () => {
    return (
        <div>
            <div class="banner">
                <img class="banner__imagen" src="/images/cuadros.jpg" alt="" />
                <h2 class="banner__titulo">CONTACTO</h2>
            </div>
            <div class="formulario">
                <form action="mailto:starcontigomza@gmail.com?subject=CONSULTA" method="post" enctype="text/plain">
                    <div class="formulario__grid">
                        <input type="text" name="nombre" id="nombre" class="formulario__datos" autocomplete="off" placeholder="Nombre" required />
                        <input type="text" name="apellido" id="apellido" class="formulario__datos" autocomplete="off" placeholder="Apellido"
                            require />
                        <input type="text" name="provincia" id="provincia" class="formulario__datos" autocomplete="off" placeholder="Provincia"
                            required />
                        <input type="text" name="localidad" id="localidad" class="formulario__datos" autocomplete="off" placeholder="Localidad"
                            required />
                        <input type="email" name="email" id="email" class="formulario__datos" autocomplete="off" placeholder="Email" required />
                        <input type="tel" name="celular" id="celular" class="formulario__datos" autocomplete="off" placeholder="Celular"
                            required />
                    </div>
                    <textarea name="mensaje" rows="4" cols="50" id="mensaje" class="formulario__mensaje" autocomplete="off" placeholder="Mensaje"
                        required></textarea>
                    <div class="formulario__boton">
                        <input id="boton" type="submit" value="ENVIAR" class="formulario__botonForm" />
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Page;
