import React, {useState} from "react";

function Counter() {
const [c,setC] = useState(0);
return <section className="panel">
<h2>Counter</h2><p className="muted">Increase, decrease or reset the count.</p>
<div className="metric">{c}</div>
<div className="actions">
<button onClick={()=>setC(c+1)}>Increment</button>
<button onClick={()=>setC(c-1)}>Decrement</button>
<button className="secondary" onClick={()=>setC(0)}>Reset</button>
</div>
</section>;
}
function Calculator() {
const [a,setA] = useState(0);
const [b,setB] = useState(0);
const [r,setR] = useState(0);
return <section className="panel">
<h2>Calculator</h2>
<label>First number<input type="number" value={a} onChange={e=>setA(Number(e.target.value))}/></label>
<label>Second number<input type="number" value={b} onChange={e=>setB(Number(e.target.value))}/></label>
<div className="actions">
<button onClick={()=>setR(a+b)}>+</button>
<button onClick={()=>setR(a-b)}>−</button>
<button onClick={()=>setR(a*b)}>×</button>
<button onClick={()=>setR(b===0?"Error":a/b)}>÷</button>
</div>
<p className="notice">Result: <strong>{r}</strong></p>
</section>;
}
function App() {
return <div>
<header><h1>Counter & Calculator</h1><p>React state demonstration</p></header>
<div className="grid"><Counter/><Calculator/></div>
</div>;
}
export default App;