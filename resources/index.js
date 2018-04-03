'use strict';

const fs = require('fs');

var newDiagramXML = fs.readFileSync(__dirname + '/newDiagram.bpmn', 'utf-8');

let ProcessFlow = fs.readFileSync(__dirname + '/ProcessFlow.bpmn', 'utf-8');

let Demo = fs.readFileSync(__dirname + '/Demo.bpmn', 'utf-8');

module.exports = { newDiagramXML, ProcessFlow, Demo };
