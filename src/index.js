#! /usr/bin/env node

const commandLineArgs = require('command-line-args');

const argsDefinitions = [
  { name: 'command', alias: 'c', type: String, defaultOption: true },
  { name: 'repository', alias: 'r', type: String },
];

const args = commandLineArgs(argsDefinitions);

console.log(args);
console.log(`command: ${args.command}; repository: ${args.repository}`);
