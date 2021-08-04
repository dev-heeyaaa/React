import { useState } from "react";



function App() {
  console.log("App() 실행");
  // 1. 상태관리
  const [num, setNum] = useState(1);
// num에 최초에 1이 바인딩

  function add(){
    let data = num + 1;
    setNum(data);
  }

  function subtract(){
    let data = num -1;
    setNum(data);
  }

  return  <div>
    <h1>숫자 : {num}</h1>
    <button onClick={() => add()}>증가</button>
    <button onClick={() => subtract()}>감소</button>
  </div>
}

export default App;
