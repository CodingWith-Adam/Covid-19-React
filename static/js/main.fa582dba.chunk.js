(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(56),o=a.n(r),d=(a(66),a(67),a(29)),l=a.n(d),f=a(57),b=a(30),u=a(6),i=a(7),s=a(9),m=a(8),h=function(){return c.a.createElement("div",{className:"spinner-border text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))},y=a(58),p=a.n(y),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.countries,a=e.onSortByTotal,n=e.onSortByCountryName,r=e.onRowSelected;return c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("a",{href:"/",onClick:n},"Country")),c.a.createElement("th",null,c.a.createElement("a",{href:"/",onClick:a},"Total")))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement("tr",{key:e.name,style:e.selected?{backgroundColor:"lightYellow"}:null,onClick:function(){return r(e)}},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.total))}))))}}]),a}(n.Component),C=a(59),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.countries;if(0===e.length)return c.a.createElement("div",null);var t={labels:e.map((function(e){return e.name})),datasets:[{data:e.map((function(e){return e.total})),backgroundColor:O}]};return c.a.createElement("div",null,c.a.createElement(C.a,{data:t,width:100,height:200,options:{maintainAspectRatio:!1}}))}}]),a}(n.Component),O=["#63b598","#ce7d78","#ea9e70","#a48a9e","#c6e1e8","#648177","#0d5ac1","#f205e6","#1c0365","#14a9ad","#4ca2f9","#a4e43f","#d298e2","#6119d0","#d2737d","#c0a43c","#f2510e","#651be6","#79806e","#61da5e","#cd2f00","#9348af","#01ac53","#c5a4fb","#996635","#b11573","#4bb473","#75d89e","#2f3f94","#2f7b99","#da967d","#34891f","#b0d87b","#ca4751","#7e50a8","#c4d647","#e0eeb8","#11dec1","#289812","#566ca0","#ffdbe1","#2f1179","#935b6d","#916988","#513d98","#aead3a","#9e6d71","#4b5bdc","#0cd36d","#250662","#cb5bea","#228916","#ac3e1b","#df514a","#539397","#880977","#f697c1","#ba96ce","#679c9d","#c6c42c","#5d2c52","#48b41b","#e1cf3b","#5be4f0","#57c4d8","#a4d17a","#225b8","#be608b","#96b00c","#088baf","#f158bf","#e145ba","#ee91e3","#05d371","#5426e0","#4834d0","#802234","#6749e8","#0971f0","#8fb413","#b2b4f0","#c3c89d","#c9a941","#41d158","#fb21a3","#51aed9","#5bb32d","#807fb","#21538e","#89d534","#d36647","#7fb411","#0023b8","#3b8c2a","#986b53","#f50422","#983f7a","#ea24a3","#79352c","#521250","#c79ed2","#d6dd92","#e33e52","#b2be57","#fa06ec","#1bb699","#6b2e5f","#64820f","#1c271","#21538e","#89d534","#d36647","#7fb411","#0023b8","#3b8c2a","#986b53","#f50422","#983f7a","#ea24a3","#79352c","#521250","#c79ed2","#d6dd92","#e33e52","#b2be57","#fa06ec","#1bb699","#6b2e5f","#64820f","#1c271","#9cb64a","#996c48","#9ab9b7","#06e052","#e3a481","#0eb621","#fc458e","#b2db15","#aa226d","#792ed8","#73872a","#520d3a","#cefcb8","#a5b3d9","#7d1d85","#c4fd57","#f1ae16","#8fe22a","#ef6e3c","#243eeb","#1dc18","#dd93fd","#3f8473","#e7dbce","#421f79","#7a3d93","#635f6d","#93f2d7","#9b5c2a","#15b9ee","#0f5997","#409188","#911e20","#1350ce","#10e5b1","#fff4d7","#cb2582","#ce00be","#32d5d6","#17232","#608572","#c79bc2","#00f87c","#77772a","#6995ba","#fc6b57","#f07815","#8fd883","#060e27","#96e591","#21d52e","#d00043","#b47162","#1ec227","#4f0f6f","#1d1d58","#947002","#bde052","#e08c56","#28fcfd","#bb09b","#36486a","#d02e29","#1ae6db","#3e464c","#a84a8f","#911e7e","#3f16d9","#0f525f","#ac7c0a","#b4c086","#c9d730","#30cc49","#3d6751","#fb4c03","#640fc1","#62c03e","#d3493a","#88aa0b","#406df9","#615af0","#4be47","#2a3434","#4a543f","#79bca0","#a8b8d4","#00efd4","#7ad236","#7260d8","#1deaa7","#06f43a","#823c59","#e3d94c","#dc1c06","#f53b2a","#b46238","#2dfff6","#a82b89","#1a8011","#436a9f","#1a806a","#4cf09d","#c188a2","#67eb4b","#b308d3","#fc7e41","#af3101","#ff065","#71b1f4","#a2f8a5","#e23dd0","#d3486d","#00f7f9","#474893","#3cec35","#1c65cb","#5d1d0c","#2d7d2a","#ff3420","#5cdd87","#a259a4","#e4ac44","#1bede6","#8798a4","#d7790f","#b2c24f","#de73c2","#d70a9c","#25b67","#88e9b8","#c2b0e2","#86e98f","#ae90e2","#1a806b","#436a9e","#0ec0ff","#f812b3","#b17fc9","#8d6c2f","#d3277a","#2ca1ae","#9685eb","#8a96c6","#dba2e6","#76fc1b","#608fa4","#20f6ba","#07d7f6","#dce77a","#77ecca"],S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={countries:[],filterText:"",allCountryTotal:0,selectedCountries:[]},e.url="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv",e.handleOnRowSelected=function(t){var a=Object(b.a)(e.state.countries),n=a.findIndex((function(e){return e.name===t.name})),c={name:t.name,total:t.total,selected:!t.selected};a[n]=c,e.setState({countries:a,selectedCountries:a.filter((function(e){return e.selected}))})},e.sortByTotal=function(e,t){return t.total>e.total?1:t.total<e.total?-1:0},e.handleOnSortByTotal=function(t){e.handleOnSortBy(t,e.sortByTotal)},e.sortByCountryName=function(e,t){return e.name>t.name?1:e.name<t.name?-1:0},e.handleOnSortByCountryName=function(t){e.handleOnSortBy(t,e.sortByCountryName)},e.handleOnSortBy=function(t,a){t.preventDefault();var n=Object(b.a)(e.state.countries);n.sort(a),e.setState({countries:n})},e.handleFilterTextChange=function(t){var a=t.target.value;e.setState({filterText:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(l.a.mark((function e(){var t,a,n,c,r,o,d,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(this.url);case 2:for(t=e.sent,a=t.data.split("\n"),n=[],c=0,r=1;r<a.length;r++)o=a[r].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/),d=o[0].replace(/"/g,""),f=Number(o[4]),""!==d&&(n.push({name:d,total:f}),c+=f);this.setState({countries:n,allCountryTotal:c});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.allCountryTotal,n=e.selectedCountries,r=e.filterText;return c.a.createElement("div",null,c.a.createElement("h1",{style:{textAlign:"center"}},"All Country Total: ",this.numberWithCommas(a)),0===a?c.a.createElement(h,null):c.a.createElement("div",null,c.a.createElement("input",{value:r,onChange:this.handleFilterTextChange}),c.a.createElement(E,{countries:n}),c.a.createElement(v,{countries:t.filter((function(e){return""===r?e:e.name.toLowerCase().indexOf(r.toLowerCase())>=0})),onSortByTotal:this.handleOnSortByTotal,onSortByCountryName:this.handleOnSortByCountryName,onRowSelected:this.handleOnRowSelected})))}}]),a}(n.Component);var g=function(){return c.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(179);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a(180)},66:function(e,t,a){},67:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.fa582dba.chunk.js.map