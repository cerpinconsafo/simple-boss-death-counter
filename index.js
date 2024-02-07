// Function to fetch data from API based on input
async function fetchData(input) {
  const response = await fetch(`API_URL?q=${input}`);
  const data = await response.json();
  return data;
}

// Function to populate dropdown with results
function populateDropdown(results) {
  const dropdown = document.getElementById("resultsDropdown");
  dropdown.innerHTML = ""; // Clear previous results
  results.forEach((result) => {
    const option = document.createElement("option");
    option.value = result.id;
    option.textContent = result.name;
    dropdown.appendChild(option);
  });
}

// Event listener for input field
document
  .getElementById("searchInput")
  .addEventListener("input", async function (event) {
    const input = event.target.value;
    if (input.trim() === "") {
      populateDropdown([]); // Clear dropdown if input is empty
      return;
    }
    const results = await fetchData(input);
    populateDropdown(results);
  });

// Event listener for dropdown selection
document
  .getElementById("resultsDropdown")
  .addEventListener("change", function (event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedId = selectedOption.value;
    const selectedBoss = selectedOption.textContent;
    console.log("Selected ID:", selectedId);
    console.log("Selected Boss:", selectedBoss);
    document.getElementById("selected-boss").textContent = selectedBoss; // Display selected name in <h1> tag
    // You can store these values in your database here
  });
