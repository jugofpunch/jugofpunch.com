'use strict';

exports.handler = (event, context, callback) => {
   const response = event.Records[0].cf.response;
   const headers = event.Records[0].cf.response.headers;
   
   headers['Strict-Transport-Security'] = [{key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains'}];
   
   callback(null, event.Records[0].cf.response);
};
