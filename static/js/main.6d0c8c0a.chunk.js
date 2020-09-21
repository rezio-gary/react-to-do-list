(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{49:function(e,t,o){e.exports=o(66)},59:function(e,t,o){},60:function(e,t,o){},66:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(28),l=o.n(r),i=o(29),c=o(12),d=o(16),u=(o(59),o(60),o(22)),s=o(74),b=o(7),f=o(71),g=Object(b.a)(Object(b.a)({},f.a),{},{colors:Object(b.a)(Object(b.a)({},f.a.colors),{},{cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#00A3C4",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},leafGreen:{50:"#eeefed",100:"#dddfdb",200:"#babfb6",300:"#989e92",400:"#757e6d",500:"#535e49",600:"#424b3a",700:"#32382c",800:"#21261d",900:"#11130f"},palePink:{50:"#fefcfd",100:"#fef9fa",200:"#fdf3f5",300:"#fbedf0",400:"#fae7eb",500:"#f9e1e6",600:"#c7b4b8",700:"#95878a",800:"#645a5c",900:"#322d2e"},cottonCandyPink:{50:"#fef8fa",100:"#fef1f6",200:"#fce4ec",300:"#fbd6e3",400:"#f9c9d9",500:"#f8bbd0",600:"#c696a6",700:"#95707d",800:"#634b53",900:"#32252a"},mauve:{50:"#f7f1f4",100:"#efe2e8",200:"#dfc5d1",300:"#d0a9bb",400:"#c08ca4",500:"#b06f8d",600:"#8d5971",700:"#6a4355",800:"#462c38",900:"#23161c"},violet:{50:"#f1ecf0",100:"#e2d8e0",200:"#c5b1c1",300:"#a88aa3",400:"#8b6384",500:"#6e3c65",600:"#583051",700:"#42243d",800:"#42243d",900:"#160c14"}})}),x=o(68),k=o(70),h=o(39),p=o(69),C=o(47),m=o(35),v=function(){var e=Object(d.b)(),t=e.colorMode,o=e.toggleColorMode;return n.a.createElement(x.a,{flexDirection:"row",backgroundColor:["light"===t?"cottonCandyPink.500":"transparent","transparent"],border:"4px solid",borderColor:["light"===t?"transparent":"gray.600","transparent"],borderBottomColor:"transparent",textAlign:"right",width:"100%",padding:["2px","6px"],position:"relative",zIndex:"999"},n.a.createElement(h.a,{backgroundColor:"light"===t?"violet.500":"cyan.700",color:"white",leftIcon:"light"===t?"moon":m.a,size:"sm",marginLeft:"auto",zIndex:"999",onClick:o,_hover:{backgroundColor:"light"===t?"violet.600":"cyan.800"},_active:{backgroundColor:"light"===t?"violet.300":"cyan.500"},_focus:{boxShadow:"light"===t?"0 0 0 2px #a88aa3":"0 0 0 2px #00A3C4"}},"light"===t?"Dark":"Pink"," Mode"),n.a.createElement(p.a,{backgroundColor:"light"===t?"leafGreen.500":"gray.500",color:"white",icon:C.a,size:"sm",marginLeft:"6px",zIndex:"999",onClick:function(){return window.open("https://github.com/briannamcdonald/react-to-do-list")},_hover:{backgroundColor:"light"===t?"leafGreen.600":"gray.600"},_active:{backgroundColor:"light"===t?"leafGreen.300":"gray.300"},_focus:{boxShadow:"light"===t?"0 0 0 2px #989e92":"0 0 0 2px #A0AEC0"}}))},T=o(72),w=Object(c.b)((function(e){return{list:e.allTaskList}}),(function(e){return{onDeleteTask:function(t){return e({type:"DELETE_TASK",taskId:t})},onClickCheckbox:function(t){return e({type:"CLICK_CHECKBOX",taskId:t})}}}))((function(e){var t=Object(d.b)().colorMode;return n.a.createElement(x.a,{flexDirection:"row",background:"light"===t?"#f8bbd0":"#4A5568",width:"100%",justifyContent:"space-around",alignItems:"center",position:"relative",right:"4px",border:"light"===t?"2px solid #e6aec1":"2px solid #718096",borderRadius:"6px",boxShadow:"light"===t?"2px 2px 2px #cd82a4":"2px 2px 2px #A0AEC0",margin:"4px"},n.a.createElement(T.a,{variantColor:"light"===t?"leafGreen":"cyan",borderColor:"light"===t?"leafGreen.500":"cyan.600",color:"white",size:"lg",margin:"6px 6px 6px 20px",paddingRight:"6px",isChecked:e.done,onChange:function(){return e.onClickCheckbox(e.id)}}),n.a.createElement(k.a,{color:"light"===t?"gray.800":"white",fontSize:["2xl","xl","xl","lg"],fontFamily:"Trebuchet MS",margin:"6px auto",maxWidth:["70%","80%"],overflowWrap:"break-word"},e.text),n.a.createElement(p.a,Object.assign({color:"white",size:"xs","aria-label":"Delete item",icon:"delete",display:"flex",justifyContent:"center",alignItems:"center",margin:["2px 12px 2px 6px","6px 20px 6px 11px"],onClick:function(){return e.onDeleteTask(e.id)}},{light:{backgroundColor:"leafGreen.500",_hover:{backgroundColor:"leafGreen.600"},_active:{backgroundColor:"leafGreen.300"},_focus:{boxShadow:"0 0 0 2px #989e92"}},dark:{backgroundColor:"cyan.600",_hover:{backgroundColor:"cyan.700"},_active:{backgroundColor:"cyan.400"},_focus:{boxShadow:"0 0 0 2px #4A5568"}}}[t])))})),E=Object(c.b)((function(e){return{currentCol:e.currentColumn,list:e.allTaskList,visibleList:e.visibleTaskList}}),(function(e){return{onClickToDo:function(){return e({type:"CLICK_TO_DO"})},onClickDone:function(){return e({type:"CLICK_DONE"})},onClickAll:function(){return e({type:"CLICK_ALL"})}}}))((function(e){var t=Object(d.b)().colorMode,o={light:"mauve.500",dark:"gray.600"},a={light:"violet.500",dark:"cyan.700"},r={light:"mauve.600",dark:"gray.700"},l={light:"violet.600",dark:"cyan.800"},i={light:"mauve.300",dark:"gray.400"},c={light:"violet.300",dark:"cyan.500"};return n.a.createElement(x.a,{flexDirection:"row",width:"100%",margin:"2px auto 6px auto",justifyContent:"center",position:"relative",left:["0","4px"]},n.a.createElement(h.a,{backgroundColor:"to do"===e.currentCol?a[t]:o[t],color:"white",width:"33%",margin:["2px 1px","2px"],fontSize:["xl","lg","lg","md"],leftIcon:"calendar",onClick:e.onClickToDo,_hover:{backgroundColor:"to do"===e.currentCol?l[t]:r[t]},_active:{backgroundColor:"to do"===e.currentCol?c[t]:i[t]},_focus:{boxShadow:"light"===t?"0 0 0 2px #a88aa3":"0 0 0 2px #00A3C4"}},"To Do"),n.a.createElement(h.a,{backgroundColor:"done"===e.currentCol?a[t]:o[t],color:"white",width:"33%",margin:["2px 1px","2px"],fontSize:["xl","lg","lg","md"],leftIcon:"check-circle",onClick:e.onClickDone,_hover:{backgroundColor:"done"===e.currentCol?l[t]:r[t]},_active:{backgroundColor:"done"===e.currentCol?c[t]:i[t]},_focus:{boxShadow:"light"===t?"0 0 0 2px #a88aa3":"0 0 0 2px #00A3C4"}},"Done"),n.a.createElement(h.a,{backgroundColor:"all"===e.currentCol?a[t]:o[t],color:"white",width:"33%",margin:["2px 1px","2px"],fontSize:["xl","lg","lg","md"],leftIcon:m.b,onClick:e.onClickAll,_hover:{backgroundColor:"all"===e.currentCol?l[t]:r[t]},_active:{backgroundColor:"all"===e.currentCol?c[t]:i[t]},_focus:{boxShadow:"light"===t?"0 0 0 2px #a88aa3":"0 0 0 2px #00A3C4"}},"All Tasks"))})),y=o(73),L=Object(c.b)((function(e){return{newText:e.newTaskText,allList:e.allTaskList,visibleList:e.visibleTaskList}}),(function(e){return{onEnterNewTaskText:function(t){return e({type:"ENTER_NEW_TASK_TEXT",newText:t})},onAddTask:function(){return e({type:"ADD_TASK"})}}}))((function(e){var t=Object(d.b)().colorMode;return n.a.createElement("div",null,n.a.createElement("b",null,n.a.createElement(k.a,{color:"light"===t?"gray.700":"gray.100",fontSize:["4xl","4xl","4xl","3xl"],fontFamily:"Trebuchet MS",margin:"8px"},"To-Do List")),n.a.createElement(x.a,{flexDirection:"row",width:["calc(100% - 14px)","85%"],margin:"0 auto",position:"relative",right:"4px"},n.a.createElement(y.a,{placeholder:"Enter a new task...",backgroundColor:"light"===t?"white":"gray.100",borderColor:"gray.200",color:"gray.700",focusBorderColor:"light"===t?"violet.300":"cyan.700",margin:"8px 1px",fontSize:["xl","lg","lg","md"],position:"relative",left:"4px",value:e.newText,onChange:function(t){return e.onEnterNewTaskText(t.target.value)},onKeyPress:function(t){13===t.which&&e.onAddTask()},_placeholder:{color:"light"===t?"gray.400":"gray.500",fontSize:["xl","lg","lg","md"]}}),n.a.createElement(h.a,Object.assign({color:"white",margin:"8px 1px",fontSize:["xl","lg","lg","md"],position:"relative",left:"4px",onClick:e.onAddTask},{light:{backgroundColor:"mauve.500",_hover:{backgroundColor:"mauve.600"},_active:{backgroundColor:"mauve.300"},_focus:{boxShadow:"0 0 0 2px #d0a9bb"}},dark:{backgroundColor:"gray.600",_hover:{backgroundColor:"gray.700"},_active:{backgroundColor:"gray.400"},_focus:{boxShadow:"0 0 0 2px #00A3C4"}}}[t]),"Add Task")),n.a.createElement("hr",{style:{borderWidth:"1px",margin:"8px",marginBottom:"10px",borderColor:"light"===t?"#f8bbd0":"#4A5568"}}))})),_=Object(c.b)((function(e){return{allList:e.allTaskList,visibleList:e.visibleTaskList}}))((function(e){var t=Object(d.b)().colorMode;return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement(x.a,{style:{WebkitOverflowScrolling:"touch"},flexDirection:"column",width:["100%","80%","60%","45%"],height:["calc(100% - 40px)","calc(100% - 30px)","calc(100% - 20px)","calc(100% - 8px)"],borderRadius:["0","8px"],position:"absolute",left:["0","50%"],top:["40px","50%"],transform:["none","translate(-50%, -50%)"],overflowY:"scroll",overflow:"scroll",backgroundColor:"light"===t?"#f9e1e6":"#1A202C",border:"light"===t?"4px solid #f8bbd0":"4px solid #4A5568"},n.a.createElement("div",{style:{minHeight:"101%"}},n.a.createElement(L,null),n.a.createElement(x.a,{flexDirection:"column",width:["calc(100% - 14px)","85%"],margin:"0 auto"},n.a.createElement(E,null),n.a.createElement("div",{style:{display:0===e.allList.length?"block":"none"}},n.a.createElement(x.a,{height:"100%",position:"relative",left:"4px",top:"25vh",justifyContent:"center",alignItems:"center"},n.a.createElement(k.a,{color:"light"===t?"gray.700":"gray.100",fontSize:["2xl","2xl","2xl","xl"],fontFamily:"Trebuchet MS"},"Start adding tasks!"))),(e.visibleList?e.visibleList:e.allList).map((function(e){return n.a.createElement(w,{key:e.key,id:e.id,text:e.text,done:e.done})}))))))}));var O=function(){return n.a.createElement(u.a,{theme:g},n.a.createElement(s.a,null),n.a.createElement("div",{className:"App"},n.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=o(38),A={newTaskText:"",currentColumn:"all",allTaskList:[],visibleTaskList:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ENTER_NEW_TASK_TEXT":return Object(b.a)(Object(b.a)({},e),{},{newTaskText:t.newText});case"ADD_TASK":if(void 0===e.newTaskText||0===e.newTaskText.length)break;var o=e.allTaskList.concat({key:new Date+e.newTaskText,id:new Date,text:e.newTaskText,done:!1}),a=[];return a="all"===e.currentColumn?o:"to do"===e.currentColumn?o.filter((function(e){return!e.done})):"done"===e.currentColumn?o.filter((function(e){return e.done})):o,Object(b.a)(Object(b.a)({},e),{},{newTaskText:"",allTaskList:o,visibleTaskList:a});case"DELETE_TASK":var n=e.allTaskList.filter((function(e){return e.id!==t.taskId})),r=[];return r="all"===e.currentColumn?n:"to do"===e.currentColumn?n.filter((function(e){return!e.done})):"done"===e.currentColumn?n.filter((function(e){return e.done})):n,Object(b.a)(Object(b.a)({},e),{},{allTaskList:n,visibleTaskList:r});case"CLICK_CHECKBOX":var l=e.allTaskList.find((function(e){return e.id===t.taskId})),i=e.allTaskList.indexOf(l),c=[].concat(Object(j.a)(e.allTaskList.slice(0,i)),[Object(b.a)(Object(b.a)({},e.allTaskList[i]),{},{done:!e.allTaskList[i].done})],Object(j.a)(e.allTaskList.slice(i+1))),d=[];return d="all"===e.currentColumn?c:"to do"===e.currentColumn?c.filter((function(e){return!e.done})):"done"===e.currentColumn?c.filter((function(e){return e.done})):c,Object(b.a)(Object(b.a)({},e),{},{allTaskList:c,visibleTaskList:d});case"CLICK_TO_DO":var u=e.allTaskList.filter((function(e){return!e.done}));return Object(b.a)(Object(b.a)({},e),{},{currentColumn:"to do",visibleTaskList:u});case"CLICK_DONE":var s=e.allTaskList.filter((function(e){return e.done}));return Object(b.a)(Object(b.a)({},e),{},{currentColumn:"done",visibleTaskList:s});case"CLICK_ALL":return Object(b.a)(Object(b.a)({},e),{},{currentColumn:"all",visibleTaskList:e.allTaskList});default:return e}},S=Object(i.b)(D);l.a.render(n.a.createElement(c.a,{store:S},n.a.createElement(d.a,null,n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.6d0c8c0a.chunk.js.map