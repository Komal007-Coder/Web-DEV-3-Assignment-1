const fs = require("fs");

const fileName = "test.txt";

// Create File
fs.writeFile(fileName, "Smart Utility Toolkit", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // Read File
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File content:", data);

        // Update File
        fs.appendFile(fileName, "\nFile updated successfully.", (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File updated successfully.");

            // Delete File 
            fs.unlink(fileName, (err) => {
                if (err) {
                    console.log("Error deleting file:", err.message);
                    return;
                }

                console.log("File deleted successfully.");
            });
        });
    });
});