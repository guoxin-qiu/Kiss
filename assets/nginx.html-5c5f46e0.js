import{_ as d,r as s,o as r,c,a as n,b as e,d as l,e as i}from"./app-d85a60fe.js";const t={},o=i('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="使用-nginx-部署-web-项目" tabindex="-1"><a class="header-anchor" href="#使用-nginx-部署-web-项目" aria-hidden="true">#</a> 使用 nginx 部署 Web 项目</h2><h3 id="下载-nginx" tabindex="-1"><a class="header-anchor" href="#下载-nginx" aria-hidden="true">#</a> 下载 nginx</h3>',3),h={href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="修改端口" tabindex="-1"><a class="header-anchor" href="#修改端口" aria-hidden="true">#</a> 修改端口</h3><p>找到 nginx 根目录下的配置文件 <code>conf\\nginx.conf</code>,</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {
  #...
  server {
    listen       8888;
    server_name  localhost;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h3><h4 id="直接部署" tabindex="-1"><a class="header-anchor" href="#直接部署" aria-hidden="true">#</a> 直接部署</h4><p>拷贝打包文件到 nginx 根目录 html 目录中即可（这种方式不用启动 nginx 服务）</p><h4 id="配置路径" tabindex="-1"><a class="header-anchor" href="#配置路径" aria-hidden="true">#</a> 配置路径</h4><p>在 nginx 根目录创建 websites 文件夹， 拷入打包好的 dist 文件夹（命名为项目名）。 修改配置文件<code>conf\\nginx.conf</code></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {
  #...
  server {
    #...
    location / {
      root  websites/kiss/dist;
      index  index.html index.htm;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双击根目录的<code>nginx.exe</code>，启动服务，如果服务已启动，使用根目录中的命令行<code>nginx.exe -s quit</code>结束进程，或者在任务管理器手动结束。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>TODO：没有成功，待补充。。</p></div>`,11);function u(x,m){const a=s("ExternalLinkIcon");return r(),c("div",null,[o,n("p",null,[e("从"),n("a",h,[e("nginx 官网"),l(a)]),e("下载")]),v])}const g=d(t,[["render",u],["__file","nginx.html.vue"]]);export{g as default};
