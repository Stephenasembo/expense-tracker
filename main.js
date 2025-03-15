(()=>{"use strict";var e={159:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([e.id,"",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var u=e[c],d=o.base?u[0]+o.base:u[0],l=i[d]||0,s="".concat(d," ").concat(l);i[d]=l+1;var p=n(s),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:s,updater:m,references:1})}a.push(s)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),i=n(825),a=n.n(i),c=n(659),u=n.n(c),d=n(56),l=n.n(d),s=n(540),p=n.n(s),f=n(113),m=n.n(f),v=n(159),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=u().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),r()(v.A,y),v.A&&v.A.locals&&v.A.locals;const g=document.querySelector("#container"),E=document.querySelector("#expenseDiv"),h=document.querySelector("#addExpenseBtn"),x=document.querySelector("#inputDialog"),b=document.querySelector("#confirm"),S=document.querySelector("#close"),q={categoryInput:document.querySelector("#category"),amountInput:document.querySelector("#amount"),dateInput:document.querySelector("#date"),descriptionInput:document.querySelector("#description"),confirmBtn:b,closeBtn:S},C={container:g,expenseDiv:E,addExpenseBtn:h,inputDialog:x};function V(){return{editDialog:document.querySelector("#editDialog"),categoryEdit:document.querySelector("#categoryEdit"),amountEdit:document.querySelector("#amountEdit"),dateEdit:document.querySelector("#dateEdit"),descriptionEdit:document.querySelector("#descriptionEdit"),confirmEditBtn:document.querySelector("#confirmEdit"),cancelEditBtn:document.querySelector("#closeEdit")}}let D,I=[];function A(e){return JSON.parse(localStorage.getItem(e))}function L(){localStorage.setItem("userExpenses",JSON.stringify(I))}function M(e,t){I=A("userExpenses"),null===I&&(I=[]),localStorage.setItem(e,JSON.stringify(t)),I.push(e),L()}function k(e){I=A("userExpenses"),localStorage.removeItem(e);for(let t=0;t<I.length;t+=1)I[t]===e&&I.splice(t,1);L()}function w(e){const t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),a=document.createElement("button");a.textContent="Delete Expense";const c=`delete${e.categoryValue}`;a.setAttribute("id",c),a.classList.add("deleteExpense");const u=document.createElement("button");u.textContent="Edit Expense";const d=`edit${e.categoryValue}`;u.setAttribute("id",d),u.classList.add("editExpense"),i.appendChild(u),i.appendChild(a),n.textContent=e.categoryValue,o.textContent=e.amountValue,r.textContent=e.dateValue,t.appendChild(i),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.classList.add(e.categoryValue),C.expenseDiv.appendChild(t)}function B(){C.expenseDiv.innerHTML="";const e=A("userExpenses");if(null!==e)for(let t=0;t<e.length;t+=1)w(A(e[t]))}function T(e){let t=e.target.id;[,t]=t.split("delete"),k(t),function(e){const t=`.${e}`,n=document.querySelector(t);C.expenseDiv.removeChild(n)}(t),L()}function O(e){let t;switch(e.target.id){case"confirmEdit":t=function(e){const t=e();return{categoryValue:t.categoryEdit.value,amountValue:t.amountEdit.value,dateValue:t.dateEdit.value,descriptionValue:t.descriptionEdit.value}}(V),console.log(t),n=t,k(D),M(n.categoryValue,n),B();break;case"closeEdit":!function(e){e.preventDefault(),document.querySelector("#editDialog").close()}(e);break;default:console.log("failed")}var n}function $(e){D=e.target.id,[,D]=D.split("edit"),function(e){const t=document.createElement("div");t.innerHTML=`\n  <dialog id="editDialog">\n    <form method="dialog">\n      <div>\n        <label for="categoryEdit">Enter the new category for your expense: </label>\n        <input type="text" name="category" id="categoryEdit" value = '${e.categoryValue}'>\n      </div>\n      <div>\n        <label for="amountEdit">Enter the amount spent: </label>\n        <input type="number" step="0.1" min="0.00" id="amountEdit" value = '${e.amountValue}'>\n      </div>\n      <div>\n        <label for="dateEdit">Enter the date for your expenditure: </label>\n        <input type="date" id="dateEdit" value = '${e.dateValue}'>\n      </div>\n      <div>\n        <label for="descriptionEdit">Enter additional description: </label>\n        <textarea name="description" id="descriptionEdit">${e.descriptionValue}\n        </textarea>\n      </div>\n      <div>\n        <button id="confirmEdit">Confirm</button>\n        <button id="closeEdit">Close</button>\n      </div>\n    </form>\n  </dialog>`,C.container.appendChild(t),document.querySelector("#editDialog").showModal()}(A(D)),V().editDialog.addEventListener("click",O)}C.addExpenseBtn.addEventListener("click",(function(){C.inputDialog.show()})),q.closeBtn.addEventListener("click",(function(e){e.preventDefault(),C.inputDialog.close()})),B(),function(){let e=document.querySelectorAll(".deleteExpense");e=Array.from(e),e.forEach((e=>{e.addEventListener("click",T)}))}(),function(){let e=document.querySelectorAll(".editExpense");e=Array.from(e),e.forEach((e=>{e.addEventListener("click",$)}))}();const N={};q.confirmBtn.addEventListener("submit",(function(e){const t={categoryValue:q.categoryInput.value,amountValue:q.amountInput.value,dateValue:q.dateInput.value,descriptionValue:q.descriptionInput.value};Object.assign(N,t),function(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)"description"===t[n]&&"confirmBtn"===t[n]&&"closeBtn"===t[n]||!1===e[t[n]].validity.valueMissing&&console.log("no value provided")}(q),C.inputDialog.close(),function(e){M(e.categoryValue,e),w(e);const t=`#delete${e.categoryValue}`;document.querySelector(t).addEventListener("click",T);const n=`#edit${e.categoryValue}`;document.querySelector(n).addEventListener("click",$),L()}(N)}))})();