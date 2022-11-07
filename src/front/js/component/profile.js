import React from "react";
import "../../styles/profile.css";

export const Profile = () => {
  return (
    <div class="container rounded bg-white mt-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
            />
            <span class="font-weight-bold">John Doe</span>
            <span class="text-black-50">john_doe12@bbb.com</span>
            <span>United States</span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex flex-row align-items-center back">

              </div>
              
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="address" />
              </div>
            </div>
            <div class="mt-5 text-right">
              <button class="btn btn-primary profile-button" type="button">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
