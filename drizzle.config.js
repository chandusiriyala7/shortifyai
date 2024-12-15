/** @type {import("drizzle-kit").Config} */

export default{
    schema : "./configs/schema.js",
    dialect : 'postgresql',
    dbCredentials : {
        url : 'postgresql://shortifydb_owner:Dy3cTZJnkfp6@ep-purple-glade-a53iszwn.us-east-2.aws.neon.tech/shortifydb?sslmode=require',
    }
};