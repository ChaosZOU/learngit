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
---
---
## date(2019-04-06)
>   1. 学习flex布局
>       * 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效
>       * 容器的属性
>           * flex-direction属性决定主轴的方向（即项目的排列方向）。
>               * row↑主轴为水平方向，起点在左端
>               * row-reverse↓主轴为水平方向，起点在右端
>               * column→主轴为垂直方向，起点在上沿
>               * column-reverse←主轴为垂直方向，起点在下沿
>           * flex-wrap属性定义，如果一条轴线排不下，如何换行
>               * nowrap（默认）：不换行
>               * wrap：换行，第一行在上方
>               * wrap-reverse：换行，第一行在下方
>           * flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
>           * justify-content属性定义了项目在主轴上的对齐方式
>               * flex-start（默认值）：左对齐
>               * flex-end：右对齐
>               * center： 居中
>               * space-between：两端对齐，项目之间的间隔都相等。
>               * space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
>           * align-items属性定义项目在交叉轴上如何对齐。
>               * flex-start：交叉轴的起点对齐
>               * flex-end：交叉轴的终点对齐
>               * center：交叉轴的中点对齐
>               * baseline: 项目的第一行文字的基线对齐
>               * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度
>           * align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
>               * flex-start：与交叉轴的起点对齐。
>               * flex-end：与交叉轴的终点对齐。
>               * center：与交叉轴的中点对齐。
>               * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
>               * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
>               * stretch（默认值）：轴线占满整个交叉轴。
>       * 项目的属性
>           * order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
>           * flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
>           * flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
>           * flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间.默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
>           * flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
>           * align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
---
## date(2019-04-07)
>   1. 制作进度条
>   2. 看js dom这本书
---
## date(2019-04-08)
>   1. 修改进度条
>   2. 看js dom这本书 
---
## date(2019-04-14)
>   1. 写轮播图
---
## date(2019-04-15)
>   1. 写轮播图
## date(2019-04-16)
>   1. 写首页的静态页面
---
## date(2019-04-17)
>   1. 完成首页的自适应
---
## date(2019-04-18)
>   1. 用了position fixed之后浏览器滚动条消失
>   2. 阴影被遮住
---
## date(2019-04-18)
>   1. 首页过渡动画没做，按下回车搜索没做
>   2. 搜索页阴影问题没有解决
>   3. 搜索页js没写


    
