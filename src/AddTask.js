import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import {addtask } from "./Action"

const AddTask = () => {
  const [modalIsOpen , setIsOpen] = useState(false);
  const [Description , setDescription] = useState("");
  const [isDone , setIsDone] = useState("");
  const Dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const add = () => {
    const newtask={
    Id: Math.random(),
     Description,
      isDone
  };
  Dispatch(addtask(newtask));
  closeModal();
}

  return (
    <div>
      <div >
        <div className="Add-btn-container">
          <div className="btn-play" onClick={openModal}>
            <span>
              {" "}
              <ion-icon className="icon" name="play"></ion-icon>{" "}
            </span>
           <p className="Ghaya"> +</p>
          </div>
          <Modal
            className="add-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <h1 className="addtask">Add Task</h1>
            <form>
              <label>Description</label>
              <input
                type="text"
                name="name"
                placeholder=""
                onChange={(event) =>setDescription(event.target.value)}
              />
            
            </form>
            <button className="Modal-btn" onClick={add}>
              Submit
            </button>
        
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
