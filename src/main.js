import { render } from "solid-js/web";
import App from "./App.solid";
import "./styles/main.css";

document.addEventListener("DOMContentLoaded", () => {
  render(() => App, document.getElementById("app"));
});