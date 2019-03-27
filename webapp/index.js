exports.handler = function(event, context, callback) {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log("working");
    return "test"; // Echo back the first key value
    // throw new Error('Something went wrong');
};