const heading = React.createElement("h1", {
    id: "heading",
    xyz: "yusss"
}, "Hello Wold Form React JS !");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child-1"
    }, [
        React.createElement("h1", {
            id: "first"
        }, "1st Child 1st Heading"),
        React.createElement("h1", {
            id: "first"
        }, "1st Child 2nd Heading")
    ]),
    React.createElement("div", {
        id: "child-1"
    }, [
        React.createElement("h1", {
            id: "first"
        }, "2nd Child 1st Heading"),
        React.createElement("h1", {
            id: "first"
        }, "2nd Child 2nd Headinggggggggggggg")
    ])
]);
// Creating Root for Render this Core React Code
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
