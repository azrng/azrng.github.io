import{_ as e,o as i,c as n,d as l}from"./app.43c45f49.js";const s={},a=l(`<p>\u5BF9\u8C61\u5F15\u7528\u53EF\u4EE5\uFF1A</p><ul><li>\u9690\u5F0F\u5411\u4E0A\u8F6C\u6362\u4E3A\u57FA\u7C7B\u7684\u5F15\u7528</li><li>\u663E\u5F0F\u5411\u4E0B\u8F6C\u6362\u4E3A\u5B50\u7C7B\u7684\u5F15\u7528</li></ul><h2 id="\u9690\u5F0F\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u8F6C\u6362" aria-hidden="true">#</a> \u9690\u5F0F\u8F6C\u6362</h2><p>\u5B50\u7C7B\u8F6C\u6362\u4E3A\u7236\u7C7B\uFF0C\u8FD9\u4E2A\u65F6\u5019\u662F\u9690\u5F0F\u8F6C\u6362</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{}

// \u5411\u4E0A\u7C7B\u578B\u8F6C\u6362\u521B\u5EFA\u4E00\u4E2A\u57FA\u7C7B\u6307\u5411\u5B50\u7C7B\u7684\u5F15\u7528
var dog = new Dog { Name = &quot;\u4E8C\u54C8&quot;, Sex = &quot;\u516C&quot; };
Animal animal = dog;
// \u8F6C\u6362\u4E4B\u540E\uFF0C\u88AB\u5F15\u7528\u5BF9\u8C61\u672C\u8EAB\u4E0D\u4F1A\u88AB\u66FF\u6362\u6216\u8005\u6539\u53D8
Console.WriteLine(dog==animal); // True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u663E\u793A\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u8F6C\u6362" aria-hidden="true">#</a> \u663E\u793A\u8F6C\u6362</h2><p>\u4ECE\u57FA\u7C7B\u5F15\u7528\u521B\u5EFA\u4E00\u4E2A\u5B50\u7C7B\u5F15\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{ }

// \u5982\u679C\u8BE5\u57FA\u7C7B\u662F\u4ECEdog\u5B50\u7C7B\u8F6C\u8FC7\u6765\u7684\uFF0C\u90A3\u4E48\u4ECD\u7136\u53EF\u4EE5\u4ECE\u57FA\u7C7B\u8F6C\u56DE\u53BBdog\u7C7B
var dog = new Dog { Name = &quot;dog&quot;, Sex = &quot;\u516C&quot; };
Animal animal = dog;
var dog2 = (Dog)animal;

Console.WriteLine(dog2.Name);// dog
Console.WriteLine(dog == animal); //True
Console.WriteLine(dog2 == animal); //True

var animal3 = new Animal { Name = &quot;dog&quot;, Sex = &quot;\u516C&quot; };
Dog dog3 = (Dog)animal3;//\u9519\u8BEF InvalidCastException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5411\u4E0B\u8F6C\u6362\u5FC5\u987B\u662F\u663E\u5F0F\u8F6C\u6362\uFF0C\u56E0\u4E3A\u6709\u53EF\u80FD\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF\u3002\u5411\u4E0B\u8F6C\u6362\u9519\u8BEF\u4F1A\u629B\u51FAInvalidCastException\u9519\u8BEF\u3002</p><p>\u4F46\u662F\u5982\u679C\u4F60\u8FD8\u60F3\u5C06\u7236\u7C7B\u8F6C\u4E3A\u5B50\u7C7B\u53EF\u4EE5\u91C7\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\uFF08\u65B9\u6CD5\u4E0D\u8BBA\u597D\u574F\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u76F4\u63A5\u8D4B\u503C
var dog = new Dog { Name = animal3.Name, Sex = animal3.Sex };
//\u5E8F\u5217\u5316\u996D\u5E8F\u5217\u5316
var dog2 = JsonConvert.DeserializeObject&lt;Dog&gt;(JsonConvert.SerializeObject(animal3));
//\u53CD\u5C04\u8D4B\u503C
var dog3 = new Dog();
//\u7F16\u8BD1animal\u7684\u516C\u5171\u5C5E\u6027
foreach (var item in typeof(Animal).GetProperties())
{
    item.SetValue(dog3, item.GetValue(animal3));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parse-tryparse-convert" tabindex="-1"><a class="header-anchor" href="#parse-tryparse-convert" aria-hidden="true">#</a> Parse/TryParse/Convert</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static double Parse(string s)
public static bool TryParse(string s\uFF0Cout double result)
    
var str = &quot;123456&quot;;
int num = int.Parse(str); // 123456  \u663E\u793A\u8F6C\u6362
int num2 = Convert.ToInt32(str);// 123456  \u663E\u793A\u8F6C\u6362
var str2 = num;// \u9690\u5F0F\u8F6C\u6362  &quot;123456&quot;

string str3 = &quot;\u4F60\u597D&quot;;
bool issuccess = int.TryParse(str3, out int num3);//false  num3=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u8005\u6700\u5927\u7684\u533A\u522B\u662F\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8F6C\u6362\u7684\u8981\u6C42\uFF0CParse\u65B9\u6CD5\u5C06\u4F1A\u5F15\u53D1\u4E00\u4E2A\u5F02\u5E38;TryParse\u65B9\u6CD5\u5219\u4E0D\u4F1A\u5F15\u53D1\u5F02\u5E38\uFF0C\u5B83\u4F1A\u8FD4\u56DEfalse\uFF0C\u540C\u65F6\u5C06result\u7F6E\u4E3A0\u3002</p><h2 id="as" tabindex="-1"><a class="header-anchor" href="#as" aria-hidden="true">#</a> AS</h2><p>as\u64CD\u4F5C\u7B26\u6C38\u8FDC\u4E0D\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u5982\u679C\u7C7B\u578B\u4E0D\u5339\u914D\uFF08\u88AB\u8F6C\u6362\u5BF9\u8C61\u7684\u8FD0\u884C\u65F6\u7C7B\u578B\u5373\u4E0D\u662F\u6240\u8F6C\u6362\u7684\u76EE\u6807\u7C7B\u578B\uFF0C\u4E5F\u4E0D\u662F\u5176\u6D3E\u751F\u7C7B\u578B\uFF09\uFF0C\u6216\u8005\u7C7B\u578B\u8F6C\u6362\u7684\u6E90\u5BF9\u8C61\u4E3Anull\uFF0C\u90A3\u4E48\u7C7B\u578B\u8F6C\u6362\u4E4B\u540E\u7684\u503C\u4E5F\u4E3Anull\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{ }


var animal = new Animal();
var flag1 = animal as Dog;//null
var dog = new Dog();
var flag2=dog as Animal;//Animal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u7528\u5224\u65AD\u7ED3\u679C\u662F\u5426\u4E3Anull\u90A3\u4E48\u63A8\u8350\u4F7F\u7528\u7C7B\u578B\u8F6C\u6362\uFF0C\u56E0\u4E3A\u5982\u679C\u62A5\u9519\uFF0C\u4F1A\u629B\u51FA\u66F4\u6E05\u6670\u7684\u5F02\u5E38\u3002</p><h2 id="is" tabindex="-1"><a class="header-anchor" href="#is" aria-hidden="true">#</a> IS</h2><p>\u68C0\u67E5\u5F15\u7528\u7684\u8F6C\u6362\u662F\u5426\u80FD\u591F\u6210\u529F\uFF0C\u5373\u5BF9\u8C61\u662F\u5426\u4ECE\u67D0\u4E2A\u7279\u5B9A\u7684\u7C7B\u6D3E\u751F(\u6216\u662F\u5B9E\u73B0\u67D0\u4E2A\u63A5\u53E3)\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{ }


var animal = new Animal();
var flag1 = animal is Dog;//false
var dog = new Dog() { Name = &quot;\u4E8C\u54C8&quot;, Sex = &quot;\u516C&quot; };
var flag2 = dog is Animal;//true
//\u7C7B\u578B\u68C0\u67E5\u5E76\u521B\u5EFA\u5B9E\u4F8B
if (dog is Animal animal1)
{
    Console.WriteLine(animal1.Name);//\u4E8C\u54C8

    //\u5C5E\u6027\u6BD4\u8F83
    var flag3 = animal1 is { Sex: &quot;\u516C&quot; };//true
    var flag = animal1 is { Name: &quot;\u4E8C\u54C8&quot;, Sex: &quot;\u516C&quot; };//true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[a];function r(v,u){return i(),n("div",null,d)}var c=e(s,[["render",r],["__file","type-convert.html.vue"]]);export{c as default};
