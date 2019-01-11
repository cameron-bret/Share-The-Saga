const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

Author.deleteMany()
    .then(() => {
        return Author.deleteMany()
    })
    .then(() => {
        return Author.create({
            userName: "billyFinger",
            password: "alfredKnows",
            firstName: "Bill",
            lastName: 'Finger',
            email: 'b.finger@gmail.com',
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
    .then(() => {
        return Author.create({
            userName: "cPalahniuk",
            password: "nunya",
            firstName: "Chuck",
            lastName: 'Palahniuk',
            email: 'cp@gmail.com',
            phoneNumber: "777-655-5545",
            location: "NYC"
        })
    })
    .then(() => {
        return Author.create({
            userName: "RandWasHere",
            password: "producer",
            firstName: "Ayn",
            lastName: 'Rand',
            email: 'altasshrugged@gmail.com',
            phoneNumber: "545-535-5225",
            location: "somewhere"
        })
    })
    .then(() => {
        return Author.create({
            userName: "salinasMenace",
            password: "avocado",
            firstName: "John",
            lastName: 'Steinbeck',
            email: 'read_origin@gmail.com',
            phoneNumber: "245-545-5005",
            location: "california coast"
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
    .then(() => {
        return Books.create({
            title: "Rant",
            date: 06 / 03 / 1980,
            setting: "a time and a place outside of our own",
            description: "Some people crash cars just to feel alive.",
            genre: "horror/scifi/comedy"
        })
    })
    .then(() => {
        return Books.create({
            title: "East of Eden",
            date: 09 / 12 / 1952,
            setting: "small town in California circe 1950",
            description: "Interwoven stories of two families and life during the era",
            genre: "drama"
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
            name: "chapter 3 page 24 rough draft",
            source: "from my journal",
            date: 10 / 03 / 19,
            description: "October is the month for painted leaves.",
            subGenre: "memoir"
        })
    })
    .then(() => {
        return Pages.create({
            name: "chapter 4 page 5 rough draft",
            source: "a word doc on my home computer",
            date: 01 / 09 / 79,
            description: "How to open a wine bottle using a mens dress shoe.",
            subGenre: "instructional"
        })
    })
    .then(() => {
        return Pages.create({
            name: "chapter 5 page 67 rough draft",
            source: "found this handwritten letter in the attic",
            date: 08 / 09 / 15,
            description: "a love letter from grandpa to granma",
            subGenre: "romance"
        })
    })