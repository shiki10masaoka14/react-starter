import React from "react";

function Hello({ firstName, lastName }) {
  return (
    <p>
      Hello {firstName} {lastName}
    </p>
  );
}

function App() {
  const data = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <>
      <Hello {...data} />
    </>
  );
}

export default App;
