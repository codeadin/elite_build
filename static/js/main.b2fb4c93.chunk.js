(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.a4daa5ff.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/tour_operator.0d474e52.png"},22:function(e,t,a){e.exports=a.p+"static/media/pic4.4fd20add.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/team-2.52d8f119.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/team-3.0dfcfb30.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/Oxararfoss-full.3acb923d.jpeg"},27:function(e,t,a){e.exports=a(37)},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(39),i=a(40),s=a(41),m=(a(32),a(3)),u=a(4),d=a(6),p=a(5),h=a(7),f=a(38),E=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:this.props.image,alt:"card"}),r.a.createElement("div",{className:"overlay"})),r.a.createElement("div",{className:"CardTitle"},this.props.title))}}]),t}(n.Component),b=a(10),g=a(15),v=a(11),j=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SocialMedia"},r.a.createElement(f.a,{to:"http://facebook.com/elitetraveliceland"},r.a.createElement(b.a,{className:"FacebookIcon",icon:g.a})),r.a.createElement(f.a,{to:"http://twitter.com/elitetraveliceland"},r.a.createElement(b.a,{className:"TwitterIcon",icon:g.b})),r.a.createElement(f.a,{to:"http://youtube.com/elitetraveliceland"},r.a.createElement(b.a,{className:"YoutubeIcon",icon:g.c})),r.a.createElement(f.a,{to:"mailto:concierge@elitetravel.is"},r.a.createElement(b.a,{className:"EmailIcon",icon:v.a})),r.a.createElement(f.a,{to:"tel:003548888889"},r.a.createElement(b.a,{className:"PhoneIcon",icon:v.c})),r.a.createElement(f.a,{to:"/help"},r.a.createElement(b.a,{className:"GreenpediaIcon",icon:v.d})))}}]),t}(n.Component),y=a(21),N=a.n(y),_=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer",className:"Footer "+this.props.className},r.a.createElement("img",{alt:"Tour Operator",style:{width:"25vw",height:"25vw",maxWidth:192,maxHeight:192,minWidth:64,minHeight:64,marginLeft:"auto",marginRight:"auto",display:"flex"},src:N.a}),r.a.createElement(j,null))}}]),t}(n.Component),w=a(22),O=a.n(w),k=a(23),C=a.n(k),T=a(24),I=a.n(T),x=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"AboutUs"},r.a.createElement("h1",null,r.a.createElement(b.a,{className:"leaf-logo",icon:v.b})," Who are we?"),r.a.createElement("strong",null,"Elite Travel")," is a licensed tour operator, authorised by the Icelandic Tourist Board. We provide private guided tailor-made tours according to our customers wants and needs. Elite Travel allows you to avoid the large crowds, focus on the places of greatest interest, go off into areas less traveled and stay there as long as you would like. There\u2018s no rush and usually, according to your desire, we can adjust the itinerary (the weather, for example, might prevent us from doing that). For more information please contact us.",r.a.createElement("section",{className:"Team",id:"team"},r.a.createElement("div",{className:"Card",style:{width:"256px"}},r.a.createElement("img",{alt:"Team 1",className:"team-img",src:O.a}),r.a.createElement("div",{className:"CardTitle"},r.a.createElement("span",null,r.a.createElement("strong",null,"Maggnus Viking")),r.a.createElement("span",null,"Driver & Guide"))),r.a.createElement("div",{className:"Card",style:{width:"256px"}},r.a.createElement("img",{alt:"Team 1",className:"team-img",src:C.a}),r.a.createElement("div",{className:"CardTitle"},r.a.createElement("span",null,r.a.createElement("strong",null,"Emma Ahlberg")),r.a.createElement("span",null,"Support & Planning"))),r.a.createElement("div",{className:"Card",style:{width:"256px"}},r.a.createElement("img",{alt:"Team 1",className:"team-img",src:I.a}),r.a.createElement("div",{className:"CardTitle"},r.a.createElement("span",null,r.a.createElement("strong",null,"Egill Thorsteinsson")),r.a.createElement("span",null,"Owner & Financial")))))}}]),t}(n.Component),D=a(25),L=a.n(D),H=a(12),S=a.n(H),B=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={tours:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://35.222.46.41:1337/api/tours",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({tours:t}),console.log(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",{className:"Navbar2"},r.a.createElement("img",{src:S.a,className:"LogoImage",alt:"Logo"})),r.a.createElement("div",{className:"FluidContainer"},r.a.createElement("img",{src:L.a,className:"HeroImage",alt:"Hero"}),r.a.createElement("h1",{className:"HeroTitle"},"Come and explore ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"2em",color:"#90caf9"}},"ICELAND")," ",r.a.createElement("br",null),"Adventures, amazing sights and untouched nature awaits you! ",r.a.createElement("br",null),r.a.createElement("a",{href:"#tours"},r.a.createElement("button",{className:"blue"},"Browse our selection of tours.")),r.a.createElement("a",{href:"#about"},r.a.createElement("button",{className:"white"},"Learn more about us!")))),r.a.createElement("div",{className:"TourList",id:"tours"},this.state.tours.map(function(e){return r.a.createElement(f.a,{to:"/tour/"+e.id},r.a.createElement(E,{title:e.name,image:e.img}))})),r.a.createElement(x,null),r.a.createElement(_,null))}}]),t}(n.Component),U=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement(f.a,{to:"/",className:"GreenLogo"},r.a.createElement("img",{src:S.a,alt:"logo"})))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={activityID:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.split("/").slice(-1)[0],t=this;fetch("http://35.222.46.41:1337/api/tour/"+e,{mode:"cors"}).then(function(e){return e.json()}).then(function(e){t.setState({activityID:e.activityID}),console.log(e)}).then(function(){var e=document.createElement("script");e.text="var w38386_86384b3c_505d_4db2_a022_e4e632134afe;(function(d, t) { var host = 'widgets.bokun.io'; var frameUrl = 'https://' + host + '/widgets/38386?bookingChannelUUID=f6796fa2-20ca-4d4d-a0df-57f3ab0f2149&amp;activityId="+t.state.activityID+"&amp;lang=en&amp;ccy=ISK&amp;hash=w38386_86384b3c_505d_4db2_a022_e4e632134afe'; var s = d.createElement(t), options = {'host': host, 'frameUrl': frameUrl, 'widgetHash':'w38386_86384b3c_505d_4db2_a022_e4e632134afe', 'autoResize':true,'height':'','width':'100%', 'minHeight': 0,'async':true, 'ssl':true, 'affiliateTrackingCode': '', 'transientSession': true, 'cookieLifetime': 43200 }; s.src = 'https://' + host + '/assets/javascripts/widgets/embedder.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { w38386_86384b3c_505d_4db2_a022_e4e632134afe = new BokunWidgetEmbedder(); w38386_86384b3c_505d_4db2_a022_e4e632134afe.initialize(options); w38386_86384b3c_505d_4db2_a022_e4e632134afe.display(); } catch (e) {} }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);})(document, 'script');",e.async=!0,document.getElementById("bokun-w38386_86384b3c_505d_4db2_a022_e4e632134afe").appendChild(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Tour"},r.a.createElement(U,null),r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"bokun-widget"},r.a.createElement("div",{id:"bokun-w38386_86384b3c_505d_4db2_a022_e4e632134afe"},"Loading..."))),r.a.createElement(_,null))}}]),t}(n.Component);l.a.render(r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:B}),r.a.createElement(s.a,{path:"/tour",component:A})))),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.b2fb4c93.chunk.js.map