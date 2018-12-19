(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t.n(i),s=t(2),n=t.n(s),o=(t(16),t(7)),c=t(3),l=t(4),g=t(8),m=t(5),d=t(9),u=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h1",{className:"center-align"},"Art Clicker"),r.a.createElement("h4",{className:"center-align flow-text"},"Click these paintings to score. Beware though, don't click the same one twice."))))))},h=function(e){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper orange darken-4"},r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-items"},"Art Clicker"),r.a.createElement("li",{className:"nav-items"},e.message),r.a.createElement("li",{className:"nav-items"},"Score: ",e.score," | High Score: ",e.highScore)))))},p=function(){return r.a.createElement("footer",{className:"page-footer orange accent-4"},r.a.createElement("div",{className:"footer-copyright orange darken-4"},r.a.createElement("div",{className:"container"},"\xa9 Alexander Jones")))},f=function(e){return r.a.createElement("div",{className:"col s6 m4 l3"},r.a.createElement("div",{id:e.id,style:{backgroundImage:"url(".concat(e.image,")")},className:"paintings z-depth-2",onClick:function(){return e.imageClick(e.id)}}))},v=t(6),k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=Object(g.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,highScore:0,images:v,guessed:[],message:"Click an image to begin!"},t.shuffleImages=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e},t.imageClick=function(e){-1===t.state.guessed.indexOf(e)?t.setState({score:t.state.score+1},function(){t.state.score>=t.state.highScore&&t.setState({highScore:t.state.score}),t.checkForWin(e)}):t.gameOver()},t.checkForWin=function(e){t.state.score<12?(t.setState(function(a){return{guessed:[].concat(Object(o.a)(a.guessed),[e]),message:"Good! Keep going!"}}),t.shuffleImages(t.state.images)):12===t.state.score?t.setState({message:"You win!"}):t.gameOver()},t.gameOver=function(){t.setState({score:0,highScore:t.state.highScore,guessed:[],message:"Oops! Try again!"}),t.shuffleImages(t.state.images)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffleImages(this.state.images)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"page-flexbox-wrapper"},r.a.createElement(h,{score:this.state.score,highScore:this.state.highScore,message:this.state.message}),r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},this.state.images.map(function(a){return r.a.createElement(f,{id:a.id,key:a.id,image:a.image,clicked:a.clicked,imageClick:e.imageClick,gameOver:e.gameOver})}))))),r.a.createElement(p,null))}}]),a}(i.Component),w=(t(18),function(){return r.a.createElement("div",null,r.a.createElement(k,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,image:"https://uploads5.wikiart.org/images/vincent-van-gogh/the-old-tower-in-the-fields-1884.jpg!Portrait.jpg"},{id:2,image:"https://uploads1.wikiart.org/images/hans-holbein-the-younger/the-ambassadors-1533.jpg!Portrait.jpg"},{id:3,image:"https://uploads1.wikiart.org/00121/images/rembrandt/2.jpg!Portrait.jpg"},{id:4,image:"https://uploads5.wikiart.org/images/claude-monet/poplars-at-giverny.jpg!Portrait.jpg"},{id:5,image:"https://uploads5.wikiart.org/images/edgar-degas/in-the-dance-studio.jpg!Portrait.jpg"},{id:6,image:"https://uploads7.wikiart.org/images/caravaggio/medusa-1597-1.jpg!Portrait.jpg"},{id:7,image:"https://uploads2.wikiart.org/images/joseph-wright/vesuvius-from-posillipo.jpg!Portrait.jpg"},{id:8,image:"https://uploads4.wikiart.org/images/william-blake/the-lovers-whirlwind-1827.jpg!Portrait.jpg"},{id:9,image:"https://uploads0.wikiart.org/images/hieronymus-bosch/the-concert-in-the-egg-1480.jpg!Portrait.jpg"},{id:10,image:"https://uploads7.wikiart.org/images/claude-lorrain/embarkation-of-ulysses-1646.jpg!Portrait.jpg"},{id:11,image:"https://uploads5.wikiart.org/00115/images/francisco-herrera/cabeza-de-santo-degollado.jpg!Portrait.jpg"},{id:12,image:"https://uploads0.wikiart.org/images/max-kurzweil/the-fisherman.jpg!Portrait.jpg"}]}},[[10,2,1]]]);
//# sourceMappingURL=main.4d47f5ed.chunk.js.map