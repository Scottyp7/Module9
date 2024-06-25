const fs = require('fs');
const {Day, Location, Country} = require('./models/index')

// Initial data was received from this API
//https://goweather.herokuapp.com/weather/Sydney

Day.findAll().then(data => {
    if(!data.length){
        // Read the JSON file
        fs.readFile('weather.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Parse the JSON data
            const jsonData = JSON.parse(data);
                Day.bulkCreate(jsonData)
                    .then( () => {
                        console.log('Day Data Added')
                    })

        }  )
    }
})

Location.findAll().then(data => {
    if(!data.length){
        // Read the JSON file
        fs.readFile('locations.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Parse the JSON data
            const jsonData = JSON.parse(data);
                Location.bulkCreate(jsonData)
                    .then( () => {
                        console.log('LocationData Added')
                    })

        }  )
    }
})

Country.findAll().then(data => {
    if(!data.length){
        // Read the JSON file
        fs.readFile('countries.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Parse the JSON data
            const jsonData = JSON.parse(data);
                Country.bulkCreate(jsonData)
                    .then( () => {
                        console.log('Country Data Added')
                    })

        }  )
    }
})


