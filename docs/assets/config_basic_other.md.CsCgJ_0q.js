import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.DPuwY6B9.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"config/basic/other.md","filePath":"config/basic/other.md","lastUpdated":1730839424000}'),h={name:"config/basic/other.md"};function e(l,s,k,p,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><h4 id="mikan" tabindex="-1">Mikan <a class="header-anchor" href="#mikan" aria-label="Permalink to &quot;Mikan&quot;">​</a></h4><p>自定义mikan的域名</p><h3 id="bgmtoken" tabindex="-1">BgmToken <a class="header-anchor" href="#bgmtoken" aria-label="Permalink to &quot;BgmToken&quot;">​</a></h3><p>你可以在 <a href="https://next.bgm.tv/demo/access-token" target="_blank" rel="noreferrer">https://next.bgm.tv/demo/access-token</a> 生成一个 Access Token</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>设置 BgmToken 与 emby-webhook 后支持自动点格子</p></div><h4 id="emby-webhook通知设置" tabindex="-1">Emby-Webhook通知设置 <a class="header-anchor" href="#emby-webhook通知设置" aria-label="Permalink to &quot;Emby-Webhook通知设置&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">名称: bgm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url: http://[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:7789/api/web_hook</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请求内容类型: application/json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">勾选: 播放, 用户-标记为已播放, 用户-标记为未播放</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">将媒体库事件限制为：番剧</span></span></code></pre></div><p>如果你没有设置ApiKey, 默认只有内网能够访问webhook</p><p>设置ApiKey后请将url改为</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]:7789/api/web_hook?s=[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">ApiKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>保持emby与ani-rss的映射路径一致可以有更好的效果</p><h4 id="禁止公网访问" tabindex="-1">禁止公网访问 <a class="header-anchor" href="#禁止公网访问" aria-label="Permalink to &quot;禁止公网访问&quot;">​</a></h4><p>禁止公网访问</p><h4 id="最大日志条数" tabindex="-1">最大日志条数 <a class="header-anchor" href="#最大日志条数" aria-label="Permalink to &quot;最大日志条数&quot;">​</a></h4><p>最大日志条数</p><h4 id="自动更新" tabindex="-1">自动更新 <a class="header-anchor" href="#自动更新" aria-label="Permalink to &quot;自动更新&quot;">​</a></h4><p>每天 06:00 自动更新程序</p><h4 id="debug" tabindex="-1">DEBUG <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;DEBUG&quot;">​</a></h4><p>可以看到 debug 级别的日志</p><div class="language-log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:01</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> INFO</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 已下载 深夜冲击 S01E01</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:01</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> INFO</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 下载种子 深夜冲击 S01E01</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:02</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> DEBUG</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 本地文件已存在 深夜冲击 S01E01</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:02</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> DEBUG</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[ANi] Mayonaka Punch / 深夜 Punch - 02 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;深夜冲击 S01E02&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;torrent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://mikanani.me/Download/20240715/1ef6e3168b72cef9a30edb9b97490158629ba7d0.torrent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;episode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:02</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> INFO</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 已下载 深夜冲击 S01E02</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:02</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> INFO</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 下载种子 深夜冲击 S01E02</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:03</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> DEBUG</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - 本地文件已存在 深夜冲击 S01E02</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2024-09-03</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 14:26:03</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> DEBUG</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ani.rss.util.TorrentUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[ANi] Mayonaka Punch / 深夜 Punch - 03 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;深夜冲击 S01E03&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;torrent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://mikanani.me/Download/20240722/ec1ec2faf5356d4b363e42d99b799d31450bc34d.torrent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;episode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h4><p>清理现在不被使用的缓存</p>`,23)]))}const g=i(h,[["render",e]]);export{E as __pageData,g as default};