import{_ as a,c as n,a2 as p,o as i}from"./chunks/framework.D6PIRKQ_.js";const d=JSON.parse('{"title":"Node.js+Express+MongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"blog/doing/node.md","filePath":"blog/doing/node.md"}'),e={name:"blog/doing/node.md"};function l(t,s,h,r,k,o){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="node-js-express-mongodb" tabindex="-1">Node.js+Express+MongoDB <a class="header-anchor" href="#node-js-express-mongodb" aria-label="Permalink to &quot;Node.js+Express+MongoDB&quot;">​</a></h1><h2 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h2><h3 id="node-farm" tabindex="-1">node-farm <a class="header-anchor" href="#node-farm" aria-label="Permalink to &quot;node-farm&quot;">​</a></h3><table tabindex="0"><thead><tr><th>milliseconds [ˈmiliˌsekəndz]<br>n. 毫秒( millisecond的复数形式 )</th><th></th></tr></thead><tbody><tr><td>paradigm [&#39;pærәdaim]<br>n. 范例, 式样, 词形变化表, 纵聚合关系语言项</td><td></td></tr><tr><td>syntax [&#39;sintæks]<br>n. 句法, 语法, 句子构造<br>[计] 句法, 语法</td><td></td></tr><tr><td></td><td></td></tr></tbody></table><p>i am using Node.js v18.16.0</p><p>FS.module</p><p><a href="https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#file-system" target="_blank" rel="noreferrer">File system</a></p><p><strong>index.js</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file system</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> textIn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./starter/txt/input.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(textIn);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> textOut</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`This is what we know about the avocado: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textIn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Created on \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./starter/txt/output.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, textOut)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;File written!!!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><strong>synchronous</strong> is basically processed on after another,line by line.(<strong>blocking</strong>)</p><p><strong>asynchronous (non-blocking)</strong></p><p>callback hell</p><p>SOLUTION: Using Promises or Async/Await [Optional Section]</p><p>file</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file system</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// blocking, synchronous way</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// const textIn = fs.readFileSync(&#39;./starter/txt/input.txt&#39;,&#39;utf-8&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// console.log(textIn);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// const textOut = \`This is what we know about the avocado: \${textIn}.\\nCreated on \${Date.now()}\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fs.writeFileSync(&#39;./starter/txt/output.txt&#39;, textOut)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// console.log(&#39;File written!!!&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Non-blocking, asynchronous way</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1.start.txt的文件内容是read-this，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2.读取到内容之后再去读名为read-this.txt的文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3.把内容写进final.txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./starter/txt/start.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data1);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`./starter/txt/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.txt\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./starter/txt/append.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data3);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./starter/txt/final.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;your file has been written 🤪&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;will read file&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// first</span></span></code></pre></div><p>server</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file system</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ---------------------------------------------------server--------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello from the server💝&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;listening to request port 8000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>url</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file system</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ---------------------------------------------------server--------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  pathName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.url</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pathName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pathName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/overview&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;This is the OVERVIEW&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pathName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/product&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;This is the PRODUCT&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;Content-type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text/html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;my-own-header&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello-world&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;h1&gt;Page not found!!&lt;/h1&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;listening to request port 8000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>请求json数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;)  // file system</span></span>
<span class="line"><span>const http = require(&#39;http&#39;)</span></span>
<span class="line"><span>const url = require(&#39;url&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ---------------------------------------------------server--------------------------------------------------------------</span></span>
<span class="line"><span>const server = http.createServer((req,res) =&gt; {</span></span>
<span class="line"><span>    const  pathName = req.url</span></span>
<span class="line"><span>    if(pathName === &#39;/&#39; ||  pathName === &#39;/overview&#39;) {</span></span>
<span class="line"><span>        res.end(&#39;This is the OVERVIEW&#39;)</span></span>
<span class="line"><span>    } else if (pathName === &#39;/product&#39;) {</span></span>
<span class="line"><span>        res.end(&#39;This is the PRODUCT&#39;)</span></span>
<span class="line"><span>    } else if(pathName === &#39;/api&#39;) {</span></span>
<span class="line"><span>        fs.readFile(\`\${__dirname}/final/dev-data/data.json\`,&#39;utf-8&#39;, (err,data) =&gt; {</span></span>
<span class="line"><span>           const productData = JSON.parse(data)</span></span>
<span class="line"><span>           res.writeHead(200,{</span></span>
<span class="line"><span>            &#39;Content-type&#39; : &#39;application/json&#39;</span></span>
<span class="line"><span>           })</span></span>
<span class="line"><span>           res.end(data)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        res.writeHead(404, {</span></span>
<span class="line"><span>            &#39;Content-type&#39; : &#39;text/html&#39;,</span></span>
<span class="line"><span>            &#39;my-own-header&#39; : &#39;hello-world&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        res.end(&#39;&lt;h1&gt;Page not found!!&lt;/h1&gt;&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>server.listen(8000, &#39;127.0.0.1&#39;, () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;listening to request port 8000&#39;);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// -----------------------------------------------------------------------------------------------------------------</span></span></code></pre></div><p>只读取一次json文件 <strong>fs.readFileSync</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&quot;fs&quot;); // file system</span></span>
<span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span>const url = require(&quot;url&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ---------------------------------------------------server--------------------------------------------------------------</span></span>
<span class="line"><span>const data = fs.readFileSync(\`\${__dirname}/final/dev-data/data.json\`, &quot;utf-8&quot;);</span></span>
<span class="line"><span>const dataObj = JSON.parse(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const server = http.createServer((req, res) =&gt; {</span></span>
<span class="line"><span>  const pathName = req.url;</span></span>
<span class="line"><span>  if (pathName === &quot;/&quot; || pathName === &quot;/overview&quot;) {</span></span>
<span class="line"><span>    res.end(&quot;This is the OVERVIEW&quot;);</span></span>
<span class="line"><span>  } else if (pathName === &quot;/product&quot;) {</span></span>
<span class="line"><span>    res.end(&quot;This is the PRODUCT&quot;);</span></span>
<span class="line"><span>  } else if (pathName === &quot;/api&quot;) {</span></span>
<span class="line"><span>    res.writeHead(200, {</span></span>
<span class="line"><span>        &quot;Content-type&quot;: &quot;application/json&quot;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      res.end(data);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    res.writeHead(404, {</span></span>
<span class="line"><span>      &quot;Content-type&quot;: &quot;text/html&quot;,</span></span>
<span class="line"><span>      &quot;my-own-header&quot;: &quot;hello-world&quot;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    res.end(&quot;&lt;h1&gt;Page not found!!&lt;/h1&gt;&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>server.listen(8000, &quot;127.0.0.1&quot;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;listening to request port 8000&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>node-farm</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// file system</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ---------------------------------------------------server--------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// We just only executed once,right at the beginning</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> replaceTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">temp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%PRODUCTNAME%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.productName); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// g全局替换</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%IMAGE%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.image);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%FROM%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.from);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%NUTRIENTS%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.nutrients);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%QUANTITY%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.quantity);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%PRICE%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.price);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%DESCRIPTION%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.description);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%ID%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.id);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">product.organic)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%NOT_ORGANIC%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;not-organic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tempOverview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/final/templates/template-overview.html\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;utf-8&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tempCard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/final/templates/template-card.html\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;utf-8&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tempProduct</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/final/templates/template-product.html\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;utf-8&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/final/dev-data/data.json\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataObj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pathname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.url, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   overview page</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pathname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pathname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/overview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Content-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cardHtml</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dataObj</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> replaceTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempCard, el))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> output</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tempOverview.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{%PRODUCT_CARDS%}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cardHtml);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // product page</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pathname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/product&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Content-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> product</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dataObj[query.id]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> output</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> replaceTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempProduct, product)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(output);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // api page</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (pathname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Content-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //   404 page</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Content-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;my-own-header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello-world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;h1&gt;Page not found!!&lt;/h1&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;listening to request port 8000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>把模块抽离出来放在modules/.replaceTemplate.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">temp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%PRODUCTNAME%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.productName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%IMAGE%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.image);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%PRICE%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.price);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%FROM%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.from);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%NUTRIENTS%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.nutrients);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%QUANTITY%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.quantity);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%DESCRIPTION%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.description);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%ID%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, product.id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">product.organic) output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{%NOT_ORGANIC%}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;not-organic&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在index.js引用</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> replaceTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../1-node-farm/final/modules/replaceTemplate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>npm init</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>See \`npm help init\` for definitive documentation on these fields</span></span>
<span class="line"><span>and exactly what they do.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Use \`npm install &lt;pkg&gt;\` afterwards to install a package and</span></span>
<span class="line"><span>save it as a dependency in the package.json file.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Press ^C at any time to quit.</span></span>
<span class="line"><span>package name: (1-node-farm) node-farm</span></span>
<span class="line"><span>version: (1.0.0)</span></span>
<span class="line"><span>description: Learning node.js</span></span>
<span class="line"><span>entry point: (index.js)</span></span>
<span class="line"><span>test command:</span></span>
<span class="line"><span>git repository:</span></span>
<span class="line"><span>keywords:</span></span>
<span class="line"><span>author: Chloe</span></span>
<span class="line"><span>license: (ISC)</span></span>
<span class="line"><span>About to write to D:\\learn-node\\learn-node\\project\\1-node-farm\\package.json:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;node-farm&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;Learning node.js&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;Chloe&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Is this OK? (yes)</span></span></code></pre></div><p>​</p><p>npm install nodemon --save-dev</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node-farm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Learning node.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Error: no test specified</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Chloe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;nodemon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^2.0.22&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>nodemon index.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[nodemon] 2.0.22</span></span>
<span class="line"><span>[nodemon] to restart at any time, enter \`rs\`</span></span>
<span class="line"><span>[nodemon] watching path(s): *.*</span></span>
<span class="line"><span>[nodemon] watching extensions: js,mjs,json</span></span>
<span class="line"><span>[nodemon] starting \`node index.js\`</span></span>
<span class="line"><span>listening to request port 8000</span></span></code></pre></div><p>npm run start / npm start</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;node-farm&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;Learning node.js&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;nodemon index.js&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;Chloe&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;nodemon&quot;: &quot;^2.0.22&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>&quot;nodemon&quot;: &quot;^2.0.22&quot;</p><p>^ means that we accept patch and minor releases.</p><p>2 major version --- afect the code /big change</p><p>0 minor version</p><p>22patch version</p><p>&quot;nodemon&quot;: &quot;~2.0.22&quot;</p><p>~ means only accept patch releases.This one is a bit safer.</p><p>&quot;nodemon&quot;: &quot;*2.0.22&quot;</p><p>*This one includes all the versions,</p><p><strong>25集http</strong></p><p><strong>30集 threads and a thread pool.</strong></p><p>Event loop does orchestration 事件循环进行编排</p><p>START ↓ Expired timer callbacks 过期的计时器回调 ↓ I/O polling and callbacks I/O轮询和回调 ↓ setlmmediate callbacks 即时回调 ↓ Close callbacks 关闭回调</p><p>Don&#39;t use sync versions of functions in fs,crypto and zlib modules in your callback functions Don&#39;t perform complex calculations (e.g.loops inside loops) Be careful with JSON in large objects Don&#39;t use too complex regular expressions (e.g.nested quantifiers)</p><p>what is streams?</p><p>Used to process(read and write)data piece by piece(chunks). without completing the whole read or write operation,and therefore without keeping all the data in memory. such as NETFLIX and You Tube Perfect for handling large volumes of data,for example videos; More efficient data processing in terms of memory (no need to keep all data in memory)and time(we don&#39;t have to wait until all the data is available).</p><p>stream.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span>const server = require(&quot;http&quot;).createServer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.on(&quot;request&quot;, (req, res) =&gt; {</span></span>
<span class="line"><span>  // solution 1 直接读取大文件会崩掉</span></span>
<span class="line"><span>  // fs.readFile(&#39;./test-file.txt&#39;,(err,data) =&gt; {</span></span>
<span class="line"><span>  //     if(err) console.log(err);</span></span>
<span class="line"><span>  //     res.end(data)</span></span>
<span class="line"><span>  // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // solution 2 consume piece by piece.So chunk by chunk.</span></span>
<span class="line"><span>  //   So in this case,backpressure happens when the response</span></span>
<span class="line"><span>  //   const readable = fs.createReadStream(&quot;test-file.txt&quot;);</span></span>
<span class="line"><span>  //   readable.on(&quot;data&quot;, (chunk) =&gt; {</span></span>
<span class="line"><span>  //     res.write(chunk);</span></span>
<span class="line"><span>  //   });</span></span>
<span class="line"><span>  //   readable.on(&quot;end&quot;, () =&gt; {</span></span>
<span class="line"><span>  //     res.end();</span></span>
<span class="line"><span>  //   });</span></span>
<span class="line"><span>  //   readable.on(&quot;error&quot;, (err) =&gt; {</span></span>
<span class="line"><span>  //     console.log(err);</span></span>
<span class="line"><span>  //     res.statusCode = 500;</span></span>
<span class="line"><span>  //     res.end(&quot;file not found&quot;);</span></span>
<span class="line"><span>  //   });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // solution 3</span></span>
<span class="line"><span>    const readable = fs.createReadStream(&quot;test-file.txt&quot;);</span></span>
<span class="line"><span>    readable.pipe(res)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.listen(8000, &quot;127.0.0.1&quot;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;listening....&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>modules.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(arguments);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node modules.js</span></span>
<span class="line"><span>// output</span></span>
<span class="line"><span>[Arguments] {</span></span>
<span class="line"><span>  &#39;0&#39;: {},</span></span>
<span class="line"><span>  &#39;1&#39;: [Function: require] {</span></span>
<span class="line"><span>    resolve: [Function: resolve] { paths: [Function: paths] },</span></span>
<span class="line"><span>    main: Module {</span></span>
<span class="line"><span>      id: &#39;.&#39;,</span></span>
<span class="line"><span>      path: &#39;D:\\\\learn-node\\\\learn-node\\\\project\\\\2-how-node-works&#39;,</span></span>
<span class="line"><span>      exports: {},</span></span>
<span class="line"><span>      filename: &#39;D:\\\\learn-node\\\\learn-node\\\\project\\\\2-how-node-works\\\\modules.js&#39;,</span></span>
<span class="line"><span>      loaded: false,</span></span>
<span class="line"><span>      children: [],</span></span>
<span class="line"><span>      paths: [Array]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    extensions: [Object: null prototype] {</span></span>
<span class="line"><span>      &#39;.js&#39;: [Function (anonymous)],</span></span>
<span class="line"><span>      &#39;D:\\\\learn-node\\\\learn-node\\\\project\\\\2-how-node-works\\\\node_modules&#39;,</span></span>
<span class="line"><span>      &#39;D:\\\\learn-node\\\\learn-node\\\\project\\\\node_modules&#39;,</span></span>
<span class="line"><span>      &#39;D:\\\\learn-node\\\\learn-node\\\\node_modules&#39;,</span></span>
<span class="line"><span>      &#39;D:\\\\learn-node\\\\node_modules&#39;,</span></span>
<span class="line"><span>      &#39;D:\\\\node_modules&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &#39;3&#39;: &#39;D:\\\\learn-node\\\\learn-node\\\\project\\\\2-how-node-works\\\\modules.js&#39;,</span></span>
<span class="line"><span>  &#39;4&#39;: &#39;D:\\\\learn-node\\\\learn-node\\\\project\\\\2-how-node-works&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(require(&#39;module&#39;).wrapper);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[</span></span>
<span class="line"><span>  &#39;(function (exports, require, module, __filename, __dirname) { &#39;,</span></span>
<span class="line"><span>  &#39;\\n});&#39;</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>test-module-1.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// class Calculator {</span></span>
<span class="line"><span>//     add(a,b) {</span></span>
<span class="line"><span>//         return a+b</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//     multiply(a,b) {</span></span>
<span class="line"><span>//         return a*b</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//     divide(a,b) {</span></span>
<span class="line"><span>//         return a / b</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = class {</span></span>
<span class="line"><span>    add(a,b) {</span></span>
<span class="line"><span>        return a+b</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    multiply(a,b) {</span></span>
<span class="line"><span>        return a*b</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    divide(a,b) {</span></span>
<span class="line"><span>        return a / b</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>test-module-2.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exports.add = (a,b) =&gt; a+b</span></span>
<span class="line"><span>exports.multiply = (a,b) =&gt; a*b</span></span>
<span class="line"><span>exports.divide = (a,b) =&gt; a/b</span></span></code></pre></div><p>test-module-3.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&#39;hello from the module&#39;); // the code inside of it was also executed once only.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = () =&gt; console.log(&#39;log this beautiful text😃&#39;);</span></span></code></pre></div><p>modules.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// console.log(arguments);</span></span>
<span class="line"><span>// console.log(require(&#39;module&#39;).wrapper);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// module.exports</span></span>
<span class="line"><span>const C = require(&#39;./test-module-1&#39;)</span></span>
<span class="line"><span>const calc1 = new C()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(calc1.add(2,5));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// exports</span></span>
<span class="line"><span>// const calc2 = require(&#39;./test-module-2&#39;)</span></span>
<span class="line"><span>// console.log(calc2.divide(10,5));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { add, multiply, divide} = require(&#39;./test-module-2&#39;)</span></span>
<span class="line"><span>console.log(multiply(2,5));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//caching</span></span>
<span class="line"><span>require(&#39;./test-module-3&#39;)()</span></span>
<span class="line"><span>require(&#39;./test-module-3&#39;)()</span></span>
<span class="line"><span>require(&#39;./test-module-3&#39;)()</span></span></code></pre></div><p>call back hell</p><p>npm i superagent</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.readFile(\`\${__dirname}/dog.txt\`, (err, data) =&gt; {</span></span>
<span class="line"><span>  console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  superagent</span></span>
<span class="line"><span>    .get(\`https://dog.ceo/api/breed/\${data}/images/random\`)</span></span>
<span class="line"><span>    .end((err, res) =&gt; {</span></span>
<span class="line"><span>        if (err) return console.log(err.message);</span></span>
<span class="line"><span>      console.log(res.body.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      fs.writeFile(&#39;dog-img.txt&#39;,res.body.message,err =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;Rondom dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>use .then .catch</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.readFile(\`\${__dirname}/dog.txt\`, (err, data) =&gt; {</span></span>
<span class="line"><span>  console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  superagent</span></span>
<span class="line"><span>    .get(\`https://dog.ceo/api/breed/\${data}/images/random\`)</span></span>
<span class="line"><span>    .then((res) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err.message);</span></span>
<span class="line"><span>      console.log(res.body.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      fs.writeFile(&#39;dog-img.txt&#39;, res.body.message, (err) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;Rondom dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch((err) =&gt; {</span></span>
<span class="line"><span>      console.log(err.message);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span></code></pre></div><ol><li><p>导入了两个模块：<code>fs</code>和<code>superagent</code>。<code>fs</code>模块用于文件读写操作，<code>superagent</code>模块用于发送HTTP请求。</p></li><li><p>定义了两个Promise函数：readFilePro和writeFilePro，用于封装fs.readFilefs.writeFile方法，以便在异步操作中使用。</p><ul><li><code>readFilePro</code>函数接收一个文件路径作为参数，返回一个Promise对象，它会读取指定路径的文件内容。如果读取成功，Promise将被解析并传递文件内容，否则将被拒绝并传递错误信息。</li><li><code>writeFilePro</code>函数接收一个文件路径和数据作为参数，返回一个Promise对象，它会将指定数据写入指定路径的文件。如果写入成功，Promise将被解析并传递成功的消息，否则将被拒绝并传递错误信息。</li></ul></li><li><p>调用readFilePro函数读取文件\${__dirname}/dog.txt</p><p>，并通过Promise链式调用进行后续操作。</p><ul><li>在第一个<code>then</code>回调函数中，输出读取到的文件内容，并使用<code>superagent</code>发送HTTP GET请求，请求URL为<code>https://dog.ceo/api/breed/\${data}/images/random</code>，其中<code>\${data}</code>是从文件中读取的内容。返回的Promise将在请求成功后继续链式调用。</li><li>在第二个<code>then</code>回调函数中，输出响应的主体消息，并调用<code>writeFilePro</code>函数将消息写入文件<code>dog-img.txt</code>。返回的Promise将在写入成功后继续链式调用。</li><li>在第三个<code>then</code>回调函数中，输出成功保存文件的消息。</li><li>在<code>catch</code>回调函数中，捕获任何Promise链中发生的错误，并输出错误信息。</li></ul></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const readFilePro = (file) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.readFile(file, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;iI could not find the file🤣&#39;);</span></span>
<span class="line"><span>      resolve(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const writeFilePro = (file, data) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.writeFile(file, data, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;Could not write file🫠&#39;);</span></span>
<span class="line"><span>      resolve(&#39;success&#39;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>readFilePro(\`\${__dirname}/dog.txt\`)</span></span>
<span class="line"><span>  .then((data) =&gt; {</span></span>
<span class="line"><span>    console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return superagent.get(\`https://dog.ceo/api/breed/\${data}/images/random\`);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then((res) =&gt; {</span></span>
<span class="line"><span>    console.log(res.body.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return writeFilePro(&#39;dog-img.txt&#39;, res.body.message);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;Rondom dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch((err) =&gt; {</span></span>
<span class="line"><span>    console.log(err.message);</span></span>
<span class="line"><span>  });</span></span></code></pre></div><p>async/await</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const readFilePro = (file) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.readFile(file, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;I could not find the file🤣&#39;);</span></span>
<span class="line"><span>      resolve(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const writeFilePro = (file, data) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.writeFile(file, data, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;Could not write file🫠&#39;);</span></span>
<span class="line"><span>      resolve(&#39;success&#39;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getDogPic = async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const data = await readFilePro(\`\${__dirname}/dog.txt\`);</span></span>
<span class="line"><span>    console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const res = await superagent.get(</span></span>
<span class="line"><span>      \`https://dog.ceo/api/breed/\${data}/images/random\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    console.log(res.body.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    await writeFilePro(&#39;dog-img.txt&#39;, res.body.message);</span></span>
<span class="line"><span>    console.log(&#39;Rondom dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getDogPic();</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&#39;1:Will get dog pics&#39;);</span></span>
<span class="line"><span>getDogPic();</span></span>
<span class="line"><span>console.log(&#39;2:Done getting dog pics&#39;);</span></span></code></pre></div><p>output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1:Will get dog pics</span></span>
<span class="line"><span>2:Done getting dog pics</span></span>
<span class="line"><span>Breed:retriever</span></span>
<span class="line"><span>https://images.dog.ceo/breeds/retriever-curly/n02099429_2936.jpg</span></span>
<span class="line"><span>Rondom dog image saved to file~😁</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const readFilePro = (file) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.readFile(file, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;I could not find the file🤣&#39;);</span></span>
<span class="line"><span>      resolve(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const writeFilePro = (file, data) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.writeFile(file, data, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;Could not write file🫠&#39;);</span></span>
<span class="line"><span>      resolve(&#39;success&#39;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getDogPic = async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const data = await readFilePro(\`\${__dirname}/dog.txt\`);</span></span>
<span class="line"><span>    console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const res = await superagent.get(</span></span>
<span class="line"><span>      \`https://dog.ceo/api/breed/\${data}/images/random\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    console.log(res.body.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    await writeFilePro(&#39;dog-img.txt&#39;, res.body.message);</span></span>
<span class="line"><span>    console.log(&#39;Rondom dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return &#39;2:ready🥰&#39;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>console.log(&#39;1:Will get dog pics&#39;);</span></span>
<span class="line"><span>const x = getDogPic();</span></span>
<span class="line"><span>console.log(x);</span></span>
<span class="line"><span>console.log(&#39;3:Done getting dog pics&#39;);</span></span></code></pre></div><p>output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1:Will get dog pics</span></span>
<span class="line"><span>Promise { &lt;pending&gt; }</span></span>
<span class="line"><span>3:Done getting dog pics</span></span>
<span class="line"><span>Breed:retriever</span></span>
<span class="line"><span>https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_4359.jpg</span></span>
<span class="line"><span>Rondom dog image saved to file~😁</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const getDogPic = async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const data = await readFilePro(\`\${__dirname}/dog.txt\`);</span></span>
<span class="line"><span>    console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const res = await superagent.get(</span></span>
<span class="line"><span>      \`https://dog.ceo/api/breed/\${data}/images/random\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    console.log(res.body.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    await writeFilePro(&#39;dog-img.txt&#39;, res.body.message);</span></span>
<span class="line"><span>    console.log(&#39;Rondom dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return &#39;2:ready🥰&#39;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>console.log(&#39;1:Will get dog pics&#39;);</span></span>
<span class="line"><span>getDogPic().then((x) =&gt; {</span></span>
<span class="line"><span>  console.log(x);</span></span>
<span class="line"><span>  console.log(&#39;3:Done getting dog pics&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1:Will get dog pics</span></span>
<span class="line"><span>Breed:retriever</span></span>
<span class="line"><span>https://images.dog.ceo/breeds/retriever-golden/Z6A_4193-Edit-Edit_200806.jpg</span></span>
<span class="line"><span>Rondom dog image saved to file~😁</span></span>
<span class="line"><span>2:ready🥰</span></span>
<span class="line"><span>3:Done getting dog pics</span></span></code></pre></div><p>立即执行的匿名异步函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    console.log(&#39;1:Will get dog pics&#39;);</span></span>
<span class="line"><span>    const x = await getDogPic()</span></span>
<span class="line"><span>    console.log(x);</span></span>
<span class="line"><span>    console.log(&#39;3:Done getting dog pics&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(&#39;ERROR🤔&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})()</span></span></code></pre></div><p>output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1:Will get dog pics</span></span>
<span class="line"><span>Breed:retriever</span></span>
<span class="line"><span>https://images.dog.ceo/breeds/retriever-golden/n02099601_7916.jpg</span></span>
<span class="line"><span>Rondom dog image saved to file~😁</span></span>
<span class="line"><span>2:ready🥰</span></span>
<span class="line"><span>3:Done getting dog pics</span></span></code></pre></div><p><code>Promise.all</code>的行为如下：</p><ol><li>如果传入的Promise数组为空，则返回一个已解析的Promise，其解析值是一个空数组<code>[]</code>。</li><li>如果传入的Promise数组中的所有Promise都已解析（resolve），则返回一个新的Promise，其解析值是一个数组，包含了传入的Promise对象的解析值，且顺序与传入的Promise对象数组的顺序一致。</li><li>如果传入的Promise数组中的任何一个Promise被拒绝（reject），则返回一个新的Promise，其拒绝原因是第一个被拒绝的Promise的拒绝原因。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const superagent = require(&#39;superagent&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const readFilePro = (file) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.readFile(file, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;I could not find the file🤣&#39;);</span></span>
<span class="line"><span>      resolve(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const writeFilePro = (file, data) =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.writeFile(file, data, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) reject(&#39;Could not write file🫠&#39;);</span></span>
<span class="line"><span>      resolve(&#39;success&#39;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getDogPic = async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const data = await readFilePro(\`\${__dirname}/dog.txt\`);</span></span>
<span class="line"><span>    console.log(\`Breed:\${data}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const res1Pro = await superagent.get(</span></span>
<span class="line"><span>      \`https://dog.ceo/api/breed/\${data}/images/random\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const res2Pro = await superagent.get(</span></span>
<span class="line"><span>      \`https://dog.ceo/api/breed/\${data}/images/random\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const res3Pro = await superagent.get(</span></span>
<span class="line"><span>      \`https://dog.ceo/api/breed/\${data}/images/random\`</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const all = await Promise.all([res1Pro,res2Pro,res3Pro])</span></span>
<span class="line"><span>    const imgs = all.map(el =&gt; el.body.message)</span></span>
<span class="line"><span>    console.log(imgs);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    await writeFilePro(&#39;dog-img.txt&#39;, imgs.join(&#39;\\n&#39;));</span></span>
<span class="line"><span>    console.log(&#39;Random dog image saved to file~😁&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>    throw err;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return &#39;2:ready🥰&#39;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>(async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    console.log(&#39;1:Will get dog pics&#39;);</span></span>
<span class="line"><span>    const x = await getDogPic();</span></span>
<span class="line"><span>    console.log(x);</span></span>
<span class="line"><span>    console.log(&#39;3:Done getting dog pics&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(&#39;ERROR🤔&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})();</span></span></code></pre></div><p>express</p><p>npm i express</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&#39;/&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res</span></span>
<span class="line"><span>    .status(200)</span></span>
<span class="line"><span>    .json({ message: &#39;Hello from the server side!🥰&#39;, app: &#39;Natours&#39; });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.post(&#39;/&#39;,(req,res) =&gt; {</span></span>
<span class="line"><span>    res.send(&#39;You can post to this endpoint😎&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const port = 3000;</span></span>
<span class="line"><span>app.listen(port, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;App running on port \${port}...&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>P50API</p><p>REST,which stands for Representational States Transfer,</p><p>1.Separate APl into logical resources 2Expose structured,resource-based URLs 3.Use HTTP methods (verbs) 3.Send data as JSON(usually) 4.Be stateless</p><p><code>app.use(express.json())</code> 是一个中间件函数，用于处理传入的请求中的 JSON 数据。</p><p>当客户端向服务器发送带有 JSON 数据的请求时，例如通过 POST 或 PUT 请求发送 JSON 格式的数据，<code>express.json()</code> 中间件函数将负责解析请求体中的 JSON 数据，并将其转换为 JavaScript 对象，使开发人员能够轻松地访问和处理这些数据。</p><p>使用 <code>app.use(express.json())</code> 可以确保 Express 应用程序能够正确解析 JSON 数据，并将其传递给后续的路由处理程序或中间件。这样，你就可以方便地在你的路由处理程序中使用 <code>req.body</code> 对象来访问和操作 JSON 数据。</p><p><strong>get</strong></p><p><strong>post</strong></p><p><strong>patch</strong></p><p><strong>delete</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>app.use(express.json());</span></span>
<span class="line"><span>// app.get(&#39;/&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>//   res</span></span>
<span class="line"><span>//     .status(200)</span></span>
<span class="line"><span>//     .json({ message: &#39;Hello from the server side!🥰&#39;, app: &#39;Natours&#39; });</span></span>
<span class="line"><span>// });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// app.post(&#39;/&#39;,(req,res) =&gt; {</span></span>
<span class="line"><span>//     res.send(&#39;You can post to this endpoint😎&#39;)</span></span>
<span class="line"><span>// })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tours = JSON.parse(</span></span>
<span class="line"><span>  fs.readFileSync(\`\${__dirname}/dev-data/data/tours-simple.json\`)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&#39;/api/v1/tours&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    result: tours.length,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tours,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&#39;/api/v1/tours/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const id = req.params.id * 1; // it will then automatically convert that string to a number.</span></span>
<span class="line"><span>  if (id &gt; tours.length) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const tour = tours.find((el) =&gt; el.id === id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!tour) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    result: tours.length,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tour,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.post(&#39;/api/v1/tours&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const newId = tours[tours.length - 1].id + 1;</span></span>
<span class="line"><span>  const newTour = Object.assign({ id: newId }, req.body);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tours.push(newTour);</span></span>
<span class="line"><span>  fs.writeFile(</span></span>
<span class="line"><span>    \`\${__dirname}/dev-data/data/tours-simple.json\`,</span></span>
<span class="line"><span>    JSON.stringify(tours),</span></span>
<span class="line"><span>    (err) =&gt; {</span></span>
<span class="line"><span>      res.status(201).json({</span></span>
<span class="line"><span>        status: &#39;success&#39;,</span></span>
<span class="line"><span>        data: {</span></span>
<span class="line"><span>          tours: newTour,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.patch(&#39;/api/v1/tours/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tour: &#39;&lt;Updated tour here&gt;&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.delete(&#39;/api/v1/tours/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>      return res.status(404).json({</span></span>
<span class="line"><span>        status: &#39;fail&#39;,</span></span>
<span class="line"><span>        message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // And 204 means no content.</span></span>
<span class="line"><span>    res.status(204).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      data: null</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>const port = 3000;</span></span>
<span class="line"><span>app.listen(port, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;App running on port \${port}...&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>封装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>app.use(express.json());</span></span>
<span class="line"><span>const tours = JSON.parse(</span></span>
<span class="line"><span>  fs.readFileSync(\`\${__dirname}/dev-data/data/tours-simple.json\`)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getAllTours = (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    result: tours.length,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tours,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getTour = (req, res) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const id = req.params.id * 1; // it will then automatically convert that string to a number.</span></span>
<span class="line"><span>  if (id &gt; tours.length) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const tour = tours.find((el) =&gt; el.id === id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!tour) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    result: tours.length,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tour,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createTour = (req, res) =&gt; {</span></span>
<span class="line"><span>  const newId = tours[tours.length - 1].id + 1;</span></span>
<span class="line"><span>  const newTour = Object.assign({ id: newId }, req.body);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tours.push(newTour);</span></span>
<span class="line"><span>  fs.writeFile(</span></span>
<span class="line"><span>    \`\${__dirname}/dev-data/data/tours-simple.json\`,</span></span>
<span class="line"><span>    JSON.stringify(tours),</span></span>
<span class="line"><span>    (err) =&gt; {</span></span>
<span class="line"><span>      res.status(201).json({</span></span>
<span class="line"><span>        status: &#39;success&#39;,</span></span>
<span class="line"><span>        data: {</span></span>
<span class="line"><span>          tours: newTour,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const updateTour = (req, res) =&gt; {</span></span>
<span class="line"><span>  if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tour: &#39;&lt;Updated tour here&gt;&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const deleteTour = (req, res) =&gt; {</span></span>
<span class="line"><span>  if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // And 204 means no content.</span></span>
<span class="line"><span>  res.status(204).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    data: null,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// app.get(&#39;/api/v1/tours&#39;, getAllTours);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// app.get(&#39;/api/v1/tours/:id&#39;, getTour);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// app.post(&#39;/api/v1/tours&#39;, createTour);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// app.patch(&#39;/api/v1/tours/:id&#39;, updateTour);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// app.delete(&#39;/api/v1/tours/:id&#39;, deleteTour);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.route(&#39;/api/v1/tours&#39;).get(getAllTours).post(createTour);</span></span>
<span class="line"><span>app</span></span>
<span class="line"><span>  .route(&#39;/api/v1/tours/:id&#39;)</span></span>
<span class="line"><span>  .get(getTour)</span></span>
<span class="line"><span>  .patch(updateTour)</span></span>
<span class="line"><span>  .delete(deleteTour);</span></span>
<span class="line"><span>const port = 3000;</span></span>
<span class="line"><span>app.listen(port, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;App running on port \${port}...&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>use middleware</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.use(express.json());</span></span>
<span class="line"><span>app.use((req,res, next) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;Hello from the middleware~💭&#39;);</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use((req,res,next) =&gt; {</span></span>
<span class="line"><span>    req.requestTime = new Date().toISOString()</span></span>
<span class="line"><span>    next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tours = JSON.parse(</span></span>
<span class="line"><span>  fs.readFileSync(\`\${__dirname}/dev-data/data/tours-simple.json\`)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getAllTours = (req, res) =&gt; {</span></span>
<span class="line"><span>    console.log(req.requestTime);</span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    result: tours.length,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tours,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>npm i morgan</p><p>Morgan 是一个用于 Node.js 的日志记录器（logger）库。它可以帮助开发者记录和管理应用程序的日志信息。日志记录是软件开发中非常重要的一部分，它可以用于调试、错误追踪、性能监控以及生成运行报告等方面。</p><p>Morgan 提供了一个中间件（middleware）函数，可以轻松地集成到 Express.js 或其他 Node.js Web 框架中。它可以捕获 HTTP 请求的详细信息，如请求方法、URL、响应状态码、响应时间等，并将这些信息输出到控制台或其他目标，如文件或数据库。开发者可以根据自己的需求，配置 Morgan 来记录特定类型的日志信息。</p><p>Morgan 提供了多种预定义的日志格式，同时也支持自定义日志格式，使开发者能够根据自己的需求进行灵活配置。通过使用 Morgan，开发者可以更好地理解应用程序的运行状况，便于进行故障排除和性能优化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const morgan = require(&#39;morgan&#39;)</span></span>
<span class="line"><span>app.use(morgan(&#39;dev&#39;))</span></span></code></pre></div><p>output</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[nodemon] starting \`node app.js\`</span></span>
<span class="line"><span>App running on port \${port}...</span></span>
<span class="line"><span>Hello from the middleware~💭</span></span>
<span class="line"><span>2023-06-13T07:29:17.080Z</span></span>
<span class="line"><span>GET /api/v1/tours 200 3.714 ms - 8523</span></span></code></pre></div><p>单独路由app.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// routes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tourRouter = express.Router();</span></span>
<span class="line"><span>const userRouter = express.Router();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tourRouter.route(&#39;/&#39;).get(getAllTours).post(createTour);</span></span>
<span class="line"><span>tourRouter.route(&#39;/:id&#39;).get(getTour).patch(updateTour).delete(deleteTour);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>userRouter.route(&#39;/&#39;).get(getAllUsers).post(createUser);</span></span>
<span class="line"><span>userRouter.route(&#39;/:id&#39;).get(getUser).patch(updateUser).delete(deleteUser);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(&#39;/api/v1/tours&#39;, tourRouter);</span></span>
<span class="line"><span>app.use(&#39;/api/v1/users&#39;,userRouter)</span></span></code></pre></div><p>拆分</p><p>controllers/tourController.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tours = JSON.parse(</span></span>
<span class="line"><span>    fs.readFileSync(\`\${__dirname}/../dev-data/data/tours-simple.json\`)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>exports.getAllTours = (req, res) =&gt; {</span></span>
<span class="line"><span>    console.log(req.requestTime);</span></span>
<span class="line"><span>    res.status(200).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      result: tours.length,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        tours,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  exports.getTour = (req, res) =&gt; {</span></span>
<span class="line"><span>    console.log(req.params);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    const id = req.params.id * 1; // it will then automatically convert that string to a number.</span></span>
<span class="line"><span>    if (id &gt; tours.length) {</span></span>
<span class="line"><span>      return res.status(404).json({</span></span>
<span class="line"><span>        status: &#39;fail&#39;,</span></span>
<span class="line"><span>        message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    const tour = tours.find((el) =&gt; el.id === id);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    if (!tour) {</span></span>
<span class="line"><span>      return res.status(404).json({</span></span>
<span class="line"><span>        status: &#39;fail&#39;,</span></span>
<span class="line"><span>        message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    res.status(200).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      result: tours.length,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        tour,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  exports.createTour = (req, res) =&gt; {</span></span>
<span class="line"><span>    const newId = tours[tours.length - 1].id + 1;</span></span>
<span class="line"><span>    const newTour = Object.assign({ id: newId }, req.body);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    tours.push(newTour);</span></span>
<span class="line"><span>    fs.writeFile(</span></span>
<span class="line"><span>      \`\${__dirname}/dev-data/data/tours-simple.json\`,</span></span>
<span class="line"><span>      JSON.stringify(tours),</span></span>
<span class="line"><span>      (err) =&gt; {</span></span>
<span class="line"><span>        res.status(201).json({</span></span>
<span class="line"><span>          status: &#39;success&#39;,</span></span>
<span class="line"><span>          data: {</span></span>
<span class="line"><span>            tours: newTour,</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  exports.updateTour = (req, res) =&gt; {</span></span>
<span class="line"><span>    if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>      return res.status(404).json({</span></span>
<span class="line"><span>        status: &#39;fail&#39;,</span></span>
<span class="line"><span>        message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    res.status(200).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        tour: &#39;&lt;Updated tour here&gt;&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  exports.deleteTour = (req, res) =&gt; {</span></span>
<span class="line"><span>    if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>      return res.status(404).json({</span></span>
<span class="line"><span>        status: &#39;fail&#39;,</span></span>
<span class="line"><span>        message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // And 204 means no content.</span></span>
<span class="line"><span>    res.status(204).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      data: null,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  };</span></span></code></pre></div><p>controllers/userController.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tours = JSON.parse(</span></span>
<span class="line"><span>    fs.readFileSync(\`\${__dirname}/../dev-data/data/tours-simple.json\`)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>exports.getAllUsers = (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(500).json({</span></span>
<span class="line"><span>    status: &#39;error&#39;,</span></span>
<span class="line"><span>    message: &#39;This route is not yet defined🤖&#39;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.createUser = (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(500).json({</span></span>
<span class="line"><span>    status: &#39;error&#39;,</span></span>
<span class="line"><span>    message: &#39;This route is not yet defined🤖&#39;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.updateUser = (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(500).json({</span></span>
<span class="line"><span>    status: &#39;error&#39;,</span></span>
<span class="line"><span>    message: &#39;This route is not yet defined🤖&#39;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.getUser = (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(500).json({</span></span>
<span class="line"><span>    status: &#39;error&#39;,</span></span>
<span class="line"><span>    message: &#39;This route is not yet defined🤖&#39;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.deleteUser = (req, res) =&gt; {</span></span>
<span class="line"><span>  res.status(500).json({</span></span>
<span class="line"><span>    status: &#39;error&#39;,</span></span>
<span class="line"><span>    message: &#39;This route is not yet defined🤖&#39;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>routes/tourRoutes.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const tourController = require(&#39;./../controllers/tourController&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = express.Router();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.route(&#39;/&#39;).get(tourController.getAllTours).post(tourController.createTour);</span></span>
<span class="line"><span>router.route(&#39;/:id&#39;).get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = router;</span></span></code></pre></div><p>routes/userRoutes.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const userController = require(&#39;./../controllers/userController&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = express.Router();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.route(&#39;/&#39;).get(userController.getAllUsers).post(userController.createUser);</span></span>
<span class="line"><span>router.route(&#39;/:id&#39;).get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = router;</span></span></code></pre></div><p>app.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const morgan = require(&#39;morgan&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tourRouter = require(&#39;./routes/tourRoutes&#39;);</span></span>
<span class="line"><span>const userRouter = require(&#39;./routes/userRoutes&#39;);</span></span>
<span class="line"><span>//  middleware</span></span>
<span class="line"><span>app.use(morgan(&#39;dev&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(express.json());</span></span>
<span class="line"><span>app.use((req, res, next) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;Hello from the middleware~💭&#39;);</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use((req, res, next) =&gt; {</span></span>
<span class="line"><span>  req.requestTime = new Date().toISOString();</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(&#39;/api/v1/tours&#39;, tourRouter);</span></span>
<span class="line"><span>app.use(&#39;/api/v1/users&#39;, userRouter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = app</span></span></code></pre></div><p>server.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const app = require(&#39;./app&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// server</span></span>
<span class="line"><span>const port = 3000;</span></span>
<span class="line"><span>app.listen(port, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;App running on port \${port}...&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>packge.json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;4-express&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;nodemon server.js&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;express&quot;: &quot;^4.18.2&quot;,</span></span>
<span class="line"><span>    &quot;morgan&quot;: &quot;^1.10.0&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>tourController.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exports.checkId = (req, res, next, val) =&gt; {</span></span>
<span class="line"><span>  if (req.params.id * 1 &gt; tours.length) {</span></span>
<span class="line"><span>    return res.status(404).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: &#39;Invalid ID&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>npm i dotenv</p><p>p66</p><p>&#39;NODE_ENV&#39; 不是内部或外部命令，也不是可运行的程序 或批处理文件。 解决办法 windows环境 要先安装 cross-env npm install cross-env -D 修改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start:dev&quot;: &quot;nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;start:prod&quot;: &quot;NODE_ENV=production nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;cross-env NODE_ENV=production nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;cross-env NODE_ENV=development nodemon server.js&quot;</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p><a href="https://eslint.org/" target="_blank" rel="noreferrer">https://eslint.org/</a></p><p>npm install eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev</p><p>让我逐个解释这些依赖项的作用：</p><ol><li><code>eslint</code>: ESLint 是一个用于检查和规范 JavaScript 代码的工具。它可以帮助你在开发过程中捕获潜在的问题和错误，并确保代码风格的一致性。</li><li><code>prettier</code>: Prettier 是一个代码格式化工具，用于自动格式化代码，使其符合一致的风格规范。它可以帮助你消除团队成员之间的代码风格差异，使代码更加易读和一致。</li><li><code>eslint-config-prettier</code>: 这是一个 ESLint 配置，用于禁用与 Prettier 相冲突的 ESLint 规则，以便二者可以一起使用而不产生冲突。</li><li><code>eslint-plugin-prettier</code>: 这是一个 ESLint 插件，用于将 Prettier 应用为 ESLint 规则，并在需要时自动格式化代码。</li><li><code>eslint-config-airbnb</code>: 这是一个由 Airbnb 公司提供的 ESLint 配置，它定义了一套用于 JavaScript 代码的规范。它包含了许多最佳实践和常见的代码风格规则。</li><li><code>eslint-plugin-node</code>: 这是一个 ESLint 插件，提供了用于检查 Node.js 代码的规则集。它包含了许多与 Node.js 相关的最佳实践和规范。</li><li><code>eslint-plugin-import</code>: 这是一个 ESLint 插件，提供了用于检查和规范 ES6 模块导入语法的规则。</li><li><code>eslint-plugin-jsx-a11y</code>: 这是一个 ESLint 插件，提供了用于检查和规范 JSX 元素的可访问性相关规则。它有助于确保你的应用程序中的用户界面对于不同的用户能够访问和使用。</li><li><code>eslint-plugin-react</code>: 这是一个 ESLint 插件，提供了用于检查和规范 React 组件的规则。它包含了许多与 React 开发相关的最佳实践和规范。</li></ol><h2 id="mongodb" tabindex="-1">mongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;mongoDB&quot;">​</a></h2><p>KEY MONGODB FEATURES: Document based:MongoDB stores data in documents (field-value pair data structures,NoSQL); Scalable:Very easy to distribute data across multiple machines as your users and amount of data grows; Flexible:No document data schema required,so each document can have different number and type of fields; Performant:Embedded data models,indexing,sharding,flexible documents,native duplication,etc. Free and open-source,published under the SSPL License.</p><p><a href="https://www.mongodb.com/try/download/compass" target="_blank" rel="noreferrer">https://www.mongodb.com/try/download/compass</a></p><p>配置环境变量</p><p>&#39;mongod.exe&#39; 不是内部或外部命令，也不是可运行的程序 或批处理文件。</p><p>确保按照以下步骤检查和设置 MongoDB 的环境变量：</p><ol><li>打开环境变量设置： <ul><li>在 Windows 上，按下 Win + X 键，然后选择 &quot;系统&quot;。</li><li>在 &quot;系统&quot; 窗口中，点击左侧的 &quot;高级系统设置&quot;。</li><li>在 &quot;系统属性&quot; 窗口中，点击 &quot;高级&quot; 选项卡，然后点击 &quot;环境变量&quot; 按钮。</li></ul></li><li>编辑系统的 PATH 变量： <ul><li>在 &quot;环境变量&quot; 窗口中，找到 &quot;系统变量&quot; 部分，查找名为 &quot;Path&quot; 或 &quot;PATH&quot; 的变量。</li><li>选中 &quot;Path&quot; 变量，然后点击 &quot;编辑&quot;。</li></ul></li><li>添加 MongoDB 的可执行文件路径： <ul><li>在 &quot;编辑环境变量&quot; 窗口中，点击 &quot;新建&quot;。</li><li>在弹出的对话框中，输入 MongoDB 的可执行文件所在的路径。默认情况下，它可能类似于 <code>C:\\Program Files\\MongoDB\\Server\\{version}\\bin</code>，其中 <code>{version}</code> 是你安装的 MongoDB 版本号。</li><li>确认添加路径后，点击 &quot;确定&quot; 关闭所有打开的窗口。</li></ul></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; use natours-test</span></span>
<span class="line"><span>switched to db natours-test</span></span>
<span class="line"><span>&gt; db.tours.insertOne({ name:&quot;The Forest Hiker&quot;, price:297, rating: 4.7})</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        &quot;acknowledged&quot; : true,</span></span>
<span class="line"><span>        &quot;insertedId&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>&gt; show dbs</span></span>
<span class="line"><span>admin         0.000GB</span></span>
<span class="line"><span>config        0.000GB</span></span>
<span class="line"><span>local         0.000GB</span></span>
<span class="line"><span>natours-test  0.000GB</span></span>
<span class="line"><span>&gt; show collections</span></span>
<span class="line"><span>tours</span></span>
<span class="line"><span>&gt; quit()</span></span></code></pre></div><p>db.tours.insertMany([{ name:&quot;The Sea Explorer&quot;, price:497, rating:4.8 },{ name:&quot;The Show Adventurer&quot;, price:997,rating:4.9,difficulty:&quot;easy&quot;}])</p><p>Ite stands for less than，Where the price is less than 500.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\lxwei&gt;mongo</span></span>
<span class="line"><span>MongoDB shell version v4.0.28</span></span>
<span class="line"><span>connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb</span></span>
<span class="line"><span>Implicit session: session { &quot;id&quot; : UUID(&quot;a7865479-8885-4277-a4cf-517c54960ce2&quot;) }</span></span>
<span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 997, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot; }</span></span>
<span class="line"><span>&gt; db.tours.find({ name:&quot;The Forest Hiker&quot;})</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>&gt; db.tours.find({ price:{$lte:500}})</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>&gt; db.tours.find({ price: {$lt:500}, rating: {$gte: 4.8}})</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>&gt; db.tours.find({ $or: [ {price: {$lt:500}}, {rating: {$gte:4.8}}]})</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 997, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot; }</span></span>
<span class="line"><span>&gt; db.tours.find({ $or: [ {price: {$gt:500}}, {rating: {$gte:4.8}}]})</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 997, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot; }</span></span>
<span class="line"><span>&gt; db.tours.find({ $or: [ {price: {$gt:500}}, {rating: {$gte:4.8}}]},{name:1})</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot; }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot; }</span></span>
<span class="line"><span>&gt;</span></span></code></pre></div><p>update</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; db.tours.updateOne({ name:&quot;The Snow Adventurer&quot;}, {$set: {price:597}})</span></span>
<span class="line"><span>{ &quot;acknowledged&quot; : true, &quot;matchedCount&quot; : 0, &quot;modifiedCount&quot; : 0 }</span></span>
<span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 997, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot; }</span></span>
<span class="line"><span>&gt; db.tours.updateOne({ name:&quot;The Show Adventurer&quot;}, {$set: {price:597}})</span></span>
<span class="line"><span>{ &quot;acknowledged&quot; : true, &quot;matchedCount&quot; : 1, &quot;modifiedCount&quot; : 1 }</span></span>
<span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 597, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot; }</span></span>
<span class="line"><span>&gt; db.tours.updateMany({ price:{$gt:500}, rating: {$gte: 4.8}}, {$set:{premium:true}})</span></span>
<span class="line"><span>{ &quot;acknowledged&quot; : true, &quot;matchedCount&quot; : 1, &quot;modifiedCount&quot; : 1 }</span></span>
<span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 597, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot;, &quot;premium&quot; : true }</span></span>
<span class="line"><span>&gt;</span></span></code></pre></div><p>delete</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;6489852da6dc8f37d4425eb2&quot;), &quot;name&quot; : &quot;The Forest Hiker&quot;, &quot;price&quot; : 297, &quot;rating&quot; : 4.7 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 597, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot;, &quot;premium&quot; : true }</span></span>
<span class="line"><span>&gt; db.tours.deleteMany({ rating:{$lt:4.8}})</span></span>
<span class="line"><span>{ &quot;acknowledged&quot; : true, &quot;deletedCount&quot; : 1 }</span></span>
<span class="line"><span>&gt; db.tours.find()</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4e&quot;), &quot;name&quot; : &quot;The Sea Explorer&quot;, &quot;price&quot; : 497, &quot;rating&quot; : 4.8 }</span></span>
<span class="line"><span>{ &quot;_id&quot; : ObjectId(&quot;648988b8cdc7e83a9245ef4f&quot;), &quot;name&quot; : &quot;The Show Adventurer&quot;, &quot;price&quot; : 597, &quot;rating&quot; : 4.9, &quot;difficulty&quot; : &quot;easy&quot;, &quot;premium&quot; : true }</span></span>
<span class="line"><span>&gt;</span></span></code></pre></div><p>p79-80 在<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.mongodb.com%2Fatlas%2Fdatabase" target="_blank" rel="noreferrer">MongoDB Atlas</a>创建并登录到你的账户，Atlas 会建议你创建一个数据库，接着用</p><ul><li><em>database access</em>选项卡为数据库创建用户凭据，可以让你的应用连接到数据库</li><li><em><strong>Network access</strong></em>定义允许访问数据库的 IP 地址。方便起见设为0.0.0.0/0，表示 Anywhere</li></ul><p>&quot;mongodb+srv://cluster0.ngazdya.mongodb.net/&quot; --username chloe2099 MongoDB shell version v4.0.28 Enter password:</p><p>在命令行中输入密码时，通常不会显示密码字符或星号，这是为了保护密码的安全性。所以，当你输入密码时，屏幕上不会显示任何内容，但实际上密码是被输入的。</p><p>请注意，即使没有显示在屏幕上，你仍然可以输入密码。只需键入密码并按下回车键，</p><p>两种方法链接</p><p>1.compass</p><p>2.shell</p><p>config.env</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">development</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATABASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mongodb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">srv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//chloe2099:&lt;PASSWORD&gt;@cluster0.ngazdya.mongodb.net/natours?retryWrites=true&amp;w=majority</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATABASE_LOCAL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mongodb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:27017/natours</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATABASE_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1yaXusiP3MF1LbmV</span></span></code></pre></div><p>npm i mongoose@5</p><p><a href="https://mongoosejs.com/docs/index.html" target="_blank" rel="noreferrer">https://mongoosejs.com/docs/index.html</a></p><p>tourController.js</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Tour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../models/tourModel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tours</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/../dev-data/data/tours-simple.json\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (req.params.id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tours.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Invalid ID&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAllTours</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // console.log(req.requestTime);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tours</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tour.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// So find is to find all of the documents.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      result: tours.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tours,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: err,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tour.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.params.id); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// to find only one document</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // So this here would work the exact same way as this,okay?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Tour.findOne({ _id:req.params.id})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      result: tours.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tour,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: err,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createTour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newTour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tour.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.body);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tours: newTour,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: err,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateTour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tour.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findByIdAndUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.params.id, req.body, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      new: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tour,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: err,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deleteTour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tour.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findByIdAndDelete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req.params.id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">204</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      status: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: err,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>tourModel.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mongoose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mongoose&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tourSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mongoose.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      require: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A tour must have a name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      unique: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rating: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    price: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      require: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A tour must have a price&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Tour</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mongoose.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tour&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, tourSchema);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tour</span></span></code></pre></div><p><a href="https://www.natours.dev/api/v1/tours" target="_blank" rel="noreferrer">https://www.natours.dev/api/v1/tours</a></p><p><code>process.argv</code> 是一个存储命令行参数的数组。它包含了在启动 Node.js 脚本时传递的命令行参数。</p><p>在你的输出中，<code>process.argv</code> 的值是：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Program Files</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nodejs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node.exe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">learn-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">learn-node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">project</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4-express</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dev-data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">import-dev-data.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>这个数组的第一个元素是 Node.js 解释器的路径，第二个元素是你运行的脚本文件的路径。</p><p>这在你的脚本中可能有用，因为你可以使用命令行参数来定制脚本的行为。例如，你可以传递一个文件路径作为命令行参数，然后在脚本中使用这个路径来读取文件或执行特定的操作。</p><p>在你的代码中，似乎并没有使用 <code>process.argv</code>，所以它在这个上下文中可能没有什么特殊的优势。但是，如果你想要在脚本中使用命令行参数，你可以通过访问 <code>process.argv</code> 数组来获取它们。</p><p>import-dev-data.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const mongoose = require(&#39;mongoose&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dotenv = require(&#39;dotenv&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Tour = require(&#39;./../../models/tourModel&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotenv.config({ path: &#39;./config.env&#39; });</span></span>
<span class="line"><span>// console.log(process.env);</span></span>
<span class="line"><span>const DB = process.env.DATABASE.replace(</span></span>
<span class="line"><span>  &#39;&lt;PASSWORD&gt;&#39;,</span></span>
<span class="line"><span>  process.env.DATABASE_PASSWORD</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>mongoose</span></span>
<span class="line"><span>  // .connect(process.env.DATABASE_LOCAL, {</span></span>
<span class="line"><span>  .connect(DB, {</span></span>
<span class="line"><span>    useNewUrlParser: true,</span></span>
<span class="line"><span>    useCreateIndex: true,</span></span>
<span class="line"><span>    useFindAndModify: false</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .then(() =&gt; </span></span>
<span class="line"><span>    console.log(&#39;DB connection successful~🐱&#39;)</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  console.log(\`\${__dirname}/tours-simple.json\`,&#39;🤣&#39;);</span></span>
<span class="line"><span>//   read json file</span></span>
<span class="line"><span>const tours = JSON.parse(fs.readFileSync(\`\${__dirname}/tours-simple.json\`, &#39;utf-8&#39;)); //this dot here is always relative from the folder</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import data into db</span></span>
<span class="line"><span>const importData = async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    await Tour.create(tours);</span></span>
<span class="line"><span>    console.log(&#39;Data successfully loaded~😀&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete all data from db</span></span>
<span class="line"><span>const deleteData = async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    await Tour.deleteMany()</span></span>
<span class="line"><span>    console.log(&#39;Data successfully deleted&#39;);</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    console.log(err);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if (process.argv[2] === &#39;--import&#39;) {</span></span>
<span class="line"><span>  importData()</span></span>
<span class="line"><span>} else if (process.argv[2] === &#39;--delete&#39;){</span></span>
<span class="line"><span>  deleteData();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(process.argv);</span></span></code></pre></div><p>utils/apiFeatures.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class APIFeatures {</span></span>
<span class="line"><span>    constructor(query, queryString) {</span></span>
<span class="line"><span>      this.query = query;</span></span>
<span class="line"><span>      this.queryString = queryString;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    filter() {</span></span>
<span class="line"><span>      // 1) filtering</span></span>
<span class="line"><span>      const queryObj = { ...this.queryString };</span></span>
<span class="line"><span>      const excludeFields = [&#39;page&#39;, &#39;sort&#39;, &#39;limit&#39;, &#39;fields&#39;];</span></span>
<span class="line"><span>      excludeFields.forEach(el =&gt; delete queryObj[el]);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>      // 2)advanced filtering</span></span>
<span class="line"><span>      let queryStr = JSON.stringify(queryObj);</span></span>
<span class="line"><span>      queryStr = queryStr.replace(/\\b(gte|gt|lte|lt)\\b/g, match =&gt; \`$\${match}\`);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>      this.query.find(JSON.parse(queryStr)); // So find is to find all of the documents.</span></span>
<span class="line"><span>      return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    sort() {</span></span>
<span class="line"><span>      // 3)sort</span></span>
<span class="line"><span>      if (this.queryString.sort) {</span></span>
<span class="line"><span>        // we sorted them by the price in an ascending order. 127.0.0.1:3000/api/v1/tours?sort=price</span></span>
<span class="line"><span>        // But we can also sort them in a descending order. 127.0.0.1:3000/api/v1/tours?sort=-price</span></span>
<span class="line"><span>        const sortBy = this.queryString.sort.split(&#39;,&#39;).join(&#39; &#39;);</span></span>
<span class="line"><span>        this.query = this.query.sort(sortBy);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        this.query = this.query.sort(&#39;-createdAt&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    limitFields() {</span></span>
<span class="line"><span>      // 4)field limit</span></span>
<span class="line"><span>      if (this.queryString.fields) {</span></span>
<span class="line"><span>        const fields = this.queryString.fields.split(&#39;,&#39;).join(&#39; &#39;);</span></span>
<span class="line"><span>        this.query = this.query.select(fields);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        this.query = this.query.select(&#39;-__v&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    pagination() {</span></span>
<span class="line"><span>      // 5)pagination</span></span>
<span class="line"><span>      const page = this.queryString.page * 1 || 1;</span></span>
<span class="line"><span>      const limit = this.queryString.limit * 1 || 100;</span></span>
<span class="line"><span>      const skip = (page - 1) * limit;</span></span>
<span class="line"><span>      this.query = this.query.skip(skip).limit(limit);</span></span>
<span class="line"><span>      return this;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  module.exports = APIFeatures</span></span></code></pre></div><p>p100</p><p>当使用MongoDB进行数据查询时，我们通常使用<code>find()</code>方法来检索文档。然而，有时我们需要对数据进行更复杂的操作，如分组、排序、统计等。在这种情况下，可以使用MongoDB的聚合框架来进行数据聚合操作。</p><p><code>aggregate()</code>方法是MongoDB提供的一个聚合操作函数，它接收一个包含多个聚合管道操作符的数组作为参数，每个操作符代表一个聚合阶段。通过连接多个聚合阶段，我们可以按照自定义的方式对数据进行处理和分析。</p><p>聚合管道操作符是在聚合阶段中使用的特殊操作符，用于执行各种数据转换和计算操作。一些常用的聚合管道操作符包括：</p><ul><li><code>$match</code>: 用于筛选文档，类似于<code>find()</code>方法中的查询条件。</li><li><code>$group</code>: 用于对文档进行分组操作，并进行聚合计算。</li><li><code>$sort</code>: 用于对文档进行排序操作。</li><li><code>$project</code>: 用于投影操作，选择需要返回的字段。</li><li><code>$limit</code>: 用于限制返回的文档数量。</li><li><code>$skip</code>: 用于跳过指定数量的文档。</li></ul><p>在给定的代码示例中，<code>aggregate()</code>方法被调用并传入了一个包含两个聚合阶段的数组。首先，使用<code>$match</code>操作符筛选出<code>ratingAverage</code>字段大于等于4.5的文档，然后使用<code>$group</code>操作符对结果进行分组和计算，得到一组统计数据。</p><p>聚合操作返回的结果是一个数组，其中包含符合聚合管道操作的文档或计算结果。在代码中，通过将聚合操作的结果赋值给<code>stats</code>变量，然后将其作为JSON响应的一部分返回给调用者。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exports.getTourStats = async (req, res) =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const stats = await Tour.aggregate([</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $match: { ratingsAverage: { $gte: 4.5 } },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $group: {</span></span>
<span class="line"><span>          _id: null,</span></span>
<span class="line"><span>          num:{ $sum:1},</span></span>
<span class="line"><span>          numRating: { $sum: &#39;$ratingsQuantity&#39; },</span></span>
<span class="line"><span>          avgRating: { $avg: &#39;$ratingsAverage&#39; },</span></span>
<span class="line"><span>          avgPrice: { $avg: &#39;$price&#39; },</span></span>
<span class="line"><span>          minPrice: { $min: &#39;$price&#39; },</span></span>
<span class="line"><span>          maxPrice: { $max: &#39;$price&#39; },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    res.status(200).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        stats,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    res.status(400).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: err,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exports.getMonthlyPlan = async (req, res) =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const year = req.params.year * 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const plan = await Tour.aggregate([</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $unwind: &#39;$startDates&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $match: {</span></span>
<span class="line"><span>          startDates: {</span></span>
<span class="line"><span>            $gte: new Date(\`\${year}-01-01\`),</span></span>
<span class="line"><span>            $lte: new Date(\`\${year}-12-31\`),</span></span>
<span class="line"><span>          }, //So basically,excluding the one that says easy,right?</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $group: {</span></span>
<span class="line"><span>          _id: { $month: &#39;$startDates&#39; },</span></span>
<span class="line"><span>          numTourStarts: { $sum: 1 },</span></span>
<span class="line"><span>          tours: { $push: &#39;$name&#39; },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $addFields: {</span></span>
<span class="line"><span>          month: &#39;$_id&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $project: {</span></span>
<span class="line"><span>          _id: 0,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $sort: {</span></span>
<span class="line"><span>          numTourStarts: -1, // So starting with the highest number.</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        $limit: 6,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    res.status(200).json({</span></span>
<span class="line"><span>      status: &#39;success&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        plan,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    res.status(400).json({</span></span>
<span class="line"><span>      status: &#39;fail&#39;,</span></span>
<span class="line"><span>      message: err,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>npm i slugify</p><p>npm i validator</p><p><a href="https://www.npmjs.com/package/validator" target="_blank" rel="noreferrer">https://www.npmjs.com/package/validator</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const mongoose = require(&#39;mongoose&#39;);</span></span>
<span class="line"><span>const slugify = require(&#39;slugify&#39;);</span></span>
<span class="line"><span>const validator = require(&#39;validator&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tourSchema = new mongoose.Schema(</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a name&#39;],</span></span>
<span class="line"><span>      unique: true,</span></span>
<span class="line"><span>      trim:true,</span></span>
<span class="line"><span>      maxlength:[40,&#39;A tour must have less or equal then 40 characters&#39;],</span></span>
<span class="line"><span>      minlength:[10,&#39;A tour must have more or equal then 40 characters&#39;],</span></span>
<span class="line"><span>      validate:[validator.isAlpha,&#39;Tour name must only contain characters&#39;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    slug: String,</span></span>
<span class="line"><span>    duration: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a duration&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    maxGroupSize: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a group size&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    difficulty: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a difficulty&#39;],</span></span>
<span class="line"><span>      enum:{</span></span>
<span class="line"><span>        values:[&#39;easy&#39;,&#39;medium&#39;,&#39;difficulty&#39;],</span></span>
<span class="line"><span>        message:&#39;Difficulty is either:easy,medium,difficult&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ratingsAverage: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      default: 4.5,</span></span>
<span class="line"><span>      min:[1,&#39;Rating must be above 1.0&#39;],</span></span>
<span class="line"><span>      max:[5,&#39;Rating must be below 5.0&#39;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ratingsQuantity: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      default: 0,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    price: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a price&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    priceDiscount: {</span></span>
<span class="line"><span>      type: Number,</span></span>
<span class="line"><span>      validate:{</span></span>
<span class="line"><span>        validator:function(val) {</span></span>
<span class="line"><span>          // THIS ONLY POINTS TO CURRENT DOC on NEWdocument creation</span></span>
<span class="line"><span>          return val &lt; this.price</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        message:&#39;Discount price {{VALUE}} should be below regular price&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    summary: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      trim: true, // which will remove all the white space</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a summary&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    description: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      trim: true, // which will remove all the white space</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    imageCover: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      required: [true, &#39;A tour must have a imageCover&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    images: [String], //So an array in which we have a number of strings.</span></span>
<span class="line"><span>    createAt: {</span></span>
<span class="line"><span>      type: Date,</span></span>
<span class="line"><span>      default: Date.now(), //that&#39;s the automatically created timestamp</span></span>
<span class="line"><span>      select: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    startDates: [Date],</span></span>
<span class="line"><span>    secretTour: {</span></span>
<span class="line"><span>      type: Boolean,</span></span>
<span class="line"><span>      default: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    toJSON: {</span></span>
<span class="line"><span>      virtuals: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    toObject: {</span></span>
<span class="line"><span>      virtuals: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tourSchema.virtual(&#39;durationWeeks&#39;).get(function () {</span></span>
<span class="line"><span>  return this.duration / 7;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// document middleware : runs before .save() and .create()</span></span>
<span class="line"><span>tourSchema.pre(&#39;save&#39;, function (next) {</span></span>
<span class="line"><span>  // this is the currently processed document.</span></span>
<span class="line"><span>  this.slug = slugify(this.name, { lower: true });</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// query middleware</span></span>
<span class="line"><span>// and so all of these will now actually trigger</span></span>
<span class="line"><span>tourSchema.pre(/^find/, function (next) {</span></span>
<span class="line"><span>  // tourSchema.pre(&#39;find&#39;, function (next) {</span></span>
<span class="line"><span>  this.find({ secretTour: { $ne: true } });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  this.start = Date.now();</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tourSchema.post(/^find/, function (docs, next) {</span></span>
<span class="line"><span>  console.log(\`Query took \${Date.now() - this.start} milliseconds!\`);</span></span>
<span class="line"><span>  // console.log(docs);</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// aggregation middleware</span></span>
<span class="line"><span>// before or after an aggregation happens</span></span>
<span class="line"><span>tourSchema.pre(&#39;aggregate&#39;, function (next) {</span></span>
<span class="line"><span>  // this is going to point to the current aggregation object.</span></span>
<span class="line"><span>  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Tour = mongoose.model(&#39;Tour&#39;, tourSchema);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = Tour;</span></span></code></pre></div><p>npm i ndb --global</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start:dev&quot;: &quot;nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;start:prod&quot;: &quot;NODE_ENV=production nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;cross-env NODE_ENV=production nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;cross-env NODE_ENV=development nodemon server.js&quot;,</span></span>
<span class="line"><span>    &quot;debug&quot;:&quot;ndb server.js&quot;</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>npm run debug</p><p>app.js返回错误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const morgan = require(&#39;morgan&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tourRouter = require(&#39;./routes/tourRoutes&#39;);</span></span>
<span class="line"><span>const userRouter = require(&#39;./routes/userRoutes&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>//  middleware</span></span>
<span class="line"><span>console.log(process.env.NODE_ENV);</span></span>
<span class="line"><span>if (process.env.NODE_ENV === &#39;development&#39;) {</span></span>
<span class="line"><span>  app.use(morgan(&#39;dev&#39;));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(express.json());</span></span>
<span class="line"><span>app.use(express.static(\`\${__dirname}/public\`));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use((req, res, next) =&gt; {</span></span>
<span class="line"><span>  req.requestTime = new Date().toISOString();</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(&#39;/api/v1/tours&#39;, tourRouter);</span></span>
<span class="line"><span>app.use(&#39;/api/v1/users&#39;, userRouter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.all(&#39;*&#39;, (req, res, next) =&gt; {</span></span>
<span class="line"><span>  // res.status(404).json({</span></span>
<span class="line"><span>  //   status: &#39;fail&#39;,</span></span>
<span class="line"><span>  //   message: \`Can&#39;t find \${req.originalUrl} on this server\`</span></span>
<span class="line"><span>  // });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const err = new Error(\`Can&#39;t find \${req.originalUrl} on this server\`)</span></span>
<span class="line"><span>  err.status = &#39;fail&#39;</span></span>
<span class="line"><span>  err.statusCode = 404</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  next(err)</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use((err,req,res,next) =&gt; {</span></span>
<span class="line"><span>  res.statusCode = err.statusCode || 500;</span></span>
<span class="line"><span>  err.status = err.status || &#39;error&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  res.status(err.statusCode).json({</span></span>
<span class="line"><span>    status:err.status,</span></span>
<span class="line"><span>    message:err.message</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>module.exports = app;</span></span></code></pre></div><p>封装</p><p>utils/appError.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class AppError extends Error {</span></span>
<span class="line"><span>  constructor(message, statusCode) {</span></span>
<span class="line"><span>    super(message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.statusCode = statusCode;</span></span>
<span class="line"><span>    this.status = \`\${statusCode}\`.startsWith(&#39;4&#39;) ? &#39;fail&#39; : &#39;error&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.isOperational = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Error.captureStackTrace(this, this.constructor);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = AppError;</span></span></code></pre></div><p>controllers/errorController</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = (err, req, res, next) =&gt; {</span></span>
<span class="line"><span>  res.statusCode = err.statusCode || 500;</span></span>
<span class="line"><span>  err.status = err.status || &#39;error&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  res.status(err.statusCode).json({</span></span>
<span class="line"><span>    status: err.status,</span></span>
<span class="line"><span>    message: err.message,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>首先，定义了一个名为<code>catchAsync</code>的函数。这个函数接受一个参数<code>fn</code>，代表一个异步函数。它返回另一个函数，这个函数接受三个参数<code>req</code>、<code>res</code>和<code>next</code>，代表请求对象、响应对象和下一个中间件函数。</p><p>在返回的函数内部，它调用了<code>fn</code>函数并传入<code>req</code>、<code>res</code>和<code>next</code>作为参数。然后，使用<code>.catch()</code>方法来捕获<code>fn</code>函数中的异步错误，并将错误传递给<code>next</code>函数处理。</p><p>然后，通过<code>exports.createTour</code>将另一个异步函数作为中间件导出。这个中间件函数使用<code>catchAsync</code>函数对其进行包装。在这个中间件函数内部，它首先使用<code>await</code>关键字来等待<code>Tour.create(req.body)</code>的结果，也就是创建一个新的Tour对象，并将<code>req.body</code>作为参数传递给它。然后，通过<code>res.status(201).json()</code>方法将成功的响应发送给客户端，返回JSON格式的数据，其中包含了新创建的Tour对象。</p><p>总结起来，这段代码定义了一个<code>catchAsync</code>函数，用于处理异步函数的错误捕获，并将其作为中间件函数在<code>exports.createTour</code>中使用。它创建了一个新的Tour对象，并将结果作为成功的响应返回给客户端。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const catchAsync = (fn) =&gt; {</span></span>
<span class="line"><span>  return (req, res, next) =&gt; {</span></span>
<span class="line"><span>    fn(req, res, next).catch(next);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.createTour = catchAsync (async (req, res, next) =&gt; {</span></span>
<span class="line"><span>  const newTour = await Tour.create(req.body);</span></span>
<span class="line"><span>  res.status(201).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      tours: newTour,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>npm i bcryptjs</p><p>npm i jsonwebtoken</p><p><a href="https://jwt.io/" target="_blank" rel="noreferrer">https://jwt.io/</a></p><p>userModel.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const mongoose = require(&#39;mongoose&#39;);</span></span>
<span class="line"><span>const validator = require(&#39;validator&#39;);</span></span>
<span class="line"><span>const bcrypt = require(&#39;bcryptjs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// name, email,photo,password,passwordConfirm</span></span>
<span class="line"><span>const userSchema = new mongoose.Schema({</span></span>
<span class="line"><span>  name: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: [true, &#39;A user must have a name&#39;],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  email: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: [true, &#39;A user must have a email&#39;],</span></span>
<span class="line"><span>    lowercase: true,</span></span>
<span class="line"><span>    unique: true,</span></span>
<span class="line"><span>    validate: [validator.isEmail, &#39;Please provide a valid email~&#39;],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  photo: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  password: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: [true, &#39;A user must have a password&#39;],</span></span>
<span class="line"><span>    minlength: 8,</span></span>
<span class="line"><span>    select: false,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  passwordConfirm: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: [true, &#39;A user must have a name&#39;],</span></span>
<span class="line"><span>    validate: {</span></span>
<span class="line"><span>      // /This only works on CREATE and SAVE!!!</span></span>
<span class="line"><span>      validator: function (el) {</span></span>
<span class="line"><span>        return el === this.password;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      message: &#39;Passwords are not the same&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>userSchema.pre(&#39;save&#39;, async function (next) {</span></span>
<span class="line"><span>  // /Only run this function if password was actually modified</span></span>
<span class="line"><span>  if (!this.isModified(&#39;password&#39;)) return next();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //   /Hash the password with cost of 12</span></span>
<span class="line"><span>  this.password = await bcrypt.hash(this.password, 12);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //   delete passwordConfirm field</span></span>
<span class="line"><span>  this.passwordConfirm = undefined;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>userSchema.methods.correctPassword = async function(candidatePassword,userPassword){</span></span>
<span class="line"><span>    return await bcrypt.compare(candidatePassword,userPassword)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const User = mongoose.model(&#39;User&#39;, userSchema);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = User;</span></span></code></pre></div><p>authController.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const jwt = require(&#39;jsonwebtoken&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const User = require(&#39;./../models/userModel&#39;);</span></span>
<span class="line"><span>const catchAsync = require(&#39;./../utils/catchAsync&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const AppError = require(&#39;./../utils/appError&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const signToken = id =&gt; {</span></span>
<span class="line"><span>  return jwt.sign({ id }, process.env.JWT_SECRET, {</span></span>
<span class="line"><span>    expiresIn: process.env.JWT_EXPIRES_IN,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.signup = catchAsync(async (req, res, next) =&gt; {</span></span>
<span class="line"><span>  // const newUser = await User.create(req.body);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // basically we only allow the data that we actually need</span></span>
<span class="line"><span>  const newUser = await User.create({</span></span>
<span class="line"><span>    name: req.body.name,</span></span>
<span class="line"><span>    email: req.body.email,</span></span>
<span class="line"><span>    password: req.body.password,</span></span>
<span class="line"><span>    passwordConfirm: req.body.passwordConfirm,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const token = signToken(newUser._id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  res.status(201).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    token,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      user: newUser,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exports.login = catchAsync(async (req, res, next) =&gt; {</span></span>
<span class="line"><span>  const { email, password } = req.body;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 1. check if email and password exist</span></span>
<span class="line"><span>  if (!email || !password) {</span></span>
<span class="line"><span>    return next(new AppError(&#39;Please provide email and password&#39;, 400));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 2. check if user exists &amp;&amp; password is correct</span></span>
<span class="line"><span>  const user = await User.findOne({email}).select(&#39;+password&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if(!user || !(await user.correctPassword(password,user.password))) {</span></span>
<span class="line"><span>    return next(new AppError(&#39;Incorrect email or password&#39;,401))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 3. if everything ok, send token to client</span></span>
<span class="line"><span>  const token = signToken(user._id)</span></span>
<span class="line"><span>  res.status(200).json({</span></span>
<span class="line"><span>    status: &#39;success&#39;,</span></span>
<span class="line"><span>    token,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}) ;</span></span></code></pre></div><p>npm i nodemailer</p><p><a href="https://mailtrap.io/" target="_blank" rel="noreferrer">https://mailtrap.io/</a></p><p><strong>COMPROMISED DATABASE</strong> Strongly encrypt passwords with salt and hash(bcrypt) Strongly encrypt password reset tokens(SHA 256) <strong>BRUTE FORCE ATTACKS</strong> Use bcrypt(to make login requests slow) Implement rate limiting(express-rate-limit) Implement maximum login attempts <strong>CROSS-SITE SCRIPTING(XSS)ATTACKS</strong> Store JWT in HTTPOnly cookies Sanitize user input data Set special HTTP headers (helmet package) <strong>DENIAL-OF-SERVICE(DOS)ATTACK</strong> Implement rate limiting (express-rate-limit) Limit body payload(in body-parser) Avoid evil regular expressions</p><p><strong>NOSQL QUERY INJECTION</strong> Use mongoose for MongoDB(because of SchemaTypes) Sanitize user input data <strong>OTHER BEST PRACTICES AND SUGGESTIONS</strong> Always use HTTPS Create random password reset tokens with expiry dates Deny access to JWT after password change Don&#39;t commit sensitive config data to Git Don&#39;t send error details to clients Prevent Cross-Site Request Forgery(csurf package) Require re-authentication before a high-value action Implement a blacklist of untrusted JWT Confirm user email address after first creating account Keep user logged in with refresh tokens Implement two-factor authentication Prevent parameter pollution causing Uncaught Exceptions</p><p>npm i express-rate-limit</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> limiter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rateLimit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  max:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  windowMs:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  message:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Too many requests from this IP, please try again in an hour~&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// And so that will then affect all of the routes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,limiter)</span></span></code></pre></div><p>npm i helmet</p><p>npm i express-mongo-sanitize</p><p>npm i xss-clean</p><p>npm i hpp</p><hr><p>P147</p><p>The most important principle is:Structure your data to match the ways that your application queries and updates data; In other words:Identify the questions that arise from your application&#39;s use cases first,and then model your data so that the questions can get answered in the most efficient way; In general,always favor embedding,unless there is a good reason not to embed.Especially on 1:FEW and 1:MANY relationships; A 1:TON or a MANY:MANY relationship is usually a good reason to reference instead of embedding; Also,favor referencing when data is updated a lot and if you need to frequently access a dataset on its own; Use embedding when data is mostly read but rarely updated,and when two datasets belong intrinsically together; Don&#39;t allow arrays to grow indefinitely.Therefore,if you need to normalize,use child referencing for 1:MANY relationships,and parent referencing for 1:TON relationships; Use two-way referencing for MANY:MANY relationships.</p><p>node ./dev-data/data/import-dev-data.js --delete</p><p>node ./dev-data/data/import-dev-data.js --import</p><p>npm i pug</p><p><a href="https://account.mapbox.com/auth/signup/" target="_blank" rel="noreferrer">https://account.mapbox.com/auth/signup/</a></p><p>npm i cookie-parser</p>`,241)]))}const g=a(e,[["render",l]]);export{d as __pageData,g as default};
