const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "result/data.json");

let schema = {
  "userId": "number",
  "access": ['view', 'modify', 'sign', 'execute'],
  "formAccess": ['view', 'execute', 'execute_view']
}

function generate(schemaValue) {
  let value;
  if (Array.isArray(schemaValue)) {
    value = schemaValue[Math.floor(Math.random() * schemaValue.length)]
  }
  switch (schemaValue) {
    case "string":
      value = (Math.random() + 1).toString(36).substring(7);
      break;
    case "number":
      value = Math.floor(Math.random() * 500 + 1);
      break;
  }
  return value;
}

let attendee = {}
Object.entries(schema).map((pair) => attendee[pair[0]] = generate(pair[1]),);

let result = {"attendee": attendee};
console.log(result);
const outputJson = JSON.stringify(result, null, 2);
fs.writeFileSync(dataPath, outputJson);
