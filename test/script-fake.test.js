const fs = require("fs");
const path = require("path");


test('check that file not empty', () => {
  const dataPath = path.join(__dirname, "result/data.json");

  resultData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  expect(Object.keys(resultData).length).not.toHaveLength(0);
});