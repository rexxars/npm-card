#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const output = fs.readFileSync(path.join(__dirname, 'output.txt'), 'utf8')

console.log(output)
