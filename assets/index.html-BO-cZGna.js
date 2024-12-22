import{_ as o,c,b as p,a as s,d as e,w as n,r as h,o as g,e as a}from"./app-DB9uL6Q5.js";const m={},u={class:"vp-file-tree"},y={class:"tree-node folder"},v={class:"tree-node folder"},f={class:"tree-node file"},b={class:"tree-node file"};function D(A,i){const t=h("VPIcon"),l=h("FileTreeItem"),k=h("CodeTabs");return g(),c("div",null,[i[6]||(i[6]=p(`<h2 id="vuepress-配置文件" tabindex="-1"><a class="header-anchor" href="#vuepress-配置文件"><span>VuePress 配置文件</span></a></h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。 你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>具体而言，VuePress 对于配置文件的路径有着约定（按照优先顺序）：</p><p>当前工作目录 <code>cwd</code> 下：</p><ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul><p>源文件目录 <code>sourceDir</code> 下：</p><ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul><p>基础配置文件示例：</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vuepress/bundler-vite</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  bundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在这里配置主题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">zh-CN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">你好， VuePress ！</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">这是我的第一个 VuePress 站点</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h3><p>在 VuePress 中，有三种配置类型:</p><ul><li>站点配置: 这是你在 配置文件 中直接导出的对象</li><li>主题配置: 传递给 <code>plumeTheme</code> 的对象参数</li><li>页面配置: 由在页面顶部基于 YAML 语法的 Frontmatter 提供</li></ul><h2 id="主题配置文件" tabindex="-1"><a class="header-anchor" href="#主题配置文件"><span>主题配置文件</span></a></h2><h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1"><span>概述</span></a></h3><p>一般我们使用 <code>.vuepress/config.js</code> 或者 <code>.vuepress/config.ts</code> 来配置主题。</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在这里配置主题</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>但是当我们已经启动了 VuePress 服务，对该文件的修改会导致 VuePres 服务重启，然后站点进行全量刷新， 这可能需要等待一段时间才能恢复， 如果你的站点内容不多还能够接受， 而对于一些较大的站点，可能需要等待漫长的时间。</p><p>特别是当我们频繁修改，或者修改的间隔较短时，很容易使 VuePress 服务 崩溃，我们不得不手动重启。</p><p><strong>这给我们在编写站点内容时带来的极大的不便。</strong></p><p>为了解决这一问题，主题支持在 单独的 主题配置文件中进行配置。</p><p><strong>对该文件的修改将通过热更新的方式实时生效。</strong></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>你可以直接在 <a href="#vuepress-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">VuePress 配置文件</a> 相同的路径下创建一个 <code>plume.config.js</code> 文件，这样就可以在该文件中进行主题配置。 你也可以使用 TypeScript 来创建一个 <code>plume.config.ts</code> 文件，以获得更好的类型提示。</p>`,24)),s("div",u,[s("ul",null,[e(l,{type:"folder",expanded:!0,empty:!1},{default:n(()=>[s("span",y,[e(t,{name:"vscode-icons:folder-type-docs"}),i[0]||(i[0]=s("span",{class:"name"},"docs",-1))]),s("ul",null,[e(l,{type:"folder",expanded:!0,empty:!1},{default:n(()=>[s("span",v,[e(t,{name:"vscode-icons:default-folder"}),i[1]||(i[1]=s("span",{class:"name"},".vuepress",-1))]),s("ul",null,[e(l,{type:"file",expanded:!1,empty:!0},{default:n(()=>[s("span",f,[e(t,{name:"vscode-icons:file-type-typescript"}),i[2]||(i[2]=s("span",{class:"name"},"config.ts",-1))])]),_:1}),e(l,{type:"file",expanded:!1,empty:!0},{default:n(()=>[s("span",b,[e(t,{name:"vscode-icons:file-type-typescript"}),i[3]||(i[3]=s("span",{class:"name focus"},[s("strong",null,"plume.config.ts")],-1))])]),_:1})])]),_:1})])]),_:1})])]),e(k,{id:"138",data:[{id:"plume.config.ts"}]},{title0:n(({value:r,isActive:d})=>[e(t,{name:"vscode-icons:file-type-typescript"}),i[4]||(i[4]=s("span",null,"plume.config.ts",-1))]),tab0:n(({value:r,isActive:d})=>i[5]||(i[5]=[s("div",{class:"language-ts line-numbers-mode","data-ext":"ts","data-title":"ts"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," defineThemeConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress-theme-plume"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," navbar"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./navbar"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineThemeConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  // 在这里配置主题")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  profile"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    name"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"Your name"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  },")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  navbar"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[7]||(i[7]=p(`<p>主题提供了 <code>defineThemeConfig(config)</code> 函数，为主题使用者提供主题配置的类型帮助。 你可以直接在这个文件中配置除了 <code>plugins</code> 字段外的其他配置。</p><h3 id="自定义配置文件路径" tabindex="-1"><a class="header-anchor" href="#自定义配置文件路径"><span>自定义配置文件路径</span></a></h3><p>如果你不希望按照 VuePress 默认的配置文件路径管理你的主题配置文件， 你也可以在 VuePress 配置文件中指定自己的主题配置文件路径。</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> path</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">node:path</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 在这里定义自己的主题配置文件路径</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    configFile</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">join</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">__dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">custom/config.ts</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">), </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>更推荐 使用 主题配置文件 来单独管理 主题配置，你不必再为频繁修改配置而一直等待 VuePress 重启。</p></div>`,5))])}const C=o(m,[["render",D],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/config/intro/","title":"配置说明","lang":"zh-CN","frontmatter":{"title":"配置说明","author":"pengzhanbo","createTime":"2024/03/02 10:48:14","permalink":"/config/intro/","description":"VuePress 配置文件 概述 VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。 你可以使用 .vuepress/config.ts 来得到更好的类型提示。 具体而言，VuePress 对于配置文件的路径有着约定（按照优先顺序）： 当前工作目录 cwd 下： vuepre...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://plume.pengzhanbo.cn/en/config/intro/"}],["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/config/intro/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"配置说明"}],["meta",{"property":"og:description","content":"VuePress 配置文件 概述 VuePress 站点的基本配置文件是 .vuepress/config.js ，但也同样支持 TypeScript 配置文件。 你可以使用 .vuepress/config.ts 来得到更好的类型提示。 具体而言，VuePress 对于配置文件的路径有着约定（按照优先顺序）： 当前工作目录 cwd 下： vuepre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-25T16:14:06.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-09-25T16:14:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T16:14:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":2.57,"words":771},"git":{"updatedTime":1727280846000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":6,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"ca21d1b8cb55b64b395361aea2b131be91d5e4e1","date":1727280846000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat: add support optional icon for file-tree and code-tabs (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/216\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#216</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/ca21d1b8cb55b64b395361aea2b131be91d5e4e1"},{"hash":"4644765090e9a69a26e92f1cde9c5e0413b69829","date":1727278894000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"chore: tweak","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/4644765090e9a69a26e92f1cde9c5e0413b69829"},{"hash":"520dce22c1b037232401c4b6ddf5a90346da41a0","date":1725984193000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"style: lint fix","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/520dce22c1b037232401c4b6ddf5a90346da41a0"},{"hash":"0142fe9fa3ed21fc0b9cbe3027050ebde09c3438","date":1720646051000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/0142fe9fa3ed21fc0b9cbe3027050ebde09c3438"},{"hash":"ca097146cf4473f9ebfb04fe9e61708dcfd6d464","date":1709917771000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: lint fix","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/ca097146cf4473f9ebfb04fe9e61708dcfd6d464"},{"hash":"c56bae8d58941db05a5cb1faad45be2178331db3","date":1709915848000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat: 全新的文档！","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/c56bae8d58941db05a5cb1faad45be2178331db3"}]},"autoDesc":true,"filePathRelative":"notes/theme/config/配置说明.md","bulletin":false}');export{C as comp,x as data};
