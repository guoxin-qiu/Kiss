import{_ as p,r as o,o as i,c as l,a as n,b as s,d as e,e as t}from"./app-d85a60fe.js";const c={},r=n("h1",{id:"前端项目配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端项目配置","aria-hidden":"true"},"#"),s(" 前端项目配置")],-1),u=n("h2",{id:"git-提交规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-提交规范","aria-hidden":"true"},"#"),s(" Git 提交规范")],-1),d={href:"https://typicode.github.io/husky",target:"_blank",rel:"noopener noreferrer"},v={href:"https://commitlint.js.org/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> Husky</h3><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成钩子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置完package.json后，先执行yarn生成.husky文件夹</span>
<span class="token function">yarn</span>
<span class="token comment"># pre commit</span>
<span class="token function">yarn</span> husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;yarn lint &amp;&amp; tsc&quot;</span>

<span class="token comment"># commit msg</span>
<span class="token function">yarn</span> husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&quot;yarn commitlint --edit <span class="token variable">$1</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> Commitlint</h3><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @commitlint/cli @commitlint/config-conventional

<span class="token comment"># test</span>
<span class="token function">yarn</span> commitlint <span class="token parameter variable">--from</span> HEAD~3 <span class="token parameter variable">--to</span> HEAD <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在根目录新建配置文件 commitlint.config.js</p><details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * feat：新功能
 * fix：修补功能bug
 * update：更新功能
 * docs：仅文档新增/改动
 * style：仅样式改动
 * refactor：重构，不改变功能
 * chore：构建过程或辅助工具的变动
 * perf：性能优化
 * test: 测试
 * build: 打包
 * ci: 持续集成
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;type-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;scope-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;scope-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;subject-full-stop&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ol><li>Mac 中 husky 不生效</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> .husky/commit-msg
<span class="token function">chmod</span> <span class="token number">777</span> .husky/pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>执行 lint-stage 报错 Error [ERR_UNSUPPORTED_ESM_URL_SCHEME] 需要升级 node 到 14.18.2 以上</li></ol></details><h2 id="编辑器设置" tabindex="-1"><a class="header-anchor" href="#编辑器设置" aria-hidden="true">#</a> 编辑器设置</h2><p>新增文件.editorconfig</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code># https://EditorConfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><ol><li>添加依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort @typescript-eslint/parser @typescript-eslint/eslint-plugin

<span class="token comment"># taro</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> eslint-config-taro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>根目录新增文件.eslintrc</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@typescript-eslint/eslint-plugin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;block-scoped-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;import/no-commonjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsx-quotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-debugger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-shadow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react/jsx-uses-react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react/react-in-jsx-scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/no-var-requires&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/no-explicit-any&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@typescript-eslint/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 taro，则在 extends 里添加 &quot;taro/react&quot;</p><ol start="3"><li>根目录新增文件.eslintignore</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node_modules
dist/
test
build/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在 package.json 中添加 scripts</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src --ext .ts,.tsx,.js,.jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src --ext .ts,.tsx,.js,.jsx --fix&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>如果使用 VS Code 编辑器，修改.vscode/settings.json</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.alwaysShowStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>添加对 CSS 的校验</li></ol><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> eslint-plugin-css-modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改.eslintrc</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;css-modules&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:css-modules/recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;css-modules/no-unused-class&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;dashes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;css-modules/no-undef-class&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;dashes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),m={start:"7"},b={href:"https://typescript-eslint.io/rules/",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,[n("p",null,"Ignore")],-1),g=t(`<h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><p>添加依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> prettier eslint-config-prettier eslint-plugin-prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加文件.prettierrc</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改文件.eslintrc，将 prettier 作为 ESLint 的规则使用</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// others...</span>
    <span class="token string">&quot;prettier&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// others...</span>
    <span class="token string">&quot;prettier&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;unit-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ignore</p><p>&#39;prettier-ignore&#39; to ignore vscode plug-in &#39;Prettier&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* prettier-ignore */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> StyleLint</h2>`,11),y={href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},h=t(`<ol><li>添加依赖包</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> stylelint stylelint-config-standard stylelint-order stylelint-prettier stylelint-config-recess-order
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>添加.stylelintrc 文件</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-recess-order&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-prettier/recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint-prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-empty-source&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;block-no-empty&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;string-quotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;ignoreAtRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;mixin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;extend&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token comment">// &quot;order/order&quot;: [&quot;custom-properties&quot;, &quot;declarations&quot;],</span>
    <span class="token comment">// &quot;order/properties-order&quot;: [&quot;margin&quot;, &quot;pending&quot;, &quot;width&quot;, &quot;height&quot;]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加.stylelintignore 文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node_modules
dist/
test
build/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改 package.json，增加 scripts</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;slint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;slint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.css --fix&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Ignore</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* stylelint-disable */</span>
<span class="token comment">/* prettier-ignore */</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 10Px<span class="token punctuation">;</span>
<span class="token comment">/* stylelint-enable */</span>

<span class="token comment">/* stylelint-disable-line */</span>
<span class="token comment">/* prettier-ignore */</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 10Px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>如果使用 VS Code 编辑器，修改.vscode/settings.json</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;css.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;less.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scss.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylelint.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylelint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postcss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;scss&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>如果使用 scss 安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> postcss postcss-scss stylelint-scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改.stylelintrc 文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-scss&quot;</span>
    <span class="token comment">// others...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 package.json 的 scripts</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;slint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.scss  --custom-syntax postcss-scss&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;slint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.scss --fix  --custom-syntax postcss-scss&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>如果使用的是 less 安装依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> postcss postcss-less stylelint-scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改.stylelintrc 文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-scss&quot;</span>
    <span class="token comment">// others...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 package.json 的 scripts</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;slint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.scss  --custom-syntax postcss-less&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;slint:fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.scss --fix  --custom-syntax postcss-less&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> Lint-Staged</h2><p>在 git 暂存文件上运行配置的 lint 任务，可以大大节省扫描的时间</p><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>package.json</code>里添加命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/*.less&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint --syntax less&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/*.{js,jsx,ts,tsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eslint --fix --ext .js,.jsx,.ts,.tsx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/*.{js,jsx,tsx,ts,less,md,json}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>.husky/pre-commit</code>中的命令改成<code>yarn lint-staged &amp;&amp; tsc</code></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,32),f={href:"https://mp.weixin.qq.com/s/GZxHT7t7_SzdimF8iHXVxw",target:"_blank",rel:"noopener noreferrer"};function x(j,_){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,u,n("p",null,[s("使用 "),n("a",d,[s("husky"),e(a)]),s("和"),n("a",v,[s("commitlint"),e(a)]),s("来规范 git 提交")]),k,n("ol",m,[n("li",null,[n("p",null,[n("a",b,[s("ESLint Rules"),e(a)])])]),q]),g,n("p",null,[n("a",y,[s("StyleLint 官方网站"),e(a)])]),h,n("ul",null,[n("li",null,[n("a",f,[s("超全面的前端工程化配置指南"),e(a)])])])])}const w=p(c,[["render",x],["__file","01.project-setup.html.vue"]]);export{w as default};
