# BriefBook

react 开发简书项目

<h2>3-1 使用React编写TodoList功能</h2>
<p>Fragment的使用</p>
<h2>3-4 JSX语法细节补充</h2>
<p>dangerouslySetInnerHTML的使用：<li dangerouslySetInnerHTML={{__html:item}}></li></p>
<p>label标签的for替换成htmlFor</p>
<h2>4-4 React 中的虚拟DOM</h2>
<h3>普通DOM操作</h3>
<p>1.state数据</p>
<p>2.jsx模板</p>
<p>3.数据+模板 结合，生成真实的DOM，来显示</p>
<p>4.state发生改变</p>
<p>5.数据+模板 结合生成真实的DOM ，替换原始的DOM</p>
<h3>缺陷</h3>
<p>第一次生成了一个完整的DOM片段</p>
<p>第二次生成了一个完整的DOM片段</p>
<p>第二次生成的DOM替换第一次的DOM，非常耗性能</p>
<h3>对比dom</h3>
<p>1.state数据</p>
<p>2.jsx模板</p>
<p>3.数据+模板 结合，生成真实的DOM，来显示</p>
<p>4.state发生改变</p>
<p>5.数据+模板 结合生成真实的DOM ，并不直接替换原始的DOM</p>
<p>6.新的DOM和原始的DOM做比对，找差异</p>
<p>7.找出发生的变化</p>
<p>8.只用变化的新的DOM提花老的DOM</p>

<h3>react中虚拟dom</h3>
<p>1.state数据</p>
<p>2.jsx模板</p>
<p>3.数据+模板 结合，生成真实的DOM，来显示</p>
<div id='abc'><span>hello word</span></div>
<p>4.生成虚拟dom(虚拟dom就是一个js对象，用它来描述真实dom)</p>
['div',{id:'abc'},['span',{},'hello word']]
<p>5.state发生变化</p>
<p>6.数据+模板生成新的虚拟dom</p>
['div',{id:'abc'},['span',{},'bye bye']]
<p>7.比较原始虚拟dom和新的虚拟dom的区别，找出却别是span中的内容(极大的提高了性能)</p>
<p>8.直接操作dom，改变span中的内容</p>

<h2>4-5 深入了解虚拟DOM</h2>
<p>1.state数据</p>
<p>2.jsx模板</p>

<p>3.生成虚拟dom(虚拟dom就是一个js对象，用它来描述真实dom)</p>
['div',{id:'abc'},['span',{},'hello word']]

<p>4.用虚拟dom的结构生成真实的dom来显示</p>
<div id='abc'><span>hello word</span></div>

<p>5.state发生变化</p>
<p>6.数据+模板生成新的虚拟dom</p>
['div',{id:'abc'},['span',{},'bye bye']]
<p>7.比较原始虚拟dom和新的虚拟dom的区别，找出却别是span中的内容(极大的提高了性能)</p>
<p>8.直接操作dom，改变span中的内容</p>
<h2> 6-2 无状态组件</h2>
<p>无状态组件就是一个函数，接收一个props参数，后面使用的props都不带this(如果一个组件只有一个render函数，就可以使用无状态组件，无状态组件 性能更好)</p>

<h2>6-5 什么是Redux的中间件</h2>
<p>redux中间件指的是action和store之间，就是对dispatch的封装</p>