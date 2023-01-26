let express = require("express")
require("dotenv").config();



let PORT = process.env.PORT || 8080;

let app = express();
app.use(express.json());

app.use(express.static('./public'))

let authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

// let helloRoutes = require("./routes/helloRoutes");
// app.use(helloRoutes);


fetch('/api/books')
    .then(response => response.json())
    .then(books => {
        // Get the container element where the books will be displayed
        const container = document.getElementById('book-list');
        // Iterate through the books and create an HTML element for each one
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>${book.description}</p>
            `;
            container.appendChild(bookElement);
        });
    });


app.listen(PORT, function(){
console.log("Application server started on port", PORT);
})

