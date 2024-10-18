import{_ as t,r as d,o as s,c as l,a as i,b as e,d as r,e as n}from"./app-d85a60fe.js";const o={},u=n('<h1 id="bdd-出现的背景" tabindex="-1"><a class="header-anchor" href="#bdd-出现的背景" aria-hidden="true">#</a> BDD 出现的背景</h1><h2 id="为什么要-bdd" tabindex="-1"><a class="header-anchor" href="#为什么要-bdd" aria-hidden="true">#</a> 为什么要 BDD</h2><p>“开发软件系统最困难的部分就是准确说明开发什么”（The hardest single part of building a software system is deciding precisely what to build. - No Silver Bullet, Fred Brooks）</p><p>导致开发的产品跟需求不一样的根本原因是因为不同的角色有者不同的领域知识，沟通的时候都使用自己的领域语言，导致理解不一致。</p><h2 id="bdd-是什么" tabindex="-1"><a class="header-anchor" href="#bdd-是什么" aria-hidden="true">#</a> BDD 是什么</h2>',5),c={href:"https://dannorth.net/about/",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>给 BDD 下一个清晰易懂的定义很难，试着总结一下几点：</p><ol><li>关注的是业务领域，而不是技术：BDD 强调领域特定语言（DSL Domain Specific Language）描述用户行为，定义业务需求，而不会关系系统的技术实现。</li><li>不是工具，强调的是一种协作方式：BDD 要求各个角色共同参与系统行为的挖掘和定义，以实现对业务价值的一致理解。</li><li>不是关于测试的：BDD 源自 TDD，但重点不是关于测试，所强调的沟通与协作可以指导更好的做自动化测试。</li><li>全栈敏捷方法：BDD 促使团队所有角色从需求到最后的测试验证，进行高度的协作和沟通，以交付最有价值的功能。</li><li>BDD 帮助开发人员设计软件，TDD 帮助开发人员测试软件。</li></ol><h2 id="bdd-怎么做" tabindex="-1"><a class="header-anchor" href="#bdd-怎么做" aria-hidden="true">#</a> BDD 怎么做</h2><h3 id="业务层抽取-业务语言描述" tabindex="-1"><a class="header-anchor" href="#业务层抽取-业务语言描述" aria-hidden="true">#</a> 业务层抽取，业务语言描述</h3><p>根据业务层的数据流，在每个数据停留点进行纵切，抽取出一个个用例场景。描述语言一定是业务领域可懂的，不要涉及任何实现相关的技术细节。所描述的场景一定是从业务层抽象出来，体现真实业务价值的。</p><h3 id="技术人员可懂-自动化友好" tabindex="-1"><a class="header-anchor" href="#技术人员可懂-自动化友好" aria-hidden="true">#</a> 技术人员可懂，自动化友好</h3><p>所描述的用例场景要能驱动开发，必须要让技术人员易于理解；要指导自动化测试，还得要求对于自动化的实现是友好的。这一点似乎跟第一点有些矛盾，但我们严格遵守 BDD 的格式要求还是可以做到的。其中，GIVEN 从句描述的是场景的前提条件、初始状态，通常是一种现在完成时态；WHEN 从句是采用某个动作或者发生某个事件，一定是动词，通常是一般现在时；THEN 从句用“应该..（should be..）”来描述一种期望的结果，而不是用断言（assert），后者与测试关联更紧密。</p><h3 id="数据驱动-需求实例化" tabindex="-1"><a class="header-anchor" href="#数据驱动-需求实例化" aria-hidden="true">#</a> 数据驱动，需求实例化</h3><p>抽象语言描述的需求，往往由于太过于抽象而缺失掉很多关键信息，导致不同人员对需求理解的不一致。想要既抽象又要包含细节信息，就需要采用需求实例来描述。简单来说就是给场景用例举例说明。举例就会需要列举数据，如果在场景用例描述里边直接添加数据实例，那样用例将会很混乱，可读性和可维护性都非常差。如果我们能够在描述场景的用例中用一些变量来代替，把变量对应的值（数据）提取出来存为一个表格或独立的文件，这样会使用例的可读性更好，而且不会缺失细节信息（数据），后期的维护和修改也比较方便。这是数据驱动的方法来描述实例化的需求。</p><p>举几个例子 场景一：检查收件箱（第三个清晰明了且能体现业务价值）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario: Check Inbox
  Given a user &quot;Tom&quot; with password &quot;123&quot;
  And a user &quot;Jerry&quot; with password &quot;abc&quot;
  And an email to &quot;Tom&quot; from &quot;Jerry&quot;
  When I sign in as &quot;Tom&quot; with password &quot;123&quot;
  Then I should see one email from &quot;Jerry&quot; to &quot;Tom&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario: Check Inbox
  Given a user &quot;Tom&quot;
  And a user &quot;Jerry&quot;
  And an email to &quot;Tom&quot; from &quot;Jerry&quot;
  When I sign in as &quot;Tom&quot;
  Then I should see on email from &quot;Jerry&quot; to &quot;Tom&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario: Check Inbox
  Given I have received an email from &quot;Jerry&quot;
  When I sign in
  Then I should see on email from &quot;Jerry&quot; in my inbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景二：限制非法用户查看某些受限内容，BDD 强调是什么（What），而不是怎么做（How），第二个写的比较好。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario: Redirect user to originally requested page after logging in
  Given a user &quot;Tom&quot; exists with password &quot;123&quot;
  And I am not logged in
  When I navigate to the home page
  Then I am redirected to the login form
  When I fill in &quot;Username&quot; with &quot;Tom&quot;
  And I fill in &quot;Password&quot; with &quot;123&quot;
  And I press &quot;Login&quot;
  Then I should be on the home page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario: Redirect user to originally requested page after logging in
  Given I am an unauthenticated user
  When I attempt to view some restricted content
  Then I am shown a login form
  When I authenticate with valid credentials
  Then I should be shown the restricted content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景三：添加图书到购物车并计算总额</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario: Books add to shopping cart with correct number and total price
  Given a book &quot;BDD&quot; with price &quot;30.5&quot;
  And a book &quot;Cucumber&quot; with price &quot;25.8&quot;
  When I select &quot;BDD&quot;
  And I click the add to shopping cart button
  Then I should see one &quot;BDD&quot; in my shopping cart
  And the total price is &quot;30.5&quot;
  When I select &quot;Cucumber&quot;
  And I click the add to shopping cart button twice
  Then I should see two books &quot;Cucumber&quot; in my shopping cart
  And the total price is &quot;82.1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Scenario Outline: Books add to shopping cart with correct number and total price
  Given book &lt;name1&gt; with &lt;price1&gt;
  And book &lt;name2&gt; with &lt;price2&gt;
  When I add &lt;number1&gt; book &lt;name1&gt; and &lt;number2&gt; book &lt;name2&gt; to shopping cart
  Then I should see book &lt;name1&gt; and &lt;name2&gt; in my shopping cart
  And the total price should be &lt;total&gt;
  Examples:
  | name1   | price1   | number1 | name2    | price2  | number2  | total  |
  | BDD     | 30.5     | 1       | -        | -       | -        | 30.5   |
  | Cucumber| 25.8     | 2       | -        | -       | -        | 51.6   |
  | BDD     | 30.5     | 1       | Cucumber | 25.8    | 2        | 82.1   |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bdd-有什么好处" tabindex="-1"><a class="header-anchor" href="#bdd-有什么好处" aria-hidden="true">#</a> BDD 有什么好处？</h2><p>BDD 的作用是把利益关系人、交付团队等不同方面的项目相关人员集中到一起，形成共同的理解，共同的价值观以及共同的期望值。它可以帮助我们：</p><ul><li>关注用户行为</li><li>交付最有用的功能</li><li>在团队内部维护一致的术语</li><li>探究需求实例</li><li>编写和维护需求</li><li>创建活的文档</li><li>消除协作与沟通障碍</li></ul><h2 id="什么样的项目适合-bdd" tabindex="-1"><a class="header-anchor" href="#什么样的项目适合-bdd" aria-hidden="true">#</a> 什么样的项目适合 BDD</h2><ul><li>简单的一次性项目，沟通交流成本都较低的情况下，没有必要使用 BDD；</li><li>业务比较轻量，重在技术方面的项目，可以只使用 TDD，或者简单的白板上的 BDD，不需要在 BDD 工具记录需求用例文档；</li><li>业务复杂，团队成员较多的项目，沟通成本高，BDD 很有必要。</li></ul>`,24);function h(m,b){const a=d("ExternalLinkIcon");return s(),l("div",null,[u,i("p",null,[e("BDD 的提出者"),i("a",c,[e("Dan North"),r(a)]),e("强调 BDD 不是关于测试的，它是在应用程序存在之前，写出用例和期望，从而描述应用程序的行为，并且促使在项目中的人们彼此互相沟通。")]),v])}const g=t(o,[["render",h],["__file","01.intro-zh.html.vue"]]);export{g as default};
