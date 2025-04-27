import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/index.css";

// Get model parameters from URL
const getModelFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const modelParam = params.get('model');
  
  if (!modelParam) {
    window.location.href = 'landing.html';
    return null;
  }
  
  try {
    return JSON.parse(decodeURIComponent(modelParam));
  } catch (e) {
    console.error('Invalid model parameters');
    window.location.href = 'landing.html';
    return null;
  }
};

const modelConfig = getModelFromURL();

if (modelConfig) {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App 
        labels={modelConfig.labels}
        modelFolder={modelConfig.modelFolder}
        modelName={modelConfig.modelName}
        title={modelConfig.title}
      />
    </React.StrictMode>
  );
}
