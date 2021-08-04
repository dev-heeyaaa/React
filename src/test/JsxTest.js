import React from 'react';

let num = 10;
let user = {
    id: 1,
    username: "ssar",
    email:"ssar@nate.com"
};

// 배열 안에 오브젝트 세 개가 들어간 것
let users = [
    {
        id: 1,
        username: "ssar",
        email:"ssar@nate.com"
    },
    {
        id: 2,
        username: "cos",
        email:"cos@nate.com"
    },
    {
        id: 3,
        username: "love",
        email:"love@nate.com"
    }
];
function JsxTest() {
    return (
        <div>
            <h1>JSX 문법 예제 {num}</h1>
            <hr />
            <div>
                <div>3. 삼항 연산자 - IF를 사용할 수 없다. </div>
                {num === 10 ? "ok" : "fail"}
            </div>
            <hr />
            <div>
                번호 : {user.id} <br />
                유저네임 : {user.username} <br />
                이메일 : {user.email} <br />
            </div>
            <hr />
            <div>
                {/* {users[0].username} */}
                {/* 반복문은 return이 가능한 map을 사용*/}
                 {users.map((user) => <div>{user.username}</div>)}
            </div>
        </div>
    );
}

//2. export는 자바의 public과 같다
export default JsxTest;
// default가 아닌 것들은 중괄호 처리해서 public화 한다(공개한다.)
// num을 public화 시킨다 (외부에 공개하겠다는 뜻)
export {num};