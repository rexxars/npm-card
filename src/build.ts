import boxen, {BorderStyle} from 'boxen'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

const libDir = path.join(__dirname, '..', 'lib')
const outputPath = path.join(libDir, 'output.txt')

// Text + chalk definitions
const data = {
  name: chalk.white('              Espen Hovlandsdal'),
  handle: chalk.white('rexxars'),
  work: chalk.white('Full-stack developer at Sanity.io'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('rexxars'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~rexxars'),
  github: chalk.gray('https://github.com/') + chalk.green('rexxars'),
  web: chalk.cyan('https://espen.codes/'),
  npx: chalk.red('npx') + ' ' + chalk.white('rexxars'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  newline +
  twittering +
  newline + // data.labelTwitter + data.twitter
  githubing +
  newline + // data.labelGitHub + data.github
  npming +
  newline + // data.labelnpm + data.npm
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.mkdirSync(libDir)
fs.writeFileSync(
  outputPath,
  chalk.green(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: BorderStyle.Round,
    }),
  ),
)
