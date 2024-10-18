import{_ as p,o as t,c as A,e}from"./app-d85a60fe.js";const I={},P=e('<h1 id="答疑解惑第四期" tabindex="-1"><a class="header-anchor" href="#答疑解惑第四期" aria-hidden="true">#</a> 答疑解惑第四期</h1><p>你好，我是茹炳晟。</p><p>今天的“答疑解惑”文章，我将针对 API 自动化测试和代码级测试这两个系列 6 篇文章中的问题，和你展开分享。</p><p>我还是会先简单概括下每篇文章的内容，并给出文章链接，帮助你复习相应的内容。同时，如果你再次阅读时还有哪些疑问的话，也欢迎你在文章下面继续留言。我会一直关注着你的学习情况，希望可以扫清软件测试精进道路上的障碍。</p><p>现在，我们就开始今天的主题吧。</p><p><strong>问题一：实际项目中，往往会存在按时序的 API 调用以及异步 API 调用，这类 API 测试要如何开展？</strong></p><p>在专栏的第 22 篇文章《从 0 到 1：API 测试怎么做？常用 API 测试工具简介》中，我以基于主流 Spring Boot 框架开发的简单 Restful API 为例，分别介绍如何使用 cURL 和 Postman 对其进行最基本的功能测试，希望可以让你先对 API 测试有个感性认识。另外，在这篇文章中，我还和你分享了目前一些常见的典型复杂场景，以及相应的测试思路和方法。</p><p>而在文章最后，我希望你思考的是实际项目中往往会存在按时序的 API 调用以及异步 API 调用，这类 API 测试要如何开展？现在，我来说说我的经验吧。</p><p>我们先一起看看按时序调用的 API 序列的测试场景。</p><p>对于此类测试，我一般建议通过 GUI 操作来录制 API 的调用。比如，在启用 Fiddler 的情况下，通过 GUI 来完成业务操作，随后去分析 Fiddler 抓取到的后端 API 请求顺序，然后以此来开发 API 测试用例。</p><p>开发测试用例的过程中还需要特别关注前后两个 API 调用之间的数据传递，比如需要将前一个 API 调用返回的 response 中的某个值作为参数传递给下一个 API 调用。</p><p>其次是异步 API 的测试。对于异步 API 测试的场景，我们往往先会采取“只验证其是否发起了正确的调用，而不直接验证操作结果”的方式。比如，你的被测 API 是一个异步操作的 API，那么我只会去验证这个 API 是否按照预期发起了正确的异步调用请求，而不会直接去验证异步操作的结果。如果这类测试全部通过后，我们才会考虑真正验证异步操作结果的测试用例。</p><p>举个实际的例子，假设你的被测 API A 完成的是下订单的操作。这个 API A 完成下订单操作要通过调用另外一个 API B 将订单信息写入到消息队列中去。而真正下订单成功指的是消息队列中的消息被后续服务正确处理并且成功了。此时，这里的后续消息处理就是异步的操作了。</p><p>那么，当我们要测试这个 API A 的时候，我们只需要验证它是否正确地发起了对 API B 的调用即可，而不用关心 API B 的具体行为结果。</p><p>也就是说，我们只关注 API A 是否以正确的参数调用了 API B 即可，而无需关注 API B 是否正确地执行了将订单信息写入消息队列的操作，更不用关注，消息队列中的消息被异步处理的结果。</p><p>注意这里的测试重点，应该更多地放在前面的部分，而真正验证异步操作结果的测试在资源有限的情况下只需覆盖最典型的场景即可。</p><p><strong>问题二：对基于配置文件的 API 测试框架，你有哪些看法呢？</strong></p><p>在专栏的第 23 篇文章《知其然知其所以然：聊聊 API 自动化测试框架的前世今生》中，我和你分享了 API 自动化测试框架的发展历程，帮助你理解 API 测试是如何一步一步地发展成今天的样子，希望可以以这种“知其所以然”的方式加深你对 API 自动化测试的理解。</p><p>而在这篇文章最后，我提到了基于配置文件的 API 测试框架，比如典型的 HttpRunner。在此类 API 测试框架的支持下，测试用例本身往往就是纯粹的配置文件了。如果你用过这个框架的话，我希望你可以谈谈你的看法。</p><p>对于基于配置文件的 API 测试框架的确是个不错的方向，尤其是国内的开源框架 HttpRunner 更是推动了这种测试框架的普及。</p><p>基于配置文件的 API 测试框架的优势，可以归纳为以下三方面：</p><p>降低了测试用例开发的门槛，使得完全没有代码基础的同学也可以很容易地完成 API 测试；</p><p>可以很方便地将 API 功能测试用例直接转换成 API 性能测试的用例（HttpRunner 可以使用 lucust 直接实现这样的转换）；</p><p>同时，HttpRunner 这类工具还支持直接从网络转发工具得到的 HAR 中提取 API 调用的测试用例，进一步降低了 API 测试用例的开发成本。</p><p>所以，基于配置文件的 API 测试框架很受初学者的欢迎。</p><p>但是，为了完成一些复杂场景的测试用例设计以及复杂的结果判断，你还是需要具备基本的代码能力，以完成这些复杂场景的测试实现。比如，HttpRunner 就会涉及到使用 debugtalk.py 来实现 hook 函数的功能扩展。</p><p>也就是说，完全不写代码的 API 测试只能覆盖大部分的简单测试场景，如果你要搞定复杂场景的 API 测试的话，你是要必须掌握一些基本的开发技能，这里没有任何捷径可走。</p><p>另外，很多读者的留言也很精彩，我这里特地选取了两条供大家参考。从 Cynthia 的留言中，我看得出她已经完全习得了这篇文章中描述的方法的精髓，这也正是我想要传达给你的最核心的内容。</p><p><img src="https://static001.geekbang.org/resource/image/a6/ba/a67715406c2a7ae6e9bb98d2e3198eba.png" alt=""></p><p>Martin 在留言的后半部分中提到，通过 HttpRunner 来实现轻量级的 API 测试的确是个好方法，也最大程度地发挥了 HttpRunner 的价值。但是，留言前半部分的“Postman 转 Python 或者 Java”的观点我并不是很认同。其实，Postman 是有直接代码转换功能的，而且支持各种语言的各种框架，基本可以实现一键操作，所以，其实很多没有采用 HttpRunner 的企业都还在普遍使用这个方法。</p><p><img src="https://static001.geekbang.org/resource/image/5d/9c/5dc1be96cdacac1a510d10019e1cd59c.png" alt=""></p><p><strong>问题三：如果无法通过 API Gateway 方法得到契约的话，应该采用什么方法来解决呢？</strong></p><p>在专栏的第 24 篇文章《紧跟时代步伐：微服务模式下 API 测试要怎么做？》中，我和你分享了微服务模式下的 API 测试，旨在帮助你认清庞大的测试用例数量、微服务之间的相互耦合这两个问题的本质，以更好地开展测试。所以，我今天分享这个主题的目的就是，帮你理解这两个问题的本质，以及如何基于消费者契约的方法来解决这两个难题。</p><p>而在今天这篇文章最后，我希望你思考的是：基于消费者契约的 API 测试中，对于那些新开发的 API，或者加了新功能的 API，由于之前都没有实际的消费者，所以你无法通过 API Gateway 方法得到契约。对于这种情况，你会采用什么方法来解决呢？</p><p>从我的经验来看，因为缺乏契约，所以还是会采用传统的 API 测试方法，也就是根据 API 设计文档来设计测试用例。</p><p>这时，我们采取的 API 测试策略是：</p><p>对于已经上线的 API 我们会通过契约测试来保证质量； 而对于新的 API，或者是加了新功能的 API，则还是采用传统的基于 API 设计文档来设计测试用例，同时基于代码覆盖率来指导补充遗漏测试用例的方式来保证质量。当这些新 API 上线运行了一段时间后，我们就会缩小测试的范围，逐渐向契约测试过渡。</p><p><strong>问题四：你所在公司，在进行代码级测试时，采用过哪些方法呢？</strong></p><p>在专栏的第 25 篇文章《不破不立：掌握代码级测试的基本理念与方法》中，我根据实际工程项目中的实践，总结了五种常见的代码错误，以及对应的四大类代码级测试方法。这里我还想在多啰嗦一句，代码级测试的测试方法一定是一套测试方法的集合，而不是一个测试方法。</p><p>而在这篇文章最后，我希望你分享一下你所在公司，在进行代码级测试时采用过哪些方法，又是如何具体开展的。这里我来分享下我在 eBay 的经验吧。</p><p>在 eBay，代码质量保障已经完全纳入了 CI/CD 流水线。</p><p>首先，我们基于 Sonar 启用了静态代码。除了在上传 Git 的时候触发静态扫描外，开发人员在本地 IDE 中也会进行实时的静态扫描，并可以实时看到分析结果，这样就可以在代码被递交到代码仓库前就已经完成了预检测。</p><p>其实，我们并没有直接采用标准的代码静态扫描的规则库，而是删除了其中很多我们认为过于严格的规则，同时加入了一些我们认为比较重要的检测项，使得这个规则库更符合我们的业务场景。一般情况下，这些规则的修订是由测试架构师牵头，与开发主管和资深的开发人员一起协商决定的。</p><p>这里需要注意的是，我们并不要求静态扫描上报的所有错误都被修复后才能发布，只要求解决最关键的问题即可。而对于那些所谓的 Code Smell 问题，基于研发成本的考虑，我们并不会要求完全修复。</p><p>接着 CI/CD 流水线会触发代码动态测试，即单元测试。这里，我们不仅要求单元测试能够 100%通过，并且会要求达到一定的代码覆盖率。在 eBay，我们对不同模块的代码覆盖率要求也不一样，并没有一个硬性指标。其实，这也是出于研发成本的考虑。</p><p>通常来讲，对底层模块以及提供公共服务的中间件的代码覆盖率指标的要求，一般都会比较高。而我们对前端模块的覆盖率要求，就会低很多。</p><p><strong>问题五：除了 Sonar，你还用过哪些静态代码扫描工具，使用过程中遇到过哪些问题？</strong></p><p>在专栏的第 26 篇文章《深入浅出之静态测试方法》中，我和你详细分享了人工静态测试方法和自动静态测试方法，来帮你理解研发流程上是如何保证代码质量的。另外，我以 Sonar 为例，和你分享了如何搭建自己的自动静态代码扫描方案，并且应用到项目的日常开发工作中去。</p><p>而在这篇文章最后，我希望你分享的是除了 Sonar 你还用过哪些静态代码扫描工具，使用过程中遇到过哪些问题。</p><p>其实优秀的代码静态扫描工具远远不止 Sonar，比如 Fortify SCA 和 Checkmarx CxSuite 等都是很优秀的静态扫描工具。至于使用过程中需要的问题，我觉得主要有这么三个：</p><p>第一是误报率。过高的误报率会降低开发人员对测试工具的信任度，而且还会引入很多人为标注的工作量。</p><p>第二是规则库的完备性和实用性。很多时候你会发现，标准代码规则库中的一些规则设计不够合理，有点教条主义。比如，有些规则库会强行规定一个函数的代码行数不能超过 200 行，从代码的模块化和易维护性角度来讲，过长的函数实现体的确不利于代码健康。但是，也不能完全一刀切，毕竟有些函数就是实现起来比较复杂。所以，很多时候我们需要对标准规则库进行深层次地裁剪，以更好地适应企业的实际情况。</p><p>第三是自定义规则的难易程度。虽然很多静态代码工具都提供了规则编辑器，来方便你实现自己的规则，但是这些规则编辑器的使用方法和语法的学习成本比较高，对初学者不够友好。</p><p>问题六：在单元测试过程中，你都遇到过哪些问题，又是如何解决的呢？ 在专栏的第 27 篇文章《深入浅出之动态测试方法》中，我和你分享了人工动态测试方法和自动动态测试方法。因为自动动态方法并不能理解代码逻辑，所以仅仅被用于发现异常、崩溃和超时这类“有特征”的错误，而对于代码逻辑功能的测试，主要还是要依靠人工动态方法。</p><p>在这篇文章最后，我希望你分享的是，除了我在文中提到的几个单元测试的难点问题，你还遇到过哪些问题，又是如何解决的。</p><p>这里，我想再和你分享我曾在单元测试中遇到过的问题。</p><p>单元测试的难点中较为典型的就是对内部输入的控制。对于内部输入的控制有数十种不同的场景，这里我就举一个例子，意在抛砖引玉。</p><p>首先为了达到较高的测试代码覆盖率，如果代码中包括了 if-else 分支，那么我们的测试就需要分别执行到这两个分支。假设，现在有一个 if-else 分支是根据 malloc 这个内存分配函数的结果进行不同的处理，如果内存分配成功了，就执行 A 逻辑，如果执行失败了就执行 B 逻辑。</p><p>那么，在做单元测试的时候，通常情况下很容易覆盖内存分配成功的场景，但是想要实现“可控”的内存分配失败就比较困难了。因为 malloc 是个底层系统函数，根本无法对其控制。</p><p>为了解决这个问题，我们就可以采用桩函数的思想，引入一个 malloc 的桩函数，在这个桩函数的内部再去调用真正的系统 malloc 函数，如果需要模拟真正的 malloc 函数的失败，就在桩函数里面直接返回 malloc 函数失败的返回值，来达到模拟真正 malloc 函数失败场景的目的。这样就能在被测函数中通过可控的方式，来模拟系统底层函数的返回值了。</p>',60),a=[P];function n(r,o){return t(),A("div",null,a)}const s=p(I,[["render",n],["__file","57.html.vue"]]);export{s as default};
