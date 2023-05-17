"use strict";var Zr=Object.create;var T=Object.defineProperty;var _r=Object.getOwnPropertyDescriptor;var Hr=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,Dr=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable;var fr=(r,e,t)=>e in r?T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,mr=(r,e)=>{for(var t in e||={})Z.call(e,t)&&fr(r,t,e[t]);if(q)for(var t of q(e))pr.call(e,t)&&fr(r,t,e[t]);return r};var br=(r,e)=>{var t={};for(var o in r)Z.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&q)for(var o of q(r))e.indexOf(o)<0&&pr.call(r,o)&&(t[o]=r[o]);return t};var Kr=(r,e)=>{for(var t in e)T(r,t,{get:e[t],enumerable:!0})},gr=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Hr(e))!Z.call(r,n)&&n!==t&&T(r,n,{get:()=>e[n],enumerable:!(o=_r(e,n))||o.enumerable});return r};var Qr=(r,e,t)=>(t=r!=null?Zr(Dr(r)):{},gr(e||!r||!r.__esModule?T(t,"default",{value:r,enumerable:!0}):t,r)),Yr=r=>gr(T({},"__esModule",{value:!0}),r);var Se={};Kr(Se,{SeparatorDemo:()=>Ce});module.exports=Yr(Se);var Br=Qr(require("react"));function C(){return C=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},C.apply(this,arguments)}var F=require("react");var P=require("react"),ie=require("react-dom");var f=require("react");var re=require("react");function ee(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function vr(...r){return e=>r.forEach(t=>ee(t,e))}var H=(0,f.forwardRef)((r,e)=>{let{children:t,...o}=r,n=f.Children.toArray(t),s=n.find(oe);if(s){let i=s.props.children,a=n.map(l=>l===s?f.Children.count(i)>1?f.Children.only(null):(0,f.isValidElement)(i)?i.props.children:null:l);return(0,f.createElement)(_,C({},o,{ref:e}),(0,f.isValidElement)(i)?(0,f.cloneElement)(i,void 0,a):null)}return(0,f.createElement)(_,C({},o,{ref:e}),t)});H.displayName="Slot";var _=(0,f.forwardRef)((r,e)=>{let{children:t,...o}=r;return(0,f.isValidElement)(t)?(0,f.cloneElement)(t,{...ne(o,t.props),ref:vr(e,t.ref)}):f.Children.count(t)>1?f.Children.only(null):null});_.displayName="SlotClone";var te=({children:r})=>(0,f.createElement)(f.Fragment,null,r);function oe(r){return(0,f.isValidElement)(r)&&r.type===te}function ne(r,e){let t={...e};for(let o in e){let n=r[o],s=e[o];/^on[A-Z]/.test(o)?n&&s?t[o]=(...a)=>{s(...a),n(...a)}:n&&(t[o]=n):o==="style"?t[o]={...n,...s}:o==="className"&&(t[o]=[n,s].filter(Boolean).join(" "))}return{...r,...t}}var ae=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],hr=ae.reduce((r,e)=>{let t=(0,P.forwardRef)((o,n)=>{let{asChild:s,...i}=o,a=s?H:e;return(0,P.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,P.createElement)(a,C({},i,{ref:n}))});return t.displayName=`Primitive.${e}`,{...r,[e]:t}},{});var D="horizontal",se=["horizontal","vertical"],xr=(0,F.forwardRef)((r,e)=>{let{decorative:t,orientation:o=D,...n}=r,s=yr(o)?o:D,a=t?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return(0,F.createElement)(hr.div,C({"data-orientation":s},a,n,{ref:e}))});xr.propTypes={orientation(r,e,t){let o=r[e],n=String(o);return o&&!yr(o)?new Error(le(n,t)):null}};function le(r,e){return`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${e}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${D}\`.`}function yr(r){return se.includes(r)}var K=xr;function wr(r){var e,t,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(t=wr(r[e]))&&(o&&(o+=" "),o+=t);else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function $r(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=wr(r))&&(o&&(o+=" "),o+=e);return o}function Cr(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=Sr(e))&&(o&&(o+=" "),o+=t);return o}function Sr(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=Sr(r[o]))&&(t&&(t+=" "),t+=e);return t}var Y="-";function Ir(r){var e=ue(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,n=o===void 0?{}:o;function s(a){var l=a.split(Y);return l[0]===""&&l.length!==1&&l.shift(),Rr(l,e)||de(a)}function i(a,l){var d=t[a]||[];return l&&n[a]?[].concat(d,n[a]):d}return{getClassGroupId:s,getConflictingClassGroupIds:i}}function Rr(r,e){if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),n=o?Rr(r.slice(1),o):void 0;if(n)return n;if(e.validators.length!==0){var s=r.join(Y);return e.validators.find(function(i){var a=i.validator;return a(s)})?.classGroupId}}var Ar=/^\[(.+)\]$/;function de(r){if(Ar.test(r)){var e=Ar.exec(r)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function ue(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},n=pe(Object.entries(r.classGroups),t);return n.forEach(function(s){var i=s[0],a=s[1];Q(a,o,i,e)}),o}function Q(r,e,t,o){r.forEach(function(n){if(typeof n=="string"){var s=n===""?e:Mr(e,n);s.classGroupId=t;return}if(typeof n=="function"){if(fe(n)){Q(n(o),e,t,o);return}e.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(function(i){var a=i[0],l=i[1];Q(l,Mr(e,a),t,o)})})}function Mr(r,e){var t=r;return e.split(Y).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function fe(r){return r.isThemeGetter}function pe(r,e){return e?r.map(function(t){var o=t[0],n=t[1],s=n.map(function(i){return typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(a){var l=a[0],d=a[1];return[e+l,d]})):i});return[o,s]}):r}function kr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function n(s,i){t.set(s,i),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(i){var a=t.get(i);if(a!==void 0)return a;if((a=o.get(i))!==void 0)return n(i,a),a},set:function(i,a){t.has(i)?t.set(i,a):n(i,a)}}}var rr="!";function Pr(r){var e=r.separator||":",t=e.length===1,o=e[0],n=e.length;return function(i){for(var a=[],l=0,d=0,m,u=0;u<i.length;u++){var b=i[u];if(l===0){if(b===o&&(t||i.slice(u,u+n)===e)){a.push(i.slice(d,u)),d=u+n;continue}if(b==="/"){m=u;continue}}b==="["?l++:b==="]"&&l--}var h=a.length===0?i:i.substring(d),w=h.startsWith(rr),g=w?h.substring(1):h,$=m&&m>d?m-d:void 0;return{modifiers:a,hasImportantModifier:w,baseClassName:g,maybePostfixModifierPosition:$}}}function zr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var n=o[0]==="[";n?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function Er(r){return{cache:kr(r.cacheSize),splitModifiers:Pr(r),...Ir(r)}}var me=/\s+/;function Nr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,n=e.getConflictingClassGroupIds,s=new Set;return r.trim().split(me).map(function(i){var a=t(i),l=a.modifiers,d=a.hasImportantModifier,m=a.baseClassName,u=a.maybePostfixModifierPosition,b=o(u?m.substring(0,u):m),h=!!u;if(!b){if(!u)return{isTailwindClass:!1,originalClassName:i};if(b=o(m),!b)return{isTailwindClass:!1,originalClassName:i};h=!1}var w=zr(l).join(":"),g=d?w+rr:w;return{isTailwindClass:!0,modifierId:g,classGroupId:b,originalClassName:i,hasPostfixModifier:h}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var a=i.modifierId,l=i.classGroupId,d=i.hasPostfixModifier,m=a+l;return s.has(m)?!1:(s.add(m),n(l,d).forEach(function(u){return s.add(a+u)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function Gr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,n,s,i=a;function a(d){var m=e[0],u=e.slice(1),b=u.reduce(function(h,w){return w(h)},m());return o=Er(b),n=o.cache.get,s=o.cache.set,i=l,l(d)}function l(d){var m=n(d);if(m)return m;var u=Nr(d,o);return s(d,u),u}return function(){return i(Cr.apply(null,arguments))}}function c(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var jr=/^\[(?:([a-z-]+):)?(.+)\]$/i,be=/^\d+\/\d+$/,ge=new Set(["px","full","screen"]),ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,he=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/,xe=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function y(r){return R(r)||ge.has(r)||be.test(r)||A(r)}function A(r){return k(r,"length",ye)}function Or(r){return k(r,"size",Fr)}function Wr(r){return k(r,"position",Fr)}function Lr(r){return k(r,"url",we)}function j(r){return k(r,"number",R)}function R(r){return!Number.isNaN(Number(r))}function Vr(r){return r.endsWith("%")&&R(r.slice(0,-1))}function z(r){return Tr(r)||k(r,"number",Tr)}function p(r){return jr.test(r)}function E(){return!0}function M(r){return ve.test(r)}function qr(r){return k(r,"",$e)}function k(r,e,t){var o=jr.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function ye(r){return he.test(r)}function Fr(){return!1}function we(r){return r.startsWith("url(")}function Tr(r){return Number.isInteger(Number(r))}function $e(r){return xe.test(r)}function Xr(){var r=c("colors"),e=c("spacing"),t=c("blur"),o=c("brightness"),n=c("borderColor"),s=c("borderRadius"),i=c("borderSpacing"),a=c("borderWidth"),l=c("contrast"),d=c("grayscale"),m=c("hueRotate"),u=c("invert"),b=c("gap"),h=c("gradientColorStops"),w=c("gradientColorStopPositions"),g=c("inset"),$=c("margin"),I=c("opacity"),S=c("padding"),tr=c("saturate"),X=c("scale"),or=c("sepia"),nr=c("skew"),ir=c("space"),ar=c("translate"),U=function(){return["auto","contain","none"]},B=function(){return["auto","hidden","clip","visible","scroll"]},sr=function(){return["auto",e]},lr=function(){return["",y]},W=function(){return["auto",R,p]},cr=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},L=function(){return["solid","dashed","dotted","double","none"]},dr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},J=function(){return["start","end","center","between","around","evenly","stretch"]},N=function(){return["","0",p]},ur=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},G=function(){return[R,j]},V=function(){return[R,p]};return{cacheSize:500,theme:{colors:[E],spacing:[y],blur:["none","",M,A],brightness:G(),borderColor:[r],borderRadius:["none","","full",M,A],borderSpacing:[e],borderWidth:lr(),contrast:G(),grayscale:N(),hueRotate:V(),invert:N(),gap:[e],gradientColorStops:[r],gradientColorStopPositions:[Vr,A],inset:sr(),margin:sr(),opacity:G(),padding:[e],saturate:G(),scale:G(),sepia:N(),skew:V(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":ur()}],"break-before":[{"break-before":ur()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(cr(),[p])}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z]}],basis:[{basis:[e]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",z]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:[z]},p]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[z]},p]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal"].concat(J())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(J(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(J(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[$]}],mx:[{mx:[$]}],my:[{my:[$]}],ms:[{ms:[$]}],me:[{me:[$]}],mt:[{mt:[$]}],mr:[{mr:[$]}],mb:[{mb:[$]}],ml:[{ml:[$]}],"space-x":[{"space-x":[ir]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ir]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",y]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,A]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",y]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",M,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",R,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",y]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[I]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(L(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",y]}],"underline-offset":[{"underline-offset":["auto",y]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[I]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(cr(),[Wr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Or]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Lr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[I]}],"border-style":[{border:[].concat(L(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[I]}],"divide-style":[{divide:L()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(L())}],"outline-offset":[{"outline-offset":[y]}],"outline-w":[{outline:[y]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:lr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[I]}],"ring-offset-w":[{"ring-offset":[y]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",M,qr]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[I]}],"mix-blend":[{"mix-blend":dr()}],"bg-blend":[{"bg-blend":dr()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",M,p]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[u]}],saturate:[{saturate:[tr]}],sepia:[{sepia:[or]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[I]}],"backdrop-saturate":[{"backdrop-saturate":[tr]}],"backdrop-sepia":[{"backdrop-sepia":[or]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[X]}],"scale-x":[{"scale-x":[X]}],"scale-y":[{"scale-y":[X]}],rotate:[{rotate:[z,p]}],"translate-x":[{"translate-x":[ar]}],"translate-y":[{"translate-y":[ar]}],"skew-x":[{"skew-x":[nr]}],"skew-y":[{"skew-y":[nr]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[y,j]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var er=Gr(Xr);function Ur(...r){return er($r(r))}var Jr=require("react/jsx-runtime"),O=Br.forwardRef((s,n)=>{var i=s,{className:r,orientation:e="horizontal",decorative:t=!0}=i,o=br(i,["className","orientation","decorative"]);return(0,Jr.jsx)(K,mr({ref:n,decorative:t,orientation:e,className:Ur("shrink-0 bg-border",e==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r)},o))});O.displayName=K.displayName;var v=require("react/jsx-runtime");function Ce(){return(0,v.jsxs)("div",{className:"m-16",children:[(0,v.jsxs)("div",{className:"space-y-1",children:[(0,v.jsx)("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),(0,v.jsx)("p",{className:"text-muted-foreground text-sm",children:"An open-source UI component library."})]}),(0,v.jsx)(O,{className:"my-4"}),(0,v.jsxs)("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[(0,v.jsx)("div",{children:"Blog"}),(0,v.jsx)(O,{orientation:"vertical"}),(0,v.jsx)("div",{children:"Docs"}),(0,v.jsx)(O,{orientation:"vertical"}),(0,v.jsx)("div",{children:"Source"})]})]})}
//# sourceMappingURL=index.js.map