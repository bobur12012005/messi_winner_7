// let products = [
//     {
//         name: "moloko",
//         type: "milk",
//         price: 12000
//     },
//     {
//         name: "apple",
//         type: "fruit",
//         price: 20000
//     },
//     {
//         name: "sakura",
//         type: "alcohol",
//         price: 20000
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 8000
//     },
//     {
//         name: "banan",
//         type: "fruit",
//         price: 25000
//     },
//     {
//         name: "pivo",
//         type: "alcohol",
//         price: 14000
//     },
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 11000
//     },
//     {
//         name: "alphapvp",
//         type: "alcohol",
//         price: 80000
//     },
//     {
//         name: "konyak AMIR",
//         type: "alcohol",
//         price: 1000
//     },
//     {
//         name: "smetana",
//         type: "milk",
//         price: 12500
//     },
// ]

// let categories = [
//     {
//         type: "milk",
//         amount: 0
//     },
//     {
//         type: "alcohol",
//         amount: 0
//     },
//     {
//         type: "fruit",
//         amount: 0
//     },
// ]

// for (let i = 0; i < products.length; i++) {
//     for (let k = 0; k < categories.length; k++) {
//         if (products[i].type === categories[k].type)
//             categories[k].amount++
//     }
// }
// console.log(categories);



let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {
        course: '   BACKEND',
        count: 0
    },
]

categories.forEach((new_key) => {
    new_key.array = []
})

for (let item of arr) {

    for(let categ of categories) {
        
        if(item.info.faculity.trim().toLowerCase() === categ.course.trim().toLowerCase()) {
            categ.count++
            categ.array.push(item.name)
        }
    }
}

console.log(categories);