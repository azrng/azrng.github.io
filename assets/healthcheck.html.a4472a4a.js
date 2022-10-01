import{_ as l,o as a,c as t,b as i,e as d,a as n,d as e,r}from"./app.565765f9.js";const c={},v=n(`<h1 id="_1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4ECB\u7ECD</h1><p>\u5728\u5F00\u53D1AspNet Core\u5E94\u7528\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F1A\u4E3A\u8BE5\u5E94\u7528\u516C\u5E03\u4E00\u4E2A\u7279\u6B8A\u7684\u68C0\u6D4B\u63A5\u53E3\u51FA\u6765\u3002\u8BE5\u63A5\u53E3\u7684\u76EE\u7684\u5F88\u7B80\u5355\uFF0C\u544A\u8BC9\u5916\u754C\u7A0B\u5E8F\u5F53\u524D\u7A0B\u5E8F\u73B0\u5728\u662F\u53EF\u4EE5\u8BBF\u95EE\u6216\u8005\u4E0D\u80FD\u8BBF\u95EE\u7684\uFF0C\u4FBF\u4E8E\u5916\u754C\u505A\u51FA\u76F8\u5E94\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u76D1\u63A7\u62A5\u8B66\uFF0C\u9875\u9762\u901A\u77E5\u7528\u6237\u7A0D\u4F5C\u7B49\u5F85\u7B49\u3002</p><h1 id="_2-\u5B98\u65B9\u5305\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u5B98\u65B9\u5305\u4F7F\u7528" aria-hidden="true">#</a> 2. \u5B98\u65B9\u5305\u4F7F\u7528</h1><h2 id="_2-1-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 2.1 \u57FA\u672C\u4F7F\u7528</h2><p>\u6CE8\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
	services.AddControllers();

	services.AddHealthChecks();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u7528\u4E2D\u95F4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  	    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
				# \u901A\u8FC7\u8BBF\u95EE\u5730\u5740\u52A0/health \u8FDB\u884C\u8BBF\u95EE
                endpoints.MapHealthChecks(&quot;/health&quot;);
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-\u76EE\u7684\u6027\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#_2-2-\u76EE\u7684\u6027\u68C0\u67E5" aria-hidden="true">#</a> 2.2 \u76EE\u7684\u6027\u68C0\u67E5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// mysql\u5065\u5EB7\u68C0\u67E5
    /// &lt;/summary&gt;
    public class MySQLHealthCheck : IHealthCheck
    {
        public async Task&lt;HealthCheckResult&gt; CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                return await Task.FromResult(HealthCheckResult.Healthy()).ConfigureAwait(false);
            }
            catch
            {
                return await Task.FromResult(HealthCheckResult.Unhealthy(&quot;From Sql Serve&quot;)).ConfigureAwait(false);
            }
        }
    }

    /// &lt;summary&gt;
    /// redis\u5065\u5EB7\u68C0\u67E5
    /// &lt;/summary&gt;
    public class RedisHealthCheck : IHealthCheck
    {
        public Task&lt;HealthCheckResult&gt; CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            return Task.FromResult(HealthCheckResult.Healthy());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            //\u53EA\u6709\u5F53\u6240\u6709\u7684\u68C0\u67E5\u5668\u90FD\u8FD4\u56DE\u4E3AHealthy\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u8BA4\u4E3A\u662F\u5065\u5EB7\u3002
            services.AddHealthChecks()
                .AddCheck&lt;MySQLHealthCheck&gt;(&quot;mysql_check&quot;)
                .AddCheck&lt;RedisHealthCheck&gt;(&quot;redis_check&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure\u65B9\u6CD5\u4E0D\u9700\u8981\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u662F\u5F53\u68C0\u67E5\u5668\u90FD\u8FD4\u56DE\u5065\u5EB7\u65F6\u5019\u624D\u8BA4\u4E3A\u662F\u5065\u5EB7\u3002</p><p>\u5355\u4E2A\u68C0\u67E5\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u53C8\u60F3\u8FDB\u884C\u5355\u4E2A\u68C0\u67E5\uFF0C\u90A3\u5C31\u9700\u8981\u5728 <code>endpoints</code> \u7684\u914D\u7F6E\u4E2D\u65B0\u589E\u53E6\u5916\u7684\u8DEF\u7531\u6620\u5C04\u89C4\u5219:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt; c.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;WebApplication7 v1&quot;));
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();

                endpoints.MapHealthChecks(&quot;/mysqlhealth&quot;, new HealthCheckOptions() {//mysql
                    Predicate = s =&gt; s.Name.Equals(&quot;mysql_check&quot;),
                    ResponseWriter = WriteResponse
                });

                endpoints.MapHealthChecks(&quot;/redishealth&quot;, new HealthCheckOptions() //redis
                {
                    Predicate = s =&gt; s.Name.Equals(&quot;redis_check&quot;),
                    ResponseWriter = WriteResponse
                });
            });
        }
        /// &lt;summary&gt;
        /// \u8FD4\u56DE\u6307\u5B9A\u683C\u5F0F
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;context&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;result&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private static Task WriteResponse(HttpContext context, HealthReport result)
        {
            context.Response.ContentType = &quot;application/json&quot;;

            var json = new JObject(
                new JProperty(&quot;status&quot;, result.Status.ToString()),
                new JProperty(&quot;results&quot;, new JObject(result.Entries.Select(pair =&gt; new JProperty(pair.Key,
                    new JObject(new JProperty(&quot;status&quot;, pair.Value.Status.ToString()),
                        new JProperty(&quot;description&quot;, pair.Value.Description),
                        new JProperty(&quot;data&quot;, new JObject(pair.Value.Data.Select(
                            p =&gt; new JProperty(p.Key, p.Value))))))))));

            return context.Response.WriteAsync(json.ToString());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),u=e("\u901A\u8FC7\u8BBF\u95EE\u5730\u5740\uFF1A"),o={href:"http://localhost:5000/redishealth",target:"_blank",rel:"noopener noreferrer"},m=e("http://localhost:5000/mysqlhealth"),p=e(" \u67E5\u770Bmysql\u8FDE\u63A5\u72B6\u6001"),b=n(`<p>\u901A\u8FC7\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://localhost:5000/redishealth \u67E5\u770Bredis\u8FDE\u63A5\u72B6\u6001</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619445707290-24896cd8-84f8-4c04-b00d-7d9905838b1b.png" alt="img"></p><h1 id="_3-\u7B2C\u4E09\u5305\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#_3-\u7B2C\u4E09\u5305\u652F\u6301" aria-hidden="true">#</a> 3. \u7B2C\u4E09\u5305\u652F\u6301</h1><h2 id="_3-1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4ECB\u7ECD" aria-hidden="true">#</a> 3.1 \u4ECB\u7ECD</h2><p>\u662F\u4E00\u4E2A\u7528\u4E8E.NetCore\u5065\u5EB7\u68C0\u67E5\u7684\u5305\uFF0C\u652F\u6301\u7684\u7248\u672C\u6709\uFF1A5.0\uFF0C3.1\uFF0C3.0\uFF0C2.2</p><p>GitHub\uFF1Ahttps://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks</p><p>\u652F\u6301\u4E00\u4E00\u4E9B\u5C01\u88C5\u7684\u68C0\u67E5</p><ul><li><p>Sql Server</p></li><li><p>MySql</p></li><li><p>Oracle</p></li><li><p>Sqlite</p></li><li><p>RavenDB</p></li><li><p>Postgres</p></li><li><p>EventStore</p></li><li><p>RabbitMQ</p></li><li><p>IbmMQ</p></li><li><p>Elasticsearch</p></li><li><p>CosmosDb</p></li><li><p>Solr</p></li><li><p>Redis</p></li><li><p>SendGrid</p></li><li><p>System: Disk Storage, Private Memory, Virtual Memory, Process, Windows Service</p></li><li><p>Azure Service Bus: EventHub, Queue and Topics</p></li><li><p>Azure Storage: Blob, Queue and Table</p></li><li><p>Azure Key Vault</p></li><li><p>Azure DocumentDb</p></li><li><p>Azure IoT Hub</p></li><li><p>Amazon DynamoDb</p></li><li><p>Amazon S3</p></li><li><p>Google Cloud Firestore</p></li><li><p>Network: Ftp, SFtp, Dns, Tcp port, Smtp, Imap, Ssl</p></li><li><p>MongoDB</p></li><li><p>Kafka</p></li><li><p>Identity Server</p></li><li><p>Uri: single uri and uri groups</p></li><li><p>Consul</p></li><li><p>Hangfire</p></li><li><p>SignalR</p></li><li><p>Kubernetes</p></li><li><p>ArangoDB</p></li><li><p>Gremlin</p></li></ul><p>\u5BF9\u5E94\u7684Nuget\u5305\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Install-Package AspNetCore.HealthChecks.System
Install-Package AspNetCore.HealthChecks.Network
Install-Package AspNetCore.HealthChecks.SqlServer
Install-Package AspNetCore.HealthChecks.MongoDb
Install-Package AspNetCore.HealthChecks.Npgsql
Install-Package AspNetCore.HealthChecks.Elasticsearch
Install-Package AspNetCore.HealthChecks.CosmosDb
Install-Package AspNetCore.HealthChecks.Solr
Install-Package AspNetCore.HealthChecks.Redis
Install-Package AspNetCore.HealthChecks.EventStore
Install-Package AspNetCore.HealthChecks.AzureStorage
Install-Package AspNetCore.HealthChecks.AzureServiceBus
Install-Package AspNetCore.HealthChecks.AzureKeyVault
Install-Package AspNetCore.HealthChecks.Azure.IoTHub
Install-Package AspNetCore.HealthChecks.MySql
Install-Package AspNetCore.HealthChecks.DocumentDb
Install-Package AspNetCore.HealthChecks.SqLite
Install-Package AspNetCore.HealthChecks.RavenDB
Install-Package AspNetCore.HealthChecks.Kafka
Install-Package AspNetCore.HealthChecks.RabbitMQ
Install-Package AspNetCore.HealthChecks.IbmMQ
Install-Package AspNetCore.HealthChecks.OpenIdConnectServer
Install-Package AspNetCore.HealthChecks.DynamoDB
Install-Package AspNetCore.HealthChecks.Oracle
Install-Package AspNetCore.HealthChecks.Uris
Install-Package AspNetCore.HealthChecks.Aws.S3
Install-Package AspNetCore.HealthChecks.Consul
Install-Package AspNetCore.HealthChecks.Hangfire
Install-Package AspNetCore.HealthChecks.SignalR
Install-Package AspNetCore.HealthChecks.Kubernetes
Install-Package AspNetCore.HealthChecks.Gcp.CloudFirestore
Install-Package AspNetCore.HealthChecks.SendGrid
Install-Package AspNetCore.HealthChecks.ArangoDb
Install-Package AspNetCore.HealthChecks.Gremlin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-2-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 3.2 \u57FA\u672C\u4F7F\u7528</h2><p>\u672C\u6B21\u4E8B\u4F8B\u6765\u6F14\u793A\u4E00\u4E2A\u5E26UI\u754C\u9762\u7684\u5065\u5EB7\u76D1\u63A7\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u9700\u8981\u4EE5\u4E0Bnuget\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;AspNetCore.HealthChecks.UI&quot; Version=&quot;5.0.1&quot; /&gt;
    &lt;PackageReference Include=&quot;AspNetCore.HealthChecks.UI.Client&quot; Version=&quot;5.0.1&quot; /&gt;
    &lt;PackageReference Include=&quot;AspNetCore.HealthChecks.UI.InMemory.Storage&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90E8\u5206\u4EE3\u7801\u4F7F\u7528\u4E0A\u8FF0\u7684\u4F8B\u5B50</p><p>\u6CE8\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddHealthChecks()
                .AddCheck&lt;MySQLHealthCheck&gt;(&quot;mysql_check&quot;)
                .AddCheck&lt;RedisHealthCheck&gt;(&quot;redis_check&quot;);

            services.AddHealthChecksUI().AddInMemoryStorage();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();

                endpoints.MapHealthChecks(&quot;/mysqlhealth&quot;, new HealthCheckOptions()
                {
                    Predicate = s =&gt; s.Name.Equals(&quot;mysql_check&quot;),
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
                });

                endpoints.MapHealthChecks(&quot;/redishealth&quot;, new HealthCheckOptions()
                {
                    Predicate = s =&gt; s.Name.Equals(&quot;redis_check&quot;),
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
                });

                endpoints.MapHealthChecksUI();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  },
  &quot;HealthChecksUI&quot;: {
    &quot;HealthChecks&quot;: [
      {
        &quot;Name&quot;: &quot;HTTP-Api-mysqlhealth&quot;,
        &quot;Uri&quot;: &quot;/mysqlhealth&quot;//\u65B0\u7248\u672C\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84
      },
      {
        &quot;Name&quot;: &quot;HTTP-Api-redishealth&quot;,
        &quot;Uri&quot;: &quot;/redishealth&quot;
      }
    ],
    &quot;Webhooks&quot;: [
      {
        &quot;Name&quot;: &quot;&quot;,
        &quot;Uri&quot;: &quot;&quot;,
        &quot;Payload&quot;: &quot;&quot;,
        &quot;RestoredPayload&quot;: &quot;&quot;
      }
    ],
    &quot;EvaluationTimeInSeconds&quot;: 10,//\u8F6E\u8BE2\u95F4\u9694
    &quot;MinimumSecondsBetweenFailureNotifications&quot;: 60
  },
  &quot;AllowedHosts&quot;: &quot;*&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u7A0B\u5E8F\u8BBF\u95EE\uFF1A/healthchecks-ui \u5730\u5740</p>`,21);function h(g,C){const s=r("ExternalLinkIcon");return a(),t("div",null,[v,i("p",null,[u,i("a",o,[m,d(s)]),p]),b])}const q=l(c,[["render",h],["__file","healthcheck.html.vue"]]);export{q as default};
