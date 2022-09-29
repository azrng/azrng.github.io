import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const t={},l=s(`<h1 id="\u5F00\u7BC7\u8BED" tabindex="-1"><a class="header-anchor" href="#\u5F00\u7BC7\u8BED" aria-hidden="true">#</a> \u5F00\u7BC7\u8BED</h1><p>\u672C\u6587\u4E3B\u8981\u662F\u56DE\u987E\u4E0B\u4ECE\u9879\u76EE\u521B\u5EFA\u5230\u751F\u6210\u6570\u636E\u5230\u6570\u636E\u5E93(\u4EE3\u7801\u4F18\u5148)\u7684\u5168\u90E8\u8FC7\u7A0B\u3002\u91C7\u7528EFCore\u4F5C\u4E3AORM\u6846\u67B6\u3002</p><p>\u672C\u6B21\u793A\u4F8B\u73AF\u5883\uFF1Avs2019\u3001net5\u3001mysql</p><h1 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h1><p>\u672C\u6B21\u4E8B\u4F8B\u4EE3\u7801\u662F\u7528\u8FC7vs2019\u521B\u5EFA\u7684ASP.NET Core Web API\u9879\u76EE</p><p>\u53EF\u4EE5\u901A\u8FC7\u53EF\u89C6\u5316\u754C\u9762\u521B\u5EFA\u6216\u8005\u901A\u8FC7\u547D\u4EE4\u884C\u521B\u5EFA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dotnet new webapi -o Net5ByDocker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u521B\u5EFA\u5B9E\u4F53\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5B9E\u4F53\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA\u5B9E\u4F53\u7C7B</h1><p>\u5B89\u88C5\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Pomelo.EntityFrameworkCore.MySql&quot; Version=&quot;5.0.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Pomelo.EntityFrameworkCore.MySql.Json.Newtonsoft&quot; Version=&quot;5.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u589E\u52A0\u5B9E\u4F53\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    [Table(&quot;user&quot;)]
    public class User
    {
        public User()
        {
            Id = Guid.NewGuid().ToString();
        }

        public User(string account, string password, string creater) : this()
        {
            Account = account;
            Password = password;
            Deleted = false;
            SetCreater(creater);
        }

        [Key]
        [Comment(&quot;\u4E3B\u952E&quot;)]
        [StringLength(36)]
        [Required]
        public string Id { get; private set; }

        [Comment(&quot;\u5E10\u53F7&quot;)]
        [StringLength(36)]
        [Required]
        public string Account { get; private set; }

        [Comment(&quot;\u5BC6\u7801&quot;)]
        [StringLength(36)]
        [Required]
        public string Password { get; private set; }

        [Comment(&quot;\u4F59\u989D&quot;)]
        [Column(TypeName = &quot;decimal(18, 2)&quot;)]
        [Required]
        public decimal Money { get; set; }

        [Comment(&quot;\u662F\u5426\u5220\u9664&quot;)]
        [Column(TypeName = &quot;tinyint(1)&quot;)]
        [Required]
        public bool Deleted { get; private set; }

        [Comment(&quot;\u521B\u5EFA\u4EBA&quot;)]
        [StringLength(20)]
        [Required]
        public string Creater { get; private set; }

        [Comment(&quot;\u521B\u5EFA\u65F6\u95F4&quot;)]
        [Required]
        public DateTime CreateTime { get; private set; }

        [Comment(&quot;\u4FEE\u6539\u4EBA&quot;)]
        [StringLength(20)]
        [Required]
        public string Modifyer { get; private set; }

        [Comment(&quot;\u4FEE\u6539\u65F6\u95F4&quot;)]
        [Required]
        public DateTime ModifyTime { get; private set; }

        public void SetCreater(string name)
        {
            Creater = name;
            CreateTime = DateTime.Now;
            SetModifyer(name);
        }

        public void SetModifyer(string name)
        {
            Modifyer = name;
            ModifyTime = DateTime.Now;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u53EA\u662F\u589E\u52A0\u5B9E\u4F53\u7C7B\u7C7B\u578B\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u53EF\u80FD\u8FD9\u79CD\u770B\u7740\u6BD4\u8F83\u4E71\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7OnModelCreating\u5B9E\u73B0\uFF0C\u8BE6\u60C5\u770B\u53C2\u8003\u6587\u6863</p><p>\u589E\u52A0\u6570\u636E\u5E93\u4E0A\u4E0B\u6587OpenDbContext</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class OpenDbContext : DbContext
    {
        public OpenDbContext(DbContextOptions&lt;OpenDbContext&gt; options)
            : base(options)
        {
        }

        public DbSet&lt;User&gt; Users { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Startup\u6CE8\u5165\u8FDE\u63A5\u6570\u636E\u5E93\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            var connection = Configuration[&quot;DbConfig:Mysql:ConnectionString&quot;];
            var migrationsAssembly = IntrospectionExtensions.GetTypeInfo(typeof(Startup)).Assembly.GetName().Name;
            services.AddDbContext&lt;OpenDbContext&gt;(option =&gt; option.UseMySql(connection, ServerVersion.AutoDetect(connection), x =&gt;
            {
                x.UseNewtonsoftJson();
                x.MigrationsAssembly(migrationsAssembly);
            }));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u751F\u6210\u8FC1\u79FB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8FC1\u79FB\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u8FC1\u79FB\u6587\u4EF6</h1><p>\u5F15\u7528\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Microsoft.EntityFrameworkCore.Design&quot; Version=&quot;5.0.5&quot;&gt;
&lt;PackageReference Include=&quot;Microsoft.EntityFrameworkCore.Tools&quot; Version=&quot;5.0.5&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FC1\u79FB\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add-migration Init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620543658741-00fd688e-8f23-4709-be13-22766cf2cfe4.png" alt="img"></p><p>\u8981\u770B\u4E0B\u751F\u6210\u7684\u8FC1\u79FB\u6587\u4EF6\u662F\u5426\u662F\u81EA\u5DF1\u9884\u671F\u7684\u90A3\u6837\u5B50\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u4E00\u6B65\u5C31\u751F\u6210\u6570\u636E\u5E93\uFF0C\u547D\u4EE4\uFF1AUpdate-Database</p><h1 id="\u6570\u636E\u79CD\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u79CD\u5B50" aria-hidden="true">#</a> \u6570\u636E\u79CD\u5B50</h1><p>\u589E\u52A0OpenDbSend\u7C7B\uFF0C\u6DFB\u52A0\u6570\u636E\u79CD\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class OpenDbSend
    {
        /// &lt;summary&gt;
        /// \u751F\u6210\u6570\u636E\u5E93\u4EE5\u53CA\u6570\u636E\u79CD\u5B50
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;dbContext&quot;&gt;\u6570\u636E\u5E93\u4E0A\u4E0B\u6587&lt;/param&gt;
        /// &lt;param name=&quot;loggerFactory&quot;&gt;\u65E5\u5FD7&lt;/param&gt;
        /// &lt;param name=&quot;retry&quot;&gt;\u91CD\u8BD5\u6B21\u6570&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static async Task SeedAsync(OpenDbContext dbContext,
            ILoggerFactory loggerFactory,
            int? retry = 0)
        {
            int retryForAvailability = retry.Value;
            try
            {
                dbContext.Database.Migrate();//\u5982\u679C\u5F53\u524D\u6570\u636E\u5E93\u4E0D\u5B58\u5728\u6309\u7167\u5F53\u524D model \u521B\u5EFA\uFF0C\u5982\u679C\u5B58\u5728\u5219\u5C06\u6570\u636E\u5E93\u8C03\u6574\u5230\u548C\u5F53\u524D model \u5339\u914D
                await InitializeAsync(dbContext).ConfigureAwait(false);

                //if (dbContext.Database.EnsureCreated())//\u5982\u679C\u5F53\u524D\u6570\u636E\u5E93\u4E0D\u5B58\u5728\u6309\u7167\u5F53\u524D model\u521B\u5EFA\uFF0C\u5982\u679C\u5B58\u5728\u5219\u4E0D\u7BA1\u4E86\u3002
                //  await InitializeAsync(dbContext).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                if (retryForAvailability &lt; 3)
                {
                    retryForAvailability++;
                    var log = loggerFactory.CreateLogger&lt;OpenDbSend&gt;();
                    log.LogError(ex.Message);
                    await SeedAsync(dbContext, loggerFactory, retryForAvailability).ConfigureAwait(false);
                }
            }
        }

        /// &lt;summary&gt;
        /// \u521D\u59CB\u5316\u6570\u636E
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;context&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static async Task InitializeAsync(OpenDbContext context)
        {
            if (!context.Set&lt;User&gt;().Any())
            {
                await context.Set&lt;User&gt;().AddAsync(new User(&quot;azrng&quot;, &quot;123456&quot;, &quot;azrng&quot;)).ConfigureAwait(false);
                await context.Set&lt;User&gt;().AddAsync(new User(&quot;\u5F20\u4E09&quot;, &quot;123456&quot;, &quot;azrng&quot;)).ConfigureAwait(false);
            }
            await context.SaveChangesAsync().ConfigureAwait(false);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u9879\u76EE\u542F\u52A8\u65F6\u5019\u8C03\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService&lt;ILoggerFactory&gt;();
                var _logger = loggerFactory.CreateLogger&lt;Program&gt;();
                try
                {
                    var openContext = services.GetRequiredService&lt;OpenDbContext&gt;();
                    await OpenDbSend.SeedAsync(openContext, loggerFactory).ConfigureAwait(false);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $&quot;\u9879\u76EE\u542F\u52A8\u51FA\u9519  {ex.Message}&quot;);
                }
            }

            await host.RunAsync().ConfigureAwait(false);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u751F\u6210\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6570\u636E\u5E93" aria-hidden="true">#</a> \u751F\u6210\u6570\u636E\u5E93</h1><p>\u542F\u52A8\u9879\u76EE\uFF0C\u81EA\u52A8\u751F\u6210\u6570\u636E\u5E93</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620546536896-91cc7623-b6fa-457c-acec-d465cb06428e.png" alt="img"></p><p>\u8868\u7ED3\u6784\u5982\u4E0B</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620546396376-896cc74f-197e-465e-811f-168ff86485c4.png" alt="img"></p><p>\u5982\u679C\u540E\u671F\u6570\u636E\u5E93\u5B57\u6BB5\u6216\u8005\u7ED3\u6784\u6709\u53D8\u52A8\uFF0C\u53EF\u4EE5\u518D\u6B21\u751F\u6210\u8FC1\u79FB\u6587\u4EF6\u7136\u540E\u751F\u6210\u6570\u636E\u5E93</p><h1 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// \u7528\u6237\u63A5\u53E3
    /// &lt;/summary&gt;
    public interface IUserService
    {
        string GetName();

        /// &lt;summary&gt;
        /// \u67E5\u8BE2\u7528\u6237\u4FE1\u606F
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;account&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        Task&lt;User&gt; GetDetailsAsync(string account);
    }

    /// &lt;summary&gt;
    /// \u7528\u6237\u5B9E\u73B0
    /// &lt;/summary&gt;
    public class UserService : IUserService
    {
        private readonly OpenDbContext _dbContext;

        public UserService(OpenDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public string GetName()
        {
            return &quot;AZRNG&quot;;
        }

        ///&lt;inheritdoc cref=&quot;IUserService.GetDetailsAsync(string)&quot;/&gt;
        public async Task&lt;User&gt; GetDetailsAsync(string account)
        {
            return await _dbContext.Set&lt;User&gt;().FirstOrDefaultAsync(t =&gt; t.Account == account).ConfigureAwait(false);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u66F4\u63A8\u8350\u5EFA\u7ACB\u6307\u5B9A\u7684\u8FD4\u56DEModel\u7C7B\uFF0C\u7136\u540E\u53EA\u67E5\u8BE2\u9700\u8981\u7684\u5185\u5BB9\uFF0C\u4E0D\u76F4\u63A5\u8FD4\u56DE\u5B9E\u4F53\u7C7B</p><p>\u63A7\u5236\u5668\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        /// &lt;summary&gt;
        /// \u67E5\u8BE2\u7528\u6237\u8BE6\u60C5
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;account&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public async Task&lt;ActionResult&lt;User&gt;&gt; GetDetailsAsync(string account)
        {
            return await _userService.GetDetailsAsync(account).ConfigureAwait(false);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;id&quot;: &quot;e8976d0a-6ee9-4e2e-b8d8-1fe6e85b727b&quot;,
  &quot;account&quot;: &quot;azrng&quot;,
  &quot;password&quot;: &quot;123456&quot;,
  &quot;money&quot;: 0,
  &quot;deleted&quot;: false,
  &quot;creater&quot;: &quot;azrng&quot;,
  &quot;createTime&quot;: &quot;2021-05-09T15:48:45.730302&quot;,
  &quot;modifyer&quot;: &quot;azrng&quot;,
  &quot;modifyTime&quot;: &quot;2021-05-09T15:48:45.730425&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h1><p>\u5B9E\u4F53\u7C7B\u578B\uFF1Ahttps://docs.microsoft.com/zh-cn/ef/core/modeling/entity-types?tabs=data-annotations</p><p>\u5B9E\u4F53\u5C5E\u6027\uFF1Ahttps://docs.microsoft.com/zh-cn/ef/core/modeling/entity-properties?tabs=data-annotations%2Cwithout-nrt</p>`,46),d=[l];function a(r,v){return i(),n("div",null,d)}const c=e(t,[["render",a],["__file","createdb.html.vue"]]);export{c as default};
