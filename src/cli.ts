/**
 * Main Cli File
 */

import * as readline from 'readline';
import { packageExist, listFiles, conformInput, getDefaults } from './util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const defualts = getDefaults();

const storage: any = {};

rl.question(`name [${defualts.name}]`, answer => {
    storage.name = answer;
});

rl.question('version', answer=>{
  storage.version = answer;
});

rl.question('description', answer=>{
  storage.version = answer;
});

rl.question('keywords []', answer=>{
  storage.version = answer;
});

rl.question('homepage', answer=>{
  storage.version = answer;
});

rl.question('bugs', answer=>{
  storage.version = answer;
});

rl.question('version', answer=>{
  storage.version = answer;
});

rl.question('version', answer=>{
  storage.version = answer;
});


rl.question('version', answer=>{
  storage.version = answer;
});

rl.question('version', answer=>{
  storage.version = answer;
});


:
:
:
:
license:
author:
files: []
main: | browser
bin:
repository:
config:
