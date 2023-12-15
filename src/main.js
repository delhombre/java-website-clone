import "./global.css";

const searchForm = document.querySelector("#search_form");
const initialWidth = getComputedStyle(searchForm).width;

const menuButton = document.querySelector("#menu_button");
const navMenu = document.querySelector("nav");

const expandForm = (e) => {
	e.stopPropagation();
	const currentWidth = parseFloat(initialWidth);
	const newWidth = currentWidth * 2;
	searchForm.style.width = `${newWidth}px`;
};

const resetForm = (e) => {
	searchForm.style.width = initialWidth;
};

const toggleMenu = (e) => {
	if (navMenu.classList.contains("hidden")) {
		navMenu.classList.remove("hidden");
		navMenu.classList.add("flex");
		document.body.style.overflow = "hidden";
	} else {
		navMenu.classList.add("hidden");
		navMenu.classList.remove("flex");
		document.body.style.overflow = "scroll";
	}
	searchForm.classList.toggle("hidden");
};

menuButton.addEventListener("click", toggleMenu);

searchForm.addEventListener("click", expandForm);

document.addEventListener("click", resetForm);
