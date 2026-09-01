const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", (err) => {
  if (err) return console.log("Error creating file:", err);
  console.log("File Created");

  // Read
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) return console.log("Error reading file:", err);
    console.log("Reading File");
    console.log(data);

    // Update (append)
    fs.appendFile(fileName, "\nLearning FS Module", (err) => {
      if (err) return console.log("Error updating file:", err);
      console.log("File Updated");

      fs.readFile(fileName, "utf8", (err, data) => {
        console.log(data);

        // Delete
        fs.unlink(fileName, (err) => {
          if (err) return console.log("Error deleting file:", err);
          console.log("File Deleted");
        });
      });
    });
  });
});