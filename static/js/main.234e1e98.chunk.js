(window.webpackJsonpgiphysearch=window.webpackJsonpgiphysearch||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),s=n(8),o=n(3),l=n(17),u=n(18),h=(n(28),n(5)),f=n(6),g=n(9),d=n(7),p=n(10),m=function(e){var t=e.image;return r.a.createElement("div",{className:"bg-light-blue tc dib br1 pa1 ma2 grow bw1 shadow-1"},r.a.createElement("img",{alt:"gifs",src:t}),r.a.createElement("div",null))},E=function(e){var t=e.gifs;return r.a.createElement("div",{className:"tc"},t.map((function(e){return r.a.createElement(m,{key:e.id,image:e.images.downsized.url})})))},b=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Gifs",onChange:t}))},v=function(e){return r.a.createElement("div",{className:"tc",style:{overflowY:"scroll",border:"1px solid #000",height:"700px"}},e.children)},y=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(d.a)(t).call(this))).state={hasError:!1},e}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opps !!"):this.props.children}}]),t}(a.Component),S=function(e){return function(t){t({type:"REQUEST_GIFS_PENDING"}),fetch("https://api.giphy.com/v1/gifs/search?q="+(e||"ryan")+"&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT&limit=10").then((function(e){return e.json()})).then((function(e){return t({type:"REQUEST_GIFS_SUCCESS",payload:e.data})})).catch((function(e){return t({type:"REQUEST_GIFS_FAILED",payload:e})}))}},j=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestGifs()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.gifs;return r.a.createElement("div",{className:"App tc"},r.a.createElement("h1",{className:"f1"},"Gif Search Engine"),r.a.createElement(b,{searchChange:t}),r.a.createElement(v,null,r.a.createElement(y,null,r.a.createElement(E,{gifs:n}))))}}]),t}(a.Component)),O=Object(s.b)((function(e){return{gifs:e.searchGifs.gifs,isPending:e.searchGifs.isPending,error:e.searchGifs.error}}),(function(e){return{onSearchChange:function(t){return e(S(t.target.value))},onRequestGifs:function(){return e(S())}}}))(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w={isPending:!1,gifs:[],error:""},G=(n(30),Object(l.createLogger)()),_=Object(o.c)({searchGifs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_GIFS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_GIFS_SUCCESS":return Object.assign({},e,{gifs:t.payload,isPending:!1});case"REQUEST_GIFS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(o.d)(_,Object(o.a)(u.a,G));i.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.234e1e98.chunk.js.map