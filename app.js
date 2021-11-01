function getBooks() {
    document.getElementById('outputDiv').innerHTML = ""; //clears output div before getting filled in
    
    // makes request to endpoint with a query of input
    fetch("https://openlibrary.org/search.json?q="+document.getElementById('input').value) 

    // convert response from string to object
    .then(a => a.json())

    //  if want all the results response.docs.length
    .then(response => {
        /* const addBookBtn = document.createElement("button");
        addBookBtn.innerHTML = 'Add to Read List';
        document.body.appendChild(btn); */
        for (let i = 0; i < 10; i++) {
            document.getElementById('outputDiv').innerHTML += "<h2>" + response.docs[i].title + "</h2>" 
            + response.docs[i].author_name[0] + "<br><img src='https://covers.openlibrary.org/b/isbn/" 
            + response.docs[i].isbn[0] + "-M.jpg'></img></br>";
            
        }

    });

}