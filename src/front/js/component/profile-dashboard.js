import React from "react";
import "../../styles/profile-dashboard.css";

export const ProfileDashboard = () => {
    return (
<div class="container">
        <div class="box">
            <p class="h-dash">Tu tablón</p>
            <p class="fst-italic textmuted">Área privada</p>
            <div class="row mx-0 mt-2">
                <div class="col-md-4 p-0 border-end">
                    <div class="viewbox">
                        <p class="blue">11</p>
                        <p>Preguntas que has hecho</p>
                    </div>

                </div>
                <div class="col-md-4 p-0 border-end">
                    <div class="viewbox">
                        <p class="blue">0</p>
                        <p>Article views</p>
                    </div>
                </div>
                <div class="col-md-4 p-0">
                    <div class="viewbox">
                        <p class="blue">1</p>
                        <p>Search apperance</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="box2 mt-3">
                    <div class="d-flex mt-2 ">
                        <span class="fas fa-users-cog mt-1"></span>
                        <div class="w-100 border-bottom">
                            <p class="">Mi perfil</p>
                            <p class="textmuted mb-2">Acceso a tus datos y contraseña</p>
                        </div>
                    </div>
                    <div class="d-flex mt-2">
                        <span class="fas fa-bookmark ms-0 mt-1"></span>
                        <div class="w-100 ps-2">
                            <p class="">Mis interacciones</p>
                            <p class="textmuted mb-2">Registro de preguntas y a quien se las hiciste </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    );

};