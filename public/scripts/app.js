'use strict';

console.log('App.js running');

var app = {
    title: 'Indecision App',
    subtitle: "Let's make something here!"
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hey ',
        app.title.toUpperCase() + ' !'
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Ke Lingsi',
    age: 29,
    location: 'California'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
