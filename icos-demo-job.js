var ibm = require('ibm-cos-sdk');

var config = {
    endpoint: process.env.ENDPOINT,
    apiKeyId: process.env.API_KEY,
    serviceInstanceId: process.env.SERV_ID,
};
var cos = new ibm.S3(config);

const evento = JSON.parse(process.env.CE_DATA)

let params = {
    Bucket: evento.bucket, 
    Key: evento.key
};

console.log(params)   

cos.getObject(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
});
