import React, { useState } from "react";
import "./App.css";
import TranslationInput from "./components/TranslationInput";
import TranslationList from "./components/TranslationList";

function App() {
  const [translation, setTranslation] = useState({
    text: "",
    translationList: [],
  });

  return (
    <div className="App">
      <TranslationInput />
      <TranslationList />
    </div>
  );
}

export default App;
