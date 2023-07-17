
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";



const App = () => {

  let [show, setShow] = useState(false)

  return (
    <div>
        {/* Do not remove the main div */}

        <button onClick={() => setShow(true)}>Show Modal</button>
        {
          show &&
          <Modal onClose={setShow} />
        }

    </div>
  )
}

export default App
