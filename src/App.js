import React from 'react';

function App() {
  const [ message, setMessage ] = React.useState()

  React.useState(() => {
    fetch('/api/message?name=Ethan')
      .then(res => res.json())
      .then(res => setMessage(res.text))
  })
  return (
    <div>
      <h1>{ message || 'Hello, World!'}</h1>
      <p>Static Web App Test Drive</p>
    </div>
  )
}

export default App;
