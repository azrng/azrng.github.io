import{_ as e,o as i,c as n,a as s}from"./app.565765f9.js";const a={},r=s(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>Swagger \u662F\u4E00\u4E2A\u89C4\u8303\u548C\u5B8C\u6574\u7684\u6846\u67B6\uFF0C\u7528\u4E8E\u751F\u6210\u3001\u63CF\u8FF0\u3001\u8C03\u7528\u548C\u53EF\u89C6\u5316 RESTful \u98CE\u683C\u7684 Web \u670D\u52A1\u3002\u65E5\u5E38\u53EF\u4EE5\u7528\u4E8E\u540E\u7AEF\u5F00\u53D1\u4EBA\u5458\u6D4B\u8BD5\u63A5\u53E3\u6216\u8005\u524D\u540E\u7AEF\u8054\u8C03\u4F7F\u7528\u3002\u4ECE.net5\u5F00\u59CB\uFF0Cswagger\u5DF2\u7ECF\u96C6\u6210\u5230vs2019\u7F16\u8BD1\u5668\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u52FE\u5BF9\u9009\u9879\u201C\u542F\u7528OpenAPI\u652F\u6301\u201D\u663E\u793A\u57FA\u672C\u7684swagger\u914D\u7F6E\u3002</p><p>\u672C\u6587\u793A\u4F8B\u73AF\u5883\uFF1Avs2019\u3001net5</p><h1 id="_1-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 1 \u57FA\u672C\u4F7F\u7528</h1><p>\u65B0\u5EFA\u4E00\u4E2Anetcore api\u9879\u76EE\uFF0C\u4E3A\u4E86\u6D4B\u8BD5\u6548\u679C\uFF0C\u6211\u591A\u521B\u5EFA\u51E0\u4E2A\u63A7\u5236\u5668</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911118372-0d629e1a-bc7a-41ec-9cc2-ea375da45497.png" alt="img"></p><h2 id="_1-1-\u5B89\u88C5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5\u7EC4\u4EF6" aria-hidden="true">#</a> 1.1 \u5B89\u88C5\u7EC4\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;ItemGroup&gt;
    &lt;PackageReference Include=&quot;Swashbuckle.AspNetCore&quot; Version=&quot;5.6.3&quot; /&gt;
  &lt;/ItemGroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-\u6CE8\u518Cswagger\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6CE8\u518Cswagger\u670D\u52A1" aria-hidden="true">#</a> 1.2 \u6CE8\u518Cswagger\u670D\u52A1</h2><p>\u5728ConfigureServices\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =&gt;
            {
                c.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A</p><p>//netcore3.0\u4E4B\u524D\u7248\u672C\u7528\u6CD5</p><p>c.SwaggerDoc(&quot;v1&quot;, new Info { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });</p><h2 id="_1-3-\u4F7F\u7528swagger" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4F7F\u7528swagger" aria-hidden="true">#</a> 1.3 \u4F7F\u7528Swagger</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //\u542F\u7528\u4E2D\u95F4\u4EF6\u4EE5\u5C06\u751F\u6210\u7684swagger\u516C\u5F00\u4E3Ajson\u7EC8\u7ED3\u70B9
                app.UseSwagger();
                //\u542F\u7528swagger-ui\u4E2D\u95F4\u4EF6\uFF0C\u6307\u5B9Aswagger json\u7EC8\u7ED3\u70B9\uFF0C\u4EE5\u516C\u5F00\u4EA4\u4E92\u6587\u6863
                app.UseSwaggerUI(c =&gt; c.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;WebApi v1&quot;));
            }

            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u793A\u4F8B\u4EE3\u7801\u914D\u7F6E\u7684swagger\u53EA\u5728Development\u73AF\u5883\u4E0B\u663E\u793A\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6765\u4FEE\u6539</p><h2 id="_1-4-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-4-\u542F\u52A8" aria-hidden="true">#</a> 1.4 \u542F\u52A8</h2><p>\u8FD0\u884C\u9879\u76EE\uFF0C\u5C55\u793A\u4E0B\u9762\u7684\u6548\u679C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911384343-f5f7d430-9fe1-449c-997a-f5452129351b.png" alt="img"></p><p>\u5982\u679C\u8FD9\u662F\u4F60\u5199\u7684\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u7684\u5176\u4ED6\u540C\u4E8B\u53BB\u770B\uFF0C\u771F\u7684\u4F1A\u4E00\u8138\u61F5\u903C\uFF0C\u4F60\u8FD9\u5199\u7684\u90FD\u662F\u5565\u73A9\u610F\uFF0C\u90A3\u4E48\u6211\u4EEC\u6765\u7ED9\u8FD9\u52A0\u4E0A\u6CE8\u91CA\u5427\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/// &lt;summary&gt;
/// \u7528\u6237\u63A7\u5236\u5668
/// &lt;/summary&gt;
[Route(&quot;api/[controller]&quot;)]
[ApiController]
public class UserController : ControllerBase
{
    /// &lt;summary&gt;
    ///\u67E5\u8BE2\u7528\u6237\u5217\u8868
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet]
    public IEnumerable&lt;string&gt; Get()
    {
        return new string[] { &quot;value1&quot;, &quot;value2&quot; };
    }

    /// &lt;summary&gt;
    /// \u67E5\u8BE2\u7528\u6237\u8BE6\u60C5
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet(&quot;{id}&quot;)]
    public string Get(int id)
    {
        return &quot;value&quot;;
    }

    /// &lt;summary&gt;
    /// \u5220\u9664\u7528\u6237
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
    [HttpDelete(&quot;{id}&quot;)]
    public void Delete(int id)
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5B50\u52A0\u4E86\u6CE8\u91CA\u8FD8\u4E0D\u884C\uFF0Cswagger\u8FD8\u8BFB\u53D6\u4E0D\u5230\u6211\u4EEC\u7684\u6CE8\u91CA\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u751F\u6210xml\u6587\u6863\u5E76\u4E14\u8BA9swagger\u4F7F\u7528\uFF0C\u9009\u4E2D\u9879\u76EE\u53F3\u952E\u5C5E\u6027=&gt;\u751F\u6210=&gt;xml\u6587\u6863\u6587\u4EF6</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911528034-b1bce7f0-904a-4e68-8ecb-0aab22b1a2c0.png" alt="img"></p><p>\u4FEE\u6539\u6CE8\u5165swagger\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddSwaggerGen(c =&gt;
{
    c.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });

    // \u4F7F\u7528\u53CD\u5C04\u83B7\u53D6xml\u6587\u4EF6\u3002\u5E76\u6784\u9020\u51FA\u6587\u4EF6\u7684\u8DEF\u5F84
    var xmlFile = $&quot;{Assembly.GetExecutingAssembly().GetName().Name}.xml&quot;;
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    // \u542F\u7528xml\u6CE8\u91CA.\u7B2C\u4E8C\u4E2A\u53C2\u6570\u542F\u7528\u63A7\u5236\u5668\u7684\u6CE8\u91CA\uFF0C\u9ED8\u8BA4\u4E3Afalse.
    c.IncludeXmlComments(xmlPath, true);

    //\u6216\u8005\u5FAA\u73AF\u83B7\u53D6xml\u6587\u4EF6\u914D\u7F6E
    Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory, &quot;*.xml&quot;).ToList().ForEach(file =&gt;
    {
        c.IncludeXmlComments(file);
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u542F\u52A8\u9879\u76EE\u67E5\u770B\u754C\u9762</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911727783-4928587f-ca55-4c98-a17a-dbabcf8b51e3.png" alt="img"></p><p>\u81F3\u6B64\uFF0C\u57FA\u7840\u7684\u914D\u7F6Eswagger\u663E\u793A\u6CE8\u91CA\u5DF2\u7ECF\u5B9E\u73B0\u4E86\uFF0C\u90A3\u4E48\u5982\u4F55\u8C03\u7528\u6211\u4EEC\u63A5\u53E3\u90A3\uFF1F</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911856379-67201b81-87b9-4559-a217-2321feb43b3d.png" alt="img"></p><p>\u901A\u8FC7\u8BE5\u754C\u9762\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8BF7\u6C42\u5730\u5740\u3001\u8BF7\u6C42\u65B9\u5F0F\u3001\u5165\u53C2\u7C7B\u578B\u3001\u8F93\u51FA\u53C2\u6570\u7B49\u3002</p><p>\u6CE8\uFF1A</p><p>\u901A\u8FC7\u8BBE\u7F6E\u53D6\u6D88\u663E\u793A\u8B66\u544A\uFF1A1591 \uFF0C \u53EF\u4EE5\u53BB\u9664\u65B9\u6CD5\u548C\u7C7B\u4E0A\u9762\u7684xml\u6CE8\u91CA\u8B66\u544A</p><p>\u5982\u679C\u5B9E\u4F53\u7C7B\u4E0D\u5728\u5F53\u524D\u7A0B\u5E8F\u96C6\u4E0B\uFF0C\u9700\u8981\u540C\u6837\u65B9\u5F0F\u914D\u7F6E\u5B9E\u4F53\u7C7B\u7A0B\u5E8F\u96C6\u7684xml\u6587\u6863\u5230swagger\u914D\u7F6E</p><h2 id="_1-5-\u4E0D\u663E\u793A\u67D0\u4E9B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_1-5-\u4E0D\u663E\u793A\u67D0\u4E9B\u63A5\u53E3" aria-hidden="true">#</a> 1.5 \u4E0D\u663E\u793A\u67D0\u4E9B\u63A5\u53E3</h2><p>\u901A\u8FC7\u4E00\u4E9B\u7279\u6027\uFF0C\u53EF\u4EE5\u6807\u8BB0\u4E0D\u663E\u793A\u67D0\u4E00\u4E9B\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5FFD\u7565\u663E\u793A\u63A5\u53E3
[ApiExplorerSettings(IgnoreApi =true)]
 
//\u5E9F\u5F03\u63A5\u53E3
[Obsolete(&quot;\u8BE5\u63A5\u53E3\u4E0D\u518D\u4F7F\u7528&quot;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-swagger\u4F20\u9012jwt" tabindex="-1"><a class="header-anchor" href="#_2-swagger\u4F20\u9012jwt" aria-hidden="true">#</a> 2. swagger\u4F20\u9012JWT</h1><p>jwt\u662F\u4E00\u4E2A\u57FA\u4E8Ejson\u7684\u3001\u7528\u4E8E\u5728\u7F51\u7EDC\u4E0A\u58F0\u660E\u67D0\u79CD\u4E3B\u5F20\u7684\u4EE4\u724C\uFF0C\u901A\u5E38\u662F\u7528\u4E09\u90E8\u5206\u7EC4\u6210\uFF1A<strong>\u5934\u4FE1\u606F\uFF0C\u6D88\u606F\u4F53\uFF0C\u7B7E\u540D</strong>\u3002\u4ED6\u662F\u4E00\u79CD\u53CC\u65B9\u4E4B\u95F4\u4F20\u9012\u5B89\u5168\u4FE1\u606F\u7684\u8868\u8FF0\u6027\u58F0\u660E\u89C4\u8303\u3002\u53EF\u4EE5\u505A\u6743\u9650\u9A8C\u8BC1\u7684\u5DE5\u5177\uFF0C\u4F46\u662F\u76EE\u7684\u4E0D\u662F\u4E3A\u4E86\u6570\u636E\u52A0\u5BC6\u548C\u4FDD\u62A4\u3002\u867D\u7136\u770B\u4F3C\u50CF\u662F\u52A0\u5BC6\u7684\u6570\u636E\uFF0C\u4F46\u662F\u5B83\u5E76\u6CA1\u6709\u52A0\u5BC6\uFF0C\u4E0D\u9002\u5408\u5B58\u50A8\u673A\u5BC6\u4FE1\u606F\u3002</p><p>\u5982\u679C\u6211\u4EEC\u63A5\u53E3\u662F\u9700\u8981\u4F20\u9012token\u624D\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u5BF9\u6211\u4EEC\u7684swagger\u914D\u7F6E\u518D\u8FDB\u884C\u6539\u9020</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddSwaggerGen(c =&gt;
{
    c.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });

    // \u4F7F\u7528\u53CD\u5C04\u83B7\u53D6xml\u6587\u4EF6\u3002\u5E76\u6784\u9020\u51FA\u6587\u4EF6\u7684\u8DEF\u5F84
    var xmlFile = $&quot;{Assembly.GetExecutingAssembly().GetName().Name}.xml&quot;;
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    // \u542F\u7528xml\u6CE8\u91CA.\u7B2C\u4E8C\u4E2A\u53C2\u6570\u542F\u7528\u63A7\u5236\u5668\u7684\u6CE8\u91CA\uFF0C\u9ED8\u8BA4\u4E3Afalse.
    c.IncludeXmlComments(xmlPath, true);

    var security = new Dictionary&lt;string, IEnumerable&lt;string&gt;&gt; { { &quot;Bearer&quot;, new string[] { } } };
    c.AddSecurityDefinition(&quot;Bearer&quot;, new OpenApiSecurityScheme()
    {
        Description = &quot;JWT\u6388\u6743(\u6570\u636E\u5C06\u5728\u8BF7\u6C42\u5934\u4E2D\u8FDB\u884C\u4F20\u8F93) \u5728\u4E0B\u65B9\u8F93\u5165Bearer {token} \u5373\u53EF\uFF0C\u6CE8\u610F\u4E24\u8005\u4E4B\u95F4\u6709\u7A7A\u683C&quot;,
        Name = &quot;Authorization&quot;, //jwt\u9ED8\u8BA4\u7684\u53C2\u6570\u540D\u79F0
        In = ParameterLocation.Header, //jwt\u9ED8\u8BA4\u5B58\u653EAuthorization\u4FE1\u606F\u7684\u4F4D\u7F6E(\u8BF7\u6C42\u5934\u4E2D)
        Type = SecuritySchemeType.ApiKey,
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference()
                {
                    Id = &quot;Bearer&quot;,
                    Type = ReferenceType.SecurityScheme
                }
            },
            Array.Empty&lt;string&gt;()
        }
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\uFF0C\u67E5\u770B\u754C\u9762\uFF0C\u53D1\u73B0\u754C\u9762\u6709\u6240\u4E0D\u540C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620913001521-24c778d7-44e6-4160-8dad-9371c1002847.png" alt="img"></p><p>\u867D\u7136\u6211\u624B\u4E0A\u6CA1\u6709token\uFF0C\u4F46\u662F\u6211\u4E5F\u6CA1\u6709\u5199\u6821\u9A8Ctoken\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u6682\u4E14\u770B\u4E3A\u4E00\u4E2A\u5934\u90E8\u4F20\u9012\u7684\u5DE5\u5177\u4F7F\u7528\u3002jwt\u5177\u4F53\u4F7F\u7528\u540E\u7EED\u518D\u8BB2\u3002</p><p>token\u4F20\u9012\u65B9\u5F0F\u5C31\u662F\u5728Headers\u589E\u52A0 Authorization:Bearer {token} \uFF0C\u7136\u540E\u9700\u8981\u5728\u7A0B\u5E8F\u4E2D\u914D\u7F6E\u6821\u9A8Ctoken\uFF0C\u5F53\u4E0B\u6211\u4EEC\u53EA\u662F\u6A21\u62DFswagger\u5728header\u4E2D\u4F20\u9012\u503C\u3002</p><p>\u5728\u8F93\u5165\u6846\u8F93\u51FA\uFF1A Bearer AABBCC</p><p>\u5728Action\u4E2D\u83B7\u53D6\u6211\u4EEC\u4F20\u8F93\u7684\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var token = HttpContext.Request.Headers[&quot;Authorization&quot;];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620913403862-f7762ceb-241b-4bb6-846e-a5d213d1ab0f.png" alt="img"></p><h1 id="_3-\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_3-\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> 3 \u53C2\u8003\u6587\u6863</h1><p>https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-5.0</p><p>\u5173\u4E8Eswagger\u7684\u4F7F\u7528\u64CD\u4F5C\u8FD8\u6709\u5F88\u591A\uFF0C\u4E0A\u9762\u6709\u4E9B\u914D\u7F6E\u4E5F\u6CA1\u6709\u8BE6\u7EC6\u8BF4\u5230\uFF0C\u53EA\u8BF4\u4E86\u4E00\u4E9B\u529F\u80FD\u6027\u7684\u64CD\u4F5C\u3002\u66F4\u8BE6\u7EC6\u64CD\u4F5C\u9700\u8981\u81EA\u884C\u5B66\u4E60\u3002</p><h1 id="_4-\u5176\u4ED6\u6587\u7AE0\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#_4-\u5176\u4ED6\u6587\u7AE0\u5B66\u4E60" aria-hidden="true">#</a> 4 \u5176\u4ED6\u6587\u7AE0\u5B66\u4E60</h1><p>https://www.cnblogs.com/shanfeng1000/p/13476831.html</p>`,54),l=[r];function t(d,u){return i(),n("div",null,l)}const c=e(a,[["render",t],["__file","swaggerbase.html.vue"]]);export{c as default};
