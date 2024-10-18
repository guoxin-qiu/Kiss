import{_ as e,r as i,o as l,c as t,a,b as c,d,e as s}from"./app-d85a60fe.js";const o={},r=s(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> Clone</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://username:password@remoteUrl

<span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>远程分支名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote url<span class="token operator">&gt;</span>

<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin git@xxxx.git

<span class="token comment"># 拉取远程分支，并创建本地分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换分支(本地分支)</span>
<span class="token function">git</span> checkout

<span class="token comment"># 拉取远程分支，并创建本地分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev
<span class="token comment"># 如果提示 fatal: &#39;xxx&#39; is not a commit and a branch &#39;xxx&#39; cannot be created from it，先获取一下所有origin</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--all</span>

<span class="token comment"># 创建本地分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>分支名称<span class="token operator">&gt;</span>

<span class="token comment"># 查看项目的分支（包括本地和远程）</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 更友好的方式列出分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-vv</span>

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>Branch-Name<span class="token operator">&gt;</span>

<span class="token comment"># 查看本地分支和追踪情况</span>
<span class="token function">git</span> remote show origin

<span class="token comment">#同步分支信息</span>
<span class="token function">git</span> remote prune origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存代码" tabindex="-1"><a class="header-anchor" href="#缓存代码" aria-hidden="true">#</a> 缓存代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 保存当前未commit的代码</span>
<span class="token function">git</span> stash

<span class="token comment"># 保存当前未commit的代码并添加备注</span>
<span class="token function">git</span> stash save <span class="token string">&quot;备注的内容&quot;</span>

<span class="token comment"># 列出stash的所有记录</span>
<span class="token function">git</span> stash list

<span class="token comment"># 删除stash的所有记录</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># 应用最近一次的stash</span>
<span class="token function">git</span> stash apply

<span class="token comment"># 应用最近一次的stash，随后删除该记录</span>
<span class="token function">git</span> stash pop

<span class="token comment"># 删除最近的一次stash</span>
<span class="token function">git</span> stash drop

<span class="token comment"># 命令组合，rebase谨慎使用</span>
<span class="token function">git</span> stash <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> checkout master <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> fetch <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> rebase <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并-commits" tabindex="-1"><a class="header-anchor" href="#合并-commits" aria-hidden="true">#</a> 合并 Commits</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看要合并的commit.记住最早的commit号</span>
<span class="token function">git</span> log

<span class="token comment"># 回退到此commit号。因为没有使用--hard,所以内容都保存在工作区</span>
<span class="token function">git</span> reset commit_number

<span class="token comment"># 将回退的的内容再次添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 再次提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;comment&quot;</span>

<span class="token comment"># 如果已推送到远程仓库，push时要用到--force或--force-with-lease选项进行强制推送</span>
<span class="token function">git</span> push <span class="token parameter variable">--force</span> origin xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤回" tabindex="-1"><a class="header-anchor" href="#撤回" aria-hidden="true">#</a> 撤回</h3><h4 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h4><p>根据 commitId 来恢复版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 撤销 commit，撤销 add，删除工作区改动代码</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commitId <span class="token operator">|</span> HEAD^<span class="token punctuation">]</span>

<span class="token comment"># 默认参数。撤销 commit，撤销 add，还原工作区改动代码</span>
<span class="token function">git</span> reset <span class="token parameter variable">--mixed</span> <span class="token punctuation">[</span>commitId <span class="token operator">|</span> HEAD^<span class="token punctuation">]</span>

<span class="token comment"># 撤销 commit，不撤销 add，还原工作区改动代码</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token punctuation">[</span>commitId <span class="token operator">|</span> HEAD^<span class="token punctuation">]</span>

<span class="token comment"># -f 参数，强制推送，本地代码会覆盖远程代码</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token punctuation">[</span>commitId <span class="token operator">|</span> HEAD^<span class="token punctuation">]</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git-revert" tabindex="-1"><a class="header-anchor" href="#git-revert" aria-hidden="true">#</a> git revert</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 撤销某个提交</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit-id<span class="token operator">&gt;</span>

<span class="token comment"># 撤销某个提交，但执行命令后不进入编辑界面，也就是不会自动帮你提交文件，需要手动提交</span>
<span class="token function">git</span> revert -n<span class="token operator">|</span>--no-commit <span class="token operator">&lt;</span>commit-id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> Tag</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用于标识重要的版本更新</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.2.4 <span class="token parameter variable">-m</span> <span class="token string">&quot;my version 1.2.4&quot;</span>
<span class="token function">git</span> push origin v1.2.4

<span class="token comment"># 查看版本信息</span>
<span class="token function">git</span> show v1.2.4

<span class="token comment"># 回退到某版本</span>
<span class="token function">git</span> revert <span class="token punctuation">[</span>pre-tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成空文件夹</span>
<span class="token builtin class-name">type</span> null<span class="token operator">&gt;</span>.gitkeep

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作规范" tabindex="-1"><a class="header-anchor" href="#操作规范" aria-hidden="true">#</a> 操作规范</h2>`,21),p={href:"https://mp.weixin.qq.com/s/Z7qrcRjjiwBB5uMLvQd2jA",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="分支管理策略" tabindex="-1"><a class="header-anchor" href="#分支管理策略" aria-hidden="true">#</a> 分支管理策略</h3><p>分成 4 大类</p><ul><li>dev-*</li><li>develop</li><li>staging</li><li>release</li></ul><p><code>dev-*</code> 是一组开发分支的统称，包括个人分支，模块分支，修复分支等，团队开发人员在这组分支上进行开发。</p><p>开发前，先通过 <code>merge</code> 合并 <code>develop</code> 分支的最新代码；开发完成后，必须通过 <code>cherry-pick</code> 合并回 <code>develop</code> 分支。</p><p><code>develop</code> 是一个单独分支，对应开发环境，保留最新的完整的开发代码。它只接受 <code>cherry-pick</code> 的合并，不允许使用 <code>merge</code>。</p><p><code>staging</code> 分支对应测试环境。当 <code>develop</code> 分支有更新并且准备发布测试时，<code>staging</code> 要通过 <code>rebase</code> 合并 <code>develop</code> 分支，然后将最新代码发布到测试服务器，供测试人员测试。</p><p>测试发现问题后，再走 <code>dev-* -&gt; develop -&gt; staging</code> 的流程，直到测试通过。</p><p><code>release</code> 则表示生产环境。<code>release</code> 分支的最新提交永远与线上生产环境代码保持同步，也就是说，<code>release</code> 分支是随时可发布的。</p><p>当 <code>staging</code> 测试通过后，<code>release</code> 分支通过 <code>rebase</code> 合并 <code>staging</code> 分支，然后将最新代码发布到生产服务器。</p><p><em>为什么合并到 develop 必须用 cherry-pick？</em> 使用 <code>merge</code> 合并，如果有冲突，会产生分叉；<code>dev-*</code> 分支多而杂，直接 <code>merge</code> 到 <code>develop</code> 会产生错综复杂的分叉，难以理清提交进度。</p><p>而 <code>cherry-pick</code> 只将需要的 <code>commit</code> 合并到 <code>develop</code> 分支上，且不会产生分叉，使 <code>git</code> 提交图谱（<code>git graph</code>）永远保持一条直线。</p><p>再有，模块开发分支完成后，需要将多个 <code>commit</code> 合为一个 <code>commit</code>，再合并到 <code>develop</code> 分支，避免了多余的 <code>commit</code>，这也是不用 <code>merge</code> 的原因之一。</p><p><em>为什么合并到 staging/release 必须用 rebase？</em><code>release</code> 译为变基，合并同样不会产生分叉。当 <code>develop</code> 更新了许多功能，要合并到 <code>staging</code> 测试，不可能用 <code>cherry-pick</code> 一个一个把 <code>commit</code> 合并过去。因此要通过 <code>rebase</code> 一次性合并过去，并且保证了 <code>staging</code> 与 <code>develop</code> 完全同步。</p><p><code>release</code> 也一样，测试通过后，用 <code>rebase</code> 一次性将 <code>staging</code> 合并过去，同样保证了 <code>staging</code> 与 <code>release</code> 完全同步。</p><h3 id="git-提交规范" tabindex="-1"><a class="header-anchor" href="#git-提交规范" aria-hidden="true">#</a> GIT 提交规范</h3><h4 id="git-commit-message" tabindex="-1"><a class="header-anchor" href="#git-commit-message" aria-hidden="true">#</a> git commit message</h4><ul><li>格式: type(scope): subject，其中 type 和 subject 是必须的</li><li>type 包括 <ul><li>feat: 新功能（feature）</li><li>fix: 修补 bug</li><li>docs: 文档（documentation）</li><li>style: 格式（不影响代码运行的变动）</li><li>refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）</li><li>chore: 构建过程或辅助工具的变动</li><li>revert: 撤销，版本回退</li><li>perf: 性能优化</li><li>test：测试</li><li>improvement: 改进</li><li>build: 打包</li><li>ci: 持续集成</li></ul></li><li>scope 说明此次提交的影响范围，英文</li><li>subject 简短描述，以动词开头，不使用大写字母，不使用中文</li></ul><p>例如： feat: add check in 或 chore(ios): add ios build target</p><h4 id="git-branch-name" tabindex="-1"><a class="header-anchor" href="#git-branch-name" aria-hidden="true">#</a> git branch name</h4><p>类似于 commit message 的要求，格式为 type/subject，多个词使用“-”相连，不使用下划线，不使用大写字母，不使用中文</p><p>例如： feat/check-in</p><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2><h3 id="代码统计" tabindex="-1"><a class="header-anchor" href="#代码统计" aria-hidden="true">#</a> 代码统计</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 查看工程代码 total 情况
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>tformat: <span class="token parameter variable">--numstat</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span>

// 查看成员提交代码情况
<span class="token function">git</span> log <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;%aN&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-u</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> name<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-en</span> <span class="token string">&quot;<span class="token variable">$name</span><span class="token entity" title="\\t">\\t</span>&quot;</span><span class="token punctuation">;</span> <span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>tformat: <span class="token parameter variable">--numstat</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span> -<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交日志-format" tabindex="-1"><a class="header-anchor" href="#提交日志-format" aria-hidden="true">#</a> 提交日志 Format</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span><span class="token string">&quot;%C(red)%h%Creset%C(yellow)%d%Creset %s %C(cyan)(%ar)%Creset&quot;</span>

<span class="token comment"># 加个lg的alias，后续执行使用git lg即可</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.lg <span class="token string">&quot;log --pretty=&#39;%C(red)%h%Creset%C(yellow)%d%Creset %s %C(cyan)(%ar)%Creset&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批处理循环拉取代码" tabindex="-1"><a class="header-anchor" href="#批处理循环拉取代码" aria-hidden="true">#</a> 批处理循环拉取代码</h3><p>创建 bat 文件即可</p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off

echo start git pull...
echo --------------------------------

for /d %%i in (*) do (
 if not %%i == ss-portal (
 echo %%i
 cd C:\\Workspaces\\projectFolder\\%%i
 git pull
 )
)

echo --------------------------------
echo git pull completed.

pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将-github-代码同步到-gitlab-上" tabindex="-1"><a class="header-anchor" href="#将-github-代码同步到-gitlab-上" aria-hidden="true">#</a> 将 Github 代码同步到 Gitlab 上</h3><p>在已有 git 的项目代码下，执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> gitlab ssh://git@xxxx/xx.git
<span class="token function">git</span> push gitlab master


<span class="token function">git</span> pull gitlab master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-网络环境" tabindex="-1"><a class="header-anchor" href="#github-网络环境" aria-hidden="true">#</a> Github 网络环境</h2><p>在 <code>C:\\Windows\\System32\\drivers\\etc</code> 的 <code>hosts</code> 文件中加上以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">140.82</span>.112.4 github.com
<span class="token number">199.232</span>.69.194 github.global.ssl.fastly.net

<span class="token number">140.82</span>.113.3    github.com
<span class="token number">151.101</span>.1.194  github.global.ssl.fastly.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置" aria-hidden="true">#</a> GIT 配置</h2><h3 id="config-配置" tabindex="-1"><a class="header-anchor" href="#config-配置" aria-hidden="true">#</a> Config 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">--list</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token boolean">false</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&#39;username&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">&#39;email&#39;</span>

<span class="token function">git</span> config <span class="token parameter variable">--local</span> core.quotepath <span class="token boolean">false</span> <span class="token comment"># 命令行中，中文显示乱码</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-设置" tabindex="-1"><a class="header-anchor" href="#ssh-设置" aria-hidden="true">#</a> SSH 设置</h3><p>设置 Git user 的 name 和 email</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;name@costo.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查是否存在 SSH key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> ~/.ssh
 <span class="token function">ls</span>
 // or
 ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成 SSH key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取 SSH key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GitHub 添加 SSH key</p><p>用户头像 -&gt; Setting -&gt; SSH and GPG keys -&gt; New SSH key -&gt; paste</p><p>验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示 continue connecting？输入 yes</p><p>IOS</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo.com&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span>&quot;</span>
ssh-add <span class="token parameter variable">-K</span> ~/.ssh/id_rsa
pbcopy <span class="token operator">&lt;</span> ~/.ssh/id_rsa.pub
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
  <span class="token function">git</span> remote set-url origin ssh地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置多个-ssh" tabindex="-1"><a class="header-anchor" href="#配置多个-ssh" aria-hidden="true">#</a> 配置多个 SSH</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo1.com&quot;</span> //在命令行提示中指定文件名例如为id_1
  ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo2.com&quot;</span> //在命令行提示中指定文件名例如为id_2

.ssh文件下新增confg文件（无后缀的文件）

  Host xx.github.com
  HostName github.xx.com
  User test1
  IdentityFile  ~/.ssh/id_1

  Host github.com
  HostName github.com
  User test2
  IdentityFile  ~/.ssh/id_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将新产生的密钥加入管理（在你真正的项目的文件夹里面执行）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-add ~/.ssh/id_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示 Could not open a connection to your authentication agent，关掉所有的 bash 窗口，新开一个，然后输入以下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-agent <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用命令行查看是否授权成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> github.xx.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> <span class="token parameter variable">-v</span> github.xx.com //详细log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,64);function u(m,b){const n=i("ExternalLinkIcon");return l(),t("div",null,[r,a("p",null,[a("a",p,[c("参考 1"),d(n)])]),v])}const g=e(o,[["render",u],["__file","git.html.vue"]]);export{g as default};
