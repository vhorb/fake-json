# fake-json
Generate json from provided schema   
Result generated and saved in folder: [result](/result)

### Solution #1
This solution used existing solution, which exist in JS librariy - [JSON-Faker](https://json-schema-faker.js.org/)

prerequisite:
```
npm i json-schema-faker
```

to run script:
```
node script-fake.js
```

### Solution #2 - WIP
This solution built on Typescript. Existing schema transformed to Types and after this generated the object and saved to file.
```
script-ts.ts
```

### Solution #3 
This solution need additional transformation of JSON schema to JSON instance.   
To run this script:
```
node script-random.js
```
Additionally, result output will be in console.