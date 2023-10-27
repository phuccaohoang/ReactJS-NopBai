import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../reducers/task/taskSlice";


export default function FormInputTask(){
    let dispatch = useDispatch();
    let TaskName = useRef();

    let Add = () => {
        if(TaskName.current.value.trim()){

            dispatch(AddTask(TaskName.current.value));
        }else{
            alert('Task name can\'t empty');
        }
    }
    return (
        <>
        <div className="form-add-task">
          <label>Task name:</label>
          <input type="text" placeholder="Input name of task" ref={TaskName}/>
          <button onClick={() => Add()}>Add</button>
        </div>
        </>
    );
}