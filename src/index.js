import _ from "lodash";
const BpmnJS = require("bpmn-js");
let xml;
let viewer = new BpmnJS({
  container: "body"
});

viewer.importXML(xml, err => {
  err ? console.log("error rendering", err) : console.log("rendered");
});

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

viewer.attachTo("body");
document.body.appendChild(component());
