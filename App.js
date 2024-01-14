let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "para1" }, "this is my para"),
    React.createElement("h2", { id: "para2" }, "this is my 2ndpara"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "para1" }, "this is my para"),
    React.createElement("h2", { id: "para2" }, "this is my 2ndpara"),
  ]),
]);

let heading = React.createElement("h1", { id: "heading" }, "hello from React");
let root = ReactDOM.createRoot(document.getElementById("main"));
root.render(parent);
