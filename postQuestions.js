console.log('Loading function');

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: event.key1
    }
    // throw new Error('Something went wrong');
};
