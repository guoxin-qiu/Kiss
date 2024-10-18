import{_ as e,o as a,c as d,e as o}from"./app-d85a60fe.js";const r={},c=o('<h1 id="windows-系统的一些小操作" tabindex="-1"><a class="header-anchor" href="#windows-系统的一些小操作" aria-hidden="true">#</a> Windows 系统的一些小操作</h1><h2 id="调整资源管理器左侧的默认链接" tabindex="-1"><a class="header-anchor" href="#调整资源管理器左侧的默认链接" aria-hidden="true">#</a> 调整资源管理器左侧的默认链接</h2><h3 id="去掉系统默认的" tabindex="-1"><a class="header-anchor" href="#去掉系统默认的" aria-hidden="true">#</a> 去掉系统默认的</h3><p><code>运行</code>然后<code>regedit</code> 在 <code>计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MyComputer\\NameSpace</code> 和<code>计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MyComputer\\NameSpace</code>，删除相应的文件夹（或重命名文件夹，比如在前面加一个<code>-</code>） 1）【下载】文件夹： {088e3905-0323-4b02-9826-5d99428e115f} 2）【图片】文件夹： {24ad3ad4-a569-4530-98e1-ab02f9417aa8} 3）【音乐】文件夹： {3dfdf296-dbec-4fb4-81d1-6a3438bcf4de} 4）【文档】文件夹： {d3162b92-9365-467a-956b-92703aca08af} 5）【视频】文件夹： {f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a} 6）【桌面】文件夹： {B4BFCC3A-DB2C-424C-B029-7FE99A87C641} 7）【3D 对象】文件夹： {0DB7E03F-FC29-4DC6-9020-FF41B59E513A}</p><h3 id="去掉-onedriver" tabindex="-1"><a class="header-anchor" href="#去掉-onedriver" aria-hidden="true">#</a> 去掉 OneDriver</h3><p><code>计算机\\HKEY_CLASSES_ROOT\\CLSID\\{018D5C66-4533-4307-9B53-224DE2ED1FE6}\\ShellFolder</code>，将 f080004d =&gt; f090004d</p><h3 id="去掉其他的" tabindex="-1"><a class="header-anchor" href="#去掉其他的" aria-hidden="true">#</a> 去掉其他的</h3><p><code>计算机\\HKEY_CLASSES_ROOT\\CLSID</code>，按名字搜索，之后把显示改成 0</p><h2 id="刷新资源管理器" tabindex="-1"><a class="header-anchor" href="#刷新资源管理器" aria-hidden="true">#</a> 刷新资源管理器</h2><p>打开&quot;任务管理器&quot;，找到&quot;Windows 资源管理器&quot;，右击选择&quot;重新启动&quot;。</p>',10),i=[c];function n(t,h){return a(),d("div",null,i)}const f=e(r,[["render",n],["__file","windows.html.vue"]]);export{f as default};
