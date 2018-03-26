const fs = require('fs');

const BpmnJS = require('bpmn-js');

let xml = fs.readFileSync(require.resolve('./ProcessFlow.bpmn'), 'utf-8');

let Modeler = require('bpmn-js/lib/Modeler');
let modeler = new Modeler({ container: '#canvas' });

// let modeling = modeler.get('modeling');
// let elementsToColor = [element1, element2];
//
// modeling.setColor(elementsToColor, { stroke: 'green', fill: 'yellow' });

modeler.importXML(xml, err => {
  if (err) {
    console.log('error rendering', err);
  } else {
    console.log('rendered', xml);
  }
});

let canvas = modeler.get('canvas');
canvas.zoom('fit-viewport');

console.log(modeler);

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
