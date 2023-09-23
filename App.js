const heading = React.createElement("h1", { id: "heading", xyz: "yusss" }, "Hello Wold Form React JS !");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);


//*************************************************************************************************************************** */

// We Have to create this in WebPage - 

{/* <div id="parent">
    <div id="child-1">
        <h1 id="first">1st Child 1st Heading</h1>
        <h2 id="second">1st Child 2nd Heading</h2>
    </div>
    <div id="child-2">
        <h1 id="third">2nd Child 1st Heading</h1>
        <h2 id="fourth">2nd Child 2nd Heading</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child-1" },
            [
                React.createElement(
                    "h1",
                    { id: "first" },
                    "1st Child 1st Heading"
                ),
                React.createElement(
                    "h1",
                    { id: "first" },
                    "1st Child 2nd Heading"
                )
            ]
        ),
        React.createElement(
            "div",
            { id: "child-1" },
            [
                React.createElement(
                    "h1",
                    { id: "first" },
                    "2nd Child 1st Heading"
                ),
                React.createElement(
                    "h1",
                    { id: "first" },
                    "2nd Child 2nd Heading"
                )
            ]
        )
    ]
)

// Creating Root for Render this Core React Code

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent)
