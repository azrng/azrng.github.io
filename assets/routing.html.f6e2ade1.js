import{_ as e,o as i,c as n,d}from"./app.f6b99883.js";const l={},s=d(`<h1 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h1><ul><li>Routing\uFF08\u8DEF\u7531\uFF09\uFF1A\u66F4\u51C6\u786E\u7684\u5E94\u8BE5\u53EB\u505AEndpoint Routing\uFF0C\u8D1F\u8D23\u5C06HTTP\u8BF7\u6C42\u6309\u7167\u5339\u914D\u89C4\u5219\u9009\u62E9\u5BF9\u5E94\u7684\u7EC8\u7ED3\u70B9</li><li>Endpoint\uFF08\u7EC8\u7ED3\u70B9\uFF09\uFF1A\u8D1F\u8D23\u5F53HTTP\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u6267\u884C\u4EE3\u7801</li></ul><p>\u8DEF\u7531\u662F\u901A\u8FC7<code>UseRouting</code>\u548C<code>UseEndpoints</code>\u4E24\u4E2A\u4E2D\u95F4\u4EF6\u914D\u5408\u5728\u4E00\u8D77\u6765\u5B8C\u6210\u6CE8\u518C\u7684\uFF1A</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // \u6DFB\u52A0Routing\u76F8\u5173\u670D\u52A1
        // \u6CE8\u610F\uFF0C\u5176\u5DF2\u5728 ConfigureWebDefaults \u4E2D\u6DFB\u52A0\uFF0C\u65E0\u9700\u624B\u52A8\u6DFB\u52A0\uFF0C\u6B64\u5904\u4EC5\u4E3A\u6F14\u793A
        services.AddRouting();
    }
    
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();
    
        app.UseEndpoints(endpoints =&gt;
        {
            endpoints.MapGet(&quot;/&quot;, async context =&gt;
            {
                await context.Response.WriteAsync(&quot;Hello World!&quot;);
            });
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>UseRouting</code>\uFF1A\u7528\u4E8E\u5411\u4E2D\u95F4\u4EF6\u7BA1\u9053\u6DFB\u52A0\u8DEF\u7531\u5339\u914D\u4E2D\u95F4\u4EF6\uFF08<code>EndpointRoutingMiddleware</code>\uFF09\u3002\u8BE5\u4E2D\u95F4\u4EF6\u4F1A\u68C0\u67E5\u5E94\u7528\u4E2D\u5B9A\u4E49\u7684\u7EC8\u7ED3\u70B9\u5217\u8868\uFF0C\u7136\u540E\u901A\u8FC7\u5339\u914D URL \u548C HTTP \u65B9\u6CD5\u6765\u9009\u62E9\u6700\u4F73\u7684\u7EC8\u7ED3\u70B9\u3002<strong>\u7B80\u5355\u8BF4\uFF0C\u8BE5\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528\u662F\u6839\u636E\u4E00\u5B9A\u89C4\u5219\u6765\u9009\u62E9\u51FA\u7EC8\u7ED3\u70B9</strong></li><li><code>UseEndpoints</code>\uFF1A\u7528\u4E8E\u5411\u4E2D\u95F4\u4EF6\u7BA1\u9053\u6DFB\u52A0\u7EC8\u7ED3\u70B9\u4E2D\u95F4\u4EF6\uFF08<code>EndpointMiddleware</code>\uFF09\u3002\u53EF\u4EE5\u5411\u8BE5\u4E2D\u95F4\u4EF6\u7684\u7EC8\u7ED3\u70B9\u5217\u8868\u4E2D\u6DFB\u52A0\u7EC8\u7ED3\u70B9\uFF0C\u5E76\u914D\u7F6E\u8FD9\u4E9B\u7EC8\u7ED3\u70B9\u8981\u6267\u884C\u7684\u59D4\u6258\uFF0C\u8BE5\u4E2D\u95F4\u4EF6\u4F1A\u8D1F\u8D23\u8FD0\u884C\u7531<code>EndpointRoutingMiddleware</code>\u4E2D\u95F4\u4EF6\u9009\u62E9\u7684\u7EC8\u7ED3\u70B9\u6240\u5173\u8054\u7684\u59D4\u6258\u3002<strong>\u7B80\u5355\u8BF4\uFF0C\u8BE5\u4E2D\u95F4\u4EF6\u7528\u6765\u6267\u884C\u6240\u9009\u62E9\u7684\u7EC8\u7ED3\u70B9\u59D4\u6258</strong></li></ul><blockquote><p>UseRouting<code>\u4E0E</code>UseEndpoints<code>\u5FC5\u987B\u540C\u65F6\u4F7F\u7528\uFF0C\u800C\u4E14\u5FC5\u987B\u5148\u8C03\u7528</code>UseRouting<code>\uFF0C\u518D\u8C03\u7528</code>UseEndpoints</p></blockquote><h1 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h1><p>\u5148\u4E86\u89E3\u4E00\u4E0B\u7EC8\u7ED3\u70B9\u7684\u7C7B\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Endpoint
{
    public Endpoint(RequestDelegate requestDelegate, EndpointMetadataCollection? metadata, string? displayName);

    public string? DisplayName { get; }

    public EndpointMetadataCollection Metadata { get; }

    public RequestDelegate RequestDelegate { get; }

    public override string? ToString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC8\u7ED3\u70B9\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u53EF\u6267\u884C\uFF1A\u542B\u6709<code>RequestDelegate</code>\u59D4\u6258</li><li>\u53EF\u6269\u5C55\uFF1A\u542B\u6709<code>Metadata</code>\u5143\u6570\u636E\u96C6\u5408</li><li>\u53EF\u9009\u62E9\uFF1A\u53EF\u9009\u7684\u5305\u542B\u8DEF\u7531\u4FE1\u606F</li><li>\u53EF\u679A\u4E3E\uFF1A\u901A\u8FC7DI\u5BB9\u5668\uFF0C\u67E5\u627E<code>EndpointDataSource</code>\u6765\u5C55\u793A\u7EC8\u7ED3\u70B9\u96C6\u5408\u3002</li></ul><h2 id="\u83B7\u53D6\u7EC8\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7EC8\u7ED3\u70B9" aria-hidden="true">#</a> \u83B7\u53D6\u7EC8\u7ED3\u70B9</h2><p>\u5BF9\u4E8E\u4E2D\u95F4\u4EF6\u8FD8\u4E0D\u719F\u6089\u7684\uFF0C\u53EF\u4EE5\u5148\u770B\u4E00\u4E0B\u4E2D\u95F4\u4EF6(Middleware)\u3002</p><p>\u5728\u4E2D\u95F4\u4EF6\u7BA1\u9053\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>HttpContext</code>\u6765\u68C0\u7D22\u7EC8\u7ED3\u70B9\u7B49\u4FE1\u606F\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7EC8\u7ED3\u70B9\u5BF9\u8C61\u5728\u521B\u5EFA\u5B8C\u6BD5\u540E\uFF0C\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u65E0\u6CD5\u4FEE\u6539\u3002</p><blockquote><ul><li>\u5728\u8C03\u7528<code>UseRouting</code>\u4E4B\u524D\uFF0C\u4F60\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E9B\u7528\u4E8E\u4FEE\u6539\u8DEF\u7531\u64CD\u4F5C\u7684\u6570\u636E\uFF0C\u6BD4\u5982<code>UseRewriter</code>\u3001<code>UseHttpMethodOverride</code>\u3001<code>UsePathBase</code>\u7B49\u3002</li><li>\u5728\u8C03\u7528<code>UseRouting</code>\u548C<code>UseEndpoints</code>\u4E4B\u95F4\uFF0C\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E9B\u7528\u4E8E\u63D0\u524D\u5904\u7406\u8DEF\u7531\u7ED3\u679C\u7684\u4E2D\u95F4\u4EF6\uFF0C\u5982<code>UseAuthentication</code>\u3001<code>UseAuthorization</code>\u3001<code>UseCors</code>\u7B49\u3002</li></ul></blockquote><p>\u6211\u4EEC\u4E00\u8D77\u770B\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.Use(next =&gt; context =&gt;
    {
        // \u5728 UseRouting \u8C03\u7528\u524D\uFF0C\u59CB\u7EC8\u4E3A null
        Console.WriteLine($&quot;1. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
        return next(context);
    });

    // EndpointRoutingMiddleware \u8C03\u7528 SetEndpoint \u6765\u8BBE\u7F6E\u7EC8\u7ED3\u70B9
    app.UseRouting();

    app.Use(next =&gt; context =&gt;
    {
        // \u5982\u679C\u8DEF\u7531\u5339\u914D\u5230\u4E86\u7EC8\u7ED3\u70B9\uFF0C\u90A3\u4E48\u6B64\u5904\u5C31\u4E0D\u4E3A null\uFF0C\u5426\u5219\uFF0C\u8FD8\u662F null
        Console.WriteLine($&quot;2. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
        return next(context);
    });

    // EndpointMiddleware \u901A\u8FC7 GetEndpoint \u65B9\u6CD5\u83B7\u53D6\u7EC8\u7ED3\u70B9\uFF0C
    // \u7136\u540E\u6267\u884C\u8BE5\u7EC8\u7ED3\u70B9\u7684 RequestDelegate \u59D4\u6258
    app.UseEndpoints(endpoints =&gt;
    {
        endpoints.MapGet(&quot;/&quot;, context =&gt;
        {
            // \u5339\u914D\u5230\u4E86\u7EC8\u7ED3\u70B9\uFF0C\u80AF\u5B9A\u4E0D\u662F null
            Console.WriteLine($&quot;3. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
            return Task.CompletedTask;
        }).WithDisplayName(&quot;Custom Display Name&quot;);  // \u81EA\u5B9A\u4E49\u7EC8\u7ED3\u70B9\u540D\u79F0
    });

    app.Use(next =&gt; context =&gt;
    {
        // \u53EA\u6709\u5F53\u8DEF\u7531\u6CA1\u6709\u5339\u914D\u5230\u7EC8\u7ED3\u70B9\u65F6\uFF0C\u624D\u4F1A\u6267\u884C\u8FD9\u91CC
        Console.WriteLine($&quot;4. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
        return next(context);
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u8BBF\u95EE<code>/</code>\u65F6\uFF0C\u8F93\u51FA\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. Endpoint: null
2. Endpoint: Custom Display Name
3. Endpoint: Custom Display Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u8BBF\u95EE\u5176\u4ED6\u4E0D\u5339\u914D\u7684URL\u65F6\uFF0C\u8F93\u51FA\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. Endpoint: null
2. Endpoint: null
4. Endpoint: null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u8DEF\u7531\u5339\u914D\u5230\u4E86\u7EC8\u7ED3\u70B9\u65F6\uFF0C<code>EndpointMiddleware</code>\u5219\u662F\u8BE5\u8DEF\u7531\u7684\u7EC8\u7AEF\u4E2D\u95F4\u4EF6\uFF1B\u5F53\u672A\u5339\u914D\u5230\u7EC8\u7ED3\u70B9\u65F6\uFF0C\u4F1A\u7EE7\u7EED\u6267\u884C\u540E\u9762\u7684\u4E2D\u95F4\u4EF6\u3002</p><blockquote><p>\u7EC8\u7AEF\u4E2D\u95F4\u4EF6\uFF1A\u4E0E\u666E\u901A\u4E2D\u95F4\u4EF6\u4E0D\u540C\u7684\u662F\uFF0C\u8BE5\u4E2D\u95F4\u4EF6\u6267\u884C\u540E\u5373\u8FD4\u56DE\uFF0C\u4E0D\u4F1A\u8C03\u7528\u540E\u9762\u7684\u4E2D\u95F4\u4EF6\u3002</p></blockquote><h2 id="\u914D\u7F6E\u7EC8\u7ED3\u70B9\u59D4\u6258" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7EC8\u7ED3\u70B9\u59D4\u6258" aria-hidden="true">#</a> \u914D\u7F6E\u7EC8\u7ED3\u70B9\u59D4\u6258</h2><p>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u5C06\u59D4\u6258\u5173\u8054\u5230\u7EC8\u7ED3\u70B9</p><ul><li>MapGet</li><li>MapPost</li><li>MapPut</li><li>MapDelete</li><li>MapHealthChecks</li><li>\u5176\u4ED6\u7C7B\u4F3C\u201CMapXXX\u201D\u7684\u65B9\u6CD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    // \u5728\u6267\u884C\u7EC8\u7ED3\u70B9\u524D\u8FDB\u884C\u6388\u6743
    app.UseAuthorization();

    app.UseEndpoints(endpoints =&gt;
    {
        endpoints.MapGet(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;get&quot;));
        endpoints.MapPost(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;post&quot;));
        endpoints.MapPut(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;put&quot;));
        endpoints.MapDelete(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;delete&quot;));
        endpoints.MapHealthChecks(&quot;/healthChecks&quot;);
        endpoints.MapControllers();
    });

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6A21\u677F" aria-hidden="true">#</a> \u8DEF\u7531\u6A21\u677F</h2><p>\u89C4\u5219\uFF1A</p><p>\u901A\u8FC7<code>{}</code>\u6765\u7ED1\u5B9A\u8DEF\u7531\u53C2\u6570\uFF0C\u5982: {name}</p><p>\u5C06<code>?</code>\u4F5C\u4E3A\u53C2\u6570\u540E\u7F00\uFF0C\u4EE5\u6307\u793A\u8BE5\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u5982\uFF1A{name?}</p><p>\u901A\u8FC7<code>=</code>\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5982\uFF1A{name=jjj} \u8868\u793Aname\u7684\u9ED8\u8BA4\u503C\u662Fjjj</p><p>\u901A\u8FC7<code>:</code>\u6DFB\u52A0\u5185\u8054\u7EA6\u675F\uFF0C\u5982\uFF1A{id:int}\uFF0C\u540E\u9762\u8FFD\u52A0<code>:</code>\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\u5185\u8054\u7EA6\u675F\uFF0C\u5982\uFF1A{id:int:min(1)}</p><p>\u591A\u4E2A\u8DEF\u7531\u53C2\u6570\u95F4\u5FC5\u987B\u901A\u8FC7\u6587\u672C\u6216\u5206\u9694\u7B26\u5206\u9694\uFF0C\u4F8B\u5982 {a}{b} \u5C31\u4E0D\u7B26\u5408\u89C4\u5219\uFF0C\u53EF\u4EE5\u4FEE\u6539\u4E3A\u7C7B\u4F3C {a}+-{b} \u6216 {a}/{b} \u7684\u5F62\u5F0F</p><p>\u5148\u4E3E\u4E2A\u4F8B\u5B50\uFF0C/book/{name}\u4E2D\u7684{name}\u4E3A\u8DEF\u7531\u53C2\u6570\uFF0Cbook</p><p>\u4E3A\u975E\u8DEF\u7531\u53C2\u6570\u6587\u672C\u3002\u975E\u8DEF\u7531\u53C2\u6570\u7684\u6587\u672C\u548C\u5206\u9694\u7B26/\uFF1A</p><ul><li>\u662F\u4E0D\u5206\u533A\u5927\u5C0F\u5199\u7684\uFF08\u5B98\u65B9\u4E2D\u6587\u6587\u6863\u7FFB\u8BD1\u9519\u4E86\uFF09</li><li>\u8981\u4F7F\u7528\u6CA1\u6709\u88ABUrl\u7F16\u7801\u7684\u683C\u5F0F\uFF0C\u5982\u7A7A\u683C\u4F1A\u88AB\u7F16\u7801\u4E3A %20\uFF0C\u4E0D\u5E94\u4F7F\u7528 %20\uFF0C\u800C\u5E94\u4F7F\u7528\u7A7A\u683C</li><li>\u5982\u679C\u8981\u5339\u914D<code>{</code>\u6216<code>}</code>\uFF0C\u5219\u4F7F\u7528<code>{{</code>\u6216<code>}}</code>\u8FDB\u884C\u8F6C\u4E49</li></ul><h3 id="catch-all\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#catch-all\u53C2\u6570" aria-hidden="true">#</a> catch-all\u53C2\u6570</h3><p>\u8DEF\u7531\u6A21\u677F\u4E2D\u7684\u661F\u53F7<code>*</code>\u548C\u53CC\u661F\u53F7<code>**</code>\u88AB\u79F0\u4E3Acatch-all\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u53EF\u4EE5\u4F5C\u4E3A\u8DEF\u7531\u53C2\u6570\u7684\u524D\u7F00\uFF0C\u5982<code>/Book/{*id}</code>\u3001<code>/Book/{**id}</code>\uFF0C\u53EF\u4EE5\u5339\u914D\u4EE5<code>/Book</code>\u5F00\u5934\u7684\u4EFB\u610FUrl\uFF0C\u5982<code>/Book</code>\u3001<code>/Book/</code>\u3001<code>/Book/abc</code>\u3001<code>/Book/abc/def</code>\u7B49\u3002</p><p><code>*</code>\u548C<code>**</code>\u5728\u4E00\u822C\u4F7F\u7528\u4E0A\u6CA1\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u5B83\u4EEC\u4EC5\u4EC5\u5728\u4F7F\u7528<code>LinkGenerator</code>\u65F6\u4F1A\u6709\u4E0D\u540C\uFF0C\u5982<code>id = abc/def</code>\uFF0C\u5F53\u4F7F\u7528<code>/Book/{*id}</code>\u6A21\u677F\u65F6\uFF0C\u4F1A\u751F\u6210<code>/Book/abc%2Fdef</code>\uFF0C\u5F53\u4F7F\u7528<code>/Book/{**id}</code>\u6A21\u677F\u65F6\uFF0C\u4F1A\u751F\u6210<code>/Book/abc/def</code>\u3002</p><h3 id="\u590D\u6742\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u6BB5" aria-hidden="true">#</a> \u590D\u6742\u6BB5</h3><p>\u590D\u6742\u6BB5\u901A\u8FC7<strong>\u975E\u8D2A\u5A6A</strong>\u7684\u65B9\u5F0F<strong>\u4ECE\u53F3\u5230\u5DE6</strong>\u8FDB\u884C\u5339\u914D\uFF0C\u4F8B\u5982<code>[Route(&quot;/a{b}c{d}&quot;)]</code>\u5C31\u662F\u4E00\u4E2A\u590D\u6742\u6BB5\u3002\u5B9E\u9645\u4E0A\uFF0C\u5B83\u7684\u786E\u5F88\u590D\u6742\uFF0C\u53EA\u6709\u4E86\u89E3\u5B83\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u624D\u80FD\u6B63\u786E\u7684\u4F7F\u7528\u5B83\u3002</p><blockquote><ul><li>\u8D2A\u5A6A\u5339\u914D\uFF08\u4E5F\u79F0\u4E3A\u201C\u61D2\u60F0\u5339\u914D\u201D\uFF09\uFF1A\u5339\u914D\u6700\u5927\u53EF\u80FD\u7684\u5B57\u7B26\u4E32</li><li>\u975E\u8D2A\u5A6A\u5339\u914D\uFF1A\u5339\u914D\u6700\u5C0F\u53EF\u80FD\u7684\u5B57\u7B26\u4E32</li></ul></blockquote><p>\u63A5\u4E0B\u6765\uFF0C\u5C31\u62FF\u6A21\u677F<code>[Route(&quot;/a{b}c{d}&quot;)]</code>\u6765\u4E3E\u4E24\u4E2A\u4F8B\u5B50\uFF1A</p><p><strong>\u6210\u529F\u5339\u914D</strong>\u7684\u6848\u4F8B\u2014\u2014\u5F53Url\u4E3A<code>/abcd</code>\u65F6\uFF0C\u5339\u914D\u8FC7\u7A0B\u4E3A\uFF08<code>|</code>\u7528\u4E8E\u8F85\u52A9\u5C55\u793A\u7B97\u6CD5\u7684\u89E3\u6790\u65B9\u5F0F\uFF09\uFF1A</p><ul><li>\u4ECE\u53F3\u5230\u5DE6\u8BFB\u53D6\u6A21\u677F\uFF0C\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u6587\u672C\u4E3A<code>c</code>\u3002\u63A5\u7740\uFF0C\u8BFB\u53D6Url<code>/abcd</code>\uFF0C\u53EF\u89E3\u6790\u4E3A<code>/ab|c|d</code></li><li>\u6B64\u65F6\uFF0CUrl\u4E2D\u53F3\u4FA7\u7684\u6240\u6709\u5185\u5BB9<code>d</code>\u5747\u4E0E\u8DEF\u7531\u53C2\u6570<code>{d}</code>\u5339\u914D</li><li>\u7136\u540E\uFF0C\u7EE7\u7EED\u4ECE\u53F3\u5230\u5DE6\u8BFB\u53D6\u6A21\u677F\uFF0C\u627E\u5230\u7684\u4E0B\u4E00\u4E2A\u6587\u672C\u4E3A<code>a</code>\u3002\u63A5\u7740\uFF0C\u4ECE\u521A\u624D\u505C\u4E0B\u7684\u5730\u65B9\u7EE7\u7EED\u8BFB\u53D6Url<code>/ab|c|d</code>\uFF0C\u89E3\u6790\u4E3A<code>/a|b|c|d</code></li><li>\u6B64\u65F6\uFF0CUrl\u4E2D\u53F3\u4FA7\u7684\u503C<code>b</code>\u4E0E\u8DEF\u7531\u53C2\u6570<code>{b}</code>\u5339\u914D</li><li>\u6700\u540E\uFF0C\u6CA1\u6709\u5269\u4F59\u7684\u8DEF\u7531\u6A21\u677F\u6BB5\u6216\u53C2\u6570\uFF0C\u4E5F\u6CA1\u6709\u5269\u4F59\u7684Url\u6587\u672C\uFF0C\u56E0\u6B64\u5339\u914D\u6210\u529F\u3002</li></ul><p><strong>\u5339\u914D\u5931\u8D25</strong>\u7684\u6848\u4F8B\u2014\u2014\u5F53Url\u4E3A<code>/aabcd</code>\u65F6\uFF0C\u5339\u914D\u8FC7\u7A0B\u4E3A\uFF08<code>|</code>\u7528\u4E8E\u8F85\u52A9\u5C55\u793A\u7B97\u6CD5\u7684\u89E3\u6790\u65B9\u5F0F\uFF09\uFF1A</p><ul><li>\u4ECE\u53F3\u5230\u5DE6\u8BFB\u53D6\u6A21\u677F\uFF0C\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u6587\u672C\u4E3A<code>c</code>\u3002\u63A5\u7740\uFF0C\u8BFB\u53D6Url<code>/aabcd</code>\uFF0C\u53EF\u89E3\u6790\u4E3A<code>/aab|c|d</code></li><li>\u6B64\u65F6\uFF0CUrl\u4E2D\u53F3\u4FA7\u7684\u6240\u6709\u5185\u5BB9<code>d</code>\u5747\u4E0E\u8DEF\u7531\u53C2\u6570<code>{d}</code>\u5339\u914D</li><li>\u7136\u540E\uFF0C\u7EE7\u7EED\u4ECE\u53F3\u5230\u5DE6\u8BFB\u53D6\u6A21\u677F\uFF0C\u627E\u5230\u7684\u4E0B\u4E00\u4E2A\u6587\u672C\u4E3A<code>a</code>\u3002\u63A5\u7740\uFF0C\u4ECE\u521A\u624D\u505C\u4E0B\u7684\u5730\u65B9\u7EE7\u7EED\u8BFB\u53D6Url<code>/aab|c|d</code>\uFF0C\u89E3\u6790\u4E3A<code>/a|a|b|c|d</code></li><li>\u6B64\u65F6\uFF0CUrl\u4E2D\u53F3\u4FA7\u7684\u503C<code>b</code>\u4E0E\u8DEF\u7531\u53C2\u6570<code>{b}</code>\u5339\u914D</li><li>\u6700\u540E\uFF0C\u6CA1\u6709\u5269\u4F59\u7684\u8DEF\u7531\u6A21\u677F\u6BB5\u6216\u53C2\u6570\uFF0C\u4F46\u8FD8\u6709\u5269\u4F59\u7684Url\u6587\u672C\uFF0C\u56E0\u6B64\u5339\u914D\u4E0D\u6210\u529F\u3002</li></ul><blockquote><p>\u4F7F\u7528\u590D\u6742\u6BB5\uFF0C\u76F8\u6BD4\u666E\u901A\u8DEF\u7531\u6A21\u677F\u6765\u8BF4\uFF0C\u4F1A\u9020\u6210\u66F4\u52A0\u6602\u8D35\u7684\u6027\u80FD\u5F71\u54CD</p></blockquote><h2 id="\u8DEF\u7531\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u7EA6\u675F" aria-hidden="true">#</a> \u8DEF\u7531\u7EA6\u675F</h2><p>\u901A\u8FC7\u8DEF\u7531\u7EA6\u675F\uFF0C\u53EF\u4EE5\u5728\u8DEF\u7531\u5339\u914D\u8FC7\u7A0B\u4E2D\uFF0C\u68C0\u67E5URL\u662F\u5426\u662F\u53EF\u63A5\u53D7\u7684\u3002\u53E6\u5916\uFF0C\u8DEF\u7531\u7EA6\u675F\u4E00\u822C\u662F\u7528\u6765\u6D88\u9664\u8DEF\u7531\u6B67\u4E49\uFF0C\u800C\u4E0D\u662F\u7528\u6765\u8FDB\u884C\u8F93\u5165\u9A8C\u8BC1\u7684\u3002</p><p>\u5B9E\u73B0\u4E0A\uFF0C\u5F53Http\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u8DEF\u7531\u53C2\u6570\u548C\u8BE5\u53C2\u6570\u7684\u7EA6\u675F\u540D\u4F1A\u4F20\u9012\u7ED9<code>IInlineConstraintResolver</code>\u670D\u52A1\uFF0C<code>IInlineConstraintResolver</code>\u670D\u52A1\u4F1A\u8D1F\u8D23\u521B\u5EFA<code>IRouteConstraint</code>\u5B9E\u4F8B\uFF0C\u4EE5\u9488\u5BF9Url\u8FDB\u884C\u5904\u7406\u3002</p><p><strong>\u9884\u5B9A\u4E49\u7684\u8DEF****\u7531\u7EA6\u675F</strong></p><blockquote><p>\u6458\u81EA\u5B98\u65B9\u6587\u6863</p></blockquote><p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIVxhrKuf2a2hiasj6QnurH65VvLQJMhicDq25cATsM9dTHeDticZxd5fbw/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><h4 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u8DEF\u7531\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u8DEF\u7531\u7EA6\u675F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u8DEF\u7531\u7EA6\u675F</h4><p>\u901A\u8FC7<code>regex(expression)</code>\u6765\u8BBE\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\u7EA6\u675F\uFF0C\u5E76\u4E14\u8BE5\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\uFF1A</p><ul><li><code>RegexOptions.IgnoreCase</code>\uFF1A\u5FFD\u7565\u5927\u5C0F\u5199</li><li><code>RegexOptions.Compiled</code>\uFF1A\u5C06\u8BE5\u6B63\u5219\u8868\u8FBE\u5F0F\u7F16\u8BD1\u4E3A\u7A0B\u5E8F\u96C6\u3002\u8FD9\u4F1A\u4F7F\u5F97\u6267\u884C\u901F\u5EA6\u66F4\u5FEB\uFF0C\u4F46\u4F1A\u62D6\u6162\u542F\u52A8\u65F6\u95F4\u3002</li><li><code>RegexOptions.CultureInvariant</code>\uFF1A\u5FFD\u7565\u533A\u57DF\u6587\u5316\u5DEE\u5F02\u3002</li></ul><p>\u53E6\u5916\uFF0C\u8FD8\u9700\u8981\u6CE8\u610F\u5BF9\u67D0\u4E9B\u5B57\u7B26\u8FDB\u884C\u8F6C\u4E49\uFF1A</p><ul><li><code>\\</code>\u66FF\u6362\u4E3A<code>\\\\</code></li><li><code>{</code>\u66FF\u6362\u4E3A<code>{{</code>\uFF0C <code>}</code>\u66FF\u6362\u4E3A<code>}}</code></li><li><code>[</code>\u66FF\u6362\u4E3A<code>[[</code>\uFF0C<code>]</code>\u66FF\u6362\u4E3A<code>]]</code></li></ul><p>\u4F8B\u5982\uFF1A</p><p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIMfxNWluXowgF3nLwlpGJVrFWrFhvGToZhVBJywraOzXeuT76OBwBxw/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><ul><li>\u6307\u5B9A regex \u7EA6\u675F\u7684\u4E24\u79CD\u65B9\u5F0F\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5185\u8054\u65B9\u5F0F
app.UseEndpoints(endpoints =&gt;
{
    endpoints.MapGet(&quot;{message:regex(^\\\\d{{3}}-\\\\d{{2}}-\\\\d{{4}}$)}&quot;,
        context =&gt; 
        {
            return context.Response.WriteAsync(&quot;inline-constraint match&quot;);
        });
 });
 
// \u53D8\u91CF\u58F0\u660E\u65B9\u5F0F
app.UseEndpoints(endpoints =&gt;
{
    endpoints.MapControllerRoute(
        name: &quot;people&quot;,
        pattern: &quot;People/{ssn}&quot;,
        constraints: new { ssn = &quot;^\\\\d{3}-\\\\d{2}-\\\\d{4}$&quot;, },
        defaults: new { controller = &quot;People&quot;, action = &quot;List&quot;, });
}); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0D\u8981\u4E66\u5199\u8FC7\u4E8E\u590D\u6742\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5426\u5219\uFF0C\u76F8\u6BD4\u666E\u901A\u8DEF\u7531\u6A21\u677F\u6765\u8BF4\uFF0C\u4F1A\u9020\u6210\u66F4\u52A0\u6602\u8D35\u7684\u6027\u80FD\u5F71\u54CD</p></blockquote><h3 id="\u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F</h3><p>\u5148\u8BF4\u4E00\u53E5\uFF0C\u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F\u5F88\u5C11\u4F1A\u7528\u5230\uFF0C\u5728\u4F60\u51B3\u5B9A\u8981\u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F\u4E4B\u524D\uFF0C\u5148\u60F3\u60F3\u662F\u5426\u6709\u5176\u4ED6\u66F4\u597D\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u5982\u4F7F\u7528\u6A21\u578B\u7ED1\u5B9A\u3002</p><p>\u901A\u8FC7\u5B9E\u73B0<code>IRouteConstraint</code>\u63A5\u53E3\u6765\u521B\u5EFA\u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F\uFF0C\u8BE5\u63A5\u53E3\u4EC5\u6709\u4E00\u4E2A<code>Match</code>\u65B9\u6CD5\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u8DEF\u7531\u53C2\u6570\u662F\u5426\u6EE1\u8DB3\u7EA6\u675F\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u6EE1\u8DB3\u7EA6\u675F\uFF0C<code>false</code>\u5219\u8868\u793A\u4E0D\u6EE1\u8DB3\u7EA6\u675F\u3002</p><p>\u4EE5\u4E0B\u793A\u4F8B\u8981\u6C42\u8DEF\u7531\u53C2\u6570\u4E2D\u5FC5\u987B\u5305\u542B\u5B57\u7B26\u4E32\u201C1\u201D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class MyRouteConstraint : IRouteConstraint
{
    public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
    {
        if (values.TryGetValue(routeKey, out object value))
        {
            var valueStr = Convert.ToString(value, CultureInfo.InvariantCulture);

            return valueStr?.Contains(&quot;1&quot;) ?? false;
        }

        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8FDB\u884C\u8DEF\u7531\u7EA6\u675F\u6CE8\u518C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
    services.AddRouting(options =&gt;
    {
        // \u6DFB\u52A0\u81EA\u5B9A\u4E49\u8DEF\u7531\u7EA6\u675F\uFF0C\u7EA6\u675F Key \u4E3A my
        options.ConstraintMap[&quot;my&quot;] = typeof(MyRouteConstraint);
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u4F60\u5C31\u53EF\u4EE5\u7C7B\u4F3C\u5982\u4E0B\u8FDB\u884C\u4F7F\u7528\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[HttpGet(&quot;{id:my}&quot;)]
public string Get(string id)
{
    return id;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u6A21\u677F\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6A21\u677F\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u8DEF\u7531\u6A21\u677F\u4F18\u5148\u7EA7</h2><p>\u8003\u8651\u4E00\u4E0B\uFF0C\u6709\u4E24\u4E2A\u8DEF\u7531\u6A21\u677F\uFF1A<code>/Book/List</code>\u548C<code>/Book/{id}</code>\uFF0C\u5F53url\u4E3A<code>/Book/List</code>\u65F6\uFF0C\u4F1A\u9009\u62E9\u54EA\u4E2A\u5462\uFF1F\u4ECE\u7ED3\u679C\u6211\u4EEC\u53EF\u4EE5\u5F97\u77E5\uFF0C\u662F\u6A21\u677F<code>/Book/List</code>\u3002\u5B83\u662F\u6839\u636E\u4EE5\u4E0B\u89C4\u5219\u6765\u786E\u5B9A\u7684\uFF1A</p><ul><li>\u8D8A\u5177\u4F53\u7684\u6A21\u677F\u4F18\u5148\u7EA7\u8D8A\u9AD8</li><li>\u5305\u542B\u66F4\u591A\u5339\u914D\u6BB5\u7684\u6A21\u677F\u66F4\u5177\u4F53</li><li>\u542B\u6709\u6587\u672C\u7684\u6BB5\u6BD4\u53C2\u6570\u6BB5\u66F4\u5177\u4F53</li><li>\u5177\u6709\u7EA6\u675F\u7684\u53C2\u6570\u6BB5\u6BD4\u6CA1\u6709\u7EA6\u675F\u7684\u53C2\u6570\u6BB5\u66F4\u5177\u4F53</li><li>\u590D\u6742\u6BB5\u548C\u5177\u6709\u7EA6\u675F\u7684\u6BB5\u540C\u6837\u5177\u4F53</li><li><code>catch-all</code>\u53C2\u6570\u6BB5\u662F\u6700\u4E0D\u5177\u4F53\u7684</li></ul><h1 id="\u6838\u5FC3\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> \u6838\u5FC3\u6E90\u7801\u89E3\u6790</h1><h1 id="addrouting" tabindex="-1"><a class="header-anchor" href="#addrouting" aria-hidden="true">#</a> AddRouting</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static class RoutingServiceCollectionExtensions
{
    public static IServiceCollection AddRouting(this IServiceCollection services)
    {
        // \u5185\u8054\u7EA6\u675F\u89E3\u6790\u5668\uFF0C\u8D1F\u8D23\u521B\u5EFA IRouteConstraint \u5B9E\u4F8B
        services.TryAddTransient&lt;IInlineConstraintResolver, DefaultInlineConstraintResolver&gt;();
        // \u5BF9\u8C61\u6C60
        services.TryAddTransient&lt;ObjectPoolProvider, DefaultObjectPoolProvider&gt;();
        services.TryAddSingleton&lt;ObjectPool&lt;UriBuildingContext&gt;&gt;(s =&gt;
        {
            var provider = s.GetRequiredService&lt;ObjectPoolProvider&gt;();
            return provider.Create&lt;UriBuildingContext&gt;(new UriBuilderContextPooledObjectPolicy());
        });

        services.TryAdd(ServiceDescriptor.Transient&lt;TreeRouteBuilder&gt;(s =&gt;
        {
            var loggerFactory = s.GetRequiredService&lt;ILoggerFactory&gt;();
            var objectPool = s.GetRequiredService&lt;ObjectPool&lt;UriBuildingContext&gt;&gt;();
            var constraintResolver = s.GetRequiredService&lt;IInlineConstraintResolver&gt;();
            return new TreeRouteBuilder(loggerFactory, objectPool, constraintResolver);
        }));

        // \u6807\u8BB0\u5DF2\u5C06\u6240\u6709\u8DEF\u7531\u670D\u52A1\u6CE8\u518C\u5B8C\u6BD5
        services.TryAddSingleton(typeof(RoutingMarkerService));

        var dataSources = new ObservableCollection&lt;EndpointDataSource&gt;();
        services.TryAddEnumerable(ServiceDescriptor.Transient&lt;IConfigureOptions&lt;RouteOptions&gt;, ConfigureRouteOptions&gt;(
            serviceProvider =&gt; new ConfigureRouteOptions(dataSources)));

        // EndpointDataSource\uFF0C\u7528\u4E8E\u5168\u5C40\u8BBF\u95EE\u7EC8\u7ED3\u70B9\u5217\u8868
        services.TryAddSingleton&lt;EndpointDataSource&gt;(s =&gt;
        {
            return new CompositeEndpointDataSource(dataSources);
        });

        services.TryAddSingleton&lt;ParameterPolicyFactory, DefaultParameterPolicyFactory&gt;();
        // MatcherFactory\uFF0C\u7528\u4E8E\u6839\u636E EndpointDataSource \u521B\u5EFA Matcher
        services.TryAddSingleton&lt;MatcherFactory, DfaMatcherFactory&gt;();
        // DfaMatcherBuilder\uFF0C\u7528\u4E8E\u521B\u5EFA DfaMatcher \u5B9E\u4F8B
        services.TryAddTransient&lt;DfaMatcherBuilder&gt;();
        services.TryAddSingleton&lt;DfaGraphWriter&gt;();
        services.TryAddTransient&lt;DataSourceDependentMatcher.Lifetime&gt;();
        services.TryAddSingleton&lt;EndpointMetadataComparer&gt;(services =&gt;
        {
            return new EndpointMetadataComparer(services);
        });

        // LinkGenerator\u76F8\u5173\u670D\u52A1
        services.TryAddSingleton&lt;LinkGenerator, DefaultLinkGenerator&gt;();
        services.TryAddSingleton&lt;IEndpointAddressScheme&lt;string&gt;, EndpointNameAddressScheme&gt;();
        services.TryAddSingleton&lt;IEndpointAddressScheme&lt;RouteValuesAddress&gt;, RouteValuesAddressScheme&gt;();
        services.TryAddSingleton&lt;LinkParser, DefaultLinkParser&gt;();

        // \u7EC8\u7ED3\u70B9\u9009\u62E9\u3001\u5339\u914D\u7B56\u7565\u76F8\u5173\u670D\u52A1
        services.TryAddSingleton&lt;EndpointSelector, DefaultEndpointSelector&gt;();
        services.TryAddEnumerable(ServiceDescriptor.Singleton&lt;MatcherPolicy, HttpMethodMatcherPolicy&gt;());
        services.TryAddEnumerable(ServiceDescriptor.Singleton&lt;MatcherPolicy, HostMatcherPolicy&gt;());

        services.TryAddSingleton&lt;TemplateBinderFactory, DefaultTemplateBinderFactory&gt;();
        services.TryAddSingleton&lt;RoutePatternTransformer, DefaultRoutePatternTransformer&gt;();
        return services;
    }

    public static IServiceCollection AddRouting(
        this IServiceCollection services,
        Action&lt;RouteOptions&gt; configureOptions)
    {
        services.Configure(configureOptions);
        services.AddRouting();

        return services;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userouting" tabindex="-1"><a class="header-anchor" href="#userouting" aria-hidden="true">#</a> UseRouting</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static class EndpointRoutingApplicationBuilderExtensions
{
    private const string EndpointRouteBuilder = &quot;__EndpointRouteBuilder&quot;;
    
    public static IApplicationBuilder UseRouting(this IApplicationBuilder builder)
    {
        VerifyRoutingServicesAreRegistered(builder);
    
        var endpointRouteBuilder = new DefaultEndpointRouteBuilder(builder);
        // \u5C06 endpointRouteBuilder \u653E\u5165\u5171\u4EAB\u5B57\u5178\u4E2D
        builder.Properties[EndpointRouteBuilder] = endpointRouteBuilder;
    
        // \u5C06 endpointRouteBuilder \u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u53C2\u6570\u4F20\u5165 EndpointRoutingMiddleware
        return builder.UseMiddleware&lt;EndpointRoutingMiddleware&gt;(endpointRouteBuilder);
    }
    
    private static void VerifyRoutingServicesAreRegistered(IApplicationBuilder app)
    {
        // \u5FC5\u987B\u5148\u6267\u884C\u4E86 AddRouting
        if (app.ApplicationServices.GetService(typeof(RoutingMarkerService)) == null)
        {
            throw new InvalidOperationException(Resources.FormatUnableToFindServices(
                nameof(IServiceCollection),
                nameof(RoutingServiceCollectionExtensions.AddRouting),
                &quot;ConfigureServices(...)&quot;));
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="endpointroutingmiddleware" tabindex="-1"><a class="header-anchor" href="#endpointroutingmiddleware" aria-hidden="true">#</a> EndpointRoutingMiddleware</h3><p>\u7EC8\u4E8E\u5230\u4E86\u8DEF\u7531\u5339\u914D\u7684\u903B\u8F91\u4E86\uFF0C\u624D\u662F\u6211\u4EEC\u5E94\u8BE5\u5173\u6CE8\u7684\uFF0C\u91CD\u70B9\u67E5\u770B<code>Invoke</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>internal sealed class EndpointRoutingMiddleware
{
    private const string DiagnosticsEndpointMatchedKey = &quot;Microsoft.AspNetCore.Routing.EndpointMatched&quot;;

    private readonly MatcherFactory _matcherFactory;
    private readonly ILogger _logger;
    private readonly EndpointDataSource _endpointDataSource;
    private readonly DiagnosticListener _diagnosticListener;
    private readonly RequestDelegate _next;

    private Task&lt;Matcher&gt;? _initializationTask;

    public EndpointRoutingMiddleware(
        MatcherFactory matcherFactory,
        ILogger&lt;EndpointRoutingMiddleware&gt; logger,
        IEndpointRouteBuilder endpointRouteBuilder,
        DiagnosticListener diagnosticListener,
        RequestDelegate next)
    {
        _matcherFactory = matcherFactory ?? throw new ArgumentNullException(nameof(matcherFactory));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _diagnosticListener = diagnosticListener ?? throw new ArgumentNullException(nameof(diagnosticListener));
        _next = next ?? throw new ArgumentNullException(nameof(next));

        _endpointDataSource = new CompositeEndpointDataSource(endpointRouteBuilder.DataSources);
    }

    public Task Invoke(HttpContext httpContext)
    {
        // \u5DF2\u7ECF\u9009\u62E9\u4E86\u7EC8\u7ED3\u70B9\uFF0C\u5219\u8DF3\u8FC7\u5339\u914D
        var endpoint = httpContext.GetEndpoint();
        if (endpoint != null)
        {
            Log.MatchSkipped(_logger, endpoint);
            return _next(httpContext);
        }

        // \u7B49\u5F85 _initializationTask \u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u8FDB\u884C\u5339\u914D\uFF0C\u5E76\u6D41\u8F6C\u5230\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
        var matcherTask = InitializeAsync();
        if (!matcherTask.IsCompletedSuccessfully)
        {
            return AwaitMatcher(this, httpContext, matcherTask);
        }
        
        // _initializationTask\u5728\u4E4B\u524D\u5C31\u5DF2\u7ECF\u521D\u59CB\u5316\u5B8C\u6210\u4E86\uFF0C\u76F4\u63A5\u8FDB\u884C\u5339\u914D\u4EFB\u52A1\uFF0C\u5E76\u6D41\u8F6C\u5230\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
        var matchTask = matcherTask.Result.MatchAsync(httpContext);
        if (!matchTask.IsCompletedSuccessfully)
        {
            return AwaitMatch(this, httpContext, matchTask);
        }

        // \u6D41\u8F6C\u5230\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
        return SetRoutingAndContinue(httpContext);

        static async Task AwaitMatcher(EndpointRoutingMiddleware middleware, HttpContext httpContext, Task&lt;Matcher&gt; matcherTask)
        {
            var matcher = await matcherTask;
            // \u8DEF\u7531\u5339\u914D\uFF0C\u9009\u62E9\u7EC8\u7ED3\u70B9
            await matcher.MatchAsync(httpContext);
            await middleware.SetRoutingAndContinue(httpContext);
        }

        static async Task AwaitMatch(EndpointRoutingMiddleware middleware, HttpContext httpContext, Task matchTask)
        {
            await matchTask;
            await middleware.SetRoutingAndContinue(httpContext);
        }
    }

    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    private Task SetRoutingAndContinue(HttpContext httpContext)
    {
        // \u7EC8\u7ED3\u70B9\u4ECD\u7136\u4E3A\u7A7A\uFF0C\u5219\u5339\u914D\u5931\u8D25
        var endpoint = httpContext.GetEndpoint();
        if (endpoint == null)
        {
            Log.MatchFailure(_logger);
        }
        else
        {
            // \u5339\u914D\u6210\u529F\u5219\u89E6\u53D1\u4E8B\u4EF6
            if (_diagnosticListener.IsEnabled() &amp;&amp; _diagnosticListener.IsEnabled(DiagnosticsEndpointMatchedKey))
            {
                // httpContext\u5BF9\u8C61\u5305\u542B\u4E86\u76F8\u5173\u4FE1\u606F
                _diagnosticListener.Write(DiagnosticsEndpointMatchedKey, httpContext);
            }

            Log.MatchSuccess(_logger, endpoint);
        }

        // \u6D41\u8F6C\u5230\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
        return _next(httpContext);
    }

    private Task&lt;Matcher&gt; InitializeAsync()
    {
        var initializationTask = _initializationTask;
        if (initializationTask != null)
        {
            return initializationTask;
        }

        // \u6B64\u5904\u6211\u5220\u51CF\u4E86\u90E8\u5206\u7EBF\u7A0B\u7ADE\u4E89\u4EE3\u7801\uFF0C\u56E0\u4E3A\u8FD9\u4E0D\u662F\u6211\u4EEC\u8BA8\u8BBA\u7684\u91CD\u70B9
        // \u6B64\u5904\u4E3B\u8981\u76EE\u7684\u662F\u5728\u8BE5Middleware\u4E2D\uFF0C\u786E\u4FDD\u53EA\u521D\u59CB\u5316_initializationTask\u4E00\u6B21

        var matcher = _matcherFactory.CreateMatcher(_endpointDataSource);

        using (ExecutionContext.SuppressFlow())
        {
            _initializationTask = Task.FromResult(matcher);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7684\u6838\u5FC3\u5C31\u662F\u5C06<code>_endpointDataSource</code>\u4F20\u9012\u7ED9<code>_matcherFactory</code>\uFF0C\u521B\u5EFA<code>matcher</code>\uFF0C\u7136\u540E\u8FDB\u884C\u5339\u914D<code>matcher.MatchAsync(httpContext)</code>\u3002ASP.NET Core\u9ED8\u8BA4\u4F7F\u7528\u7684 matcher \u7C7B\u578B\u662F<code>DfaMatcher</code>\uFF0CDFA\uFF08Deterministic Finite Automaton\uFF09\u662F\u4E00\u79CD\u88AB\u79F0\u4E3A\u201C\u786E\u5B9A\u6709\u9650\u72B6\u6001\u81EA\u52A8\u673A\u201D\u7684\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u4ECE\u5019\u9009\u7EC8\u7ED3\u70B9\u5217\u8868\u4E2D\u67E5\u627E\u5230\u5339\u914D\u5EA6\u6700\u9AD8\u7684\u90A3\u4E2A\u7EC8\u7ED3\u70B9\u3002</p><p><strong>UseEndpoints</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static class EndpointRoutingApplicationBuilderExtensions
{
    public static IApplicationBuilder UseEndpoints(this IApplicationBuilder builder, Action&lt;IEndpointRouteBuilder&gt; configure)
    {
        VerifyRoutingServicesAreRegistered(builder);

        VerifyEndpointRoutingMiddlewareIsRegistered(builder, out var endpointRouteBuilder);

        configure(endpointRouteBuilder);

        var routeOptions = builder.ApplicationServices.GetRequiredService&lt;IOptions&lt;RouteOptions&gt;&gt;();
        foreach (var dataSource in endpointRouteBuilder.DataSources)
        {
            routeOptions.Value.EndpointDataSources.Add(dataSource);
        }

        return builder.UseMiddleware&lt;EndpointMiddleware&gt;();
    }
    
    private static void VerifyEndpointRoutingMiddlewareIsRegistered(IApplicationBuilder app, out DefaultEndpointRouteBuilder endpointRouteBuilder)
    {
        // \u5C06 endpointRouteBuilder \u4ECE\u5171\u4EAB\u5B57\u5178\u4E2D\u53D6\u51FA\u6765\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u8BF4\u660E\u4E4B\u524D\u6CA1\u6709\u8C03\u7528 UseRouting
        if (!app.Properties.TryGetValue(EndpointRouteBuilder, out var obj))
        {
            var message =
                $&quot;{nameof(EndpointRoutingMiddleware)} matches endpoints setup by {nameof(EndpointMiddleware)} and so must be added to the request &quot; +
                $&quot;execution pipeline before {nameof(EndpointMiddleware)}. &quot; +
                $&quot;Please add {nameof(EndpointRoutingMiddleware)} by calling &#39;{nameof(IApplicationBuilder)}.{nameof(UseRouting)}&#39; inside the call &quot; +
                $&quot;to &#39;Configure(...)&#39; in the application startup code.&quot;;
            throw new InvalidOperationException(message);
        }

        endpointRouteBuilder = (DefaultEndpointRouteBuilder)obj!;

        // UseRouting \u548C UseEndpoints \u5FC5\u987B\u6DFB\u52A0\u5230\u540C\u4E00\u4E2A IApplicationBuilder \u5B9E\u4F8B\u4E0A
        if (!object.ReferenceEquals(app, endpointRouteBuilder.ApplicationBuilder))
        {
            var message =
                $&quot;The {nameof(EndpointRoutingMiddleware)} and {nameof(EndpointMiddleware)} must be added to the same {nameof(IApplicationBuilder)} instance. &quot; +
                $&quot;To use Endpoint Routing with &#39;Map(...)&#39;, make sure to call &#39;{nameof(IApplicationBuilder)}.{nameof(UseRouting)}&#39; before &quot; +
                $&quot;&#39;{nameof(IApplicationBuilder)}.{nameof(UseEndpoints)}&#39; for each branch of the middleware pipeline.&quot;;
            throw new InvalidOperationException(message);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="endpointmiddleware" tabindex="-1"><a class="header-anchor" href="#endpointmiddleware" aria-hidden="true">#</a> EndpointMiddleware</h3><p><code>EndpointMiddleware</code>\u4E2D\u95F4\u4EF6\u4E2D\u5305\u542B\u4E86\u5F88\u591A\u5F02\u5E38\u5904\u7406\u548C\u65E5\u5FD7\u8BB0\u5F55\u4EE3\u7801\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u67E5\u770B\u6838\u5FC3\u903B\u8F91\uFF0C\u6211\u90FD\u5220\u9664\u5E76\u8FDB\u884C\u4E86\u7B80\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>internal sealed class EndpointMiddleware
{
    internal const string AuthorizationMiddlewareInvokedKey = &quot;__AuthorizationMiddlewareWithEndpointInvoked&quot;;
    internal const string CorsMiddlewareInvokedKey = &quot;__CorsMiddlewareWithEndpointInvoked&quot;;

    private readonly ILogger _logger;
    private readonly RequestDelegate _next;
    private readonly RouteOptions _routeOptions;

    public EndpointMiddleware(
        ILogger&lt;EndpointMiddleware&gt; logger,
        RequestDelegate next,
        IOptions&lt;RouteOptions&gt; routeOptions)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _next = next ?? throw new ArgumentNullException(nameof(next));
        _routeOptions = routeOptions?.Value ?? throw new ArgumentNullException(nameof(routeOptions));
    }

    public Task Invoke(HttpContext httpContext)
    {
        var endpoint = httpContext.GetEndpoint();
        if (endpoint?.RequestDelegate != null)
        {
            // \u6267\u884C\u8BE5\u7EC8\u7ED3\u70B9\u7684\u59D4\u6258\uFF0C\u5E76\u4E14\u89C6\u8BE5\u4E2D\u95F4\u4EF6\u4E3A\u7EC8\u7AEF\u4E2D\u95F4\u4EF6
            var requestTask = endpoint.RequestDelegate(httpContext);
            if (!requestTask.IsCompletedSuccessfully)
            {
                return requestTask;
            }

            return Task.CompletedTask;
        }
        
        // \u82E5\u6CA1\u6709\u7EC8\u7ED3\u70B9\uFF0C\u5219\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6
        return _next(httpContext);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><p>\u8BF4\u4E86\u90A3\u4E48\u591A\uFF0C\u6700\u540E\u7ED9\u5927\u5BB6\u603B\u7ED3\u4E86\u4E09\u5F20UML\u7C7B\u56FE\uFF1A</p><p><strong>RoutePattern</strong><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIysibicSpQ5QARefCDzU4Vz9ibWbGKg75SSOIDq4eDmiahWrZklzWYZo30A/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><p><strong>EndPoint</strong><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIZMqZhtjt39Rw6bWYw0pfLg1nicyajia4EjO6uM2kjfpunT6hc0QkxICQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><p><strong>Matcher</strong><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIEcia3E91cxKqP45xJjibqlPJSX8eUQXTm6WmWMvQMz5eiaEcpZb9Qk47Q/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><p>\u53E6\u5916\uFF0C\u672C\u6587\u4EC5\u4EC5\u63D0\u5230\u4E86\u8DEF\u7531\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u5F0F\u548C\u539F\u7406\uFF0C\u5982\u679C\u4F60\u60F3\u8981\u8FDB\u884C\u66F4\u52A0\u6DF1\u5165\u900F\u5F7B\u7684\u4E86\u89E3\uFF0C\u63A8\u8350\u9605\u8BFB\u848B\u91D1\u6960\u8001\u5E08\u7684ASP.NET Core 3\u6846\u67B6\u63ED\u79D8\u7684\u8DEF\u7531\u90E8\u5206\u3002</p><h1 id="\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a> \u8D44\u6599</h1><p>\u8F6C\u81EA\uFF1Axiaoxiaotank \u94FE\u63A5\uFF1Acnblogs.com/xiaoxiaotank/p/15468491.html</p>`,99),t=[s];function a(r,o){return i(),n("div",null,t)}const v=e(l,[["render",a],["__file","routing.html.vue"]]);export{v as default};
