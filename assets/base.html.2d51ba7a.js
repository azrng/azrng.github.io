import{_ as e,o as i,c as a,a as n}from"./app.565765f9.js";const r={},s=n(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u652F\u6301\u591A\u8BED\u8A00\u4F7F\u7F51\u7AD9\u53EF\u4EE5\u8986\u76D6\u66F4\u5E7F\u6CDB\u7684\u53D7\u4F17\u3002 ASP.NET Core \u63D0\u4F9B\u7684\u670D\u52A1\u548C\u4E2D\u95F4\u4EF6\u53EF\u5C06\u7F51\u7AD9\u672C\u5730\u5316\u4E3A\u4E0D\u540C\u7684\u8BED\u8A00\u3002</p><p>\u672C\u6B21\u793A\u4F8B\u73AF\u5883\uFF1Avs2019\u3001net5</p><h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><p>\u65E0\u9700\u5F15\u7528Nuget\u5305\u5373\u53EF\u5B9E\u73B0\u4EE5\u4E0B\u529F\u80FD\u3002</p><h2 id="\u6CE8\u5165\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165\u5BB9\u5668" aria-hidden="true">#</a> \u6CE8\u5165\u5BB9\u5668</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddLocalization(t =&gt;
{
    t.ResourcesPath = &quot;Language&quot;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u914D\u7F6E" aria-hidden="true">#</a> \u542F\u7528\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var supportedCultures = new List&lt;CultureInfo&gt;()
{
    new CultureInfo(&quot;zh-CN&quot;),
    new CultureInfo(&quot;en-US&quot;)
};
app.UseRequestLocalization(new RequestLocalizationOptions
{
    //\u8FD9\u91CC\u6307\u5B9A\u9ED8\u8BA4\u8BED\u8A00\u5305
    DefaultRequestCulture = new RequestCulture(&quot;en-US&quot;),//\u4E3A\u4E86\u6D4B\u8BD5\u914D\u7F6E\u9ED8\u8BA4\u8BED\u8A00\u82F1\u6587
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BED\u8A00\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u8BED\u8A00\u914D\u7F6E\u6587\u4EF6</h2><p>\u9700\u8981\u5728\u6839\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u6587\u4EF6\u5939\u540D\u5B57\u5C31\u662FResourcesPath\u7684\u540D\u5B57\u3002\u8D44\u6E90\u6587\u4EF6(resx\u7ED3\u5C3E)\u5B58\u653E\u8DEF\u5F84\u9700\u8981\u548C\u4F7F\u7528\u7684\u5730\u65B9\u76EE\u5F55\u7ED3\u6784\u4E00\u81F4\u3002(\u53F3\u952E\u6587\u4EF6\u5939&gt;\u6DFB\u52A0&gt;\u65B0\u5EFA\u9879)</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620743639094-5602d16d-4cbb-45d6-a7fb-6a36098f3fd2.png" alt="img"></p><p>\u8BED\u8A00\u5305\u4E0B\u7684\u76EE\u5F55\u7ED3\u6784\u548CMVC\u5BF9\u5E94\uFF0C\u63A7\u5236\u5668\u5BF9\u5E94\u63A7\u5236\u5668\uFF0C\u89C6\u56FE\u5BF9\u5E94\u89C6\u56FE\u3002\u8D44\u6E90\u6587\u4EF6\u547D\u540D\u65B9\u5F0F\u4E3A\u4F7F\u7528\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u79F0\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\u3002</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620034709077-45121370-8b26-42a5-970c-ed5509b50720.png" alt="img"></p><h1 id="\u8BFB\u53D6\u8D44\u6E90\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u8D44\u6E90\u6587\u4EF6" aria-hidden="true">#</a> \u8BFB\u53D6\u8D44\u6E90\u6587\u4EF6</h1><p>\u5728\u63A7\u5236\u5668\u4E2D\u4F7F\u7528\uFF0C\u4F9D\u8D56\u6CE8\u5165\u8D44\u6E90\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[ApiController]
[Route(&quot;[controller]&quot;)]
public class HomeController : ControllerBase
{
    private readonly IStringLocalizer&lt;HomeController&gt; _localizer;

    public HomeController(IStringLocalizer&lt;HomeController&gt; localizer)
    {
        _localizer = localizer;
    }

    [HttpGet]
    public string Get()
    {
        return _localizer[&quot;succeed&quot;].Value;//\u5982\u679C\u627E\u4E0D\u5230succeed\u7684\u672C\u5730\u5316\u503C\uFF0C\u90A3\u4E48\u5C31\u8FD4\u56DE\u5B57\u7B26\u4E32\u201Csucceed\u201D
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h1><p>\u6709\u591A\u79CD\u65B9\u6CD5\u53EF\u4EE5\u544A\u8BC9\u7A0B\u5E8F\u9700\u8981\u4F7F\u7528\u54EA\u4E00\u4E2A\u8BED\u8A00\u6587\u4EF6\uFF0C\u4E0B\u9762\u53EA\u8BF4\u5E38\u89C1\u7684\u4F7F\u7528\uFF0C\u8FD8\u652F\u6301\u81EA\u5B9A\u4E49 \u3002</p><p>\u9ED8\u8BA4\u8F93\u51FA</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739094068-441806c6-1df0-4187-a8cf-44031e34942b.png" alt="img"></p><h2 id="http\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#http\u62A5\u6587" aria-hidden="true">#</a> HTTP\u62A5\u6587</h2><p>\u548C\u5E38\u89C1\u7684\u8BF7\u6C42\u4E00\u6837\u6DFB\u52A0Accept-Language\u8BF7\u6C42\u5934\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Accept-Language:zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739027856-d2b61f2f-08ff-4e39-bed0-66d618939e25.png" alt="img"></p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>\u9ED8\u8BA4\u4F7F\u7528cookie\u540D\u79F0.AspNetCore.Culture\uFF0C\u503C\u662F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>c=zh-CN|uic=zh-CN
c=zh-CN
uic=zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c\u662FCulture\uFF0Cuic\u662FUICulture</p><h2 id="url\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#url\u53C2\u6570" aria-hidden="true">#</a> URL\u53C2\u6570</h2><p>\u4E09\u79CD\u5199\u6CD5\uFF0C\u6548\u679C\u4E00\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>?culture=zh-CN&amp;ui-culture=zh-CN
?culture=zh-CN
?ui-culture=zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739056710-32704399-15c8-4a13-88d9-1706658774d3.png" alt="img"></p><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1><p>https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/localization?view=aspnetcore-5.0</p>`,35),d=[s];function t(l,c){return i(),a("div",null,d)}const o=e(r,[["render",t],["__file","base.html.vue"]]);export{o as default};
