const originalTokenize = require('chinese-tokenizer').loadFile('./cedict_ts.u8')

function tokenize(str) {
	return originalTokenize(str);
}

module.exports = tokenize;