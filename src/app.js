console.log('App.js running');

const app = {
    title: 'Indecision App',
    subtitle: "Let's make something here!"
}

var template = (
<div>
    <h1>Hey {app.title.toUpperCase() + ' !'}</h1> 
    <p>{app.subtitle}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

var user = {
    name: 'Ke Lingsi',
    age: 29,
    location: 'California'
}

function getLocation(location) {
    if (location) {
        return location;
    }
    else {
        return 'Unknown';
    }
}

var templateTwo = (
<div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
</div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);