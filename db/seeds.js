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
                password: "alfredKnows"
                firstName: "Bruce",
                lastName: 'Wayne',
                email: 'b.wayne@gmail.com',
                phoneNumber: "555-555-5555",
                location: "gotham"
            })