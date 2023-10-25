const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = ["Apple", "Apricot", "Avocado 🥑", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Blueberry", "Boysenberry", "Currant", "Cherry", "Coconut", "Cranberry", "Cucumber", "Custard apple", "Damson", "Date", "Dragonfruit", "Durian", "Elderberry", "Feijoa", "Fig", "Gooseberry", "Grape", "Raisin", "Grapefruit", "Guava", "Honeyberry", "Huckleberry", "Jabuticaba", "Jackfruit", "Jambul", "Juniper berry", "Kiwifruit", "Kumquat", "Lemon", "Lime", "Loquat", "Longan", "Lychee", "Mango", "Mangosteen", "Marionberry", "Melon", "Cantaloupe", "Honeydew", "Watermelon", "Miracle fruit", "Mulberry", "Nectarine", "Nance", "Olive", "Orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Plantain", "Plum", "Pineapple", "Pomegranate", "Pomelo", "Quince", "Raspberry", "Salmonberry", "Rambutan", "Redcurrant", "Salak", "Satsuma", "Soursop", "Star fruit", "Strawberry", "Tamarillo", "Tamarind", "Yuzu"];

function search(str) {
  let results = [];
  results = fruit.filter((value) => value.toLowerCase().indexOf(str.toLowerCase()) !== -1);
  if (results.length > 6) {
    results = results.slice(0, 6);
  }
  return results;
}

function searchHandler(e) {
  suggestions.innerHTML = ""; //clears suggestions
  const fruitResults = search(input.value);

  for (result of fruitResults) {
    let suggestedFruit = document.createElement("li");
    suggestedFruit.textContent = result;
    suggestions.append(suggestedFruit);
  }
  //showSuggestions();
}

function showSuggestions(evt) {
  // highlights the suggestion
  let suggestion = evt.target;
  if (suggestion.tagName === "LI") {
    suggestion.classList.add("has-suggestions");
  }
}

function removeSuggestions(evt) {
  // removes the highlight from the suggestion
  let suggestion = evt.target;
  if (suggestion.tagName === "LI") {
    suggestion.classList.remove("has-suggestions");
  }
}

function useSuggestion(evt) {
  // user clicks on a suggestion, that string will fill the Search Bar.
  let suggestion = evt.target;
  if (suggestion.tagName === "LI") {
    input.value = suggestion.textContent;
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("mouseover", showSuggestions);
suggestions.addEventListener("mouseout", removeSuggestions);
suggestions.addEventListener("click", useSuggestion);
