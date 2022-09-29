import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const r={},a=s(`<h1 id="_1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u4F18\u70B9" aria-hidden="true">#</a> 1. \u4F18\u70B9</h1><ol><li>\u6709\u52A9\u4E8E\u4FDD\u62A4\u539F\u6709\u7CFB\u7EDF\uFF0C\u4E0D\u53D7\u5F71\u54CD\uFF0C\u5E76\u53CA\u65F6\u4FEE\u6539\u95EE\u9898</li><li>\u53EF\u4EE5\u5B9E\u73B0\u7528\u6237\u7684\u79C1\u4EBA\u5B9A\u5236\uFF08\u6BD4\u5982\u662F\u4ED8\u8D39\u63A5\u53E3\uFF09</li><li>\u5FEB\u901F\u8FED\u4EE3</li></ol><h1 id="_2-api\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-api\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2. API\u7248\u672C\u63A7\u5236</h1><ul><li>\u5728URL\u4E2D\u8FFD\u52A0\u7248\u672C\u6216\u8005\u4F5C\u4E3A\u67E5\u8BE2\u5B57\u7B26\u4E32\u53C2\u6570</li><li>\u901A\u8FC7\u81EA\u52A8\u4EE5\u6807\u5934\u548C\u901A\u8FC7\u63A5\u53D7\u6807\u5934</li></ul><h2 id="_2-1-\u5B89\u88C5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5\u7EC4\u4EF6" aria-hidden="true">#</a> 2.1 \u5B89\u88C5\u7EC4\u4EF6</h2><p>ASP.NET API versioning\u4E3A\u60A8\u63D0\u4F9B\u4E86\u4E00\u79CD\u529F\u80FD\u5F3A\u5927\u4F46\u6613\u4E8E\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06API\u7248\u672C\u63A7\u5236\u8BED\u4E49\u6DFB\u52A0\u5230\u4F7F\u7528ASP.NET\u6784\u5EFA\u7684\u65B0\u7684\u548C\u73B0\u6709\u7684REST\u670D\u52A1\u4E2D\u3002API\u7248\u672C\u63A7\u5236\u6269\u5C55\u5B9A\u4E49\u4E86\u7B80\u5355\u7684\u5143\u6570\u636E\u5C5E\u6027\u548C\u7EA6\u5B9A\uFF0C\u7528\u4E8E\u63CF\u8FF0\u60A8\u7684\u670D\u52A1\u5B9E\u73B0\u4E86\u54EA\u4E9BAPI\u7248\u672C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning&quot; Version=&quot;4.2.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer&quot; Version=&quot;4.2.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-1-\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> 2.1.1 \u5E38\u7528\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[ApiVersion(&quot;1.1&quot;)] //\u8BBE\u7F6E\u7248\u672C\u53F7
[ApiVersionNeutral]//\u9000\u51FA\u7248\u672C\u63A7\u5236
[MapToApiVersion(&quot;1.1&quot;)] //\u8BBE\u7F6E\u72EC\u7ACB\u7248\u672C
[ApiVersion(&quot;1.0&quot;, Deprecated = true)]//api\u7248\u672C\u5DF2\u7ECF\u88AB\u5F03\u7528
HttpContext.GetRequestedApiVersion().ToString(); //\u8BBF\u95EE\u7248\u672C\u4FE1\u606F 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-querystring\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-2-querystring\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.2 QueryString\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236</h2><h3 id="_2-2-1-configureservices\u4E2D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-1-configureservices\u4E2D\u914D\u7F6E" aria-hidden="true">#</a> 2.2.1 ConfigureServices\u4E2D\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //Versioning\u7528\u6765\u5B9E\u73B0API\u7684\u7248\u672C\u63A7\u5236
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 1);//\u9ED8\u8BA4\u7248\u672C\u53F7
                options.AssumeDefaultVersionWhenUnspecified = true;//\u6B64\u9009\u9879\u5C06\u7528\u4E8E\u4E0D\u63D0\u4F9B\u7248\u672C\u7684\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5047\u5B9AAPI\u7684\u7248\u672C\u4E3A1.0
                options.ReportApiVersions = true;//\u5F53\u8BBE\u7F6E\u4E3Atrue\u65F6\u5019\uFF0Capi\u5C06\u8FD4\u56DE\u54CD\u5E94\u6807\u5934\u4E2D\u652F\u6301\u7684\u7248\u672C\u4FE1\u606F
                //\u4E0B\u9762\u8FD9\u53E5\u9ED8\u8BA4\u4E0D\u5199\u4E5F\u53EF\u4EE5
                //options.ApiVersionReader = new QueryStringApiVersionReader(parameterNames: &quot;api-version&quot;);//\u8BE5\u540D\u79F0\u7528\u4E8E\u67E5\u8BE2\u65F6\u5019\u4F7F\u7528
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.2.2 \u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
{
    /// &lt;summary&gt;
    /// \u7248\u672C1.1
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;1.1&quot;)]//\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A
    [ApiVersion(&quot;1.2&quot;)]
    public class TestController : ControllerBase
    
namespace NetCore_SwaggerVersion.Controllers.v2
{
    /// &lt;summary&gt;
    /// \u7248\u672C2.0
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;2.6&quot;)]
    public class TestController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\u4E0B\u53EF\u4EE5\u5B58\u5728\u76F8\u540C\u7684\u63A7\u5236\u5668</p></blockquote><h3 id="_2-2-3-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.2.3 \u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-4-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.2.4 \u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    [ApiVersionNeutral]//\u9000\u51FA\u7248\u672C\u63A7\u5236
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-5-\u8BBF\u95EE\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-3-5-\u8BBF\u95EE\u5730\u5740" aria-hidden="true">#</a> 2.3.5 \u8BBF\u95EE\u5730\u5740</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:5000/api/WeatherForecast/Get //\u4E0D\u5199\u7248\u672C\u53F7\u7684\u8BDD\u8D70\u7684\u662F\u9ED8\u8BA4\u7684\u7248\u672C\u53F7
http://localhost:5000/api/Test?api-version=1.1
http://localhost:5000/api/Test?api-version=1.2
http://localhost:5000/api/Test?api-version=2.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-url-path-segment\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-3-url-path-segment\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.3 URL Path Segment\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236</h2><h3 id="_2-3-1-configureservices\u4E2D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-3-1-configureservices\u4E2D\u914D\u7F6E" aria-hidden="true">#</a> 2.3.1 ConfigureServices\u4E2D\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //Versioning\u7528\u6765\u5B9E\u73B0API\u7684\u7248\u672C\u63A7\u5236
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 1);//\u9ED8\u8BA4\u7248\u672C\u53F7
                options.AssumeDefaultVersionWhenUnspecified = true;//\u6B64\u9009\u9879\u5C06\u7528\u4E8E\u4E0D\u63D0\u4F9B\u7248\u672C\u7684\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5047\u5B9AAPI\u7684\u7248\u672C\u4E3A1.0
                options.ReportApiVersions = true;//\u5F53\u8BBE\u7F6E\u4E3Atrue\u65F6\u5019\uFF0Capi\u5C06\u8FD4\u56DE\u54CD\u5E94\u6807\u5934\u4E2D\u652F\u6301\u7684\u7248\u672C\u4FE1\u606F
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-2-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-3-2-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.3.2 \u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
{
    /// &lt;summary&gt;
    /// \u7248\u672C1.1
    /// &lt;/summary&gt;
    [Route(&quot;api/v{version:apiVersion}/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;1.0&quot;)]
    [ApiVersion(&quot;1.1&quot;)]//\u5B9A\u4E49\u63A7\u5236\u5668\u63D0\u4F9B\u54EA\u4E2A\u7248\u672C\u7684API
    public class TestController : ControllerBase
    
namespace NetCore_SwaggerVersion.Controllers.v2
{
    /// &lt;summary&gt;
    /// \u7248\u672C2.0
    /// &lt;/summary&gt;
    [Route(&quot;api/v{version:apiVersion}/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;2.6&quot;)]
    public class TestController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\u4E0B\u53EF\u4EE5\u5B58\u5728\u76F8\u540C\u7684\u63A7\u5236\u5668</p></blockquote><h3 id="_2-3-3-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-3-3-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.3.3 \u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-4-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-3-4-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.3.4 \u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    [ApiVersionNeutral]//\u9000\u51FA\u7248\u672C\u63A7\u5236
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-5-\u8BBF\u95EE\u5730\u5740-1" tabindex="-1"><a class="header-anchor" href="#_2-3-5-\u8BBF\u95EE\u5730\u5740-1" aria-hidden="true">#</a> 2.3.5 \u8BBF\u95EE\u5730\u5740</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:5000/api/v1.0/Test
http://localhost:5000/api/v1.1/Test
http://localhost:5000/api/v2.6/Test
http://localhost:5000/api/WeatherForecast/Get \u4E0D\u53D7\u7248\u672C\u63A7\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-http-headers\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-4-http-headers\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.4 HTTP Headers\u6765\u5B9E\u73B0\u7248\u672C\u63A7\u5236</h2><h3 id="_2-4-1-configureservices\u4E2D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-4-1-configureservices\u4E2D\u914D\u7F6E" aria-hidden="true">#</a> 2.4.1 ConfigureServices\u4E2D\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //Versioning\u7528\u6765\u5B9E\u73B0API\u7684\u7248\u672C\u63A7\u5236
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 1);//\u9ED8\u8BA4\u7248\u672C\u53F7
                options.AssumeDefaultVersionWhenUnspecified = true;//\u6B64\u9009\u9879\u5C06\u7528\u4E8E\u4E0D\u63D0\u4F9B\u7248\u672C\u7684\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5047\u5B9AAPI\u7684\u7248\u672C\u4E3A1.0
                options.ReportApiVersions = true;//\u5F53\u8BBE\u7F6E\u4E3Atrue\u65F6\u5019\uFF0Capi\u5C06\u8FD4\u56DE\u54CD\u5E94\u6807\u5934\u4E2D\u652F\u6301\u7684\u7248\u672C\u4FE1\u606F
                //header\u4F20\u9012\u7248\u672C\u4FE1\u606F
                options.ApiVersionReader = new HeaderApiVersionReader(&quot;version&quot;);
                options.ApiVersionSelector = new CurrentImplementationApiVersionSelector(options);//\u5982\u679C\u6CA1\u6709\u4F20\u8F93\u7248\u672C\u53F7\uFF0C\u90A3\u4E48\u4F1A\u4F7F\u7528\u6700\u5927\u7248\u672C\u53F7  LowestImplementedApiVersionSelector\u662F\u6700\u5C0F\u7248\u672C\u53F7
                options.UseApiBehavior = false;//\u662F\u5426\u4F7F\u7528API\u884C\u4E3A
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-2-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-4-2-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.4.2 \u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
{
    /// &lt;summary&gt;
    /// \u7248\u672C1.1
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;1.1&quot;)]//\u5B9A\u4E49\u63A7\u5236\u5668\u63D0\u4F9B\u54EA\u4E2A\u7248\u672C\u7684API
    public class TestController : ControllerBase
    
namespace NetCore_SwaggerVersion.Controllers.v2
{
    /// &lt;summary&gt;
    /// \u7248\u672C2.0
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;2.6&quot;)]
    public class TestController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\u4E0B\u53EF\u4EE5\u5B58\u5728\u76F8\u540C\u7684\u63A7\u5236\u5668</p></blockquote><h3 id="_2-4-3-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-4-3-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.4.3 \u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-4-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-4-4-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.4.4 \u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    [ApiVersionNeutral]//\u9000\u51FA\u7248\u672C\u63A7\u5236
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-5-\u8BBF\u95EE\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-4-5-\u8BBF\u95EE\u5730\u5740" aria-hidden="true">#</a> 2.4.5 \u8BBF\u95EE\u5730\u5740</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:5000/api/Test  //\u9700\u8981\u5728headers\u91CC\u9762\u589E\u52A0 version: 1.1
http://localhost:5000/api/WeatherForecast/Get \u4E0D\u53D7\u7248\u672C\u63A7\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-\u540C\u65F6\u652F\u6301\u591A\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-5-\u540C\u65F6\u652F\u6301\u591A\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> 2.5 \u540C\u65F6\u652F\u6301\u591A\u79CD\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddApiVersioning(o =&gt;
{
    o.ReportApiVersions = true;
    o.AssumeDefaultVersionWhenUnspecified = true;
    o.DefaultApiVersion = new ApiVersion(1, 0);
    o.ApiVersionReader = ApiVersionReader.Combine(new HeaderApiVersionReader(&quot;api-version&quot;), new QueryStringApiVersionReader(&quot;api-version&quot;));
    //\u6216\u8005
    //\u540C\u65F6\u652F\u6301\u67E5\u8BE2\u5B57\u7B26\u4E32\u548C\u6807\u5934
    o.ApiVersionReader = new QueryStringOrHeaderApiVersionReader(parameterName: &quot;version&quot;){HeaderNames = { &quot;api-version&quot;, &quot;x-ms-version&quot; }}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-\u4E0D\u501F\u52A9\u5305-\u5C01\u88C5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-6-\u4E0D\u501F\u52A9\u5305-\u5C01\u88C5\u6587\u4EF6" aria-hidden="true">#</a> 2.6 \u4E0D\u501F\u52A9\u5305\uFF0C\u5C01\u88C5\u6587\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class NameSpaceVersionRoutingConvention:IApplicationModelConvention
    {
        private readonly string apiPrefix;
        private const string urlTemplate = &quot;{0}/{1}/{2}&quot;;
        public NameSpaceVersionRoutingConvention(string apiPrefix = &quot;api&quot;)
        {
            this.apiPrefix = apiPrefix;
        }

        public void Apply(ApplicationModel application)
        {
            foreach (var controller in application.Controllers)
            {

                var hasRouteAttribute = controller.Selectors
                .Any(x =&gt; x.AttributeRouteModel != null);
                if (!hasRouteAttribute)
                {
                    continue;
                }
                var nameSpaces = controller.ControllerType.Namespace.Split(&#39;.&#39;);
                //\u83B7\u53D6namespace\u4E2D\u7248\u672C\u53F7\u90E8\u5206
                var version = nameSpaces.FirstOrDefault(x =&gt; Regex.IsMatch(x, @&quot;^v(\\d+)$&quot;));
                if (string.IsNullOrEmpty(version))
                {
                    continue;
                }
                string template = string.Format(urlTemplate, apiPrefix, version,
                controller.ControllerName);
                controller.Selectors[0].AttributeRouteModel = new AttributeRouteModel()
                {
                    Template = template
                };
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u8BD5\u4EE3\u7801\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u53EA\u5728\u7A0B\u5E8F\u7B2C\u4E00\u6B21\u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u6267\u884C\uFF0C\u4E4B\u540E\u4E0D\u4F1A\u518D\u6267\u884C\u591A\u6B21\uFF0C\u56E0\u6B64\u6548\u7387\u5F88\u9AD8\u3002</p><blockquote><p>\u501F\u9274\u4E8E\uFF1Ahttps://www.cnblogs.com/runningsmallguo/p/7484954.html</p></blockquote><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1><blockquote><p>https://github.com/microsoft/aspnet-api-versioning</p></blockquote>`,53),l=[a];function d(t,o){return i(),n("div",null,l)}const v=e(r,[["render",d],["__file","webapiversion.html.vue"]]);export{v as default};
