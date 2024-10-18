import{_ as e,o as n,c as a,e as s}from"./app-d85a60fe.js";const i={},d=s(`<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h1><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2><ul><li>行尾使用两个空格加一个回车，即可换行。</li></ul><h2 id="mermaid-js" tabindex="-1"><a class="header-anchor" href="#mermaid-js" aria-hidden="true">#</a> mermaid-js</h2><p>https://mermaid-js.github.io/mermaid/#/</p><h2 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> Flow</h2><h3 id="样式流程图-mermaid" tabindex="-1"><a class="header-anchor" href="#样式流程图-mermaid" aria-hidden="true">#</a> 样式流程图（mermaid）</h3><ul><li><p><code>graph</code> 指定流程图方向：<code>graph LR</code> 横向， <code>graph TD</code> 纵向</p></li><li><p>元素形状的定义</p><ul><li><code>id[描述]</code> 以直角矩形绘制</li><li><code>id(描述)</code> 以圆角矩形绘制</li><li><code>id{描述}</code> 以菱形绘制</li><li><code>id&gt;描述]</code> 以不对称矩形绘制</li><li><code>id((描述))</code> 以圆形绘制</li></ul></li><li><p>线条定义</p><ul><li><p><code>A--&gt;B</code> 带箭头指向</p></li><li><p><code>A---B</code> 不带箭头连接</p></li><li><p><code>A-.-B</code> 虚线连接</p></li><li><p><code>A-.-&gt;B</code> 虚线指向</p></li><li><p><code>A==&gt;B</code> 加粗箭头指向</p></li><li><p><code>A--描述---B</code> 不带箭头指向并在线段中间添加描述</p></li><li><p><code>A--描述--&gt;B</code> 带描述的箭头指向</p></li><li><p><code>A-.描述.-&gt;B</code> 带描述的虚线连指向</p></li><li><p><code>A==描述==&gt;B</code> 带描述的加粗箭头指向</p></li></ul></li><li><p>子流程定义：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>subgraph title
graph direction
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>​<span class="token code-snippet code keyword">\`mermaid graph LR A(开始) --&gt;B(起床) B --天气不好--- C&gt;干活] C ==&gt; D{休息时间到了} D -.yes.-&gt; E((休息)) D -.no.-&gt; C E --&gt; F(吃饭) ​\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    A<span class="token text string">(开始)</span> <span class="token arrow operator">--&gt;</span>B<span class="token text string">(起床)</span>
    B <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span><span class="token label property">天气不好</span><span class="token arrow operator">---</span></span> C<span class="token text string">&gt;干活]</span>
    C <span class="token arrow operator">==&gt;</span> D<span class="token text string">{休息时间到了}</span>
    D <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">yes</span><span class="token arrow operator">.-&gt;</span></span> E<span class="token text string">((休息))</span>
    D <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">-.</span><span class="token label property">no</span><span class="token arrow operator">.-&gt;</span></span> C
    E <span class="token arrow operator">--&gt;</span> F<span class="token text string">(吃饭)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="标准流程图-flow" tabindex="-1"><a class="header-anchor" href="#标准流程图-flow" aria-hidden="true">#</a> 标准流程图（flow）</h3><ul><li><p><code>graph</code> 指定流程图方向：<code>graph LR</code> 横向，<code>graph TD</code> 纵向</p></li><li><p>元素的定义</p><ul><li><code>id[描述]</code> 以直角矩形绘制</li><li><code>id(描述)</code> 以圆角矩形绘制</li><li><code>id{描述}</code> 以菱形绘制</li><li><code>id&gt;描述]</code> 以不对称矩形绘制</li><li><code>id((描述))</code> 以圆形绘制</li></ul></li><li><p>线条定义</p><ul><li><code>A--&gt;B</code> 带箭头指向</li><li><code>A---B</code> 不带箭头连接</li><li><code>A-.-B</code> 虚线连接</li><li><code>A-.-&gt;B</code> 虚线指向</li><li><code>A==&gt;B</code> 加粗箭头指向</li><li><code>A--描述---B</code> 不带箭头指向并在线段中间添加描述</li><li><code>A--描述--&gt;B</code> 带描述的箭头指向</li><li><code>A-.描述.-&gt;B</code> 带描述的虚线连指向</li><li><code>A==描述==&gt;B</code> 带描述的加粗箭头指向</li></ul></li><li><p>子流程定义</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>subgraph title
graph direction
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>​\`\`\`flow
st=&gt;start: 开始
ipt=&gt;inputoutput: 输入一个 x
op=&gt;operation: 处理加工 x+1
cond=&gt;condition: 溢出（是或否？）
sub=&gt;subroutine: 子流程
io=&gt;inputoutput: 输出 x
ed=&gt;end: 结束

st-&gt;ipt-&gt;op-&gt;cond
cond(yes)-&gt;io-&gt;ed
cond(no)-&gt;sub-&gt;io-&gt;ed
​\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>st<span class="token operator">=&gt;</span>start<span class="token operator">:</span> 开始
ipt<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> 输入一个x
op<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 处理加工x<span class="token operator">+</span><span class="token number">1</span>
cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> 溢出（是或否？）
sub<span class="token operator">=&gt;</span>subroutine<span class="token operator">:</span> 子流程
io<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> 输出x
ed<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束

st<span class="token operator">-</span><span class="token operator">&gt;</span>ipt<span class="token operator">-</span><span class="token operator">&gt;</span>op<span class="token operator">-</span><span class="token operator">&gt;</span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>io<span class="token operator">-</span><span class="token operator">&gt;</span>ed
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>sub<span class="token operator">-</span><span class="token operator">&gt;</span>io<span class="token operator">-</span><span class="token operator">&gt;</span>ed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="gantt" tabindex="-1"><a class="header-anchor" href="#gantt" aria-hidden="true">#</a> Gantt</h2><p>基本语法：</p><ul><li><p>使用 <code>mermaid</code> 解析语言，在开头使用关键字 <code>gantt</code> 指明</p></li><li><p><code>deteFormat 格式</code> 指明日期的显示格式</p></li><li><p><code>title 标题</code> 设置图标的标题</p></li><li><p><code>section 描述</code> 定义纵向上的一个环节</p></li><li><p>定义步骤：每个步骤有两种状态 <code>done</code> （已完成）/ <code>active</code>（执行中）</p><ul><li><code>描述: 状态,id,开始日期,结束日期/持续时间</code></li><li><code>描述: 状态[,id],after id2,持续时间</code></li><li><code>crit</code> ：可用于标记该步骤需要被修正，将高亮显示</li><li>如果不指定具体的开始时间或在某个步骤之后，将默认依次顺序排列</li></ul></li><li><p>示例</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>​\`\`\`mermaid
gantt
dateFormat YYYY-MM-DD

<span class="token code keyword">        title 软件开发甘特图</span>

<span class="token code keyword">        section 设计
        需求:done,des1, 2019-01-06,2019-01-08
        原型:active,des2, 2019-01-09, 3d
        UI设计:des3, after des2, 5d
        未来任务:des4, after des3, 5d</span>

<span class="token code keyword">        section 开发
        理解需求:crit, done, 2019-01-06,48h
        设计框架:crit, done, after des2, 2d
        开发:crit, active, 3d
        未来任务:crit, 5d
        休息时间:2d</span>

<span class="token code keyword">        section 测试
        功能测试:active, a1, after des3, 3d
        压力测试:after a1, 40h
        测试报告: 48h</span>

​\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">gantt</span>
        dateFormat  YYYY-MM-DD

        title 软件开发甘特图

        section 设计
        需求<span class="token operator">:</span>done,des1, 2019-01-06,2019-01-08
        原型<span class="token operator">:</span>active,des2, 2019-01-09, 3d
        UI设计<span class="token operator">:</span>des3, after des2, 5d
        未来任务<span class="token operator">:</span>des4, after des3, 5d

        section 开发
        理解需求<span class="token operator">:</span>crit, done, 2019-01-06,48h
        设计框架<span class="token operator">:</span>crit, done, after des2, 2d
        开发<span class="token operator">:</span>crit, active, 3d
        未来任务<span class="token operator">:</span>crit, 5d
        休息时间<span class="token operator">:</span>2d

        section 测试
        功能测试<span class="token operator">:</span>active, a1, after des3, 3d
        压力测试<span class="token operator">:</span>after a1, 40h
        测试报告<span class="token operator">:</span> 48h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="sequence" tabindex="-1"><a class="header-anchor" href="#sequence" aria-hidden="true">#</a> Sequence</h2><h3 id="标准时序图" tabindex="-1"><a class="header-anchor" href="#标准时序图" aria-hidden="true">#</a> 标准时序图</h3><p>基本语法</p><ul><li><p><code>Title:标题</code> ：指定时序图的标题</p></li><li><p><code>Note direction of 对象:描述</code> ： 在对象的某一侧添加描述，<code>direction</code> 可以为 <code>right/left/over</code> ， <code>对象</code> 可以是多个对象，以 <code>,</code> 作为分隔符</p></li><li><p><code>participant 对象</code> ：创建一个对象</p></li><li><p><code>loop...end</code> ：创建一个循环体</p></li><li><p><code>对象A-&gt;对象B:描述</code> ： 绘制 A 与 B 之间的对话，以实线连接</p><ul><li><code>-&gt;</code> 实线实心箭头指向</li><li><code>--&gt;</code> 虚线实心箭头指向</li><li><code>-&gt;&gt;</code> 实线小箭头指向</li><li><code>--&gt;&gt;</code> 虚线小箭头指向</li></ul></li><li><p>示例</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>​<span class="token code-snippet code keyword">\`sequence Title:时序图示例 客户端-&gt;服务端: 我想找你拿下数据 SYN 服务端--&gt;客户端: 我收到你的请求啦 ACK+SYN 客户端-&gt;&gt;服务端: 我收到你的确认啦，我们开始通信吧 ACK Note right of 服务端: 我是一个服务端 Note left of 客户端: 我是一个客户端 Note over 服务端,客户端: TCP 三次握手 participant 观察者 ​\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sequence line-numbers-mode" data-ext="sequence"><pre class="language-sequence"><code>Title:时序图示例
客户端-&gt;服务端: 我想找你拿下数据 SYN
服务端--&gt;客户端: 我收到你的请求啦 ACK+SYN
客户端-&gt;&gt;服务端: 我收到你的确认啦，我们开始通信吧 ACK
Note right of 服务端: 我是一个服务端
Note left of 客户端: 我是一个客户端
Note over 服务端,客户端: TCP 三次握手
participant 观察者
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="带样式的时序图" tabindex="-1"><a class="header-anchor" href="#带样式的时序图" aria-hidden="true">#</a> 带样式的时序图</h3><p>基本语法同标准时序图</p><ul><li><p>需要使用 <code>mermaid</code> 解析，并在开头使用关键字 <code>sequenceDiagram</code> 指明</p></li><li><p>线段的样式遵循 <code>mermaid</code> 的解析方式</p><ul><li><p><code>-&gt;</code> ： 实线连接</p></li><li><p><code>--&gt;</code> ：虚线连接</p></li><li><p><code>-&gt;&gt;</code> ：实线箭头指向</p></li><li><p><code>--&gt;&gt;</code> ：虚线箭头指向</p></li><li><p>实例</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>​<span class="token code-snippet code keyword">\`mermaid sequenceDiagram 对象A-&gt;对象B:中午吃什么？ 对象B-&gt;&gt;对象A: 随便 loop 思考 对象A-&gt;对象A: 努力搜索 end 对象A--&gt;&gt;对象B: 火锅？ 对象B-&gt;&gt;对象A: 可以 Note left of 对象A: 我是一个对象A Note right of 对象B: 我是一个对象B participant 对象C Note over 对象C: 我自己说了算 ​\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
对象A<span class="token arrow operator">-&gt;</span>对象B<span class="token operator">:</span>中午吃什么？
对象B<span class="token arrow operator">-&gt;&gt;</span>对象A<span class="token operator">:</span> 随便
<span class="token keyword">loop</span> 思考
    对象A<span class="token arrow operator">-&gt;</span>对象A<span class="token operator">:</span> 努力搜索
<span class="token keyword">end</span>
对象A<span class="token arrow operator">--&gt;&gt;</span>对象B<span class="token operator">:</span> 火锅？
对象B<span class="token arrow operator">-&gt;&gt;</span>对象A<span class="token operator">:</span> 可以
<span class="token keyword">Note left of</span> 对象A<span class="token operator">:</span> 我是一个对象A
<span class="token keyword">Note right of</span> 对象B<span class="token operator">:</span> 我是一个对象B
<span class="token keyword">participant</span> 对象C
<span class="token keyword">Note over</span> 对象C<span class="token operator">:</span> 我自己说了算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,20),l=[d];function o(r,t){return n(),a("div",null,l)}const p=e(i,[["render",o],["__file","markdown.html.vue"]]);export{p as default};
