welcome_els = document.getElementsByClassName("title");
welcome_el = welcome_els[0];
welcome_el.addEventListener("click",turnGold);
function turnGold(event) {
	welcome_el.style.background = "gold";
}