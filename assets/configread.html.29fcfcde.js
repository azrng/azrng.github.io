import{_ as t,o as s,c as a,b as e,e as d,a as o,d as i,r}from"./app.565765f9.js";const l={},u=o(`<h2 id="_1-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF4\u660E" aria-hidden="true">#</a> 1. \u8BF4\u660E</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8BFB\u53D6\u914D\u7F6EConfiguration\u7684\u9ED8\u8BA4\u4F18\u5148\u7EA7\uFF1AConfigureAppConfiguration(\u81EA\u5B9A\u4E49\u8BFB\u53D6)&gt;CommandLine(\u547D\u4EE4\u884C\u53C2\u6570)&gt;Environment(\u73AF\u5883\u53D8\u91CF)&gt;appsetting.json(\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6)&gt;UseSetting\u7684\u987A\u5E8F</p><p>\u539F\u56E0\uFF1A\u8BFB\u53D6\u914D\u7F6E\u7684\u987A\u5E8F\u662F\u540E\u6765\u8005\u5C45\u4E0A\u6A21\u5F0F\uFF0C\u540E\u6765\u6CE8\u518C\u7684\u4F1A\u4F18\u5148\u88AB\u8BFB\u53D6\u5230\u3002</p><p>\u9ED8\u8BA4\u73AF\u5883\uFF1ADevelopment\u3001Production</p><h2 id="_2-\u83B7\u53D6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u83B7\u53D6\u914D\u7F6E" aria-hidden="true">#</a> 2. \u83B7\u53D6\u914D\u7F6E</h2><h2 id="_2-1-\u83B7\u53D6\u5355\u4E2A\u9879" tabindex="-1"><a class="header-anchor" href="#_2-1-\u83B7\u53D6\u5355\u4E2A\u9879" aria-hidden="true">#</a> 2.1 \u83B7\u53D6\u5355\u4E2A\u9879</h2><p>\u6D4B\u8BD5\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  },
  &quot;RabbitMQ&quot;: {
    &quot;Hosts&quot;: [ &quot;**.***.***.**&quot; ],
    &quot;Port&quot;: 5672,
    &quot;UserName&quot;: &quot;admin&quot;,
    &quot;Password&quot;: &quot;123456789&quot;,
    &quot;VirtualHost&quot;: &quot;myQueue&quot;
  },
  &quot;array&quot;: {
    &quot;entries&quot;: {
      &quot;0&quot;: &quot;value00&quot;,
      &quot;1&quot;: &quot;value10&quot;,
      &quot;2&quot;: &quot;value20&quot;,
      &quot;4&quot;: &quot;value40&quot;,
      &quot;5&quot;: &quot;value50&quot;
    }
  },
  &quot;AllowedHosts&quot;: &quot;*&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-1-getvalue" tabindex="-1"><a class="header-anchor" href="#_2-1-1-getvalue" aria-hidden="true">#</a> 2.1.1 GetValue</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u503C\u662Fint\u7C7B\u578B
var a1 = Configuration.GetValue&lt;int&gt;(&quot;RabbitMQ:Port&quot;);
//\u503C\u662F\u5B57\u7B26\u4E32
var a2 = Configuration.GetValue&lt;string&gt;(&quot;RabbitMQ:UserName&quot;);

//\u83B7\u53D6\u6570\u7EC4\u7B2C\u4E00\u4E2A
var a0 = Configuration[&quot;RabbitMQ:Hosts:0&quot;];

var a3 = Configuration[&quot;RabbitMQ:UserName&quot;];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-2-getsection" tabindex="-1"><a class="header-anchor" href="#_2-1-2-getsection" aria-hidden="true">#</a> 2.1.2 GetSection</h3><p>\u4F1A\u8FD4\u56DE\u5177\u6709\u6307\u5B9A\u5B50\u8282\u952E\u7684\u914D\u7F6E\u5B50\u8282\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
//\u503C\u662F\u6570\u7EC4
var a0 = Configuration.GetSection(&quot;RabbitMQ:Hosts&quot;).Get&lt;string[]&gt;();

var key1 = Configuration.GetSection(&quot;array:entries&quot;)[&quot;0&quot;];//value00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>GetSection</code> \u6C38\u8FDC\u4E0D\u4F1A\u8FD4\u56DE <code>null</code>\u3002 \u5982\u679C\u627E\u4E0D\u5230\u5339\u914D\u7684\u8282\uFF0C\u5219\u8FD4\u56DE\u7A7A <code>IConfigurationSection</code>\u3002</p><h3 id="_2-1-3-getchildren-\u548C-exists" tabindex="-1"><a class="header-anchor" href="#_2-1-3-getchildren-\u548C-exists" aria-hidden="true">#</a> 2.1.3 GetChildren \u548C Exists</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var selection = Configuration.GetSection(&quot;array:entries&quot;);
if (!selection.Exists())
{
    throw new Exception(&quot;section2 does not exist.&quot;);
}
var children = selection.GetChildren();
var strList = new List&lt;string&gt;();
foreach (var subSection in children)
{
    strList.Add(subSection.Key + &quot;:key&quot;);
}
var str = JsonConvert.SerializeObject(strList);//[&quot;0:key&quot;,&quot;1:key&quot;,&quot;2:key&quot;,&quot;4:key&quot;,&quot;5:key&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u6620\u5C04\u9879\u5230\u5F3A\u7C7B\u578B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6620\u5C04\u9879\u5230\u5F3A\u7C7B\u578B\u5BF9\u8C61" aria-hidden="true">#</a> 2.2 \u6620\u5C04\u9879\u5230\u5F3A\u7C7B\u578B\u5BF9\u8C61</h3><p>\u6A21\u578B\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class RabbitMQConfig
{
    public const string RabbitMQ = &quot;RabbitMQ&quot;;
    public string[] Hosts { get; set; }

    public int Port { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }

    public string VirtualHost { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &quot;RabbitMQ&quot;: {
    &quot;Hosts&quot;: [ &quot;**.***.***.**&quot; ],
    &quot;Port&quot;: 5672,
    &quot;UserName&quot;: &quot;admin&quot;,
    &quot;Password&quot;: &quot;123456789&quot;,
    &quot;VirtualHost&quot;: &quot;myQueue&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-\u6620\u5C04\u9879\u5230\u6A21\u578B\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u6620\u5C04\u9879\u5230\u6A21\u578B\u7C7B" aria-hidden="true">#</a> 2.2.1 \u6620\u5C04\u9879\u5230\u6A21\u578B\u7C7B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var info = new RabbitMQConfig();
Configuration.Bind(RabbitMQConfig.RabbitMQ, info);
//or
var info2 = new RabbitMQConfig();
//Bind\u65B9\u6CD5\u7684\u53C2\u6570\u53EF\u4EE5\u589E\u52A0\u914D\u7F6E\u7ED1\u5B9A\u5230\u79C1\u6709\u7C7B\u4E0A
Configuration.GetSection(RabbitMQConfig.RabbitMQ).Bind(info2);
//or
var info3 = Configuration.GetSection(RabbitMQConfig.RabbitMQ).Get&lt;RabbitMQConfig&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-\u6CE8\u5165\u6A21\u578B\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u6CE8\u5165\u6A21\u578B\u7C7B" aria-hidden="true">#</a> 2.2.2 \u6CE8\u5165\u6A21\u578B\u7C7B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//startup\u914D\u7F6E 
services.Configure&lt;RabbitMQConfig&gt;(Configuration.GetSection(RabbitMQConfig.RabbitMQ));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-3-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u4F7F\u7528" aria-hidden="true">#</a> 2.2.3 \u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly RabbitMQConfig _rabbitMQConfig;
public WeatherForecastController(IOptions&lt;RabbitMQConfig&gt; options)
{
    _rabbitMQConfig = options.Value;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),v=i("\u7A0B\u5E8F\u542F\u52A8\u540E\u518D\u4FEE\u6539 JSON \u914D\u7F6E\u6587\u4EF6\u6240\u505A\u7684\u66F4\u6539\u83B7\u53D6\u4E0D\u5230\u3002 \u82E5\u8981\u8BFB\u53D6\u5728\u5E94\u7528\u542F\u52A8\u540E\u7684\u66F4\u6539\uFF0C\u8BF7\u4F7F\u7528 "),c={href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/configuration/options?view=aspnetcore-5.0#ios",target:"_blank",rel:"noopener noreferrer"},b=i("IOptionsSnapshot");function m(q,g){const n=r("ExternalLinkIcon");return s(),a("div",null,[u,e("blockquote",null,[e("p",null,[v,e("a",c,[b,d(n)])])])])}const p=t(l,[["render",m],["__file","configread.html.vue"]]);export{p as default};
