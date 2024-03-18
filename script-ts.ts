import fs = require('fs');
import path = require('path');

import { Meeting } from "./meeting";

type Schema = keyof Meeting | { [k: string]: Schema };

function generate<S extends Schema>(schema: S): TypeFrom<S>;
function generate(schema: Schema) {
  switch (schema) {
    case "string": return "";
    case "number": return 0;
    default: return Object.fromEntries(Object.entries(schema).map(([k, v]) => ([k, generate(v)])));
  }
}

const dataPath = path.join(__dirname, "result/data.json");

const meetingSchema = Schema();
const meeting: Meeting = generate(meetingSchema);

const outputJson = JSON.stringify(meeting, null, 2);
fs.writeFileSync(dataPath, outputJson);