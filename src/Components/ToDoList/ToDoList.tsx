import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";


type ListElement = {
    name:string,
    desc:string
}

const ToDoList = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const [list, setList] = useState<ListElement[]>([])

    const AddElement = () => {
        const newList = [...list, {
            name: name,
            desc: desc
        }]
       
        setList(newList)

        setName('')
        setDesc('')
    }

    const DeleteElement = (index:number) => {
        const filter = list
            .filter((el, i) => i !== index)

        setList(filter);
    }

    return (
        <div>
            <input
                type="text"
                placeholder={"name"}
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                type="text"
                placeholder={"description"}
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
            />

            <div>
                <button onClick={()=>AddElement()}>
                    Добавить в список
                </button>
            </div>
{/*
            //[{name, desc}, {name1, desc1}] =><div>
                <div>name</div>
                <div>desc</div>
            </div>

            <div>
                <div>name1</div>
                <div>desc1</div>
            </div>*/}

            <div>
                {list.map((el, i) => <ToDoListElement
                    name={el.name}
                    desc={el.desc}
                    onDeleteClick={() => DeleteElement(i)}
                />)}
            </div>

        </div>
    );
};

export default ToDoList;