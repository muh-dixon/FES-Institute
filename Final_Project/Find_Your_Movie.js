let isModalOpen = false;
let contrastToggle = false;
let movies = [];
let visibleCount = 6;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
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
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function handleSearch(event) {
  if (event) {
    event.preventDefault();
  }

  const searchInput = document.getElementById("search-input");
  const searchTerm = searchInput ? searchInput.value : "";

  renderMovies(searchTerm);
}

async function renderMovies(searchTerm) {
  const movieListEl = document.querySelector(".movie-list");

  // Check if a search term was passed from the homepage
  const homepageSearchTerm = localStorage.getItem("searchTerm");
  let effectiveSearchTerm = searchTerm; // The term from this page's search bar

  // If a term from the homepage exists...
  if (homepageSearchTerm) {
    effectiveSearchTerm = homepageSearchTerm; // ...use it as the search term.

    // Also, put that term into this page's search bar
    const searchInputOnThisPage = document.getElementById("search-input");
    if (searchInputOnThisPage) {
      searchInputOnThisPage.value = homepageSearchTerm;
    }

    // Clear the term from storage so it doesn't run again on a simple refresh
    localStorage.removeItem("searchTerm");
  }
  const defaultSearch = "frog";
  const query = effectiveSearchTerm || defaultSearch;

  movieListEl.innerHTML = `<div class="loading-state">Loading Movies...<i class="fas fa-spinner fa-spin"></i> </div>`;

  try {
    const search = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=7742cfd4&s=${query}`
    );

    const searchData = await search.json();

    if (searchData.Response === "True" && searchData.Search) {
      movies = searchData.Search.slice(0, 6); // Store the data globally for sorting
      displayMovies(); // Display the fetched results
    } else {
      movieListEl.innerHTML = `<div class="no-results">No movies found for "${query}"</div>`;
      movies = [];
    }
  } catch (error) {
    movieListEl.innerHTML = `<div class="error-state">An error occurred while fetching movies.</div>`;
    movies = [];
  }
}

function displayMovies() {
  const movieListEl = document.querySelector(".movie-list");
  movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
}

function movieHTML(movie) {
  return `
        <div class="user-card">
            <div class="user-card__container">
                <img src="${movie.Poster}" alt="${movie.Title} Poster" />
                <p><b>Title:</b> ${movie.Title}</p>
                <p><b>Year:</b> ${movie.Year}</p>
                <p><b>imdbID:</b>${movie.imdbID}</p>
            </div>
        </div>`;
}

function filterMovies(event) {
  const filter = event.target.value;

  if (filter === "TITLE") {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filter === "YEAR") {
    // Sort numerically by Year (descending, latest first)
    movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  } else if (filter === "IMDBID") {
    movies.sort((a, b) => a.imdbID.localeCompare(b.imdbID));
  }

  displayMovies(); // Re-render the list after sorting
}

renderMovies();
