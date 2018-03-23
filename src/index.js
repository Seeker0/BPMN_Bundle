const fs = require('fs');

const BpmnJS = require('bpmn-js');

let xml = fs.readFileSync(require.resolve('./ProcessFlow.bpmn'), 'utf-8');

let viewer = new BpmnJS({
  container: '#canvas'
});

viewer.importXML(xml, err => {
  if (err) {
    console.log('error rendering', err);
  } else {
    console.log('rendered', xml);
  }
});

let canvas = viewer.get('canvas');
canvas.zoom('fit-viewport');

console.log(viewer);

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
