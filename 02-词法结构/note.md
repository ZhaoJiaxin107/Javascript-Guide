### 1.Javascript程序的文本
1. 区分大小写：关键字、变量、函数名和其他标识必须保持一致的大小写形式
2. 忽略程序记号之间的空格，忽略换行符(即可以在程序中随意使用空格和换行)
3. 也将制表符、各种ASCII控制符和unicode间格识别为空格

### 2.注释
// 单行注释
/**/ 多行注释

### 3.字面量
1.概念: 字面量(literal)是一种直接出现在程序中的数据值
2.e.g.:12, 1.2 "hello world" "Hi" true false null

### 4.标识符和保留字
1.标识符：用于在javascript代码中命名变量，常量，属性，函数和类，以及为某些循环提供标记
2.规则：标识符必须以字母，数字，下划线(_)或美元符号($)开头
数字不能作为第一个字符
3.e.g.: i my_variable_name v13 _dummy $str
4.保留字：不能作为常规标识符使用
5.e.g.: as const export return of void while
P20

### 5.Unicode
js在字符串和注释中可以使用任意Unicode字符
这意味着常量或变量的名字中可以包含数学符号和非英语文字

#### 5.1 Unicode转义序列
使用ASCII字符来表示Unicode字符, \u开头，后跟4位十六进制数字
或者包含在一对花括号内的1-6位十六进制数字
Unicode转义序列也可以出现在注释中, 但因为注释会被忽略, 所以注释中的转义序列会被作为ASCII字符处理，不会被解释为Unicode

#### 5.2 Unicode归一化
Unicode 标准为所有字符定义了首选编码并规定了归一化进程, 用于把文本转换为适合比较的规范形式。

### 分号
1. 两条语句分别写在两行,通常可以省略他们之间的分号
2. 末尾右花括号}也可以省略分号
3. js只在下一个非空格字符无法被解释为当前语句的一部分才把换行符当做分号
4. 可以在所有语句前面都防御性地添加一个分号, 这样即使它前面的语句被修改, 删掉了
   之前末尾的分号, 也不会影响当前语句
5.(1).不能在return, break, 或continue等关键字和他们后面的表达式之间加入换行符
5.(2).++, --,这些操作符既可以放在前面，也可以放在表达式后面
5.(3)箭头=>必须和参数列表在同一行








