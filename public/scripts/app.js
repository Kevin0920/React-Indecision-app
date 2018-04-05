console.log('App.js running');

// var template = <p>This is JSX app.js</p>;
var template = React.createElement(
    "p",
    { id: "aaa" },
    "This is JSX app.js"
  );
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);