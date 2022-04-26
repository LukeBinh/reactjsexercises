import React, { useState } from 'react'

const Ex5 = () => {
    const [count, setCount] = useState(0);

  return (
    <div style={{textAlign: 'center'}} className='ex5 container'>
        <h1>Button has been clicked: {count} times</h1>
        <button style={{marginTop: '20px' , padding: '15px'}} onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Ex5