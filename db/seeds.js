const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

Author.deleteMany()
    .then(() => {
        return Author.deleteMany()
    })
    .then(() => {
        return Author.create({
            userName: "batman",
            password: "alfredKnows",
            firstName: "Bruce",
            lastName: 'Wayne',
            email: 'b.wayne@gmail.com',
            phoneNumber: "555-555-5555",
            location: "gotham"
        })
    })
    .then(() => {
        return Author.create({
            userName: "EddyPoe",
            password: "nevermore",
            firstName: "Edgar",
            lastName: 'Poe',
            email: 'ea.poe@aol.com',
            phoneNumber: "444-444-4444",
            location: "baltimore"
        })
    })

Books.deleteMany()
    .then(() => {
        return Books.deleteMany()
    })
    .then(() => {
        return Books.create({
            title: "The Hero Gotham Needs Me To Be",
            date: 01 / 08 / 19,
            setting: "Gotham 1950s",
            description: "A tell-all tale of Gotham and the heroes that defend it.",
            genre: "adventure"
        })
    })
    .then(() => {
        return Books.create({
            title: "The Cask of Amontillado",
            date: 11 / 22 / 1846,
            setting: "Italy, carnival season, wine cellar",
            description: "A short story of revenge, a glass best served cold.",
            genre: "horror"
        })
    })

Pages.deleteMany()
    .then(() => {
        return Pages.deleteMany()
    })
    .then(() => {
        return Pages.create({
            name: "chapter 1 page 1 rough draft",
            source: ".doc file from gmail",
            date: 01 / 09 / 19,
            description: "Starting at the beginning; a cold, dark night in Gotham.",
            subGenre: "family backstory"
        })
    })
    .then(() => {
        return Pages.create({
            name: "chapter 2 page 20 rough draft",
            source: "handwritten scribbles on a napkin from BM Grill",
            date: 01 / 09 / 19,
            description: "His friend will lead him deep into the wine cellar.",
            subGenre: "short story"
        })
    })