import{_ as e,o as i,c as n,a as d}from"./app.565765f9.js";const a={},s=d(`<h1 id="aspose-pdf" tabindex="-1"><a class="header-anchor" href="#aspose-pdf" aria-hidden="true">#</a> Aspose.PDF</h1><h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h1><p>\u6700\u8FD1\u5728\u5199\u5173\u4E8E\u64CD\u4F5CPDF\u7684\u4EE3\u7801\uFF0C\u518D\u52A0\u4E0A\u4ECA\u5929\u670B\u53CB\u53D1\u4E86\u4E00\u4E2APDF\u683C\u5F0F\u7684\u6587\u4EF6\u9700\u8981\u6211\u5E2E\u5FD9\u8F6C\u6362\u4E3AWord\u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u7136\u540E\u5C31\u51FA\u6765\u4E86\u8FD9\u4E2A\u6587\u7AE0\u3002</p><p>\u5173\u4E8E\u8FD9\u4E2A\u64CD\u4F5CPDF\u7684\u7EC4\u4EF6\uFF0C\u6211\u6700\u8FD1\u4ED4\u7EC6\u81EA\u5DF1\u627E\u4E86\u53EF\u4EE5\u4F7F\u7528\u7684\u514D\u8D39\u4EE5\u53CA\u6536\u8D39\u7684\u7EC4\u4EF6\uFF0C\u7136\u540E\u5728\u53C2\u8003\u4E86\u4E00\u4E2A\u8001\u54E5\u5199\u7684\u4E00\u4E2A\u6587\u7AE0(https://www.cnblogs.com/RobotZero/p/7742282.html)\uFF0C\u6700\u540E\u9009\u62E9\u4E86Aspose\u3002\u672C\u6587\u7684\u4E3B\u89D2\u5C31\u662F\u5B83\uFF0C\u8BE5\u7EC4\u4EF6\u662F\u4E00\u4E2A\u6536\u8D39\u7684\u7EC4\u4EF6\uFF0C\u514D\u8D39\u7248\u672C\u6709\u9875\u6570\u9650\u5236\u548C\u6C34\u5370\u3002\u5173\u4E8E\u8BE5\u7EC4\u4EF6\u6211\u6458\u6284\u4E00\u4E9B\u4ECB\u7ECD</p><blockquote><p>Aspose.Pdf \u662F\u4E00\u4E2A PDF \u7EC4\u4EF6\uFF0C\u7528\u6765\u751F\u6210 PDF \u6587\u6863\u800C\u65E0\u9700 Adobe Acrobat \u652F\u6301\u3002\u63D0\u4F9B .NET \u548C Java \u8BED\u8A00\u4E24\u79CD\u7248\u672C\u3002</p></blockquote><h1 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h1><p>\u6D89\u53CA\u6280\u672F .Net5\u3001Aspose.PDF</p><h2 id="pdf\u8F6Cword" tabindex="-1"><a class="header-anchor" href="#pdf\u8F6Cword" aria-hidden="true">#</a> PDF\u8F6CWord</h2><p>\u65B0\u5EFA\u9879\u76EE\u7136\u540E\u5F15\u7528\u9700\u8981\u7684\u7EC4\u4EF6Aspose.Pdf\uFF0C\u4EE5\u53CA\u9700\u8981\u4E00\u4E2AGUI\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Aspose.Pdf&quot; Version=&quot;18.11.0&quot; /&gt;
&lt;PackageReference Include=&quot;System.Drawing.Common&quot; Version=&quot;6.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E\u6838\u5FC3\u4EE3\u7801\u6211\u4EEC\u662F\u770B\u4E0D\u5230\u4E86\uFF0C\u6211\u4EEC\u53EA\u80FD\u53BB\u975E\u5E38\u7B80\u5355\u7684\u4F7F\u7528\u8BE5\u7EC4\u4EF6,\u6BD4\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var path = &quot;E:\\\\Download\\\\testFile.pdf&quot;;
// load the file to be converted
var pfile = new Document(path);

// save in different formats
pfile.Save(&quot;e:\\\\output.doc&quot;, SaveFormat.Doc);
pfile.Save(&quot;e:\\\\output.html&quot;, SaveFormat.Html);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u5BF9\u6BD4\u4E00\u4E0B\u8F6C\u6362\u524D\u540E\u7684\u7ED3\u679C,\u4E2A\u4EBA\u611F\u89C9\u6548\u679C\u8FD8\u662F\u4E0D\u9519\u7684<img src="https://mmbiz.qpic.cn/mmbiz_png/gtQF7ojZDqKlpibTD3ZAqytbW6pKibcXyALdM8u8czDeT2IFiaHO0kxAZfECe6fU1V7B4lRg26Q7edoWhSdnRf1iag/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><h2 id="pdf\u8F6C\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#pdf\u8F6C\u56FE\u7247" aria-hidden="true">#</a> PDF\u8F6C\u56FE\u7247</h2><p>\u518D\u9644\u4E0A\u4E00\u4E2A\u5C06pdf\u8F6C\u56FE\u7247\u7684\u4EE3\u7801\u5427\uFF0C\u4E07\u4E00\u54EA\u91CC\u7528\u5230\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var path = &quot;D:\\\\Work\\\\xxxxxx.0.20210915.pdf&quot;;

//\u5B9A\u4E49Jpeg\u8F6C\u6362\u8BBE\u5907
Document document = new Document(path);
var device = new Aspose.Pdf.Devices.JpegDevice(10);//\u8BBE\u7F6E\u56FE\u7247\u8D28\u91CF
Console.WriteLine(&quot;\u9ED8\u8BA4\u56FE\u7247\u5F20\u6570\uFF1A&quot; + document.Pages.Count);
//\u904D\u5386\u6BCF\u4E00\u9875\u8F6C\u4E3Ajpg
for (var i = 1; i &lt;= document.Pages.Count; i++)
{
    string filePathOutPut = $&quot;d:\\\\img\\\\{i}.jpg&quot;;
    FileStream fs = new FileStream(filePathOutPut, FileMode.OpenOrCreate);
    try
    {
        device.Process(document.Pages[i], fs);
        fs.Close();
    }
    catch (Exception ex)
    {
        fs.Close();
        File.Delete(filePathOutPut);
    }
}
Console.WriteLine(&quot;\u4FDD\u5B58\u6210\u529F&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u4EE3\u7801\u53EF\u4EE5\u5C06PDF\u6587\u4EF6\u6BCF\u9875\u4FDD\u5B58\u4E3A\u4E00\u4E2A\u56FE\u7247\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u7684\u8D28\u91CF\u6765\u9009\u62E9\u8F6C\u6362\u540E\u56FE\u7247\u7684\u5927\u5C0F\u3002</p>`,17),t=[s];function l(r,o){return i(),n("div",null,t)}const u=e(a,[["render",l],["__file","aspose-pdf.html.vue"]]);export{u as default};
