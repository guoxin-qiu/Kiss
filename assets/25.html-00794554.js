import{_ as n,o as s,c as a,e as p}from"./app-d85a60fe.js";const t={},e=p(`<h1 id="_25-讲-不破不立-掌握代码级测试的基本理念与方法" tabindex="-1"><a class="header-anchor" href="#_25-讲-不破不立-掌握代码级测试的基本理念与方法" aria-hidden="true">#</a> 25 讲：不破不立：掌握代码级测试的基本理念与方法</h1><p>你好，我是茹炳晟，今天我和你分享的主题是“不破不立：掌握代码级测试的基本理念与方法”。</p><p>我在第三篇文章《什么是单元测试？如何做好单元测试？》中，为你介绍了单元测试的基本概念和方法，和你聊到了单元测试用例的“输入数据”和“预计输出”，也谈到了驱动代码和桩代码，其实这些概念和方法在代码级测试中也是最基本的。</p><p>通常情况下，代码级测试的工作都是由开发人员完成，但是测试框架选型、覆盖率统计工具选型、测试用例设计原则等都需要资深的测试工程师或者测试架构师参与。</p><p>所以，<em>代码级测试这个系列，我会和你分享测试人员应该具备的代码级测试基础知识，为你呈现一幅包括代码级测试技术入门、方法论、用例设计，以及覆盖率衡量、典型难点、解决思路的全景技术视图</em>。</p><p>为了能更好地协助开发人员做好代码级测试，所以我今天的这次分享是根据实际工程项目中的实践，总结了五种常见的代码错误，以及对应的四大类代码级测试方法。</p><p>掌握了这些错误类型、测试方法，相信你就可以搞定代码级测试了，即使自己不用去完成测试工作，也可以让开发人员对你另眼相看，可以更高效地互相配合完成整个项目。</p><p>这里需要注意的是，<strong>代码级测试的测试方法一定是一套测试方法的集合，而不是一个测试方法</strong>。 因为单靠一种测试方法不可能发现所有潜在的错误，一定是一种方法解决一部分或者一类问题，然后综合运用多种方法解决全部问题。</p><p>本着先发现问题，然后解决问题的思路，我在正式介绍代码级测试方法之前，先来概括一下常见的代码错误类型，然后我们再一起讨论代码级测试有哪些方法。这样，我们就可以清晰地看出，每一种代码级测试方法都能覆盖哪些类型的代码错误。</p><p>根据过往的经验来看，代码错误，可以分为“有特征”的错误和“无特征”的错误两大类。“有特征”的错误，可进一步分为语法特征错误、边界行为错误和经验特征错误；“无特征”的错误，主要包括算法错误和部分算法错误。</p><p>接下来，我将和你详细说说这五类代码错误的具体含义是什么。</p><p><strong>常见代码错误类型</strong></p><p><strong>第一，语法特征错误</strong></p><p>语法特征错误是指，从编程语法上就能发现的错误。比如，不符合编程语言语法的语句等。</p><p>如果你使用 IDE 环境进行代码开发，那么 IDE 可以提示你大部分的这类错误，而且只有解决了这类错误，才能编译通过。但是，还会有一些比较隐晦的语法特征错误，IDE 不能及时发现，而且也不会影响编译，只会在运行阶段出错。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">demoMethod</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">88</span><span class="token punctuation">;</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，这段 C 语言代码就存在数据越界的问题。</p><p>很显然，你从语法上很容易就能发现，这段代码初始化了一个长度为 10 的整型数组 a，但数组下标从 0 开始，所以最大可用的数组空间应该是 a[9]，而这里却使用了 a[10]，造成数组越界，访问了未被初始化的内存空间，代码运行时（Runtime）就会造成意想不到的结果。</p><p><strong>第二，边界行为特征错误</strong></p><p>边界行为特征错误是指，代码在执行过程中发生异常，崩溃或者超时。之所以称为“边界”，是由于此类错误通常都是发生在一些边界条件上。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Division</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token operator">/</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段 C 语言代码就存在具有边界行为特征的错误。当 b 取值为 0 时，Division 函数就会抛出运行时异常。</p><p><strong>第三，经验特征错误</strong></p><p>经验特征错误是指，根据过往经验发现代码错误。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// if the value of i equals to 2, call method &quot;operationA&quot;</span>
    <span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// if the value of i doesn&#39;t equal to 2, call method &quot;operationB&quot;</span>
    <span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段 C 语言代码，就是一个典型的具有经验特征错误的代码片段。代码想要表达的意思是：如果变量 i 的值等于 2，就调用函数 operationA；否则，调用函数 operationB。</p><p>但是，代码中将“if(i==2)”错误地写成了“if(i=2)”，就会使原本的逻辑判断操作变成了变量赋值操作，而且这个赋值操作的返回结果永远是 true，即这段代码永远只会调用 operationA 的分支。</p><p>显然，“if(i=2)”在语法上没有错误，但是从过往经验来看，这就很可能是个错误了。也就是说，当你发现一个原本应该出现逻辑判断语句的地方，现在却出现了赋值语句，那就很有可能是代码写错了。</p><p><strong>第四，算法错误</strong></p><p>算法错误是指，代码完成的计算（或者功能）和之前预先设计的计算结果（或者功能）不一致。</p><p>这类错误直接关系到代码需要实现的业务逻辑，在整个代码级测试中所占比重最大，也是最重要的。但是，完全的算法错误并不常见，因为不能准确完成基本功能需求的代码，是一定不会被递交的。所以，在实际工程项目中，最常见的是部分算法错误。</p><p><strong>第五，部分算法错误</strong></p><p>部分算法错误是指，在一些特定的条件或者输入情况下，算法不能准确完成业务要求实现的功能。这类错误，是整个代码级测试过程中最常见的类型。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段 C 语言代码，完成了两个 int 类型整数的加法运算。在大多数情况下，这段代码的功能逻辑都是正确的，能够准确地返回两个整数的加法之和。但是，在某些情况下，可能存在两个很大的整数相加后和越界的情况，也就是说两个很大的 int 数相加的结果超过了 int 的范围。这就是典型的部分算法错误。</p><p><strong>代码级测试常用方法</strong></p><p>介绍完了语法特征错误、边界行为特征错误、经验特征错误、算法错误、部分算法错误这五类代码错误后，我们再回过头来看看代码级测试的方法有哪些，这些测试方法又是如何揭露这五类代码错误的。</p><p><strong>在我看来，代码级测试方法主要分为两大类，分别是静态方法和动态方法</strong>。</p><p>静态方法，顾名思义就是在不实际执行代码的基础上发现代码缺陷的方法，又可以进一步细分为人工静态方法和自动静态方法； 动态方法是指，通过实际执行代码发现代码中潜在缺陷的方法，同样可以进一步细分为人工动态方法和自动动态方法。 这里需要注意到的是，我在这篇文章中只会和你分享这四种方法具体是什么，各有何局限性和优势，分别可以覆盖哪些错误类型。而对于，具体如何用这四种方法完成代码级测试，测试用例如何设计、常用的测试工具如何使用，我会在后面两篇文章（《深入浅出之静态测试方法》和《深入浅出之动态测试方法》）中详细展开。</p><p><strong>第一，人工静态方法</strong></p><p>人工静态方法是指，通过人工阅读代码查找代码中潜在错误的方法，通常采用的手段包括，开发人员代码走查、结对编程、同行评审等。</p><p><strong>理论上，人工静态方法可以发现上述五类代码错误，但实际效果却并不理想</strong>。 这个方法的局限性，主要体现在以下三个方面：</p><p>过度依赖于代码评审者的个人能力，同样的评审流程，发现的问题却相差悬殊；</p><p>如果开发人员自行走查自己的代码，往往会存在“思维惯性”，开发过程中没有能考虑的输入和边界值，代码走查时也一样会被遗漏；</p><p>由于完全依赖人工，效率普遍较低。</p><p><strong>第二，自动静态方法</strong></p><p>自动静态方法是指，在不运行代码的方式下，通过词法分析、语法分析、控制流分析等技术，并结合各种预定义和自定义的代码规则，对程序代码进行静态扫描发现语法错误、潜在语义错误，以及部分动态错误的一种代码分析技术。</p><p><strong>自动静态方法可以发现语法特征错误、边界行为特征错误和经验特征错误这三类“有特征”的错误</strong>，但对于算法错误和部分算法错误这两种“无特征”的错误却无能为力。根本原因在于，自动静态方法并不清楚代码的具体业务逻辑。</p><p>目前，自动静态方法无论是在传统软件企业，还是在互联网软件企业都已经被广泛采用，往往会结合企业或项目的编码规范一起使用，并与持续集成过程紧密绑定。</p><p>你需要根据不同的开发语言，选择不同的工具。目前有很多工具都可以支持多种语言，比如 Sonar、Coverity 等，你可以根据实际需求来选择。</p><p><strong>第三，人工动态方法</strong></p><p>人工动态方法是指，设计代码的输入和预期的正确输出的集合，然后执行代码，判断实际输出是否符合预期。我在之前的第三篇文章《什么是单元测试？如何做好单元测试？》中介绍的单元测试，采用的测试方法本质上就是人工动态方法。</p><p>在代码级测试中，<strong>人工动态方法是最主要的测试手段，可以真正检测代码的逻辑功能，其关注点是“什么样的输入，执行了什么代码，产生了什么样的输出”，所以最善于发现算法错误和部分算法错误</strong>。</p><p>目前，不同的编程语言对应有不同的单元测试框架，比如，对 Java 语言最典型的是 Junit 和 TestNG，对于 C 语言比较常用的是 Google Test 等。</p><p><strong>第四，自动动态方法</strong></p><p>自动动态方法，又称自动边界测试方法，指的是基于代码自动生成边界测试用例并执行，以捕捉潜在的异常、崩溃和超时的方法。</p><p>自动动态方法，可以覆盖边界行为特征错误， 通常能够发现“忘记处理某些输入”引起的错误（因为容易忘记处理的输入，往往是“边界”输入）。但是它对于发现算法错误无能为力，毕竟工具不可能了解代码所要实现的功能逻辑。</p><p><strong>总结</strong></p><p>作为代码级测试系列的第一篇文章，我今天主要和你分享了代码级测试中的常见代码错误类型，以及常用测试方法。</p><p>代码错误，可以划分为“有特征”的错误和“无特征”的错误两大类。其中，“有特征”的错误，又可以进一步细分为语法特征错误、边界行为特征错误和经验特征错误；而“无特征”的错误，主要包括算法错误和部分算法错误两类。</p><p>针对这五种代码错误，我将代码级测试的方法分成了静态方法和动态方法两大类。顾名思义，静态方法不需要执行实际代码，而动态方法需要通过执行具体的代码去发现代码错误。而每一类方法又可以根据执行方式，进一步细分。也因此，每种测试方法，所能覆盖的错误类型也不同，所以进行代码级测试时，你需要综合运用这些方法，并结合所在公司或者项目的编码规范一起使用。</p><p>这四类测试方法的特点，以及可以覆盖的错误类型，可以概括如下：</p><p>人工静态方法，本质上通过开发人员代码走查、结对编程、同行评审来完成的，理论上可以发现所有的代码错误，但也因为其对“测试人员”的过渡依赖，局限性非常大； 自动静态方法，主要的手段是代码静态扫描，可以发现语法特征错误、边界行为特征错误和经验特征错误这三类“有特征”的错误； 人工动态方法，就是传统意义上的单元测试，是发现算法错误和部分算法错误的最佳方式； 自动动态方法，其实就是自动化的边界测试，主要覆盖边界行为特征错误。</p><p><strong>思考题</strong></p><p>你所在的公司，还采用过哪些代码级测试的方法，你们又是如何具体开展的呢？</p>`,65),o=[e];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","25.html.vue"]]);export{r as default};