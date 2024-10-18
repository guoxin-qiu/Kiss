import{_ as i,o as a,c as l,e}from"./app-d85a60fe.js";const r={},h=e('<h1 id="_30-条架构规则" tabindex="-1"><a class="header-anchor" href="#_30-条架构规则" aria-hidden="true">#</a> 30 条架构规则</h1><p>本文作者叫 Srinath，是一位科学家，软件架构师，也是一名在分布式系统上工作的程序员。他是 Apache Axis2 项目的联合创始人，也是 Apache Software 基金会的成员。他是 WSO2 流处理器（wso2.com/analytics）的联席架构师。Srinath 撰写了两本关于 MapReduce 和许多技术文章的书。他获得了博士学位。来自美国印第安纳大学。</p><p>Srinath 通过不懈的努力最终总结出了 30 条架构原则，他主张架构师的角色应该由开发团队本身去扮演，而不是专门有个架构师团队或部门。Srinath 认为架构师应该扮演的角色是一个引导者，讨论发起者，花草修建者，而不是定义者和构建者。Srinath 为了解决团队内部的架构纷争和抉择，制定了以下 30 条原则，这些原则被成员们广泛认可，也成为了新手架构师的学习途径。</p><h2 id="基本原则" tabindex="-1"><a class="header-anchor" href="#基本原则" aria-hidden="true">#</a> 基本原则</h2><ol><li>KISS(Keep it simple, stupid)保持每件事情都尽可能的简单。用最简单的解决方案来解决问题。</li><li>YAGNI(You aren&#39;t gonna need it)不要去搞一些不需要的东西，需要的时候再搞吧。</li><li>爬，走，跑。换句话说就是先保证跑通，然后再优化变得更好，然后继续优化让其变得伟大。迭代着去做事情，敏捷开发的思路。对于每个功能点，创建里程碑（最大两周），然后去迭代。</li><li>创建稳定、高质量的产品的唯一方法就是自动化测试。所有的都可以自动化，当你设计时，不妨想想这一点。</li><li>时刻要想投入产出比（ROI）。</li><li>了解你的用户，然后基于此来平衡你需要做哪些事情。不要花了几个月时间做了一个 DevOps 用户界面，最后你发现那些人只喜欢命令行。此原则是原则 5 的一个具体表现。</li><li>设计和测试一个功能得尽可能的独立。当你做设计时，应该想想这一条。从长远来看这能给你解决很多问题，否则你的功能只能等待系统其他所有的功能都就绪了才能测试，这显然很不好。有了这个原则，你的版本将会更加的顺畅。</li><li>不要搞花哨的。我们都喜欢高端炫酷的设计。最后我们搞了很多功能和解决方案到我们的架构中，然后这些东西根本不会被用到。</li></ol><h2 id="功能选择" tabindex="-1"><a class="header-anchor" href="#功能选择" aria-hidden="true">#</a> 功能选择</h2><ol start="9"><li>不可能预测到用户将会如何使用我们的产品。所以要拥抱 MVP（Minimal Viable Product），最小可运行版本。</li><li>尽可能的做较少的功能。当有疑问的时候，就不要去做，甚至干掉。很多功能从来不会被使用。最多留个扩展点就够了。</li><li>等到有人提出再说（除非是影响核心流程，否则就等到需要的时候再去做）。</li><li>有时候你要有勇气和客户说不。这时候你需要找到一个更好的解决方案来去解决。记住亨利福特曾经说过的：“如果我问人们他们需要什么，他们会说我需要一匹速度更快的马”。记住：你是那个专家，你要去引导和领导。要去做正确的事情，而不是流行的事情。最终用户会感谢你为他们提供了汽车。</li></ol><h2 id="服务端设计和并发" tabindex="-1"><a class="header-anchor" href="#服务端设计和并发" aria-hidden="true">#</a> 服务端设计和并发</h2><ol start="13"><li>要知道一个 server 是如何运行的，从硬件到操作系统，直到编程语言。优化 IO 调用的数量是你通往最好架构的首选之路。</li><li>要了解 Amdhal 同步定律。在线程之间共享可变数据会让你的程序变慢。只在必要的时候才去使用并发的数据结构，只在必须使用同步（synchronization）的时候才去使用同步。如果要用锁，也要确保尽可能少的时间去 hold 住锁。如果要在加锁后做一些事情，要确保自己在锁内会做哪些事情。</li><li>如果你的设计是一个无阻塞且事件驱动的架构，那么千万不要阻塞线程或者在这些线程中做一些 IO 操作，如果你做了，你的系统会慢的像骡子一样。</li></ol><h2 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统" aria-hidden="true">#</a> 分布式系统</h2><ol start="16"><li>无状态的系统的是可扩展的和直接的。任何时候都要考虑这一点，不要搞个不可扩展的，有状态的东东出来，这是起码的。</li><li>保证消息只被传递一次，不管失败，这很难，除非你要在客户端和服务端都做控制。试着让你的系统更轻便（使用原则 18）。你要知道大部分的承诺 exactly-once-delivery 的系统都是做了精简的。</li><li>实现一个操作尽可能的幂等。这样的话就比较好恢复，而且你还处于至少一次传递（at least once delivery）的状态。</li><li>知道 CAP 理论。可扩展的事务（分布式事务）是很难的。如果可能的的话，尽可能的使用补偿机制。RDBMS 事务是无法扩展的。</li><li>分布式一致性无法扩展，也无法进行组通信，也无法进行集群范围内的可靠通信。理想情况下最大的节点限制为 8 个节点。</li><li>在分布式系统中，你永远无法避免延迟和失败。</li></ol><h2 id="用户体验" tabindex="-1"><a class="header-anchor" href="#用户体验" aria-hidden="true">#</a> 用户体验</h2><ol start="22"><li>要了解你的用户和清楚他们的目标。他们是新手、专家还是偶然的用户？他们了解计算机科学的程度。极客喜欢扩展点，开发者喜欢示例和脚本，而普通人则喜欢 UI。</li><li>最好的产品是不需要产品手册的。</li><li>当你无法在两个选择中做决定的时候，请不要直接把这个问题通过提供配置选项的方式传递给用户。这样只能让用户更加的发懵。如果连你这个专家都无法选择的情况下，交给一个比你了解的还少的人这样合适吗？最好的做法的是每次都找到一个可行的选项；次好的做法是自动的给出选项，第三好的做法是增加一个配置参数，然后设置一个合理的默认值。</li><li>总是要为配置设置一个合理的默认值。</li><li>设计不良的配置会造成一些困扰。应该总是为配置提供一些示例值。</li><li>配置值必须是用户能够理解和直接填写的。比如：不能让用户填写最大缓存条目的数量，而是应该让用户填写可被用于缓存的最大内存。</li><li>如果输入了未知的配置要抛出错误。永远不要悄悄的忽略。悄悄的忽略配置错误往往是找 bug 花了数小时的罪魁祸首。</li></ol><h2 id="艰难的问题" tabindex="-1"><a class="header-anchor" href="#艰难的问题" aria-hidden="true">#</a> 艰难的问题</h2><ol start="29"><li>梦想着新的编程语言就会变得简单和明了，但往往要想真正掌握会很难。不要轻易的去换编程语言。“技术极客”是听不进去的，不如把“个人修炼”和“项目采用”分开看待……</li><li>复杂的拖拉拽的界面是艰难的，不要去尝试这样的效果，除非你准备好了 10 人年的团队。</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>作为一个架构师，应该像园丁一般，更多的是修剪花草，除草而不是去定义和构建，你应该策划而不是指挥，你应该去修剪而不是去定义，应该是讨论而不是贴标签。虽然在短期内可能会觉得也没什么，但从长远看，指导团队找到自己的方式会带来好处。</p>',17),t=[h];function d(n,o){return a(),l("div",null,t)}const c=i(r,[["render",d],["__file","30条架构规则.html.vue"]]);export{c as default};
