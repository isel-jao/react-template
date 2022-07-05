const { writeFile } = require("fs");
console.clear();
const colors = require("./color");

let content = "$colors: (\n";
Object.entries(colors).forEach(([color, variants]) => {
  if (typeof variants === "object") {
    Object.entries(variants).forEach(([key, value]) => {
      content += `\t${color}-${key}: ${value},\n`;
    });
  } else content += `\t${color}:\t${variants},\n`;
});
content += ");\n";

console.log(content);
writeFile("./src/sass/_colors.scss", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("The file was saved!");
  }
});
