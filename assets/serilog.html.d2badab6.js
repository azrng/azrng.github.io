import{_ as l,o as s,c as r,a as e,b as a,e as i,d,r as t}from"./app.f6b99883.js";const o={},u=e("h1",{id:"_1-\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u4ECB\u7ECD","aria-hidden":"true"},"#"),i(" 1. \u4ECB\u7ECD")],-1),v=i("\u4E0E.NET\u7684\u8BB8\u591A\u5176\u4ED6\u5E93\u4E00\u6837\uFF0CSerilog\u4E5F\u63D0\u4F9B\u5BF9\u6587\u4EF6\uFF0C\u63A7\u5236\u53F0\u548C"),c={href:"https://github.com/serilog/serilog/wiki/Provided-Sinks",target:"_blank",rel:"noopener noreferrer"},g=i(" \u5176\u4ED6\u5730\u65B9\u7684"),m=i("\u8BCA\u65AD\u65E5\u5FD7\u8BB0\u5F55 \u3002\u5B83\u6613\u4E8E\u8BBE\u7F6E\uFF0C\u5177\u6709\u7B80\u6D01\u7684API\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u6700\u65B0\u7684.NET\u5E73\u53F0\u4E4B\u95F4\u79FB\u690D\u3002\u8FD8\u5728\u6784\u5EFA\u65F6\u8003\u8651\u4E86\u5F3A\u5927\u7684"),b=e("em",null,"\u7ED3\u6784\u5316\u4E8B\u4EF6\u6570\u636E",-1),h=i("\u3002"),p=d(`<p>\u5B98\u7F51\uFF1Ahttps://serilog.net/</p><p>GitHub\uFF1Ahttps://github.com/serilog/serilog</p><h1 id="_2-nuget" tabindex="-1"><a class="header-anchor" href="#_2-nuget" aria-hidden="true">#</a> 2. NuGet</h1><ul><li>Serilog \u63D0\u4F9B\u4E86\u5BF9\u57FA\u672C\u7684\u7ED3\u6784\u5316\u65E5\u5FD7\u7684\u529F\u80FD\u652F\u6301</li><li>Serilog.AspNetCore</li></ul><p>\u57FA\u4E8EAspNetCore\u6846\u67B6\u6574\u5408\u7684Serilog\u65E5\u5FD7\u8BB0\u5F55\u7A0B\u5E8F\u5305\uFF0C\u5305\u542B\u4E86Serilog\u57FA\u672C\u5E93\u548C\u63A7\u5236\u53F0\u65E5\u5FD7\u7684\u5B9E\u73B0\u3002</p><ul><li><p>Serilog.Extensions.Logging \u5305\u542B\u4E86\u6CE8\u5165\u4E86Serilog\u7684\u62D3\u5C55\u65B9\u6CD5\u3002</p></li><li><p>Serilog.Sinks.Async \u5B9E\u73B0\u4E86\u65E5\u5FD7\u5F02\u6B65\u6536\u96C6\u3002</p></li><li><p>Serilog.Sinks.Console \u5B9E\u73B0\u4E86\u63A7\u5236\u53F0\u8F93\u51FA\u65E5\u5FD7\u3002</p></li><li><p>Serilog.Sinks.Debug \u5B9E\u73B0\u4E86\u8C03\u8BD5\u53F0\u8F93\u51FA\u65E5\u5FD7\u3002</p></li><li><p>Serilog.Sinks.File \u5B9E\u73B0\u4E86\u6587\u4EF6\u8F93\u51FA\u65E5\u5FD7\u3002</p></li><li><p>Serilog.Settings.Configuration \u6253\u901A\u4E86serilog\u548CConfiguration\uFF0C\u8FD9\u6837\u5B50\u5C31\u53EF\u4EE5\u76F4\u63A5\u4ECEappsettings.json\u4E2D\u8BFB\u53D6\u914D\u7F6E</p></li><li><p>Serilog.Sinks.RollingFile \u5B9E\u73B0\u4E86\u5BF9\u6EDA\u52A8\u6587\u4EF6\u7684\u652F\u6301</p></li></ul><p>\u6839\u636E\u60C5\u51B5\u9009\u62E9\u4E0D\u540C\u7684\u7EC4\u4EF6</p><h1 id="_3-\u7B80\u5355\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u7B80\u5355\u7528\u6CD5" aria-hidden="true">#</a> 3. \u7B80\u5355\u7528\u6CD5</h1><h2 id="_3-1-\u63A7\u5236\u53F0\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-1-\u63A7\u5236\u53F0\u8F93\u51FA" aria-hidden="true">#</a> 3.1 \u63A7\u5236\u53F0\u8F93\u51FA</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public HomeController(ILogger&lt;HomeController&gt; logger)
{
    using (var logConfig = new LoggerConfiguration().WriteTo.Console().CreateLogger())
    {
        logConfig.Information(&quot;This is a test data.&quot;);
    };

    _logger = logger;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-\u6587\u4EF6\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6587\u4EF6\u8F93\u51FA" aria-hidden="true">#</a> 3.2 \u6587\u4EF6\u8F93\u51FA</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public HomeController()
{
    var logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo
        .RollingFile(@&quot;e:\\log.txt&quot;, retainedFileCountLimit: 7)
        .CreateLogger();

    for (int i = 0; i &lt; byte.MaxValue; i++)
    {
        logger.Information($&quot;log {i}&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-\u63A7\u5236\u53F0\u8F93\u51FA\u5E76\u4E14\u8F93\u51FA\u5230\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u63A7\u5236\u53F0\u8F93\u51FA\u5E76\u4E14\u8F93\u51FA\u5230\u6587\u4EF6" aria-hidden="true">#</a> 3.3 \u63A7\u5236\u53F0\u8F93\u51FA\u5E76\u4E14\u8F93\u51FA\u5230\u6587\u4EF6</h2><h3 id="_3-3-1-\u5B89\u88C5nuget\u5305" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u5B89\u88C5nuget\u5305" aria-hidden="true">#</a> 3.3.1 \u5B89\u88C5Nuget\u5305</h3><p>Serilog.AspNetCore</p><p>Serilog.Extensions.Logging.File</p><h3 id="_3-3-2-\u65B9\u6848\u4E00" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u65B9\u6848\u4E00" aria-hidden="true">#</a> 3.3.2 \u65B9\u6848\u4E00</h3><p>\u4FEE\u6539appsettings\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;Serilog&quot;: {
        &quot;WriteTo&quot;: [
            {
                &quot;Name&quot;: &quot;RollingFile&quot;,
                &quot;Args&quot;: {
                    &quot;pathFormat&quot;: &quot;Serilogs\\\\{Date}.txt&quot;,
                    &quot;RestrictedToMinimumLevel&quot;: &quot;Warning&quot;,
                    &quot;rollingInterval&quot;: &quot;Day&quot;,
                    &quot;outputTemplate&quot;: &quot;{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}&quot;
                }
            },
            {
                &quot;Name&quot;: &quot;Console&quot;,
                &quot;Args&quot;: {}
            }
        ],
        &quot;MinimumLevel&quot;: {
            &quot;Default&quot;: &quot;Debug&quot;,
            &quot;Override&quot;: {
                &quot;Microsoft&quot;: &quot;Information&quot;,
                &quot;System&quot;: &quot;Information&quot;
            }
        }
    },
    &quot;AllowedHosts&quot;: &quot;*&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539Program\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                }).UseSerilog((hostingContext, loggerConfiguration) =&gt;
                {
                    loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration)
                    .Enrich.FromLogContext();
                });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-\u65B9\u6848\u4E8C" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u65B9\u6848\u4E8C" aria-hidden="true">#</a> 3.3.2 \u65B9\u6848\u4E8C</h3><p>\u4FEE\u6539Program\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public static class Program
    {
        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
             .MinimumLevel.Information()//\u914D\u7F6E\u65E5\u5FD7\u7EA7\u522B
             .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
             .WriteTo.File(&quot;log.txt&quot;, rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true)
             .Enrich.FromLogContext()
             .WriteTo.Console()
             .CreateLogger();

            try
            {
                Log.Information(&quot;Starting web host&quot;);
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, &quot;Host terminated unexpectedly&quot;);
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
              .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u7528\u4FEE\u6539appsettings.json</p><h3 id="_3-3-3-\u63A7\u5236\u5668\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-3-3-\u63A7\u5236\u5668\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> 3.3.3 \u63A7\u5236\u5668\u4E2D\u4F7F\u7528</h3><h4 id="_3-3-3-1-\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_3-3-3-1-\u6CE8\u5165" aria-hidden="true">#</a> 3.3.3.1 \u6CE8\u5165</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly ILogger&lt;WeatherForecastController&gt; _logger;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-3-2-\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-3-3-2-\u8F93\u51FA" aria-hidden="true">#</a> 3.3.3.2 \u8F93\u51FA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>_logger.LogTrace(&quot;0 Trace\u65E5\u5FD7&quot;);
_logger.LogDebug(&quot;1 \u6211\u662F\u4E00\u4E2A\u8C03\u8BD5\u65E5\u5FD7&quot;);
_logger.LogInformation(&quot;2  \u6211\u662F\u4E00\u4E2Ainfo\u65E5\u5FD7&quot;);
_logger.LogWarning(&quot;3  \u6211\u662F\u4E00\u4E2A\u8B66\u544A\u65E5\u5FD7&quot;);
_logger.LogError(&quot;4   \u6211\u662F\u4E00\u4E2A\u9519\u8BEF\u65E5\u5FD7&quot;);
_logger.LogCritical(&quot;5   LogCritical \u7ACB\u523B\u4FEE\u590D&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> 4. \u53C2\u8003\u6587\u6863</h1><p>https://github.com.cnpmjs.org/serilog/serilog/wiki</p>`,32);function q(_,x){const n=t("ExternalLinkIcon");return s(),r("div",null,[u,e("p",null,[v,e("a",c,[g,a(n)]),m,b,h]),p])}const C=l(o,[["render",q],["__file","serilog.html.vue"]]);export{C as default};
