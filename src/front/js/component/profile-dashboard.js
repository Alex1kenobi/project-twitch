import React from "react";
import "../../styles/profile-dashboard.css";
import "../../styles/profile.css"
import { Dashboard } from "./dashboard";
import { Profile } from "./profile";


export const ProfileDashboard = () => {
  return (
    <section>
      <div class="container">
        <div class="box">
          <p class="h-dash">Tu perfil</p>
          <p class="fst-italic textmuted">Área privada</p>
          <div class="row mx-0 mt-2">
            <div class="col-md-4 p-0 border-end">
              <div class="viewbox">
                <p class="blue">18</p>
                <p>Preguntas que has hecho</p>
              </div>
            </div>
            <div class="col-md-4 p-0 border-end">
              <div class="viewbox">
                <p class="blue">8</p>
                <p>Preguntas aprobadas</p>
              </div>
            </div>
            <div class="col-md-4 p-0">
              <div class="viewbox">
                <p class="blue">1</p>
                <p>Entrevistas en las que has participado</p>
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
                  <div class="container">
                   
<Profile/>

{/* 

                  <div class="row mt-2">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="Nombre de usuario" /></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" /></div>

                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="address"/></div>
                  </div>

                    <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
 */}






                  </div>
                </div>
              </div>
              <div class="d-flex mt-2">
                <span class="fas fa-bookmark ms-0 mt-1"></span>
                <div class="w-100 ps-2">
                  <p class="">Mis interacciones</p>
                  <p class="textmuted mb-2">
                    Registro de preguntas y a quien se las hiciste
                  </p>
                </div>
              </div>
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
