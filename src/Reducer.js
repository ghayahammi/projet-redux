
import { ToDoList } from "./Data";
import {ADDTASK, DELETE, EDIT, ISDONE } from "./ActionType";
const initState = {
  task: ToDoList
};
export const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ADDTASK:
            return {
                ...state,
                task: [...state.task, action.payload]
              };
              case EDIT:
                return{ ...state,
                  task:state.task.map((el)=>(el.Id===action.payload.Id?action.payload:el )) }
                  case DELETE: 
                  return{ ...state,
                  task:state.task.filter((el)=>(el.Id !==action.payload ))}
                   case ISDONE: 
                   return{...state,
                    task:state.task.map((el)=>(el.Id===action.payload ? {...el,isDone:!el.isDone}: el)) 
                      }
            default:
              return state;
             };
         
            }
