import{_ as e,o as i,c as n,a as d}from"./app.565765f9.js";const s={},t=d(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u7B56\u7565\u4E0A\u7684\u9650\u5236\u53EF\u4EE5\u6709\u6548\u7EC4\u7EC7Ajax\u5411\u53E6\u5916\u7684\u4E00\u4E2A\u670D\u52A1\u53D1\u8D77\u8BF7\u6C42\uFF0C\u8FD9\u5C31\u662F\u8457\u540D\u7684\u540C\u6E90\u7B56\u7565\u3002\u8DE8\u57DF\u4EC5\u4EC5\u662F\u6D4F\u89C8\u5668\u7684\u884C\u4E3A\uFF0C\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u6216\u8005\u5176\u4ED6\u5DE5\u5177\u53EF\u4EE5\u7ED5\u8FC7\u3002</p><p>\u4E0D\u540C\u7684\u57DF\u540D\u3001\u4E0D\u7528\u7684\u7AEF\u53E3\u3001\u4E0D\u7528\u7684\u534F\u8BAE\u4E4B\u95F4\u8BF7\u6C42\u90FD\u4F1A\u51FA\u73B0\u8DE8\u57DF\u95EE\u9898\u3002</p><h2 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h2><p>\u5982\u4F55\u7A81\u7834\u8FD9\u79CD\u9650\u5236\uFF0C\u53EF\u4EE5\u4F7F\u7528CORS\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void AddCommon(this IServiceCollection services)
        {
            services.AddCors(options =&gt;
            {
               options.AddPolicy(&quot;AllowAll&quot;, p =&gt;
                {
                    p.AllowAnyOrigin()//\u5141\u8BB8\u4EFB\u52A1\u6765\u6E90\u7684\u4E3B\u673A\u8BBF\u95EE
                      .AllowAnyMethod()//\u5141\u8BB8\u4EFB\u4F55\u8BF7\u6C42\u65B9\u5F0F
                      .AllowAnyHeader();//\u5141\u8BB8\u4EFB\u4F55\u5934\u90E8
                      //.AllowCredentials();//\u5141\u8BB8\u4EFB\u4F55\u8BC1\u4E66     
                });
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Core3.0\u4E4B\u540E\u4E0D\u5141\u8BB8Origin\u548CCredentials\u90FD\u4E0D\u505A\u9650\u5236</p><p>SetIsOriginAllowed((_) =&gt; true) \u8FD9\u6837\u5B50\u5C31\u53EF\u4EE5\u548CAllowCredentials\u8FDB\u884C\u642D\u914D \uFF0C\u6709\u65F6\u5019\u4E0D\u53EF\u4EE5\u8C03\u6574\u4E0B\u987A\u5E8F</p><p><strong>AddCors</strong>\u6765\u6DFB\u52A0\u4E00\u4E2A\u8DE8\u57DF\u5904\u7406\u65B9\u5F0F\uFF0C<strong>AddPolicy</strong>\u5C31\u662F\u52A0\u4E2A\u5DE1\u903B\u5B98\uFF0C\u770B\u770B\u7B26\u5408\u89C4\u5219\u7684\u653E\u8FDB\u6765\uFF0C\u4E0D\u7B26\u5408\u7684\u76F4\u63A5\u8D76\u51FA\u53BB\u3002</p><table><thead><tr><th><strong>\u65B9\u6CD5</strong></th><th><strong>\u4ECB\u7ECD</strong></th></tr></thead><tbody><tr><td>AllowAnyOrigin</td><td>\u5141\u8BB8\u6240\u6709\u7684\u57DF\u540D\u8BF7\u6C42</td></tr><tr><td>AllowAnyMethod</td><td>\u5141\u8BB8\u6240\u6709\u7684\u8BF7\u6C42\u65B9\u5F0FGET/POST/PUT/DELETE</td></tr><tr><td>AllowAnyHeader</td><td>\u5141\u8BB8\u6240\u6709\u7684\u5934\u90E8\u53C2\u6570</td></tr><tr><td>AllowCredentials</td><td>\u5141\u8BB8\u643A\u5E26Cookie</td></tr></tbody></table><p>\u8FD9\u91CC\u6211\u4F7F\u7528\u7684\u662F\u5141\u8BB8\u6240\u6709\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u4E1A\u52A1\u9700\u8981\u6765\u8C03\u6574\uFF0C\u6BD4\u5982\u53EA\u5141\u8BB8\u90E8\u5206\u57DF\u540D\u8BBF\u95EE\uFF0C\u90E8\u5206\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u90E8\u5206Header\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services.AddCors(options =&gt;
            {
               options.AddPolicy(&quot;AllowSome&quot;, p =&gt;
                 {
                    p.WithOrigins(&quot;https://www.baidu.com&quot;)
                    .WithMethods(&quot;GET&quot;, &quot;POST&quot;)
                    .WithHeaders(HeaderNames.ContentType, &quot;x-custom-header&quot;);
                 });
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5141\u8BB8\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5141\u8BB8\u8DE8\u57DF" aria-hidden="true">#</a> \u5141\u8BB8\u8DE8\u57DF</h1><p>\u5728Configure\u4E2D\u58F0\u660E\u5168\u5C40\u8DE8\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
           app.UseCors(&quot;AllowAll&quot;); 
           
            app.UseHttpsRedirection();
            app.UseMvc();      
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EA\u5BF9\u9762\u67D0\u4E00\u4E9B\u63A7\u5236\u5668\u8FDB\u884C\u8DE8\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[EnableCors(&quot;AllowSome&quot;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u5BF9\u67D0\u4E00\u4E9B\u65B9\u6CD5\u8FDB\u884C\u8DE8\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[EnableCors(&quot;AllowSome&quot;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u67D0\u4E2AAction\u9650\u5236\u8DE8\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[DisableCors]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),l=[t];function a(r,o){return i(),n("div",null,l)}const u=e(s,[["render",a],["__file","kuayu.html.vue"]]);export{u as default};
