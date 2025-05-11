import React from "react";
import ReactDOM from "react-dom/client";
import QuantumNanoLab from "./components/QuantumNanoLab";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuantumNanoLab />
  </React.StrictMode>
);

// src/components/QuantumNanoLab.jsx
/* <== The full component code you pasted earlier, updated to use /photos/*.jpg paths ==> */

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
