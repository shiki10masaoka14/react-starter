import React from "react";

// function hello(isReact) {
//   if (isReact) {
//     return <p>Hello React</p>;
//   } else {
//     return <p>Hello Vue.js</p>;
//   }
// }

function App() {
  const isReact = true;
  return (
    <div>
      {(() => {
        if (isReact) {
          return <p>Hello react</p>;
        } else {
          return <p>Hello vue.js</p>;
        }
      })()}
    </div>
  );
}

export default App;
