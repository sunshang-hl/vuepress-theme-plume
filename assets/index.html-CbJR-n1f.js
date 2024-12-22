import{_ as a,c as o,a as t,e as n,d as s,w as p,b as i,r as l,o as c}from"./app-DB9uL6Q5.js";const d={};function u(m,e){const r=l("RouteLink");return c(),o("div",null,[e[3]||(e[3]=t("p",null,"当前版本包含了一些破坏性的更新，因此做一些说明。",-1)),e[4]||(e[4]=t("h2",{id:"vuepress-plugin-md-enhance-插件迁移",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vuepress-plugin-md-enhance-插件迁移"},[t("span",null,"vuepress-plugin-md-enhance 插件迁移")])],-1)),t("p",null,[e[1]||(e[1]=n("在 ")),s(r,{to:"/3.%E6%9B%B4%E6%96%B0%E8%AF%B4%E6%98%8E/102-103.html#vuepress-plugin-md-enhance-%E6%8F%92%E4%BB%B6%E8%BF%81%E7%A7%BB"},{default:p(()=>e[0]||(e[0]=[n("1.0.0-rc.103")])),_:1}),e[2]||(e[2]=n(" 版本中， 主题完成了一部分功能到 vuepress 官方插件的迁移工作。但依然还有部分功能尚未完成。"))]),e[5]||(e[5]=i('<p>在当前版本更新中，主题对这项工作进行了新的推进，将 <code>markdownEnhance.include</code> 功能迁移到了 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-include.html" target="_blank" rel="noopener noreferrer"><code>@vuepress/plugin-markdown-include</code></a> 插件。 因此，与之关联的配置项 <code>plugins.markdownEnhance.include</code> 将被移除，并迁移到 <code>plugins.markdownInclude</code> 进行配置。</p><p><strong>如果你有自定义配置，请注意需要进行迁移。</strong></p><h2 id="功能修复" tabindex="-1"><a class="header-anchor" href="#功能修复"><span>功能修复</span></a></h2><h3 id="vuepress-plugin-git" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-git"><span>@vuepress/plugin-git</span></a></h3><p>在 <code>1.0.0-rc.119</code> 版本中，我重构了 <a href="https://ecosystem.vuejs.press/zh/plugins/development/git.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-git</a> ，使插件能够获得更多的 git 信息，如 每个文件的 创建时间，最后修改时间，作者、提交历史记录等。</p><p>但与此同时也引入了新的 bug，该 bug 会导致在 私有 git 托管服务中进行构建时，在不能自动获取 贡献者头像使用 sha256 自动生成临时头像时会导致构建失败。 （ <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/334" target="_blank" rel="noopener noreferrer">#334</a>, <a href="https://github.com/pengzhanbo/vuepress-theme-plume/issues/349" target="_blank" rel="noopener noreferrer">#349</a> )</p><p>另外的一个 隐性问题是，如果项目的提交记录过多，拥有数千条以上的记录时，由于读取的 git log 过多会导致内存占用过高。 可能会导致构建时间过长甚至失败。</p><p>我在 <a href="https://github.com/vuepress/ecosystem/pull/292" target="_blank" rel="noopener noreferrer">vuepress/ecosystem#292</a> 修复了相关问题，并在 主题 <code>1.0.0-rc.120</code> 版本中进行了修复。</p>',8))])}const g=a(d,[["render",u],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/article/r532eavn/","title":"1.0.0-rc.120 更新说明","lang":"zh-CN","frontmatter":{"title":"1.0.0-rc.120 更新说明","createTime":"2024/12/08 12:16:05","permalink":"/article/r532eavn/","sticky":3,"description":"当前版本包含了一些破坏性的更新，因此做一些说明。 vuepress-plugin-md-enhance 插件迁移 在 版本中， 主题完成了一部分功能到 vuepress 官方插件的迁移工作。但依然还有部分功能尚未完成。 在当前版本更新中，主题对这项工作进行了新的推进，将 markdownEnhance.include 功能迁移到了 @vuepress/...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/article/r532eavn/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"1.0.0-rc.120 更新说明"}],["meta",{"property":"og:description","content":"当前版本包含了一些破坏性的更新，因此做一些说明。 vuepress-plugin-md-enhance 插件迁移 在 版本中， 主题完成了一部分功能到 vuepress 官方插件的迁移工作。但依然还有部分功能尚未完成。 在当前版本更新中，主题对这项工作进行了新的推进，将 markdownEnhance.include 功能迁移到了 @vuepress/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-08T05:05:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-08T05:05:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.0.0-rc.120 更新说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-08T05:05:24.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.33,"words":399},"git":{"updatedTime":1733634324000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"f47df1449b94f06bdf00afa33d32889f9b2ac845","date":1733634324000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/f47df1449b94f06bdf00afa33d32889f9b2ac845"}]},"autoDesc":true,"filePathRelative":"3.更新说明/120.md","categoryList":[{"id":"7a3973","sort":3,"name":"更新说明"}],"bulletin":false}');export{g as comp,f as data};
