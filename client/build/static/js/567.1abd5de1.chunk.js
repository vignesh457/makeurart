(self.webpackChunkartgallery=self.webpackChunkartgallery||[]).push([[567],{2585:function(r,e){e.X=["Pencil Sketch","Realistic Pencil Art","Charcoal Drawing","Portrait Drawing","Illustration","Line Art","Black and White Art","Surreal Pencil Art","Abstract Pencil Drawing","Doodle Art","Digital Art","Digital Painting","Vector Art","Digital Illustration","Concept Art","Anime and Manga Art","Pixel Art","Digital Portraits","Fantasy Art","Sci-Fi Art","Abstract Digital Art","Handmade Crafts","DIY Crafts","Paper Craft","Origami","Fabric Art","Pottery","Metal Craft","Beadwork","Recycled Art","Mixed Media Art","Collage Art","Glass Art","Sculpture","Calligraphy","Printmaking","Mosaic Art","3D Art","Realism","Abstract","Impressionism","Expressionism","Cubism","Modern Art","Traditional Art","Contemporary Art","Nature Art","Wildlife Art","Portrait Art","Landscape Art","Mythology Art","Acrylic Painting","Oil Painting","Watercolor Painting","Ink Art","Pastel Art","Colored Pencil Art","Digital Collage","Mixed Media Collage","Woodworking","Wood Carving","Leathercraft","Candle Making","Home Decor Crafts","Polymer Clay Crafts","Basket Weaving","Knitting","Crocheting","Realistic Oil Portraits","Traditional Illustration","Still Life Painting","Encaustic Art","Traditional Printmaking","Woodcut Prints","Etching Art","Marble Sculpting","Stone Carving","Clay Sculpture","Traditional Portrait Drawing","Figure Drawing","Realism in Art","Hyperrealism","Impressionist Painting","Abstract Expressionism","Symbolist Art","Surrealist Art","Miniature Painting","Creative drawing","Innovative Drawing"]},5331:function(r,e,t){"use strict";t.d(e,{Z:function(){return p}});t(2791);var n="Footer_main__EZptJ",a="Footer_copyright__PkAMC",i="Footer_socialIcons__Cdkp4",s=t(1880),o=t(3854),l=t(4668),c=t(5758),u=t(6310),d=t(218),g=t(184);var p=function(){return(0,g.jsxs)("div",{className:n,children:[(0,g.jsxs)("ul",{className:i,children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"https://www.youtube.com/channel/UCJmYjq1g5jf_JoxyDHTgW-w",rel:"noreferrer",target:"_blank",children:(0,g.jsx)(o.Z,{fontSize:"large"})})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"https://twitter.com/Vignesh121_",rel:"noreferrer",target:"_blank",children:(0,g.jsx)(l.Z,{fontSize:"large"})})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"https://www.instagram.com/iam_vignesh_7/",rel:"noreferrer",target:"_blank",children:(0,g.jsx)(s.Z,{fontSize:"large"})})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"https://github.com/vignesh457/",rel:"noreferrer",target:"_blank",children:(0,g.jsx)(c.Z,{fontSize:"large"})})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202/",rel:"noreferrer",target:"_blank",children:(0,g.jsx)(u.Z,{fontSize:"large"})})})]}),(0,g.jsxs)("p",{className:a,children:[(0,g.jsx)(d.Z,{fontSize:"small"})," ",(new Date).getFullYear()," ",(0,g.jsx)("a",{href:"https://portfolio-vignesh.netlify.app/",children:"Vignesh"})," | All Rights Reserved"]})]})}},4742:function(r,e,t){"use strict";var n=t(4165),a=t(5861),i=(t(2791),t(9434)),s=t(9002),o=t(184),l={padding:"8px 15px",fontSize:"16px",background:"#CC2533",border:"none",borderRadius:"5px",color:"white",cursor:"pointer"};e.Z=function(){var r=(0,i.I0)(),e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:!1===e.sent.success?(console.log("Logout failed : ",t),r((0,s.br)({type:"error",message:"Logout failed"}))):(r((0,s.br)({type:"success",message:"Successfully Logged out"})),r((0,s.l7)()));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)("button",{style:l,onClick:e,children:"Logout"})}},7835:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var n=t(2791),a=t(1326),i={main:"Navbar_main__qE141",logoCtn:"Navbar_logoCtn__teeCn",searchCtn:"Navbar_searchCtn__KijMT",sortCtn:"Navbar_sortCtn__DRTIy",logCtn:"Navbar_logCtn__8Rj+T"},s=t(7689),o=t(184),l={padding:"8px 15px",fontSize:"16px",background:"#1976D2",border:"none",borderRadius:"5px",color:"white",cursor:"pointer",margin:"0px 14px"};var c=function(){var r=(0,s.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{style:l,onClick:function(){r("/login")},children:"Log in"})})},u=t(1413),d=t(5527),g=t(5377),p=t(7391),A=t(902),h=t(2585).X,x=function(r){return(0,o.jsx)(d.Z,(0,u.Z)({style:{backgroundColor:"rgba(34, 34, 34, 0.9)",backdropFilter:"blur(10px)",color:"rgb(186, 186, 186)",marginTop:"10px"}},r))};var b=function(){var r=(0,s.s0)();return(0,o.jsx)(g.Z,{className:A.Z.searchBar,options:h,PaperComponent:x,popupIcon:(0,o.jsx)(o.Fragment,{}),autoHighlight:!0,onChange:function(e,t){r("/posts/".concat(t))},sx:{".css-1tzgnuz-MuiInputBase-root-MuiFilledInput-root:after":{border:"none"}},renderInput:function(r){return(0,o.jsx)(p.Z,(0,u.Z)((0,u.Z)({className:A.Z.textfield},r),{},{label:"Search...",variant:"filled",InputLabelProps:{style:{color:"#848484",fontSize:"18px"}},InputProps:(0,u.Z)((0,u.Z)({},r.InputProps),{},{style:{color:"rgb(186, 186, 186)"}})}))}})},m=t(9439),f=t(4294),j=t(7800),v=t(9891),w=t(2222),C=t(8096),D=t(4925),S=t(8406);var y=function(){var r=(0,n.useState)(""),e=(0,m.Z)(r,2),t=e[0],a=e[1],i=(0,s.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(C.Z,{className:A.Z.selectFormCtn,children:[(0,o.jsx)(D.Z,{variant:"filled",id:"dropdown-label",focused:!0,style:{color:"#848484",fontSize:"18px"},children:"Category"}),(0,o.jsxs)(S.Z,{labelId:"dropdown-label",id:"dropdown",value:t,onChange:function(r){a(r.target.value)},sx:{color:"rgb(186, 186, 186)",paddingTop:"8px",fontSize:"17px"},MenuProps:{sx:{".css-6hp17o-MuiList-root-MuiMenu-list":{backgroundColor:"rgba(34, 34, 34, 1)",color:"rgb(186, 186, 186)"}}},children:[(0,o.jsx)(v.Z,{onClick:function(){return i("/posts/Drawing")},value:"option1",children:"Drawings(physical)"}),(0,o.jsx)(v.Z,{onClick:function(){return i("/posts/DigitalArt")},value:"option2",children:"Digital Arts"}),(0,o.jsx)(v.Z,{onClick:function(){return i("/posts/Craft")},value:"option3",children:"Crafts"})]})]})})},P=t(9434),k=(t(7087),t(9713),{height:"50px",borderRadius:"50%",border:"2px solid #818181",marginRight:"7px",transition:"all 0.5s ease-in-out",opacity:"1"}),B={height:"50px",width:"50px",borderRadius:"50%",border:"2px solid #818181",marginRight:"7px",background:"black",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",opacity:"0"};var H=function(){var r=(0,s.s0)(),e=(0,P.v9)((function(r){return r.user})).currentUser,t=(0,n.useState)(!1),a=(0,m.Z)(t,2),i=a[0],l=a[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("img",{style:i?k:B,onClick:function(){return r("/user/".concat(e._id))},onLoad:function(){return l(!0)},loading:"lazy",src:e.avatar,alt:e.bio})})},M=t(4742);var Z=function(){var r=n.useState(null),e=(0,m.Z)(r,2),t=e[0],a=e[1],i=(0,P.v9)((function(r){return r.user})).currentUser,l=(0,s.s0)(),u=Boolean(t),d=function(){a(null)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Z,{id:"basic-button","aria-controls":u?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":u?"true":void 0,onClick:function(r){a(r.currentTarget)},children:(0,o.jsx)(w.Z,{fontSize:"large",sx:{color:"#464646"}})}),(0,o.jsxs)(j.Z,{id:"basic-menu",anchorEl:t,open:u,onClose:d,sx:{".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":{backgroundColor:"#212121",border:"1px solid #3b3b3b",width:"250px",marginTop:"10px",padding:"20px 10px"}},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,o.jsxs)(v.Z,{onClick:d,children:[" ",(0,o.jsx)(y,{})," "]}),(0,o.jsx)(v.Z,{onClick:d,children:i?"creator"===i.usertype?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H,{}),(0,o.jsx)("h3",{onClick:function(){return l("/user/".concat(i._id))},children:" My profile"})]}):(0,o.jsx)(M.Z,{}):(0,o.jsx)(c,{})})]})]})},z=t(4805),q=n.memo((function(){var r=(0,z.useMediaQuery)({maxWidth:600}),e=(0,P.v9)((function(r){return r.user})).currentUser,t=(0,s.s0)();return(0,o.jsxs)("div",{className:i.main,children:[(0,o.jsx)("div",{className:i.logoCtn,onClick:function(){return t("/")},children:(0,o.jsx)("img",{loading:"lazy",src:"data:image/png;base64,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",alt:"logo"})}),(0,o.jsx)("div",{className:i.searchCtn,children:(0,o.jsx)(b,{})}),r?(0,o.jsx)("div",{className:i.menuCtn,children:(0,o.jsx)(Z,{})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:i.sortCtn,children:(0,o.jsx)(y,{})}),(0,o.jsx)("div",{className:i.logCtn,children:e?"creator"===e.usertype?(0,o.jsx)(H,{}):(0,o.jsx)(M.Z,{}):(0,o.jsx)(c,{})})]})]})})),Q=t(5331),N=n.memo((function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:a.Z.main,children:[(0,o.jsx)(q,{}),(0,o.jsx)(s.j3,{})]}),(0,o.jsx)(Q.Z,{})]})}))},902:function(r,e){"use strict";e.Z={searchBar:"Mui_searchBar__Sr4hS",selectFormCtn:"Mui_selectFormCtn__YZJJV"}},1326:function(r,e){"use strict";e.Z={main:"Home_main__bcJwW",bannerCtn:"Home_bannerCtn__EC3-p",bannerHeading:"Home_bannerHeading__h4BHx",bannerSubHeading:"Home_bannerSubHeading__bdItH",headerHome:"Home_headerHome__panUy",artistCtn:"Home_artistCtn__huwac"}}}]);
//# sourceMappingURL=567.1abd5de1.chunk.js.map