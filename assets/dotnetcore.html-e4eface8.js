import{_ as n,o as s,c as a,e}from"./app-d85a60fe.js";const t={},i=e(`<h1 id="net-core-一些技巧" tabindex="-1"><a class="header-anchor" href="#net-core-一些技巧" aria-hidden="true">#</a> .NET CORE 一些技巧</h1><h2 id="设置上传的最大长度限制" tabindex="-1"><a class="header-anchor" href="#设置上传的最大长度限制" aria-hidden="true">#</a> 设置上传的最大长度限制</h2><ol><li>在代码的<code>Startup.cs</code>中添加以下内容</li></ol><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Startup
{
  public void ConfigureServices(IServiceCollection services)
  {
    services.Configure&lt;FormOptions&gt;(options =&gt;
    {
        options.MultipartBodyLengthLimit = 50 * 1024 * 1024;
    });

    services.Configure&lt;IISServerOptions&gt;(options =&gt;
    {
        options.MaxRequestBodySize = 50 * 1024 * 1024;
    });
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>项目的 web 服务是 IIS，则需要调整 IIS 的设置，选中 API 应用程序，在右侧点击出现的【Request Filtering】，点击右边【Edit Feature Settings】，在 Maximum allowed content length 的输入框输入 52442880</p></li><li><p>更改调试的 IIS Express 设置，在项目的<code>.vs</code>文件夹中找到<code>.vs\\{project}\\config\\applicationhost.config</code>，在以下节点增加内容</p></li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>security</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>requestFiltering</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>requestLimits</span> <span class="token attr-name">maxAllowedContentLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>52442880<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>requestFiltering</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>security</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[i];function c(o,p){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","dotnetcore.html.vue"]]);export{u as default};
