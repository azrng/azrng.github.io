import{_ as e,o as n,c as i,a}from"./app.565765f9.js";const t={},s=a(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u9759\u6001\u6587\u4EF6\u90FD\u5B58\u50A8\u5728Core Web\u6839\u76EE\u5F55\u4E2D\u3002\u9ED8\u8BA4\u76EE\u5F55\u662F&lt;content_root&gt;/wwwroot\uFF0C\u4F46\u53EF\u901A\u8FC7 UseWebRoot\u65B9\u6CD5\u66F4\u6539\u8BBF\u95EE\u76EE\u5F55\u3002\u800Ccontent_root\u662F\u6307web\u9879\u76EE\u7684\u6240\u6709\u6587\u4EF6\u5939\uFF0C\u5305\u62ECbin\u548Cwwwroot\u6587\u4EF6\u5939\u3002</p><h1 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h1><h2 id="\u7B80\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u7B80\u5355\u914D\u7F6E</h2><p>\u5728Configure\u65B9\u6CD5\u4E2D\u8BBE\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.UseStaticFiles();//\u9ED8\u8BA4\u9759\u6001\u6587\u4EF6\u76EE\u5F55\u662Fwwwroot

\u7279\u6B8A\u914D\u7F6E
app.UseStaticFiles(new StaticFileOptions()
{
    ServeUnknownFileTypes = true
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u9ED8\u8BA4\u7684\u9759\u6001\u6587\u4EF6\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4\u7684\u9759\u6001\u6587\u4EF6\u76EE\u5F55" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4\u7684\u9759\u6001\u6587\u4EF6\u76EE\u5F55</h2><p>\u5728Configure\u65B9\u6CD5\u4E2D\u8BBE\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>StaticFiles(app, env);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>StaticFiles\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  		/// &lt;summary&gt;
        /// \u9759\u6001\u6587\u4EF6
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;app&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;env&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private void StaticFiles(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //\u9759\u6001\u6587\u4EF6\u91CD\u8F7D
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, &quot;Upload&quot;)), //\u5C06\u76EE\u5F55\u5207\u6362\u5230\u9759\u6001\u6587\u4EF6\u6240\u5728\u76EE\u5F55
                RequestPath =new PathString(&quot;/fileupload&quot;), //\u865A\u62DF\u8DEF\u5F84\u7528\u6765\u8BBF\u95EE\u9759\u6001\u6587\u4EF6
                OnPrepareResponse = ctx =&gt;
                {
                    const int cacheControl = 60;//\u8BBE\u7F6E\u7F13\u5B58\u9759\u6001\u6587\u4EF6\u7684\u65F6\u95F4
                    var headers = ctx.Context.Response.GetTypedHeaders();
                    headers.CacheControl = new CacheControlHeaderValue
                    {
                        MaxAge = TimeSpan.FromSeconds(cacheControl)
                    };
                }
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u7684Upload\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2A1.txt\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u542F\u52A8\u9879\u76EE\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u5730\u5740\uFF1Ahttp://localhost:8001/fileupload/1.txt \u83B7\u53D6\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p>`,12),l=[s];function d(r,c){return n(),i("div",null,l)}const o=e(t,[["render",d],["__file","base.html.vue"]]);export{o as default};
