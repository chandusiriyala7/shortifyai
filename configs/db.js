import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
config({ path: ".env" });  
const sql = neon('postgresql://shortifydb_owner:Dy3cTZJnkfp6@ep-purple-glade-a53iszwn.us-east-2.aws.neon.tech/shortifydb?sslmode=require');
export const db = drizzle(sql);