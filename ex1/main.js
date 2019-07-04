const fs = require('fs');
const readline = require('readline');

let items = {};

const stream = fs.createReadStream('../../seattle-checkouts-by-title/checkouts-by-title.csv');
stream.setEncoding('UTF8');

const lineReader = readline.createInterface({
    input: stream,
});

lineReader.on('line', function(data) {
    //console.log('Line from file', data);
    let aux = data.replace(/(['"])/g, "");
    let words = aux.split(',');
    console.log(words);
    //console.log(items);
    /* if(items.hasOwnProperty(words[2])) {
        items[words[2]] ++;
    } else {
        items[words[2]] = 1;
    }
    console.log(items); */
})

lineReader.on('close', function(){
    fs.writeFile(
        `./Output - ${Date.now()}.json`,
        JSON.stringify(items),
        function(err) {
            if(err) return err; else {
                console.log('Done.')
            }
        }
    )
})