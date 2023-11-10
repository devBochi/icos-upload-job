var ibm = require('ibm-cos-sdk');

// Credentials for ICOS sdk
var config = {
    endpoint: process.env.ENDPOINT,
    apiKeyId: process.env.API_KEY,
    serviceInstanceId: process.env.SERV_ID,
};
var cos = new ibm.S3(config);

// We parse the metadata that comes from the ICOS put event
const eventInfo = JSON.parse(process.env.CE_DATA)

let params = {
    Bucket: eventInfo.bucket, 
    Key: eventInfo.key
};

console.log(params)   

// With the info of the event, we can read the object and do whatever we want
cos.getObject(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
});
