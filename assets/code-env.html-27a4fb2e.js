import{_ as n,o as a,c as s,e}from"./app-d85a60fe.js";const t={},i=e(`<h1 id="编程环境" tabindex="-1"><a class="header-anchor" href="#编程环境" aria-hidden="true">#</a> 编程环境</h1><h2 id="anaconda" tabindex="-1"><a class="header-anchor" href="#anaconda" aria-hidden="true">#</a> Anaconda</h2><h3 id="官网下载安装程序" tabindex="-1"><a class="header-anchor" href="#官网下载安装程序" aria-hidden="true">#</a> 官网下载安装程序</h3><ul><li>https://www.anaconda.com/download</li></ul><h3 id="添加环境变量" tabindex="-1"><a class="header-anchor" href="#添加环境变量" aria-hidden="true">#</a> 添加环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 系统环境变量增加</span>
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>ThinkPad<span class="token punctuation">\\</span>anaconda3
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>ThinkPad<span class="token punctuation">\\</span>anaconda3<span class="token punctuation">\\</span>Scripts
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>ThinkPad<span class="token punctuation">\\</span>anaconda3<span class="token punctuation">\\</span>Library<span class="token punctuation">\\</span>bin
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>ThinkPad<span class="token punctuation">\\</span>anaconda3<span class="token punctuation">\\</span>Library<span class="token punctuation">\\</span>mingw-w64
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>ThinkPad<span class="token punctuation">\\</span>anaconda3<span class="token punctuation">\\</span>Library<span class="token punctuation">\\</span>usr<span class="token punctuation">\\</span>bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装" aria-hidden="true">#</a> 验证安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-V</span>
conda <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快捷方式" tabindex="-1"><a class="header-anchor" href="#快捷方式" aria-hidden="true">#</a> 快捷方式</h3><p>如果 Windows 菜单没有 anaconda 文件夹，在<code>anaconda3</code>目录下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cmd
python .<span class="token punctuation">\\</span>Lib<span class="token punctuation">\\</span>_nsis.py mkmenus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python-代码片段" tabindex="-1"><a class="header-anchor" href="#python-代码片段" aria-hidden="true">#</a> Python 代码片段</h2><h3 id="滑动鼠标避免锁屏" tabindex="-1"><a class="header-anchor" href="#滑动鼠标避免锁屏" aria-hidden="true">#</a> 滑动鼠标避免锁屏</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">import</span> time
<span class="token keyword">import</span> random
<span class="token keyword">import</span> pyautogui

<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
    pyautogui<span class="token punctuation">.</span>moveTo<span class="token punctuation">(</span>x<span class="token operator">=</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token operator">=</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># pyautogui.moveRel(10,0)</span>
    pyautogui<span class="token punctuation">.</span>keyDown<span class="token punctuation">(</span><span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">)</span>
    pyautogui<span class="token punctuation">.</span>keyUp<span class="token punctuation">(</span><span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[i];function c(o,u){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","code-env.html.vue"]]);export{d as default};
