'use strict';

exports.handler = (event, context, callback) => {
   const response = event.Records[0].cf.response;
   const headers = response.headers;
   
   headers['Strict-Transport-Security'] = "max-age=31536000; includeSubDomains";
   
   callback(null, response);
};
