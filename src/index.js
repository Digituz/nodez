#! /usr/bin/env node

const commandLineArgs = require('command-line-args');
const https = require('https');

const argsDefinitions = [
  { name: 'command', alias: 'c', type: String, defaultOption: true },
  { name: 'repository', alias: 'r', type: String },
];

const args = commandLineArgs(argsDefinitions);

if (!args.command || args.command !== 'deploy') {
  console.error('The only command accepted for now is deploy.');
  console.error('To use it, run "nodez deploy --repository user-space/repository-name".');
  console.error('For example: nodez deploy --repository brunokrebs/auth0-web');
  process.exit(1);
}

const { command, repository } = args;

const commandDetails = {
  command,
  repository,
}

https.post('http://localhost:3000', commandDetails, console.log)
  .on("error", console.error);
