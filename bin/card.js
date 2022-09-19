#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
'use strict';

const chalk = require('chalk');
const boxen = require('boxen');

const avatar = require('../ascii/avatar');
const logo = require('../ascii/logo');

const newline = '\n';

const younupColor = chalk.hex('fbbe00');

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'bold'
};

const data = {
    name: younupColor("     La néo-ESN agile et humaine au service d’une expertise IT de pointe"),
    twitter: chalk.cyan('https://twitter.com/Younup_IT'),
    github: chalk.cyan('https://github.com/Younup'),
    linkedin: chalk.cyan('https://linkedin.com/company/younup/'),
    web: chalk.cyan('https://www.younup.fr/'),
    blog: chalk.cyan('https://www.younup.fr/blog'),
    jobs: chalk.cyan('https://www.younup.fr/nous-rejoindre'),
    email: chalk.cyan('helloyou@younup.fr'),
    npx: chalk.white('npx younup'),
    labelTwitter: chalk.white.bold('                   Twitter:'),
    labelGitHub: chalk.white.bold('                    Github:'),
    labelLinkedIn: chalk.white.bold('                  LinkedIn:'),
    labelWeb: chalk.white.bold('                       Web:'),
    labelBlog: chalk.white.bold('                      Blog:'),
    labelJobs: chalk.white.bold('                      Jobs:'),
    labelCard: chalk.white.bold('                      Card:'),
    labelEmail: chalk.white.bold('                     Email:')
};

const hr = younupColor('              ----------~~~~~~~~~==========~~~~~~~~~-----------');
const heading = `${data.name}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const bloging = `${data.labelBlog}  ${data.blog}`;
const jobing = `${data.labelJobs}  ${data.jobs}`;
const emailing = `${data.labelEmail}  ${data.email}`;
const carding = `\n${data.labelCard}  ${data.npx}`;

const card = [
    chalk.white(avatar),
    newline,
    hr,
    heading,
    hr,
    newline,
    twittering,
    githubing,
    linkedining,
    webing,
    bloging,
    jobing,
    emailing,
    carding,
    newline,
    younupColor(logo)
];

const output = card.join(newline);

console.log(younupColor(boxen(output, options)));
