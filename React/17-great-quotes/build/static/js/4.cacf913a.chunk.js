(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{44:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},45:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},46:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},47:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(37),r=c(44),m=c.n(r),j=c(35),i=c(36),d=c(14),u=c(45),l=c.n(u),b=c(1),x=function(e){var t=Object(n.useRef)(),c=Object(j.a)(i.a),s=c.sendRequest,o=c.status,a=c.error,r=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||r()}),[o,a,r]);var m=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:m,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:m,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(46),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(47),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],r=Object(s.j)().quoteId,u=Object(j.a)(i.c),l=u.sendRequest,O=u.status,h=u.data;Object(n.useEffect)((function(){l(r)}),[r,l]);var f,p=Object(n.useCallback)((function(){l(r)}),[l,r]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===O&&h&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:m.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:r,onAdded:p}),f]})},C=c(48),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(j.a)(i.e,!0),a=c.sendRequest,r=c.status,m=c.data,u=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===r?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):u?Object(b.jsx)("div",{className:"centered",children:u}):m.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{text:m.text,author:m.author}),Object(b.jsx)(s.c,{path:e.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.cacf913a.chunk.js.map