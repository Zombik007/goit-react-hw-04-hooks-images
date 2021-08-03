(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3dpIh",SearchForm:"Searchbar_SearchForm__1AAvV",SearchForm__button:"Searchbar_SearchForm__button__2q2r-",SearchForm__button_label:"Searchbar_SearchForm__button_label__1Ng-J",SearchForm__input:"Searchbar_SearchForm__input__3Rcgx"}},function(e,t,a){e.exports={loader__ellips:"Loader_loader__ellips__17Mq0",loader__ellips__dot:"Loader_loader__ellips__dot__1dtzF",reveal:"Loader_reveal__1oNKB",slide:"Loader_slide__2mYty"}},,,,function(e,t,a){e.exports={Lightbox__backdrop:"Modal_Lightbox__backdrop__1NpA6",Lightbox__content:"Modal_Lightbox__content__3yHpv"}},function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__OqIPy",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1HU6i"}},,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__OqIdx"}},,,function(e,t,a){e.exports={Button:"Button_Button__rZ6Ex"}},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=(a(21),a(2)),i=a(4),l=a(10),u=a.n(l),_=a(1),d=document.querySelector("#lightbox-root");function h(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){function e(e){"Escape"===e.code&&t()}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(o.createPortal)(Object(_.jsx)("div",{className:u.a.Lightbox__backdrop,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(_.jsx)("div",{className:u.a.Lightbox__content,children:a})}),d)}var b=a(5),m=a.n(b);function j(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),o=r[0],c=r[1];return Object(_.jsx)("header",{className:m.a.Searchbar,children:Object(_.jsxs)("form",{className:m.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),c("")):i.b.warning("You have not entered anything in the search bar, please enter a search term",{position:"top-center",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[Object(_.jsx)("button",{type:"submit",className:m.a.SearchForm__button,children:Object(_.jsx)("span",{className:m.a.SearchForm__button_label,children:"Search"})}),Object(_.jsx)("input",{className:m.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){c(e.currentTarget.value.toLowerCase())}})]})})}var g=a(12),p=a(13),O=a.n(p),f=a(11),x=a.n(f);function y(e){var t=e.image,a=e.modalContent,n=e.openModal,r=function(e){a(e.target.dataset.url,e.target.alt),n()};return Object(_.jsx)(_.Fragment,{children:t.map((function(e){var t=e.webformatURL,a=e.tags,n=e.id,o=e.largeImageURL;return Object(_.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(_.jsx)("img",{src:t,alt:a,className:x.a.ImageGalleryItem__image,"data-url":o,onClick:r})},n)}))})}var v=a(14),S=a(15),I=function(){function e(){Object(v.a)(this,e),this.searchQuery="",this.page=1}return Object(S.a)(e,[{key:"fetchImagesApi",value:function(){var e=this,t=new URLSearchParams({image_type:"photo",orientation:"horizontal",q:this.searchQuery,page:this.page,per_page:"12",key:"10446885-1251e891c865ea43d940edb73"}),a="".concat("https://pixabay.com","/api/?").concat(t);return fetch(a).then((function(e){return e.json()})).then((function(t){return console.log(e.page),t.hits}))}},{key:"changePage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}(),w=a(16),k=a.n(w),N=function(e){var t=e.onClick,a=e.children;return Object(_.jsx)("button",{type:"button",className:k.a.Button,onClick:t,children:a})},C=a(6),F=a.n(C),L=function(){return Object(_.jsxs)("div",{className:F.a.loader__ellips,children:[Object(_.jsx)("span",{className:F.a.loader__ellips__dot}),Object(_.jsx)("span",{className:F.a.loader__ellips__dot}),Object(_.jsx)("span",{className:F.a.loader__ellips__dot}),Object(_.jsx)("span",{className:F.a.loader__ellips__dot})]})},G=new I;function P(e){var t=e.imageName,a=e.modalContent,r=e.openModal,o=Object(n.useState)(null),c=Object(s.a)(o,2),l=c[0],u=c[1],d=Object(n.useState)(null),h=Object(s.a)(d,2),b=h[0],m=h[1],j=Object(n.useState)("idle"),p=Object(s.a)(j,2),f=p[0],x=p[1],v=Object(n.useState)(!1),S=Object(s.a)(v,2),I=S[0],w=S[1];Object(n.useEffect)((function(){t&&(G.resetPage(),w(!0),x("pending"),G.query=t,G.fetchImagesApi().then((function(e){if(0===e.length)return i.b.warning("Sorry for your request ".concat(t,", no results were found."),{position:"top-right",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),m("Sorry for your request ".concat(t,", no results were found.")),w(!0),void x("rejected");u(e),w(!0),x("resolved")})).catch((function(e){m(e),x("rejected")})))}),[t]);return"idle"===f?Object(_.jsx)("div",{style:{textAlign:"center",fontSize:"18px"},children:"Enter what picture you want to find"}):"pending"===f?(G.resetPage(),Object(_.jsx)("div",{style:{textAlign:"center"},children:Object(_.jsx)(L,{})})):"rejected"===f?(G.resetPage(),Object(_.jsx)("h2",{style:{textAlign:"center"},children:b})):"resolved"===f?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("ul",{className:O.a.ImageGallery,children:Object(_.jsx)(y,{image:l,openModal:r,modalContent:a})}),I?Object(_.jsx)(N,{onClick:function(){var e=document.documentElement.scrollHeight-141;G.changePage(),G.fetchImagesApi().then((function(t){u((function(e){return[].concat(Object(g.a)(e),Object(g.a)(t))})),w(!0),window.scrollTo({top:e,behavior:"smooth"})})).finally(w(!1))},children:"Load more"}):Object(_.jsx)(L,{})]}):void 0}a(23);function q(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(s.a)(o,2),l=c[0],u=c[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),m=b[0],g=b[1],p=Object(n.useState)(""),O=Object(s.a)(p,2),f=O[0],x=O[1],y=function(){u(!l)};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j,{onSubmit:function(e){r(e)}}),Object(_.jsx)(P,{imageName:a,openModal:y,modalContent:function(e,t){g(e),x(t)}}),l&&Object(_.jsx)(h,{onClose:y,children:Object(_.jsx)("img",{src:m,alt:f})}),Object(_.jsx)(i.a,{autoClose:3e3})]})}c.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(q,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c410d631.chunk.js.map