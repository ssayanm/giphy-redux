(window.webpackJsonpgiphysearch=window.webpackJsonpgiphysearch||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),s=n(8),o=n(3),l=n(17),u=n(18),h=(n(28),n(5)),f=n(6),d=n(9),g=n(7),E=n(10),m=function(e){var t=e.image;return r.a.createElement("div",{className:"bg-light-blue tc dib br1 pa1 ma2 grow bw1 shadow-1"},r.a.createElement("img",{alt:"gifs",src:t}),r.a.createElement("div",null))},p=function(e){var t=e.gifs;return r.a.createElement("div",{className:"tc"},t.map((function(e){return r.a.createElement(m,{key:e.id,image:e.images.downsized.url})})))},v=function(e){var t=e.fgifs;return r.a.createElement("div",{className:"tc"},t.map((function(e){return r.a.createElement(m,{key:e.id,image:e.images.downsized.url})})))},S=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Gifs",onChange:t}))},b=function(e){return r.a.createElement("div",{className:"tc",style:{overflowY:"scroll",border:"1px solid #000",height:"700px"}},e.children)},y=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(g.a)(t).call(this))).state={hasError:!1},e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opps !!"):this.props.children}}]),t}(a.Component),G="https://api.giphy.com/v1/gifs/search?q=",j="&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT",_=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestGifs()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.gifs,a=e.fgifs;return n.length?r.a.createElement("div",{className:"App tc"},r.a.createElement("h1",{className:"f1"},"Gif Search Engine"),r.a.createElement(S,{searchChange:t}),r.a.createElement(b,null,r.a.createElement(y,null,r.a.createElement(p,{gifs:n})))):r.a.createElement("div",{className:"App tc"},r.a.createElement("h1",{className:"f1"},"Gif Search Engine"),r.a.createElement(S,{searchChange:t}),r.a.createElement(b,null,r.a.createElement(v,{fgifs:a})))}}]),t}(a.Component)),w=Object(s.b)((function(e){return{searchField:e.searchGifs.searchField,fgifs:e.requestGifs.fgifs,gifs:e.searchGifs.gifs,isPending:e.requestGifs.isPending,error:e.requestGifs.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,function(e){e({type:"REQUEST_GIFS_PENDING"}),fetch(G+n+j+"&limit=10").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_GIFS_SUCCESS",payload:t.data})})).catch((function(t){return e({type:"REQUEST_GIFS_FAILED",payload:t})}))}));var n},onRequestGifs:function(){return e((function(e){e({type:"REQUEST_GIFS_PENDING"}),fetch(G+"ryan"+j+"&limit=10").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_GIFS_SUCCESS",payload:t.data})})).catch((function(t){return e({type:"REQUEST_GIFS_FAILED",payload:t})}))}))}}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={searchField:"",gifs:[]},I={isPending:!1,fgifs:[],error:""},C=(n(30),Object(l.createLogger)()),F=Object(o.c)({searchGifs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestGifs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_GIFS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_GIFS_SUCCESS":return Object.assign({},e,{fgifs:t.payload,isPending:!1});case"REQUEST_GIFS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(o.d)(F,Object(o.a)(u.a,C));c.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f1e2a678.chunk.js.map