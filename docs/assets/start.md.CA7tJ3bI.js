import{_ as s}from"./chunks/mikan-pic.ClAoTlM7.js";import{_ as i,c as e,a2 as t,o as n}from"./chunks/framework.DPuwY6B9.js";const h="/assets/Xnip2024-11-05_05-41-50.BVj9cTPw.png",F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"start.md","filePath":"start.md","lastUpdated":1730784143000}'),p={name:"start.md"};function l(r,a,d,o,k,c){return n(),e("div",null,a[0]||(a[0]=[t('<img alt="mikan-pic.png" height="80" width="80" src="'+s+`"><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><p><a href="#群晖nas">群晖NAS</a></p><p>默认 用户名: admin 密码: admin</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>分为两个版本</p><p><a href="https://github.com/wushuo894/ani-rss/releases/latest" target="_blank" rel="noreferrer">ani-rss.win.x86_64.zip</a> 自带jdk, 解压后即可运行</p><p><a href="https://github.com/wushuo894/ani-rss/releases/latest" target="_blank" rel="noreferrer">ani-rss-launcher.exe</a> 需要 <a href="#windows">自行安装jdk</a></p><p>运行后 <strong>右下角会出现托盘</strong> 可通过其打开浏览器</p><h4 id="开机自启动" tabindex="-1">开机自启动 <a class="header-anchor" href="#开机自启动" aria-label="Permalink to &quot;开机自启动&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">将 ani-rss-launcher.exe 创建快捷方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">将快捷方式移动到 C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</span></span></code></pre></div><h3 id="安装-java" tabindex="-1">安装 java <a class="header-anchor" href="#安装-java" aria-label="Permalink to &quot;安装 java&quot;">​</a></h3><p>推荐使用 jdk11 或 jdk17 如果已经有了可以跳过</p><h5 id="windows-1" tabindex="-1">Windows <a class="header-anchor" href="#windows-1" aria-label="Permalink to &quot;Windows&quot;">​</a></h5><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;OpenJDK 11&#39;</span></span></code></pre></div><h5 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h5><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk-11-jdk</span></span></code></pre></div><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk@11</span></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><p>下载最新的 <strong>ani-rss-jar-with-dependencies.jar</strong> <a href="https://github.com/wushuo894/ani-rss/releases/latest" target="_blank" rel="noreferrer">链接</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Xmx1g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ani-rss-jar-with-dependencies.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7789</span></span></code></pre></div><p>使用 <code>--gui</code> 参数使 桌面端 显示托盘</p><h4 id="脚本运行-支持自动重启" tabindex="-1">脚本运行 支持自动重启 <a class="header-anchor" href="#脚本运行-支持自动重启" aria-label="Permalink to &quot;脚本运行 支持自动重启&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/wushuo894/ani-rss/raw/master/docker/run.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./run.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./run.sh</span></span></code></pre></div><p>通过 <strong>http://[ip]:7789</strong> 访问</p><h3 id="群晖nas" tabindex="-1">群晖NAS <a class="header-anchor" href="#群晖nas" aria-label="Permalink to &quot;群晖NAS&quot;">​</a></h3><p><strong>请提前安装 Java 17 OpenJdk 套件</strong></p><p>离线安装 <a href="https://github.com/wushuo894/ani-rss/releases/download/v1.1.110/ANI-RSS_v1.1.110_noarch-DSM7.spk" target="_blank" rel="noreferrer">ani-rss_v1.1.110_noarch-DSM7.spk</a></p><p>或者</p><p>使用矿神套件源 <code>https://spk7.imnks.com</code> , 搜索 <code>ani-rss</code> 安装</p><p><img src="`+h+'" alt="Xnip2024-11-05_05-41-50.png" loading="lazy"></p>',32)]))}const b=i(p,[["render",l]]);export{F as __pageData,b as default};