import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const InterviewerProfile = () => {
  const { store, actions } = useContext(Context);
  const [question, setQuestion] = useState({
  });

  let { name } = useParams();

  useEffect(() => {
    actions.getEntrevistado(name);
    actions.getPreguntasEntrevistado(store.entrevistado.id)
  }, []);

  return (
    <div>

      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => {
            setQuestion({ ...question, interviewer_id:store.entrevistado.id, category_id: e.target.value });
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

      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{height: "100px"}}
          onChange={(e) => {
            setQuestion({ ...question, category_id: e.target.value });
          }}
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => {
          actions.preguntas(question);
        }}
      >
        Submit
      </button>

      <div>

      <div class="card" style={{width: "18rem"}}>

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

      </div>

      {store.entrevistado.name}

      {store.entrevistado.description}
    </div>
  );
};
