import React, { useState } from 'react'
import { applyPureReactInVue } from 'veaury'

export function HooksComponent() {
    const [count, setCount] = useState(1)
    return (
        <div>
            <h1>applyPureReactInVue: inner</h1>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}

export const HooksComponentVue = applyPureReactInVue(HooksComponent) 