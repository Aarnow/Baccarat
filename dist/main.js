import { deck } from "./game/app.js";
//HTML Elements
const dealCardButton = document.getElementById("btn-dealCard");
//Events handler
//Initialisation
dealCardButton === null || dealCardButton === void 0 ? void 0 : dealCardButton.addEventListener("click", () => deck.dealCard());
