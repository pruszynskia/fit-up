import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../lib/types'
import { testActionGetData, testActionAddData } from "../redux/actions"

export default function Temp() {
    const dispatch = useDispatch()
    const {test} = useSelector((state: RootState) => state)

    
    useEffect(() => {
        testActionGetData(dispatch)
    }, [])
    return <div>
        <button onClick={() => testActionAddData(dispatch, {
            id: "123",
            name: "new test item"
        })}>test add</button>
        {JSON.stringify(test)}
    </div>
}