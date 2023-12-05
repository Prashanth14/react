import React from "react";
import ReactDOM from "react-dom/client"

//create react element using core react, React.creatElement() => object => HTML object(after rendering)
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "This is React"
//     );

// console.log(heading);

const elem = <span>React element </span>

//create react element using JSX
const title = (
    <h1 className="head" tabIndex="5">
    {elem}
    React using JSX
    </h1>
);

//react component
const Title = () => (
    <h1 className="head" tabIndex="5">
    React using JSX
    </h1>
);


//React Functional Component, this is called component composition
const HeadingComponent = () =>(
    <div id="container">
        <Title /> 
        <h1 className="heading">React Functional Component</h1>
    </div>
);



//create a root element for DOM(browser to display)
const root = ReactDOM.createRoot(document.getElementById('root'));


//rendering react element but not react components
// root.render(title);

//rendering react component
root.render(<HeadingComponent/>);


