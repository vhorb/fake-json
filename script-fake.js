const jsf = require("json-schema-faker");
const fs = require("fs");
const path = require("path");

const schema = JSON.parse(
  fs.readFileSync(path.join(__dirname, "schema/schema.json"), "utf8")
);
const dataPath = path.join(__dirname, "result/data.json");

const data = {};

async function main() {
  let currentData;
  if (fs.existsSync(dataPath)) {
    currentData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  }

  const entries = Object.entries(schema.definitions);

  for (const [key, value] of entries) {
    if (currentData && currentData[key]) {
      console.log("Using existing data for", key);
      data[key] = currentData[key];
      continue;
    }

    const injected = {
      ...value,
      definitions: schema.definitions,
    };

    // use the async-version (preferred way)
    const sample = await jsf.resolve(injected);
    data[key] = sample;
  }

  const outputJson = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataPath, outputJson);
}

main();