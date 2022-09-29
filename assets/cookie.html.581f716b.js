import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const a={},t=s(`<h2 id="\u767B\u5F55\u4FE1\u606F\u4FDD\u5B58" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u4FE1\u606F\u4FDD\u5B58" aria-hidden="true">#</a> \u767B\u5F55\u4FE1\u606F\u4FDD\u5B58</h2><h3 id="_1-1-\u4FE1\u606F\u4FDD\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4FE1\u606F\u4FDD\u5B58" aria-hidden="true">#</a> 1.1 \u4FE1\u606F\u4FDD\u5B58</h3><p>\u767B\u5F55\u540E\u7528\u6237\u7684\u4FE1\u606F\u5B58\u5165cookie\u4E2D</p><p>\u4FDD\u5B58\u9A8C\u8BC1\u7ED3\u679C; \u7528\u6237id\u53EF\u4EE5\u5B58\u5165NameIdentifier\uFF0C\u8D26\u53F7\u5B58\u5165GivenName\uFF0C\u59D3\u540D\u5B58\u5165Name</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 				var claims = new List&lt;Claim&gt;
                {
                    new Claim(ClaimTypes.NameIdentifier, account),
                    new Claim(ClaimTypes.Name, &quot;\u5F20\u4E09&quot;),
                    new Claim(ClaimTypes.Role, &quot;\u6821\u957F&quot;)
                };
                var cliamsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var claimsPrincipal = new ClaimsPrincipal(cliamsIdentity); //\u53EF\u4EE5\u7406\u89E3\u4E3A\u8BC1\u4EF6\u7528\u6237

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, claimsPrincipal,
                    new AuthenticationProperties
                    {
                        ExpiresUtc = new DateTimeOffset(DateTime.Now.AddHours(6))
                    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-configureservices\u5F15\u7528\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-2-configureservices\u5F15\u7528\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 1.2 ConfigureServices\u5F15\u7528\u4E2D\u95F4\u4EF6</h3><p>\u5F15\u7528\u9A8C\u8BC1\u4E2D\u95F4\u4EF6</p><p>string CookieScheme = &quot;Cookies&quot;;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u914D\u7F6E\u9A8C\u8BC1
 services.AddAuthentication(CookieScheme)
       .AddCookie(CookieScheme, option =&gt;
        {
           //\u767B\u5F55\u8DEF\u5F84\uFF1A\u8FD9\u662F\u5F53\u7528\u6237\u8BD5\u56FE\u8BBF\u95EE\u8D44\u6E90\u4F46\u672A\u7ECF\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1\u65F6\uFF0C\u7A0B\u5E8F\u5C06\u4F1A\u5C06\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u8FD9\u4E2A\u76F8\u5BF9\u8DEF\u5F84\u3002
           option.LoginPath = new PathString(&quot;/account/login&quot;);  
           //\u7981\u6B62\u8BBF\u95EE\u8DEF\u5F84\uFF1A\u5F53\u7528\u6237\u8BD5\u56FE\u8BBF\u95EE\u8D44\u6E90\u65F6\uFF0C\u4F46\u672A\u901A\u8FC7\u8BE5\u8D44\u6E90\u7684\u4EFB\u4F55\u6388\u6743\u7B56\u7565\uFF0C\u8BF7\u6C42\u5C06\u88AB\u91CD\u5B9A\u5411\u5230\u8FD9\u4E2A\u76F8\u5BF9\u8DEF\u5F84
           option.AccessDeniedPath = new PathString(&quot;/account/denied&quot;);
        });
//\u6CE8\u5165\u4E0A\u4E0B\u6587\u5355\u4F8B\u6A21\u5F0F
 services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-configure\u91CC\u9762\u542F\u7528\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#_1-3-configure\u91CC\u9762\u542F\u7528\u8BA4\u8BC1" aria-hidden="true">#</a> 1.3 Configure\u91CC\u9762\u542F\u7528\u8BA4\u8BC1</h3><p>\u5FC5\u987B\u6DFB\u52A0\u4E0B\u9762\u7684\u4E24\u8005</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.UseAuthentication();//\u542F\u7528\u8EAB\u4EFD\u8BA4\u8BC1\uFF1A\u8BC6\u522B\u5F53\u524D\u8BF7\u6C42\u7684\u7528\u6237\u4FE1\u606F,\u4E00\u822C\u662F\u901A\u8FC7\u52A0\u5BC6\u7684Cookies\u5B9E\u73B0\u3002
app.UseAuthorization();//\u542F\u7528\u8EAB\u4EFD\u6388\u6743\uFF1A\u8BC6\u522B\u5F53\u524D\u8BF7\u6C42\u662F\u5426\u6709\u8BBF\u95EE\u6307\u5B9A\u8D44\u6E90\u7684\u6743\u9650\uFF0C\u4E00\u822C\u662F\u6839\u636E\u5F53\u524D\u8BF7\u6C42\u8BC6\u522B\u7684\u7528\u6237\u4FE1\u606F,\u7ED3\u5408\u89D2\u8272\u6743\u9650\u76F8\u5173\u914D\u7F6E\u6765\u5224\u65AD\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u83B7\u53D6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_1-4-\u83B7\u53D6\u4FE1\u606F" aria-hidden="true">#</a> 1.4 \u83B7\u53D6\u4FE1\u606F</h3><p>\u5728\u767B\u5F55\u8BA4\u8BC1\u901A\u8FC7\u540E\u8BBF\u95EE\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var name = this.User.Identity.Name;//\u83B7\u53D6\u5B58\u5165\u7684\u540D\u79F0\u4FE1\u606F
HttpContext.User.FindFirst(u =&gt; u.Type == ClaimTypes.NameIdentifier)?.Value;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-\u6CE8\u9500\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_1-5-\u6CE8\u9500\u7528\u6237" aria-hidden="true">#</a> 1.5 \u6CE8\u9500\u7528\u6237</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> await HttpContext.SignOutAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cookie\u8BA4\u8BC1 https://www.cnblogs.com/OpenCoder/p/8341843.html</p><h2 id="\u5168\u5C40\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u83B7\u53D6" aria-hidden="true">#</a> \u5168\u5C40\u83B7\u53D6</h2><p>\u5982\u679C\u60F3\u5728\u5176\u4ED6\u5C42\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\uFF0C\u9700\u8981\u5C06IHttpContextAccessor\u6CE8\u5165\u8FDB\u53BB\uFF0C\u7136\u540E\u901A\u8FC7\u8FD9\u4E2A\u53BB\u83B7\u53D6\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class UserEntityService : IUserEntityService
{
   private IHttpContextAccessor _accessor;
   private readonly IMongoCollection&lt;UserProfile&gt; _users;
 
   public UserEntityService(IHttpContextAccessor accessor, IDefaultMongoDatabaseProvider databaseProvider)
   {
       _accessor = accessor;
       _users = databaseProvider.GetCollection&lt;UserProfile&gt;(CollectionNames.UserProfiles);
   }
 
   public Task&lt;UserProfile&gt; GetCurrentUserAsync()
   {
       var rawUser = this._accessor.HttpContext.User;
       if (rawUser == null)
       {
          return null;
       }
       var filter = Builders&lt;UserProfile&gt;.Filter.Eq(&quot;UserId&quot;, rawUser.UserId);
      return _users.Find(filter).FirstOrDefaultAsync();
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[t];function r(l,c){return i(),n("div",null,d)}const o=e(a,[["render",r],["__file","cookie.html.vue"]]);export{o as default};
