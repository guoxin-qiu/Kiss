import{_ as a,o as p,c as e,e as i}from"./app-d85a60fe.js";const h="/kiss/assets/构建标准化埋点流程-e9b9d77a.png",r="/kiss/assets/明确职责-f627efa7.png",d="/kiss/assets/埋点各种方案-8c42f88e.png",s={},n=i('<h1 id="数据埋点" tabindex="-1"><a class="header-anchor" href="#数据埋点" aria-hidden="true">#</a> 数据埋点</h1><p>数据埋点是数据化运营的根基，尤其是对于 App、小程序形态的线上业务，没有埋点数据驱动的精细化运营就是无源之水，巧妇难为无米之炊。</p><h2 id="埋点数据的应用场景及价值" tabindex="-1"><a class="header-anchor" href="#埋点数据的应用场景及价值" aria-hidden="true">#</a> 埋点数据的应用场景及价值</h2><h3 id="广告投放效果分析" tabindex="-1"><a class="header-anchor" href="#广告投放效果分析" aria-hidden="true">#</a> 广告投放效果分析</h3><p>相比较粗放式的运营，精细化运营追求营销费用 ROI 的最大化，因此需要将站外广告投放数据与用户进站之后访问、激活、下单等行为串联起来，从而进行渠道投放效果的归因，及时调整广告投放策略。对于三方的流量渠道来说，在用户未注册登录状态，只能获取设备信息，如 DeviceID、IMAC、IDFA 以及广告渠道标识 UTM 参数或者 App 商店的产品包 ID 等。通过埋点将用户点击入口的 ID 信息以及后续在站内的访问的行为链路串联起来。</p><h3 id="产品功能使用分析" tabindex="-1"><a class="header-anchor" href="#产品功能使用分析" aria-hidden="true">#</a> 产品功能使用分析</h3><p>很多 C 端产品的新人，在做产品功能时甚至不知道要埋点，只提了产品功能需求而忽略了埋点需求，找数据团队要数据分析报告时，发现连点都没有。这个时候就为时已晚。针对上线的产品功能，营销活动，需要同时提埋点需求。（无埋点也需要进行事件的圈选或定义才能获取到数据）</p><h3 id="个性化推荐服务" tabindex="-1"><a class="header-anchor" href="#个性化推荐服务" aria-hidden="true">#</a> 个性化推荐服务</h3><p>在内容、产品的千人千面服务中，用户浏览、点击、互动、下单等行为是算法模型重要的特征输入，比如你刷抖音搜索或者点击“娱乐八卦”的内容，推荐系统会实时给你更新相关的内容，没有埋点，推荐就是事后诸葛亮，体验大大降低。</p><h3 id="精准营销的实时触景营销应用" tabindex="-1"><a class="header-anchor" href="#精准营销的实时触景营销应用" aria-hidden="true">#</a> 精准营销的实时触景营销应用</h3><p>在精细化运营中，除了离线的批量推送场景外，为了提升用户的实时交互感，会配置很多场景化的营销方式。比如用户浏览了很多商品详情都没有下单，是不是因为价格不满意？实时下发优惠券，激发用户下单欲望。没有埋点，就无法实现。</p><h3 id="产品流量转化分析" tabindex="-1"><a class="header-anchor" href="#产品流量转化分析" aria-hidden="true">#</a> 产品流量转化分析</h3><p>用户使用产品的行为路径，不同流量入口进来的用户转化漏斗分析，关键流失环节挖掘，离不开埋点数据。</p><h3 id="黑产及风险用户判断-风控场景" tabindex="-1"><a class="header-anchor" href="#黑产及风险用户判断-风控场景" aria-hidden="true">#</a> 黑产及风险用户判断（风控场景）</h3><p>在反欺诈领域，更要对用户的实时欺诈行为进行识别和拦截，把羊毛党、欺诈用户带来的业务损失降到最小。</p><h2 id="关于埋点的常见问题" tabindex="-1"><a class="header-anchor" href="#关于埋点的常见问题" aria-hidden="true">#</a> 关于埋点的常见问题</h2><h3 id="埋点规范不统一" tabindex="-1"><a class="header-anchor" href="#埋点规范不统一" aria-hidden="true">#</a> 埋点规范不统一</h3><p>如果业务在发展过程中数据部门是后来才成立的，首先要解决的就是埋点不规范的问题，不同业务线、不同产品甚至同一个产品的不同版本埋在规则都不一致，这样数据分析的清洗成本就非常高，比如，同一个位置的埋点，homepage_1_poiid,有的叫 homepage^1^poid，那么在分流量入口统计转化漏斗时，就需要单独处理，从而导致后期的分析成本每次只能 case by case 的处理。</p><h3 id="漏埋、错埋问题频发" tabindex="-1"><a class="header-anchor" href="#漏埋、错埋问题频发" aria-hidden="true">#</a> 漏埋、错埋问题频发</h3><p>一般来说负责埋点的是业务端的前后端开发，负责埋点数据清洗处理的是数据团队，数据输出是下游的业务应用方。一方面是埋点需求流程不清晰，另一方面则是业务研发对数据不了解，而且有时也会认为埋点是增加自己工作量，如此一来就会导致漏埋、错埋的现象。</p><h2 id="如何更好地承接和管理埋点需求" tabindex="-1"><a class="header-anchor" href="#如何更好地承接和管理埋点需求" aria-hidden="true">#</a> 如何更好地承接和管理埋点需求</h2><p>对于企业来说，统一埋点规范虽然会有短期的阵痛，但却是一劳永逸的事情。如果说因为埋点统一事情推进涉及的部门多，周期长，成本高，风险大，一直没人愿意牵头去做这件事情，那么随着业务发展复杂的增大，未来统计的可能性就更低，由此带来的数据质量问题、数据清洗成本会更高。所以在数据治理工作中，埋点治理是源端的治理。</p><p>第一是要协同不同团队，建立大家认可的标准化埋点流程规范。这里一方面是埋点的流程要清晰，从业务端产品、研发、数据团队各司其职。其次是，要通过多方协商，建立一个可以尽可能满足多方的数据采集模型和埋点的规范，比如点位命名规范、分隔方式等。</p><p><img src="'+h+'" alt="构建标准化埋点流程"></p><p>在埋点工作中，业务端的产品或者运营主要从业务需求场景的角度提交数据分析需求，和初步的埋点需求，数据团队需要有人负责埋点的审核（一般是 BI 或者数据产品经理），从埋点设计到上线后数据质量监控，都需要建立规范的管理流程。</p><p><img src="'+r+'" alt="明确职责"></p><p>此外，仅有规范，如果涉及人员的交替，也会导致规范变形，所以需要产品化的方式把规范融入到系统当中，对应的就需要埋点管理系统了，不仅要把埋点的规则内化到埋点需求创建流程当中，还可以把所有的历史埋点统一管理起来，方便查询和使用埋点信息。</p><h2 id="常见的埋点方案与优劣势对比分析" tabindex="-1"><a class="header-anchor" href="#常见的埋点方案与优劣势对比分析" aria-hidden="true">#</a> 常见的埋点方案与优劣势对比分析</h2><p>虽然说现在埋点方案已经非常成熟了，很多人入职公司后更多是负责埋点的具体工作，很少涉及埋点方案的选型，但常见的埋点方案及其优劣势却是在数据产品面试中的高频问题。所以作为数据产品经理也需要了解。</p><h3 id="代码埋点" tabindex="-1"><a class="header-anchor" href="#代码埋点" aria-hidden="true">#</a> 代码埋点</h3><p>代码埋点是最早的埋点方式，根据业务的分析需求，将埋点的采集代码加入到应用端。按照埋点实施方，又分为前端(客户端)埋点和后端(服务端)埋点两种类型。</p><p>（1）客户端埋点</p><p>由前端开发手动定义数据采集时机、内容等将数据采集的代码代码段加入到前端业务代码中，当用户在前端产生对应行为时，触发数据采集代码。</p><p>优点：</p><p>按需埋点，采集数据更全面，几乎可覆盖所有数据采集场景</p><p>行为数据和业务数据可充分联合分析</p><p>缺点：</p><p>延迟上报，数据丢失率高(5%-10%)</p><p>需要客户端发版，用户端更新 App</p><p>埋点开发工作量大</p><p>埋点流程需要多方协作，容易漏埋、错埋</p><p>适用场景：</p><p>全面分析用户在客户端的操作行为，对于一些电商交易类的产品，需要把行为和业务数据充分结合分析</p><p>（2）服务端埋点</p><p>由服务端开发将埋点采集代码加入到后端服务请求中，当用户前端操作请求服务端数据时，按照约定规则触发埋点代码</p><p>优点</p><p>按需埋点，采集数据更全面，几乎可覆盖所有数据采集场景</p><p>行为数据和业务数据可充分联合分析</p><p>数据采集实时上报，准确性高，丢失率低</p><p>服务端更新，不需要客户端发版或用户更新版本</p><p>缺点</p><p>纯前端操作不触发服务请求的按钮点击无法采集数据</p><p>埋点开发工作量大</p><p>埋点流程需要多方协作，容易漏埋、错埋</p><p>适用场景：</p><p>对于一些非点击、不可见的行为，或者要获取用户身份信息、更多的业务相关的属性信息。如果前后端都可以采集到，优先后端埋点</p><h3 id="全埋点" tabindex="-1"><a class="header-anchor" href="#全埋点" aria-hidden="true">#</a> 全埋点</h3><p>全埋点也有称之为无埋点或无痕埋点的，主要是将埋点采集代码封装成标准的 SDK，应用端接入后，按照 SDK 的采集规则自动化地进行数据采集和上报</p><p>优点：</p><p>接入 SDK 后，可自动采集数据，无需按需开发，节省开发成本</p><p>页面可见元素均可自动采集，数据更全面</p><p>埋点流程简单，业务使用埋点系统自助定义事件，新增埋点需求无需业务开发参与</p><p>缺点</p><p>动态页面或页面不可见行为数据无法采集</p><p>和业务强相关的属性信息采集困难</p><p>数据全部采集，数据存储压力大</p><p>适用场景：</p><p>业务场景简单，如工具、应用类的产品，或者业务发展初期，产品快速迭代需求比精细化分析优先级更高，只需要分析简单的 PV、UV</p><h3 id="可视化埋点" tabindex="-1"><a class="header-anchor" href="#可视化埋点" aria-hidden="true">#</a> 可视化埋点</h3><p>默认不采集数据，当数据分析人员通过设备连接用户行为分析工具的数据接入管理界面，在页面可视化定义需要采集的位点后下发采集请求，采集代码生效</p><p>优点：</p><p>默认不上报数据，可视化圈选才按需触发埋点，节约存储和传输成本</p><p>业务可视化圈选，埋点操作简单方便</p><p>缺点</p><p>数据只在埋点圈选定义之后才有，历史数据无法回溯</p><p>只能覆盖基本的点击、展示等用户行为，和业务强相关的属性信息采集困难</p><p>适用场景：</p><p>业务场景简单，如工具、应用类的产品，或者业务发展初期，产品快速迭代需求比精细化分析优先级更高，只需要分析简单的 PV、UV</p><p><img src="'+d+'" alt="埋点各种方案"></p><h2 id="埋点需求文档模板" tabindex="-1"><a class="header-anchor" href="#埋点需求文档模板" aria-hidden="true">#</a> 埋点需求文档模板</h2><p>例如，团购 App 新上线了金刚位，来进行不同业务品类的流量分发。金刚位内容可能不同用户看到的是不一样的，在实际分析时，平台运营侧，偏重于按照位置分析，看哪一个位置的点击效果好，而品类运营则会聚焦于内容哪一个品类的转化更好。埋点需求的关键要素包括：</p><ul><li>事件名：点击金刚位</li><li>事件 ID:clickjingangwei</li><li>事件类型：click</li><li>页面:首页 homepage</li><li>区域：金刚区</li><li>元素：item 位置、item 内容</li><li>平台：微信小程序、APP(android、iOS)、PC</li><li>应用版本：8.0.1</li><li>用户属性：城市、设备机型等 SDK 可以采集的通用属性</li></ul><p>以上仅做示例，实际上，每个公司的埋点模型定义的字段是不一样的，对于可以 SDK 默认收集的字段不需要提需求，仅对可以明确定义唯一事件的内容进行说明即可。</p>',83),t=[n];function c(l,o){return p(),e("div",null,t)}const f=a(s,[["render",c],["__file","数据埋点.html.vue"]]);export{f as default};
