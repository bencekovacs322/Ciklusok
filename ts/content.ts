import * as http from "http";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
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

        var numbers = [1, 2, 3];
for (var _i = 0; _i < numbers.length; _i++) {
    var num = numbers[_i];
    res.write("<p>" + num + "<p>");
}
        
        if (2 % 2 === 0) {
            res.write("<p>Páros</p>");
        }

        var num = 5;
        var factorial = 1;
        while (num >= 1) {
            factorial = factorial * num;
            num--;
        }
        res.write("The factorial  is " + factorial);

        var n = 10;
        do {
            res.write("<p>" + n + "<p>");
            n--;
        } while (n >= 0);



        res.write("<b>GitHub repository:</b><br>");
        res.write("<a href='https://github.com/bencekovacs322/Ciklusok' target='_blank'>" +
            "https://github.com/bencekovacs322/Ciklusok</a><br>");
        res.end();

    }

}
