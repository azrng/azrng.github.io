import{_ as e,o as n,c as i,a as t}from"./app.565765f9.js";const l={},s=t(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>log4net\u662F.Net\u4E0B\u4E00\u4E2A\u975E\u5E38\u4F18\u79C0\u7684\u5F00\u6E90\u65E5\u5FD7\u8BB0\u5F55\u7EC4\u4EF6\u3002log4net\u8BB0\u5F55\u65E5\u5FD7\u7684\u529F\u80FD\u975E\u5E38\u5F3A\u5927\u3002\u5B83\u53EF\u4EE5\u5C06\u65E5\u5FD7\u5206\u4E0D\u540C\u7684\u7B49\u7EA7\uFF0C\u4EE5\u4E0D\u540C\u7684\u683C\u5F0F\uFF0C\u8F93\u51FA\u5230\u4E0D\u540C\u7684\u5A92\u4ECB\u3002\u5305\u62EC\u5230\u8FFD\u52A0\u6587\u672C\u6587\u4EF6\uFF0Csqlite\u6570\u636E\u5E93\uFF0Cmysql\u6570\u636E\u5E93\u548Cwindows\u65E5\u5FD7\u4E2D\u3002</p><h1 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h1><p>\u5F15\u7528\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;PackageReference Include=&quot;log4net&quot; Version=&quot;2.0.12&quot; /&gt;
 &lt;PackageReference Include=&quot;Microsoft.Extensions.Logging.Log4Net.AspNetCore&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F15\u5165log4net\u4E2D\u95F4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .ConfigureLogging(logging =&gt;
            {
                logging.AddFilter(&quot;System&quot;, LogLevel.Warning);//\u5FFD\u7565\u6389System\u5F00\u5934\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u7EC4\u4EF6\u4EA7\u751F\u7684warn\u7EA7\u522B\u7684\u65E5\u5FD7
                logging.AddFilter(&quot;Microsoft&quot;, LogLevel.Warning);//\u5FFD\u7565\u6389Microsoft\u5F00\u5934\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u7EC4\u4EF6\u4EA7\u751F\u7684warn\u7EA7\u522B\u7684\u65E5\u5FD7
                logging.AddLog4Net();//\u5F15\u7528\u7EC4\u4EF6
            })
            .ConfigureWebHostDefaults(webBuilder =&gt;
            {
                webBuilder.UseStartup&lt;Startup&gt;();
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65E5\u5FD7\u7EA7\u522B\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Debug&quot;,//\u65E5\u5FD7\u7EA7\u522B\u914D\u7F6E
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly ILogger&lt;WeatherForecastController&gt; _logger;

public WeatherForecastController(ILogger&lt;WeatherForecastController&gt; logger)
{
    _logger = logger;
}

[HttpGet]
public string Get()
{
    //\u9ED8\u8BA4\u662F\u8F93\u51FA\u5728\u63A7\u5236\u53F0\u4E0A
    _logger.LogTrace(&quot;trace&quot;);
    _logger.LogDebug(&quot;debug&quot;);
    _logger.LogInformation(&quot;info&quot;);
    _logger.LogWarning(&quot;warn&quot;);
    _logger.LogError(&quot;error&quot;);
    _logger.LogCritical(&quot;critical&quot;);
    return &quot;\u6210\u529F&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619104196683-462ed3cf-6d3f-4446-9ae5-501f06a5c5a1.png" alt="img"></p><h1 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h1><p>log4net.Config\u6587\u4EF6</p><div class="language-s ext-s line-numbers-mode"><pre class="language-s"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;log4net&gt;
  &lt;!-- \u9519\u8BEF Error.log--&gt;
  &lt;appender name=&quot;MYLOG&quot; type=&quot;log4net.Appender.RollingFileAppender&quot;&gt;
    &lt;!--\u76EE\u5F55\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84--&gt;
    &lt;param name=&quot;File&quot; value=&quot;SysLog\\\\&quot;/&gt;
    &lt;!--\u6587\u4EF6\u540D\uFF0C\u6309\u65E5\u671F\u751F\u6210\u6587\u4EF6\u5939--&gt;
    &lt;param name=&quot;DatePattern&quot; value=&quot;/yyyy-MM-dd/&amp;quot;Error.log&amp;quot;&quot;/&gt;
    &lt;!--\u8FFD\u52A0\u5230\u6587\u4EF6--&gt;
    &lt;appendToFile value=&quot;true&quot;/&gt;
    &lt;!--\u521B\u5EFA\u65E5\u5FD7\u6587\u4EF6\u7684\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\uFF1ADate[\u65E5\u671F],\u6587\u4EF6\u5927\u5C0F[Size],\u6DF7\u5408[Composite]--&gt;
    &lt;rollingStyle value=&quot;Composite&quot;/&gt;
    &lt;!--\u5199\u5230\u4E00\u4E2A\u6587\u4EF6--&gt;
    &lt;staticLogFileName value=&quot;false&quot;/&gt;
    &lt;!--\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u3002\u5355\u4F4D:KB|MB|GB--&gt;
    &lt;maximumFileSize value=&quot;200MB&quot;/&gt;
    &lt;!--\u6700\u591A\u4FDD\u7559\u7684\u6587\u4EF6\u6570\uFF0C\u8BBE\u4E3A&quot;-1&quot;\u5219\u4E0D\u9650--&gt;
    &lt;maxSizeRollBackups value=&quot;-1&quot;/&gt;
    &lt;!--\u65E5\u5FD7\u683C\u5F0F--&gt;
    &lt;layout type=&quot;log4net.Layout.PatternLayout&quot;&gt;
      &lt;!--&lt;conversionPattern value=&quot;%message&quot;/&gt;--&gt;
      &lt;param name=&quot;ConversionPattern&quot; value=&quot;----------------%n%d [%t] %-5p %c [%x] %L %nMSG:%m%n&quot; /&gt;
    &lt;/layout&gt;
    &lt;!--\u8BE5\u914D\u7F6E\u8981\u8F93\u51FA\u7684\u65E5\u5FD7\u6700\u4F4E\u7EA7\u522B\u548C\u6700\u9AD8\u7EA7\u522B--&gt;
    &lt;!--&lt;filter type=&quot;log4net.Filter.LevelRangeFilter&quot;&gt;
      &lt;param name=&quot;LevelMin&quot; value=&quot;INFO&quot; /&gt;
      &lt;param name=&quot;LevelMax&quot; value=&quot;ERROR&quot; /&gt;
    &lt;/filter&gt;--&gt;
  &lt;/appender&gt;

  &lt;!-- levels: OFF &gt; FATAL &gt; ERROR &gt; WARN &gt; INFO &gt; DEBUG  &gt; ALL --&gt;
  &lt;root&gt;
    &lt;priority value=&quot;ALL&quot;/&gt;
    &lt;level value=&quot;ALL&quot;/&gt;
    &lt;appender-ref ref=&quot;MYLOG&quot; /&gt;
  &lt;/root&gt;
&lt;/log4net&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),a=[s];function d(u,r){return n(),i("div",null,a)}const v=e(l,[["render",d],["__file","log4net.html.vue"]]);export{v as default};
