import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import useTodos from "./hooks/useTodos";
import Form from "../components/Modal/Form";
import BackArrow from "../components/Icons/IconBack";
import IconClose from "../components/Icons/IconClose";
export default function Tasks() {
  const [modal, setModal] = useState(false);
  const todos = useAppSelector((state) => state.todos.items);
  const { addItems } = useTodos();
  function handleSubmit(formData: any) {
    addItems({ description: formData.description });
    setModal(false);
  }
  const addTasks = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="container">
        <div className="container-list">
          <div className="title">
            <Link to={"/"}>
              <BackArrow />
            </Link>
            <p>Tasks</p>
          </div>
          <div className="contend-task ">
            <button className="btn fade-in-left" onClick={addTasks}>
              New Task
            </button>
            <div className="contend-task__list ">
              (
              <>
                {todos.length === 0 ? (
                  <> </>
                ) : (
                  <>
                    {todos.map((item, index) => {
                      return (
                        <div className="card-task  fade-in-left" key={index}>
                          <div className="card-title">
                            <p>{item.description} </p>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
              )
            </div>
          </div>
          {modal && (
            <>
              <div className="modal">
                <div className="modal-contend">
                  <div onClick={closeModal} className="modal-header">
                    <IconClose />
                  </div>
                  <Form onSubmit={handleSubmit} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
