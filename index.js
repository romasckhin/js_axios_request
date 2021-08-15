const axios = require('axios');
const readlineSync = require('readline-sync');


function request(q) {

    if (q === 'PATCH') {

        let idPatch = readlineSync.question(' What id you wont patch? ')

        axios({
            method: 'PATCH',
            url: `https://bogutskii-ticket.herokuapp.com/event/${idPatch}`,
            data: {
                name: readlineSync.question(' Write name: '),
                description: readlineSync.question(' Write description: '),
                price: readlineSync.question(' Write price: '),
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log('err PATCH', err))

    }

    if (q === 'POST') {

        axios({
            method: 'POST',
            url: `https://bogutskii-ticket.herokuapp.com/event/`,
            data: {
                name: readlineSync.question(' Write name: '),
                description: readlineSync.question(' Write description: '),
                price: readlineSync.question(' Write price: '),
            }

        })
            .then(res => console.log(res.data))
            .catch(err => console.log('err POst', err))
    }

    if (q === 'DELETE') {

        let idDelete = readlineSync.question('What id you wont delete? ');

        axios({
            method: 'DELETE',
            url: `https://bogutskii-ticket.herokuapp.com/event/${idDelete}`
        })
            .then(res => console.log(res))
            .catch(err => console.log('err Delete', err))
    }


    if (q === 'GET') {
        axios({
            method: 'POST',
            url: `https://bogutskii-ticket.herokuapp.com/event/search`
        })
            .then(res => console.log(res.data.payload))
            .catch(err => console.log('err Get', err))

    }
}

request(readlineSync.question('What do you wont to do?:  \nGET ?,  \nDELETE ?,  \nPOST ?, \nPATCH ?, \nwrite: '))