import{_ as e,o as i,c as n,a as s}from"./app.565765f9.js";const r={},d=s(`<h2 id="_1-\u5B89\u88C5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u7EC4\u4EF6" aria-hidden="true">#</a> 1. \u5B89\u88C5\u7EC4\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning&quot; Version=&quot;4.2.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer&quot; Version=&quot;4.2.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Swashbuckle.AspNetCore&quot; Version=&quot;5.6.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2. \u8BBE\u7F6E\u7248\u672C</h2><h3 id="_2-1-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.1 \u63A7\u5236\u5668\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
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
    
namespace NetCore_SwaggerVersion.Controllers
{
    [ApiVersionNeutral]//\u4E0D\u53D7\u7248\u672C\u63A7\u5236
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C" aria-hidden="true">#</a> 2.2 \u7279\u5B9A\u65B9\u6CD5\u8BBE\u7F6E\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> 2.3 \u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    [ApiVersionNeutral]//\u9000\u51FA\u7248\u672C\u63A7\u5236
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u914D\u7F6Estartup\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6Estartup\u7C7B" aria-hidden="true">#</a> 3. \u914D\u7F6EStartup\u7C7B</h2><h2 id="_3-1-\u65B9\u6848\u4E00" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u6848\u4E00" aria-hidden="true">#</a> 3.1 \u65B9\u6848\u4E00</h2><h3 id="_3-1-1-\u6DFB\u52A0\u65B0\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u6DFB\u52A0\u65B0\u6210\u5458" aria-hidden="true">#</a> 3.1.1 \u6DFB\u52A0\u65B0\u6210\u5458</h3><p>\u7528\u6765\u83B7\u53D6API\u7248\u672C\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>      /// &lt;summary&gt;
        /// Api\u7248\u672C\u4FE1\u606F
        /// &lt;/summary&gt;
        private IApiVersionDescriptionProvider _provider;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-\u5728-configureservices-\u4E2D" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u5728-configureservices-\u4E2D" aria-hidden="true">#</a> 3.1.2 \u5728 ConfigureServices \u4E2D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //Versioning\u7528\u6765\u5B9E\u73B0API\u7684\u7248\u672C\u63A7\u5236
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 0);//\u9ED8\u8BA4\u7248\u672C\u53F7 \u5927\u7248\u672C/\u5C0F\u7248\u672C
                options.AssumeDefaultVersionWhenUnspecified = true;//\u6B64\u9009\u9879\u5C06\u7528\u4E8E\u4E0D\u63D0\u4F9B\u7248\u672C\u7684\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5047\u5B9AAPI\u7684\u7248\u672C\u4E3A1.0
                options.ReportApiVersions = true;//\u5F53\u8BBE\u7F6E\u4E3Atrue\u65F6\u5019\uFF0Capi\u5C06\u8FD4\u56DE\u54CD\u5E94\u6807\u5934\u4E2D\u652F\u6301\u7684\u7248\u672C\u4FE1\u606F
            });
            //Versioning.ApiExplorer\u7528\u6765\u5B9E\u73B0\u5143\u6570\u636E\u7684\u53D1\u73B0\u5DE5\u4F5C
            services.AddVersionedApiExplorer(options =&gt;
            {
                options.GroupNameFormat = &quot;&#39;v&#39;VVV&quot;;//\u5B9A\u4E49\u4E86\u7248\u672C\u53F7\u7684\u683C\u5F0F\u5316\u65B9\u5F0F
                options.SubstituteApiVersionInUrl = true;
            });
            /*
                AddApiVersioning\uFF0C\u4E3B\u8981\u7528\u6765\u914D\u7F6E\u5411\u524D\u517C\u5BB9\uFF0C\u5B9A\u4E49\u4E86\u5982\u679C\u6CA1\u6709\u5E26\u7248\u672C\u53F7\u7684\u8BBF\u95EE\uFF0C\u4F1A\u9ED8\u8BA4\u8BBF\u95EEv1.0\u7684\u63A5\u53E3\u3002
                AddVersionedApiExplorer\u7528\u6765\u6DFB\u52A0API\u7684\u7248\u672C\u7BA1\u7406\uFF0C\u5E76\u5B9A\u4E49\u4E86\u7248\u672C\u53F7\u7684\u683C\u5F0F\u5316\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u517C\u5BB9\u7EC8\u7ED3\u70B9\u4E0A\u5E26\u7248\u672C\u53F7\u7684\u65B9\u5F0F\u3002
             */

            services.AddControllers();

            _provider = services.BuildServiceProvider().GetRequiredService&lt;IApiVersionDescriptionProvider&gt;();
            services.AddSwaggerGen(c =&gt;
            {
                foreach (var item in _provider.ApiVersionDescriptions)
                {
                    c.SwaggerDoc(item.GroupName, new OpenApiInfo { Title = &quot;Demo&quot;, Version = item.ApiVersion.ToString(), Description = &quot;\u5207\u6362\u7248\u672C\u8BF7\u70B9\u53F3\u4E0A\u89D2\u7248\u672C\u5207\u6362&quot; });
                }
                var xmlPath = Path.Combine(AppContext.BaseDirectory, $&quot;{AppDomain.CurrentDomain.FriendlyName}.xml&quot;);
                c.IncludeXmlComments(xmlPath);
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A</p><p>_provider = services.BuildServiceProvider().GetRequiredService&lt;IApiVersionDescriptionProvider&gt;();\u4F1A\u63D0\u793A\u201C ASP0000 \u4ECE\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u8C03\u7528\u201CBuildServiceProvider\u201D\u4F1A\u5BFC\u81F4\u521B\u5EFA\u5355\u4E00\u5B9E\u4F8B\u670D\u52A1\u7684\u5176\u4ED6\u526F\u672C\u3002 \u8003\u8651\u4F9D\u8D56\u9879\u6CE8\u5165\u670D\u52A1\u7B49\u66FF\u4EE3\u9879\u4F5C\u4E3A\u201CConfigure\u201D\u7684\u53C2\u6570\u3002\u201D</p></blockquote><h3 id="_3-2-3-configure\u4F7F\u7528\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-2-3-configure\u4F7F\u7528\u670D\u52A1" aria-hidden="true">#</a> 3.2.3 Configure\u4F7F\u7528\u670D\u52A1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt;
                {
                    foreach (var item in _provider.ApiVersionDescriptions)
                    {
                        c.SwaggerEndpoint($&quot;/swagger/{item.GroupName}/swagger.json&quot;, &quot;Version\uFF1A&quot; + item.GroupName.ToUpperInvariant());
                    }
                });
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u5DF2\u7ECF\u5B8C\u6210\u4E86\u7248\u672C\u63A7\u5236+swagger\u3002</p><h2 id="_3-2-\u65B9\u6848\u4E8C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B9\u6848\u4E8C" aria-hidden="true">#</a> 3.2 \u65B9\u6848\u4E8C</h2><h3 id="_3-2-1-\u6DFB\u52A0\u6269\u5C55\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u6DFB\u52A0\u6269\u5C55\u7C7B" aria-hidden="true">#</a> 3.2.1 \u6DFB\u52A0\u6269\u5C55\u7C7B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// swagger\u6269\u5C55
    /// &lt;/summary&gt;
    internal class ConfigureSwaggerOptions : IConfigureOptions&lt;SwaggerGenOptions&gt;
    {
        private readonly IApiVersionDescriptionProvider _provider;
        public ConfigureSwaggerOptions(IApiVersionDescriptionProvider provider) =&gt; _provider = provider;

        public void Configure(SwaggerGenOptions options)
        {
            foreach (var description in _provider.ApiVersionDescriptions)
            {
                options.SwaggerDoc(description.GroupName, CreateInfoForApiVersion(description));
            }
        }

        private OpenApiInfo CreateInfoForApiVersion(ApiVersionDescription description)
        {
            var info = new OpenApiInfo()
            {
                Title = &quot;Demo&quot;,
                Version = description.ApiVersion.ToString(),
                Description = &quot;API \u6587\u6863&quot;
            };

            if (description.IsDeprecated)
            {
                info.Description += &quot; \u65B9\u6CD5\u88AB\u5F03\u7528.&quot;;
            }
            return info;
        }
    }
    
 internal class SwaggerDefaultValues : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            var apiDescription = context.ApiDescription;
            operation.Deprecated |= apiDescription.IsDeprecated();

            if (operation.Parameters == null)
                return;

            foreach (var parameter in operation.Parameters)
            {
                var description = apiDescription.ParameterDescriptions.First(p =&gt; p.Name == parameter.Name);
                if (parameter.Description == null)
                {
                    parameter.Description = description.ModelMetadata?.Description;
                }

                if (parameter.Schema.Default == null &amp;&amp; description.DefaultValue != null)
                {
                    parameter.Schema.Default = new OpenApiString(description.DefaultValue.ToString());
                }

                parameter.Required |= description.IsRequired;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-\u5728-configureservices-\u4E2D" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u5728-configureservices-\u4E2D" aria-hidden="true">#</a> 3.2.2 \u5728 ConfigureServices \u4E2D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            //Versioning\u7528\u6765\u5B9E\u73B0API\u7684\u7248\u672C\u63A7\u5236
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 0);//\u9ED8\u8BA4\u7248\u672C\u53F7 \u5927\u7248\u672C/\u5C0F\u7248\u672C
                options.AssumeDefaultVersionWhenUnspecified = true;//\u6B64\u9009\u9879\u5C06\u7528\u4E8E\u4E0D\u63D0\u4F9B\u7248\u672C\u7684\u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5047\u5B9AAPI\u7684\u7248\u672C\u4E3A1.0
                options.ReportApiVersions = true;//\u5F53\u8BBE\u7F6E\u4E3Atrue\u65F6\u5019\uFF0Capi\u5C06\u8FD4\u56DE\u54CD\u5E94\u6807\u5934\u4E2D\u652F\u6301\u7684\u7248\u672C\u4FE1\u606F
            });
            //Versioning.ApiExplorer\u7528\u6765\u5B9E\u73B0\u5143\u6570\u636E\u7684\u53D1\u73B0\u5DE5\u4F5C
            services.AddVersionedApiExplorer(options =&gt;
            {
                options.GroupNameFormat = &quot;&#39;v&#39;VVV&quot;;//\u5B9A\u4E49\u4E86\u7248\u672C\u53F7\u7684\u683C\u5F0F\u5316\u65B9\u5F0F
                options.SubstituteApiVersionInUrl = true;
            });
            /*
                AddApiVersioning\uFF0C\u4E3B\u8981\u7528\u6765\u914D\u7F6E\u5411\u524D\u517C\u5BB9\uFF0C\u5B9A\u4E49\u4E86\u5982\u679C\u6CA1\u6709\u5E26\u7248\u672C\u53F7\u7684\u8BBF\u95EE\uFF0C\u4F1A\u9ED8\u8BA4\u8BBF\u95EEv1.0\u7684\u63A5\u53E3\u3002
                AddVersionedApiExplorer\u7528\u6765\u6DFB\u52A0API\u7684\u7248\u672C\u7BA1\u7406\uFF0C\u5E76\u5B9A\u4E49\u4E86\u7248\u672C\u53F7\u7684\u683C\u5F0F\u5316\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u517C\u5BB9\u7EC8\u7ED3\u70B9\u4E0A\u5E26\u7248\u672C\u53F7\u7684\u65B9\u5F0F\u3002
             */

            services.AddControllers();

            services.AddTransient&lt;IConfigureOptions&lt;SwaggerGenOptions&gt;, ConfigureSwaggerOptions&gt;();
            services.AddSwaggerGen(options =&gt; options.OperationFilter&lt;SwaggerDefaultValues&gt;());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-configure\u4F7F\u7528\u670D\u52A1-1" tabindex="-1"><a class="header-anchor" href="#_3-2-3-configure\u4F7F\u7528\u670D\u52A1-1" aria-hidden="true">#</a> 3.2.3 Configure\u4F7F\u7528\u670D\u52A1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider provider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt;
                {
                    foreach (var item in provider.ApiVersionDescriptions)
                    {
                        c.SwaggerEndpoint($&quot;/swagger/{item.GroupName}/swagger.json&quot;, &quot;Version\uFF1A&quot; + item.GroupName.ToUpperInvariant());
                    }
                });
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F:\u4F20\u5165IApiVersionDescriptionProvider provider</p></blockquote><p>\u81F3\u6B64\u5DF2\u7ECF\u5B8C\u6210\u4E86\u7248\u672C\u63A7\u5236+swagger\u3002</p><h2 id="_4-\u8BBF\u95EE\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBF\u95EE\u63A5\u53E3" aria-hidden="true">#</a> 4 \u8BBF\u95EE\u63A5\u53E3</h2><p>\u63A5\u53E3\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:5000/api/v1.0/Test
http://localhost:5000/api/v1.1/Test
http://localhost:5000/api/v2.6/Test
http://localhost:5000/api/WeatherForecast/Get \u4E0D\u53D7\u7248\u672C\u63A7\u5236
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5C31\u5FC5\u987B\u5199\u7248\u672C\u53F7\uFF0C\u5982\u679C\u4E0D\u5199\u4E5F\u6CA1\u6709\u8BBE\u7F6E\u4E0D\u53D7\u7248\u672C\u63A7\u5236\uFF0C\u90A3\u4E48\u5C31\u4F1A\u63D0\u793A404</p></blockquote><p>\u5B8C\u7ED3\u3002</p><blockquote><p>\u501F\u9274\u4E8E\uFF1Ahttps://www.cnblogs.com/tiger-wang/p/14167625.html</p></blockquote>`,35),l=[d];function a(v,t){return i(),n("div",null,l)}const c=e(r,[["render",a],["__file","version.html.vue"]]);export{c as default};
