const form = document.getElementById("bookmark-form");
const siteNameInput = document.getElementById("site-name");
const siteUrlInput = document.getElementById("site-url");
const bookmarksList = document.getElementById("bookmarks-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = siteNameInput.value.trim();
  let url = siteUrlInput.value.trim();

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const bookmarkItem = document.createElement("div");
  bookmarkItem.className = "bookmark-item";

  const title = document.createElement("h3");
  title.innerText = name;

  const visitLink = document.createElement("a");
  visitLink.href = url;
  visitLink.target = "_blank";
  visitLink.className = "visit-link";
  visitLink.innerText = "Visit";

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerText = "Remove";

  removeBtn.addEventListener("click", function () {
    window.open(url, "_blank");
    bookmarkItem.remove();
  });

  bookmarkItem.appendChild(title);
  bookmarkItem.appendChild(visitLink);
  bookmarkItem.appendChild(removeBtn);

  bookmarksList.appendChild(bookmarkItem);

  siteNameInput.value = "";
  siteUrlInput.value = "";
});