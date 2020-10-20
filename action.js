const https = require("https");

https.get("https://www.khanacademy.org/api/internal/scratchpads/top?casing=camel&sort=3&page=0&limit=30",
  res => {
    let chunks = "";
    
    res.on("data", (ata => {
      chunks += data;
    });
    
    res.on("end", e => {
      console.log(e);
      console.log(JSON.parse(chunks));
    });
  }
);
