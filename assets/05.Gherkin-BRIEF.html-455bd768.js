import{_ as t,r as n,o as r,c as i,a as e,b as o,d as s,e as h}from"./app-d85a60fe.js";const d={},c=h('<h1 id="gherkin-brief-principle" tabindex="-1"><a class="header-anchor" href="#gherkin-brief-principle" aria-hidden="true">#</a> Gherkin BRIEF Principle</h1><p>Main Goals of Scenarios:</p><ul><li>Scenarios should be thought of as documentation, rather than tests.</li><li>Scenarios should enable collaboration between business and delivery, not prevent it.</li><li>Scenarios should support the evolution of the product, rather than obstruct it.</li></ul><h2 id="business-language" tabindex="-1"><a class="header-anchor" href="#business-language" aria-hidden="true">#</a> Business Language</h2><p>The words used in a scenario should be drawn from the business domain, otherwise you will not be able to engage your business colleagues painlessly. The language you use should use terms that business team members understand unambiguously.</p><h4 id="common-anti-pattern" tabindex="-1"><a class="header-anchor" href="#common-anti-pattern" aria-hidden="true">#</a> Common Anti-pattern</h4><p>Using terms that mean different things in different contexts (e.g. address, user, date, account)</p><h2 id="real-data" tabindex="-1"><a class="header-anchor" href="#real-data" aria-hidden="true">#</a> Real Data</h2><p>Examples should use concrete, real data. This helps expose boundary conditions and underlying assumptions early in the development process. When writing scenarios, we should also use real data whenever this helps <code>reveal intention</code>.</p><h4 id="common-anti-pattern-1" tabindex="-1"><a class="header-anchor" href="#common-anti-pattern-1" aria-hidden="true">#</a> Common Anti-pattern</h4><p>Scenario relies on the existence of specific production data (e.g. using an actual customer ID &quot;1234&quot;, with the expectation that a customer with that ID will actually exist in the customer database).</p><h2 id="intension-revealing" tabindex="-1"><a class="header-anchor" href="#intension-revealing" aria-hidden="true">#</a> Intension Revealing</h2><p>Scenarios should reveal the <code>intent</code> of what the actors in the scenario are trying to achieve, rather than describing the <code>mechanics</code> of how they will achieve it. We should start by giving the scenario an intention revealing name, and then follow through by ensuring that every line in the scenario describes <code>intent</code>, not <code>mechanics</code>.</p><h4 id="common-anti-pattern-2" tabindex="-1"><a class="header-anchor" href="#common-anti-pattern-2" aria-hidden="true">#</a> Common Anti-pattern</h4><p>Using UI terminology (e.g. click button, follow link).</p><h2 id="essential" tabindex="-1"><a class="header-anchor" href="#essential" aria-hidden="true">#</a> Essential</h2><p>The purpose of a scenario is to illustrate how a rule should behave. Any parts of a scenario that don&#39;t directly contribute to this purpose are incidental and should be removed. If they are important to the system, then they will be covered in other scenarios that illustrate other rules. Additionally, any scenarios that do not add to the reader&#39;s understanding of the expected behaviour have no place in the documentation.</p><h4 id="common-anti-pattern-3" tabindex="-1"><a class="header-anchor" href="#common-anti-pattern-3" aria-hidden="true">#</a> Common Anti-pattern</h4><p>Including too much incidental detail (e.g. a rule that depends on the date should not be illustrated using date &amp; time, unless the rule&#39;s behaviour may be affected by the time)</p><h2 id="focused" tabindex="-1"><a class="header-anchor" href="#focused" aria-hidden="true">#</a> Focused</h2><p>Most scenarios should be focused on illustrating a <code>single rule</code>. It&#39;s easier to achieve this if you derive your scenarios from concrete examples captured during an Example Mapping session.</p><h4 id="common-anti-pattern-4" tabindex="-1"><a class="header-anchor" href="#common-anti-pattern-4" aria-hidden="true">#</a> Common Anti-pattern</h4><p>A scenario can start failing even if the rule that it illustrates has not changed (e.g. changing the interest rate of a loan causes a scenario that illustrates the day of the month that the interest payment will be taken to fail).</p><h2 id="brief" tabindex="-1"><a class="header-anchor" href="#brief" aria-hidden="true">#</a> Brief</h2><p>We suggest you try to restrict most of your scenarios to five lines or fewer. This makes them easier to read and much easier to reason about.</p><h4 id="common-anti-pattern-5" tabindex="-1"><a class="header-anchor" href="#common-anti-pattern-5" aria-hidden="true">#</a> Common Anti-pattern</h4><p>Long scenarios that are never read by the product owner, because they can&#39;t understand them and see no value in them.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',28),l={href:"https://cucumber.io/blog/bdd/keep-your-scenarios-brief",target:"_blank",rel:"noopener noreferrer"};function u(p,m){const a=n("ExternalLinkIcon");return r(),i("div",null,[c,e("ul",null,[e("li",null,[e("a",l,[o("Keep your scenarios BRIEF"),s(a)])])])])}const b=t(d,[["render",u],["__file","05.Gherkin-BRIEF.html.vue"]]);export{b as default};