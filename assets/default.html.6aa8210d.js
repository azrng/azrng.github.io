import{_ as e,o as i,c as n,d as r}from"./app.f6b99883.js";const s={},d=r(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u4E8E\u5177\u4F53\u7684\u5B9E\u73B0\uFF0C\u5E94\u8BE5\u4F9D\u8D56\u4E8E\u62BD\u8C61\uFF0C\u9AD8\u5C42\u6A21\u5757\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u4E8E\u5E95\u5C42\u6A21\u5757\uFF0C\u4E8C\u8005\u5E94\u8BE5\u4F9D\u8D56\u4E8E\u62BD\u8C61(\u5426\u5219\u4E1A\u52A1\u53D8\u66F4\uFF0C\u6539\u52A8\u6BD4\u8F83\u5927)\u3002\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u4E3A\u4E86\u66F4\u597D\u7684\u89E3\u8026\u3002\u800C\u63A7\u5236\u53CD\u8F6C(Ioc)\u5C31\u662F\u8FD9\u6837\u7684\u539F\u5219\u7684\u5176\u4E2D\u4E00\u4E2A\u5B9E\u73B0\u601D\u8DEF, \u8FD9\u4E2A\u601D\u8DEF\u7684\u5176\u4E2D\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5C31\u662F\u4F9D\u8D56\u6CE8\u5165(DI)\u3002(\u5B98\u65B9\u539F\u8BDD\uFF1A\u4F9D\u8D56\u6CE8\u5165(DI)\u8FD9\u662F\u4E00\u79CD\u5728\u7C7B\u548C\u4F9D\u8D56\u9879\u4E4B\u95F4\u5B9E\u73B0\u63A7\u5236\u53CD\u8F6C(Ioc)\u7684\u6280\u672F)\uFF0C</p><p>dotNet\u5185\u7F6E\u6709\u5BF9\u4F9D\u8D56\u6CE8\u5165(DI)\u7684\u652F\u6301\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5185\u7F6E\u7684\u670D\u52A1\u5BB9\u5668IServiceProvider\uFF0C\u7A0B\u5E8F\u5728\u542F\u52A8\u65F6\u5019\u6211\u4EEC\u9884\u5148\u5C06\u670D\u52A1\u6CE8\u518C\u4E0D\u540C\u751F\u547D\u5468\u671F\u5230ServiceCollection\uFF0C\u7136\u540E\u5229\u7528ServiceCollection\u6765\u521B\u5EFAServiceProvider\uFF0C\u5229\u7528\u540E\u8005\u63D0\u4F9B\u670D\u52A1\u5B9E\u4F8B\uFF0C\u5C06\u670D\u52A1\u6CE8\u5165\u5230\u4F7F\u7528\u5230\u5B83\u7684\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u3002</p><p>\u53EA\u8981\u662F\u7528new\u5B9E\u4F8B\u5316\u7684\u90FD\u662F\u5B58\u5728\u4F9D\u8D56\u7684\u3002</p><p>\u5185\u7F6E\u7684\u670D\u52A1\u5BB9\u5668\u5DF2\u7ECF\u6EE1\u8DB3\u6846\u67B6\u548C\u5927\u591A\u6570\u9879\u76EE\u7684\u9700\u6C42\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u66FF\u6362\uFF0C\u9664\u975E\u4F60\u7528\u5230\u4E86\u4E0B\u9762\u8FD9\u4E9B\u529F\u80FD\uFF1A</p><ul><li><p>\u5C5E\u6027\u6CE8\u5165</p></li><li><p>\u57FA\u4E8E\u540D\u79F0\u7684\u6CE8\u5165</p></li><li><p>\u5B50\u5BB9\u5668</p></li><li><p>\u81EA\u5B9A\u4E49\u751F\u547D\u5468\u671F</p></li><li><p>\u5BF9\u5EF6\u7F13\u521D\u59CB\u5316\u7684Func&lt;T&gt; \u652F\u6301</p></li><li><p>\u57FA\u4E8E\u7EA6\u5B9A\u7684\u6CE8\u518C</p></li></ul><h1 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h1><p>\u89E3\u8026\uFF0C\u4F7F\u5F97\u4EE3\u7801\u66F4\u5177\u6709\u7EF4\u62A4\u6027\u3002</p><p>\u65B9\u4FBF\u8FDB\u884C\u5355\u5143\u6D4B\u8BD5\u3002</p><h1 id="\u670D\u52A1\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u6CE8\u518C" aria-hidden="true">#</a> \u670D\u52A1\u6CE8\u518C</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    //\u6CE8\u518C
    services.AddTransient&lt;IEmailValidCodeQuery, EmailValidCodeQuery&gt;(); // \u81EA\u52A8\u91CA\u653E\u5BF9\u8C61
    services.AddSingleton&lt;IMyDep&gt;(sp =&gt; new MyDep()); // \u81EA\u52A8\u91CA\u653E\u5BF9\u8C61
	services.AddSingleton&lt;MyDep&gt;(); // \u4E0D\u81EA\u52A8\u91CA\u653E\u5BF9\u8C61
	services.AddSingleton&lt;IMyDep&gt;(new MyDep()); //\u4E0D\u81EA\u52A8\u91CA\u653E\u5BF9\u8C61

	// \u5982\u679C\u8BE5IMessageWriter\u5DF2\u7ECF\u6CE8\u518C\u5B9E\u73B0\uFF0C\u8BE5\u4EE3\u7801\u5C06\u6CA1\u6709\u4F5C\u7528
	services.TryAddSingleton&lt;IMessageWriter, LoggingMessageWriter&gt;();

    //\u79FB\u9664\u548C\u66FF\u6362\u6CE8\u518C
    //services.Replace(ServiceDescriptor.Transient&lt;IEmailValidCodeQuery, EmailValidCodeQuery2&gt;());
    services.RemoveAll&lt;IEmailValidCodeQuery&gt;();

    //\u6CE8\u518C\u6CDB\u578B\u6A21\u677F
    services.AddSingleton(typeof(IAService&lt;&gt;), typeof(AService&lt;&gt;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h1><p>AddSingleton\u2192AddTransient\u2192AddScoped</p><p>\u88AB\u6CE8\u5165\u7684\u670D\u52A1\u5E94\u8BE5\u4E0E\u6CE8\u5165\u7684\u670D\u52A1\u5177\u6709\u76F8\u540C\u6216\u8005\u66F4\u957F\u7684\u751F\u547D\u5468\u671F</p><h2 id="singleton-\u5355\u4F8B" tabindex="-1"><a class="header-anchor" href="#singleton-\u5355\u4F8B" aria-hidden="true">#</a> Singleton(\u5355\u4F8B)</h2><p>\u670D\u52A1\u5728\u7B2C\u4E00\u6B21\u8BF7\u6C42\u65F6\u88AB\u521B\u5EFA\uFF08\u6216\u8005\u5F53\u6211\u4EEC\u5728ConfigureServices\u4E2D\u6307\u5B9A\u521B\u5EFA\u67D0\u4E00\u5B9E\u4F8B\u5E76\u8FD0\u884C\u65B9\u6CD5\uFF09\uFF0C\u5176\u540E\u7684\u6BCF\u6B21\u8BF7\u6C42\u5C06\u6CBF\u7528\u5DF2\u521B\u5EFA\u670D\u52A1\u3002\u5F53\u5E94\u7528\u7A0B\u5E8F\u5173\u95ED\u5E76\u91CA\u653ESericeProvider\u65F6\u5019\uFF0C\u4F1A\u91CA\u653E\u5355\u4F8B\u670D\u52A1\u3002</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437795433-1878377b-ead3-4b6b-a749-87f27b0907c0.png" alt="img"></p><p>\u56FE\u7247\u6765\u6E90\u81EA\uFF1Ahttps://blog.csdn.net/weixin_47498376/article/details/116177389</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddSingleton&lt;IApplicationService,ApplicationService&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6BD4\u5982\u6709\u72B6\u6001\u7684\u3001\u9759\u6001\u7C7B\u548C\u6210\u5458\u3002</p><h2 id="scoped-\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#scoped-\u4F5C\u7528\u57DF" aria-hidden="true">#</a> Scoped(\u4F5C\u7528\u57DF)</h2><p>\u4E00\u6B21\u8BF7\u6C42\u5F00\u59CB\u5230\u8BF7\u6C42\u7ED3\u675F \uFF0C\u8FD9\u6B21\u8BF7\u6C42\u4E2D\u83B7\u53D6\u7684\u5BF9\u8C61\u90FD\u662F\u540C\u4E00\u4E2A\uFF0C\u8BF7\u6C42\u7ED3\u675F\u65F6\u5019\u4F1A\u91CA\u653E\u6709\u4F5C\u7528\u57DF\u7684\u670D\u52A1\u3002</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437843902-34480f40-cbe1-4cad-a5bd-4f1c84cfca78.png" alt="img"></p><p>\u56FE\u7247\u6765\u6E90\u81EA\uFF1Ahttps://blog.csdn.net/weixin_47498376/article/details/116177389</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddScoped&lt;IApplicationService,ApplicationService&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u8BE5service\u5728\u4E00\u4E2A\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u591A\u6B21\u88AB\u7528\u5230\uFF0C\u5E76\u4E14\u53EF\u80FD\u5171\u4EAB\u5176\u4E2D\u7684\u5B57\u6BB5\u6216\u8005\u5C5E\u6027\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528scoped\uFF0C\u4F8B\u5982httpcontext\u3002 (\u611F\u8C22\u7FA4\u91CC\u8001\u54E5\u7684\u5E2E\u52A9)</p><h2 id="transient-\u77AC\u65F6" tabindex="-1"><a class="header-anchor" href="#transient-\u77AC\u65F6" aria-hidden="true">#</a> Transient(\u77AC\u65F6)</h2><p>\u6BCF\u4E00\u6B21\u83B7\u53D6\u7684\u5BF9\u8C61\u90FD\u4E0D\u662F\u540C\u4E00\u4E2A\uFF0C\u9002\u5408\u4E8E\u8F7B\u91CF\u7EA7\u3001\u65E0\u72B6\u6001\u7684\u670D\u52A1\uFF0C\u8BF7\u6C42\u7ED3\u675F\u65F6\u5019\u4F1A\u91CA\u653E\u670D\u52A1\u3002</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437917664-c31fe30a-c429-4d5a-b66b-4a065089dd92.png" alt="img"></p><p>\u56FE\u7247\u6765\u6E90\u81EA\uFF1Ahttps://blog.csdn.net/weixin_47498376/article/details/116177389</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddTransient&lt;IApplicationService,ApplicationService&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u8BE5service\u5728\u4E00\u6B21\u8BF7\u6C42\u4E2D\u53EA\u4F7F\u7528\u4E00\u6B21\uFF0C\u90A3\u4E48\u5C31\u6CE8\u518CTransient\u5C31\u597D\u4E86\u3002</p><h1 id="\u6CE8\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165\u65B9\u5F0F" aria-hidden="true">#</a> \u6CE8\u5165\u65B9\u5F0F</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// \u7528\u6237\u63A5\u53E3
    /// &lt;/summary&gt;
    public interface IUserService
    {
        string GetName();
    }

    /// &lt;summary&gt;
    /// \u7528\u6237\u5B9E\u73B0
    /// &lt;/summary&gt;
    public class UserService : IUserService
    {
        public string GetName()
        {
            return &quot;AZRNG&quot;;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u5728ConfigureServices\u65B9\u6CD5\u8FDB\u884C\u6CE8\u5165</p><h2 id="\u6784\u9020\u51FD\u6570\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u6CE8\u5165" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u6CE8\u5165</h2><p>\u670D\u52A1\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u53C2\u6570\u6DFB\u52A0\uFF0C\u5E76\u4E14\u8FD0\u884C\u65F6\u4ECE\u670D\u52A1\u5BB9\u5668\u4E2D\u89E3\u6790\u670D\u52A1\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private readonly IUserService _userService;

        public UserController(IUserService userService
        	,IEnumerable&lt;IMessageWriter&gt;)// \u89E3\u6790\u591A\u4E2A\u670D\u52A1
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult GetName()
        {
            return Ok(_userService.GetName());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fromservices\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#fromservices\u6CE8\u5165" aria-hidden="true">#</a> FromServices\u6CE8\u5165</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        [HttpGet]
        public ActionResult GetName([FromServices] IUserService _userService)
        {
            return Ok(_userService.GetName());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3" aria-hidden="true">#</a> \u6838\u5FC3</h1><p>\u5728.NET Core\u4E2DDI\u7684\u6838\u5FC3\u5206\u4E3A\u4E24\u4E2A\u7EC4\u4EF6\uFF1AIServiceCollection\u548C IServiceProvider\u3002</p><ul><li>IServiceCollection\u8D1F\u8D23\u6CE8\u518C</li><li>IServiceProvider\u8D1F\u8D23\u63D0\u4F9B\u5B9E\u4F8B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
	//\u5C06\u670D\u52A1\u751F\u547D\u671F\u7684\u8303\u56F4\u9650\u5B9A\u4E3A\u5355\u4E2A\u8BF7\u6C42\u7684\u751F\u547D\u671F
    services.AddTransient&lt;IUserService, UserService&gt;();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u9020\u51FD\u6570\u83B7\u53D6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u83B7\u53D6\u670D\u52A1" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u83B7\u53D6\u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly IUserService _userService;
public HomeController(IUserService userService)
{
    _userService = userService;
}

public IActionResult Index()
{
    var info = _userService.GetInfo();
    return View();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iserviceprovider\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#iserviceprovider\u83B7\u53D6" aria-hidden="true">#</a> IServiceProvider\u83B7\u53D6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly IServiceProvider _service;
public UserController(IServiceProvider service)
{
    _service = service;
}

[HttpGet]
public ActionResult GetName()
{
    var _userService = (IUserService)_service.GetService(typeof(IUserService));
    return Ok(_userService.GetName());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configureservices\u4E2D\u83B7\u53D6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#configureservices\u4E2D\u83B7\u53D6\u670D\u52A1" aria-hidden="true">#</a> ConfigureServices\u4E2D\u83B7\u53D6\u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var provider = services.BuildServiceProvider();
var userserivce = provider.GetService&lt;IUserService&gt;(); // \u83B7\u53D6\u4E0D\u5230\u4E3Anull
//\u6216
var userservice2 = provider.GetRequiredService&lt;IUserService&gt;(); // \u83B7\u53D6\u4E0D\u5230\u629B\u51FA\u5F02\u5E38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure\u4E2D\u83B7\u53D6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#configure\u4E2D\u83B7\u53D6\u670D\u52A1" aria-hidden="true">#</a> Configure\u4E2D\u83B7\u53D6\u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var manualScope = app.ApplicationServices.CreateScope();
 
var service = manualScope.ServiceProvider.GetRequiredService&lt;IUserService&gt;();
service.SayHello();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6784\u5EFA\u5B50\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u5B50\u5BB9\u5668" aria-hidden="true">#</a> \u6784\u5EFA\u5B50\u5BB9\u5668</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>using (var serviceProvider = new ServiceCollection()
                .AddSingleton&lt;ISingletonService, SingletonService&gt;()
                .BuildServiceProvider())
{
    var app = serviceProvider.GetService&lt;ISingletonService&gt;();

    app.Execute();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u5DF1\u6784\u5EFA\u8FD9\u79CD\u9700\u8981\u624B\u52A8\u91CA\u653E\uFF0C\u9632\u6B62\u5185\u5B58\u6CC4\u9732\u3002\u907F\u514D\u5728ConfigureService\u4E2D\u8C03\u7528BuildServiceProvider\u3002</p><h2 id="\u5F02\u6B65\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u83B7\u53D6" aria-hidden="true">#</a> \u5F02\u6B65\u83B7\u53D6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly IServiceScopeFactory _serviceScopeFactory;

public OrderHander(IServiceScopeFactory serviceScopeFactory)
{
    _serviceScopeFactory = serviceScopeFactory;
}

public Task Hander()
{
    using (var scope = _serviceScopeFactory.CreateScope())
    {
        var userService = scope.ServiceProvider.GetRequiredService&lt;IUserService&gt;();
    }

    return Task.CompletedTask;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8303\u56F4\u670D\u52A1\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6CE8\u5165\uFF0C\u63A8\u8350\u5F15\u5165IServiceScopeFactory\u521B\u5EFA\u8303\u56F4</p><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1><p>\u4F9D\u8D56\u5173\u7CFB\u6CE8\u5165\uFF1Ahttps://docs.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection</p>`,60),a=[d];function l(c,v){return i(),n("div",null,a)}const u=e(s,[["render",l],["__file","default.html.vue"]]);export{u as default};
