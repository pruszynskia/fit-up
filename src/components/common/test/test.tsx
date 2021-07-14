import React from 'react'

interface TestComponentProps {
    data: string;
    data2?: {
        a: string;
        b: number
    }
}

export default function TestComponent({data, data2}: TestComponentProps) {
    return <div>
       data:  {data} <br />
       data2: {JSON.stringify(data2)}
    </div>
}