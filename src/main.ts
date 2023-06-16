import { deck } from "./game/app.js";

//HTML Elements
const dealCardButton = document.getElementById("btn-dealCard");

//Events handler

//Initialisation
dealCardButton?.addEventListener("click", () => deck.dealCard());