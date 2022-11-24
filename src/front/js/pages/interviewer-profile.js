import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InterviewerProfile = () => {
  const { store, actions } = useContext(Context);
  const [question, setQuestion ] = useState ({interviewer_id: store.entrevistado.id})

  let { name } = useParams();

  useEffect(() => {
    actions.getEntrevistado(name);
  }, []);

  return (
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) =>{
setQuestion ({...question, text: e.target.value})
          }}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) =>{
            setQuestion ({...question, category_id: e.target.value})
                      }}
        >
        <option selected>Selecciona una opción</option>
          {store.categories.map((category) => {
            return (
              <>
                <option value={category.id}>{category.name}</option>
              </>
            );
          })}
        </select>
        <label for="floatingSelect">Works with selects</label>
      </div>

      <button type="submit" class="btn btn-primary" 
      onClick={ ()=>{
actions.preguntas(question)

      }
      }>
        Submit
      </button>

      {store.entrevistado.name}

      {store.entrevistado.description}
    </div>
  );
};
