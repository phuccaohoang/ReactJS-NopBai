import { useDispatch, useSelector } from "react-redux";
import { DelTask } from "../reducers/task/taskSlice";


export default function Tasks(){
    let Tasks = useSelector((state) => state.task.list);
    console.log('list', Tasks);

    let dispatch = useDispatch();

    let Del = (name) => {
        dispatch(DelTask(name));
    }

    return (
        <>
        <div className="list-tasks">
            <h3 className="mb-5">List of tasks:</h3>
            {Tasks.map((task) => {
                return (
                    <div className="task">
                        <p>{task}</p>
                        <button onClick={() => Del(task)}>X</button>
                    </div>
                );

            })}
        </div>
        </>
    );
}