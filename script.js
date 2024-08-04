let addBookBtn = document.querySelector(".add-book-btn");
let dialog = document.querySelector("#dialog");
let closeDialog = document.querySelector(".close-dialog");
let container = document.querySelector(".container");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.querySelector("#read");
let mainSection = document.querySelector(".main-section");
let bookStatus = document.querySelector(".book-status");
// Event to open dialog box
addBookBtn.addEventListener("click", () => {
	dialog.style.display = "block";
});

let bookLibrary = [];

// Submit form data
document
	.getElementById("infoForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission
		let formData = new FormData(this);
		let formData1 = { title, author, pages, read };
		formData1.title = formData.get("title");
		formData1.author = formData.get("author");
		formData1.pages = formData.get("pages");
		formData1.read = formData.get("read");

		bookLibrary.push(formData1);

		mainSection.innerHTML = "";
		createBookCard(bookLibrary);
		title.value = "";
		author.value = "";
		pages.value = "";
		read.checked = false;
	});
// Event to close dialog box
closeDialog.addEventListener("click", () => {
	dialog.style.display = "none";
});
let createBookCard = (libraryArray) => {
	for (let i = 0; i < libraryArray.length; i++) {
		let title = libraryArray[i].title;
		let author = libraryArray[i].author;
		let pages = libraryArray[i].pages;
		let read = libraryArray[i].read;
		let bookCard = document.createElement("div");
		bookCard.classList.add("book-card");
		mainSection.appendChild(bookCard);

		let bookName = document.createElement("p");
		bookName.classList.add("book-name");
		bookName.textContent = title;
		bookCard.appendChild(bookName);

		let bookAuthor = document.createElement("p");
		bookAuthor.classList.add("book-author");
		bookAuthor.textContent = author;
		bookCard.appendChild(bookAuthor);

		let bookPages = document.createElement("p");
		bookPages.classList.add("book-pages");
		bookPages.textContent = `${pages} pages`;
		bookCard.appendChild(bookPages);

		let bookStatus = document.createElement("button");
		bookStatus.classList.add("book-status");
		bookStatus.textContent = "Read";
		if (read == "on") {
			bookStatus.style.backgroundColor = "#9fff9d";
			bookStatus.textContent = "Read";
		} else {
			bookStatus.style.backgroundColor = "#ff9d9c";
			bookStatus.textContent = "Not read";
		}
		bookStatus.addEventListener("click", () => {
			if (bookStatus.textContent == "Read") {
				bookStatus.style.backgroundColor = "#ff9d9c";
				bookStatus.textContent = "Not read";
			} else {
				bookStatus.style.backgroundColor = "#9fff9d";
				bookStatus.textContent = "Read";
			}
		});
		bookCard.appendChild(bookStatus);

		let bookRemove = document.createElement("button");
		bookRemove.classList.add("book-remove");
		bookRemove.textContent = "Remove";

		bookRemove.addEventListener("click", () => {
			bookLibrary.splice(i, 1);
			mainSection.innerHTML = "";
			createBookCard(bookLibrary);
		});

		bookCard.appendChild(bookRemove);
	}
};
