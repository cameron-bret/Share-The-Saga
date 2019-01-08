const Books = require('../models/Books')
const Pages = require('../models/Pages')

Books.deleteMany({})
    .then(() => {
        return Books.create({
            title: "Family Stories",
            date: "01/08/19",
            setting: '1950-1970 California',
            description: 'a book for all things family',
            genre: "scrapbook",
        }).then((book) => {
            const page1 = Pages.create({
                name: "funnyEmail_jim_dad",
                source: ".pdf",
                date: "01/07/19",
                description: "Funny email from Uncle Jim to Dad"
                genre: "scrapbook"
            }).then((page) => {
                book.Pages.push(page)
            })

            const page2 = Pages.create({
                name: "Wasted Wine",
                source: ".doc",
                date: "01/08/19",
                description: "a poem written about spilt wine"
                genre: "musings"
            }).then((page) => {
                book.Pages.push(page)
            })


            Promise.all([page1, page2])
                .then(() => {
                    book.save()
                })
        })
    })