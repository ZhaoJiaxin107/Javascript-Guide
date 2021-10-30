// 1.获得一个属性的值
// (1) . (2) []
let book = {
  "main title": "Javascript",
  "sub title": "The definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};

let author = book.author;
console.log("author", author);
let name = author.surname;
console.log("name", name);
let title = book["main title"];
console.log("title", title);

// 创建或者设置属性
book.edition = 9
book["main title"] = "ECMASCript"
console.log("book===>", book);

