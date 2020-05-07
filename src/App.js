import React, { useState } from 'react';

function App() { 
  const [text, onChangeText] = useState('learn react');
  const [completed, onChangeCheckbox] = useState(false);

  return (
    <>
      <input 
        type="text"
        value={text}
        onChange={event => onChangeText(event.target.value)}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        disabled={completed === true}
      />
      <input
        type="checkbox"
        value={completed}
        onChange={() => onChangeCheckbox(!completed)}
        disabled={text === ''}
        /> 
    </>
  );
}
      
export default App




