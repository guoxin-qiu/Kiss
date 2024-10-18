import{_ as i,r as a,o as n,c as r,a as e,b as t,d,e as p}from"./app-d85a60fe.js";const s={},o=p('<h1 id="gherkin" tabindex="-1"><a class="header-anchor" href="#gherkin" aria-hidden="true">#</a> Gherkin</h1><p>Gherkin is a Business Readable, Domain Specific Language which entitles its users to write effective tests in a well-documented way that requires the least reasoning and involved logic details.</p><h2 id="文档式-gherkin" tabindex="-1"><a class="header-anchor" href="#文档式-gherkin" aria-hidden="true">#</a> 文档式 Gherkin</h2><p>文档式 Gherkin 往往用来描述“应该做些什么”。所以经常用来描述软件需求，产品期望行为。</p><h3 id="风格详解" tabindex="-1"><a class="header-anchor" href="#风格详解" aria-hidden="true">#</a> 风格详解</h3><p>比如一个步骤是：“当创建了一个新用户的时候，那么他会出现在新用户列表中”。这种风格的好处就是可以快速书写出一个结构合适，方便理解的软件文档。当这种文档式 Gherkin 语言写的测试执行失败的时候，往往代表了产品的实际行为和文档上的期望行为发生了背离。当然文档式 Gherkin 语句也有其缺点，比如自动化实现起来，某些语句需要验证的范围会非常大，执行复杂，且随着测试的增加，步骤库里的步骤数量也会快速地增长。</p><p>文档式 Gherkin 使用描述性的措辞，聚合了具体的动作。这使读者能够快速理解一个场景，并掌握文档中描述的软件功能。使用文档式 Gherkin 语言写的软件需求或者测试，并由自动化实现执行后，这个文档基本上不会过时。因为一旦软件实际行为和需求文档的描述发生了背离，那么自动化执行需求文档上的 Gherkin 语句的时候，测试就会失败。而这些测试往往都是以天为粒度去执行的，如果今晚你提交了代码改变软件行为而没有更新需求文档，当晚的自动化测试流水线就会失败红掉。如果你的项目有流水线”红不过夜”（导致流水线失败变红的问题不留到第二天而是当天内解决）的规定，那么恭喜，今晚就必须把文档上由 Gherkin 语言书写的测试修正。</p><p>使用场景：书写可测试的软件需求说明书</p><p>例子：</p><p>When the admin creates a new user</p><p>Then the user list should contain the newly created user</p><h3 id="规则-1-使用不大于-5-个步骤的-scenario-场景" tabindex="-1"><a class="header-anchor" href="#规则-1-使用不大于-5-个步骤的-scenario-场景" aria-hidden="true">#</a> 规则 1：使用不大于 5 个步骤的 Scenario 场景</h3><p>Scenario 是 Gherkin 语言中的关键字，通常代表一个场景。作为一个经验法则，一个文档式 Gherkin 写的场景通常由 3-5 个步骤组成。有时候，就连包含 Given 的步骤也不需要，那么便只需要 2 个左右步骤了。当然，长的场景可能包含了多于 5 个 Gherkin 步骤，此时便可能说明了这个场景需要拆分了，让更多更小的场景去覆盖每一个需要关注的点。</p><p>同时，前置条件也是可以隐式说明的。比如，在描述产品行为的时候，对于每个与登录页面本身无关的场景，可以预期用户已经登录了。每一个场景一般只应该包含一个“Then”。</p><p>如果有多个包含 Then 的步骤，那么就说明这个场景有多个 AC（Acceptance Criteria）。如果 Then 语句执行失败，那么此 AC 便校验失败了，测试便会停止，那么后面的 AC 步骤也不会去执行验证，于是在失败的路径下多个 AC 便失去了意义。当然这个规则也不是个教条，比如当两个 AC 相互依赖，他们最好同时验证。比如分开验证两个 AC 都有时间成本，外部资源成本非常昂贵，那么也是可以放在一起写多个 Then 语句的。</p><h3 id="规则-2-使用主动语态" tabindex="-1"><a class="header-anchor" href="#规则-2-使用主动语态" aria-hidden="true">#</a> 规则 2：使用主动语态</h3><p>当描述一些行为的时候，应当使用主动的语态，比如 &quot;the user does X&quot; 而不是 &quot;X is done by the user&quot;这种被动的语态。</p><h3 id="规则-3-使用不同时态" tabindex="-1"><a class="header-anchor" href="#规则-3-使用不同时态" aria-hidden="true">#</a> 规则 3：使用不同时态</h3><p>在 Gherkin 中定义包含 Given 语句的时候，要使用过去时时态，因为这表示测试之前发生的一个前置条件。如：“Given the user was logged-in” 。</p><p>在 Gherkin 中定义包含 When 语句的时候，要使用现在时时态，这代表测试执行的时候发生的，如：“When the user cancels the form”</p><p>在 Gherkin 中定义包含 Then 语句的时候，用情态动词写成期望例如：Then the form should be closed。这强调了我们不是预测 SUT 将如何表现，而是描述我们对它的期望。</p><h3 id="规则-4-使用角色名称" tabindex="-1"><a class="header-anchor" href="#规则-4-使用角色名称" aria-hidden="true">#</a> 规则 4：使用角色名称</h3><p>使用这些角色名称：如 “Users”、“Admin”、“Guest”，而不是 &quot;I&quot;。这可以增加一个场景的重点，让它专注于某一个角色，以便更容易阅读理解。在后续步骤中，要么重复角色名称，要么使用代词 They 来代表这类角色。</p><p>例如：</p><p>When the Admin starts the creation of a user</p><p>Then the Admin should be asked to confirm the creation</p><p>又如：</p><p>When the Admin starts the creation of a user</p><p>Then they should be asked to confirm the creation</p><h3 id="规则-5-使用大写的否定词" tabindex="-1"><a class="header-anchor" href="#规则-5-使用大写的否定词" aria-hidden="true">#</a> 规则 5：使用大写的否定词</h3><p>否定词会大大改变句子的意思，但很容易被忽视。把否定词写成大写字母，便可以强调它们。</p><p>例如：</p><p>“The the text “Welcome” should NOT be visible” 或 “The user should NOT exists”</p><h2 id="符合受众需求的产出物" tabindex="-1"><a class="header-anchor" href="#符合受众需求的产出物" aria-hidden="true">#</a> 符合受众需求的产出物</h2><p>作为技术人员，往往具有很强的工程师思维惯性，产出物也是有鲜明的技术标签。所以从业务的视角来看，并不是那么对用户友好。作为业务人员，更希望在步骤中隐藏所有技术细节，方便使用。</p><h2 id="动作式-gherkin" tabindex="-1"><a class="header-anchor" href="#动作式-gherkin" aria-hidden="true">#</a> 动作式 Gherkin</h2><p>动作式 Gherkin 描述的是“如何做些什么”，由于动作式 Gherkin 关注的是每一步具体做什么，所以常用作写测试用例。如一个步骤是“当点击含有 Submit 文字的按钮，那么 Successfully 文字应该可见”。</p><h3 id="风格解析" tabindex="-1"><a class="header-anchor" href="#风格解析" aria-hidden="true">#</a> 风格解析</h3><p>动作式 Gherkin 语句的好处就是目的单一，每一步需要验证的点很小，当然与之而来的缺点就是要完成一个用例的书写需要很多步骤组成，用例里的步骤会很多，用例变得很长。且每一个动作对测试场景的覆盖率都不高，需要完成测试覆盖率要很多步骤一同拼凑起来。</p><p>动作式 Gherkin 语句用每一个参数化的步骤描述一个行为，这种风格使得步骤库的体积不必非常大。因此也减少了自动化框架步骤的开发和维护工作量，每一个步骤尽量和公共组件进行互动，也保证了每个步骤的重用性非常之高，所以，一旦需要新测试，用现有的动作式步骤库书写后这个 case 就可以立即运行了，也不需要实现一个新的步骤。</p><p>使用场景：写测试用例</p><p>例子：</p><p>When the button &#39;Create User&#39; is clicked</p><p>And the text field &#39;Last name&#39; is filled with &#39;Jim&#39;</p><p>And the text field &#39;First name&#39; is filled with &#39;Green&#39;</p><p>And the button &#39;Save&#39; is clicked</p><p>Then the &#39;user list&#39; should contain the text &#39;Jim, Green&#39;</p><h3 id="规则-1-使用单一测试点的-scenario-场景" tabindex="-1"><a class="header-anchor" href="#规则-1-使用单一测试点的-scenario-场景" aria-hidden="true">#</a> 规则 1：使用单一测试点的 Scenario 场景</h3><p>由于动作式 Gherkin 不可避免要使用更多的步骤，所以动作式 Gherkin 的测试长度一般都会更长一些，但是这并不代表一个测试可以写很长很大。同样地，一个测试还是需要遵循单一原则，最好覆盖一个测试点，在覆盖这个测试点的过程中，尽可能减少测试步骤让这个测试简短精悍，方便维护。</p><h3 id="规则-2-使用被动语态" tabindex="-1"><a class="header-anchor" href="#规则-2-使用被动语态" aria-hidden="true">#</a> 规则 2：使用被动语态</h3><p>由于动作式 Gherkin 是对 UI 对象的操作，为了方便阅读，加强对互动的 UI 元素的关注所以一般是 &quot;X is clicked&quot;这种被动的语态。</p><p>例子：</p><p>When the text field &#39;Last name&#39; is filled with &#39;CAO&#39;</p><p>反例：</p><p>When fill &#39;CAO&#39; into the text field &#39;Last name&#39;</p><h3 id="规则-3-使用不同时态-1" tabindex="-1"><a class="header-anchor" href="#规则-3-使用不同时态-1" aria-hidden="true">#</a> 规则 3：使用不同时态</h3><p>和文档式 Gherkin 一样，使用不同的时态来区分先决条件、行为、期望。</p><p>Given 步骤用过去时时态，例如：Given user was logged-in.</p><p>When 步骤用现在时来描述动作, 例如：When button &#39;Login&#39; is clicked.</p><p>Then 步骤用情态动词描述期望，Then the text &#39;Welcome&#39; should be visible.</p><h3 id="规则-4-专注于-ui-元素" tabindex="-1"><a class="header-anchor" href="#规则-4-专注于-ui-元素" aria-hidden="true">#</a> 规则 4：专注于 UI 元素</h3><p>动作式 Gherkin 步骤专注于和 UI 界面互动，所以尽可能隐藏用户角色信息，一般来说，在 Given 步骤中给定了一个用户角色即可，而之后，便不在语句中强调用户角色，把重点放在用户界面元素上，这样可以缩短自然语句中的措辞，突出用户界面，这是动作式 Gherkin 语句最关注的部分。</p><p>比如：</p><p>例子：</p><p>Given the &#39;Admin&#39; was logged-in</p><p>When the button &#39;Delete user&#39; is clicked</p><p>反例：</p><p>Given the &#39;Admin&#39; was logged-in</p><p>When the &#39;Admin&#39; clicks the &#39;Delete user&#39; button</p><h3 id="规则-5-使用可见的-ui-属性" tabindex="-1"><a class="header-anchor" href="#规则-5-使用可见的-ui-属性" aria-hidden="true">#</a> 规则 5：使用可见的 UI 属性</h3><p>UI 元素有不同的属性，一些属性是可见的，这样方便用户区别他们，比如一个按钮可以 text，class，id 来查找到，为了让对象快速被人识别，那么便应该使用人类可见的属性来识别这些自动化 UI 对象，那么对于这个按钮就应该用按钮的文本来识别，这样便建立了测试语句和软件 UI 对象视觉上的强有力的联系。</p><p>例子：</p><p>When the button &#39;&lt;button text&gt;&#39; is clicked</p><p>反例：</p><p>When the button with id &#39;&lt;id&gt;&#39; is clicked</p><p>有时候，一些对象没有可视的属性，有时候一些对象是其他对象的分组，或者其他对象的描述，比如一个区域，一个层，这时候，便可以使用 id。此时，便需要开发团队给特定的元素添加 id 来支持自动化测试。</p><p>例子：</p><p>Then the widget with the id &#39;header&#39; should contain text &#39; today’s announcement&#39;</p><p>但是要注意的是，这套步骤库的受众是谁，如果是非技术性用户，那么尽可能隐藏掉 id 这种技术细节。</p><p>例子：</p><p>Then the element &#39;homepage header&#39; should contain text &#39; today’s announcement&#39;</p><h3 id="规则-6-前置条件中隐式假设的使用" tabindex="-1"><a class="header-anchor" href="#规则-6-前置条件中隐式假设的使用" aria-hidden="true">#</a> 规则 6：前置条件中隐式假设的使用</h3><p>例子 1：</p><p>Given &#39;admin&#39; was logged-in</p><p>And the dashboard page is visible</p><p>例子 2：</p><p>Given the dashboard page is visible</p><p>我们可以假设，当 dashboard 可见的时候，管理员必须要登录，那么文档式 Gherkin 使用例 2 便可以聚焦到 dashboard 相关的信息了。然而，在使用代码实现步骤的时候，将多个动作聚集到一个步骤的定义中，会大大降低一个步骤的可重用性，一个复杂的动作不能像原子动作那样与其他步骤结合。一旦这些步骤链中任何一个地方改变，那么整个步骤就要修改维护。</p><p>但另一方面，如果一个场景可以将一些步骤聚合在一起，那么便可以大大提高这个场景的可读性，忽略无关信息，如：Given owner exists. 这步其实聚合一系列创建用户的动作，一句话就表达了整个意思。所以编写方案时，需要在这两种需求之间找到一个平衡。</p><h2 id="统一手工测试和自动化测试" tabindex="-1"><a class="header-anchor" href="#统一手工测试和自动化测试" aria-hidden="true">#</a> 统一手工测试和自动化测试</h2><p>文档式 Gherkin 和动作式 Gherkin 都有它们的适用之处，在写软件需求或者测试时候选择最合适的即可。遵守以上法则，会让定义出来的 Gherkin 语言符合语言习俗，让英语测试工程师更快速地使用这套步骤快速建立文档和用例，也让自动化框架开发工程师更方便地维护和对接步骤库的使用者。</p><p>在提供了基于动作式 Gherkin 的步骤库后，通过不断地反馈和优化，我们隐藏了对象的 ID 细节，提供了友好的元素定位方式，以及方便记忆的对象命名库，客户的 QA 终于可以方便地使用我们的步骤库来书写测试用例了。由于 Gherkin 步骤本身就是以英语自然语言来书写的，所以它也就自然而然可以用来书写手工测试用例了。一套用例，测试工程师可以看着通俗易懂的 Gherkin 语言来手动执行用例。这样一来，传统的“手动测试维护一套手工用例，自动化测试再维护一套从手工测试转化成的自动化用例”的工作流不再存在。终于可以大大减少用例的维护和执行开销了。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',93),c={href:"https://mp.weixin.qq.com/s/bNr76eNUmoDzhyEnbl2xIA",target:"_blank",rel:"noopener noreferrer"};function l(u,k){const h=a("ExternalLinkIcon");return n(),r("div",null,[o,e("ul",null,[e("li",null,[e("a",c,[t("如何高效使用 Gherkin-Thoughtworks"),d(h)])])])])}const b=i(s,[["render",l],["__file","04.Gherkin.html.vue"]]);export{b as default};
