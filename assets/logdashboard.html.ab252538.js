import{_ as a,o as r,c as s,e as i,a as n,r as t}from"./app.565765f9.js";const d={},l=n('<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p><code>LogDashboard</code>\u662F\u5728github\u4E0A\u5F00\u6E90\u7684aspnetcore\u9879\u76EE, \u5B83\u65E8\u5728\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u6392\u67E5\u9879\u76EE\u8FD0\u884C\u4E2D\u51FA\u73B0\u9519\u8BEF\u65F6\u5FEB\u901F\u67E5\u770B\u65E5\u5FD7\u6392\u67E5\u95EE\u9898\u3002</p><p>\u5B98\u7F51\u5730\u5740\uFF1Ahttps://doc.logdashboard.net/</p><p>GitHub\uFF1Ahttps://github.com/realLiangshiwei/LogDashboard</p><p>\u652F\u6301\u7684\u65E5\u5FD7\u7EC4\u4EF6\uFF1Anlog\u3001log4net\u3001serilog</p><p>\u652F\u6301\u7684\u6570\u636E\u6E90\uFF1Atxt\u3001\u6570\u636E\u5E93</p><h1 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h1><p>\u8FD9\u91CC\u4F7F\u7528serilog\u505A\u65E5\u5FD7\u7EC4\u4EF6\uFF0C\u6570\u636E\u6E90\u4F7F\u7528txt\uFF0C\u8BA4\u8BC1\u8BBF\u95EE\u4F7F\u7528\u7B80\u5355\u7684\u56FA\u5B9A\u8D26\u53F7\u5BC6\u7801</p><h2 id="\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F" aria-hidden="true">#</a> \u7A0B\u5E8F</h2><p>\u672C\u6B21\u4E8B\u4F8B\u4F7F\u7528\u7684\u662FASP.NET Core Web API\u7A0B\u5E8F\u6846\u67B6\uFF0C\u7248\u672C\u662F.net5</p><h2 id="\u5B89\u88C5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7EC4\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u7EC4\u4EF6</h2>',11),o=n(`<h2 id="\u914D\u7F6E\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65E5\u5FD7" aria-hidden="true">#</a> \u914D\u7F6E\u65E5\u5FD7</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public static class Program
    {
        public static void Main(string[] args)
        {
            string logOutputTemplate = &quot;{Timestamp:HH:mm:ss.fff zzz} || {Level} || {SourceContext:l} || {Message} || {Exception} ||end {NewLine}&quot;;
            Log.Logger = new LoggerConfiguration()
              .MinimumLevel.Debug()
              .MinimumLevel.Override(&quot;Default&quot;, LogEventLevel.Information)
              .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Error)
              .MinimumLevel.Override(&quot;Microsoft.Hosting.Lifetime&quot;, LogEventLevel.Information)
              .Enrich.FromLogContext()
              .WriteTo.Console(theme: Serilog.Sinks.SystemConsole.Themes.AnsiConsoleTheme.Code)
              .WriteTo.File($&quot;{AppContext.BaseDirectory}Logs/netcore.log&quot;, rollingInterval: RollingInterval.Day, outputTemplate: logOutputTemplate)
              .CreateLogger();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8F93\u51FA\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u65E5\u5FD7" aria-hidden="true">#</a> \u8F93\u51FA\u65E5\u5FD7</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            Log.Information(&quot;ConfigureServices&quot;);
            Log.Error(&quot;\u6D4B\u8BD5Serilog\u6DFB\u52A0\u5F02\u5E38\u65E5\u5FD7&quot;);
            Log.Fatal(&quot;\u6D4B\u8BD5Serilog\u6DFB\u52A0\u4E25\u91CD\u65E5\u5FD7&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u754C\u9762" aria-hidden="true">#</a> \u914D\u7F6E\u754C\u9762</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //\u5728\u6D4F\u89C8\u5668\u4E2D\u5BFC\u822A\u5230 /logdashboard
            services.AddLogDashboard(opt =&gt;
            {
                opt.AddAuthorizationFilter(new LogDashboardBasicAuthFilter(&quot;admin&quot;, &quot;123456&quot;));//\u914D\u7F6E\u9ED8\u8BA4\u7684
            });


            app.UseLogDashboard();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6388\u6743\u8BBF\u95EE\u652F\u6301\uFF1A\u89D2\u8272\u8FC7\u6EE4\u5668\u3001WWW-authenticate\u8FC7\u6EE4\u5668\u3001\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668</p><h2 id="\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE" aria-hidden="true">#</a> \u8BBF\u95EE</h2><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1618728496588-3edb734c-2f97-4b1a-a862-debdf836f1b8.png" alt="img"></p><p>\u8F93\u5165\u521A\u521A\u914D\u7F6E\u597D\u7684\u8D26\u53F7\u5BC6\u7801</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1618728549145-37e03444-0103-4f04-917a-3d153ae07731.png" alt="img"></p><p>\u8FD9\u91CC\u5C31\u662F\u6211\u4EEC\u7684\u53EF\u89C6\u5316\u754C\u9762</p>`,12);function u(c,v){const e=t("PackageReference");return r(),s("div",null,[l,i(e,{Include:"LogDashboard",Version:"1.4.6"}),i(e,{Include:"Serilog.AspNetCore",Version:"4.1.0"}),o])}const g=a(d,[["render",u],["__file","logdashboard.html.vue"]]);export{g as default};
