import { ADDTASK, DELETE, ISDONE} from "./ActionType"
import {EDIT} from "./ActionType"
export const addtask = (data) => {
  return {
    type: ADDTASK,
    payload: data
  };
};
 export const edit = (data)=> {
  return{
    type:EDIT,
    payload: data
  };
 };
 export const Delete = (data)=> {
  return{
    type:DELETE,
    payload: data
  };
};
export const isDone = (data)=> {
  return{
    type:ISDONE,
    payload: data
  };
};

 
 