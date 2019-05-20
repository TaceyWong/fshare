const {Command, flags} = require('@oclif/command')

class FshareCommand extends Command {
  async run() {
    const {flags} = this.parse(FshareCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.js`)
  }
}

FshareCommand.description = `fshare - sharing files using Firefox Send API.
...
Extra documentation goes here
`

FshareCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h', description: '输出此帮助信息'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = FshareCommand
