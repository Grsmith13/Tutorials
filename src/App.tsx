import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  //hook
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;