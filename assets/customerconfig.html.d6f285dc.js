import{_ as i,o as n,c as e,a as s}from"./app.565765f9.js";const t={},l=s(`<p>\u524D\u6587\u83B7\u53D6\u914D\u7F6E\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u662F\u83B7\u53D6\u9ED8\u8BA4\u7684appsettings.json\u914D\u7F6E\u6587\u4EF6\u7684\u914D\u7F6E\uFF0C\u4E0B\u9762\u8BF4\u660E\u4E0B\u5982\u4F55\u8FDB\u884C\u81EA\u5B9A\u4E49\u83B7\u53D6\u914D\u7F6E</p><h1 id="_1-json-provider" tabindex="-1"><a class="header-anchor" href="#_1-json-provider" aria-hidden="true">#</a> 1. Json Provider</h1><h2 id="_1-1-\u6784\u5EFA\u72EC\u7ACB\u7684iconfiguration" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6784\u5EFA\u72EC\u7ACB\u7684iconfiguration" aria-hidden="true">#</a> 1.1 \u6784\u5EFA\u72EC\u7ACB\u7684IConfiguration</h2><p>\u7F16\u5199\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public static IConfigurationRoot LoadSettings(this IHostEnvironment env)
        {
            return new ConfigurationBuilder()
                 .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                 .AddJsonFile(&quot;common.json&quot;, optional: true, reloadOnChange: false)
               	 .AddJsonFile(&quot;appsettings.json&quot;, optional: true, reloadOnChange: false)
                 .AddJsonFile($&quot;appsettings.{env.EnvironmentName}.json&quot;, optional: true, reloadOnChange: false)
                 .AddEnvironmentVariables()
                 .Build();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728Startup\u6784\u9020\u51FD\u6570\u7684\u65F6\u5019\u8FDB\u884C\u8D4B\u503C\u66FF\u6362IConfiguration</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private readonly IConfiguration _configuration;
        public Startup(IWebHostEnvironment env)
        {
            _configuration = env.LoadSettings();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u64CD\u4F5C\u6DFB\u52A0\u7684\u914D\u7F6E\u9879\uFF0C\u53EA\u5728startup\u8303\u56F4\u751F\u6548\u3002</p><h2 id="_1-2-\u5728progrom\u5168\u5C40\u81EA\u5B9A\u4E49\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5728progrom\u5168\u5C40\u81EA\u5B9A\u4E49\u914D\u7F6E" aria-hidden="true">#</a> 1.2 \u5728Progrom\u5168\u5C40\u81EA\u5B9A\u4E49\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =&gt;
            {
                //config.Sources.Clear();  // \u4F1A\u6E05\u9664\u6240\u6709\u914D\u7F6E\u63D0\u4F9B\u7A0B\u5E8F
                var env = hostingContext.HostingEnvironment;
                config.SetBasePath(env.ContentRootPath);
                config.AddJsonFile(&quot;devappsettings.json&quot;, optional: false, reloadOnChange: true);
            })
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6587\u4EF6\u7684\u76EE\u5F55\u8981\u6CE8\u610F\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u56E0\u4E3A\u76EE\u5F55\u95EE\u9898\u6240\u4EE5\u627E\u4E0D\u5230\u914D\u7F6E\u6587\u4EF6\u7684\u60C5\u51B5\u3002</p><h1 id="_2-memory-provider" tabindex="-1"><a class="header-anchor" href="#_2-memory-provider" aria-hidden="true">#</a> 2. Memory Provider</h1><p>\u5141\u8BB8\u6211\u4EEC\u5C06\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u914D\u7F6E\u76F4\u63A5\u914D\u7F6E\u5230\u5185\u5B58\u4E2D\uFF0C\u800C\u4E0D\u662F\u50CF\u4F20\u7EDF\u65B9\u5F0F\u90A3\u6837\u5B50\u5FC5\u987B\u5236\u5B9A\u4E00\u4E2A\u7269\u7406\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            var builder = new ConfigurationBuilder();
            var profileCollection = new Dictionary&lt;string, string&gt;
            {
                {&quot;AuthorProfile:FirstName&quot;, &quot;Joydip&quot;},
                {&quot;AuthorProfile:LastName&quot;, &quot;Kanjilal&quot;},
                {&quot;AuthorProfile:Address&quot;, &quot;Hyderabad, India&quot;}
            };
            builder.AddInMemoryCollection(profileCollection);
            Configuration = builder.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u524D\u53D1\u73B0\u7684\u7528\u9014</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =&gt;
            {
                var builder = new ConfigurationBuilder();
                var profileCollection = new Dictionary&lt;string, string&gt;
            {
                {&quot;AuthorProfile:FirstName&quot;, &quot;Joydip&quot;},
                {&quot;AuthorProfile:LastName&quot;, &quot;Kanjilal&quot;},
                {&quot;AuthorProfile:Address&quot;, &quot;Hyderabad, India&quot;}
            };
                builder.AddInMemoryCollection(profileCollection);
                config.AddConfiguration(builder.Build());
            })
            .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7IConfiguration\u5B9E\u4F8B\u53BB\u83B7\u53D6\u4E86\u3002</p><h1 id="_3-\u516C\u5171\u7C7B\u83B7\u53D6\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u516C\u5171\u7C7B\u83B7\u53D6\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3. \u516C\u5171\u7C7B\u83B7\u53D6\u914D\u7F6E\u6587\u4EF6</h1><p>\u5F15\u7528\u7EC4\u4EF6</p><p>Microsoft.Extensions.Configuration.Json</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 	public class AppSettings
    {
        private static IConfiguration Configuration { get; set; }

        public AppSettings(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// &lt;summary&gt;
        /// \u5C01\u88C5\u8981\u64CD\u4F5C\u7684\u5B57\u7B26
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;sections&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static string GetValue(params string[] sections)
        {
            try
            {
                if (sections.Any())
                    return Configuration[string.Join(&quot;:&quot;, sections)];
            }
            catch (Exception)
            { }
            return &quot;&quot;;
        }

        /// &lt;summary&gt;
        /// \u9012\u5F52\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\u6570\u7EC4
        ///\u5F15\u7528 Microsoft.Extensions.Configuration.Binder \u5305
        /// &lt;/summary&gt;
        /// &lt;typeparam name=&quot;T&quot;&gt;&lt;/typeparam&gt;
        /// &lt;param name=&quot;sections&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static List&lt;T&gt; App&lt;T&gt;(params string[] sections)
        {
            List&lt;T&gt; list = new List&lt;T&gt;();
            Configuration.Bind(string.Join(&quot;:&quot;, sections), list);
            return list;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\u81EA\uFF1Ahttps://gitee.com/laozhangIsPhi/Blog.Core</p><p>ConfigureServices\u4E2D\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddSingleton(new AppSettings(Configuration));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u6307\u5B9A\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var info = AppSettings.GetValue(&quot;Logging&quot;, &quot;LogLevel&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),r=[l];function d(a,o){return n(),e("div",null,r)}const v=i(t,[["render",d],["__file","customerconfig.html.vue"]]);export{v as default};
