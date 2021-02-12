(this["webpackJsonpnew-poke-app"]=this["webpackJsonpnew-poke-app"]||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(28),i=n.n(o),s=n(8),b=n(15),l=n(6);var r,j,u,O=n(22),p=n(23),d=n(27),h=n(26),m=n(20),v=n(2);var k,f,g,x=function(e){var t=e.details;return Object(v.b)("div",null,t.length>0?t.map((function(e){var t=e.name,n="/PokemonDetail/"+t;return Object(v.b)("div",{css:Object(v.a)(r||(r=Object(s.a)([" text-align : center"])))},Object(v.b)(b.b,{to:n},Object(v.b)(m.a,{className:"btn-block",css:Object(v.a)(j||(j=Object(s.a)(["border-radius : 25px"])))},Object(v.b)("h3",{css:Object(v.a)(u||(u=Object(s.a)(["text-transform : capitalized"])))},t))),Object(v.b)("br",null))})):null)},y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).state={loading:!1,pokemon:[],pokeDetails:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://pokeapi.co/api/v2/pokemon").then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,pokemon:t.results},(function(){e.state.pokemon.map((function(t){fetch(t.url).then((function(e){return e.json()})).then((function(t){var n=e.state.pokeDetails;n.push(t),e.setState({pokeDetails:n})}))}))}))}))}},{key:"render",value:function(){var e=this.state.pokeDetails;return Object(v.b)("div",null,Object(v.b)("div",{css:Object(v.a)(k||(k=Object(s.a)(["padding : 50px; color : white"])))},Object(v.b)("h1",null,"Hello!"),Object(v.b)("p",null,"This is my pokemon app project. Enjoy!")),Object(v.b)("h2",{css:Object(v.a)(f||(f=Object(s.a)(["text-align : center; color : white"])))},"Choose Your Pokemon!"),Object(v.b)("div",{css:Object(v.a)(g||(g=Object(s.a)(["\n                    padding-top : 25px; \n                    background-color : white;\n                    border : none;\n                    border-radius : 15px"])))},!0===this.state.loading&&Object(v.b)("h2",null,"Loading..."),Object(v.b)(x,{details:e})))}}]),n}(c.a.Component);var S,M,w,C=function(e){var t=e.nickname,n=t.length>0?t.map((function(e){var t="/PokemonDetail/"+sessionStorage.getItem(e);return Object(l.jsxs)("div",{children:[Object(l.jsx)(b.b,{to:t,children:Object(l.jsx)("li",{children:Object(l.jsx)("h3",{children:e})})}),Object(l.jsxs)("h4",{children:["Species : ",sessionStorage.getItem(e)]})]})})):null;return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:n})})},P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).openAlert=function(){return e.setState({isAlertOpen:!0})},e.closeAlert=function(){return e.setState({isAlertOpen:!1})},e.state={isLoading:!1,nameList:[],nickList:[],isAlertOpen:!0},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({nickList:Object.keys(sessionStorage),nameList:Object.values(sessionStorage)})}},{key:"render",value:function(){return Object(v.b)("div",{css:Object(v.a)(S||(S=Object(s.a)(["text-align : center"])))},Object(v.b)("h3",null,"My Pokemon List"),Object(v.b)(C,{nickname:this.state.nickList,names:this.state.nameList}))}}]),n}(c.a.Component),L=n(9),A=n(63),D=n(46),I=n(60),B=n(42),H=n(39),K=n(38),N=n(41),F=n(43),Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).openModal=function(){return e.setState({isOpen:!0})},e.closeModal=function(){return e.setState({isOpen:!1})},e.openAlert=function(){return e.setState({isAlertOpen:!0})},e.closeAlert=function(){return e.setState({isAlertOpen:!1})},e.state={isOpen:!1,isAlertOpen:!0},e.handleSubmit=e.handleSubmit.bind(Object(D.a)(e)),e}return Object(p.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.nicks,n=this.props.name;console.log(n);var a=Object.keys(sessionStorage);if(a.length>0){var c,o=Object(A.a)(a);try{for(o.s();!(c=o.n()).done;){c.value===t.value?console.log("same name in object keys"):sessionStorage.setItem(t.value,n)}}catch(i){o.e(i)}finally{o.f()}}else sessionStorage.setItem(t.value,n)}},{key:"render",value:function(){var e=this.props.name,t=this.props.catchPercent;return Object(v.b)("div",null,Object(v.b)(m.a,{css:Object(v.a)(M||(M=Object(s.a)(["border-radius : 18px"]))),variant:"primary",onClick:this.openModal},"Catch the pokemon"),this.state.isOpen&&t>50?Object(v.b)(I.a,{show:this.state.isOpen,onHide:this.closeModal},Object(v.b)(F.a,{onSubmit:this.handleSubmit},Object(v.b)(B.a,{closeButton:!0},Object(v.b)(H.a,null,"Catch Successful! Give a nickname to your ",e)),Object(v.b)(K.a,null,Object(v.b)(F.a.Group,null,Object(v.b)(F.a.Label,null,"Nickname"),Object(v.b)(F.a.Control,{type:"text",name:"nicks",placeholder:"You can name it like Marco, Foobar, etc.",required:!0}))),Object(v.b)(N.a,null,Object(v.b)(m.a,{type:"submit"},"Add to My Pokemon List")))):Object(v.b)(I.a,{show:this.state.isOpen,onHide:this.closeModal},Object(v.b)(B.a,null,Object(v.b)(H.a,null,"Sorry...")),Object(v.b)(K.a,null,Object(v.b)("p",null,"You failed to catch the pokemon")),Object(v.b)(N.a,null,Object(v.b)(m.a,{variant:"primary",onClick:this.closeModal},"Close"))))}}]),n}(c.a.Component),z=n(35),E=n(30),G=n(51);var J=function(e){var t=e.children,n=e.eventKey,a=Object(G.b)(n,(function(){return console.log("totally custom!")}));return Object(v.b)(m.a,{css:Object(v.a)(w||(w=Object(s.a)(["\n            background-color: blueviolet;\n            border: none;\n            border-radius: 18px;"]))),onClick:a},t)};var T,_=function(e){var t=e.moves;return Object(l.jsx)("div",{children:Object(l.jsx)(z.a,{children:Object(l.jsx)(E.a,{children:Object(l.jsxs)(E.a.Header,{children:[Object(l.jsx)(J,{eventKey:"0",children:"Pokemon Moves"}),Object(l.jsx)(z.a.Collapse,{eventKey:"0",children:Object(l.jsx)(E.a.Body,{children:t?t.map((function(e){var t=e.move;return Object(l.jsx)("li",{children:t.name})})):null})})]})})})})};var q=function(e){var t=e.pics;return Object(v.b)("div",{css:Object(v.a)(T||(T=Object(s.a)(["\n            padding-top : 12px; \n            padding-bottom : 12px;\n            background-color : teal"])))},t?Object(v.b)("img",{src:t.front_default,alt:"pokePicsFront"}):null,t?Object(v.b)("img",{src:t.back_default,alt:"pokePicsBack"}):null)};var W,Q,R,U,V,X,Z,$=function(e){var t=e.types;return Object(l.jsx)("div",{children:Object(l.jsx)(z.a,{children:Object(l.jsxs)(E.a,{children:[Object(l.jsx)(E.a.Header,{children:Object(l.jsx)(J,{eventKey:"0",children:"Pokemon Types"})}),Object(l.jsx)(z.a.Collapse,{eventKey:"0",children:Object(l.jsx)(E.a.Body,{children:Object(l.jsx)("ul",{children:t?t.map((function(e){var t=e.type;return Object(l.jsx)("li",{children:t.name})})):null})})})]})})})},ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).state={loading:!1,pokemonDetails:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://pokeapi.co/api/v2/pokemon/"+this.props.match.params.name;this.setState({loading:!0}),fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,pokemonDetails:t})}))}},{key:"render",value:function(){var e=this.state.pokemonDetails,t=Math.floor(100*Math.random());return Object(v.b)("div",{css:Object(v.a)(W||(W=Object(s.a)(["text-align : center"])))},!0===this.state.loading&&Object(v.b)("h2",null,"Loading..."),Object(v.b)(q,{pics:e.sprites}),Object(v.b)("div",{css:Object(v.a)(Q||(Q=Object(s.a)(["text-transform: capitalize"])))},Object(v.b)("h2",null,e.name)),Object(v.b)("p",null,"Weight : ",e.weight),Object(v.b)($,{types:e.types}),Object(v.b)(_,{moves:e.moves}),!0===this.state.loading?Object(v.b)("h3",null,"Loading..."):Object(v.b)("h3",null," Catch success percentage : ",t," % "),Object(v.b)(Y,{name:e.name,catchPercent:t}))}}]),n}(c.a.Component),te=n(62),ne=n(54),ae=n.p+"static/media/pokeMenu.59bfb750.png",ce=n.p+"static/media/backpack.19836c09.png";var oe,ie,se,be,le=function(){return Object(v.b)("footer",null,Object(v.b)(te.a,{css:Object(v.a)(R||(R=Object(s.a)(["background-color : white"]))),fixed:"bottom",className:"justify-content-center"},Object(v.b)(ne.a,null,Object(v.b)(ne.a.Item,{css:Object(v.a)(U||(U=Object(s.a)(["\n                        padding : 10px"])))},Object(v.b)(b.b,{to:"/",className:"d-flex flex-sm-column"},Object(v.b)("img",{src:ae,width:"30",height:"30",alt:"pokeball-menu",class:"center",css:Object(v.a)(V||(V=Object(s.a)(["display : block ; margin-left: auto; margin-right: auto"])))}),Object(v.b)("b",null,"Pokemon List"))),Object(v.b)(ne.a.Item,{css:Object(v.a)(X||(X=Object(s.a)(["\n                        padding : 10px"])))},Object(v.b)(b.b,{to:"/MyPokemonList",className:"d-flex flex-column"},Object(v.b)("img",{src:ce,width:"30",height:"30",alt:"backpack-pic",css:Object(v.a)(Z||(Z=Object(s.a)(["display : block ; margin-left: auto; margin-right: auto"])))}),Object(v.b)("b",null,"My Pokemon List"))))))},re=n.p+"static/media/pokeball.dec3b7c9.png";var je=function(){return Object(v.b)("div",{css:{backgroundColor:"#1FAA59"}},Object(v.b)("div",{css:Object(v.a)(oe||(oe=Object(s.a)(["\n          position : sticky;\n          position : -webkit-sticky;\n          top : 0;\n          background-color : #383CC1"])))},Object(v.b)("h1",{css:Object(v.a)(ie||(ie=Object(s.a)(["\n          padding : 12px;\n          text-align : center;\n          color : white"])))},Object(v.b)("img",{css:Object(v.a)(se||(se=Object(s.a)([" width : 50px; \n            padding-bottom : 10px; \n            padding-right : 5px;\n            filter : invert(100%)"]))),src:re,alt:"Pokeball"}),"Pokemon App")),Object(v.b)(b.a,{basename:window.location.pathname||""},Object(v.b)("main",{css:Object(v.a)(be||(be=Object(s.a)(["\n          padding-bottom : 80px"])))},Object(v.b)(L.a,{exact:!0,path:"/"},Object(v.b)(y,null)),Object(v.b)(L.a,{path:"/MyPokemonList"},Object(v.b)(P,null)),Object(v.b)(L.a,{path:"/PokemonDetail/:name",component:ee})),Object(v.b)(le,null)))};i.a.render(Object(l.jsx)(je,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a1e136ba.chunk.js.map