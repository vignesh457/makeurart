"use strict";(self.webpackChunkartgallery=self.webpackChunkartgallery||[]).push([[430],{3989:function(e,n,s){s.r(n),s.d(n,{default:function(){return N}});var r=s(4165),t=s(5861),a=s(9439),o=s(2791),c="HomeGallery_main__XiAbc",i="HomeGallery_postImgCtn__6i8Oi",l="HomeGallery_isVisible__UPnHP",u="HomeGallery_isLoading__4Qm4P",d="HomeGallery_postImgLayer__scqRB",m="HomeGallery_postImgLayerTextCtn__0r2Zs",p="HomeGallery_noPostHeading__ldWJB",_="HomeGallery_loader__ek2z2",f=s(7689),h=(s(9713),s(9434)),y=s(9002),x=s(184),g=o.memo((function(e){var n=e.postPic,s=e.postDesc,r=e.postId,t=(0,o.useState)(!1),c=(0,a.Z)(t,2),i=c[0],d=c[1],m=(0,f.s0)();return(0,x.jsx)("img",{className:i?l:u,onClick:function(){return m("/post/".concat(r))},onLoad:function(){return d(!0)},loading:"lazy",src:n,alt:s})})),v=s(4805),j=o.memo((function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),s=n[0],l=n[1],u=(0,o.useState)(null),j=(0,a.Z)(u,2),N=j[0],k=j[1],H=(0,f.UO)(),b=(0,h.I0)(),G=(0,f.s0)(),w=(0,v.useMediaQuery)({maxWidth:650}),P=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b((0,y.N1)(!0)),e.next=4,fetch("/api/post/category/".concat(H.id));case 4:return n=e.sent,e.next=7,n.json();case 7:if(!1!==(s=e.sent).success){e.next=10;break}throw new Error(s.message);case 10:l(s),b((0,y.N1)(!1)),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(0),b((0,y.N1)(!1)),b((0,y.br)({type:"warning",message:"Sorry, unable to load"})),G("/"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){P()}),[H.id]),(0,x.jsxs)("div",{className:c,children:[s.map((function(e){return(0,x.jsxs)("div",{onMouseOver:function(){return k(e._id)},onMouseLeave:function(){return k(null)},className:i,children:[!w&&N==e._id&&(0,x.jsx)("div",{className:d,onClick:function(){return G("/post/".concat(e._id))},children:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("h3",{children:e.artBy}),(0,x.jsx)("p",{children:e.description})]})}),(0,x.jsx)(g,{postPic:e.postPic,postDesc:e.description,postId:e._id})]},e._id)})),0===s.length&&(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("h1",{className:p,children:[(0,x.jsx)("span",{className:_})," No search results"]})})]})})),N=j}}]);
//# sourceMappingURL=430.794bc8ff.chunk.js.map