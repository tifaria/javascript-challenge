// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Confirm data is appearing with console.log
console.log(data);

// Loop through data, console.log each UFO object, and append the data to the table
function ufoData(data){ 
    tbody.text("")
    data.forEach(function(ufoReport){
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);	
    })
})};

ufoData(tableData);

// Search through date/time column to find rows that match user input and display in console
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
});

// Create function to display user input on page
// Accept user input and look for desired date
var inputText = d3.select("#datetime");
var button = d3.select("filter-btn");

function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var filtered_table = tableData.filter(ufoReport => ufoReport.datetime===inputText.property("value"));
    ufoData(filtered_table);
};

// Display user input date on page when clicked
inputText.on("change", changeHandler);
button.on("click", changeHandler);

