const Books = require('../models/Books')
const Pages = require('../models/Pages')

Books.deleteMany({})
    .then(() => {
        return Books.create({
            name: "The Verge",
            link: "https://www.theverge.com/",
            content: 'Technology News website',
            img: 'https://cdn3.vox-cdn.com/thumbor/p-V8i5J-NMPyPJSOkPhWCRbPLN8=/0x1080/volume-assets.voxmedia.com/production/13eb44738a1d6054f264d6288cfc47d7/pixelbook.jpg',
            createdAt: "1/3/2019",
            comments: []
        }).then((newsLink) => {
            const niceComment = Pages.create({
                title: "Good news source!",
                author: "Cameron",
                createdAt: "Just now",
                content: "I friggin love this news source."
            }).then((comment) => {
                newsLink.comments.push(comment)
            })

            const niceComment2 = Pages.create({
                title: "Good news source! 2",
                author: "Cameron 2 ",
                createdAt: "Just now 2",
                content: "I friggin love this news source. 2"
            }).then((comment) => {
                newsLink.comments.push(comment)
            })


            Promise.all([niceComment, niceComment2])
                .then(() => {
                    newsLink.save()
                })
        })
    })