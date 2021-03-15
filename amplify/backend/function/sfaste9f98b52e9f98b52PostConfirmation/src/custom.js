const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date()
    if (!event.request.userAttributes.sub) {
      console.log("There is an error");
      context.done(null, event);
      return
    }
    //Save user to DynamoDB;
    const params = {
      Item:{
        'id': {S: event.request.userAttributes.sub},
        '__typename':{S: 'User'},
        'username':{S:event.userName},
        'email':{S:event.request.userAttributes.email},
        'createAt': {S:date.toISOString()},
        'updatedAt': {S:date.toISOString()} 
      },
      TableName: process.env.USERTABLE,
    }

    try{
      await ddb.putItem(params).promise();
      console.log("success")
    }catch(e) {
      console.log("ERRRRRR", e)
    }
    context.done(null, event); 
}
