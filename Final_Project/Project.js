let isModalOpen = false;
let contrastToggle = false;


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_rdszl2r",
      "template_vuu8h1o",
      event.target,
      "ArHi7FzHDlkSwS02b"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email servise is temporarily unavailable. Please contact me directly: shabil.dixon@gmail.com"
      );
    });
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}


function handleHomeSearch(event) {
  event.preventDefault(); // Stop the form from reloading the page
  
  const searchInput = document.getElementById("home-search-input");
  const searchTerm = searchInput.value;

  if (searchTerm) {
    // 1. Save the search term so the next page can read it
    localStorage.setItem("searchTerm", searchTerm);
    
    // 2. Redirect the user to the movie search results page
    window.location.href = "./Find_Your_Movie.html";
  }
}

// Add an event listener to run this code after the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Find the form we created in Project.html
  const homeSearchForm = document.getElementById("home-search-form");
  
  // Attach our new function to the form's "submit" event
  if (homeSearchForm) {
    homeSearchForm.addEventListener("submit", handleHomeSearch);
  }
});