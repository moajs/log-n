const assert = require('assert')
const dump = require('dumpster').dump

module.exports = function (obj, level) {
    if (obj === undefined){
        throw new Error("You must provide a params")
    }

    var _opt = {
        pretty: true,
        depth: 10
    }

    if (level) _opt.depth = level

    console.log(dump(obj, _opt))
}