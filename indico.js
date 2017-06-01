let axios = require('axios');
let indico = require('indico.io');
const apiKey = "f1ea0789959e034cdb46c7526b17968a";
indico.apiKey = apiKey;

let fs = require('fs');

const img = fs.readFileSync('./test/me.png');
const img2 = new Buffer(img).toString('base64');

let data = {
    black : {
        skirt : ['./test/black/skirt/img1.png','./test/black/skirt/img2.png','./test/black/skirt/img3.png'],
        tshirt : ['./test/black/tshirt/img1.png','./test/black/tshirt/img2.png','./test/black/tshirt/img3.png']
    },
    white : {
        skirt : ['./test/white/skirt/img1.png','./test/white/skirt/img2.png','./test/white/skirt/img3.png'],
        tshirt : ['./test/white/tshirt/img1.png','./test/white/tshirt/img2.png','./test/white/tshirt/img3.png']
    }
};
let data_input = {
    black : {
        skirt : [],
        tshirt : []
    },
    white : {
        skirt : [],
        tshirt : []
    }
};
let test = ['./test/test/img1.png','./test/test/img2.png','./test/test/img3.png','./test/test/img4.png','./test/test/img5.png','./test/test/img6.png','./test/test/img7.png','./test/test/img8.png'];
let test_input = [];
for(let i=0;i<test.length;i++) {
    test_input = test.map((url) => {
        "use strict";
        let data = fs.readFileSync(url);
        return new Buffer(data).toString('base64');
    });
}

data_input.black.skirt = data.black.skirt.map((url) => {
    "use strict";
    let data = fs.readFileSync(url);
    return new Buffer(data).toString('base64');
});
data_input.black.tshirt = data.black.tshirt.map((url) => {
    "use strict";
    let data = fs.readFileSync(url);
    return new Buffer(data).toString('base64');
});
data_input.white.skirt = data.white.skirt.map((url) => {
    "use strict";
    let data = fs.readFileSync(url);
    return new Buffer(data).toString('base64');
});
data_input.white.tshirt = data.white.tshirt.map((url) => {
    "use strict";
    let data = fs.readFileSync(url);
    return new Buffer(data).toString('base64');
});

let data_input2 = {
    black : {
        skirt : [],
        tshirt : []
    },
    white : {
        skirt : [],
        tshirt : []
    }
};


// function sendToIndico(endpoint, data, callback) {
//     var key = 'f1ea0789959e034cdb46c7526b17968a',
//         collectionName = 'my_collection',
//         url = 'https://apiv2.indico.io'+ endpoint,
//         log = function(res) { console.log(res) };
//
//     var cb = callback || log;
//
//     // Using jQuery ($) to make requests
//     axios.post(url, JSON.stringify({
//         api_key: key,
//         data: data,
//         collection: collectionName
//     }), cb);
// }
// sendToIndico('/custom/add_data', [data_input.black.skirt[0], ["black","skirt"]])

let collection = indico.Collection('my_collection',{});
// collection.clear();
// for(let i=0;i<3;i++) {
//     collection.addData([data_input.black.skirt[i], "black"]);
//     collection.addData([data_input.black.skirt[i], "skirt"]);
//     collection.addData([data_input.black.tshirt[i], "black"]);
//     collection.addData([data_input.black.tshirt[i], "tshirt"]);
//
//     collection.addData([data_input.white.skirt[i], "white"]);
//     collection.addData([data_input.white.skirt[i], "skirt"]);
//     collection.addData([data_input.white.tshirt[i], "white"]);
//     collection.addData([data_input.white.tshirt[i], "tshirt"]);
//
// }
// collection.train()
//     .then(console.log);
// collection.info()
//     .then(console.log);

for(let i=0;i<8;i++) {
    collection.predict(test_input[i])
        .then((res) => {
            "use strict";
            let a = '';
            let b = '';
            if (res.skirt > res.tshirt)
                a = 'skirt';
            else
                a = 'tshirt';
            if (res.black > res.white)
                b = 'black';
            else
                b = 'white';
            console.log(test[i]);
            console.log(b, a);
            console.log(res);
        })
}


// axios.post(
//     'https://apiv2.indico.io/fer',
//     JSON.stringify({
//         'api_key': apiKey,
//         'data': img3,
//         'detect': true
//     })
// ).then(function(res) { console.log(JSON.stringify(res.data)) }).catch(function(e){console.log(e)});

// axios.post(
//     'https://apiv2.indico.io/sentimenthq',
//     temp2
// ).then(function(res2) {
//     console.log(res);
//     console.log(res2);
//     let a = [];
//     res.data.results.map((obj,i) => {
//         a.push(<h2>{obj.text}</h2>);
//     });
//     changeState(res2.data.results,a);
// });