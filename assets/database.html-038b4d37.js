import{_ as e,o as a,c as s,e as n}from"./app-d85a60fe.js";const r={},d=n(`<h1 id="数据库相关" tabindex="-1"><a class="header-anchor" href="#数据库相关" aria-hidden="true">#</a> 数据库相关</h1><h2 id="sql-server" tabindex="-1"><a class="header-anchor" href="#sql-server" aria-hidden="true">#</a> SQL Server</h2><h3 id="重启服务脚本" tabindex="-1"><a class="header-anchor" href="#重启服务脚本" aria-hidden="true">#</a> 重启服务脚本</h3><ul><li>命令行重启数据库服务，可解决数据库启动加载错误</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net stop sqlserveragent

net stop mssqlserver

net start mssqlserver

net start sqlserveragent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-server2016-使用-string-split-函数" tabindex="-1"><a class="header-anchor" href="#sql-server2016-使用-string-split-函数" aria-hidden="true">#</a> SQL Server2016 使用 STRING_SPLIT 函数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> databaseName <span class="token keyword">SET</span> COMPATIBILITY_LEVEL <span class="token operator">=</span> <span class="token number">130</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行</p><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><h3 id="本地安装" tabindex="-1"><a class="header-anchor" href="#本地安装" aria-hidden="true">#</a> 本地安装</h3><h3 id="本地还原数据库" tabindex="-1"><a class="header-anchor" href="#本地还原数据库" aria-hidden="true">#</a> 本地还原数据库</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>&gt;mysql -u root -p database_name &lt; sql.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查询表条数" tabindex="-1"><a class="header-anchor" href="#查询表条数" aria-hidden="true">#</a> 查询表条数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> table_name<span class="token punctuation">,</span> table_rows
<span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span><span class="token keyword">tables</span>
<span class="token keyword">WHERE</span> table_schema <span class="token operator">=</span> <span class="token string">&#39;database_name&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> table_rows <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[d];function l(t,c){return a(),s("div",null,i)}const h=e(r,[["render",l],["__file","database.html.vue"]]);export{h as default};
