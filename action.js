const https = require("https");
const fs = require("fs");

https.get("https://www.khanacademy.org/api/internal/scratchpads/top?casing=camel&sort=3&page=0&limit=30",
  res => {
    let chunks = "";
    
    res.on("data", (ata => {
      chunks += data;
    });
    
    res.on("end", e => {
      let hotlistData = JSON.stringify(JSON.parse(chunks));//validates the JSON.
  
      fs.writeFileSync(`./data/${new Date().toISOString().slice(2,10)}.json`,hotlistData);
    });
  }
);
