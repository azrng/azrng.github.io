import{_ as e,o as n,c as i,d as s}from"./app.f6b99883.js";const r={},t=s(`<h1 id="\u5355\u5143\u6D4B\u8BD5\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5\u7B80\u5355\u4F7F\u7528</h1><h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u672C\u6587\u6765\u6F14\u793A\u4E00\u4E0B\u540C\u4E8B\u6559\u5BFC\u540E\u7684\u5199\u6CD5\uFF0C\u540C\u6837\u6709\u4E9B\u5355\u5143\u6D4B\u8BD5\u662F\u4E3A\u4E86\u6F14\u793A\u800C\u5199\u7684\u5355\u5143\u6D4B\u8BD5\u3002</p><p>\u672C\u6587\u4F7F\u7528\u7EC4\u4EF6\uFF1AXunit\u3001Moq\u4EE5\u53CAdotNet\u76F8\u5173\u77E5\u8BC6</p><blockquote><p>\u6CE8\uFF1A\u672C\u6587\u5185\u5BB9\u57FA\u4E8E\u4E0A\u4E00\u7BC7</p></blockquote><h1 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h1><p>\u9996\u5148\u6307\u5B9A\u4E00\u4E2A\u65B9\u6CD5\u7F16\u5199\u5355\u5143\u6D4B\u8BD5\uFF0C\u5E76\u4E14\u8981\u4FDD\u8BC1\u6CA1\u6709\u5176\u4ED6\u56E0\u7D20\u5E72\u6270\u7684\u60C5\u51B5\u4E0B\u53BB\u8FDB\u884C\u5355\u5143\u6D4B\u8BD5\u3002</p><h2 id="\u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u5355\u5143\u6D4B\u8BD5\u9879\u76EE</h2><p>\u53C2\u8003\u4E0A\u7BC7\u6587\u7AE0\uFF0C\u5728\u4E0A\u7BC7\u6587\u7AE0\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u5982\u4E0B\u4EE3\u7801\u3002</p><h2 id="\u6D4B\u8BD5\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u65B9\u6CD5" aria-hidden="true">#</a> \u6D4B\u8BD5\u65B9\u6CD5</h2><p>\u9996\u5148\u5148\u7EE7\u627F\u516C\u5171\u7C7B\uFF0C\u7136\u540E\u6CE8\u5165\u65E5\u5FD7\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class UserServiceTest : BaseWebHostTest
{
    public UserServiceTest(ITestOutputHelper helper) : base(helper)
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u5982\u6211\u4EEC\u53BB\u5BF9IUserService\u91CC\u9762\u7684GetListAsync\u505A\u5355\u5143\u6D4B\u8BD5,\u7136\u540E\u67E5\u770B\u8BE5Service\u4F9D\u8D56\u4E8E\u4E00\u4E9B\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private readonly IBaseRepository&lt;User&gt; _userRep;
private readonly IUnitOfWork _unitOfWork;
private readonly IMapper _mapper;

public UserService(IMapper mapper,
    IBaseRepository&lt;User&gt; userRep, IUnitOfWork unitOfWork)
{
    _mapper = mapper;
    _userRep = userRep;
    _unitOfWork = unitOfWork;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u4F7F\u7528moq\u7EC4\u4EF6\u53BB\u6A21\u62DF\u51FA\u6765\u8FD9\u4E9B\u4F9D\u8D56\u9879\u51CF\u5C11\u5F71\u54CD\u3002\u4E0D\u8FC7\u8BE5\u63A5\u53E3\u6709\u4E9B\u4F9D\u8D56\u9879\u7528\u4E0D\u5230\uFF0C\u4E0D\u9700\u8981\u6A21\u62DF\u76F4\u63A5\u4F20null</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u6A21\u62DF\u7528\u6237\u6570\u636E
var users = new List&lt;User&gt;
{
    new User {Account = &quot;123&quot;, PassWord = &quot;123456&quot;, IsValid = true},
    new User {Account = &quot;456&quot;, PassWord = &quot;123456&quot;, IsValid = true},
};
// mock \u6570\u636E
var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
mockRepository.Setup(t =&gt; t.GetListAsync(_ =&gt; true)).ReturnsAsync(users);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5B9E\u4F8B\u5316UserService\u8FDB\u884C\u4F7F\u7528\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Fact]
public async Task GetUser_ReturnOk()
{
    //Arrange\uFF1A\u51C6\u5907\u9636\u6BB5
    //\u6A21\u62DF\u7528\u6237\u6570\u636E
    var users = new List&lt;User&gt;
    {
        new User {Account = &quot;123&quot;, PassWord = &quot;123456&quot;, IsValid = true},
        new User {Account = &quot;456&quot;, PassWord = &quot;123456&quot;, IsValid = true},
    };
    var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
    mockRepository.Setup(t =&gt; t.GetListAsync(_ =&gt; true)).ReturnsAsync(users);

    var userService = new UserService(null, mockRepository.Object, null);

    //Act\uFF1A\u884C\u4E3A\u9636\u6BB5
    var result = await userService.GetListAsync();

    //Assert\uFF1A\u65AD\u8A00\u9636\u6BB5
    Assert.True(result.Any());
    Output.WriteLine(JsonConvert.SerializeObject(result));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5BF9\u8BE5\u65B9\u6CD5\u8FDB\u884C\u5355\u5143\u6D4B\u8BD5\u4E86\u3002</p><p>\u4E0B\u9762\u5728\u6F14\u793A\u4E00\u4E2A\u5BF9\u7528\u6237\u6DFB\u52A0\u7684\u65B9\u6CD5\u7F16\u5199\u5355\u5143\u6D4B\u8BD5</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631975072340-e40ce55e-c83a-45f7-9213-00374223b06c.png" alt="img"></p><p>\u56E0\u4E3A\u6211\u4EEC\u4F9D\u8D56\u8FD9\u4E09\u4E2A\u4E1C\u897F\uFF0C\u90A3\u4E48\u5C31\u9700\u8981mock\u8FD9\u4E09\u4E2A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
mockRepository.Setup(t =&gt; t.AddAsync(It.IsAny&lt;User&gt;(), false))
    .ReturnsAsync(1);

var mockUnitWork = new Mock&lt;IUnitOfWork&gt;();
mockUnitWork.Setup(t =&gt; t.SaveChangesAsync(new System.Threading.CancellationToken()))
    .ReturnsAsync(1);

var vm = new AddUserVm { Account = &quot;789&quot;, PassWord = &quot;455&quot;, Sex = Net5ByDocker.Model.Enum.SexEnum.Man };

var mockIMapper = new Mock&lt;IMapper&gt;();
mockIMapper.Setup(t =&gt; t.Map&lt;User&gt;(vm))
    .Returns(new User { Account = &quot;789&quot;, PassWord = &quot;455&quot;, IsValid = true });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u6A21\u62DFIBaseRepository\u4F20\u5165\u4EFB\u4F55\u7684User\u5230\u6DFB\u52A0\u65B9\u6CD5\u90FD\u8FD4\u56DE\uFF0C\u6A21\u62DF\u5355\u5143\u63D0\u4EA4\u4E5F\u8FD4\u56DE1\uFF0C\u8FD8\u6A21\u62DF\u4E86IMapper\u8FDB\u884C\u6620\u5C04\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Fact]
public async Task AddUser_ReturnOk()
{
    // \u6A21\u62DF\u6570\u636E
    var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
    mockRepository.Setup(t =&gt; t.AddAsync(It.IsAny&lt;User&gt;(), false))
        .ReturnsAsync(1);

    var mockUnitWork = new Mock&lt;IUnitOfWork&gt;();
    mockUnitWork.Setup(t =&gt; t.SaveChangesAsync(new System.Threading.CancellationToken()))
        .ReturnsAsync(1);

    var vm = new AddUserVm { Account = &quot;789&quot;, PassWord = &quot;455&quot;, Sex = Net5ByDocker.Model.Enum.SexEnum.Man };

    var mockIMapper = new Mock&lt;IMapper&gt;();
    mockIMapper.Setup(t =&gt; t.Map&lt;User&gt;(vm))
        .Returns(new User { Account = &quot;789&quot;, PassWord = &quot;455&quot;, IsValid = true });

    var userService = new UserService(mockIMapper.Object, mockRepository.Object, mockUnitWork.Object);

    //\u884C\u4E3A\u9636\u6BB5
    var result = await userService.AddAsync(vm);

    // \u65AD\u8A00\u9636\u6BB5
    Assert.NotEmpty(result);
    Output.WriteLine(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5355\u5143\u6D4B\u8BD5\u5C31\u7F16\u5199\u5B8C\u6210\u4E86\uFF0C\u542F\u52A8\u5355\u5143\u6D4B\u8BD5</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631976003428-be50fafe-b02e-48a0-b4e0-b75a6297b9f2.png" alt="img"></p><p>\u5355\u5143\u6D4B\u8BD5\u6210\u529F\uFF0C\u6211\u7406\u89E3\u7684\u5927\u6982\u5C31\u662F\u8FD9\u6837\u5B50\u7684\uFF0C\u5982\u679C\u6709\u54EA\u91CC\u4E0D\u5BF9\u7684\u5730\u65B9\uFF0C\u9EBB\u70E6\u6307\u51FA\u6765\u4E00\u8D77\u6210\u957F\u3002</p><h1 id="\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6599" aria-hidden="true">#</a> \u8D44\u6599</h1><p>.NetCore\u5355\u5143\u6D4B\u8BD5\uFF1Ahttps://www.cnblogs.com/baoshu/p/14500273.html</p><p>Mock\uFF1Ahttps://github.com/Moq/moq4/wiki/Quickstart</p>`,31),a=[t];function d(l,c){return n(),i("div",null,a)}const v=e(r,[["render",d],["__file","base-use.html.vue"]]);export{v as default};
