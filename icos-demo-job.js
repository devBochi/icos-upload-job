// var ibm = require('ibm-cos-sdk');
// var util = require('util');

/*
var config = {
    endpoint: '<endpoint>',
    apiKeyId: '<api-key>',
    serviceInstanceId: '<resource-instance-id>',
};
*/

// var cos = new ibm.S3(config);

console.log(JSON.parse(process.env.CE_DATA))

console.log(process.env.CE_DATA.notification)

let event = {}

event = process.env.CE_DATA

// APIKEY=VamGabdPmuB_7FNxecCb1yvARlwCVXD7Su_ft67N0rEP
// ICOS(public)=s3.us-south.cloud-object-storage.appdomain.cloud

const eventInfo = {
    object: event.key,
    bucket: event.bucket
}

var params = {
    Bucket: eventInfo.bucket, 
    Key: eventInfo.object
};

console.log(params)   

/*
cos.getObject(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   });
*/