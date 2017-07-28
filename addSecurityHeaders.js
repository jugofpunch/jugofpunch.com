'use strict';

exports.handler = (event, context, callback) => {
   const response = event.Records[0].cf.response;
   const headers = response.headers;
   
    
   const headerHSTSName = "Strict-Transport-Security": 
   const headerHSTSValue = "max-age=31536000; includeSubDomains"
   
   headers[headerHSTSName.toLowerCase()] = [
         headers[headerHSTSValue.toLowerCase()][0],
      ];
      console.log(`Response header "${headerHSTSName}" was set to ` +
               `"${headers[headerHSTSValue.toLowerCase()][0].value}"`);
   
   callback(null, response);
};
