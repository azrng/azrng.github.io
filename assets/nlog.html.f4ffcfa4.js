import{_ as e,o as i,c as n,d as t}from"./app.f6b99883.js";const l={},s=t(`<h1 id="_1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4ECB\u7ECD</h1><p>NLog\u662F\u9002\u7528\u4E8E\u5404\u79CD.NET\u5E73\u53F0\uFF08\u5305\u62EC.NET\u6807\u51C6\uFF09\u7684\u7075\u6D3B\uFF0C\u514D\u8D39\u7684\u65E5\u5FD7\u8BB0\u5F55\u5E73\u53F0\uFF0C\u652F\u6301\u6570\u636E\u5E93\u3001\u6587\u4EF6\u3001\u63A7\u5236\u53F0\u3002</p><h1 id="_2-\u8F93\u5165\u5230\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u8F93\u5165\u5230\u6587\u4EF6" aria-hidden="true">#</a> 2. \u8F93\u5165\u5230\u6587\u4EF6</h1><h2 id="_2-1-\u5F15\u7528nuget\u5305" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5F15\u7528nuget\u5305" aria-hidden="true">#</a> 2.1 \u5F15\u7528nuget\u5305</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;NLog&quot; Version=&quot;4.7.6&quot; /&gt;
    &lt;PackageReference Include=&quot;NLog.Web.AspNetCore&quot; Version=&quot;4.9.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-\u521B\u5EFAnlog\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u521B\u5EFAnlog\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2.2 \u521B\u5EFANLog\u914D\u7F6E\u6587\u4EF6</h2><p>\u5728\u9879\u76EE\u76EE\u5F55\u4E2D\u65B0\u5EFA\u4E00\u4E2Axml\u6587\u4EF6\u7684nlog.config</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;
&lt;nlog xmlns=&quot;http://www.nlog-project.org/schemas/NLog.xsd&quot;
      xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;
  &lt;targets async=&quot;true&quot;&gt;
    &lt;target name=&quot;file&quot; xsi:type=&quot;File&quot;
           layout=&quot;\${longdate} \${logger} \${message}\${exception:format=ToString}&quot;
           fileName=&quot;\${basedir}/logs/\${date:format=yyyy-MM-dd}.txt&quot;
           keepFileOpen=&quot;true&quot;
           encoding=&quot;utf-8&quot; /&gt;
    &lt;target name=&quot;console&quot; xsi:type=&quot;Console&quot;&gt;
      &lt;attribute name=&quot;time&quot; layout=&quot;\${date:format=yyyy-MM-dd HH\\:mm\\:ss.fff zzz}&quot; /&gt;
      &lt;attribute name=&quot;category&quot; layout=&quot;\${logger}&quot; /&gt;
      &lt;attribute name=&quot;log_level&quot; layout=&quot;\${level:lowerCase=true}&quot; /&gt;
      &lt;attribute name=&quot;message&quot; layout=&quot;\${message}&quot; /&gt;
      &lt;attribute name=&quot;trace_id&quot; layout=&quot;\${aspnet-TraceIdentifier:ignoreActivityId=true}&quot; /&gt;
      &lt;attribute name=&quot;user_id&quot; layout=&quot;\${aspnet-user-identity}&quot; /&gt;
      &lt;!--\u53D6\u5F97\u8BE5\u6761\u65E5\u5FD7\u751F\u4EA7\u8005\u540D\u5B57--&gt;
      &lt;attribute name=&quot;exception&quot; layout=&quot;\${exception:format=tostring}&quot; /&gt;
    &lt;/target&gt;
  &lt;/targets&gt;

  &lt;rules&gt;
    &lt;logger name=&quot;*&quot; minlevel=&quot;Info&quot; writeTo=&quot;console&quot;   ruleName=&quot;console&quot; /&gt;

    &lt;logger name=&quot;*&quot; minlevel=&quot;Debug&quot; writeTo=&quot;file&quot; /&gt;
  &lt;/rules&gt;
&lt;/nlog&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-program\u4E2D\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_2-3-program\u4E2D\u4FEE\u6539" aria-hidden="true">#</a> 2.3 Program\u4E2D\u4FEE\u6539</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NLog.Web;
using System;

namespace NlogDemo
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            var logger = NLogBuilder.ConfigureNLog(&quot;nlog.config&quot;).GetCurrentClassLogger();
            try
            {
                logger.Debug(&quot;init main&quot;);
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                //NLog: catch setup errors
                logger.Error(ex, &quot;Stopped program because of exception&quot;);
                throw;
            }
            finally
            {
                NLog.LogManager.Shutdown();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
             .ConfigureWebHostDefaults(webBuilder =&gt;
             {
                 webBuilder.UseStartup&lt;Startup&gt;();
             })
                .ConfigureLogging((_, loggerBuilder) =&gt;
                {
                    loggerBuilder.ClearProviders();
                    loggerBuilder.SetMinimumLevel(LogLevel.Information);
                })
            .UseNLog();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-\u914D\u7F6E\u65E5\u5FD7\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u914D\u7F6E\u65E5\u5FD7\u7EA7\u522B" aria-hidden="true">#</a> 2.4 \u914D\u7F6E\u65E5\u5FD7\u7EA7\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-\u63A7\u5236\u5668\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-5-\u63A7\u5236\u5668\u4F7F\u7528" aria-hidden="true">#</a> 2.5 \u63A7\u5236\u5668\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private readonly ILogger&lt;HomeController&gt; _logger;

        public HomeController(ILogger&lt;HomeController&gt; logger)
        {
            _logger = logger;
            _logger.LogDebug(1, &quot;NLog injected into HomeController&quot;);
        }

        [HttpGet]
        public string Get()
        {
            _logger.LogTrace(&quot;Trace&quot;);
            _logger.LogDebug(&quot;debug&quot;);
            _logger.LogInformation(&quot;info&quot;);
            _logger.LogWarning(&quot;warn&quot;);
            _logger.LogError(&quot;error&quot;);
            _logger.LogCritical(&quot;Critical&quot;);

            return default;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619886030977-ef9d2c9c-fb94-41d7-a707-33eee277bbd9.png" alt="img"></p><h1 id="_3-\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_3-\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> 3. \u53C2\u8003\u6587\u6863</h1><p>https://github.com/NLog/NLog/wiki/Getting-started-with-ASP.NET-Core-5</p>`,18),r=[s];function d(a,u){return i(),n("div",null,r)}const v=e(l,[["render",d],["__file","nlog.html.vue"]]);export{v as default};
