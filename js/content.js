"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const someArray = [1, "string", false];
        for (const entry of someArray) {
            res.write("<p>" + entry + "<p>"); // 1, "string", false
        }
        let list = [4, 5, 6];
        for (let i in list) {
            res.write("<p>" + i + "<p>");
        }
        for (let i of list) {
            res.write("<p>" + i + "<p>"); // "4", "5", "6"
        }
        let pets = new Set(["Cat", "Dog", "Hamster"]);
        pets["species"] = "mammals";
        for (let pet in pets) {
            res.write("<p>" + pet + "<p>");
        }
        for (let pet of pets) {
            res.write("<p>" + pet + "<p>"); // "Cat", "Dog", "Hamster"
        }
        if (2 % 2 === 0) {
            res.write("<p>Páros</p>");
        }
        res.write("<b>GitHub repository:</b><br>");
        res.write("<a href='https://github.com/bencekovacs322/Ciklusok' target='_blank'>" +
            "https://github.com/bencekovacs322/Ciklusok</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map