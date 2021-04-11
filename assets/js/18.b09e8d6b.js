(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{331:function(a,e,s){"use strict";s.r(e);var n=s(2),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("在 flex 布局出来之前，实现垂直居中效果可谓是 css 中的一大难点，各种脑洞五花八门，在 flex 出来之后，一切都变得简单起来，仅仅需要下面几行代码")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('// html\n<div class="container">\n    <div class="content"></div>Kv\n</div>\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("但是你可知道,下面仅仅两行代码也能实现垂直居中的效果？")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".container {\n    display: flex;\n}\n.content {\n    margin: auto\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"flex-and-margin-auto",src:"//codepen.io/Allen6228/embed/mZWNKx/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[a._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/Allen6228/pen/mZWNKx/"}},[a._v("flex-and-margin-auto")]),a._v(" by XiaoYao\n  ("),s("a",{attrs:{href:"https://codepen.io/Allen6228"}},[a._v("@Allen6228")]),a._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[a._v("CodePen")]),a._v(".\n")]),a._v(" "),s("h2",{attrs:{id:"解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[a._v("#")]),a._v(" 解释")]),a._v(" "),s("p",[a._v("css 规范是这样解释的,在 dispaly: flex 下：")]),a._v(" "),s("blockquote",[s("p",[a._v("Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.")])]),a._v(" "),s("p",[a._v("稍微翻译就是，容器使用了 display: flex，但是没有使用 justify-content 或者 align-self 进行元素定位之前，所有的剩余空间都会自动分配到该方向的 auto margin 中去，根据 margin: auto 的渲染规则， 当两侧为 auto 的时候，就会表现为平分两侧空间，也就是上面的效果，如果一侧 auto, 则会表现为一侧对齐")]),a._v(" "),s("p",[a._v("左侧对齐效果：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".content {\n    margin-left: auto\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("右侧对齐效果")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".content {\n    margin-right: auto\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/",target:"_blank",rel:"noopener noreferrer"}},[a._v("the-peculiar-magic-of-flexbox-and-auto-margins"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);