const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
const files = [
'./dist/user-expertise/runtime.js',
'./dist/user-expertise/polyfills.js',
'./dist/user-expertise/main.js',
'./dist/user-expertise/scripts.js'
];

await fs.ensureDir('user');
await concat(files, 'user/user-expertise.js');
}
build();