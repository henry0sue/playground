var choices = ['apple', 'orange', 'banana', 'grape', 'strawberry'];

var ac = new AutoComplete({
    srcNode: document.getElementById("search-field"),
    choices: choices
});

ac.render();

