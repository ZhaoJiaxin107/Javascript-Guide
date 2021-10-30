### 对象
1. 复合值
2. 属性的无序集合
3. 操作: 设置、查询、删除、测试和枚举

### 关联数组
通过方括号表示法访问对象属性时, 属性名通过字符串来表示
因此可以在程序运行期间修改和创建
```
  let addr= "";
  for(let i = 0; i < 4; i++) {
      addr += customer[`address${i}`] + "\n"
  }
```

允许用户填写自己持有的每只股票的名字和数量,
假设使用名为protfolio的对象来保存这些信息，该对象对每只股票都有一个属性，
其每个属性名都是股票的名字，而属性值就是该股票的数量

```
function addstock(portfolio, stockname, shares){
    portfolio[stockname] = shares
}
```

```
function computeValue(portfolio){
    let total = 0.0;
    for(let stocks in portfolio){
        let shares = portfolio[stock];
        let price = getQuote(stock);
        total += shares * price;
    }
    return total;
}
```

### 属性访问错误
* 如果在o的自有属性和继承属性中都没找到属性x, 则属性访问表达式o.x的求值结果为undefined
* 查询不存在对象的属性则为错误

```
let surname= book && book.author && book.author,surname

let surname= book?.author?.surname
```
