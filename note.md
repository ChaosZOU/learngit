# note
## date(2019-03-21)
> 1. 学习了如何使用git以及关联github账号
---
## date(2019-03-22)
>1. photoshop快捷键
>       * 新建（CTRL+N）
>       * 移动工具（v）
>       * 选区工具（（shift） M）
>       * 自动选择（图层）
>       * 标尺（ctrl+r）
>       * 选区时正方形/圆形（shift alt中心点）
>       * 抓手(space)
>       * 放大缩小(h)
>       * 参考线(alt+v+e)  隐藏(ctrl+/)
>2. 
>       * 网页设计宽度1920px
>       * 分辨率72像素/英寸
>       * ***背景内容：透明***
>3. 大致完成考核任务切图
>4. 导航条制作
---
## date(2019-03-23)
>1. 制作网页顶部
>       * vertical-align:middle 行内元素的基线相对于该元素所在行的基线的垂直对齐
>       * text-decoration:none 去掉下划线
>2. 制作中间搜索框
>       * 搜索栏定位要先设置position:relative再移位，否则背景会跟着一起动
>       * 同行文字和图片对齐vertical-align:middle
>       * placeholder=""为文本框添加提示内容
---
## date(2019-03-24)
>1. 制作侧边栏
>       * 用list-style:none标签来隐藏图片，然后在嵌套列表头处加a：hover的css；
>       * 侧边栏代码要放在最下面，否则隐藏的图片显示时会被覆盖
>       * 用position:fixed使侧边栏始终在页面固定位置
---
## date(2019-03-25)
>1. 制作资讯栏
>       * 最左侧四个选项的列表边框要在li处添加css，在ul处添list-style-type:none去掉列表前面的小点。
>2. 制作资讯框
>       * 要跟资讯栏用一个大的div包起来再用float:left两个才会挨在一起。
>       * 将资讯框分成四个小div分别添加图片和内容。
>3. 制作底部栏
>       * 要先设定每个小块恒定的宽度，再在每个小的div添加图片和文字，用float:left使文字在图片右侧，同时也使每个div能够挨在一起行排列（用display：inline-block两个小div中间会用间隙，不是margin）
---
## date(2019-03-26)
>* 学习JS
>   * document.write() 仅仅向文档输出写内容
>   * console.log() 在浏览器中显示 JavaScript 值
>   * 字面量：
>       * 数字（Number）字面量 可以是整数或者是小数，或者是科学计数(e)
>       * 字符串（String）字面量 使用单引号或双引号包起来
>       * 表达式字面量 e.g.5+6(会直接显示计算结果)
>       * 数组（Array）字面量 [40, 100, 1, 5, 25, 10]
>       * 对象（Object）字面量 {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
>       * 函数（Function）字面量 function myFunction(a, b) { return a * b;}
>   * 使用关键字 var 来定义变量， 使用等号来为变量赋值
>   * 语句是用分号分隔
>   *  // 后的内容将会被浏览器
>   * 函数 getElementById 与 getElementbyID 是不同的
>   * JavaScript 会忽略多余的空格
>   * 变量必须以字母开头  变量也能以 $ 和 _ 符号开头 变量名称对大小写敏感
>   * var carname="Volvo"; var carname;carname的值仍然是“Volvo”
>   * 通过将变量的值设置为 null 来清空变量
>   * avaScript 对象是变量的容器。
>   * 在 func() 被第一次调用之前， undefined_var 变量是不存在的即 undefined。func() 被调用过之后，undefined_var 成为全局变量。
>   * let 的声明方式与 var 相同，用 let 来代替 var 来声明变量，就可以把变量限制在当前代码块中。
使用 const 声明的是常量，其值一旦被设定便不可被更改。
>   * onchange  onclick	 onmouseover  onmouseout  onkeydown	 onload	
>   * 'It\'s alright'添加转义字符来使用引号
>   * === 为绝对相等，即数据类型与值都必须相等。
>   * for/in 语句循环遍历对象的属性
>   * 设置为 null 来清空对象,当使用完一个比较大的对象时，需要对其进行释放内存时，设置为 null。
>   * 是所有没有赋值变量的默认值，自动赋值。任何变量都可以通过设置值为 undefined 来清空。
---
## date(2019-03-27)
>* 学习JS
>   * 5 种不同的数据类型:string number(NaN) boolean(true false) object(null) function
>   * 3 种对象类型：Object Date Array
>   * 2 个不包含任何值的数据类型：null  undefined
>   * constructor 属性返回所有 JavaScript 变量的构造函数。
>   * String() 可以将数字转换为字符串。
>   * "+"可用于将变量转换为数字
---
## date(2019-03-28)
>   * 在咨询栏处用js制作内容切换部分(JS甚至可以对一整个div作用！??)
---
## date(2019-03-29)
>* 学transition想把侧边栏隐藏列表换成transition，虽然最后还是没换
>* 最后调整考核作品



    
