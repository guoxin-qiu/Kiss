import{_ as E,o as e,c as t,e as d}from"./app-d85a60fe.js";const a={},u=d(`<h1 id="excel" tabindex="-1"><a class="header-anchor" href="#excel" aria-hidden="true">#</a> Excel</h1><h2 id="生成-uuid" tabindex="-1"><a class="header-anchor" href="#生成-uuid" aria-hidden="true">#</a> 生成 uuid</h2><ol><li>Excel 生成 guid，uuid 格式：600d65bc-948a-1260-2217-fd8dfeebb1cd</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=LOWER(CONCATENATE(DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),&quot;-&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4),&quot;-&quot;,&quot;4&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;-&quot;,DEC2HEX(RANDBETWEEN(8,11)),DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;-&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Excel 生成 guid，uuid 格式：600d65bc948a12602217fd8dfeebb1cd</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=LOWER(CONCATENATE(DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),&quot;&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4),&quot;&quot;,&quot;4&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;&quot;,DEC2HEX(RANDBETWEEN(8,11)),DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Excel 生成 guid，uuid 格式：4E3B14BB-ECF3-7B2E-A5A2-FE6E1A52DE6A</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=CONCATENATE(DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),&quot;-&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4),&quot;-&quot;,&quot;4&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;-&quot;,DEC2HEX(RANDBETWEEN(8,11)),DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;-&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Excel 生成 guid，uuid 格式：4E3B14BBECF37B2E-A5A2FE6E1A52DE6A</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=CONCATENATE(DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),&quot;&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4),&quot;&quot;,&quot;4&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;&quot;,DEC2HEX(RANDBETWEEN(8,11)),DEC2HEX(RANDBETWEEN(0,POWER(16,3)),3),&quot;&quot;,DEC2HEX(RANDBETWEEN(0,POWER(16,8)),8),DEC2HEX(RANDBETWEEN(0,POWER(16,4)),4))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查找重复值" tabindex="-1"><a class="header-anchor" href="#查找重复值" aria-hidden="true">#</a> 查找重复值</h2><p>选中 》 开始 》 条件格式 》 突出显示单元格规则 》 重复值</p><h2 id="日期格式转文本" tabindex="-1"><a class="header-anchor" href="#日期格式转文本" aria-hidden="true">#</a> 日期格式转文本</h2><p><code>=TEXT(A2,&quot;yyyy-mm-dd&quot;)</code></p>`,14),i=[u];function o(l,n){return e(),t("div",null,i)}const N=E(a,[["render",o],["__file","excel.html.vue"]]);export{N as default};
