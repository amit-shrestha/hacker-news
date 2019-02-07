(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(74)},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),o=(a(36),a(38),a(40),a(42),a(44),a(46),a(48),a(77)),i=a(28),l=a(78),u=a(7),m=a.n(u),d=a(13),p=a(8),E=a(9),h=a(11),f=a(10),S=a(12),v=a(25),g=a.n(v).a.create({baseURL:"https://hacker-news.firebaseio.com/v0"}),O=function(e){return g.get("/".concat(e,".json")).then(function(e){return e.data}).catch(function(e){return e})},N=function(e){return g.get("/item/".concat(e,".json")).then(function(e){return e.data}).catch(function(e){return e})},y={NO_OF_STORIES_PER_PAGE:10,PAGE_INDEX:0,STORY:"STORY",COMMENT:"COMMENT",NEW_STORIES:"newstories",TOP_STORIES:"topstories",BEST_STORIES:"beststories"},b=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).componentDidMount=function(){Promise.all(e.props.kids.map(function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())).then(function(t){return e.setState({comments:t})})},e.state={comments:[]},e}return Object(S.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.state.comments&&this.state.comments.length>0?this.state.comments.map(function(e){return r.a.createElement("div",{className:"parent-comment",key:"".concat(y.COMMENT,"-").concat(e.id)},e.deleted?"*comment deleted*":r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"comment-text",dangerouslySetInnerHTML:{__html:e.text}}),r.a.createElement("div",{className:"comment-by"},"-",e.by)),e.kids?r.a.createElement("div",{className:"child-comment"},r.a.createElement(t,{kids:e.kids})):null)}):null}}]),t}(r.a.Component),I=function(e){return r.a.createElement("div",{className:"story-div"},r.a.createElement("h2",null,e.location.state.story.title),e.location.state.story.text?r.a.createElement("div",{className:"story-text",dangerouslySetInnerHTML:{__html:e.location.state.story.text}}):null,e.location.state.story.kids&&e.location.state.story.kids.length>0?r.a.createElement(b,{kids:e.location.state.story.kids}):null)},w=a(75),x={isAuthenticated:!1,authenticate:function(){x.isAuthenticated=!0},logout:function(e){x.isAuthenticated=!1,e()}},C=function(e){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Hacker News"),x.isAuthenticated?r.a.createElement("span",{className:"logout-btn"},r.a.createElement("button",{onClick:function(){return x.logout(function(){return e.history.push("/")})}},"Log Out")):null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.a,{to:"/newstories",activeClassName:"active"},"New Stories")),r.a.createElement("li",null,r.a.createElement(w.a,{to:"/".concat(y.TOP_STORIES),activeClassName:"active"},"Top Stories")),r.a.createElement("li",null,r.a.createElement(w.a,{to:"/".concat(y.BEST_STORIES),activeClassName:"active"},"Best Stories"))))},P=a(26),k=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).componentDidMount=Object(d.a)(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e.props.option);case 2:a=t.sent,e.setState({storyIds:a},function(){return e.setState({storyIdsPerPage:e.state.storyIds.slice(e.state.pageIndex,e.state.numberOfStoriesPerPage)},function(){return e.fetchStories()})});case 4:case"end":return t.stop()}},t,this)})),e.handlePreviousClick=function(){0!==e.state.pageIndex&&e.setState({pageIndex:e.state.pageIndex-1},function(){return e.setStories()})},e.handleNextClick=function(){e.state.pageIndex>e.state.storyIds.length||e.setState({pageIndex:e.state.pageIndex+1},function(){return e.setStories()})},e.setStories=function(){e.setState({stories:[],storyIdsPerPage:e.state.storyIds.slice(e.state.pageIndex*e.state.numberOfStoriesPerPage,(e.state.pageIndex+1)*e.state.numberOfStoriesPerPage)},function(){e.fetchStories()})},e.fetchStories=function(){Promise.all(e.state.storyIdsPerPage.map(function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())).then(function(t){return e.setState({stories:t})})},e.state={storyIds:[],stories:[],storyIdsPerPage:[],buttonEnable:!0,pageIndex:y.PAGE_INDEX,numberOfStoriesPerPage:y.NO_OF_STORIES_PER_PAGE},e}return Object(S.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"stories"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{className:"previous",onClick:function(){return e.handlePreviousClick()}},"Previous"),r.a.createElement("span",null,this.state.pageIndex+1),r.a.createElement("button",{className:"next",onClick:function(){return e.handleNextClick()}},"Next")),r.a.createElement("ul",null,this.state.stories.map(function(e){return r.a.createElement("li",{key:"".concat(y.STORY,"-").concat(e.id)},r.a.createElement("div",{className:"story"},r.a.createElement("div",{className:"title"},e.url?r.a.createElement("a",{href:e.url},e.title):r.a.createElement(P.a,{to:{pathname:"/".concat(e.id),state:{story:e}}},e.title)),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"by"},"-",e.by),r.a.createElement("span",{className:"score"},"Score: ",e.score),e.descendants?r.a.createElement(P.a,{to:{pathname:"/".concat(e.id),state:{story:e}}},r.a.createElement("span",{className:"comments-count"},e.descendants," Comments")):null)))})))}}]),t}(r.a.Component),T=a(29),j=a(76),_=function(e){var t=e.component,a=Object(T.a)(e,["component"]);return r.a.createElement(i.a,Object.assign({},a,{render:function(e){return x.isAuthenticated?r.a.createElement(t,e):r.a.createElement(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))},R=a(27),A=function(e){window.localStorage.setItem("loginCredentials",JSON.stringify(e))},M=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).login=function(){var t=(e.props.location.state||{from:{pathname:"/newstories"}}).from;e.state.username&&e.state.password?e.state.credentials.length>0?(e.state.credentials.forEach(function(a){a.username===e.state.username&&a.password===e.state.password&&(x.authenticate(),e.props.history.push(t),e.incorrectCredential=!1)}),e.incorrectCredential&&e.setState({error:!0,isIncorrectCredential:!0})):e.setState({error:!0,hasNoUser:!0}):e.setState({error:!0,isInvalidCredential:!0})},e.signup=function(){e.state.credentials.length>0?(e.state.credentials.forEach(function(t){t.username===e.state.username&&(e.setState({error:!0,usernameAlreadyExist:!0}),e.usernameExist=!0)}),e.usernameExist||e.setState({credentials:[].concat(Object(R.a)(e.state.credentials),[{username:e.state.username,password:e.state.password}])},function(){return e.storeCredentials()})):e.setState({credentials:[{username:e.state.username,password:e.state.password}]},function(){return e.storeCredentials()})},e.storeCredentials=function(){A(e.state.credentials),e.setState({username:"",password:""})},e.state={credentials:[],username:"",password:"",error:!1,isIncorrectCredential:!1,hasNoUser:!1,isInvalidCredential:!1,usernameAlreadyExist:!1},e.incorrectCredential=!0,e.usernameExist=!1,e}return Object(S.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=function(){var e=window.localStorage.getItem("loginCredentials");return e?JSON.parse(e):[]}();this.setState({credentials:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.error?"auth-form red":"auth-form"},r.a.createElement("input",{className:"username-input",type:"text",placeholder:"Username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("div",{className:this.state.usernameAlreadyExist?"display-error-msg":"error-msg"},"Username Already Exists"),r.a.createElement("input",{className:"password-input",type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("div",{className:this.state.isIncorrectCredential?"display-error-msg":"error-msg"},"Incorrect Credentials"),r.a.createElement("div",{className:this.state.hasNoUser?"display-error-msg":"error-msg"},"Please SignUp First"),r.a.createElement("div",{className:this.state.isInvalidCredential?"display-error-msg":"error-msg"},"Please enter valid credentials"),r.a.createElement("button",{onClick:this.login},"Log in"),r.a.createElement("button",{onClick:this.signup},"Sign Up"))}}]),t}(r.a.Component),U=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{path:"/",component:C}),r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:M}),r.a.createElement(_,{path:"/".concat(y.NEW_STORIES),component:function(e){return r.a.createElement(k,Object.assign({},e,{option:y.NEW_STORIES}))}}),r.a.createElement(_,{path:"/".concat(y.TOP_STORIES),component:function(e){return r.a.createElement(k,Object.assign({},e,{option:y.TOP_STORIES}))}}),r.a.createElement(_,{path:"/".concat(y.BEST_STORIES),component:function(e){return r.a.createElement(k,Object.assign({},e,{option:y.BEST_STORIES}))}}),r.a.createElement(_,{path:"/:story_id",component:I})))))},B=function(){return r.a.createElement(U,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.388dbcb0.chunk.js.map