import{_ as n,o as e,c as t,d as i}from"./app.f6b99883.js";const o={},r=i(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u8FD9\u662Fasp.net core\u4E2D\u5185\u7F6E\u7684\u4E00\u4E2A\u901A\u7528\u65E5\u5FD7\u63A5\u53E3\u7EC4\u4EF6\u3002</p><h1 id="\u65E5\u5FD7\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u7EA7\u522B" aria-hidden="true">#</a> \u65E5\u5FD7\u7EA7\u522B</h1><p><strong>\u65E5\u5FD7\u7EA7\u522B\u8BF4\u660E</strong>\uFF1A\u6BCF\u4E00\u4E2A\u65E5\u5FD7\u90FD\u6709\u6307\u5B9A\u7684\u65E5\u5FD7\u7EA7\u522B\u503C\uFF0C\u65E5\u5FD7\u7EA7\u522B\u5224\u65AD\u6307\u793A\u4E25\u91CD\u6027\u6216\u91CD\u8981\u6027\u3002\u4F7F\u7528\u65E5\u5FD7\u7B49\u7EA7\u53EF\u4EE5\u5F88\u597D\u7684\u8FC7\u6EE4\u60F3\u8981\u7684\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u65E5\u5FD7\u8BB0\u5F55\u95EE\u9898\u7684\u540C\u65F6\uFF0C\u751A\u81F3\u4E3A\u6211\u4EEC\u63D0\u4F9B\u975E\u5E38\u8BE6\u7EC6\u7684\u65E5\u5FD7\u4FE1\u606F\u3002</p><p><strong>LogLevel \u4E25\u91CD\u6027\uFF1ATrace &lt; Debug &lt; Information &lt; Warning &lt; Error &lt; Critical &lt; None\u3002</strong></p><table><thead><tr><th><strong>\u65E5\u5FD7\u7EA7\u522B</strong></th><th><strong>\u5E38\u7528\u573A\u666F</strong></th></tr></thead><tbody><tr><td><strong>Trace = 0</strong></td><td>\u8BB0\u5F55\u4E00\u4E9B\u5BF9\u7A0B\u5E8F\u5458\u8C03\u8BD5\u95EE\u9898\u6709\u5E2E\u52A9\u7684\u4FE1\u606F, \u5176\u4E2D\u53EF\u80FD\u5305\u542B\u4E00\u4E9B\u654F\u611F\u4FE1\u606F, \u6240\u4EE5\u5E94\u8BE5\u907F\u514D\u5728 \u751F\u4EA7\u73AF\u5883\u4E2D\u542F\u7528Trace\u65E5\u5FD7\uFF0C\u56E0\u6B64\u4E0D\u5E94\u8BE5\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u9ED8\u8BA4\u5E94\u7981\u7528\u3002</td></tr><tr><td><strong>Debug = 1</strong></td><td>\u8BB0\u5F55\u4E00\u4E9B\u5728\u5F00\u53D1\u548C\u8C03\u8BD5\u9636\u6BB5\u6709\u7528\u7684\u77ED\u65F6\u53D8 \u91CF(Short-term usefulness), \u6240\u4EE5\u9664\u975E\u4E3A\u4E86\u4E34\u65F6\u6392\u9664\u751F\u4EA7\u73AF\u5883\u7684 \u6545\u969C\uFF0C\u5F00\u53D1\u4EBA\u5458\u5E94\u8BE5\u5C3D\u91CF\u907F\u514D\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u542F\u7528Debug\u65E5\u5FD7\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u662F\u6700\u8BE6\u7EC6\u7684\u65E5\u5FD7\u3002</td></tr><tr><td><strong>Information = 2</strong></td><td>\u8BB0\u5F55\u8DDF\u8E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u4E9B\u6D41\u7A0B, \u4F8B\u5982\uFF0C\u8BB0\u5F55\u5F53\u524Dapi\u8BF7\u6C42\u7684url\u3002</td></tr><tr><td><strong>Warning = 3</strong></td><td>\u8BB0\u5F55\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53D1\u751F\u51FA\u73B0\u9519\u8BEF\u6216\u5176\u5B83\u5BFC\u81F4\u7A0B\u5E8F\u505C\u6B62\u7684\u6D41\u7A0B\u5F02\u5E38\u4FE1\u606F\u3002 \u8FD9\u4E9B\u4FE1\u606F\u4E2D\u53EF\u80FD\u5305\u542B\u9519\u8BEF\u6D88\u606F\u6216\u8005\u9519\u8BEF\u4EA7\u751F\u7684\u6761\u4EF6, \u53EF\u4F9B\u540E\u7EED\u8C03\u67E5\uFF0C\u4F8B\u5982, \u6587\u4EF6\u672A\u627E\u5230</td></tr><tr><td><strong>Error = 4</strong></td><td>\u8BB0\u5F55\u5E94\u7528\u7A0B\u5E8F\u4E2D\u67D0\u4E2A\u64CD\u4F5C\u4EA7\u751F\u7684\u9519\u8BEF\u548C\u5F02\u5E38\u4FE1\u606F\u3002\u8FD9\u4E9B\u6D88\u606F\u5E94\u8BE5\u6307\u660E\u5F53\u524D\u6D3B\u52A8\u6216\u64CD\u4F5C\uFF08\u6BD4\u5982\u5F53\u524D\u7684 HTTP \u8BF7\u6C42\uFF09\uFF0C\u800C\u4E0D\u662F\u5E94\u7528\u7A0B\u5E8F\u8303\u56F4\u7684\u6545\u969C\u3002</td></tr><tr><td><strong>Critical = 5</strong></td><td>\u8BB0\u5F55\u4E00\u4E9B\u9700\u8981\u7ACB\u523B\u4FEE\u590D\uFF0C\u6025\u9700\u88AB\u5173\u6CE8\u7684\u95EE\u9898\uFF0C\u5E94\u5F53\u8BB0\u5F55\u5173\u952E\u7EA7\u522B\u7684\u65E5\u5FD7\u3002\u4F8B\u5982\u6570\u636E\u4E22\u5931\uFF0C\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3\u7B49\u3002</td></tr></tbody></table><h1 id="\u65E5\u5FD7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u914D\u7F6E" aria-hidden="true">#</a> \u65E5\u5FD7\u914D\u7F6E</h1><p>\u6CE8\u610F\uFF1A\u65E5\u5FD7\u914D\u7F6E\u901A\u5E38\u53D6\u51B3\u4E8E appsettings {Environment}.json \u6587\u4EF6\u7684 Logging\u914D\u7F6E\u8282\uFF0C\u652F\u6301\u591A\u4E2ALogPrivider\u3001\u8FC7\u6EE4\u65E5\u5FD7\u3001\u5B9A\u5236\u7279\u5B9A\u79CD\u7C7B\u7684\u65E5\u5FD7\u6536\u96C6\u7EA7\u522B\u3002</p><p>\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;Debug&quot;: {
      &quot;LogLevel&quot;: {
        &quot;Default&quot;: &quot;Information&quot;
      }
    },
    &quot;Console&quot;: {
      &quot;LogLevel&quot;: {
       &quot;Microsoft.AspNetCore.Mvc.Razor.Internal&quot;: &quot;Warning&quot;,
       &quot;Microsoft.AspNetCore.Mvc.Razor.Razor&quot;: &quot;Debug&quot;,
       &quot;Microsoft.AspNetCore.Mvc.Razor&quot;: &quot;Error&quot;,
       &quot;Default&quot;: &quot;Information&quot;
      }
    },
    &quot;LogLevel&quot;: {
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.AspNetCore.Hosting.Diagnostics&quot;: &quot;Information&quot;,    // \u63D0\u4F9B\u7ED9\u7B2C\u4E09\u65B9\u8C03\u7528API\u65E5\u5FD7
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;,
      &quot;Microsoft.EntityFrameworkCore.Database.Command&quot;: &quot;Information&quot;,  //\u6570\u636E\u5E93\u64CD\u4F5Csql\u65E5\u5FD7
      &quot;System.Net.Http.HttpClient&quot;: &quot;Information&quot;,    // \u5E94\u7528\u5185\u90E8\u53D1\u8D77\u7684Http\u8BF7\u6C42\u65E5\u5FD7
      &quot;Default&quot;: &quot;Warning&quot;    // \u9664\u4EE5\u4E0A\u65E5\u5FD7\u4E4B\u5916\uFF0C\u8BB0\u5F55Warning+\u7EA7\u522B\u65E5\u5FD7
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64 JSON \u5C06\u521B\u5EFA 6 \u6761\u7B5B\u9009\u89C4\u5219\uFF1ADebug\u4E2D1 \u6761\u7528\u4E8E\u8C03\u8BD5\u63D0\u4F9B\u7A0B\u5E8F\uFF0CConsole\u4E2D 4 \u6761\u7528\u4E8E\u63A7\u5236\u53F0\u63D0\u4F9B\u7A0B\u5E8F\uFF0C\u6700\u540E\u4E00\u6761LogLevel \u7528\u4E8E\u6240\u6709\u63D0\u4F9B\u7A0B\u5E8F\u3002 \u521B\u5EFA ILogger \u5BF9\u8C61\u65F6\uFF0C\u4E3A\u6BCF\u4E2A\u63D0\u4F9B\u7A0B\u5E8F\u9009\u62E9\u4E00\u4E2A\u89C4\u5219\u3002</p><h1 id="\u7B80\u5355\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u64CD\u4F5C" aria-hidden="true">#</a> \u7B80\u5355\u64CD\u4F5C</h1><p>\u5728\u7C7B\u5E93\u4E2D\u4F7F\u7528\u9700\u8981\u5148\u5F15\u7528\u6307\u5B9A\u7EC4\u4EF6using Microsoft.Extensions.Logging;</p><p>\u914D\u7F6E\u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Debug&quot;, //\u5927\u4E8E\u7B49\u4E8E\u8FD9\u4E2A\u7EA7\u522B\u7684\u624D\u4F1A\u88AB\u8F93\u51FA
      &quot;Microsoft&quot;: &quot;Warning&quot;, //\u7C7B\u522B\u9002\u7528\u4E8E\u4EE5 &quot;Microsoft&quot; \u5F00\u5934\u7684\u6240\u6709\u7C7B\u522B
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot; //\u7C7B\u522B\u6BD4 &quot;Microsoft&quot; \u7C7B\u522B\u66F4\u5177\u4F53\uFF0C\u56E0\u6B64 &quot;Microsoft.Hosting.Lifetime&quot; \u7C7B\u522B\u5728\u65E5\u5FD7\u7EA7\u522B\u201CInformation\u201D\u548C\u66F4\u9AD8\u7EA7\u522B\u8BB0\u5F55\u3002
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly ILogger&lt;HomeController&gt; _logger;

public HomeController(ILogger&lt;HomeController&gt; logger)
{
    _logger = logger;
}

[HttpGet]
public string Get()
{
    /*
        \u65E5\u5FD7\u914D\u7F6E\u901A\u5E38\u7531 appsettings {Environment}.json \u6587\u4EF6\u7684 Logging \u90E8\u5206\u63D0\u4F9B
        */
    _logger.LogTrace(&quot;0 Trace\u65E5\u5FD7&quot;);
    _logger.LogDebug(&quot;1 \u6211\u662F\u4E00\u4E2ADebug\u65E5\u5FD7&quot;);
    _logger.LogInformation(&quot;2  \u6211\u662F\u4E00\u4E2Ainfo\u65E5\u5FD7&quot;);
    _logger.LogWarning(&quot;3  \u6211\u662F\u4E00\u4E2A\u8B66\u544A\u65E5\u5FD7&quot;);
    _logger.LogError(&quot;4   \u6211\u662F\u4E00\u4E2A\u9519\u8BEF\u65E5\u5FD7&quot;);
    _logger.LogCritical(&quot;5   LogCritical \u7ACB\u523B\u4FEE\u590D&quot;);
    return &quot;\u6210\u529F&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u67E5\u770B\u8F93\u51FA\u6548\u679C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619945473634-900e7717-5bff-4fbf-b485-1ff1102cd69a.png" alt="img"></p>`,19),s=[r];function d(l,u){return e(),t("div",null,s)}const v=n(o,[["render",d],["__file","ilogger.html.vue"]]);export{v as default};
