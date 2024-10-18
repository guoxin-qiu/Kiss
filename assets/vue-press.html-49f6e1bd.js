import{_ as t,r as d,o as c,c as o,d as e,w as a,e as r,a as n,b as s}from"./app-d85a60fe.js";const u={},p=r(`<h1 id="vue-press-markdown" tabindex="-1"><a class="header-anchor" href="#vue-press-markdown" aria-hidden="true">#</a> Vue Press Markdown</h1><h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger STOP
这是一个危险警告
:::

::: details 点击打开~~
这是一个 details 标签
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>这是一个危险警告</p></div><details class="custom-container details"><summary>点击打开~~</summary><p>这是一个 details 标签</p></details><h2 id="代码组容器" tabindex="-1"><a class="header-anchor" href="#代码组容器" aria-hidden="true">#</a> 代码组容器</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
::: code-group-item FOO

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
::: code-group-item BAR

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts language-ts"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function b(k,g){const i=d("CodeGroupItem"),l=d("CodeGroup");return c(),o("div",null,[p,e(l,null,{default:a(()=>[e(i,{title:"FOO"},{default:a(()=>[v]),_:1}),e(i,{title:"BAR"},{default:a(()=>[m]),_:1})]),_:1})])}const _=t(u,[["render",b],["__file","vue-press.html.vue"]]);export{_ as default};
