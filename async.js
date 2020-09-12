import fs from 'fs';
const content = fs.readFileSync('./myfile', 'utf-8');
console.log(content);
fs.writeFileSync('./myfile-copy', content + ' copy');


