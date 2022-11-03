import React from "react";
import "../../styles/login.css";


function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
 
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        // Desabilitamos el botón de login 
        document.getElementById("login").disabled = true;
 
        // Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}
export const Login = () => {
    return (

        <div>
<div id="msg"></div>

{/* <!-- Mensajes de Verificación --> */}
<div id="error" class="alert alert-danger ocultar" role="alert">
    Las Contraseñas no coinciden, vuelve a intentar !
</div>
<div id="ok" class="alert alert-success ocultar" role="alert">
    Las Contraseñas coinciden ! (Procesando formulario ... )
</div>
{/* <!-- Fin Mensajes de Verificación --> */}


            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3"><span>Entrar </span><span>Registro</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log" >
                                
                                </label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Entrar</h4>
                                                    <div class="form-group">
                                                        <input type="email" name="logemail" class="form-style" placeholder="Tu email" id="logemail" autocomplete="off"/>
                                                        <i class="input-icon fas fa-envelope"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" class="form-style" placeholder="Tu contraseña" id="logpass" autocomplete="off"/>
                                                        <i class="input-icon fas fa-key"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-4">Enviar</a>
                                                    <p class="mb-0 mt-4 text-center"><a href="#0" class="link">¿Olvidaste la contraseña?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Registro</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="logname" class="form-style" placeholder="Nombre de usuario" id="logname" autocomplete="off"/>
                                                            <i class="input-icon fas fa-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="logemail" class="form-style" placeholder="Tu email" id="logemail" autocomplete="off"/>
                                                        <i class="input-icon fas fa-envelope"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="pass1" class="form-style" placeholder="Tu contraseña" id="pass1" autocomplete="off"/>
                                                            <i class="input-icon fas fa-key"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="pass2" class="form-style" placeholder="Repite tu contraseña" id="pass2" autocomplete="off"/>
                                                            <i class="input-icon fas fa-key"></i>
                                                    </div>
                                                    <button href="#" type="submit" id="login" class="btn mt-4" onClick={()=> {verificarPasswords(); return false()}}>Enviar</button> 
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login