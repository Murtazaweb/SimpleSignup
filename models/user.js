/**
 * Created by DELL on 29/11/2014.
 */
/**
 * Created by DELL on 26/11/2014.
 */
module.exports = {
    identity: 'user',

    connection: 'mysqlDB',
    schema:true,
    migrate: 'alter',

    attributes: {
        USERNAME1: 'string',
        PASSWORD1: 'string',
        AGE1:'string'

    }
};
