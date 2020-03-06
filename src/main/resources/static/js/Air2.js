$(document).ready(function () {
    $('#getAirportButton').click(getAirport);
    $('#createAirportButton').click(createAirport);
    $('#getAirplaneButton').click(getAirplane);
    $('#createAirplaneButton').click(createAirplane);
    getAirport();
    getAirplane();


});


function displayAirport(airport) {
    var airportContainer = $('#airportContainer');
    airportContainer.empty();

    $.each(airport, function (index, airport) {
        $('#airportContainer').append('<tr><td>' + airport.id + '</td>' +
            '<td>' + airport.name +
            '<td><button class="remove-button" airportId="' + airport.id + '">DELEtE ' + airport.id +
            '</button></td></tr>')
        console.log(airport);
    });

    $('#airportContainer.remove-button').click(removeAirport);
}


// get airport.........
function getAirport() {
    $.get('api/airport', function (airport) {
        displayAirport(airport);
        console.log(airport);

    });
}

//Create post Airport.......
function postAirport(airport) {
    var jsonAirport = JSON.stringify(airport);
    $.ajax({
        url: 'api/airport',
        type: 'POST',
        contentType: 'application/json',
        data: jsonAirport,
        success: function () {
            alert('We Created a New Airport!');
        },
        error: function () {
            alert('Something is  Wrong..:(');
        }
    });
}
function createAirport() {
    var airportName = $('#airportNameInput').val();
    if (!airportName) {
        alert('The Airport Name should be set!');
        return;
    }
    if (airportName.length < 6) {
        alert('Name Is Too Short!');
        return;
    }
    var airport = {
        name: airportName
    };
    postAirport(airport);
}

//Delete Part ........
function removeAirport() {
    var airportId = $(this).attr('airportId');
    $.ajax({
        url: 'api/airport/' + airportId,
        type: 'DELEtE',
        success: function () {
            alert('airport' + airportId + 'delete!');
        },
        error: function () {
            alert('something went wrong..');
            console.log(airport);
        }
    });
}


//Airplane.....

function displayAirport(airplane) {
    var airplaneContainer = $('#airplaneContainer');
    airplaneContainer.empty();

    $.each(airplane, function (index, airplane) {
        $('#airplaneContainer').append('<tr><td>' + airplane.id + '</td>' +
            '<td>' + airplane.name +
            '<td><button class="remove-button" airplaneId="' + airplane.id + '">DELEtE ' + airplane.id +
            '</button></td></tr>')
        console.log(airport);
    });

    $('#airplaneContainer.remove-button').click(removeAirport);
}


// get airport.........
function getAirplane() {
    $.get('api/airplane', function (airplane) {
        displayAirport(airplane);
        console.log(airplane);

    });
}

//Create post Airport.......
function postAirplane(airplane) {
    var jsonAirport = JSON.stringify(airplane);
    $.ajax({
        url: 'api/airplane',
        type: 'POST',
        contentType: 'application/json',
        data: jsonAirplane,
        success: function () {
            alert('We Created a New Airplane!');
        },
        error: function () {
            alert('Something is  Wrong..:(');
        }
    });
}
function createAirplane() {
    var airplaneName = $('#airplaneNameInput').val();
    if (!airplaneName) {
        alert('The Airplane Name should be set!');
        return;
    }
    if (airplaneName.length < 6) {
        alert('Name Is Too Short!');
        return;
    }
    var airport = {
        name: airplaneName
    };
    postAirport(airplane);
}

//Delete Part ........
function removeAirplane() {
    var airplaneId = $(this).attr('airplaneId');
    $.ajax({
        url: 'api/airplane/' + airplaneId,
        type: 'DELEtE',
        success: function () {
            alert('airport' + airplaneId + 'delete!');
        },
        error: function () {
            alert('something went wrong..');
            console.log(airplane);
        }
    });
}