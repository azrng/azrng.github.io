import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const l={},t=s(`<h1 id="\u5355\u5143\u6D4B\u8BD5\u7B80\u5355\u4F7F\u7528-\u4E89\u8BAE\u7BC7" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5\u7B80\u5355\u4F7F\u7528-\u4E89\u8BAE\u7BC7" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5\u7B80\u5355\u4F7F\u7528-\u4E89\u8BAE\u7BC7</h1><h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u5E38\u7528\u7684\u5355\u5143\u6D4B\u8BD5\u662F\u6D4B\u8BD5\u65B9\u6CD5\u3001API\u7B49\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u6F14\u793A\u4E00\u4E0BXunit\u6D4B\u8BD5\u6846\u67B6\u7684\u7B80\u5355\u4F7F\u7528\uFF0C\u6709\u4E9B\u662F\u4E3A\u4E86\u6F14\u793A\u800C\u5199\u7684\u5355\u5143\u6D4B\u8BD5\u3002</p><p>\u6700\u4E0B\u9762\u6709\u53CD\u8F6C\uFF0C\u4E00\u5B9A\u8981\u770B\u5230\u6700\u540E</p><h1 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h1><h2 id="\u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE</h2><p>\u672C\u6B21\u6587\u7AE0\u8FD8\u5728\u539F\u6765\u9879\u76EE\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u64CD\u4F5C\uFF0C\u53F3\u952E\u89E3\u51B3\u65B9\u6848\u6DFB\u52A0\u5355\u5143\u6D4B\u8BD5\u9879\u76EE</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631872707111-5bc7e39a-e7c5-484d-88e3-2687849ea4a9.png" alt="img"></p><p>\u9009\u62E9\u6846\u67B6\u7248\u672C\u4E3A.Net 5.0</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631872791679-fd470686-fef4-4c00-b540-f7a6e27c2019.png" alt="img"></p><p>\u5355\u5143\u6D4B\u8BD5\u9879\u76EE\u521B\u5EFA\u5B8C\u6210\u3002\u7136\u540E\u5F15\u7528\u6211\u4EEC\u7684\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;
  &lt;PropertyGroup&gt;
    &lt;TargetFramework&gt;.NETCoreApp,Version=v5.0&lt;/TargetFramework&gt;

    &lt;IsPackable&gt;false&lt;/IsPackable&gt;
  &lt;/PropertyGroup&gt;

  &lt;ItemGroup&gt;
    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.TestHost&quot; Version=&quot;5.0.10&quot; /&gt;
    &lt;PackageReference Include=&quot;Microsoft.NET.Test.Sdk&quot; Version=&quot;16.9.4&quot; /&gt;
    &lt;PackageReference Include=&quot;xunit&quot; Version=&quot;2.4.1&quot; /&gt;
    &lt;PackageReference Include=&quot;xunit.runner.visualstudio&quot; Version=&quot;2.4.3&quot;&gt;
      &lt;IncludeAssets&gt;runtime; build; native; contentfiles; analyzers; buildtransitive&lt;/IncludeAssets&gt;
      &lt;PrivateAssets&gt;all&lt;/PrivateAssets&gt;
    &lt;/PackageReference&gt;
    &lt;PackageReference Include=&quot;coverlet.collector&quot; Version=&quot;3.0.2&quot; /&gt;
  &lt;/ItemGroup&gt;

  &lt;ItemGroup&gt;
    &lt;ProjectReference Include=&quot;..\\Net5ByDocker\\Net5ByDocker.csproj&quot; /&gt;
  &lt;/ItemGroup&gt;

&lt;/Project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TargetFramework\uFF1A\u6307\u5B9A\u6D4B\u8BD5\u9879\u76EE\u7684\u76EE\u6807\u6846\u67B6</p><p>IsPackable\uFF1A\u8BBE\u7F6E\u662F\u5426\u5141\u8BB8\u6253\u5305\u5355\u5143\u6D4B\u8BD5\u9879\u76EE</p><p>xunit\uFF1A\u8BE5xunit\u5305\u5F15\u5165\u4E86\u4E09\u4E2A\u5B50\u5305\uFF0C\u5176\u4E2D\u5305\u62EC\u5927\u591A\u6570\u5F00\u53D1\u4EBA\u5458\u60F3\u8981\u7684\u529F\u80FD\uFF1A\uFF08xunit.core\u6D4B\u8BD5\u6846\u67B6\u672C\u8EAB\uFF09\u3001 xunit.assert\uFF08\u5305\u542BAssert\u7C7B\u7684\u5E93\uFF09\u548Cxunit.analyzers\uFF08\u4F7F Roslyn \u5206\u6790\u5668\u80FD\u591F\u68C0\u6D4B\u5355\u5143\u6D4B\u8BD5\u548C xUnit.net \u53EF\u6269\u5C55\u6027\u7684\u5E38\u89C1\u95EE\u9898\uFF09</p><p>\u5305xunit.runner.visualstudio\u548CMicrosoft.NET.Test.Sdk \u662F\u80FD\u591F\u5728 Visual Studio \u4E2D\u8FD0\u884C\u6D4B\u8BD5\u9879\u76EE\u4EE5\u53CA\u4F7F\u7528 dotnet test.</p><p>coverlet.collector\uFF1A\u8BE5coverlet.collector\u5305\u5141\u8BB8\u6536\u96C6\u4EE3\u7801\u8986\u76D6\u7387\u3002\u5982\u679C\u60A8\u4E0D\u6253\u7B97\u6536\u96C6\u4EE3\u7801\u8986\u76D6\u7387\uFF0C\u5219\u5E94\u5220\u9664\u6B64\u5305\u5F15\u7528\u3002</p><p>\u5982\u679C\u60F3\u4F7F\u7528MSTest\u6846\u67B6\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u5728\u9700\u8981\u8FDB\u884C\u6D4B\u8BD5\u7684\u65B9\u6CD5\u4E0A\u9762\u70B9\u51FB\u53F3\u952E\uFF0C\u521B\u5EFA\u5355\u5143\u6D4B\u8BD5</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631862845735-4fe85e55-66aa-4aaa-873a-74e90a0a6c5c.png" alt="img"></p><p>\u70B9\u51FB\u786E\u5B9A\u540E\u5C06\u4F1A\u4E3A\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5355\u5143\u6D4B\u8BD5\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5173\u4E8EUser\u63A7\u5236\u5668\u7684\u5355\u5143\u6D4B\u8BD5\u6211\u4EEC\u5C31\u5199\u5728\u8FD9\u4E2A\u91CC\u9762</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631862921441-56d5230b-68c0-4353-a4f1-8e971331f5f1.png" alt="img"></p><p>\u8FD9\u91CC\u6211\u4EEC\u5E76\u4E0D\u4F7F\u7528MSTest\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p>\u521B\u5EFA\u57FA\u7C7B\u6587\u4EF6BaseTest</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class BaseTest
{
    protected readonly ITestOutputHelper Output;
    public BaseTest(ITestOutputHelper output)
    {
        Output = output;
    }

    public string SerializeObject(object obj)
    {
        JsonSerializerSettings settings = new JsonSerializerSettings
        {
            Formatting = Formatting.Indented,
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };
        return JsonConvert.SerializeObject(obj, settings);
    }
}

/// &lt;summary&gt;
/// \u6784\u5EFAwebhost
/// &lt;/summary&gt;
public class BaseWebHostTest : BaseTest
{
    protected readonly TestServer Server;
    public BaseWebHostTest(ITestOutputHelper helper) : base(helper)
    {
        var service = Host.CreateDefaultBuilder()
                            .ConfigureWebHostDefaults(webBuilder =&gt;
                            {
                                webBuilder.UseStartup&lt;Startup&gt;();
                            }).Build().Services;
        Server = new TestServer(service);
    }
}

/// &lt;summary&gt;
/// \u53EA\u662F\u6D4B\u8BD5\u63A7\u5236\u5668Api
/// &lt;/summary&gt;
public class BaseHostTest : BaseTest
{
    protected readonly TestServer Server;
    public BaseHostTest(ITestOutputHelper helper) : base(helper)
    {
        Server = new TestServer(WebHost.CreateDefaultBuilder()
                .UseEnvironment(&quot;Development&quot;)//\u6D4B\u8BD5\u4F7F\u7528
                .UseStartup&lt;Startup&gt;());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5api" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5api" aria-hidden="true">#</a> \u6D4B\u8BD5API</h2><p>\u5C31\u4EE5\u6F14\u793A\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u6D4B\u8BD5\u8C03\u7528\u63A5\u53E3\u540E\u662F\u5426\u8FD4\u56DE\u72B6\u6001\u7801\u4E3A200</p><p>\u7F16\u5199\u6784\u9020\u51FD\u6570\u5E76\u8D4B\u503CHttpClient</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public UserControllerTests(ITestOutputHelper helper) : base(helper)
{
    Client = Server.CreateClient();

    //var token = &quot;&quot;; // \u53EF\u4EE5\u5BF9HttpClient\u8FDB\u884C\u4E00\u4E9B\u81EA\u5B9A\u8BF7\u6C42\u5934\u7B49\u64CD\u4F5C
    //Client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(&quot;Bearer&quot;, token);
}

public HttpClient Client { get; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Fact()]
public async Task Get_User_ReturnOk()
{
    //Arrange  \u8D4B\u503C\u533A\u57DF
            
    //Act
    var response = await Client.GetAsync(&quot;api/user/getlist&quot;);

    //Assert
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);

    Output.WriteLine(await response.Content.ReadAsStringAsync());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5199\u5355\u5143\u6D4B\u8BD5\u4E00\u822C\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF1AArrange\uFF0CAct \u548C Assert\u3002</p><ul><li><p><strong>Arrange</strong> \u662F\u51C6\u5907\u9636\u6BB5\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u662F\u51C6\u5907\u5DE5\u4F5C\uFF0C\u6BD4\u5982\u6A21\u62DF\u6570\u636E\u3001\u521D\u59CB\u5316\u5BF9\u8C61\u7B49\uFF1B</p></li><li><p><strong>Act</strong> \u662F\u884C\u4E3A\u9636\u6BB5\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u662F\u7528\u51C6\u5907\u597D\u7684\u6570\u636E\u53BB\u8C03\u7528\u8981\u6D4B\u8BD5\u7684\u65B9\u6CD5\uFF1B</p></li><li><p><strong>Assert</strong> \u662F\u65AD\u5B9A\u9636\u6BB5\uFF0C\u5C31\u662F\u628A\u8C03\u7528\u76EE\u6807\u65B9\u6CD5\u8FD4\u56DE\u7684\u503C\u548C\u9884\u671F\u7684\u503C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u548C\u9884\u671F\u4E00\u81F4\u8BF4\u660E\u6D4B\u8BD5\u901A\u8FC7\uFF0C\u5426\u5219\u4E3A\u5931\u8D25\u3002</p></li></ul><p>\u70B9\u51FB\u65B9\u6CD5\u540D\u5B57\u53F3\u952E\u8FD0\u884C\u6D4B\u8BD5\u6216\u8005\u8C03\u8BD5\u6D4B\u8BD5</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631874394991-3f491644-f098-4e5f-9f48-72026408a39b.png" alt="img"></p><h2 id="\u6D4B\u8BD5\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u65B9\u6CD5" aria-hidden="true">#</a> \u6D4B\u8BD5\u65B9\u6CD5</h2><p>\u6BD4\u5982\u6211\u4EEC\u53BB\u5BF9IUserService\u91CC\u9762\u7684GetListAsync\u505A\u5355\u5143\u6D4B\u8BD5,\u7EE7\u627F\u81EA\u516C\u5171\u7C7B\uFF0C\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165\u83B7\u53D6IUserService\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class UserServiceTest : BaseWebHostTest
{
    private readonly IUserService _userService;

    public UserServiceTest(ITestOutputHelper helper) : base(helper)
    {
        _userService = Server.Services.GetRequiredService&lt;IUserService&gt;();
    }

    [Fact]
    public async Task GetUser_ReturnOk()
    {
        //Arrange\uFF1A\u51C6\u5907\u9636\u6BB5 

        //Act\uFF1A\u884C\u4E3A\u9636\u6BB5
        var response = await _userService.GetListAsync();

        //Assert\uFF1A\u65AD\u8A00\u9636\u6BB5
        Assert.NotNull(response);
        Output.WriteLine(JsonConvert.SerializeObject(response));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70B9\u51FB\u65B9\u6CD5\u540D\u5B57\u53F3\u952E\u8FD0\u884C\u6D4B\u8BD5\u6216\u8C03\u8BD5\u6D4B\u8BD5</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631951731438-958b27ff-d92e-4587-9e83-d7d342776be6.png" alt="img"></p><p>\u5355\u5143\u6D4B\u8BD5\u6210\u529F</p><h2 id="\u5E76\u884C\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5E76\u884C\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> \u5E76\u884C\u8FD0\u884C\u6D4B\u8BD5</h2><p>\u5728Xunit\u76842.x\u7248\u672C\u4EE5\u540E\u652F\u6301\u5E76\u884C\u8FD0\u884C\u6D4B\u8BD5\u3002\u8FD9\u6837\u5B50\u76F8\u6BD4\u5982\u4E4B\u524D\u53EF\u4EE5\u66F4\u597D\u5229\u7528\u670D\u52A1\u5668\u6027\u80FD\u3002</p><p>\u65B0\u5EFA\u6D4B\u8BD5\u7C7BRunnerTimeTest\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class RunnerTimeTest
{
    [Fact]
    public void Test1()
    {
        Thread.Sleep(2000);
    }

    [Fact]
    public void Test2()
    {
        Thread.Sleep(3000);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u731C\u4E00\u4E0B\u8FD0\u884C\u8BE5\u6D4B\u8BD5\u7C7B\u7684\u8BDD\u9700\u8981\u8017\u65F6\u591A\u5C11\uFF1F2s\uFF1F3s\uFF1F</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631876238234-b6957159-6ddf-4415-b19e-974ae7084451.png" alt="img"></p><p>\u901A\u8FC7\u8FD9\u4E2A\u7ED3\u679C\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u6765\u4E00\u4E2A\u6D4B\u8BD5\u7C7B\u5185\u5E76\u4E0D\u662F\u5E76\u884C\u6267\u884C\u7684\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6BCF\u4E00\u4E2A\u6D4B\u8BD5\u7C7B\u90FD\u662F\u4E00\u4E2A\u552F\u4E00\u7684\u6D4B\u8BD5\u96C6\u5408\uFF0C\u540C\u4E00\u4E2A\u6D4B\u8BD5\u7C7B\u7684\u6D4B\u8BD5\u4E0D\u4F1A\u5F7C\u6B64\u5E76\u884C\u8FD0\u884C\u3002\u90A3\u4E48\u6211\u4EEC\u5C06\u8FD9\u4E24\u4E2A\u6D4B\u8BD5\u65B9\u6CD5\u5206\u522B\u653E\u5165\u4E0D\u540C\u7684\u6D4B\u8BD5\u7C7B\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class RunnerTimeTest
{
    [Fact]
    public void Test1()
    {
        Thread.Sleep(2000);
    }
}

public class RunnerTimeTest2
{
    [Fact]
    public void Test2()
    {
        Thread.Sleep(3000);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u67E5\u770B\u6548\u679C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631877298918-c66d17bd-c606-4915-8650-26f3d4f4ab17.png" alt="img"></p><p>\u53EF\u4EE5\u5F97\u5230\u4E0D\u540C\u7684\u6D4B\u8BD5\u7C7B\u4E4B\u95F4\u662F\u5E76\u884C\u6267\u884C\u7684\u3002</p><h1 id="\u6279\u8BC4" tabindex="-1"><a class="header-anchor" href="#\u6279\u8BC4" aria-hidden="true">#</a> \u6279\u8BC4</h1><p>\u8FD9\u4E2A\u662F\u6211\u7406\u89E3\u7684\u5355\u5143\u6D4B\u8BD5\u6837\u5B50\uFF0C\u4F46\u662F\u7ECF\u8FC7\u540C\u4E8B\u7684\u4E25\u5389\u6279\u8BC4\uFF0C\u6211\u77E5\u9053\u4E86\u5E94\u8BE5\u4F7F\u7528\u5355\u4E00\u53D8\u91CF\u539F\u5219\uFF0C\u63A7\u5236\u4E00\u5904\u4E0D\u540C\uFF0C\u5176\u4ED6\u53D8\u91CF\u4FDD\u6301\u76F8\u540C\uFF0C\u800C\u4E0D\u662F\u50CF\u8BE5\u6587\u7AE0\u4E00\u6837\uFF0C\u4F9D\u8D56\u9879\u4E0D\u53EF\u63A7\u3002</p><h1 id="\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a> \u8D44\u6599</h1><p>\u547D\u4EE4\u884C\u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE\uFF1Ahttps://xunit.net/docs/getting-started/netcore/cmdline</p><p>ASP.NET Core\u5355\u5143\u6D4B\u8BD5\uFF1Ahttps://www.cnblogs.com/willick/p/aspnetcore-unit-tests-with-xunit.html</p><p>\u5E76\u884C\u8FD0\u884C\u6D4B\u8BD5\uFF1Ahttps://xunit.net/docs/running-tests-in-parallel</p>`,57),r=[t];function a(d,v){return i(),n("div",null,r)}const u=e(l,[["render",a],["__file","base-use-dissent.html.vue"]]);export{u as default};
