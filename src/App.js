import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagrpah, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const paragraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      {console.log("App is running")}
      <h1>Hi there!</h1>
      <DemoOutput show={showParagrpah} />
      <Button onClick={allowToggleHandler}>Allow Paragraph</Button>
      <Button onClick={paragraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
