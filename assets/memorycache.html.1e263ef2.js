import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const a={},d=s(`<p>NetCore\u4E2D\u7684\u7F13\u5B58\u548CSystem.Runtime.Caching\u5F88\u76F8\u4F3C\uFF0C\u4F46\u662F\u5728\u529F\u80FD\u4E0A\u505A\u4E86\u589E\u5F3A\uFF0C\u7F13\u5B58\u7684key\u652F\u6301object\u7C7B\u578B\uFF1B\u63D0\u4F9B\u4E86\u6CDB\u578B\u652F\u6301\uFF1B\u53EF\u4EE5\u8BFB\u7F13\u5B58\u548C\u5355\u4E2A\u7F13\u5B58\u9879\u7684\u5927\u5C0F\u505A\u9650\u5B9A\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7F13\u5B58\u7684\u538B\u7F29\u6BD4\u4F8B\u3002</p><p>\u901A\u8FC7\u5B9E\u73B0\u5FAE\u8F6F\u5B98\u65B9\u7684Microsoft.Extensions.Caching\u91CC\u9762\u7684IDistributedCache\u63A5\u53E3\u5B9E\u73B0\u7F13\u5B58\u96C6\u6210\u5230ASPNETCore\u4E2D</p><h1 id="_1-memorycahe" tabindex="-1"><a class="header-anchor" href="#_1-memorycahe" aria-hidden="true">#</a> 1. MemoryCahe</h1><h2 id="_1-1-\u7B80\u5355\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7B80\u5355\u5165\u95E8" aria-hidden="true">#</a> 1.1 \u7B80\u5355\u5165\u95E8</h2><p>netcore\u4E2D\u7F13\u5B58\u76F8\u5173\u7684\u7C7B\u5E93\u90FD\u5728 Microsoft.Extensions.Caching \uFF0C\u4F7F\u7528MemoryCache\u9996\u5148\u5B89\u88C5\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.Memory&quot; Version=&quot;5.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u5165\u5230\u5BB9\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //\u6DFB\u52A0\u7F13\u5B58\u914D\u7F6E
            services.AddMemoryCache();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private readonly IMemoryCache _cache;
        public HomeController(IMemoryCache cache)
        {
            _cache = cache;
        }

        [HttpGet]
        public string Set()
        {
            //\u5199
            _cache.Set(&quot;login&quot;, &quot;4545478244&quot;);
            return &quot;&quot;;
        }

        [HttpGet]
        public string Get()
        {
            //\u8BFB
            var value = _cache.Get(&quot;login&quot;);
            return &quot;&quot;;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-\u8FC7\u671F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_1-2-\u8FC7\u671F\u65F6\u95F4" aria-hidden="true">#</a> 1.2 \u8FC7\u671F\u65F6\u95F4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //1.\u6700\u7B80\u5355\u4F7F\u7528\u65B9\u5F0F
            _cache.Set(&quot;mykey&quot;, &quot;myvalue&quot;);
            //2.\u7EDD\u5BF9\u8FC7\u671F\u65F6\u95F4\uFF0C3\u79D2\u540E\u8FC7\u671F
            _cache.Set(&quot;key1&quot;, &quot;value1&quot;, new DateTimeOffset(DateTime.Now.AddSeconds(3)));
            //3.\u7EDD\u5BF9\u8FC7\u671F\u65F6\u95F4\uFF0C\u6548\u679C\u540C\u4E0A
            _cache.Set(&quot;key2&quot;, &quot;value2&quot;, TimeSpan.FromSeconds(3));
            //4.\u6ED1\u52A8\u8FC7\u671F\u65F6\u95F4\uFF0C3\u79D2\u540E,\u5373\u4E09\u79D2\u949F\u5185\u88AB\u8BBF\u95EE\uFF0C\u5219\u91CD\u65B0\u5237\u65B0\u7F13\u5B58\u65F6\u95F4\u4E3A3\u79D2\u540E
            _cache.Set(&quot;key3&quot;, &quot;value3&quot;, new MemoryCacheEntryOptions
            {
                SlidingExpiration = TimeSpan.FromSeconds(3),
            });
            Console.WriteLine(&quot;-----------\u6682\u505C2\u79D2&quot;);
            Thread.Sleep(2000);//\u6682\u505C2\u79D2
            Console.WriteLine($&quot;key1\u7684\u503C\uFF1A{_cache.Get(&quot;key1&quot;) ?? &quot;key1\u88AB\u6E05\u9664&quot;}&quot;);
            Console.WriteLine($&quot;key2\u7684\u503C\uFF1A{_cache.Get(&quot;key2&quot;) ?? &quot;key2\u88AB\u6E05\u9664&quot;}&quot;);
            Console.WriteLine($&quot;key3\u7684\u503C\uFF1A{_cache.Get(&quot;key3&quot;) ?? &quot;key3\u88AB\u6E05\u9664&quot;}&quot;);
            Console.WriteLine(&quot;-----------\u6682\u505C2\u79D2&quot;);
            Thread.Sleep(2000);//\u518D\u6B21\u6682\u505C2\u79D2
            Console.WriteLine($&quot;key1\u7684\u503C\uFF1A{_cache.Get(&quot;key1&quot;) ?? &quot;key1\u88AB\u6E05\u9664&quot;}&quot;);
            Console.WriteLine($&quot;key2\u7684\u503C\uFF1A{_cache.Get(&quot;key2&quot;) ?? &quot;key2\u88AB\u6E05\u9664&quot;}&quot;);
            Console.WriteLine($&quot;key3\u7684\u503C\uFF1A{_cache.Get(&quot;key3&quot;) ?? &quot;key3\u88AB\u6E05\u9664&quot;}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F8B\u5B50\u4E2Dkey1,key2\u90FD\u662F\u4F7F\u7528\u7684\u7EDD\u5BF9\u8FC7\u671F\u65F6\u95F4\uFF0Ckey3\u4F7F\u7528\u7684\u76F8\u5BF9\u8FC7\u671F\u65F6\u95F4\uFF0C2\u79D2\u540E\u7B2C\u4E00\u6B21\u8BBF\u95EEkey1\u3001key2\u3001key3\u90FD\u6CA1\u8FC7\u671F\uFF0C\u5176\u4E2Dkey3\u7684\u8FC7\u671F\u65F6\u95F4\u5237\u65B0\u4E86\uFF0C\u91CD\u65B0\u8BBE\u7F6E\u4E3A3\u79D2\u540E\uFF0C\u6240\u4EE5\u518D\u6B21\u6682\u505C2\u79D2\u540E\uFF0Ckey1\u3001key2\u90FD\u8FC7\u671F\u4E86\uFF0Ckey3\u4ECD\u7136\u5B58\u5728\u3002</p><p>\u7A0B\u5E8F\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619011217302-f7c961c7-35d2-4ab8-a976-f440a86cf8ab.png" alt="img"></p><h2 id="_1-2-\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> 1.2 \u5E38\u7528\u914D\u7F6E</h2><p>\u4E0B\u8FB9\u7684\u4F8B\u5B50\u4ECB\u7ECDnetcore\u4E2D\u7F13\u5B58\u7684\u5E38\u7528\u914D\u7F6E\uFF0C\u76F4\u63A5\u770B\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddMemoryCache(options =&gt;
            {
                //\u7F13\u5B58\u5927\u5C0F
                options.SizeLimit = 3;//\u5982\u679C\u8BBE\u7F6E\u4E86\u8BE5\u503C\uFF0C\u90A3\u4E48\u6BCF\u4E2Aset\u90FD\u5FC5\u987B\u8BBE\u7F6Esize\uFF0C\u5E76\u4E14\u8D85\u8FC7\u4E86\u8FD9\u4E2A\u503C\u7684\u5927\u5C0F\u7684\u4F1A\u81EA\u52A8\u9500\u6BC1 
                //\u7F13\u5B58\u6EE1\u4E86\u65F6\uFF0C\u538B\u7F2920%\uFF08\u5373\u5220\u966420\u4EFD\u4F18\u5148\u7EA7\u4F4E\u7684\u7F13\u5B58\u9879\uFF09
                options.CompactionPercentage = 0.2;
                //\u4E24\u79D2\u949F\u67E5\u627E\u4E00\u6B21\u8FC7\u671F\u9879
                options.ExpirationScanFrequency = TimeSpan.FromSeconds(3);
            });
        }

 		[HttpGet]
        public string TestSize()
        {
            //SizeLimit\u914D\u7F6E3
            _cache.Set(&quot;item1&quot;, &quot;11111&quot;, new MemoryCacheEntryOptions
            {
                //\u7F13\u5B58\u5927\u5C0F\u53601\u4EFD
                Size = 2
            });
            _cache.Set(&quot;item2&quot;, &quot;22222&quot;, new MemoryCacheEntryOptions
            {
                Size = 2
            });
            var item1 = _cache.Get(&quot;item1&quot;);//\u8F93\u51FA 11111
            var item2 = _cache.Get(&quot;item2&quot;);//\u8F93\u51FA null

            return &quot;&quot;;
        }

        [HttpGet]
        public string TestOptions()
        {
            //\u5355\u4E2A\u7F13\u5B58\u9879\u7684\u914D\u7F6E
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions()
            {
                //\u7EDD\u5BF9\u8FC7\u671F\u65F6\u95F41
                //AbsoluteExpiration = new DateTimeOffset(DateTime.Now.AddSeconds(2)),
                //\u7EDD\u5BF9\u8FC7\u671F\u65F6\u95F42
                //AbsoluteExpirationRelativeToNow=TimeSpan.FromSeconds(3),
                //\u76F8\u5BF9\u8FC7\u671F\u65F6\u95F4
                SlidingExpiration = TimeSpan.FromSeconds(3),
                //\u4F18\u5148\u7EA7\uFF0C\u5F53\u7F13\u5B58\u538B\u7F29\u65F6\u4F1A\u4F18\u5148\u6E05\u9664\u4F18\u5148\u7EA7\u4F4E\u7684\u7F13\u5B58\u9879
                Priority = CacheItemPriority.Low,//\u4F18\u5148\u7EA7\u7B49\u7EA7\uFF1ALow,Normal,High,NeverRemove
                //\u7F13\u5B58\u5927\u5C0F\u53601\u4EFD
                Size = 1
            };
            //\u6CE8\u518C\u7F13\u5B58\u9879\u88AB\u6E05\u9664\u65F6\u7684\u56DE\u8C03\uFF0C\u53EF\u4EE5\u6CE8\u518C\u591A\u4E2A\u56DE\u8C03
            cacheEntityOps.RegisterPostEvictionCallback((key, value, reason, state) =&gt;
            {
                Console.WriteLine($&quot;\u56DE\u8C03\u51FD\u6570\u8F93\u51FA\u3010\u952E:{key},\u503C:{value},\u88AB\u6E05\u9664\u7684\u539F\u56E0:{reason}\u3011&quot;);
            });
            _cache.Set(&quot;mykey&quot;, &quot;myvalue&quot;, cacheEntityOps);
            Console.WriteLine($&quot;mykey\u7684\u503C\uFF1A{_cache.Get(&quot;mykey&quot;) ?? &quot;mykey\u7F13\u5B58\u88AB\u6E05\u9664\u4E86&quot;}&quot;);
            Console.WriteLine(&quot;------------------\u6682\u505C3\u79D2&quot;);
            Thread.Sleep(3000);
            Console.WriteLine($&quot;mykey\u7684\u503C\uFF1A{_cache.Get(&quot;mykey&quot;) ?? &quot;mykey\u7F13\u5B58\u88AB\u6E05\u9664\u4E86&quot;}&quot;);

            return &quot;&quot;;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610Fnetcore\u4E2D\u8BBE\u7F6E\u7F13\u5B58\u548C\u7F13\u5B58\u9879\u5927\u5C0F\u662F\u6CA1\u6709\u5355\u4F4D\u7684</p><p>\u7F13\u5B58\u88AB\u6E05\u7A7A\u7684\u56DE\u8C03\u51FD\u6570\u53EF\u4EE5\u6CE8\u518C\u591A\u4E2A\uFF08System.Runtime.Caching\u6E05\u9664\u7F13\u5B58\u7684\u56DE\u8C03\u53EA\u80FD\u662F\u4E00\u4E2A\uFF09\u3002</p><p>\u7A0B\u5E8F\u6267\u884C\u7ED3\u679C\uFF1A</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619012068314-c59f28a0-d9a1-4961-b91a-2e63d739c113.png" alt="img"></p><h2 id="_1-3-ichangetoken" tabindex="-1"><a class="header-anchor" href="#_1-3-ichangetoken" aria-hidden="true">#</a> 1.3 IChangeToken</h2><p>\u4E0A\u8FB9\u6211\u4EEC\u5DF2\u7ECF\u7B80\u5355\u4E86\u89E3\u4E86\u901A\u8FC7\u6ED1\u52A8\u8FC7\u671F\u65F6\u95F4\u548C\u7EDD\u5BF9\u8FC7\u671F\u65F6\u95F4\u6765\u63A7\u5236\u7F13\u5B58\u7684\u6709\u6548\u6027\uFF0C\u4F46\u662F\u6709\u65F6\u7F13\u5B58\u7684\u8FC7\u671F\u4E0E\u5426\u548C\u65F6\u95F4\u6CA1\u6709\u8054\u7CFB\uFF0C\u6BD4\u5982\u6211\u4EEC\u7F13\u5B58\u4E00\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u4E0D\u7BA1\u7F13\u5B58\u591A\u4E45\u53EA\u8981\u6587\u4EF6\u6CA1\u6709\u53D1\u751F\u53D8\u5316\u7F13\u5B58\u90FD\u662F\u6709\u6548\u7684\u3002\u5728net framework\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7CacheDependency\u6765\u63A7\u5236\uFF0C\u5728net core\u4E2D\u600E\u4E48\u63A7\u5236\u5462\uFF1Fnet core\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528IChangeToken\u63A5\u53E3\u8F7B\u677E\u5B9E\u73B0\u7F13\u5B58\u7684\u8FC7\u671F\u7B56\u7565\u3002\u5148\u770B\u4E00\u4E0BIChangeToken\u63A5\u53E3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public interface IChangeToken
    {
        // \u662F\u5426\u6709\u53D8\u5316\u53D1\u751F
        bool HasChanged { get; }
        // token\u662F\u5426\u4F1A\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF0C\u4E3Atrue\u65F6\u624D\u4F1A\u6709\u6548 
        bool ActiveChangeCallbacks { get; }
        // \u6CE8\u518C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u5F53\u6709\u53D8\u5316\u65F6\u89E6\u53D1\u56DE\u8C03
        IDisposable RegisterChangeCallback(Action&lt;object&gt; callback, object state);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4E00\u4E0BIChangeToken\u5B9E\u73B0\u7F13\u5B58\u8FC7\u671F\u7B56\u7565\u7684\u4E24\u4E2A\u4F8B\u5B50\uFF1A</p><h3 id="_1-3-1-\u76D1\u63A7\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-3-1-\u76D1\u63A7\u6587\u4EF6" aria-hidden="true">#</a> 1.3.1 \u76D1\u63A7\u6587\u4EF6</h3><p>\u9700\u8981\u5B89\u88C5\u7EC4\u4EF6\uFF1AMicrosoft.Extensions.FileProviders.Physical</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    internal class Program
    {
        private static void Main(string[] args)
        {
            string fileName = Path.Combine(Environment.CurrentDirectory, &quot;someCacheData.xml&quot;);
            var fileInfo = new FileInfo(fileName);
            MemoryCache myCache = new MemoryCache(new MemoryCacheOptions() { });
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions();
            //PollingFileChangeToken\u662FIChangeToken\u7684\u5B9E\u73B0\u7C7B\uFF0C\u901A\u8FC7\u8F6E\u8BE2\u76D1\u63A7\u6587\u4EF6\u53D8\u5316
            cacheEntityOps.AddExpirationToken(new Microsoft.Extensions.FileProviders.Physical.PollingFileChangeToken(fileInfo));
            //\u7F13\u5B58\u5931\u6548\u65F6\uFF0C\u56DE\u8C03\u51FD\u6570
            cacheEntityOps.RegisterPostEvictionCallback((key, value, reason, state) =&gt; { Console.WriteLine($&quot;\u6587\u4EF6\u3010{key}\u3011\u6539\u52A8\u4E86&quot;); });
            //\u6DFB\u52A0\u7F13\u5B58\uFF0Ckey\u4E3A\u6587\u4EF6\u540D\uFF0Cvalue\u4E3A\u6587\u4EF6\u5185\u5BB9
            myCache.Set(fileInfo.Name, File.ReadAllText(fileName), cacheEntityOps);
            Console.WriteLine(myCache.Get(fileInfo.Name));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PollingFileChangeToken\u901A\u8FC7\u8F6E\u8BE2\u6765\u76D1\u63A7\u6587\u4EF6\u6709\u6CA1\u6709\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u679C\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u53D1\u751F\u6539\u53D8\uFF0C\u7F13\u5B58\u5C31\u4F1A\u81EA\u52A8\u8FC7\u671F\u3002</p><h3 id="_1-3-2-\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\u7F13\u5B58\u8FC7\u671F" tabindex="-1"><a class="header-anchor" href="#_1-3-2-\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\u7F13\u5B58\u8FC7\u671F" aria-hidden="true">#</a> 1.3.2 \u901A\u8FC7\u4EE3\u7801\u63A7\u5236\u7F13\u5B58\u8FC7\u671F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    class Program
    {
        static void Main(string[] args)
        {
            MemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions();
            //\u4F7F\u7528CancellationChangeToken\u63A7\u5236\u7F13\u5B58\u8FC7\u671F
            CancellationTokenSource tokenSource = new CancellationTokenSource();
            cacheEntityOps.AddExpirationToken(new CancellationChangeToken(tokenSource.Token));
            //\u8BBE\u7F6E\u7F13\u5B58
            memoryCache.Set(&quot;mykey&quot;, &quot;myvalue&quot;, cacheEntityOps);
            Console.WriteLine(memoryCache.Get(&quot;mykey&quot;) ?? &quot;\u7F13\u5B58\u88AB\u6E05\u9664\u4E86&quot;);
            //\u901A\u8FC7\u4EE3\u7801\u6E05\u9664\u7F13\u5B58
            tokenSource.Cancel();
            Console.WriteLine(memoryCache.Get(&quot;mykey&quot;) ?? &quot;\u7F13\u5B58\u88AB\u6E05\u9664\u4E86&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tokenSource.Cancel\u65B9\u6CD5\u53D1\u9001\u53D6\u6D88\u4FE1\u53F7\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u89E6\u53D1\u7F13\u5B58\u8FC7\u671F\uFF0C\u57FA\u4E8E\u6B64\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7Cancel\u65B9\u6CD5\u7075\u6D3B\u7684\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u7F13\u5B58\u7B56\u7565\u3002</p><p>\u7A0B\u5E8F\u6267\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1614392140126-43623db8-f997-4d49-9594-4fb2bfc977b1.png" alt="img"></p><h2 id="_1-4-\u5F15\u7528nuget\u5305" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5F15\u7528nuget\u5305" aria-hidden="true">#</a> 1.4 \u5F15\u7528Nuget\u5305</h2><p>\u76F4\u63A5\u5F15\u7528\u6211\u81EA\u5DF1\u7B80\u5355\u5C01\u88C5\u7684\u4E00\u4E2ANuget\u5305(\u7B80\u5355\u5C01\u88C5\u81EA\u5DF1\u7528\uFF0C\u4E0D\u8981\u5632\u7B11)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Common.Cache.MemoryCache&quot; Version=&quot;1.1.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u5165\u5230\u5BB9\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //\u6CE8\u5165
            services.AddMemoryCacheExtension();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 		# \u5728\u9700\u8981\u4F7F\u7528\u7684\u5730\u65B9\u8FDB\u884C\u6CE8\u5165
        private readonly IMemoryCachimg  _cache;
        public HomeController(IMemoryCachimg cache)
        {
            _cache = cache;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-lazycache" tabindex="-1"><a class="header-anchor" href="#_2-lazycache" aria-hidden="true">#</a> 2. LazyCache</h1><h2 id="_2-1-\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#_2-1-\u63CF\u8FF0" aria-hidden="true">#</a> 2.1 \u63CF\u8FF0</h2><p>\u662F\u4E00\u4E2A\u57FA\u4E8E\u5185\u5B58\u7684\u6613\u4E8E\u4F7F\u7528\u5E76\u4E14\u7EBF\u7A0B\u5B89\u5168\u7684\u7F13\u5B58\u7EC4\u4EF6\u3002Lazy\u7684\u610F\u601D\u662FLazyCache\u6C38\u8FDC\u4E0D\u4F1A\u518D\u7F13\u5B58\u672A\u547D\u4E2D\u7684\u65F6\u5019\u89E6\u53D1\u4E00\u6B21\u4EE5\u4E0A\u7684\u7F13\u5B58\u59D4\u6258\u51FD\u6570\uFF0C\u56E0\u4E3A\u4F7F\u7528\u4E86MemoryCache\u5E76\u4E14\u4F7F\u7528\u4E86\u61D2\u9501\u6765\u786E\u4FDD\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u3002</p><p>\u5185\u7F6ELazy\u9501\u5E76\u4E14\u5E95\u5C42\u4F7F\u7528MemoryCache\u3002</p><p>\u5B89\u88C5\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;LazyCache&quot; Version=&quot;2.1.3&quot; /&gt;
    &lt;PackageReference Include=&quot;LazyCache.AspNetCore&quot; Version=&quot;2.1.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//ConfigureServices\u4E2D\u6CE8\u5165\u670D\u52A1
services.AddLazyCache();

//\u63A7\u5236\u5668\u4E2D\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6CE8\u5165IAppCache

//\u64CD\u4F5C\u5B9E\u4F8B
var list = await _appCache.GetAsync&lt;IEnumerable&lt;WeatherForecast&gt;&gt;(&quot;yanshi&quot;);
_appCache.Add&lt;IEnumerable&lt;WeatherForecast&gt;&gt;(&quot;yanshi&quot;, list, DateTimeOffset.Now.AddSeconds(10));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-\u5206\u5E03\u5F0F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u5E03\u5F0F\u7F13\u5B58" aria-hidden="true">#</a> 2. \u5206\u5E03\u5F0F\u7F13\u5B58</h1><p>IDistributedCache\u9AA8\u67B6\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace Microsoft.Extensions.Caching.Distributed
{
        public interface IDistributedCache
        {
            byte[] Get(string key);
            void Refresh(string key);
            void Remove(string key);
            void Set(string key, byte[] value,
            DistributedCacheEntryOptions options);
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-redis\u5206\u5E03\u5F0F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-1-redis\u5206\u5E03\u5F0F\u7F13\u5B58" aria-hidden="true">#</a> 2.1 Redis\u5206\u5E03\u5F0F\u7F13\u5B58</h2><p>\u5FAE\u8F6F\u7ED9netcore\u7684\u7F13\u5B58\u63D0\u4F9B\u4E86Redis\u548CSqlserver\u7684\u5B9E\u73B0\uFF0C\u901A\u8FC7Sqlserver\u6765\u7F13\u5B58\u7684\u573A\u666F\u6BD4\u8F83\u5C11\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7B80\u5355\u770B\u4E00\u4E0B\u5B98\u65B9\u63D0\u4F9B\u7684Redis\u7F13\u5B58\u7528\u6CD5\u3002</p><h3 id="_2-1-1-\u5B89\u88C5redis" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u5B89\u88C5redis" aria-hidden="true">#</a> 2.1.1 \u5B89\u88C5redis</h3><p>\u8FD9\u91CC\u6211\u76F4\u63A5\u4F7F\u7528docker\u5B89\u88C5\u4E86redis</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass &quot;123456&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4\u8BF4\u660E\uFF1A</p><p>-p\uFF1A\u5BBF\u4E3B\u673A\u7AEF\u53E3\u4E0E\u5BB9\u5668\u7AEF\u53E3\u6620\u5C04\uFF0C\u524D\u9762\u7684\u7AEF\u53E3\u4E3A\u4E3B\u673A\u6620\u5C04\u7AEF\u53E3\uFF08\u9700\u914D\u7F6E\u670D\u52A1\u5668\u5B89\u5168\u7EC4\uFF09\uFF0C\u540E\u9762\u7684\u7AEF\u53E3\u4E3A\u955C\u50CF\u5F00\u653E\u7684\u7AEF\u53E3</p><p>--restart=always\uFF1A\u65E0\u8BBA\u4EC0\u4E48\u60C5\u51B5\u6302\u58C1\uFF0C\u603B\u662F\u91CD\u542F</p><p>--name\uFF1A\u5BB9\u5668\u540D\u79F0</p><p>-d\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u955C\u50CF\uFF0C\u5728\u540E\u53F0\u8FD0\u884C\u5BB9\u5668</p><p>--appendonly yes\uFF1Aredis\u8FD0\u884C\u65F6\u5F00\u542F\u6301\u4E45\u5316</p><p>--requirepass \u201C123456\u201D\uFF1A\u8BBE\u7F6Eredis\u767B\u5F55\u5BC6\u7801</p><h3 id="_2-1-2-\u63A7\u5236\u53F0\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u63A7\u5236\u53F0\u7A0B\u5E8F" aria-hidden="true">#</a> 2.1.2 \u63A7\u5236\u53F0\u7A0B\u5E8F</h3><p>\u6DFB\u52A0Nuget\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-3-web-api" tabindex="-1"><a class="header-anchor" href="#_2-1-3-web-api" aria-hidden="true">#</a> 2.1.3 Web API</h3><p>\u65B0\u5EFA\u4E00\u4E2Anet5 Web API\u5E94\u7528\u7A0B\u5E8F\u6DFB\u52A0Nuget\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1><blockquote><p>\u4F5C\u8005\uFF1A\u635E\u6708\u4EAE\u7684\u7334\u5B50 https://www.cnblogs.com/wyy1234/p/10519681.html</p><p>\u5B98\u65B9\u6559\u7A0B\uFF1Ahttps://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/memory?view=aspnetcore-5.0</p></blockquote>`,79),l=[d];function t(r,c){return i(),n("div",null,l)}const u=e(a,[["render",t],["__file","memorycache.html.vue"]]);export{u as default};
