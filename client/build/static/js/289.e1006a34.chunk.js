(self.webpackChunkartgallery=self.webpackChunkartgallery||[]).push([[289],{2585:function(t,e){e.X=["Pencil Sketch","Realistic Pencil Art","Charcoal Drawing","Portrait Drawing","Illustration","Line Art","Black and White Art","Surreal Pencil Art","Abstract Pencil Drawing","Doodle Art","Digital Art","Digital Painting","Vector Art","Digital Illustration","Concept Art","Anime and Manga Art","Pixel Art","Digital Portraits","Fantasy Art","Sci-Fi Art","Abstract Digital Art","Handmade Crafts","DIY Crafts","Paper Craft","Origami","Fabric Art","Pottery","Metal Craft","Beadwork","Recycled Art","Mixed Media Art","Collage Art","Glass Art","Sculpture","Calligraphy","Printmaking","Mosaic Art","3D Art","Realism","Abstract","Impressionism","Expressionism","Cubism","Modern Art","Traditional Art","Contemporary Art","Nature Art","Wildlife Art","Portrait Art","Landscape Art","Mythology Art","Acrylic Painting","Oil Painting","Watercolor Painting","Ink Art","Pastel Art","Colored Pencil Art","Digital Collage","Mixed Media Collage","Woodworking","Wood Carving","Leathercraft","Candle Making","Home Decor Crafts","Polymer Clay Crafts","Basket Weaving","Knitting","Crocheting","Realistic Oil Portraits","Traditional Illustration","Still Life Painting","Encaustic Art","Traditional Printmaking","Woodcut Prints","Etching Art","Marble Sculpting","Stone Carving","Clay Sculpture","Traditional Portrait Drawing","Figure Drawing","Realism in Art","Hyperrealism","Impressionist Painting","Abstract Expressionism","Symbolist Art","Surrealist Art","Miniature Painting","Creative drawing","Innovative Drawing"]},6289:function(t,e,r){"use strict";r.r(e);var n=r(4942),a=r(1413),i=r(4165),s=r(5861),o=r(9439),c=r(2791),l=r(9182),u=r(8813),p=r(7689),g=r(6873),d=r(9823),m=r(9002),f=r(9434),h=r(184);e.default=function(){var t,e=(0,c.useState)(null),r=(0,o.Z)(e,2),x=r[0],y=r[1],Z=(0,c.useState)([]),v=(0,o.Z)(Z,2),b=v[0],C=v[1],A=(0,f.v9)((function(t){return t.user})).currentUser,S=(0,p.s0)(),P=(0,f.I0)(),_=(0,p.UO)(),j=(0,c.useState)({postPic:null,description:"",artBy:A.username,category:null}),k=(0,o.Z)(j,2),B=k[0],w=k[1],I=function(){var t=(0,s.Z)((0,i.Z)().mark((function t(){var e,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/post/p/".concat(_.id));case 3:return e=t.sent,t.next=6,e.json();case 6:if(!1!==(r=t.sent).success){t.next=9;break}throw new Error(r.message);case 9:w(r),C(r.tags),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),P((0,m.br)({type:"warning",message:"Sorry, unable to load the Data"})),S(-1),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();(0,c.useEffect)((function(){I()}),[]),(0,c.useEffect)((function(){w((0,a.Z)((0,a.Z)({},B),{},{postPic:x}))}),[x]);var D=function(t){var e=t.target,r=e.name,i=e.value;w((0,a.Z)((0,a.Z)({},B),{},(0,n.Z)({},r,i)))},M=function(){var t=(0,s.Z)((0,i.Z)().mark((function t(e){var r,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.preventDefault(),!(b.length<3)){t.next=5;break}return P((0,m.br)({type:"warning",message:"Please select more then 3 tags"})),t.abrupt("return");case 5:return t.next=7,fetch("/api/post/".concat(_.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,a.Z)((0,a.Z)({},B),{},{tags:b}))});case 7:return r=t.sent,t.next=10,r.json();case 10:if(!1!==(n=t.sent).success){t.next=14;break}return P((0,m.br)({type:"error",message:n.message})),t.abrupt("return");case 14:P((0,m.br)({type:"success",message:"Your post is Updated \ud83d\ude09"})),w({postPic:null,description:null,artBy:null,category:null}),S(-1),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),P((0,m.br)({type:"error",message:"Oops! Something went wrong. Please try again later or contact support."})),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e){return t.apply(this,arguments)}}();return(0,h.jsxs)("form",{className:u.Z.main,onSubmit:M,children:[(0,h.jsx)("h1",{children:"Create your Post"}),(0,h.jsxs)("label",{htmlFor:"profilePic",children:["Add your artwork",(0,h.jsx)(l.Z,{setImageURL:y}),B.postPic&&(0,h.jsx)("img",{style:{height:"70px"},src:B.postPic,alt:""})]}),(0,h.jsxs)("label",{htmlFor:"description",children:["Short description",(0,h.jsx)("textarea",{className:u.Z.bioCtn,id:"description",rows:"3",maxLength:50,name:"description",value:B.description,onChange:D,required:!0})]}),(0,h.jsxs)("p",{children:["Character Count: ",null===(t=B.description)||void 0===t?void 0:t.length," / 50"]}),(0,h.jsx)("h3",{className:u.Z.creatorHeader,children:"Category"}),(0,h.jsxs)("select",{className:u.Z.categorySelect,name:"category",value:null===B||void 0===B?void 0:B.category,onChange:D,required:!0,children:[(0,h.jsx)("option",{value:"",children:"---Select One---"}),(0,h.jsx)("option",{value:"Drawing",children:"Drawing (physical)"}),(0,h.jsx)("option",{value:"Digital Art",children:"Digital Art"}),(0,h.jsx)("option",{value:"Craft Work",children:"Craft Work"})]}),(0,h.jsxs)("h3",{className:u.Z.creatorHeader,children:["Tags",(0,h.jsx)("span",{className:u.Z.subHeading,children:"(minimum 3)"})]}),(0,h.jsx)(g.Z,{setInterests:C,interests:b,name:"Tags"}),(0,h.jsx)("div",{className:u.Z.tagSelectCtn,children:null===b||void 0===b?void 0:b.map((function(t){return(0,h.jsxs)("span",{children:["# ",t,(0,h.jsx)("span",{className:u.Z.closeBtn,onClick:function(){return C(b.filter((function(e){return e!==t})))},children:(0,h.jsx)(d.Z,{fontSize:"small"})})]},t)}))}),(0,h.jsx)("button",{className:u.Z.authButton,type:"submit",children:"Submit"})]})}},9182:function(t,e,r){"use strict";var n=r(4165),a=r(5861),i=(r(2791),r(8742),r(276)),s=r(184);e.Z=function(t){var e=t.setImageURL,r=(0,i.cF)(),o=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a){var s,o,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=a.target.files[0]){t.next=3;break}return t.abrupt("return");case 3:return o=(0,i.iH)(r,"images/".concat(s.name)),t.prev=4,t.next=7,(0,i.KV)(o,s);case 7:return t.next=9,(0,i.Jt)(o);case 9:c=t.sent,e(c),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.error("Error uploading the image:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}();return(0,s.jsx)("div",{children:(0,s.jsx)("input",{type:"file",accept:"image/*",onChange:o})})}},8742:function(t,e,r){"use strict";r.d(e,{l:function(){return i}});var n=r(4702),a=r(276),i=(0,n.ZF)({apiKey:"AIzaSyB8WzUiha2EFT3V9JZYyklt8cYExBMs62I",authDomain:"nooks-e5d79.firebaseapp.com",projectId:"nooks-e5d79",storageBucket:"nooks-e5d79.appspot.com",messagingSenderId:"785309040198",appId:"1:785309040198:web:e0653336ca7f7da075d447",measurementId:"G-2M505Y6ZBL"});(0,a.cF)(i)},6873:function(t,e,r){"use strict";var n=r(3433),a=r(9439),i=r(1413),s=r(2791),o=r(5527),c=r(5377),l=r(7391),u=r(902),p=r(2585),g=r(184),d=p.X,m=function(t){return(0,g.jsx)(o.Z,(0,i.Z)({style:{backgroundColor:"rgba(34, 34, 34, 0.9)",backdropFilter:"blur(10px)",color:"rgb(186, 186, 186)",marginTop:"10px"}},t))};e.Z=function(t){t.interests;var e=t.setInterests,r=t.name,o=(0,s.useState)(null),p=(0,a.Z)(o,2),f=p[0],h=p[1];return(0,g.jsx)(c.Z,{className:u.Z.searchBar,options:d,PaperComponent:m,popupIcon:(0,g.jsx)(g.Fragment,{}),value:f,autoHighlight:!0,onChange:function(t,r){h(r),e((function(t){return t.filter((function(t){return t!==r}))})),setTimeout((function(){e((function(t){return[].concat((0,n.Z)(t),[r])})),h(null)}),0)},sx:{".css-1tzgnuz-MuiInputBase-root-MuiFilledInput-root:after":{border:"none"}},renderInput:function(t){return(0,g.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:u.Z.textfield},t),{},{label:"Search Your ".concat(r,"..."),variant:"filled",InputLabelProps:{style:{color:"#616161",fontSize:"18px"}},InputProps:(0,i.Z)((0,i.Z)({},t.InputProps),{},{style:{color:"rgb(186, 186, 186)"}})}))}})}},9823:function(t,e,r){"use strict";var n=r(4836);e.Z=void 0;var a=n(r(5649)),i=r(184),s=(0,a.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=s},8813:function(t,e){"use strict";e.Z={main:"SignupBox_main__yKg43",authHeader:"SignupBox_authHeader__ATM4L",categorySelect:"SignupBox_categorySelect__L+g4K",authButton:"SignupBox_authButton__A4Bnc",usertypeRadioCtn:"SignupBox_usertypeRadioCtn__T3jT6",usertypeRadio:"SignupBox_usertypeRadio__fxbtU",creatorHeader:"SignupBox_creatorHeader__yPyn-",bioCtn:"SignupBox_bioCtn__OtaoP",tagSelectCtn:"SignupBox_tagSelectCtn__fSwVN",closeBtn:"SignupBox_closeBtn__LgjU5",subHeading:"SignupBox_subHeading__HYYUU",usertypeImg:"SignupBox_usertypeImg__OlpoP"}},902:function(t,e){"use strict";e.Z={searchBar:"Mui_searchBar__Sr4hS",selectFormCtn:"Mui_selectFormCtn__YZJJV"}}}]);
//# sourceMappingURL=289.e1006a34.chunk.js.map