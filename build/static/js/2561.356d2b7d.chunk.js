(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2561],{50490:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n(74165);function i(e,t,n,s,i,r,a){try{var o=e[r](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,i)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var a=e.apply(t,n);function o(e){i(a,s,r,o,l,"next",e)}function l(e){i(a,s,r,o,l,"throw",e)}o(void 0)}))}}var a=n(70885),o=n(72791),l=n(78983),c=n(12606),d=n(95798),u=(n(21379),n(74085),n(29248),n(72880),n(15671)),h=n(43144),p=n(60136),m=n(27277),f=n(80184),g=(o.PureComponent,n(33035)),x=n(93721),y=(n(63263),n(6645)),b=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=(t[0],t[1],(0,o.useState)([])),i=(0,a.Z)(n,2),u=i[0],h=i[1],p=(0,o.useState)([]),m=(0,a.Z)(p,2),b=m[0],j=m[1],v=(0,o.useState)([]),w=(0,a.Z)(v,2),k=w[0],S=w[1],N=(0,o.useState)([]),R=(0,a.Z)(N,2),_=R[0],I=(R[1],(0,o.useState)(!1)),Z=(0,a.Z)(I,2),C=(Z[0],Z[1]),T=(0,o.useState)(null),M=(0,a.Z)(T,2),A=M[0],O=M[1],q=(0,o.useState)(!1),B=(0,a.Z)(q,2),D=B[0],$=B[1],E=(0,o.useState)(!1),F=(0,a.Z)(E,2),J=F[0],H=F[1],z=(0,o.useState)(!1),P=(0,a.Z)(z,2),W=(P[0],P[1]),L=(0,o.useState)(!1),K=(0,a.Z)(L,2),Q=K[0],G=K[1],U=0,V=(0,d.R)(),X=(0,a.Z)(V,3),Y=X[0],ee=X[1],te=(X[2],[{id:"1",title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",ome:"processed",status:"processed",status_code:"bg-success"},{id:"2",title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",ome:"Progress",status:"Progress",status_code:"bg-success"},{id:"2",title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",ome:"Rejected",status:"Rejected",status_code:"bg-danger"}]),ne=(0,o.useState)(te),se=(0,a.Z)(ne,2),ie=se[0],re=se[1],ae=y,oe=function(e,t){console.log(e),console.log(t);var n=document.getElementById(t),s=document.getElementById("mypopup"),i=n.getBoundingClientRect();s.style.left=i.right+20+"px",s.style.top=window.scrollY+i.top-60+"px",s.style.display="block",document.getElementById("svg_content").innerText=e,C(!0)},le=function(e){C(!1);document.getElementById(e);document.getElementById("mypopup").style.display="none"},ce=function(){gapi.load("client",de)},de=function(){var e=r((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.init({apiKey:"AIzaSyDiKJWZQhAUgxehXw-7WahdjAyDlDq9Tgo",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]});case 2:$(!0),he();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=google.accounts.oauth2.initTokenClient({client_id:"725433826181-bu47ql2jf48j5lhvvi8fco09fjtvn8lq.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly",callback:""});console.log(e),O(e),H(!0),he()},he=function(){D&&J&&W(!0)},pe=function(){var e=r((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(A),A.callback=function(e){if(void 0!==e.error)throw e;G(!0),document.getElementById("authorize_button").innerText="Refresh",me()},null===gapi.client.getToken()?A.requestAccessToken({prompt:"consent"}):A.requestAccessToken({prompt:""});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function me(){try{gapi.client.drive.files.list({q:"mimeType='application/vnd.google-apps.folder' and name='luminor'"}).then((function(e){var t=e.result.files;if(t&&t.length>0){var n=t[0].id;gapi.client.drive.files.list({q:"mimeType != 'application/vnd.google-apps.folder' and trashed = false and name='line.json' and parents in '"+n+"'"}).then((function(e){console.log(e);var t=e.result.files;t&&t.length>0?(console.log(t[0].id),gapi.client.drive.files.get({fileId:t[0].id,alt:"media"}).then((function(e){console.log(e);var t=e.body;console.log(t);var n=JSON.parse(t);h(n),console.log(n),console.log(u)}),(function(e){console.log(e)}))):console.log("No files found")}),(function(e){console.log(e)}))}else console.log("No folders found")}),(function(e){console.log(e)})),gapi.client.drive.files.list({q:"mimeType='application/vnd.google-apps.folder' and name='luminor'"}).then((function(e){var t=e.result.files;if(t&&t.length>0){var n=t[0].id;gapi.client.drive.files.list({q:"mimeType != 'application/vnd.google-apps.folder' and trashed = false and name='bar.json' and parents in '"+n+"'"}).then((function(e){console.log(e);var t=e.result.files;t&&t.length>0?(console.log(t[0].id),gapi.client.drive.files.get({fileId:t[0].id,alt:"media"}).then((function(e){console.log(e);var t=e.body;console.log(t);var n=JSON.parse(t);j(n),console.log(n),console.log(u)}),(function(e){console.log(e)}))):console.log("No files found")}),(function(e){console.log(e)}))}else console.log("No folders found")}),(function(e){console.log(e)})),gapi.client.drive.files.list({q:"mimeType='application/vnd.google-apps.folder' and name='luminor'"}).then((function(e){var t=e.result.files;if(t&&t.length>0){var n=t[0].id;gapi.client.drive.files.list({q:"mimeType != 'application/vnd.google-apps.folder' and trashed = false and name='whatstoday.json' and parents in '"+n+"'"}).then((function(e){console.log(e);var t=e.result.files;t&&t.length>0?(console.log(t[0].id),gapi.client.drive.files.get({fileId:t[0].id,alt:"media"}).then((function(e){console.log(e);var t=e.body;console.log(t);var n=JSON.parse(t);S(n),console.log(n),console.log(u)}),(function(e){console.log(e)}))):console.log("No files found")}),(function(e){console.log(e)}))}else console.log("No folders found")}),(function(e){console.log(e)}))}catch(n){return console.log(n),void(document.getElementById("content").innerText=n.message)}var e=undefined.result.files;if(e&&0!=e.length){var t=e.reduce((function(e,t){return"".concat(e).concat(t.name," (").concat(t.id,"\n")}),"Files:\n");document.getElementById("content").innerText=t}else document.getElementById("content").innerText="No files found."}return(0,o.useEffect)((function(){var e=document.createElement("script");e.src="https://apis.google.com/js/api.js",e.async=!0,e.defer=!0,e.onload=ce,document.body.appendChild(e);var t=document.createElement("script");t.src="https://accounts.google.com/gsi/client",t.async=!0,t.defer=!0,t.onload=ue,document.body.appendChild(t)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x.Z,{data:k}),(0,f.jsxs)(l.rb,{children:[(0,f.jsx)(l.b7,{xs:12,lg:4,className:"",children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsxs)(l.bn,{children:["Requirements Stumpline Status",(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{id:"authorize_button",onClick:pe,children:"Authorize"}),Q&&(0,f.jsx)("button",{id:"signout_button",children:"Sign Out"})]})]}),(0,f.jsx)(l.sl,{})]})}),(0,f.jsx)(l.b7,{xs:12,lg:4,className:"",children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsx)(l.bn,{children:"Requirements Complaints Trend"}),(0,f.jsx)(l.sl,{children:(0,f.jsx)(g.oK,{height:100,width:100,data:{labels:u.labels,datasets:u.datasets}})})]})}),(0,f.jsx)(l.b7,{xs:12,lg:4,className:"",children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsx)(l.bn,{children:"Requirements Traceability Trend"}),(0,f.jsx)(l.sl,{children:(0,f.jsx)(g.JZ,{height:100,width:100,data:{labels:b.labels,datasets:b.datasets},labels:"months"})})]})}),(0,f.jsx)(l.b7,{xs:12,lg:4,className:"",children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsx)(l.bn,{children:"Requirements Stumpline Status"}),(0,f.jsx)(l.sl,{})]})}),(0,f.jsx)(l.b7,{xs:12,lg:4,className:"",children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsx)(l.bn,{children:"Requirements Stumpline Status"}),(0,f.jsx)(l.sl,{})]})}),(0,f.jsx)(l.b7,{xs:12,lg:4,className:"",children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsx)(l.bn,{children:"Requirements Stumpline Status"}),(0,f.jsx)(l.sl,{children:(0,f.jsx)(g.nc,{height:"60px",width:"100px",data:{labels:_.labels,datasets:_.datasets}})})]})})]}),(0,f.jsxs)(l.rb,{children:[(0,f.jsx)(l.b7,{xs:12,children:(0,f.jsxs)(l.xH,{className:"mb-4 bg-body",children:[(0,f.jsxs)(l.bn,{children:[(0,f.jsx)("strong",{children:"Requirements Complaints Matrix"}),(0,f.jsx)("div",{className:"float-end",children:(0,f.jsx)("input",{type:"text",onChange:function(e){re(te.filter((function(t){return t.ome.toLowerCase().includes(e.target.value.toLowerCase())})))},className:"form-control"})})]}),(0,f.jsx)(l.sl,{children:(0,f.jsxs)(l.Sx,{caption:"top",children:[(0,f.jsx)(l.V,{children:(0,f.jsxs)(l.T6,{children:[(0,f.jsx)(l.is,{scope:"col",children:"Id"}),(0,f.jsx)(l.is,{scope:"col",children:"Requirements Description"}),(0,f.jsx)(l.is,{scope:"col",children:"OEM Status"}),(0,f.jsx)(l.is,{scope:"col",children:"Status"})]})}),(0,f.jsx)(l.NR,{children:ie.map((function(e,t){return(0,f.jsxs)(l.T6,{children:[(0,f.jsx)(l.is,{scope:"row",children:e.id}),(0,f.jsx)(l.NN,{children:e.title}),(0,f.jsx)(l.NN,{children:e.ome}),(0,f.jsx)(l.NN,{children:(0,f.jsx)("span",{className:e.status_code,children:e.status})})]},t)}))})]})})]})}),(0,f.jsxs)(l.b7,{xs:12,style:{height:"500px"},children:[(0,f.jsx)(c.Z,{data:ae,dimensions:Y,renderCustomNodeElement:function(e){var t=e.nodeDatum,n=e.toggleNode,s=t.name.substring(0,30);s+="...";var i=t.type,r="svg_id"+U;return"step1"===i?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("g",{id:r,transform:"translate(-536 -571)",children:[(0,f.jsxs)("g",{id:"Group_5599","data-name":"Group 5599",transform:"translate(-5 7)",children:[(0,f.jsxs)("g",{width:"230",id:"Rectangle_3512","data-name":"Rectangle 3512",transform:"translate(541 520)",fill:"#141517",stroke:"#1993e6","stroke-width":"2",onClick:n,children:[(0,f.jsx)("rect",{width:"200",height:"94",rx:"13",stroke:"none"}),(0,f.jsx)("rect",{x:"1",y:"1",width:"200",height:"92",rx:"12",fill:"none"})]}),(0,f.jsx)("line",{id:"Line_329","data-name":"Line 329",x2:"200",transform:"translate(542.5 554.5)",fill:"none",stroke:"#1993e6","stroke-width":"2"})]}),(0,f.jsx)("text",{id:"Dasboard",strokeWidth:"0",transform:"translate(704 608)",fill:"#1993e6","font-size":"15","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"-50",y:"0",stroke:"white",onMouseOver:function(){return oe(t.name,r)},onMouseOut:function(){return le(r)},children:"Read more"})}),(0,f.jsx)("text",{id:"Dasboard-2",strokeWidth:"0","data-name":"Dasboard",transform:"translate(622 553)",fill:"#fff","font-size":"21","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"-30",y:"0",stroke:"white",children:"ID : R001"})}),(0,f.jsx)("text",{id:"",strokeWidth:"0",transform:"translate(546 571)",fill:"#fff","font-size":"15","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"0",y:"14",stroke:"white",children:s})})]}),U++]}):"step2"===i?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("g",{id:r,transform:"translate(-536 -571)",children:[(0,f.jsxs)("g",{id:"Group_5599","data-name":"Group 5599",transform:"translate(-5 7)",children:[(0,f.jsxs)("g",{width:"230",id:"Rectangle_3512","data-name":"Rectangle 3512",transform:"translate(541 520)",fill:"#141517",stroke:"#1993e6","stroke-width":"2",onClick:n,children:[(0,f.jsx)("rect",{width:"230",height:"94",rx:"13",stroke:"none"}),(0,f.jsx)("rect",{x:"1",y:"1",width:"230",height:"92",rx:"12",fill:"none"})]}),(0,f.jsx)("line",{id:"Line_329","data-name":"Line 329",x2:"230",transform:"translate(542.5 554.5)",fill:"none",stroke:"#1993e6","stroke-width":"2"})]}),(0,f.jsx)("text",{id:"Dasboard",strokeWidth:"0",transform:"translate(704 608)",fill:"#1993e6","font-size":"15","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"-20",y:"0",stroke:"white",onMouseOver:function(){return oe(t.name,r)},onMouseOut:function(){return le(r)},children:"Read more"})}),(0,f.jsx)("text",{id:"Dasboard-2",strokeWidth:"0","data-name":"Dasboard",transform:"translate(622 553)",fill:"#fff","font-size":"21","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"-10",y:"0",stroke:"white",children:"ID : R001"})}),(0,f.jsx)("text",{id:"",strokeWidth:"0",transform:"translate(546 571)",fill:"#fff","font-size":"15","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"0",y:"14",stroke:"white",children:s})})]}),U++]}):"step3"===i?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("g",{id:r,transform:"translate(-1266.028 -450.689)",onClick:n,children:[(0,f.jsxs)("g",{id:"Rectangle_3715","data-name":"Rectangle 3715",transform:"translate(1266.028 420.689)",fill:"#141517",stroke:"#1993e6","stroke-width":"2",children:[(0,f.jsx)("rect",{width:"210",height:"73",rx:"16",stroke:"none"}),(0,f.jsx)("rect",{x:"1",y:"1",width:"210",height:"71",rx:"15",fill:"none"})]}),(0,f.jsx)("text",{id:"",strokeWidth:"0",transform:"translate(1279.461 442.189)",fill:"#fff","font-size":"15","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"0",y:"14",stroke:"white",children:s})}),(0,f.jsx)("text",{id:"Dasboard",strokeWidth:"0",transform:"translate(1435.714 478.811)",fill:"#1993e6","font-size":"15","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"-50",y:"0",stroke:"white",onMouseOver:function(){return oe(t.name,r)},onMouseOut:function(){return le(r)},children:"Read more"})})]}),U++]}):"step4"===i?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("g",{id:"result",transform:"translate(-1644 -445)",children:[(0,f.jsxs)("g",{id:"Rectangle_3716","data-name":"Rectangle 3716",transform:"translate(1644 420)",fill:"#141517",stroke:"#e50019","stroke-width":"2",onClick:n,children:[(0,f.jsx)("rect",{width:"136",height:"56",rx:"9",stroke:"none"}),(0,f.jsx)("rect",{x:"1",y:"1",width:"134",height:"54",rx:"8",fill:"none"})]}),(0,f.jsx)("text",{id:"Dasboard",strokeWidth:"0",transform:"translate(1683 461)",fill:"red","font-size":"21","font-family":"'Rubik', sans-serif",children:(0,f.jsx)("tspan",{x:"0",y:"-8",children:s})})]})}):(0,f.jsx)(f.Fragment,{})},orientation:"horizontal",styles:{nodes:{node:{shape:"rect",shapeProps:{width:200,height:50,x:-100,y:-25},textBlock:{dy:-20}}}},nodeSvgShape:{shape:"rect",shapeProps:{width:0,height:0}},pathFunc:"step",translate:ee,initialDepth:1,nodeSize:{x:240,y:200},separation:{siblings:1,nonSiblings:1}}),(0,f.jsx)("div",{id:"mypopup",children:(0,f.jsx)("p",{id:"svg_content",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})]})]})}},95798:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var s=n(70885),i=n(72791),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},t=(0,i.useState)(e),n=(0,s.Z)(t,2),r=n[0],a=n[1],o=(0,i.useState)(),l=(0,s.Z)(o,2),c=l[0],d=l[1],u=(0,i.useCallback)((function(e){if(null!==e){var t=e.getBoundingClientRect(),n=t.width,s=t.height;d({width:n,height:s}),a({x:n/2,y:s/2})}}),[]);return[c,r,u]}},93721:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(72791);var s=n(78983),i=n(15005),r=n(33035),a=n(24846),o=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>"],l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"],c=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"],d=n(80184),u=function(e){return(0,d.jsxs)(s.rb,{children:[(0,d.jsx)(s.b7,{sm:6,lg:3,children:(0,d.jsx)(s.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:[e.data.download_count," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(",e.data.download_count,"% ",(0,d.jsx)(a.Z,{icon:o}),")"]})]}),title:e.data.download_label,action:(0,d.jsxs)(s.w5,{alignment:"end",children:[(0,d.jsx)(s.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(a.Z,{icon:l,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(s.$H,{children:[(0,d.jsx)(s.$f,{children:"Action"}),(0,d.jsx)(s.$f,{children:"Another action"}),(0,d.jsx)(s.$f,{children:"Something else here..."}),(0,d.jsx)(s.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(r.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,i.getStyle)("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(s.b7,{sm:6,lg:3,children:(0,d.jsx)(s.co,{className:"mb-4",color:"info",value:(0,d.jsxs)(d.Fragment,{children:[e.data.purchase_count," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(",e.data.purchase_count,"% ",(0,d.jsx)(a.Z,{icon:c}),")"]})]}),title:e.data.purchase_label,action:(0,d.jsxs)(s.w5,{alignment:"end",children:[(0,d.jsx)(s.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(a.Z,{icon:l,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(s.$H,{children:[(0,d.jsx)(s.$f,{children:"Action"}),(0,d.jsx)(s.$f,{children:"Another action"}),(0,d.jsx)(s.$f,{children:"Something else here..."}),(0,d.jsx)(s.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(r.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,i.getStyle)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(s.b7,{sm:6,lg:3,children:(0,d.jsx)(s.co,{className:"mb-4",color:"warning",value:(0,d.jsxs)(d.Fragment,{children:[e.data.customer_count," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(",e.data.customer_count,"% ",(0,d.jsx)(a.Z,{icon:c}),")"]})]}),title:e.data.customer_label,action:(0,d.jsxs)(s.w5,{alignment:"end",children:[(0,d.jsx)(s.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(a.Z,{icon:l,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(s.$H,{children:[(0,d.jsx)(s.$f,{children:"Action"}),(0,d.jsx)(s.$f,{children:"Another action"}),(0,d.jsx)(s.$f,{children:"Something else here..."}),(0,d.jsx)(s.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(r.oK,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(s.b7,{sm:6,lg:3,children:(0,d.jsx)(s.co,{className:"mb-4",color:"danger",value:(0,d.jsxs)(d.Fragment,{children:[e.data.channel_count," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(",e.data.channel_count,"% ",(0,d.jsx)(a.Z,{icon:o}),")"]})]}),title:e.data.channel_label,action:(0,d.jsxs)(s.w5,{alignment:"end",children:[(0,d.jsx)(s.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(a.Z,{icon:l,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(s.$H,{children:[(0,d.jsx)(s.$f,{children:"Action"}),(0,d.jsx)(s.$f,{children:"Another action"}),(0,d.jsx)(s.$f,{children:"Something else here..."}),(0,d.jsx)(s.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(r.JZ,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})}},15005:function(e,t){!function(e,t){for(var n in t)e[n]=t[n]}(t,function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"deepObjectsMerge",(function(){return s})),n.d(t,"getColor",(function(){return l})),n.d(t,"getStyle",(function(){return o})),n.d(t,"hexToRgb",(function(){return c})),n.d(t,"hexToRgba",(function(){return d})),n.d(t,"makeUid",(function(){return u})),n.d(t,"omitByKeys",(function(){return h})),n.d(t,"pickByKeys",(function(){return p})),n.d(t,"rgbToHex",(function(){return m}));var s=function e(t,n){for(var s=0,i=Object.keys(n);s<i.length;s++){var r=i[s];n[r]instanceof Object&&Object.assign(n[r],e(t[r],n[r]))}return Object.assign(t||{},n),t},i=function(){for(var e={},t=document.styleSheets,n="",s=t.length-1;s>-1;s--){for(var i=t[s].cssRules,r=i.length-1;r>-1;r--)if(".ie-custom-properties"===i[r].selectorText){n=i[r].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var n=t.split(": ")[0],s=t.split(": ")[1];n&&s&&(e["--".concat(n.trim())]=s.trim())}})),e},r=function(){return Boolean(document.documentMode)&&document.documentMode>=10},a=function(e){return e.match(/^--.*/i)},o=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(a(e)&&r()){var s=i();t=s[e]}else t=window.getComputedStyle(n,null).getPropertyValue(e).replace(/^\s/,"");return t},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n="--".concat(e),s=o(n,t);return s||e},c=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,s;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),s=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(s,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var n,s,i,r=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!r)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(n=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16)):(n=parseInt(e.slice(1,2),16),s=parseInt(e.slice(2,3),16),i=parseInt(e.slice(3,5),16)),"rgba(".concat(n,", ").concat(s,", ").concat(i,", ").concat(t/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},h=function(e,t){for(var n={},s=Object.keys(e),i=0;i<s.length;i++)!t.includes(s[i])&&(n[s[i]]=e[s[i]]);return n},p=function(e,t){for(var n={},s=0;s<t.length;s++)n[t[s]]=e[t[s]];return n},m=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var n="0".concat(parseInt(t[1],10).toString(16)),s="0".concat(parseInt(t[2],10).toString(16)),i="0".concat(parseInt(t[3],10).toString(16));return"#".concat(n.slice(-2)).concat(s.slice(-2)).concat(i.slice(-2))},f={deepObjectsMerge:s,getColor:l,getStyle:o,hexToRgb:c,hexToRgba:d,makeUid:u,omitByKeys:h,pickByKeys:p,rgbToHex:m};t.default=f}]))},21379:function(){},6645:function(e){"use strict";e.exports=JSON.parse('{"name":"root","type":"step1","children":[{"name":"This is a long text with a line break in the middle.\\nHere is the second line.","type":"step2","children":[{"name":"child of a.1","type":"step3"},{"name":"child of a.2","type":"step3"},{"name":"child of a.3","type":"step3"}]}]}')}}]);
//# sourceMappingURL=2561.356d2b7d.chunk.js.map