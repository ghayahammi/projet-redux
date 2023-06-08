import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Delete } from "./Action";
import { edit } from "./Action";


const Edit = ({el}) => {
  const [modalIsOpen , setIsOpen] = useState(false);
  const [Description , setDescription] = useState(el.Description);
  const [isDone , setIsDone] = useState(el.isDone);
  const Dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
 const add=() =>{
    const newtask={
        Description,
    };
Dispatch(edit({...el,Description:Description}));
closeModal();
};

console.log(add,"zz")
  return (
    <div>
      <div >
        <div className="Add-btn-container">
          <div className="btn-play" onClick={openModal}>
            <span>
              {" "}
              <ion-icon className="icon" name="play"></ion-icon>{" "}
            </span>
           <p className="Ghaya"> edit</p>
          </div>
          <Modal
            className="add-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <h1 className="addtask">Edit</h1>
            <form>
              <label>Description</label>
              <input
                type="text"
                name="name"
             value={Description}
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

export default Edit;