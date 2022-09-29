import{_ as e,o as i,c as n,d as s}from"./app.f6b99883.js";const d={},l=s(`<h1 id="\u5F00\u7BC7\u8BED" tabindex="-1"><a class="header-anchor" href="#\u5F00\u7BC7\u8BED" aria-hidden="true">#</a> \u5F00\u7BC7\u8BED</h1><p>\u672C\u6587\u662F\u8BFB\u4E66\u7B14\u8BB0</p><h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u7C7B\u662F\u6700\u5E38\u89C1\u7684\u4E00\u79CD\u5F15\u7528\u7C7B\u578B\uFF0C\u6700\u7B80\u5355\u7684\u58F0\u660E\u5982\u4E0B</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>class User { }       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u7C7B\u4E2D\u5E38\u7528\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4E2D\u5E38\u7528\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u7C7B\u4E2D\u5E38\u7528\u7684\u6982\u5FF5</h1><p>\u901A\u8FC7\u4E0B\u9762\u8BE5\u4EE3\u7801\u6765\u8BB2\u89E3\u7C7B\u4E2D\u5E38\u7528\u7684\u6982\u5FF5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>    public class User
    {
        /// &lt;summary&gt;
        /// Id
        /// &lt;/summary&gt;
        public string ID { get; set; }

        /// &lt;summary&gt;
        /// \u8D26\u53F7
        /// &lt;/summary&gt;
        public string Account { get; set; }

        /// &lt;summary&gt;
        /// \u5BC6\u7801
        /// &lt;/summary&gt;
        public string PassWord { get; set; }
        
        public int Sex;
             
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBF\u95EE\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u8BBF\u95EE\u4FEE\u9970\u7B26</h2><p>\u5E38\u7528\u7684\u7C7B\u4FEE\u9970\u7B26\u6709public\u3001protected\u3001internal\u3001private\u3001abstract\u3001sealed\u3001static\u3001partial\u3002</p><h2 id="\u7C7B\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6210\u5458" aria-hidden="true">#</a> \u7C7B\u6210\u5458</h2><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><p>\u65B9\u6CD5\u662F\u4E00\u7EC4\u5B9E\u73B0\u67D0\u4E2A\u884C\u4E3A\u7684\u8BED\u53E5\uFF0C\u901A\u8FC7\u8C03\u7528\u8005\u7684\u53C2\u6570\u83B7\u53D6\u8F93\u5165\u7684\u6570\u636E\uFF0C\u5E76\u901A\u8FC7\u6307\u5B9A\u7684\u8F93\u51FA\u7C7B\u578B\u5C06\u8F93\u51FA\u6570\u636E\u8FD4\u56DE\u7ED9\u8C03\u7528\u8005\u3002\u53EF\u4EE5\u8FD4\u56DEvoid\u7C7B\u578B\uFF0C\u8868\u540D\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7ref/out\u53C2\u6570\u8FD4\u56DE\u8F93\u51FA\u6570\u636E\u3002</p><p>\u65B9\u6CD5\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4FEE\u9970\u7B26\u4FEE\u9970\uFF1A</p><ul><li><p>\u9759\u6001\u4FEE\u9970\u7B26\uFF1Astatic</p></li><li><p>\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1Apublic internal private protected</p></li><li><p>\u7EE7\u627F\u4FEE\u9970\u7B26\uFF1Anew virtual abstract override</p></li><li><p>\u90E8\u5206\u65B9\u6CD5\u4FEE\u9970\u7B26\uFF1Apartial</p></li><li><p>\u5F02\u6B65\u65B9\u6CD5\u4FEE\u9970\u7B26\uFF1Aasync</p></li></ul><h3 id="\u865A\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u865A\u65B9\u6CD5" aria-hidden="true">#</a> \u865A\u65B9\u6CD5</h3><p>\u7236\u7C7B\u5B9A\u4E49\u865A\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u91CD\u5199\u7236\u7C7B\u7684\u65B9\u6CD5</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>    public class UserBase
    {
        public virtual void Sum(int x, int y) { }
    }

    public class User : UserBase
    {
        public override void Sum(int x, int y) { }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u8FBE\u5F0F\u4F53\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u4F53\u65B9\u6CD5" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u4F53\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>string GetName() =&gt; Name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u91CD\u8F7D\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D\u65B9\u6CD5" aria-hidden="true">#</a> \u91CD\u8F7D\u65B9\u6CD5</h3><p>\u65B9\u6CD5\u540D\u5B57\u76F8\u540C\uFF0C\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\u6216\u8005\u53C2\u6570\u4E2A\u6570\u4E0D\u540C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        void Sum(int x) { }
        void Sum(double x) { }
        void Sum(int x, int y) { }
        void Sum(double x, int y) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u548Cparams\u4FEE\u9970\u7B26\u4E0D\u5C5E\u4E8E\u5224\u65AD\u662F\u5426\u91CD\u8F7D\u7684\u6761\u4EF6</p><h3 id="\u6309\u503C\u4F20\u9012\u548C\u6309\u5F15\u7528\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u6309\u503C\u4F20\u9012\u548C\u6309\u5F15\u7528\u4F20\u9012" aria-hidden="true">#</a> \u6309\u503C\u4F20\u9012\u548C\u6309\u5F15\u7528\u4F20\u9012</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        void Sum(int x) { }
        void Sum(ref int x) { }
		// \u6216
        void Sum(out int x) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u7684ref\u548Cout\u4EE3\u7801\u4E0D\u80FD\u540C\u65F6\u51FA\u73B0\u4E00\u4E2A\u7C7B\u4E2D</p><h2 id="\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5" aria-hidden="true">#</a> \u5B57\u6BB5</h2><p>\u5B57\u6BB5\u5C5E\u4E8E\u7C7B\u7684\u6210\u5458\uFF0C\u5728\u8BE5\u793A\u4F8B\u7C7B\u4E2DSex\u53EB\u505A\u5B57\u6BB5\u3002</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>    public class User
    {
        /// &lt;summary&gt;
        /// \u6027\u522B
        /// &lt;/summary&gt;
        public int Sex = 1;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B57\u6BB5\u53EF\u7528\u4EE5\u4E0B\u4FEE\u9970\u7B26\u8FDB\u884C\u4FEE\u9970\uFF1A</p><ul><li><p>\u9759\u6001\u4FEE\u9970\u7B26\uFF1Astatic</p></li><li><p>\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1Apublic internal private protected</p></li><li><p>\u7EE7\u627F\u4FEE\u9970\u7B26\uFF1Anew</p></li></ul><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>    public class UserBase
    {
        /// &lt;summary&gt;
        /// \u6027\u522B/\u7EA7\u522B
        /// &lt;/summary&gt;
        public int Sex = 1;
    }

    public class User : UserBase
    {
        /// &lt;summary&gt;
        /// \u6027\u522B
        /// &lt;/summary&gt;
        public new int Sex = 10;
    }
    

     var us = new User();
     var sex = us.Sex; // 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EA\u8BFB\u4FEE\u9970\u7B26\uFF1Areadonly</li></ul><p>\u53EF\u4EE5\u8BBE\u7F6E\u53EA\u8BFB(\u53EA\u80FD\u5728\u58F0\u660E\u65F6\u5019\u6216\u8005\u5728\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u8D4B\u503C)\u3002</p><ul><li>\u7EBF\u7A0B\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1Avolatile</li></ul><h3 id="\u5B57\u6BB5\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u521D\u59CB\u5316" aria-hidden="true">#</a> \u5B57\u6BB5\u521D\u59CB\u5316</h3><p>\u5B57\u6BB5\u4E0D\u4E00\u5B9A\u8981\u521D\u59CB\u5316\uFF0C\u6CA1\u6709\u521D\u59CB\u5316\u7684\u5B57\u6BB5\u4F1A\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        /// &lt;summary&gt;
        /// \u6027\u522B
        /// &lt;/summary&gt;
        public int Sex;
    }

    var us = new User();
    var sex = us.Sex; // 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u58F0\u660E\u591A\u4E2A\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u591A\u4E2A\u5B57\u6BB5" aria-hidden="true">#</a> \u58F0\u660E\u591A\u4E2A\u5B57\u6BB5</h3><p>\u53EF\u4EE5\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u5B57\u6BB5,\u4F46\u662F\u8FD9\u4E9B\u5B57\u6BB5\u7C7B\u578B\u5FC5\u987B\u4E00\u81F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        /// &lt;summary&gt;
        /// \u6027\u522B/\u7EA7\u522B
        /// &lt;/summary&gt;
        public int Sex = 1, level = 5;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><p>\u4E00\u773C\u770B\u8FC7\u53BB\uFF0C\u5C5E\u6027\u548C\u5B57\u6BB5\u5F88\u76F8\u4F3C\uFF0C\u4F46\u662F\u5C5E\u6027\u5185\u90E8\u53EF\u4EE5\u50CF\u65B9\u6CD5\u4E00\u6837\u5305\u542B\u903B\u8F91\uFF0C\u5728\u4E0B\u9762\u793A\u4F8B\u4E2DAccount\u548CPassWord\u5C31\u662F\u5C5E\u6027\uFF0C\u6BD4\u5B57\u6BB5(sex)\u591A\u4E86get/set\u8BBF\u95EE\u5668\uFF0C\u5C5E\u6027get\u51FA\u6765\u7684\u503C\u4E0D\u4E00\u5B9A\u662Fset\u8FDB\u53BB\u7684\u503C\uFF0C\u56E0\u4E3A\u53EF\u80FD\u5728set\u65F6\u5019\u88AB\u4FEE\u6539\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public string Account { get; set; }
        public string PassWord { get; set; }
        
        public int Sex;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get\u548CSet\u662F\u5C5E\u6027\u7684\u8BBF\u95EE\u5668\uFF0C\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u5C5E\u6027\u7684\u8BBF\u95EE\u7EA7\u522B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        private string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C3D\u7BA1\u8BBF\u95EE\u5C5E\u6027\u548C\u5B57\u6BB5\u7684\u65B9\u5F0F\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u5C5E\u6027\u5728\u83B7\u53D6\u548C\u8BBE\u7F6E\u503C\u7684\u65F6\u5019\u7ED9\u5B9E\u73B0\u8005\u63D0\u4F9B\u4E86\u5B8C\u5168\u7684\u63A7\u5236\u80FD\u529B\u3002</p><p>\u5C5E\u6027\u652F\u6301\u4EE5\u4E0B\u7684\u4FEE\u9970\u7B26\uFF1A</p><ul><li><p>\u9759\u6001\u4FEE\u9970\u7B26\uFF1Astatic</p></li><li><p>\u8BBF\u95EE\u6743\u9650\u4FEE\u9970\u7B26\uFF1Apublic internal privateprotected</p></li><li><p>\u7EE7\u627F\u4FEE\u9970\u7B26\uFF1Anew virtual abstract overridesealed</p></li></ul><h3 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a> \u53EA\u8BFB\u5C5E\u6027</h3><p>\u5982\u679C\u53EA\u5B9A\u4E49\u4E86get\u8BBF\u95EE\u5668\uFF0C\u5C5E\u6027\u5C31\u662F\u53EA\u8BFB\u7684\u3002\u5982\u679C\u53EA\u5B9A\u4E49\u4E86set\u8BBF\u95EE\u5668\uFF0C\u90A3\u4E48\u5C31\u662F\u53EA\u5199\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public string Address { get; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u8FBE\u5F0F\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u5C5E\u6027" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u5C5E\u6027</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public string Address { get; }

        private decimal _price, _num;

        public decimal TotalPrice { get { return _price * _num; } }

        public decimal TotalPrice2 { get =&gt; _price * _num; }

        public decimal TotalPrice3 =&gt; _price * _num;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u52A8\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5C5E\u6027" aria-hidden="true">#</a> \u81EA\u52A8\u5C5E\u6027</h3><p>\u5C5E\u6027\u6700\u5E38\u89C1\u7684\u5B9E\u73B0\u65B9\u5F0F\u662F\u4F7F\u7528get\u548Cset\u8BBF\u95EE\u5668\u8BFB\u5199\u79C1\u6709\u5B57\u6BB5(\u5B57\u6BB5\u548C\u5C5E\u6027\u7C7B\u578B\u76F8\u540C)\u3002\u56E0\u6B64\u7F16\u8BD1\u5668\u4F1A\u5C06\u81EA\u52A8\u5C5E\u6027\u58F0\u660E\u81EA\u52A8\u8F6C\u6362\u4E3A\u5728\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public string Address { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u540E\u53F0\u79C1\u6709\u5B57\u6BB5\uFF0C\u8BE5\u5B57\u6BB5\u7684\u540D\u79F0\u7531\u7F16\u8BD1\u5668\u751F\u6210\u4E14\u65E0\u6CD5\u5F15\u7528\u3002</p><h3 id="\u5C5E\u6027\u521D\u59CB\u5316\u5668" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u521D\u59CB\u5316\u5668" aria-hidden="true">#</a> \u5C5E\u6027\u521D\u59CB\u5316\u5668</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public string Address { get; set; } = &quot;\u4E2D\u56FD&quot;;
        
         public int Price { get;} = 1;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u81EA\u5B9A\u4E49\u503C" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u81EA\u5B9A\u4E49\u503C" aria-hidden="true">#</a> \u5C5E\u6027\u81EA\u5B9A\u4E49\u503C</h3><p>\u83B7\u53D6\u6307\u5B9A\u7C7B\u578B\u7684\u5C5E\u6027\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static string GetPropertyName(Type type, string property)
{
    var displayName = type.GetProperty(property)?.GetCustomAttribute&lt;DisplayNameAttribute&gt;();
    if (!string.IsNullOrEmpty(displayName?.DisplayName))
        return displayName.DisplayName;

    var display = type.GetProperty(property)?.GetCustomAttribute&lt;DisplayAttribute&gt;();
    return !string.IsNullOrEmpty(display?.Name) ? display.Name : string.Empty;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var bb = GetPropertyName(typeof(Userinfo), &quot;Name&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7D22\u5F15\u5668" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5668" aria-hidden="true">#</a> \u7D22\u5F15\u5668</h2><p>\u7D22\u5F15\u5668\u4E3A\u8981\u8BBF\u95EE\u7684\u7C7B\u6216\u8005\u7ED3\u6784\u4F53\u4E2D\u5C01\u4F4F\u7684\u5217\u8868\u6216\u8005\u5B57\u5178\u7C7B\u578B\u7684\u6570\u636E\u63D0\u4F9B\u8BBF\u95EE\u63A5\u53E3\u3002\u7D22\u5F15\u5668\u901A\u8FC7\u7D22\u5F15\u503C\u8BBF\u95EE\u6570\u636E\u3002\u4F8B\u5982string\u7C7B\u5177\u6709\u7D22\u5F15\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7int\u7D22\u5F15\u8BBF\u95EE\u6BCF\u4E00\u4E2Achar\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var str = &quot;max&quot;[1]; // &#39;a&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7D22\u5F15\u5668\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5668\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u7D22\u5F15\u5668\u7684\u5B9E\u73B0</h3><p>\u7F16\u5199\u7D22\u5F15\u5668\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3Athis\u7684\u5C5E\u6027\uFF0C\u5E76\u5C06\u53C2\u6570\u5B9A\u4E49\u653E\u5728\u4E00\u5BF9\u65B9\u62EC\u53F7\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        private string[] words = &quot;the quick brown fox&quot;.Split();

        public string this[int wordNum]
        {
            get { return words[wordNum]; }
            set { words[wordNum] = value; }
        }
    }


    var us = new User();
    System.Console.WriteLine(us[3]); // fox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\u7684\u7D22\u5F15\u5668\uFF0C\u4E00\u4E2A\u7D22\u5F15\u5668\u4E5F\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u53C2\u6570\u3002</p><h2 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h2><p>\u662F\u4E00\u79CD\u6C38\u8FDC\u4E0D\u4F1A\u6539\u53D8\u7684\u9759\u6001\u5B57\u6BB5\u3002\u5E38\u91CF\u4F1A\u5728\u7F16\u8BD1\u65F6\u5019\u9759\u6001\u8D4B\u503C\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5728\u5E38\u91CF\u4F7F\u7528\u7684\u5730\u65B9\u4E0A\u76F4\u63A5\u66FF\u6362\u503C\u3002\u5E38\u91CF\u7528\u5173\u952E\u5B57const\u751F\u547D\uFF0C\u5E76\u4E14\u5FC5\u987B\u7528\u503C\u521D\u59CB\u5316\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public const string Name = &quot;\u5F20\u4E09&quot;;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672A\u6765\u53EF\u80FD\u53D1\u751F\u53D8\u5316\u7684\u4EFB\u4F55\u503C\u90FD\u4E0D\u5E94\u5F53\u8868\u793A\u4E3A\u5E38\u91CF\u3002</p><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><p>\u4E8B\u4EF6(event)\u57FA\u4E8E\u59D4\u6258\uFF0C\u662F\u7C7B\u6216\u8005\u5BF9\u8C61\u5411\u5176\u4ED6\u7C7B\u6216\u5BF9\u8C61\u901A\u77E5\u53D1\u751F\u7684\u4E8B\u60C5\u7684\u4E00\u79CD\u59D4\u6258\uFF0C\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u53D7\u9650\u5236\u7684\u59D4\u6258(\u53EA\u80FD\u65BD\u52A0+=\uFF0C-=\u64CD\u4F5C\u7B26)\u3002</p><p>\u4E8B\u4EF6\u7684\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public event \u59D4\u6258\u7C7B\u578B \u4E8B\u4EF6\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B80\u5355\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    internal class Program
    {
        //\u58F0\u660E\u59D4\u6258
        public delegate void MyDelegate();

        //\u58F0\u660E\u4E8B\u4EF6\uFF0C\u4F5C\u4E3A\u7C7B\u7684\u6210\u5458
        public event MyDelegate mydelgate;
        private static void Main(string[] args)
        {
            var p = new Program();
            p.mydelgate = Test;
            p.mydelgate();
            Console.ReadKey();
        }
        static void Test()
        {
            Console.WriteLine(&quot;test&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u8003\u8D44\u6599\uFF1Ahttps://www.cnblogs.com/ezhar/p/12864342.html</p><h2 id="\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a> \u6784\u9020\u5668</h2><p>\u6784\u9020\u5668\u6267\u884C\u7C7B\u6216\u8005\u7ED3\u6784\u4F53\u7684\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u6784\u9020\u5668\u7684\u5B9A\u4E49\u548C\u65B9\u6CD5\u5F88\u76F8\u4F3C\uFF0C\u4E0D\u8FC7\u6784\u9020\u5668\u7684\u540D\u5B57\u548C\u8FD4\u56DE\u503C\u53EA\u80FD\u548C\u5C01\u88C5\u5B83\u7684\u7C7B\u578B\u76F8\u540C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class UserBase
    {
        public UserBase(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u4F8B\u6784\u9020\u5668\u652F\u6301\u4EE5\u4E0B\u4FEE\u9970\u7B26\uFF1A</p><ul><li>\u9759\u6001\u4FEE\u9970\u7B26\uFF1Astatic</li><li>\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1Apublic internal private protected</li></ul><h3 id="\u6784\u9020\u5668\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668\u91CD\u8F7D" aria-hidden="true">#</a> \u6784\u9020\u5668\u91CD\u8F7D</h3><p>\u4E3A\u4E86\u907F\u514D\u91CD\u590D\u4EE3\u7801\uFF0C\u6784\u9020\u5668\u53EF\u4EE5\u4F7F\u7528this\u6765\u8C03\u7528\u53E6\u4E00\u4E2A\u6784\u9020\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class UserBase
    {
        public UserBase() {}
        public UserBase(string name) : this()
        {
            Name = name;
        }

        public string Name { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9690\u5F0F\u65E0\u53C2\u6570\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u65E0\u53C2\u6570\u6784\u9020\u5668" aria-hidden="true">#</a> \u9690\u5F0F\u65E0\u53C2\u6570\u6784\u9020\u5668</h3><p>\u9ED8\u8BA4\u7F16\u8BD1\u5668\u4F1A\u4E3A\u6211\u4EEC\u7684\u7C7B\u751F\u6210\u4E00\u4E2A\u65E0\u53C2\u6570\u516C\u6709\u7684\u6784\u9020\u5668\uFF0C\u4E0D\u8FC7\u5982\u679C\u4F60\u663E\u5F0F\u5B9A\u4E49\u4E86\u6784\u9020\u5668\uFF0C\u7F16\u8BD1\u5668\u5C31\u4E0D\u518D\u81EA\u52A8\u751F\u6210\u65E0\u53C2\u6570\u6784\u9020\u5668</p><h3 id="\u5BF9\u8C61\u521D\u59CB\u5316\u5668" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u521D\u59CB\u5316\u5668" aria-hidden="true">#</a> \u5BF9\u8C61\u521D\u59CB\u5316\u5668</h3><p>\u4E3A\u4E86\u7B80\u5316\u5BF9\u8C61\u7684\u521D\u59CB\u5316\uFF0C\u53EF\u4EE5\u5728\u8C03\u7528\u6784\u9020\u5668\u540E\u76F4\u63A5\u901A\u8FC7\u5BF9\u8C61\u521D\u59CB\u5316\u5668\u8BBE\u7F6E\u5BF9\u8C61\u7684\u53EF\u8BBF\u95EE\u5B57\u6BB5\u6216\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    public class User
    {
        public User()
        {
        }

        public User(string name) : this()
        {
            Name = name;
        }

        public string Name { get; set; }

        public int Sex;

        public string Address { get; set; }
    }

  new User() { Sex = 1, Name = &quot;\u5F20\u4E09&quot;, Address = &quot;\u4E2D\u56FD\u53F0\u6E7E\u7701&quot; };
  new User(&quot;\u5F20\u4E09&quot;) { Sex = 1, Address = &quot;\u4E2D\u56FD\u53F0\u6E7E\u7701&quot; };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p>\u7C7B\u53EF\u4EE5\u901A\u8FC7\u7EE7\u627F\u4E00\u4E2A\u7C7B\u6765\u5BF9\u81EA\u8EAB\u8FDB\u884C\u6269\u5C55\u6216\u8005\u5B9A\u5236\uFF0C\u7EE7\u627F\u4E86\u4E00\u4E2A\u4E86\u7C7B\uFF0C\u90A3\u4E48\u5C31\u62E5\u6709\u7236\u7C7B\u6240\u6709\u7684\u529F\u80FD\u800C\u65E0\u9700\u91CD\u65B0\u6784\u5EFA\u3002\u7C7B\u53EA\u652F\u6301\u5355\u7EE7\u627F\uFF0C\u4F46\u662F\u53EF\u4EE5\u88AB\u591A\u4E2A\u7C7B\u7EE7\u627F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
    public void Cry()
    {
        Console.WriteLine($&quot;{Name} \u5728\u53EB&quot;);
    }
}
public class Dog : Animal
{    }
    

// dog\u7EE7\u627F\u4E86Animal\uFF0C\u90A3\u4E48\u5C31\u62E5\u6709animal\u91CC\u9762\u7684\u5C5E\u6027\u548C\u65B9\u6CD5
var dog = new Dog { Name = &quot;\u4E8C\u54C8&quot;, Sex = &quot;\u516C&quot; };
dog.Cry();  // \u4E8C\u54C8 \u5728\u53EB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,100),a=[l];function r(v,c){return i(),n("div",null,a)}const t=e(d,[["render",r],["__file","class.html.vue"]]);export{t as default};
