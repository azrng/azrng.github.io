import{_ as e,o as i,c as n,a as s}from"./app.565765f9.js";const d={},a=s(`<h2 id="\u5206\u5E03\u5F0F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7F13\u5B58" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7F13\u5B58</h2><p>\u5FAE\u8F6F\u7ED9netcore\u7684\u5206\u5E03\u5F0F\u7F13\u5B58\u63D0\u4F9B\u4E86Redis\u548CSqlserver\u7684\u5B9E\u73B0\uFF0C\u901A\u8FC7Sqlserver\u6765\u7F13\u5B58\u7684\u573A\u666F\u6BD4\u8F83\u5C11\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7B80\u5355\u770B\u4E00\u4E0B\u5B98\u65B9\u63D0\u4F9B\u7684Redis\u7F13\u5B58\u7528\u6CD5\u3002</p><h3 id="_1-\u5B89\u88C5redis" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5redis" aria-hidden="true">#</a> 1. \u5B89\u88C5redis</h3><p>\u8FD9\u91CC\u6211\u76F4\u63A5\u4F7F\u7528docker\u5B89\u88C5\u4E86redis</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass &quot;123456&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u547D\u4EE4\u8BF4\u660E\uFF1A</p><p>-p\uFF1A\u5BBF\u4E3B\u673A\u7AEF\u53E3\u4E0E\u5BB9\u5668\u7AEF\u53E3\u6620\u5C04\uFF0C\u524D\u9762\u7684\u7AEF\u53E3\u4E3A\u4E3B\u673A\u6620\u5C04\u7AEF\u53E3\uFF08\u9700\u914D\u7F6E\u670D\u52A1\u5668\u5B89\u5168\u7EC4\uFF09\uFF0C\u540E\u9762\u7684\u7AEF\u53E3\u4E3A\u955C\u50CF\u5F00\u653E\u7684\u7AEF\u53E3</p><p>--restart=always\uFF1A\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\u6302\u58C1\uFF0C\u603B\u662F\u91CD\u542F</p><p>--name\uFF1A\u5BB9\u5668\u540D\u79F0</p><p>-d\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u955C\u50CF\uFF0C\u5728\u540E\u53F0\u8FD0\u884C\u5BB9\u5668</p><p>--appendonly yes\uFF1Aredis\u8FD0\u884C\u65F6\u5F00\u542F\u6301\u4E45\u5316</p><p>--requirepass \u201C123456\u201D\uFF1A\u8BBE\u7F6Eredis\u767B\u5F55\u5BC6\u7801</p></blockquote><h3 id="_2-\u63A7\u5236\u53F0\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-\u63A7\u5236\u53F0\u7A0B\u5E8F" aria-hidden="true">#</a> 2. \u63A7\u5236\u53F0\u7A0B\u5E8F</h3><p>\u6DFB\u52A0Nuget\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u63A7\u5236\u53F0\u7A0B\u5E8F\u5B9E\u73B0\u4E00\u4E0Bnetcore\u4E2D\u7684\u5206\u5E03\u5F0F\u7F13\u5B58redis\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private static void Main(string[] args)
        {
            //\u83B7\u53D6RedisCache\u5B9E\u4F8B
            RedisCache redisCache = new RedisCache(new RedisCacheOptions()
            {
                Configuration = &quot;localhost:6379,password=123456&quot;,
                InstanceName = &quot;MyData&quot;
            });
            //\u5728redis\u4E2D\u662F\u4EE5hash\u8868\u7684\u6A21\u5F0F\u5B58\u653E\u7684
            redisCache.SetString(&quot;Name&quot;, &quot;jack&quot;);
            redisCache.SetString(&quot;Age&quot;, &quot;20&quot;);
            redisCache.SetString(&quot;Address&quot;, &quot;\u4E0A\u6D77&quot;, new DistributedCacheEntryOptions()
            {
                //SlidingExpiration = TimeSpan.FromSeconds(3)
                AbsoluteExpiration = DateTimeOffset.Now.AddDays(1)//\u8FC7\u671F\u65F6\u95F4
            });
            //\u83B7\u53D6\u7F13\u5B58
            Console.WriteLine(redisCache.GetString(&quot;Name&quot;));
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-web-api" tabindex="-1"><a class="header-anchor" href="#_2-1-web-api" aria-hidden="true">#</a> 2.1 Web API</h3><p>\u65B0\u5EFA\u4E00\u4E2Anet5 Web API\u5E94\u7528\u7A0B\u5E8F\u6DFB\u52A0Nuget\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u5165\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            services.AddStackExchangeRedisCache(options =&gt;
            {
                options.Configuration = &quot;localhost:6379,password=123456,defaultdatabase=1&quot;;
                options.InstanceName = &quot;MyData&quot;;
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F9D\u8D56\u6CE8\u5165\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private readonly IDistributedCache _cache;

        public WeatherForecastController(IDistributedCache cache)
        {
            _cache = cache;
        }

        [HttpGet]
        public async Task&lt;string&gt; TestAsync()
        {
            //\u6C38\u4E0D\u8FC7\u671F
            await _cache.SetAsync(&quot;add&quot;, Encoding.UTF8.GetBytes(&quot;\u5317\u4EAC&quot;));
            var add = await _cache.GetStringAsync(&quot;add&quot;);//\u5317\u4EAC

            //\u914D\u7F6E\u8FC7\u671F\u65F6\u95F4
            await _cache.SetStringAsync(&quot;Address&quot;, &quot;\u4E0A\u6D77&quot;, new DistributedCacheEntryOptions()
            {
                //SlidingExpiration = TimeSpan.FromSeconds(3)
                AbsoluteExpiration = DateTimeOffset.Now.AddDays(1)
            });
            var address = await _cache.GetStringAsync(&quot;Address&quot;);//\u4E0A\u6D77

            return &quot;&quot;;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[a];function r(l,c){return i(),n("div",null,t)}const v=e(d,[["render",r],["__file","redis.html.vue"]]);export{v as default};
