import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../lib/types'
import { testActionGetData, testActionAddData, deleteWorkoutTest } from "../redux/actions"

export default function Temp() {
    const dispatch = useDispatch()
    const {test} = useSelector((state: RootState) => state)

    
    useEffect(() => {
        testActionGetData(dispatch)
    }, [])
    return <div>
        <button 
            onClick={() => testActionAddData(dispatch, {
                id: "123",
                name: "new test item"
            })}
        >
            test add
        </button>

        <div>
            {test.map((t: any, id: any) => (
                <div key={id}>
                    <span>{t.name}</span>
                    <button onClick={() => deleteWorkoutTest(dispatch, t.id)}>delete</button>
                </div>
            ))}
        </div>

        <div>
            <button>get data</button>
        </div>
    </div>
}