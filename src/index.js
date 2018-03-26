const fs = require('fs');

const BpmnJS = require('bpmn-js');

let xml = fs.readFileSync(require.resolve('./ProcessFlow.bpmn'), 'utf-8');

let Modeler = require('bpmn-js/lib/Modeler');
let modeler = new Modeler({ container: '#canvas' });

let modeling = modeler.get('modeling');

modeler.importXML(xml, err => {
  if (err) {
    console.log('error rendering', err);
  } else {
    console.log('rendered', xml);
  }

  let overlays = modeler.get('overlays'),
    canvas = modeler.get('canvas'),
    elementRegistry = modeler.get('elementRegistry');

  let elements = [
    elementRegistry.get('UserTask_0jnq0wp'),
    elementRegistry.get('UserTask_05y7vt2')
  ];
  modeling.setColor(elements, { stroke: 'green', fill: 'yellow' });
});
// let elements = [element1, element2];
// modeling.setColor(elements, { stroke: 'green', fill: 'yellow' });

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
