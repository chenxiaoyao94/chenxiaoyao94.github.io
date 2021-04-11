(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{383:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"导语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导语"}},[t._v("#")]),t._v(" 导语")]),t._v(" "),s("blockquote",[s("p",[t._v("学习《build-your-own-angular》的时候学到了"),s("strong",[t._v("依赖注入")]),t._v("的概念，为了更加深入理解， 找了许多资料，本文简单介绍了依赖注入，并提供了许多外链， 个人觉得不错， 特此分享。\n原文来自"),s("a",{attrs:{href:"https://medium.com/free-code-camp/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f",target:"_blank",rel:"noopener noreferrer"}},[t._v("A quick intro to Dependency Injection: what it is, and when to use it"),s("OutboundLink")],1),t._v("，版权归原作者所有")])]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("blockquote",[s("p",[t._v("在软件工程中， "),s("strong",[t._v("依赖注入")]),t._v("是指一种使用一个对象(或者静态方法)为另外一个对象提供依赖的技术。一个依赖可以是一个可用作服务的方法。")])]),t._v(" "),s("p",[t._v("上面是维基百科对"),s("strong",[t._v("依赖注入")]),t._v("的解释，并不容易理解， 我们换个方式来理解这个概念。")]),t._v(" "),s("p",[t._v("在开始理解"),s("strong",[t._v("依赖注入")]),t._v("的概念之前， 我们先来了解一下编程中的"),s("strong",[t._v("依赖")]),t._v("：")]),t._v(" "),s("blockquote",[s("p",[t._v("当 A 类使用了 B 类中的某些功能的时候，我们就说 B 类是 A 类的一个依赖")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/700/1*0P-1JhnUaZeobDUAajIbhA.jpeg",alt:""}})]),t._v(" "),s("p",[t._v("在 Java 中， 在开始使用其他类的方法之前，我们必须为该类创建实例。(比如 A 类需要创建 B 类的实例)")]),t._v(" "),s("p",[t._v("因此， "),s("strong",[t._v("将创建实例的任务交给其他人去做，直接使用生成的依赖的方式就称之为依赖注入")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/1000/1*TF-VdAgPfcD497kAW77Ukg.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"为什么要使用依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用依赖注入"}},[t._v("#")]),t._v(" 为什么要使用依赖注入")]),t._v(" "),s("p",[t._v("假设我们有一个包含了许多属性如 wheels, engine 的 car 类")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wheels")]),t._v(" wheel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AWheels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Battery")]),t._v(" battery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ABattery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这里的 Car 类负责创建依赖的对象。现在新需求来了，我们希望未来将 A 轮子换成 B 轮子。")]),t._v(" "),s("p",[t._v("上述的方案下， 我们需要重新创建带有 B 轮子的 Car 类， 但如果使用"),s("strong",[t._v("依赖注入")]),t._v("的方式， 我们可以在运行的时候改变轮子， 因为依赖是在运行的时候被注入的而不是编译的时候。")]),t._v(" "),s("p",[t._v("你可以将"),s("strong",[t._v("依赖注入")]),t._v("看成代码中的中间人, 其主要职责是代替 Car 类创建需要的轮子对象并传递给 Car 类。")]),t._v(" "),s("h2",{attrs:{id:"三种依赖注入的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三种依赖注入的方式"}},[t._v("#")]),t._v(" 三种依赖注入的方式")]),t._v(" "),s("ol",[s("li",[t._v("构造器注入：依赖通过一个类构造器提供")]),t._v(" "),s("li",[t._v("setter 注入：客户端暴露一个给注入器(injector)注入依赖的 setter 方法")]),t._v(" "),s("li",[t._v("接口注入：依赖提供了一个 injector 方法，为传入的任意客户端注入依赖。 客户端必须实现一个接受依赖的 setter 方法。")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wheels")]),t._v(" wheel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Battery")]),t._v(" battery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*在代码中的某处我们初始化该类的依赖\n下面是两种基于依赖注入的实现方式\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于Constructor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Car")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wheel")]),t._v(" wh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Battery")]),t._v(" bt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于Setter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWheel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wheel")]),t._v(" wh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剩余代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("总结起来"),s("strong",[t._v("依赖注入")]),t._v("的职责就是")]),t._v(" "),s("ol",[s("li",[t._v("创建对象")]),t._v(" "),s("li",[t._v("了解类依赖的对象")]),t._v(" "),s("li",[t._v("为类提供这些对象")])]),t._v(" "),s("p",[t._v("如果这些对象发生了变化， 那么"),s("strong",[t._v("依赖注入")]),t._v("会负责处理这些变化， 并将合适的对象传递给类本身。")]),t._v(" "),s("h2",{attrs:{id:"控制反转-依赖注入的背后逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制反转-依赖注入的背后逻辑"}},[t._v("#")]),t._v(" 控制反转-依赖注入的背后逻辑")]),t._v(" "),s("p",[t._v("这表明类不应该静态配置其依赖项，而是由外部的其他类进行配置。")]),t._v(" "),s("p",[t._v("这也是由"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Robert_C._Martin?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uncle Bob"),s("OutboundLink")],1),t._v("提出的五大面向对象设计原则 SOLID 中的第五个原则--类应该抽象而不是具体的结构（简单来说，硬编码）")]),t._v(" "),s("p",[t._v("根据该原则， 一个类应该将关注点放在满足职责上， 而不必关心如何创建履行这些职责的对象。这也就是依赖注入发挥的作用: 它为类提供所需的对象。")]),t._v(" "),s("p",[t._v("注： 如果你想要了解更多有关 SOLID 原则你可以点击"),s("a",{attrs:{href:"https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design?source=post_page---------------------------#toc-single-responsibility-principle",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"依赖注入的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入的优点"}},[t._v("#")]),t._v(" 依赖注入的优点")]),t._v(" "),s("ol",[s("li",[t._v("易于单元测试")]),t._v(" "),s("li",[t._v("减少冗余代码， 初始化依赖的工作交由 injector 模块完成")]),t._v(" "),s("li",[t._v("应用程序易于扩展。")]),t._v(" "),s("li",[t._v("有助于实现松耦合，这在应用程序编程中很重要")])]),t._v(" "),s("h2",{attrs:{id:"依赖注入的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入的缺点"}},[t._v("#")]),t._v(" 依赖注入的缺点")]),t._v(" "),s("ol",[s("li",[t._v("学习起来有点复杂，如果过度使用会导致管理问题和其他问题。")]),t._v(" "),s("li",[t._v("许多编译时错误就能发现的错误到运行时才会被发现")]),t._v(" "),s("li",[t._v("依赖注入框架通过反射和动态编程来实现，这可能会妨碍 0IDE 自动化的使用，例如“查找引用”，“显示调用层次结构”和安全重构.")])]),t._v(" "),s("p",[t._v("你可以实现自己的依赖注入框架或者使用第三方的库")]),t._v(" "),s("p",[t._v("实现了依赖注入的库或者框架")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.tutorialspoint.com/spring/spring_dependency_injection.htm?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring (Java)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/google/guice?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Guice (Java)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://square.github.io/dagger/?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dagger (Java and Android)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/castleproject/Windsor?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Castle Windsor (.NET)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=39944&source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unity(.NET)"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("两个 javascript 的依赖注入框架")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://di-ninja.github.io/di-ninja/?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Di-Ninja"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nfroidure/knifecycle?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("knifecycle"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("要了解有关依赖注入的更多信息，您可以查看以下资源：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.journaldev.com/2394/java-dependency-injection-design-pattern-example-tutorial?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Dependency Injection — DI Design Pattern Example Tutorial — JournalDev"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.vogella.com/tutorials/DependencyInjection/article.html?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using dependency injection in Java — Introduction — Tutorial — Vogella"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.martinfowler.com/articles/injection.html?source=post_page---------------------------",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inversion of Control Containers and the Dependency Injection pattern — Martin Fowler"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);