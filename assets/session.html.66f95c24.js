import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const d={},l=s(`<blockquote><p>\u6700\u540E\u7F16\u8F91\u65F6\u95F4\uFF1A2021\u5E741\u670824\u65E5</p></blockquote><h2 id="_1-\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> 1. \u7B80\u5355\u4F7F\u7528</h2><p>ConfigureServices\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddDistributedMemoryCache();
services.AddSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u56E0\u4E3Asession\u7684\u670D\u52A1\u7AEF\u5B58\u50A8\u9700\u8981\u7F13\u5B58\uFF0C\u6240\u4EE5\u9700\u8981\u5F15\u5165net.core\u7684\u7F13\u5B58DistributedMemoryCache\uFF1B</p></blockquote><p>Configure\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.UseSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A7\u5236\u5668\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  HttpContext.Session.SetString(&quot;user&quot;, &quot;lisi&quot;);
  var user = HttpContext.Session.GetString(&quot;user&quot;);
  //\u5B58\u50A8
  HttpContext.Session.Set(&quot;LoginId&quot;, System.Text.Encoding.Default.GetBytes(&quot;666&quot;));
  //\u83B7\u53D6
  bool flag = HttpContext.Session.TryGetValue(&quot;LoginId&quot;, out byte[] byteLoginId);
  var loginId = System.Text.Encoding.Default.GetString(byteLoginId); // LoginId=&quot;666&quot;;
  //\u83B7\u53D6
  var loginId2 = HttpContext.Session.GetString(&quot;LoginId&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u64CD\u4F5Cstring\u7C7B\u578B\u9700\u8981\u5B89\u88C5\u7EC4\u4EF6</p><blockquote><p>Microsoft.AspNetCore.Http</p></blockquote><p>\u6CE8\uFF1A</p><blockquote><p>\u5F53\u524D\u64CD\u4F5C\u53EA\u80FD\u5728\u63A7\u5236\u5668\u4E2D\u4F7F\u7528session</p></blockquote><h2 id="_2-\u5C01\u88C5\u7684session\u516C\u5171\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-\u5C01\u88C5\u7684session\u516C\u5171\u7C7B" aria-hidden="true">#</a> 2. \u5C01\u88C5\u7684Session\u516C\u5171\u7C7B</h2><p>\u76EE\u7684\u662F\u53EF\u4EE5\u8BA9\u5168\u5C40\u90FD\u53EF\u4EE5\u83B7\u53D6\u5230\u4E0A\u4E0B\u6587</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/// &lt;summary&gt;
    /// \u4E0A\u4E0B\u6587
    /// &lt;/summary&gt;
    public class MyHttpContext
    {
        /// &lt;summary&gt;
        /// \u670D\u52A1\u63D0\u4F9B\u8005
        /// &lt;/summary&gt;
        public static IServiceProvider _serviceProvider;

        public static HttpContext Current
        {
            get
            {
                var factory = _serviceProvider.GetService&lt;IHttpContextAccessor&gt;();
                return factory.HttpContext;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConfigureServices\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            services.AddDistributedMemoryCache();
            services.AddSession();
            //\u6CE8\u5165IHttpContextAccessor
            services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  MyHttpContext._serviceProvider = app.ApplicationServices;
  app.UseSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B58\u50A8session</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MyHttpContext.Current.Session.SetString(&quot;aa&quot;, &quot;bb&quot;);
var aa = MyHttpContext.Current.Session.GetString(&quot;aa&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u901A\u8FC7session\u5B58\u50A8\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-\u901A\u8FC7session\u5B58\u50A8\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> 3. \u901A\u8FC7session\u5B58\u50A8\u7528\u6237\u4FE1\u606F</h2><p>ConfigureServices\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            services.AddDistributedMemoryCache();
            services.AddSession();
            //\u6CE8\u5165IHttpContextAccessor
            services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  MyHttpContext._serviceProvider = app.ApplicationServices;
  app.UseSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u64CD\u4F5C\u8005\u6A21\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/// &lt;summary&gt;
    /// \u64CD\u4F5C\u6A21\u578B\uFF0C\u4FDD\u5B58\u767B\u9646\u7528\u6237\u5FC5\u8981\u4FE1\u606F\u3002
    /// &lt;/summary&gt;
    public class Operator
    {
        /// &lt;summary&gt;
        /// \u7528\u6237ID
        /// &lt;/summary&gt;
        public string UserId { get; set; }

        /// &lt;summary&gt;
        /// \u8D26\u53F7
        /// &lt;/summary&gt;
        public string Account { get; set; }

        /// &lt;summary&gt;
        /// \u771F\u5B9E\u59D3\u540D
        /// &lt;/summary&gt;
        public string RealName { get; set; }

        /// &lt;summary&gt;
        /// \u6635\u79F0
        /// &lt;/summary&gt;
        public string NickName { get; set; }

        /// &lt;summary&gt;
        /// \u662F\u5426\u53EF\u4EE5\u67E5\u770B\u6240\u6709\u6570\u636E  \u6570\u636E\u6743\u9650
        /// &lt;/summary&gt;
        public DataPermissionEnum DataPermission { get; set; } = DataPermissionEnum.My;

        /// &lt;summary&gt;
        /// \u5934\u50CF
        /// &lt;/summary&gt;
        public string Avatar { get; set; }

    }

    /// &lt;summary&gt;
    /// \u6570\u636E\u6743\u9650
    /// &lt;/summary&gt;
    public enum DataPermissionEnum
    {
        [Display(Name = &quot;\u4EC5\u81EA\u5DF1\u7684\u6570\u636E&quot;)]
        [Description(&quot;\u4EC5\u81EA\u5DF1\u7684\u6570\u636E&quot;)]
        My = 0,

        [Display(Name = &quot;\u67E5\u770B\u6240\u6709\u7684\u6570\u636E&quot;)]
        [Description(&quot;\u67E5\u770B\u6240\u6709\u7684\u6570\u636E&quot;)]
        All = 1
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u64CD\u4F5C\u8005\u5355\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/// &lt;summary&gt;
    /// \u7528\u6237\u767B\u9646\u4FE1\u606F\u63D0\u4F9B\u8005\u3002
    /// &lt;/summary&gt;
    public class OperatorProvider
    {
        /// &lt;summary&gt;
        /// Session\u952E\u3002
        /// &lt;/summary&gt;
        private const string _lOGIN_USER_KEY = &quot;LoginUser&quot;;

        private OperatorProvider()
        {
        }

        static OperatorProvider()
        {
        }

        //\u4F7F\u7528\u5185\u90E8\u7C7B+\u9759\u6001\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u5EF6\u8FDF\u521D\u59CB\u5316\u3002
        private class Nested
        {
            static Nested()
            {
            }

            public static readonly OperatorProvider instance = new OperatorProvider();
        }

        /// &lt;summary&gt;
        /// \u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u9759\u6001\u521D\u59CB\u5316\u662F\u5728.NET\u4E2D\u5B9E\u73B0Singleton\u7684\u9996\u9009\u65B9\u6CD5\u3002
        /// &lt;/summary&gt;
        public static OperatorProvider Instance
        {
            get
            {
                return Nested.instance;
            }
        }

        public Operator Current
        {
            get; set;
        }

        /// &lt;summary&gt;
        ///
        /// \u4ECESession/Cookie\u5220\u9664\u7528\u6237\u64CD\u4F5C\u6A21\u578B\u3002
        /// &lt;/summary&gt;
        public void Remove(HttpContext context)
        {
            context.Session.Remove(_lOGIN_USER_KEY);
        }

        public void Remove()
        {
            MyHttpContext.Current.Session.Remove(_lOGIN_USER_KEY);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B58\u50A8\u5E76\u4E14\u83B7\u53D6\u7528\u6237\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5B58\u50A8 
OperatorProvider.Instance.Current = new Operator
            {
                Account = &quot;admin&quot;,
                NickName = &quot;\u5F20\u4E09&quot;
            };
//\u83B7\u53D6
var account = OperatorProvider.Instance.Current.Account;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-session\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-session\u8BBE\u7F6E" aria-hidden="true">#</a> 4. Session\u8BBE\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    services.AddDistributedMemoryCache();
    services.AddSession(options =&gt;
    {
        options.Cookie.Name = &quot;.AdventureWorks.Session&quot;;
        options.IdleTimeout = System.TimeSpan.FromSeconds(10);//\u8BBE\u7F6Esession\u7684\u8FC7\u671F\u65F6\u95F4
        options.Cookie.HttpOnly = true;//\u8BBE\u7F6E\u5728\u6D4F\u89C8\u5668\u4E0D\u80FD\u901A\u8FC7js\u83B7\u5F97\u8BE5cookie\u7684\u503C
    });
    services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),t=[l];function r(v,a){return i(),n("div",null,t)}const c=e(d,[["render",r],["__file","session.html.vue"]]);export{c as default};
