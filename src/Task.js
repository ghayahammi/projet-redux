import React from 'react';
import Edit from './Edit';
import{useDispatch} from 'react-redux'
import { Delete, isDone,} from './Action';

const Task = ({el}) => {
  console.log(el.Id,"helooooos")
const dispatch=useDispatch()
  const Deletee=()=>{
dispatch(Delete(el.Id))}
const verif=()=>{

  dispatch(isDone(el.Id));
  }

  return (
   
         <div className='test'>
      <table className='styled-table'>
      <thead>
        <tr>
        <th>To Do</th>
       
            
         
        </tr>
        </thead>
        <tbody>

        
        <tr className='active-row'>
        {
   el.isDone ? <li style={{color:"red"}}>{el.Description} </li> :
        <li>{el.Description} </li> 
    }

           <button className="Modal-btn"  onClick={verif}>
              isDone
            </button>

        <button className="Modal-btn" onClick={Deletee}>
              Delete
            </button>
           
            
           <td><button><Edit el={el}/></button></td>
           
          
           

           </tr>





  
  </tbody>
  </table>



    </div>
  )
}

export default Task;
