import{_ as n,o as s,c as a,e as o}from"./app-d85a60fe.js";const p={},t=o(`<h1 id="_14-讲-更接近业务的抽象-让自动化测试脚本更好地描述业务" tabindex="-1"><a class="header-anchor" href="#_14-讲-更接近业务的抽象-让自动化测试脚本更好地描述业务" aria-hidden="true">#</a> 14 讲：更接近业务的抽象：让自动化测试脚本更好地描述业务</h1><p>在上一篇文章中，我介绍了 GUI 自动化测试中的两个主要的概念“脚本与数据的解耦 ”以及“ 页面对象模型”。在引入“操作函数”封装时，我提到操作函数在改善测试脚本可读性问题的同时，也引入了两个新的问题，即： 如何把控操作函数的粒度，以及如何衔接两个操作函数之间的页面。</p><p>现在，我就以这两个问题作为引子，为你介绍 GUI 自动化测试中“业务流程（business flow）”的概念、核心思想以及应用场景。</p><p><strong>如何把控操作函数的粒度？</strong><strong>操作函数的粒度是指，一个操作函数到底应该包含多少操作步骤才是最合适的</strong>。</p><ul><li>如果粒度太大，就会降低操作函数的可重用性。极端的例子就是，前面文章中涉及的百度搜索的案例，把“登录”“搜索”“登出”的操作作为一个操作函数。</li><li>如果粒度太小，也就失去了操作函数封装的意义。极端的例子就是，把每一个步骤都作为一个操作函数。</li><li>更糟糕的是，在企业实际自动化测试开发中，每个测试工程师对操作函数的粒度理解也不完全相同，很有可能出现同一个项目中脚本粒度差异过大，以及某些操作函数的可重用性低的问题。</li></ul><p><strong>那么，操作函数的粒度到底应该如何控制呢？其实这个问题，在很大程度上取决于项目的实际情况，以及测试用例步骤的设计，并没有一个放之四海而皆准的绝对标准</strong>。</p><p>但是，脚本粒度的控制还是有设计依据可以遵循的，即往往以完成一个业务流程（business flow）为主线，抽象出其中的“高内聚低耦合”的操作步骤集合，操作函数就由这些操作步骤集合构成。</p><p>比如，对于“用户注册”这个业务流程，其中的“信用卡绑定”操作就会涉及多个操作步骤，而这些操作在逻辑上又是相对独立的，所以就可以包装成一个操作函数。也就是说，业务流程会依次调用各个操作函数，来完成具体的业务操作。</p><p><strong>如何衔接两个操作函数之间的页面？</strong></p><p>完成一个业务流程操作，往往会需要依次调用多个操作函数，但是操作函数和操作函数之间会有页面衔接的问题，即前序操作函数完成后的最后一个页面，必须是后续操作函数的第一个页面。</p><p>如果连续的两个操作函数之间无法用页面衔接，那就需要在两个操作函数之间加入额外的页面跳转代码，或者是在操作函数内部加入特定的页面跳转代码。</p><p><strong>业务流程抽象</strong></p><p>在解决如何把控操作函数的粒度，以及如何衔接两个操作函数之间的页面这两个问题的过程中，我引入了业务流程的概念。那么，接下来我就跟你详细说说什么是业务流程。</p><p><strong>业务流程抽象是，基于操作函数的更接近于实际业务的更高层次的抽象方式。基于业务流程抽象实现的测试用例往往灵活性会非常好，你可以很方便地组装出各种测试用例</strong>。</p><p>这个概念有点拗口，难以理解。但是，没关系，我举个例子，你就豁然开朗了。</p><p>假设，某个具体的业务流程是：已注册的用户登录电商平台购买指定的书籍。那么，基于业务流程抽象的测试用例伪代码，如图 1 所示。 <img src="https://static001.geekbang.org/resource/image/a7/46/a7b02e628552dd97070c90058b755a46.png" alt="基于业务流程抽象的测试用例伪代码"></p><p>这段伪代码的信息量很大，但是理解了这段代码的设计思想，你也就掌握了业务流程抽象的精髓。</p><p><strong>首先，从整体结构上看，段伪代码顺序调用了 4 个业务流程</strong>， 依次是完成用户登录的 LoginFlow、完成书籍查询的 SearchBookFlow、完成书籍购买的 CheckoutBookFlow、完成用户登出的 LogoutFlow。</p><p>这 4 个业务流程都是作为独立的类封装的，可以被很方便的重用并灵活组合，类的内部实现通常是调用操作函数。而操作函数内部，则是基于页面对象模型完成具体的页面控件操作。</p><p><strong>然后，对于每一个业务流程类，都会有相应的业务流程输入参数类与之一一对应。具体的步骤通常有这么几步</strong>：</p><ol><li>初始化一个业务流程输入参数类的实例；</li><li>给这个实例赋值；</li><li>用这个输入参数实例来初始化业务流程类的实例；</li><li>执行这个业务流程实例。</li></ol><p><strong>执行业务流程实例的过程，其实就是调用操作函数来完成具体的页面对象操作的过程</strong>。</p><p>为了让你更好地理解业务流程抽象提供了哪些功能，接下来我会为你逐行解读这段伪代码。</p><p><strong>伪代码的第 2-6 行，调用的是 LoginFlow，完成了用户登录的操作</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">2</span><span class="token operator">:</span> <span class="token class-name">LoginFlowParameters</span> loginFlowParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginFlowParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token operator">:</span> loginFlowParameters<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4</span><span class="token operator">:</span> loginFlowParameters<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">5</span><span class="token operator">:</span> <span class="token class-name">LoginFlow</span> loginFlow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginFlow</span><span class="token punctuation">(</span>loginFlowParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">6</span><span class="token operator">:</span> loginFlow<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 2 行，初始化了 LoginFlow 对应的 LoginFlowParameters 的实例。</p><p>第 3-4 行，通过 setUserName 和 setPassword 方法将用户名和密码传入该参数实例。</p><p>第 5 行，用这个已经赋值的参数实例来初始化 LoginFlow。</p><p>第 6 行，通过 execute 方法发起执行。执行之后，LoginFlow 会调用内部的操作函数，或者直接调用页面对象方法，完成用户登录的操作。</p><p><strong>伪代码的第 9-12 行，用和 2-6 行类似的方式调用了 SearchBookFlow，完成了书籍搜索的操作。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">9</span><span class="token operator">:</span> <span class="token class-name">SearchBookFlowParameters</span> searchBookFlowParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchBookFlowParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">10</span><span class="token operator">:</span> searchBookFlowParameters<span class="token punctuation">.</span><span class="token function">setBookName</span><span class="token punctuation">(</span><span class="token string">&quot;bookname&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">11</span><span class="token operator">:</span> <span class="token class-name">SearchBookFlow</span> searchBookFlow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchBookFlow</span><span class="token punctuation">(</span>searchBookFlowParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">12</span><span class="token operator">:</span> searchBookFlow<span class="token punctuation">.</span><span class="token function">withStartPage</span><span class="token punctuation">(</span>loginFlow<span class="token punctuation">.</span><span class="token function">getEndPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要特别注意的是，第 12 行中 withStartPage(loginFlow.getEndPage())的含义是，SearchBookFlow 的起始页面将会使用之前 loginFlow 的结束页面。显然，通过这种方式可以很方便地完成两个业务流程之间的页面衔接。</p><p>同时，从中还可以看出，其实每个业务流程都可以接受不同的起始页面。以 SearchBookFlow 为例，它的起始页面既可以是书籍首页，也可以是其他页面，但是需要在它的内部对不同的初始页面做出相应的处理，以保证这个业务流程真正开始的页面是在书籍搜索页面。</p><p>同样，由于业务流程存在分支的可能性，每个业务流程执行完成的最终页面也不是唯一的，你可以使用 getEndPage 方法拿到这个业务流程执行结束后的最后页面。</p><p>通过这段代码的解读，你可以很清楚地理解，业务流程之间的页面衔接是如何实现的。</p><p><strong>伪代码的第 15-18 行，调用了 CheckoutBookFlow，完成了书籍购买操作。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">15</span><span class="token operator">:</span> <span class="token class-name">CheckoutBookFlowParameters</span> checkoutBookFlowParameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheckoutBookFlowParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">16</span><span class="token operator">:</span> checkoutBookFlowParameters<span class="token punctuation">.</span><span class="token function">setBookID</span><span class="token punctuation">(</span>searchBookFlow<span class="token punctuation">.</span><span class="token function">getOutPut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBookID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">17</span><span class="token operator">:</span> <span class="token class-name">CheckoutBookFlow</span> checkoutBookFlow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheckoutBookFlow</span><span class="token punctuation">(</span>checkoutBookFlowParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">18</span><span class="token operator">:</span> checkoutBookFlow<span class="token punctuation">.</span><span class="token function">withStartPage</span><span class="token punctuation">(</span>searchBookFlow<span class="token punctuation">.</span><span class="token function">getEndPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 15 行，初始化了 CheckoutBookFlow 对应的 checkoutBookFlowParameters 的实例。</p><p>第 16 行，通过 setBookID(searchBookFlow.getOutPut().getBookID())，将上一个业务流程 searchBookFlow 的输出参数，作为了当前业务流程的输入参数。这是典型的业务流程之间如何传递参数的示例，也是很多测试场景中都要用到的。</p><p>第 17 行，用 checkoutBookFlowParameters 参数实例来初始化 checkoutBookFlow。</p><p>第 18 行，通过 execute 方法发起执行。这里需要注意的是，checkoutBookFlow 的起始页面将会使用之前 searchBookFlow 的结束页面。开始执行后，checkoutBookFlow 会调用内部的操作函数，或者直接调用页面对象方法，完成书籍的购买操作。</p><p><strong>伪代码的第 21-22 行，调用 LogoutFlow，完成了用户登出操作。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">21</span><span class="token operator">:</span> <span class="token class-name">LogoutFlow</span> logoutFlow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LogoutFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">22</span><span class="token operator">:</span> logoutFlow<span class="token punctuation">.</span><span class="token function">withStartPage</span><span class="token punctuation">(</span>checkoutBookFlow<span class="token punctuation">.</span><span class="token function">getEndPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第 21 行，由于 LogoutFlow 不带参数，所以直接初始化了 LogoutFlow。</p><p>第 22 行，通过 execute 方法发起执行。这里 LogoutFlow 的起始页面将会使用之前 CheckoutBookFlow 的结束页面。开始执行后，LogoutFlow 会调用内部的操作函数，或者直接调用页面对象方法，完成用户登出操作。</p><p>通过对这些代码的解读，我解释了业务流程是什么，并从使用者的角度分析了它的主要特点。比如，如何实现不同业务流程间的页面衔接，如何在不同的业务流程间传递参数等。</p><p>为了加深印象，我再来总结一下业务流程的优点：</p><ul><li>业务流程（Business Flow）的封装更接近实际业务；</li><li>基于业务流程的测试用例非常标准化，遵循“参数准备”、“实例化 Flow”和“执行 Flow”这三个大步骤，非常适用于测试代码的自动生成；</li><li>由于更接近实际业务，所以可以很方便地和 BDD 结合。BDD 就是 Behavior Driven Development，即行为驱动开发，我会在后续文章中详细讲解。</li></ul><p><strong>总结</strong></p><p>我以如何把控操作函数的粒度，和如何衔接两个操作函数之间的页面，这两个问题为引子，为你介绍了业务流程的概念、核心思想和适用的场景。</p><p>业务流程抽象是，基于操作函数的更接近于实际业务的更高层次的抽象方式。基于业务流程抽象实现的测试用例往往具有较好的灵活性，可以根据实际测试需求方便地组装出各种测试用例。</p><p>业务流程的核心思想是，从业务的维度来指导测试业务流程的封装。由于业务流程封装通常很贴近实际业务，所以特别适用于组装面向终端用户的端到端（E2E）的系统功能测试用例，尤其适用于业务功能非常多，并且存在各种组合的 E2E 测试场景。</p><p><strong>思考题</strong></p><p>你所在公司的 GUI 自动化测试是否已经运用了业务流程级别的封装？在使用过程中，你是否遇到什么瓶颈，是如何解决的？</p>`,54),e=[t];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","14.html.vue"]]);export{r as default};
