#! /usr/bin/env node

const commandLineArgs = require('command-line-args');
const rp = require('request-promise');

const argsDefinitions = [
  { name: 'command', alias: 'c', type: String, defaultOption: true },
  { name: 'repository', alias: 'r', type: String },
];

const args = commandLineArgs(argsDefinitions);

if (!args.command || args.command !== 'deploy' || !args.repository) {
  console.error('The only command accepted for now is deploy.');
  console.error('To use it, run "nodez deploy --repository user-space/repository-name".');
  console.error('For example: nodez deploy --repository brunokrebs/auth0-web');
  process.exit(1);
}

const { command, repository } = args;

const commandDetails = {
  command,
  repository,
};

const options = {
  method: 'POST',
  uri: 'http://localhost:3000',
  body: {
    commandDetails,
  },
  json: true,
};

rp(options)
  .then((response) => {
    console.log(response);
  })
  .catch(console.error);
