(this["webpackJsonprevolution-2019"]=this["webpackJsonprevolution-2019"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(33),s=n.n(o),r=(n(39),n.p,n(40),n(13)),c=n(2),l=n(3),d=n(4),u=n(6),h=n(5),p=(n(41),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h1",{children:"Revolution 2019"}),Object(p.jsx)("h6",{children:"an interactive documentary"}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(r.b,{className:"button",to:"/prologue",children:"Start"}),Object(p.jsx)(r.b,{className:"button",to:"/about",children:"About"})]})]})}}]),n}(a.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("h2",{children:"Hi, I am a abouttttt!"})}}]),n}(a.a.Component),f=n(8),v=(n(48),n.p+"static/media/Prologue.218ac3ed.mp4"),b=n(12),j=n.n(b),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={playing:!1,firstTime:!0},i.play=i.play.bind(Object(f.a)(i)),i.handleEnded=i.handleEnded.bind(Object(f.a)(i)),i}return Object(d.a)(n,[{key:"play",value:function(){j()("video")[0].play(),this.setState({playing:!0})}},{key:"handleEnded",value:function(){this.setState({playing:!1,firstTime:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"video-container",children:Object(p.jsx)("video",{className:"fullscreen",onEnded:this.handleEnded,children:Object(p.jsx)("source",{src:v,type:"video/mp4"})})}),Object(p.jsx)("a",{className:this.state.playing?"display-none":"button play-button",onClick:this.play,children:this.state.firstTime?"Play":"Replay"})]})}}]),n}(a.a.Component),O=[n.p+"static/media/News Catalonia.01e2ccbb.mp4",n.p+"static/media/News Chile.6f36a9b6.mp4",n.p+"static/media/News Colombia.9befaeeb.mp4",n.p+"static/media/News Haiti.0be115cf.mp4",n.p+"static/media/News Hong Kong.f4fa13d2.mp4",n.p+"static/media/News Iraq.784155ff.mp4",n.p+"static/media/News Lebanon.a389790f.mp4",n.p+"static/media/News Sudan.b0df1b6c.mp4",n.p+"static/media/News USA.686df143.mp4"],k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("a",{className:this.props.playing?"display-none":"button play-button",onClick:this.props.handleClick,children:this.props.firstTime?"Play":"Replay"})}}]),n}(a.a.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("video",{className:"grid-video".concat(this.props.isActive?" active":""),onMouseEnter:function(){return e.props.handleMouseEnter(e.props.index)},onMouseLeave:this.props.handleMouseLeave,onEnded:this.props.handleEnded,muted:!this.props.isActive&&"muted",children:Object(p.jsx)("source",{src:this.props.channel,type:"video/mp4"})})}}]),n}(a.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={activeIndex:null},i.renderChannel=i.renderChannel.bind(Object(f.a)(i)),i.handleMouseEnter=i.handleMouseEnter.bind(Object(f.a)(i)),i.handleMouseLeave=i.handleMouseLeave.bind(Object(f.a)(i)),i.handleKeyPress=i.handleKeyPress.bind(Object(f.a)(i)),i}return Object(d.a)(n,[{key:"handleMouseEnter",value:function(e){this.props.playing&&this.setState({activeIndex:e})}},{key:"handleMouseLeave",value:function(){this.setState({activeIndex:null})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){switch(e.keyCode){case 37:[0,3,6].includes(this.state.activeIndex)||this.setState({activeIndex:this.state.activeIndex-1});break;case 38:[0,1,2].includes(this.state.activeIndex)||this.setState({activeIndex:this.state.activeIndex-3});break;case 39:[2,5,8].includes(this.state.activeIndex)||this.setState({activeIndex:this.state.activeIndex+1});break;case 40:[6,7,8].includes(this.state.activeIndex)||this.setState({activeIndex:this.state.activeIndex+3});break;default:return}e.preventDefault()}},{key:"renderChannel",value:function(e){return Object(p.jsx)(x,{index:e,channel:O[e],isActive:this.state.activeIndex==e,handleMouseEnter:this.handleMouseEnter,handleMouseLeave:this.handleMouseLeave,handleEnded:this.props.handleEnded})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"grid",children:[Object(p.jsx)("div",{className:"grid-header",children:"Move cursor or use keyboard arrows to change channels."}),this.renderChannel(0),this.renderChannel(1),this.renderChannel(2),this.renderChannel(3),this.renderChannel(4),this.renderChannel(5),this.renderChannel(6),this.renderChannel(7),this.renderChannel(8)]})}}]),n}(a.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={playing:!1,firstTime:!0},i.play=i.play.bind(Object(f.a)(i)),i.handleEnded=i.handleEnded.bind(Object(f.a)(i)),i}return Object(d.a)(n,[{key:"play",value:function(){j()("video").each((function(e,t){t.play()})),this.setState({playing:!0})}},{key:"handleEnded",value:function(){this.setState({playing:!1,firstTime:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(k,{handleClick:this.play,playing:this.state.playing,firstTime:this.state.firstTime}),Object(p.jsx)(w,{playing:this.state.playing,handleEnded:this.handleEnded})]})}}]),n}(a.a.Component),N=n(16),M=n.n(N),S=n.p+"static/media/Frane.9dcf968f.png";M.a.accessToken="pk.eyJ1IjoiY2hhcmxlc2luZ2VhIiwiYSI6ImNqcWpudGdsMDBwdmY0OXBvanQyaHN0MnoifQ._0O-n_18aXTVaue93HD6PQ";var E=["Authoritarianism","Corruption","Police brutality","Government inefficiency","Economic inequalities"],I=[{location:"Algeria",position:[3.058,36.754],triggers:"President Abdelaziz Bouteflika\u2019s decision to seek a fifth term as president.",motivations:"Economic downturn, corruption and nepotism, and desire for removal of entrenched military and political elites.",outcomes:"Bouteflika resigned. Military and political elites retained power in subsequent elections, triggering further unrest.",tags:"tag-0 tag-1"},{location:"Honduras",position:[-87.171,14.065],triggers:"Proposed reforms to the education and healthcare sectors, and revelations that President Juan Orlando Hern\xe1ndez received contributions from drug traffickers.",motivations:"Government corruption, falling spending on public services, and widespread poverty despite economic growth.",outcomes:"Hern\xe1ndez withdrew the proposed legislation.",tags:"tag-1 tag-3 tag-4"},{location:"Czech Republic",position:[14.438,50.076],triggers:"Corruption allegations against Prime Minister Andrej Babi\u0161, and his appointment of a close ally as justice minister.",motivations:"Government corruption, threats to judicial independence, and democratic backslide.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-1"},{location:"Hong Kong",position:[114.169,22.319],triggers:"Introduction of a bill that would permit extradition of criminal suspects from Hong Kong to China.",motivations:"Erosion of Hong Kong\u2019s one country, two systems autonomy from China, and restriction of civil liberties.",outcomes:"The Hong Kong government retracted the extradition bill. It also stepped back from postponing local council elections, which pro-democracy groups won.",tags:"tag-0"},{location:"Iraq",position:[44.366,33.315],triggers:"Demotion of a popular counterterrorism leader who was fighting government corruption.",motivations:"Inadequate public services, government corruption, unemployment, discontent with the country\u2019s sectarian political system, Iranian influence in Iraq, and government repression of protests.",outcomes:"Prime Minister Adel Abdul-Mahdi resigned.",tags:"tag-1 tag-2 tag-3 tag-4"},{location:"Guinea",position:[-13.578,9.641],triggers:"Suspicions that President Alpha Cond\xe9 would seek a third term by amending the constitution.",motivations:"Rising authoritarianism and repression of dissent and protests.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-0 tag-2"},{location:"Catalonia",position:[2.173,41.385],triggers:"Sentencing of Catalan separatist leaders to prison.",motivations:"Catalan independence, dissatisfaction with the government response to the independence movement, and belief that Catalonia should retain more of its own tax revenues.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-3"},{location:"Chile",position:[-70.669,-33.449],triggers:"Increased price of metro fares.",motivations:"Severe inequality, low wages and pensions, poor service delivery, discontent with government, militarised response to the protests, and government leaders' corruption.",outcomes:"The subway fare hike was reversed, and legislators agreed to a 2020 referendum over whether to write a new constitution.",tags:"tag-1 tag-2 tag-3 tag-4"},{location:"Lebanon",position:[35.502,33.894],triggers:"Introduction of taxes on tobacco, petrol, and internet voice calls.",motivations:"High youth unemployment and a currency crisis, income inequality, poor service delivery, and political nepotism and corruption due to sectarianism.",outcomes:"Prime Minister Saad Hariri resigned. Protests continued under his successor, Hassan Diab, whose government resigned after the Beirut blast of 2020.",tags:"tag-1 tag-3 tag-4"},{location:"Colombia",position:[-74.072,4.711],triggers:"Rumored pensions cuts, implementation challenges of the country\u2019s peace deal, and rising violence.",motivations:"Disapproval of President Iv\xe1n Duque M\xe1rquez\u2019s government, rising economic inequality, corruption, and militarised response to protests.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-1 tag-2 tag-3 tag-4"},{location:"India",position:[77.103,28.704],triggers:"In December 2019, passage of a bill which amended India\u2019s citizenship law and was criticised for discriminating against Muslims. In September 2020, passage of bills on agricultural market reform.",motivations:"Concern over rising Hindu nationalism under Prime Minister Narendra Modi, marginalisation of Muslims, and disruption of the rural farm economy.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-4"},{location:"United States",position:[-93.265,42.978],triggers:"Excessive use of lethal force by police officers against unarmed Black civilians.",motivations:"Ongoing police brutality toward communities of Black people, and broader issues of systemic racism.",outcomes:"Multiple local governments have reduced funding for the police. Some of the officers involved in the deaths of George Floyd and Breonna Taylor have been arrested.",tags:"tag-2"},{location:"Sudan",position:[32.56,15.501],triggers:"Slow transition from military elite control to civilian control, and the repeal of Islamic legal restrictions.",motivations:"Discontent with the military elite\u2019s continued control and influence, and the repeal of Islamic legal restrictions introduced by former president Omar al-Bashir.",outcomes:"Bashir and more than twenty former officials were tried for the 1989 military coup. Sudan\u2019s police chief and deputy, linked to Bashir, were fired.",tags:"tag-0 tag-3"},{location:"Belarus",position:[27.559,53.901],triggers:"Arrests of opposition presidential candidates; anger over the fraudulence of the presidential election.",motivations:"Opposition to President Alexander Lukashenko\u2019s reelection campaign; frustration over lack of genuine political pluralism.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-0"},{location:"Bulgaria",position:[23.322,42.698],triggers:"Rumours of nepotism surrounding National Security Service agents, and allegations of corruption against Prime Minister Boyko Borisov.",motivations:"Widespread corruption that has weakened state institutions and Bulgaria\u2019s rule of law.",outcomes:"Four ministers resigned; investigation against the President was blocked; Head of the National Security Service resigned; and the government proposed constitutional reforms.",tags:"tag-0 tag-1"},{location:"Thailand",position:[100.502,13.756],triggers:"Government failure to boost the economy during the pandemic, kidnapping of a leading political activist, and protesters\u2019 desire to repeal Thailand\u2019s strict royal defamation law.",motivations:"Lack of employment options for recent graduates, laws that shrink freedoms, and discontent with the military-written constitution.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-3 tag-4"},{location:"Nigeria",position:[7.399,9.077],triggers:"Circulation of a video of police brutality.",motivations:"Widespread belief that the police, especially the elite Special Anti-Robbery Squad (SARS), was involved in gross violations of human rights.",outcomes:"The government disbanded the SARS police squad and promised investigations into alleged human rights abuses.",tags:"tag-2"},{location:"France",position:[2.352,48.857],triggers:"Circulation of a video of police brutality, and approval in the Chamber of Deputies of a bill that limits the publication of images of on-duty police officers.",motivations:"Concerns that the bill would limit accountability for police and suppress media freedom.",outcomes:"The government agreed to rewrite the bill in response to protest demands.",tags:"tag-2"},{location:"Nepal",position:[85.324,27.717],triggers:"Prime Minister Khadga Prasad Sharma Oli\u2019s move to dissolve parliament and call early elections.",motivations:"Frustration over increasing partisanship; concerns over the constitutionality of the dissolution of parliament; and the breakdown of a power-sharing agreement between the prime minister and members of the ruling Nepal Communist Party.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-0"},{location:"Bolivia",position:[-68.119,-16.49],triggers:"Claims of electoral fraud in the 2019 general elections.",motivations:"Economic downturn, frustration over Evo Morales' government and growing fear of authoritarianism.",outcomes:"President Evo Morales and Vice-President Garc\xeda Linera resigned.",tags:"tag-0 tag-4"},{location:"Ecuador",position:[-78.468,-.181],triggers:"Cancellation of fuel subsidies and announcement of austerity measures.",motivations:"Economic crisis, poor service delivery, and growing income inequality.",outcomes:"President Len\xedn Moreno reached an agreement with indigenous groups to reverse the austerity measures.",tags:"tag-3 tag-4"},{location:"Haiti",position:[-72.307,18.594],triggers:"Increased prices of fuel.",motivations:"Economic crisis, corruption, and government inefficiency.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-1 tag-3 tag-4"},{location:"Venezuela",position:[-66.904,10.481],triggers:"Opposition leader Juan Guaid\xf3\u2019s self-declared claim to be the president of Venezuela.",motivations:"Economic collapse, corruption, food shortages, brutal government repression of dissidents, and political authoritarianism.",outcomes:"There was no change in policy or leadership in response to the protests.",tags:"tag-0 tag-2 tag-4"}];function P(){return Object(p.jsx)("div",{className:"instructions",children:"Click on the pins or use the filters below to learn more about the motivations behind each protest."})}var T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"handleClick",value:function(){j()("#help").show()}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"help-button",onClick:this.handleClick,children:Object(p.jsx)("i",{class:"far fa-question-circle"})})}}]),n}(a.a.Component),B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"handleClick",value:function(){j()("#help").hide()}},{key:"render",value:function(){return Object(p.jsxs)("div",{id:"help",className:"help",children:[Object(p.jsx)("div",{className:"help-overlay",onClick:this.handleClick}),Object(p.jsx)("div",{className:"help-panel",children:"sadhasdkfsd"})]})}}]),n}(a.a.Component),L=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=new M.a.Map({container:this.mapContainer,style:"mapbox://styles/charlesingea/ckkwgll2a4zb417n42kaelwja",center:[0,25],zoom:1.5,logoPosition:"top-right",renderWorldCopies:!1,interactive:!1,attributionControl:!1});I.forEach((function(t){var n=document.createElement("div");n.className="marker "+t.tags;var i=new M.a.Popup({offset:10,focusAfterOpen:!1,closeButton:!1,className:"popup"}).setText("test").setHTML("<img src="+S+" alt='"+t.location+"' /><div className='popup'><h3>"+t.location+"</h3><p><strong>Triggers:</strong> "+t.triggers+"</p><p><strong>Motivations:</strong> "+t.motivations+"</p><p><strong>Outcomes:</strong> "+t.outcomes+"</p></div>");new M.a.Marker(n).setLngLat(t.position).setPopup(i).addTo(e)}))}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"})})}}]),n}(a.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"handleMouseEnter",value:function(e){j()(".tag-"+e).addClass("active-marker")}},{key:"handleMouseLeave",value:function(e){j()(".tag-"+e).removeClass("active-marker")}},{key:"renderFilter",value:function(e){var t=this;return Object(p.jsx)("div",{className:"filter filter-"+e,onMouseEnter:function(){return t.handleMouseEnter(e)},onMouseLeave:function(){return t.handleMouseLeave(e)},children:E[e]})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"filters",children:[this.renderFilter(0),this.renderFilter(1),this.renderFilter(2),this.renderFilter(3),this.renderFilter(4)]})}}]),n}(a.a.Component),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(T,{}),Object(p.jsx)(B,{}),Object(p.jsx)(P,{}),Object(p.jsx)(L,{}),Object(p.jsx)(H,{})]})}}]),n}(a.a.Component),q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return 0==this.props.scene?Object(p.jsxs)("div",{className:"controls",children:[Object(p.jsx)(r.b,{className:"control-link",to:"/",children:"< Back"}),Object(p.jsx)("a",{className:"control-link",onClick:function(){return e.props.setScene(1)},children:"Next >"})]}):Object(p.jsxs)("div",{className:"controls",children:[Object(p.jsx)("a",{className:"control-link",onClick:function(){return e.props.setScene(e.props.scene-1)},children:"< Back"}),Object(p.jsx)("a",{className:"control-link",onClick:function(){return e.props.setScene(e.props.scene+1)},children:"Next >"})]})}}]),n}(a.a.Component),F=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){switch(this.props.scene){case 0:return Object(p.jsx)(y,{});case 1:return Object(p.jsx)(C,{});case 2:return Object(p.jsx)(A,{});default:return Object(p.jsx)(y,{})}}}]),n}(a.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={scene:0},i.setScene=i.setScene.bind(Object(f.a)(i)),i}return Object(d.a)(n,[{key:"setScene",value:function(e){this.setState({scene:e})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(F,{scene:this.state.scene}),Object(p.jsx)(q,{scene:this.state.scene,setScene:this.setScene})]})}}]),n}(a.a.Component);function z(){return Object(p.jsx)("div",{children:Object(p.jsx)(r.a,{basename:"",children:Object(p.jsxs)(c.c,{children:[Object(p.jsx)(c.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(m,{})}}),Object(p.jsx)(c.a,{exact:!0,path:"/about",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(c.a,{exact:!0,path:"/prologue",render:function(){return Object(p.jsx)(D,{})}})]})})})}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),K()}},[[66,1,2]]]);
//# sourceMappingURL=main.916420a5.chunk.js.map