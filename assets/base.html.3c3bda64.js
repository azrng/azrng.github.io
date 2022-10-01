import{_ as l,o as t,c as r,b as i,e as d,a as n,d as e,r as a}from"./app.565765f9.js";const u={},v=n(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u6A21\u578B\u7ED1\u5B9A\u5C31\u662F\u63A5\u6536\u5C06\u6765\u81EAHTTP\u8BF7\u6C42\u7684\u6570\u636E\u6620\u5C04\u5230\u6A21\u578B\u7684\u8FC7\u7A0B\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u81EA\u52A8\u8FDB\u884C\u7684\u3002\u5982\u679C\u627E\u4E0D\u5230\u6A21\u578B\u5C5E\u6027\u7684\u503C\uFF0C\u5E76\u4E0D\u4F1A\u62A5\u9519\uFF0C\u800C\u662F\u7ED9\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002</p><p>\u793A\u4F8B\uFF1A\u6BD4\u5982\u6211\u4EEC\u6709\u4E00\u4E2A\u63A5\u53E3\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[HttpGet(&quot;{id}&quot;)]
public ActionResult&lt;Pet&gt; GetById(int id, bool dogsOnly)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=e("\u8FD9\u4E2A\u65F6\u5019\u4F60\u7684\u8BF7\u6C42\u4E3A\uFF1A"),c={href:"http://contoso.com/api/pets/2?DogsOnly=true",target:"_blank",rel:"noopener noreferrer"},m=e("http://localhost:5000/api/pets/2?DogsOnly=true"),b=n(`<p>\u8DEF\u7531\u7CFB\u7EDF\u9009\u62E9\u8BE5Action\u540E\uFF0C\u6A21\u578B\u7ED1\u5B9A\u4F1A\u6267\u884C\u4EE5\u4E0B\u7684\u6B65\u9AA4\uFF1A</p><ul><li><p>\u67E5\u627E <code>GetByID</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u540D\u4E3A <code>id</code> \u7684\u6574\u6570\u3002</p></li><li><p>\u67E5\u627E HTTP \u8BF7\u6C42\u4E2D\u7684\u53EF\u7528\u6E90\uFF0C\u5E76\u5728\u8DEF\u7531\u6570\u636E\u4E2D\u67E5\u627E <code>id</code> =\u201C2\u201D\u3002</p></li><li><p>\u5C06\u5B57\u7B26\u4E32\u201C2\u201D\u8F6C\u6362\u4E3A\u6574\u6570 2\u3002</p></li><li><p>\u67E5\u627E <code>GetByID</code> \u7684\u4E0B\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u540D\u4E3A <code>dogsOnly</code> \u7684\u5E03\u5C14\u503C\u3002</p></li><li><p>\u67E5\u627E\u6E90\uFF0C\u5E76\u5728\u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u201CDogsOnly=true\u201D\u3002 \u540D\u79F0\u5339\u914D\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002</p></li><li><p>\u5C06\u5B57\u7B26\u4E32\u201Ctrue\u201D\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C <code>true</code>\u3002</p></li></ul><p>\u6700\u540E\u4F1A\u8C03\u7528GetById\u65B9\u6CD5\uFF0C\u53C2\u6570Id\u4E3A2\uFF0C\u53C2\u6570dogsOnly\u4E3Atrue\u3002</p><h1 id="\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6E90" aria-hidden="true">#</a> \u6E90</h1><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6A21\u578B\u7ED1\u5B9A\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u4ECEHTTP\u8BF7\u6C42\u4E2D\u7684\u4EE5\u4E0B\u6E90\u4E2D\u83B7\u53D6\u6570\u636E\uFF1A</p><ol><li><p>\u8868\u5355\u57DF</p></li><li><p>\u8BF7\u6C42\u6B63\u6587</p></li><li><p>\u8DEF\u7531\u6570\u636E</p></li><li><p>\u67E5\u8BE2\u5B57\u7B26\u4E32\u53C2\u6570</p></li><li><p>\u4E0A\u4F20\u7684\u6587\u4EF6</p></li></ol><p>\u5BF9\u4E8E\u6BCF\u4E2A\u53C2\u6570\uFF0C\u6309\u7167\u987A\u5E8F\u626B\u63CF\u6E90\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u6E90</p><ul><li><p>[FromQuery] - \u4ECE\u67E5\u8BE2\u5B57\u7B26\u4E32\u83B7\u53D6\u503C\u3002</p></li><li><p>[FromRoute] - \u4ECE\u8DEF\u7531\u6570\u636E\u83B7\u53D6\u503C\u3002</p></li><li><p>[FromForm] - \u4ECE\u53D1\u5E03\u8868\u5355\u5B57\u6BB5\u4E2D\u83B7\u53D6\u503C\u3002</p></li><li><p>[FromBody] - \u4ECE\u8BF7\u6C42\u6B63\u6587\u83B7\u53D6\u503C\u3002</p></li><li><p>[FromHeader] - \u4ECE HTTP \u6807\u5934\u83B7\u53D6\u503C\u3002</p></li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[HttpGet]
public async Task&lt;User&gt; GetAsync([FromQuery]string id)
    
[HttpGet]
public async Task&lt;User&gt; GetAsync([FromRoute]string id)
    
[HttpGet]
public async Task&lt;User&gt; GetAsync([FromForm]string id)
    
[HttpPost]
public async Task&lt;ActionResult&lt;string&gt;&gt; AddAsync([FromBody]AddUserVm dto)
    
public void OnGet([FromHeader(Name = &quot;Accept-Language&quot;)] string language)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u7F16\u5199\u81EA\u5B9A\u4E49\u7684\u503C\u63D0\u4F9B\u7A0B\u5E8F\uFF0C\u6BD4\u5982\u4ECEcookie\u4E2D\u83B7\u53D6\u4F1A\u8BDD\u72B6\u6001\uFF0C\u53C2\u8003\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#additional-sources</p><h1 id="\u6A21\u578B\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u7ED1\u5B9A" aria-hidden="true">#</a> \u6A21\u578B\u7ED1\u5B9A</h1><h2 id="\u7B80\u5355\u6A21\u578B\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u6A21\u578B\u7ED1\u5B9A" aria-hidden="true">#</a> \u7B80\u5355\u6A21\u578B\u7ED1\u5B9A</h2><p>\u4F8B\u5982\uFF1Abool\u3001byte\u3001char\u3001DateTime\u3001DateTimeOffset\u3001float\u3001enum\u3001guid\u3001int\u3001TimeSpan\u3001Url\u3001Version\u7B49</p><h2 id="\u590D\u6742\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u7C7B\u578B" aria-hidden="true">#</a> \u590D\u6742\u7C7B\u578B</h2><p>\u4F7F\u7528\u590D\u6742\u7C7B\u578B\u5FC5\u987B\u5177\u6709\u8981\u7ED1\u5B9A\u7684\u516C\u5171\u9ED8\u8BA4\u6784\u9020\u51FD\u6570\u548C\u516C\u5171\u53EF\u5199\u5C5E\u6027\u3002\u8FDB\u884C\u6A21\u578B\u7ED1\u5B9A\u65F6\u5019\uFF0C\u5C06\u4F7F\u7528\u516C\u5171\u9ED8\u8BA4\u6784\u9020\u51FD\u6570\u6765\u5B9E\u4F8B\u5316\u7C7B\u3002\u5BF9\u4E8E\u590D\u6742\u7C7B\u578B\u7684\u6BCF\u4E2A\u5C5E\u6027\uFF0C\u6A21\u578B\u7ED1\u5B9A\u4F1A\u67E5\u627E\u540D\u79F0\u6A21\u5F0F prefix.property_name \u7684\u6E90\u3002 \u5982\u679C\u672A\u627E\u5230\uFF0C\u5B83\u5C06\u4EC5\u67E5\u627E\u4E0D\u542B\u524D\u7F00\u7684 properties_name\u3002\u4E0D\u8FC7\u4E00\u822C\u6211\u4EEC\u4F7F\u7528\u90FD\u662F\u8FDB\u884C\u5B8C\u5168\u5339\u914D\uFF0C\u7279\u6B8A\u9700\u6C42\u624D\u4F1A\u505A\u6B64\u64CD\u4F5C\u3002</p><p>\u53C2\u8003\u8D44\u6599\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#complex-types</p><h2 id="\u5185\u7F6E\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A" aria-hidden="true">#</a> \u5185\u7F6E\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A</h2><p>\u901A\u8FC7<code>ByteArrayModelBinder</code> \u53EF\u4EE5\u5B9E\u73B0\u5C06\u4F20\u8F93\u7684base64\u7F16\u7801\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5B57\u8282\u6570\u7EC4\u3002</p><p>\u6BD4\u5982:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        [HttpPost]
        public void Post([FromForm] byte[] file, string filename)
        {
            var trustedFileName = Path.GetRandomFileName();
            var filePath = Path.Combine(&quot;e://&quot;, trustedFileName);

            if (System.IO.File.Exists(filePath))
            {
                return;
            }

            System.IO.File.WriteAllBytes(filePath, file);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6C42\u793A\u4F8B</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1623573025670-a091a4da-90ce-4dec-b630-43ccaebabf91.png" alt="img"></p><p>\u63A5\u6536\u7ED3\u679C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1623573080249-e2bc5bfc-bc98-490d-99cc-c5556f26f457.png" alt="img"></p><h2 id="\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A</h2><p>\u793A\u4F8B\u573A\u666F\uFF1A\u901A\u8FC7\u8BF7\u6C42\u5934\u4F20\u9012\u540E\u7AEF\u81EA\u5B9A\u4E49\u7684\u4E00\u79CDtoken\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A\u5C06token\u89E3\u6790\u540E\u7ED1\u5B9A\u5230\u8BF7\u6C42\u6A21\u578B\u3002</p><p>\u53C2\u8003\u8D44\u6599\uFF1Ahttps://www.cnblogs.com/jyzhu/articles/8670536.html</p><p>\u8BF7\u6C42\u63A5\u53E3\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        [HttpGet]
        public ActionResult GetToken(TokenModel dto)
        {
            return Ok(dto);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u5B9A\u4E49token\u6A21\u578B\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class TokenModel
    {
        public int UserID { get; set; }

        public string UserName { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u5B9A\u4E49\u6A21\u578B\u7ED1\u5B9A\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class TokenModelBinder : IModelBinder
    {
        /// &lt;summary&gt;
        /// \u8BF7\u6C42\u91CC\u4F20\u9012\u53C2\u6570token
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;bindingContext&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            //\u53C2\u6570\u5FC5\u987B\u5305\u542Btoken
            if (!(bindingContext.ActionContext.HttpContext.Request.Headers.ContainsKey(&quot;token&quot;)))
                return Task.CompletedTask;

            var token = bindingContext.ActionContext.HttpContext.Request.Headers[&quot;token&quot;];

            //TODO  \u89E3\u6790token
            var result = new TokenModel()
            {
                UserID = 111,
                UserName = &quot;azrng&quot;,
            };
            bindingContext.Result = ModelBindingResult.Success(result);
            return Task.CompletedTask;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49token\u6846\u67B6\u7ED1\u5B9A\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class TokenModelBinderProvider : IModelBinderProvider
    {
        public IModelBinder GetBinder(ModelBinderProviderContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (context.Metadata.ModelType == typeof(TokenModel))
                return new TokenModelBinder();

            return null;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u7528\u7ED1\u5B9A\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    services.AddControllers(options =&gt;
    {
        options.ModelBinderProviders.Insert(0, new TokenModelBinderProvider());
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6C42\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var client = new RestClient(&quot;http://localhost:5000/api/ModelVerify/GetToken&quot;);
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader(&quot;token&quot;, &quot;123456&quot;);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5C31\u662F\u53EF\u4EE5\u5728GetToken\u65B9\u6CD5\u53C2\u6570\u83B7\u53D6\u5230\u6211\u4EECtoken\u7684\u503C\u3002</p><h1 id="\u6A21\u578B\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u6821\u9A8C" aria-hidden="true">#</a> \u6A21\u578B\u6821\u9A8C</h1>`,42),p=e("\u73B0\u5728dotNetCore\u5982\u679C\u5728\u63A7\u5236\u5668\u6807\u8BC6[ApiController],\u90A3\u4E48\u5C31\u4F1A\u5728\u8FDBaction\u524D\u5C31\u4F1A\u81EA\u52A8\u6821\u9A8C\u6A21\u578B\u7C7B\u7ED1\u5B9A\u662F\u5426\u7B26\u5408\u8981\u6C42\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\u8981\u6C42\u81EA\u52A8\u89E6\u53D1HTTP400\u9519\u8BEF\u54CD\u5E94\u3002"),g={href:"https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#automatic-http-400-responses",target:"_blank",rel:"noopener noreferrer"},q=e("\u539F\u6587"),h=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[ApiController]
[Route(&quot;[controller]&quot;)]
public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9A8C\u8BC1\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u7279\u6027" aria-hidden="true">#</a> \u9A8C\u8BC1\u7279\u6027</h2><p>\u901A\u8FC7\u9A8C\u8BC1\u7279\u6027\u53EF\u4E3A\u5C5E\u6027\u589E\u52A0\u9A8C\u8BC1\u89C4\u5219\u3002\u4E0D\u4EC5\u4EC5\u6709\u5185\u7F6E\u7684\u9A8C\u8BC1\u7279\u6027\uFF0C\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u7279\u6027\u3002</p><h3 id="\u5185\u7F6E\u9A8C\u8BC1\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u9A8C\u8BC1\u7279\u6027" aria-hidden="true">#</a> \u5185\u7F6E\u9A8C\u8BC1\u7279\u6027</h3><p>\u5E38\u7528\u7684\u6709\uFF1A\u5FC5\u586B\u3001\u957F\u5EA6\u9A8C\u8BC1\u3001\u6570\u503C\u8303\u56F4\u3001\u624B\u673A\u53F7\u7801\u3001\u90AE\u7BB1\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u9A8C\u8BC1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class AddModelVerify
    {
        [Display(Name = &quot;\u540D\u79F0&quot;), Required(ErrorMessage = &quot;{0}\u4E0D\u80FD\u4E3A\u7A7A&quot;)]// \u975E\u7A7A\u6821\u9A8C 
        [MinLength(6, ErrorMessage = &quot;\u540D\u79F0\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&quot;)] // \u6700\u5C0F\u957F\u5EA6\u6821\u9A8C
        [MaxLength(10, ErrorMessage = &quot;\u957F\u5EA6\u4E0D\u8D85\u8FC710\u4E2A&quot;)] // \u6700\u5927\u957F\u5EA6\u6821\u9A8C
        public string UserName { get; set; }

        /// &lt;summary&gt;
        /// \u5BC6\u7801
        /// &lt;/summary&gt;
        [Display(Name = &quot;\u5BC6\u7801&quot;), Required(ErrorMessage = &quot;{0}\u4E0D\u80FD\u4E3A\u7A7A&quot;)]
        [MinLength(6, ErrorMessage = &quot;\u5BC6\u7801\u5FC5\u987B\u5927\u4E8E6\u4F4D&quot;)]
        public string PassWord { get; set; }

        [Display(Name = &quot;\u5DE5\u53F7&quot;)] // \u53CB\u597D\u540D\u79F0\u9519\u8BEF\u63D0\u793A
        [Required(ErrorMessage = &quot;{0}\u4E0D\u80FD\u4E3A\u7A7A&quot;)]
        [StringLength(10, MinimumLength = 1, ErrorMessage = &quot;{0}\u957F\u5EA6\u662F{1}&quot;)]
        public string EmployeeNo { get; set; }
    }

	public IActionResult VerifyPhone([RegularExpression(@&quot;^\\d{3}-\\d{3}-\\d{4}$&quot;)] string phone)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u4E0A\u9762\u8FD9\u4E9B\u8FD8\u6709\u5176\u4ED6\u5185\u7F6E\u7279\u6027\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#built-in-attributes</p><p>\u8BF7\u6C42\u5730\u5740\u4F20\u5165\u7A7A\u503C\uFF0C\u8F93\u51FA\u7ED3\u679C\uFF1AHTTP\u9519\u8BEF400</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;errors&quot;: {
    &quot;PassWord&quot;: [
      &quot;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A&quot;,
      &quot;\u5BC6\u7801\u5FC5\u987B\u5927\u4E8E6\u4F4D&quot;
    ],
    &quot;UserName&quot;: [
      &quot;\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A&quot;,
      &quot;\u540D\u79F0\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&quot;
    ],
    &quot;EmployeeNo&quot;: [
      &quot;\u5DE5\u53F7\u4E0D\u80FD\u4E3A\u7A7A&quot;,
      &quot;\u5DE5\u53F7\u957F\u5EA6\u662F10&quot;
    ]
  },
  &quot;type&quot;: &quot;https://tools.ietf.org/html/rfc7231#section-6.5.1&quot;,
  &quot;title&quot;: &quot;One or more validation errors occurred.&quot;,
  &quot;status&quot;: 400,
  &quot;traceId&quot;: &quot;00-d16b945b3e172a42bfe5b53d08f7487b-8d87c2ca238fdc4a-00&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u6709\u4E00\u4E2ARemote\u7279\u6027\u611F\u89C9\u633A\u6709\u610F\u601D\uFF0C\u4F7F\u7528\u573A\u666F\u662F\u6BD4\u5982\u5728ID\u4E0A\u6807\u6CE8\u8FDC\u7A0B\u7279\u6027\uFF0C\u7ED1\u5B9A\u65F6\u5019\u81EA\u5B9A\u9A8C\u8BC1ID\u662F\u5426\u6709\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[AcceptVerbs(&quot;GET&quot;, &quot;POST&quot;)]
public IActionResult VerifyID(string id)
{
    if (!_userService.VerifyID(id))
    {
        return Json($&quot;\u5BF9\u8C61\u672A\u627E\u5230&quot;);
    }
    return Json(true);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6A21\u578B\u7C7B\u4F7F\u7528\u6307\u5411\u64CD\u4F5C\u65B9\u6CD5\u7684[Remote]\u7279\u6027\u6CE8\u91CA\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Remote(action: &quot;VerifyID&quot;, controller: &quot;Users&quot;)]
public string ID { get; set; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Remote\u5176\u4ED6\u7528\u6CD5\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#additional-fields</p><h3 id="\u81EA\u5B9A\u4E49\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7279\u6027" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7279\u6027</h3><p>\u5BF9\u4E8E\u5185\u7F6E\u9A8C\u8BC1\u7279\u6027\u65E0\u6CD5\u5904\u7406\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u7279\u6027\u3002</p><p>\u6A21\u62DF\u573A\u666F\uFF1A\u6DFB\u52A0\u7528\u6237\u65F6\u5019\uFF0C\u8BBE\u7F6E\u540D\u5B57\u548C\u5DE5\u53F7\u4E0D\u80FD\u4E00\u81F4\uFF0C\u51FA\u751F\u65E5\u671F\u5FC5\u987B\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4</p><p>\u8F93\u5165\u6A21\u578B\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class AddUserinfoVm
    {
        [Display(Name = &quot;\u540D\u79F0&quot;), Required(ErrorMessage = &quot;{0}\u4E0D\u80FD\u4E3A\u7A7A&quot;)]
        [MinLength(6, ErrorMessage = &quot;\u540D\u79F0\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&quot;)]
        [MaxLength(10, ErrorMessage = &quot;\u957F\u5EA6\u4E0D\u8D85\u8FC710\u4E2A&quot;)]
        public string UserName { get; set; }

        /// &lt;summary&gt;
        /// \u5BC6\u7801
        /// &lt;/summary&gt;
        [Display(Name = &quot;\u5BC6\u7801&quot;), Required(ErrorMessage = &quot;{0}\u4E0D\u80FD\u4E3A\u7A7A&quot;)]
        [MinLength(6, ErrorMessage = &quot;\u5BC6\u7801\u5FC5\u987B\u5927\u4E8E6\u4F4D&quot;)]
        public string PassWord { get; set; }

        [Display(Name = &quot;\u5DE5\u53F7&quot;)]
        [Required(ErrorMessage = &quot;{0}\u4E0D\u80FD\u4E3A\u7A7A&quot;)]
        [StringLength(10, MinimumLength = 1, ErrorMessage = &quot;{0}\u957F\u5EA6\u662F{1}&quot;)]
        public string EmployeeNo { get; set; }

        /// &lt;summary&gt;
        /// \u51FA\u751F\u65E5\u671F
        /// &lt;/summary&gt;
        public DateTime Birthday { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6848\u4E00\uFF1A\u901A\u8FC7\u6DFB\u52A0AddUserVerifyAttribute\u6765\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    [AttributeUsage(AttributeTargets.All, AllowMultiple = false)]
    public class AddUserVerifyAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var user = (AddUserinfoVm)validationContext.ObjectInstance;//user \u53D8\u91CF\u8868\u793A AddUserinfoVm \u5BF9\u8C61\uFF0C\u5176\u4E2D\u5305\u542B\u8868\u5355\u63D0\u4EA4\u4E2D\u7684\u6570\u636E
            var date = (DateTime)value;
            if (date &gt; DateTime.Now)
            {
                return new ValidationResult(&quot;\u51FA\u751F\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u5F53\u524D\u65F6\u95F4&quot;);
            }
            if (user.UserName == user.EmployeeNo)
            {
                return new ValidationResult(&quot;\u540D\u79F0\u548C\u5DE5\u53F7\u4E0D\u80FD\u4E00\u6837&quot;);
            }
            return ValidationResult.Success;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        [AddUserVerify]
        public DateTime Birthday { get; set; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6848\u4E8C\uFF1A\u6A21\u578B\u7C7B\u4E2D\u7EE7\u627FIValidatableObject\uFF0C\u5E76\u5B9E\u73B0Validate\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        /// &lt;summary&gt;
        /// \u5C5E\u6027\u7EA7\u522B\u7684\u81EA\u5B9A\u4E49\u9A8C\u8BC1
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;validationContext&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;   
        public IEnumerable&lt;ValidationResult&gt; Validate(ValidationContext validationContext)
        {
            if (Birthday &gt; DateTime.Now)
            {
                yield return new ValidationResult(&quot;\u51FA\u751F\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u5F53\u524D\u65F6\u95F4&quot;, new[] { nameof(Birthday) });
            }
            if (UserName == EmployeeNo)
            {
                yield return new ValidationResult(&quot;\u540D\u79F0\u548C\u5DE5\u53F7\u4E0D\u80FD\u4E00\u6837&quot;, new[] { nameof(UserName), nameof(EmployeeNo) });
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;userName&quot;: &quot;string&quot;,
  &quot;passWord&quot;: &quot;string&quot;,
  &quot;employeeNo&quot;: &quot;string&quot;,
  &quot;birthday&quot;: &quot;2021-06-15T14:34:52.192Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;errors&quot;: {
    &quot;Birthday&quot;: [
      &quot;\u51FA\u751F\u65E5\u671F\u4E0D\u80FD\u5927\u4E8E\u5F53\u524D\u65F6\u95F4&quot;
    ],
    &quot;UserName&quot;: [
      &quot;\u540D\u79F0\u548C\u5DE5\u53F7\u4E0D\u80FD\u4E00\u6837&quot;
    ],
    &quot;EmployeeNo&quot;: [
      &quot;\u540D\u79F0\u548C\u5DE5\u53F7\u4E0D\u80FD\u4E00\u6837&quot;
    ]
  },
  &quot;type&quot;: &quot;https://tools.ietf.org/html/rfc7231#section-6.5.1&quot;,
  &quot;title&quot;: &quot;One or more validation errors occurred.&quot;,
  &quot;status&quot;: 400,
  &quot;traceId&quot;: &quot;00-18854d59f6b6fc48b5c4c6a6dbe3802c-ba23f594f351a64d-00&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modelstate-isvalid" tabindex="-1"><a class="header-anchor" href="#modelstate-isvalid" aria-hidden="true">#</a> ModelState.IsValid</h2><p>\u901A\u8FC7\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u8BF7\u6C42\u7C7B\u9A8C\u8BC1\u662F\u5426\u6EE1\u8DB3\u8981\u6C42\u5E76\u505A\u51FA\u76F8\u5E94\u7684\u54CD\u5E94\u3002</p><p>\u5982\u679C\u5DF2\u7ECF\u4F7F\u7528[ApiController]\u6807\u8BC6\uFF0C\u90A3\u4E48\u8BE5\u65B9\u6CD5\u5C31\u4E0D\u5728\u9700\u8981\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        [HttpPost]
        public ActionResult Add([FromBody] AddModelVerify dto)
        {
            //\u5BF9\u8BF7\u6C42\u7C7B\u8FDB\u884C\u9A8C\u8BC1\u7279\u6027
            if (ModelState.IsValid)//\u6307\u793A\u8BE5\u6A21\u578B\u4E2D\u662F\u5426\u6709\u65E0\u6548\u7684\u503C
            {
                //\u5BF9\u8BF7\u6C42\u7C7B\u7684\u503C\u505A\u51FA\u4FEE\u6539
                dto.UserName = &quot;azrng&quot;;
                if (!TryValidateModel(dto))
                {
                    //\u91CD\u65B0\u8FD0\u884C\u9A8C\u8BC1\u5931\u8D25
                    return Ok(&quot;\u4FEE\u6539\u503C\u540E\u9A8C\u8BC1\u5931\u8D25&quot;);
                }
                return Ok(&quot;\u9A8C\u8BC1\u6210\u529F&quot;);
            }
            else
            {
                ModelState.AddModelError(string.Empty, &quot;\u8F93\u5165\u6709\u8BEF&quot;);
            }
            return Ok(&quot;&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7981\u7528\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u9A8C\u8BC1" aria-hidden="true">#</a> \u7981\u7528\u9A8C\u8BC1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// \u521B\u5EFA\u4E0D\u4F1A\u5C06\u4EFB\u4F55\u5B57\u6BB5\u6807\u8BB0\u4E3A\u65E0\u6548\u7684 IObjectModelValidator \u5B9E\u73B0\u3002
    /// &lt;/summary&gt;
    public class NullObjectModelValidator : IObjectModelValidator
    {
        public void Validate(ActionContext actionContext,
            ValidationStateDictionary validationState, string prefix, object model)
        {
            // \u8BE5\u65B9\u6CD5\u6545\u610F\u4E3A\u7A7A
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Startup.ConfigureServices\u4E2D\u6CE8\u5165\uFF0C\u4EE5\u4FBF\u66FF\u6362\u4F9D\u8D56\u9879\u6CE8\u5165\u5BB9\u5668\u4E2D\u7684\u9ED8\u8BA4 IObjectModelValidator \u5B9E\u73B0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddSingleton&lt;IObjectModelValidator, NullObjectModelValidator&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u7EDF\u4E00\u6A21\u578B\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u6A21\u578B\u62E6\u622A\u5668" aria-hidden="true">#</a> \u7EDF\u4E00\u6A21\u578B\u62E6\u622A\u5668</h1><p>\u589E\u52A0ModelActionFiter\u8FC7\u6EE4\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class ModelActionFiter : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errorResults = new List&lt;ErrorResultDTO&gt;();
                foreach (var item in context.ModelState)
                {
                    var result = new ErrorResultDTO
                    {
                        Field = item.Key,
                    };
                    foreach (var error in item.Value.Errors)
                    {
                        if (!string.IsNullOrEmpty(result.Message))
                        {
                            result.Message += &#39;|&#39;;
                        }
                        result.Message += error.ErrorMessage;
                    }
                    errorResults.Add(result);
                }
                context.Result = new BadRequestObjectResult(new
                {
                    Code = StatusCodes.Status400BadRequest,
                    Errors = errorResults
                });
            }
        }

        public class ErrorResultDTO
        {
            /// &lt;summary&gt;
            /// \u53C2\u6570\u9886\u57DF
            /// &lt;/summary&gt;
            public string Field { get; set; }

            /// &lt;summary&gt;
            /// \u9519\u8BEF\u4FE1\u606F
            /// &lt;/summary&gt;
            public string Message { get; set; }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\u6587\u6863\uFF1Ahttps://www.cnblogs.com/minskiter/p/11601873.html</p><p>ConfigureServices\u4E2D\u6CE8\u518C\u8FC7\u6EE4\u5668\u5E76\u7981\u7528\u9ED8\u8BA4\u7684\u81EA\u52A8\u6A21\u578B\u9A8C\u8BC1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    services.AddControllers(options =&gt;
    {
        options.Filters.Add&lt;ModelActionFiter&gt;(); //\u6CE8\u518C\u8FC7\u6EE4\u5668 
    }).AddNewtonsoftJson().ConfigureApiBehaviorOptions(options =&gt;
    {
        //[ApiController] \u9ED8\u8BA4\u81EA\u5E26\u6709400\u6A21\u578B\u9A8C\u8BC1\uFF0C\u4E14\u4F18\u5148\u7EA7\u6BD4\u8F83\u9AD8\uFF0C\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u6A21\u578B\u9A8C\u8BC1\uFF0C\u5219\u9700\u8981\u5148\u5173\u95ED\u9ED8\u8BA4\u7684\u6A21\u578B\u9A8C\u8BC1
        options.SuppressModelStateInvalidFilter = true; 
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),x=e("ASP.NET Core MVC \u4F7F\u7528 "),f={href:"https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.aspnetcore.mvc.infrastructure.modelstateinvalidfilter",target:"_blank",rel:"noopener noreferrer"},y=e("ModelStateInvalidFilter"),M=e(" \u64CD\u4F5C\u7B5B\u9009\u5668\u6765\u6267\u884C\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u3002"),A=n(`<p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;code&quot;: 400,
  &quot;errors&quot;: [
    {
      &quot;field&quot;: &quot;PassWord&quot;,
      &quot;message&quot;: &quot;\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A|\u5BC6\u7801\u5FC5\u987B\u5927\u4E8E6\u4F4D&quot;
    },
    {
      &quot;field&quot;: &quot;UserName&quot;,
      &quot;message&quot;: &quot;\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A|\u540D\u79F0\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1><blockquote><p>\u6A21\u578B\u7ED1\u5B9A\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0</p><p>\u7981\u7528\u7ED1\u5B9A\u6E90\u63A8\u7406\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-inference-rules</p><p>\u7981\u7528\u9A8C\u8BC1\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#disable-validation</p><p>\u7981\u7528\u81EA\u52A8400\u54CD\u5E94\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-automatic-400-response</p></blockquote>`,4);function T(k,R){const s=a("ExternalLinkIcon");return t(),r("div",null,[v,i("p",null,[o,i("a",c,[m,d(s)])]),b,i("p",null,[p,i("a",g,[q,d(s)])]),h,i("p",null,[x,i("a",f,[y,d(s)]),M]),A])}const _=l(u,[["render",T],["__file","base.html.vue"]]);export{_ as default};
