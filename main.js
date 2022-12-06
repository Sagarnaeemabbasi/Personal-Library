console.log("welcome to my library");
function Books(GivenBook, GivenAuthor, type) {
    this.name = GivenBook
    this.author = GivenAuthor
    this.type = type
}
function Display() {
}

Display.prototype.AddBook = function (book) {
    let AddBook = document.getElementById('AddBook');
    let html = `
     <tr>
         <td>${book.name}</td>+
         <td>${book.author}</td>
         <td>${book.type}</td>
    </tr>
     `
    AddBook.innerHTML += html
}
Display.prototype.reset = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();

}
Display.prototype.validate = function (book) {
    if (book.name.length <= 2 || book.author.length <= 2) {
        return false
    }
    else {
        return true
    }
}
Display.prototype.showMessage = function (Type, displayMessage) {
    let boldText
    let showMessage = document.getElementById("showMessage")
    if (Type == 'success') {
        boldText = 'Success'
    }     // types are danger and success (may be property of bootstramp)
    else if (Type == 'danger'){
        boldText = 'Error'
    }
    let messagehtml = `
    <div class="alert alert-${Type} alert-dismissible fade show" role="alert">
         <strong>${boldText}: </strong>${displayMessage}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    showMessage.innerHTML += messagehtml;
    setTimeout(function () {
        showMessage.innerHTML =""
    }, 5000);
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', submitBook)
function submitBook(e) {
    let name = document.getElementById('bookName').value;   //here name must be same as after td ${} (agar wahan name tha to yahan bhi name hona chaiye agar Name bhi howa to galat ha)
    let author = document.getElementById('author').value;   //here author must be same as after td ${} (agar wahan author tha to yahan bhi author hona chaiye agar Author  bhi howa to galat ha)
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let myBook = new Books(name, author, type);

    let display = new Display();
    if (display.validate(myBook)) {
        display.AddBook(myBook);
        display.showMessage("success","your book is added now");
    }
    else{
        display.showMessage("danger","your book cannot be added");
    }
    e.preventDefault();
}

//function main jahan jahan kuch lena ha usko hamesha saath rakhyega