"use strict";(self.webpackChunkkapusta=self.webpackChunkkapusta||[]).push([[653],{3986:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(885),i=n(2791),r=n(9434),s=n(7689),c=n(9513),o=n.n(c),l=n(2426),h=n.n(l),d=n(2521),x=n(3329);function u(e){var t=e.width,n=e.height;return(0,x.jsxs)("svg",{viewBox:"0 0 20 20",width:t,height:n,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,x.jsx)("path",{d:"M17.475 2.067h-1.312v-.321a.586.586 0 1 0-1.171 0v.32h-1.617v-.32a.586.586 0 0 0-1.172 0v.32h-1.617v-.32a.586.586 0 1 0-1.172 0v.32H7.797v-.32a.586.586 0 0 0-1.172 0v.32H5.008v-.32a.586.586 0 0 0-1.171 0v.32H2.525A2.527 2.527 0 0 0 0 4.592v11.724a2.527 2.527 0 0 0 2.525 2.525h14.95A2.527 2.527 0 0 0 20 16.316V4.59a2.527 2.527 0 0 0-2.525-2.524Zm1.353 14.248c0 .746-.607 1.353-1.353 1.353H2.525a1.354 1.354 0 0 1-1.353-1.352V6.732h17.656v9.584Zm0-10.755H1.172v-.969c0-.745.607-1.352 1.353-1.352h1.312v.226a.586.586 0 0 0 1.171 0V3.24h1.617v.226a.586.586 0 0 0 1.172 0V3.24h1.617v.226a.586.586 0 0 0 1.172 0V3.24h1.617v.226a.586.586 0 0 0 1.172 0V3.24h1.617v.226a.586.586 0 1 0 1.171 0V3.24h1.312c.746 0 1.353.607 1.353 1.352v.97Z",fill:"#52555F"}),(0,x.jsx)("path",{d:"M6.532 7.982H4.22a.586.586 0 0 0-.586.586v2.392c0 .323.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586Zm-.586 2.392h-1.14v-1.22h1.14v1.22ZM11.156 7.982H8.844a.586.586 0 0 0-.586.586v2.392c0 .323.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586Zm-.586 2.392H9.43v-1.22h1.14v1.22ZM15.78 7.982h-2.312a.586.586 0 0 0-.586.586v2.392c0 .323.262.586.586.586h2.312a.586.586 0 0 0 .586-.586V8.568a.586.586 0 0 0-.586-.586Zm-.586 2.392h-1.14v-1.22h1.14v1.22ZM6.532 12.526H4.22a.586.586 0 0 0-.586.586v2.392c0 .323.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586Zm-.586 2.392h-1.14v-1.22h1.14v1.22ZM11.156 12.526H8.844a.586.586 0 0 0-.586.586v2.392c0 .323.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586Zm-.586 2.392H9.43v-1.22h1.14v1.22ZM15.78 12.526h-2.312a.586.586 0 0 0-.586.586v2.392c0 .323.262.586.586.586h2.312a.586.586 0 0 0 .586-.586v-2.392a.586.586 0 0 0-.586-.586Zm-.586 2.392h-1.14v-1.22h1.14v1.22Z",fill:"#52555F"})]})}var v=n(985),m=n(7880),_="Calendar_btn__ucF95",p="Calendar_btnReport__ctcCg",f="Calendar_reportCalendar__zGrK+";function j(e){var t=e.dateFormat,n=void 0===t?"MM.dd.yyyy":t,c=e.showMonthYearPicker,l=(0,r.I0)(),j=(0,s.TH)().pathname,b=(0,i.useState)(new Date),g=(0,a.Z)(b,2),w=g[0],y=g[1];(0,i.useEffect)((function(){l((0,d.As)(h()(new Date).format("MM/DD/yyyy")))}),[l]);var T="/"===j||"/expenses"===j||"/income"===j,Z=function(e){var t=h()(e).format("MM/DD/yyyy");y(e),l((0,d.As)(t))},C=(0,i.forwardRef)((function(e,t){var n=e.value,a=e.onClick;return(0,x.jsxs)("button",{className:_,onClick:a,ref:t,children:[(0,x.jsx)(u,{width:"20",height:"18"}),n]})})),N=(0,i.forwardRef)((function(e,t){var n=e.value,a=e.onClick;return(0,x.jsx)("button",{className:p,onClick:a,ref:t,children:n})}));return(0,x.jsxs)(x.Fragment,{children:[T&&(0,x.jsx)(o(),{selected:w,onChange:Z,customInput:(0,x.jsx)(C,{}),dateFormat:n,showMonthYearPicker:c,maxDate:new Date}),"/report"===j&&(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)(v.Z,{width:"7px",height:"10px",onClick:function(){var e=new Date(w);e.setMonth(e.getMonth()-1),Z(e)}}),(0,x.jsx)("div",{children:(0,x.jsx)(o(),{selected:w,onChange:Z,customInput:(0,x.jsx)(N,{}),dateFormat:n,showMonthYearPicker:c,maxDate:new Date})}),(0,x.jsx)(m.Z,{width:"7px",height:"10px",onClick:function(){var e=new Date(w);e.setMonth(e.getMonth()+1),Z(e)}})]})]})}},4155:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(9434),i=n(9195),r=n(5017),s=n(106),c=n(9258),o=n(724),l=n(5193),h=n(3329),d=(0,o.ZP)(c.Z)({"& div":{width:"140px",height:"44px",background:"#F6F7FB",border:"2px solid var(--second-border-color)",borderRadius:"22px 0px 0px 22px",borderRight:"none"},"& div fieldset":{border:"1px solid transparent"},"& input":{padding:"10px 50px 12px 12px",fontWeight:"700",fontSize:"12px",lineHeight:"1.17",letterSpacing:"0.02em",textTransform:"initial",textAlign:"right",color:"var(--second-text-color)",background:"transparent",borderRadius:"30px"},"& input::placeholder":{color:"var(--second-text-color)",opacity:1},"& p":{margin:"4px 0px",textTransform:"initial"}}),x=(0,o.ZP)(c.Z)({"& div":{width:"125px",height:"44px",background:"#F6F7FB",border:"2px solid #FFFFFF",borderRadius:"16px"},"& div fieldset":{border:"1px solid transparent"},"& input":{padding:"12px 50px 12px 12px",fontWeight:"700",fontSize:"12px",lineHeight:"1.14",letterSpacing:"0.02em",textTransform:"initial",textAlign:"right",color:"var(--second-text-color)",background:"transparent",borderRadius:"30px"},"& input::placeholder":{color:"var(--second-text-color)",opacity:1},"& p":{margin:"4px 0px",textTransform:"initial"}});function u(e){var t=e.name,n=e.control,a=e.label,r=e.required,s=(0,l.Z)("(max-width:767.98px)"),c=(0,l.Z)("(min-width:768px)");return(0,h.jsx)(i.Qr,{name:t,control:n,rules:{required:r},render:function(e){var t=e.field,n=t.onChange,i=t.value,r=e.fieldState.error;return(0,h.jsxs)(h.Fragment,{children:[s&&(0,h.jsx)(d,{type:"number",variant:"outlined",placeholder:a,value:i,onChange:n,error:!!r,helperText:r?r.message:null}),c&&(0,h.jsx)(x,{type:"number",variant:"outlined",placeholder:a,value:i,onChange:n,error:!!r,helperText:r?r.message:null})]})}})}var v=n(7810),m=n(6053),_="UAH_overlay__VCIln";function p(e){var t=e.width,n=e.height;return(0,h.jsx)("div",{className:_,children:(0,h.jsx)("svg",{viewBox:"0 0 25 10",width:t,height:n,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M5.676.469h1.752v5.636c0 .657-.14 1.21-.422 1.659-.277.449-.662.787-1.154 1.013-.488.227-1.05.34-1.687.34s-1.204-.113-1.7-.34a2.639 2.639 0 0 1-1.16-1.013C1.028 7.314.89 6.762.89 6.105V.47h1.758v5.636c0 .383.06.696.182.938.12.242.295.42.521.533.23.113.502.17.815.17.32 0 .591-.057.814-.17.227-.113.398-.29.516-.533.12-.242.181-.555.181-.938V.47Zm6.78 1.459L10.134 9h-1.87l3.17-8.531h1.19l-.17 1.459ZM14.382 9l-2.326-7.072-.188-1.46h1.201L16.258 9h-1.875Zm-.105-3.176v1.377H9.772V5.824h4.506Zm8.7-1.88v1.37h-4.453v-1.37h4.454ZM19.047.468V9h-1.758V.469h1.758Zm5.185 0V9H22.48V.469h1.752Z",fill:"#000"})})})}var f="FormAddBalance_form__kYH9U",j="FormAddBalance_overlay__nCetM",b="FormAddBalance_inpOverlay__eulg2";function g(){var e=(0,a.I0)(),t=(0,a.v9)(s.sb),n=(0,i.cI)({defaultValues:{newBalance:""}}),c=n.control,o=n.handleSubmit,l=n.reset;if(void 0!==t){return(0,h.jsxs)("form",{className:f,onSubmit:o((function(t){e((0,r.qz)(t)),l()})),children:[(0,h.jsx)(m.Z,{text:"Balance",textClass:"textHomeBalance"}),(0,h.jsxs)("div",{className:j,children:[(0,h.jsxs)("div",{className:b,children:[(0,h.jsx)(u,{name:"newBalance",control:c,label:t.toString(),required:!0}),(0,h.jsx)(p,{width:"26px",height:"24px"})]}),(0,h.jsx)(v.Z,{text:"Confirm",btnClass:"btnConfirm"})]})]})}}},754:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(9434),i=n(106),r="SummaryTable_scrollTableBody__G4yDi",s="SummaryTable_scrollTable__+2Kx0",c="SummaryTable_tableThead__jmP73",o="SummaryTable_tableBottom__5rl4u",l="SummaryTable_table__kQJKt",h="SummaryTable_item__TfkbW",d="SummaryTable_tbody__CzA1-",x="SummaryTable_thead__QOkcJ",u="SummaryTable_th__3+Uhq",v="SummaryTable_td__YkkB-",m=n(3329);function _(){var e=(0,a.v9)(i.F8);if(void 0!==e)return(0,m.jsxs)("div",{className:s,children:[(0,m.jsx)("table",{className:c,children:(0,m.jsx)("thead",{className:x,children:(0,m.jsx)("tr",{children:(0,m.jsx)("th",{className:u,children:"Summary"})})})}),(0,m.jsx)("div",{className:r,children:(0,m.jsx)("table",{className:l,children:(0,m.jsx)("tbody",{className:d,children:e.map((function(e){var t=e.month,n=e.sum;return(0,m.jsxs)("tr",{className:h,children:[(0,m.jsx)("td",{className:v,children:t}),(0,m.jsx)("td",{className:v,children:n})]},t)}))})})}),(0,m.jsx)("table",{className:o,children:(0,m.jsx)("thead",{className:x,children:(0,m.jsx)("tr",{children:(0,m.jsx)("th",{className:u})})})})]})}},3684:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(2982),i=n(885),r=n(2791),s=n(9434),c=n(7689),o=n(5017),l=n(106),h=n(9543),d=n(6053),x=n(7810),u=n(5485),v=n(5384),m={list:"TransactionList_list__yip0Z",listIncome:"TransactionList_listIncome__0qYvI",listExpenses:"TransactionList_listExpenses__A8Wri",item:"TransactionList_item__brRf5",title:"TransactionList_title__i2f1o",priceExp:"TransactionList_priceExp__BiDid",priceInc:"TransactionList_priceInc__V4AQv",date:"TransactionList_date__CYCTV",category:"TransactionList_category__z8BIk",overlayBtns:"TransactionList_overlayBtns__AGOiA"},_=n(3329);function p(e){var t=e.listClass,n=void 0===t?"list":t,p=(0,s.I0)(),f=(0,c.TH)().pathname,j=(0,r.useRef)(!1),b=(0,r.useState)(!1),g=(0,i.Z)(b,2),w=g[0],y=g[1],T=(0,r.useState)(""),Z=(0,i.Z)(T,2),C=Z[0],N=Z[1],k=(0,s.v9)(l.f1),F=(0,s.v9)(l.Ux),M=(0,s.v9)(l.cS);if((0,r.useEffect)((function(){j.current&&("/income"===f&&p((0,o.dc)({reqDate:F})),"/expenses"===f&&p((0,o.Y2)({reqDate:F})),"/"===f&&p((0,o.b5)({reqDate:F}))),j.current=!0}),[M]),void 0!==k){var D=(0,a.Z)(k).reverse(),B=function(e){var t=e.currentTarget.id;document.body.classList.add("no-scroll"),y(!0),N(t)},S=function(){y(!1)},I=D.map((function(e){var t=e._id,n=e.transitionDescription,a=e.transitionValue,i=e.transitionDate,r=e.transitionCategory;return(0,_.jsxs)("li",{className:m.item,children:[(0,_.jsx)("p",{className:m.title,children:n}),(0,_.jsxs)("p",{className:"Salary"===r||"Add.Income"===r?m.priceInc:m.priceExp,children:["Salary"===r||"Add.Income"===r?"":"-",a," UAH"]}),(0,_.jsx)(u.Z,{iconClass:"iconProductList",width:"20",height:"20",id:t,onClick:B}),(0,_.jsx)("p",{className:m.date,children:i}),(0,_.jsx)("p",{className:m.category,children:r})]},t)}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{className:m[n],children:I}),w&&(0,_.jsxs)(h.Z,{onClose:S,children:[(0,_.jsx)(v.Z,{width:"12",height:"12",iconClass:"iconModal",onClick:S}),(0,_.jsx)(d.Z,{text:"Are you sure?",textClass:"textModal"}),(0,_.jsxs)("div",{className:m.overlayBtns,children:[(0,_.jsx)(x.Z,{text:"Yes",onClick:function(){p((0,o.Ks)(C)),y(!1)}}),(0,_.jsx)(x.Z,{text:"No",onClick:S})]})]})]})}}},5468:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(2982),i=n(885),r=n(2791),s=n(9434),c=n(7689),o=n(5017),l=n(106),h=n(9543),d=n(6053),x=n(7810),u=n(5485),v=n(5384),m={table:"TransactionTable_table__yi+oG",item:"TransactionTable_item__1zkhI",tbody:"TransactionTable_tbody__CKbVl",thead:"TransactionTable_thead__1CruO",tr:"TransactionTable_tr__WtO6F",tbodyHome:"TransactionTable_tbodyHome__5Qugk",tbodyExpenses:"TransactionTable_tbodyExpenses__yD0Ev",tbodyIncome:"TransactionTable_tbodyIncome__zAiDx",th:"TransactionTable_th__dcKJF",overlayBtns:"TransactionTable_overlayBtns__5if5V",priceInc:"TransactionTable_priceInc__d6f8o",priceExp:"TransactionTable_priceExp__1K36l",icon:"TransactionTable_icon__Fsnmj"},_=n(3329);function p(e){var t=e.sectionClass,n=void 0===t?"tbody":t,p=(0,s.I0)(),f=(0,c.TH)().pathname,j=(0,r.useRef)(!1),b=(0,r.useState)(!1),g=(0,i.Z)(b,2),w=g[0],y=g[1],T=(0,r.useState)(""),Z=(0,i.Z)(T,2),C=Z[0],N=Z[1],k=(0,s.v9)(l.f1),F=(0,s.v9)(l.Ux),M=(0,s.v9)(l.cS);if((0,r.useEffect)((function(){j.current&&("/income"===f&&p((0,o.dc)({reqDate:F})),"/expenses"===f&&p((0,o.Y2)({reqDate:F})),"/"===f&&p((0,o.b5)({reqDate:F}))),j.current=!0}),[M]),void 0!==k){var D=(0,a.Z)(k).reverse(),B=function(e){var t=e.currentTarget.id;document.body.classList.add("no-scroll"),y(!0),N(t)},S=function(){y(!1)},I=D.map((function(e){var t=e._id,n=e.transitionDescription,a=e.transitionValue,i=e.transitionDate,r=e.transitionCategory;return(0,_.jsxs)("tr",{className:m.item,children:[(0,_.jsx)("td",{children:i}),(0,_.jsx)("td",{children:n}),(0,_.jsx)("td",{children:r}),(0,_.jsxs)("td",{className:"Salary"===r||"Add.Income"===r?m.priceInc:m.priceExp,children:["Salary"===r||"Add.Income"===r?"":"-",a," UAH"]}),(0,_.jsx)("td",{className:m.icon,children:(0,_.jsx)(u.Z,{iconClass:"iconTransactionTable",width:"18",height:"18",id:t,onClick:B})})]},t)}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("table",{className:m.table,children:[(0,_.jsx)("thead",{className:m.thead,children:(0,_.jsxs)("tr",{className:m.tr,children:[(0,_.jsx)("th",{className:m.th,children:"Date"}),(0,_.jsx)("th",{className:m.th,children:"Description"}),(0,_.jsx)("th",{className:m.th,children:"Category"}),(0,_.jsx)("th",{className:m.th,children:"Sum"}),(0,_.jsx)("th",{className:m.th})]})}),(0,_.jsx)("tbody",{className:m[n],children:I})]}),w&&(0,_.jsxs)(h.Z,{onClose:S,children:[(0,_.jsx)(v.Z,{width:"12",height:"12",iconClass:"iconModal",onClick:S}),(0,_.jsx)(d.Z,{text:"Are you sure?",textClass:"textModal"}),(0,_.jsxs)("div",{className:m.overlayBtns,children:[(0,_.jsx)(x.Z,{text:"Yes",onClick:function(){p((0,o.Ks)(C)),y(!1)}}),(0,_.jsx)(x.Z,{text:"No",onClick:S})]})]})]})}}},985:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(3329);function i(e){var t=e.width,n=e.height,i=e.onClick;return(0,a.jsx)("div",{onClick:i,children:(0,a.jsx)("svg",{width:t,height:n,viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M6 1 2 6l4 5",stroke:"#FF751D",strokeWidth:"2"})})})}},7880:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(3329);function i(e){var t=e.width,n=e.height,i=e.onClick;return(0,a.jsx)("div",{onClick:i,children:(0,a.jsx)("svg",{width:t,height:n,viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"m1 1 4 5-4 5",stroke:"#FF751D",strokeWidth:"2"})})})}},5485:function(e,t,n){n.d(t,{Z:function(){return r}});var a={iconProductList:"Delete_iconProductList__NQTXK",iconTransactionTable:"Delete_iconTransactionTable__XU4Nl",iconAccount:"Delete_iconAccount__RRjyD"},i=n(3329);function r(e){var t=e.id,n=e.iconClass,r=e.width,s=e.height,c=e.onClick;return(0,i.jsx)("div",{className:a[n],id:t,onClick:c,children:(0,i.jsx)("svg",{viewBox:"0 0 32 32",width:r,height:s,fill:"#52555F",children:(0,i.jsx)("path",{d:"M21 28c0.553 0 1-0.447 1-1v-14c0-0.553-0.447-1-1-1s-1 0.447-1 1v14c0 0.553 0.447 1 1 1zM11 28c0.552 0 1-0.447 1-1v-14c0-0.553-0.448-1-1-1s-1 0.447-1 1v14c0 0.553 0.448 1 1 1zM29 6h-4v-2c0-2.209-1.791-4-4-4h-10c-2.209 0-4 1.791-4 4v2h-4l-3 3c0 0.553 0.448 1 1 1h3v20c0 1.104 0.896 2 2 2h20c1.104 0 2-0.896 2-2v-20h3c0.553 0 1-0.447 1-1l-3-3zM10 4c0-1.104 0.896-2 2-2h8c1.104 0 2 0.896 2 2v2h-12v-2zM26 29c0 0.553-0.447 1-1 1h-18c-0.552 0-1-0.447-1-1v-19h20v19zM16 28c0.553 0 1-0.447 1-1v-14c0-0.553-0.447-1-1-1s-1 0.447-1 1v14c0 0.553 0.447 1 1 1z"})})})}},4757:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1087),i=n(3329);function r(e){var t=e.width,n=e.height;return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{viewBox:"0 0 32 32",width:t,height:n,fill:"#FF751D",children:(0,i.jsx)("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})})})}var s=n(6053),c={btn:"ButtonBack_btn__u-eN+",btnAccountPage:"ButtonBack_btnAccountPage__Ysecg"};function o(e){var t=e.btnClass,n=void 0===t?"btn":t,o=e.width,l=e.height,h=e.text,d=e.to;return(0,i.jsxs)(a.rU,{className:c[n],to:d,children:[(0,i.jsx)(r,{width:o,height:l}),(0,i.jsx)(s.Z,{text:h})]})}},3508:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1087),i=n(5193),r="ButtonsExpenInc_overlay__ypP2G",s="ButtonsExpenInc_btnExpenInc__FRLEg",c="ButtonsExpenInc_active__EEl6p",o=n(3329);function l(){var e=(0,i.Z)("(min-width: 768px)"),t=function(e){return e.isActive?"".concat(s," ").concat(c):s};return(0,o.jsxs)("div",{className:r,children:[e&&(0,o.jsx)(a.OL,{className:t,to:"/",children:"Timeline"}),(0,o.jsx)(a.OL,{className:t,to:"/expenses",children:"Expenses"}),(0,o.jsx)(a.OL,{className:t,to:"/income",children:"Income"})]})}},6502:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1087),i=n(6053),r=n(3329);function s(e){var t=e.width,n=e.height;return(0,r.jsx)("svg",{viewBox:"0 0 14 14",width:t,height:n,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 4.2h3V14H0V4.2ZM5.6 0h2.8v14H5.6V0Zm5.6 8H14v6h-2.8V8Z",fill:"#52555F"})})}var c="LinkReport_overlay__rJVu7";function o(){return(0,r.jsxs)(a.rU,{to:"/report",className:c,children:[(0,r.jsx)(i.Z,{text:"Reports",textClass:"textHomeReports"}),(0,r.jsx)(s,{width:"14",height:"14"})]})}}}]);
//# sourceMappingURL=653.2b035446.chunk.js.map