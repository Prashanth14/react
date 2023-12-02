/*
    <div id = 'parent'>
        <div id = 'child'>
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
    <div id = 'parent'>
        <div id = 'child2'>
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>

    React.createElement() returns an object while rendering react converts javascript object to HTML(Browser Understands)
*/

const heading = React.createElement(
   "div",
   {id:"parent"},
  [ React.createElement(
    "div",
    {id:"child"},
    [React.createElement(
        "h1",
        {}, 
        "I am h1 tag"),
    React.createElement(
        "h2",
        {}, 
        "I am h2 tag")
    ]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {}, 
            "I am h1 tag"),
        React.createElement(
            "h2",
            {}, 
            "I am h2 tag")
        ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
    
root.render(heading);