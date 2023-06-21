"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9072],{11254:function(t,e,r){r.d(e,{c:function(){return o}});var a=r(86742),i=r(92750),n=r(70867);function l(t,e,r){return t.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",e*r-.1+"em").attr("dy",r+"em")}function s(t,e,r){let a=t.append("text"),i=l(a,1,e);d(i,[{content:r,type:"normal"}]);let n=i.node().getComputedTextLength();return a.remove(),n}function d(t,e){t.text(""),e.forEach((e,r)=>{let a=t.append("tspan").attr("font-style","em"===e.type?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight","strong"===e.type?"bold":"normal");0===r?a.text(e.content):a.text(" "+e.content)})}let o=(t,e="",{style:r="",isTitle:o=!1,classes:c="",useHtmlLabels:h=!0,isNode:p=!0,width:g,addSvgBackground:y=!1}={})=>{if(a.l.info("createText",e,r,o,c,h,p,y),h){let n=function(t){let{children:e}=(0,i.V)(t);return e.map(function t(e){return"text"===e.type?e.value.replace(/\n/g,"<br/>"):"strong"===e.type?`<strong>${e.children.map(t).join("")}</strong>`:"emphasis"===e.type?`<em>${e.children.map(t).join("")}</em>`:"paragraph"===e.type?`<p>${e.children.map(t).join("")}</p>`:`Unsupported markdown: ${e.type}`}).join("")}(e),l={isNode:p,label:(0,a.H)(n).replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),labelStyle:r.replace("fill:","color:")};return function(t,e,r,a,i=!1){var n;let l=t.append("foreignObject"),s=l.append("xhtml:div"),d=e.label,o=e.isNode?"nodeLabel":"edgeLabel";s.html(`
    <span class="${o} ${a}" `+(e.labelStyle?'style="'+e.labelStyle+'"':"")+">"+d+"</span>"),(n=e.labelStyle)&&s.attr("style",n),s.style("display","table-cell"),s.style("white-space","nowrap"),s.style("max-width",r+"px"),s.attr("xmlns","http://www.w3.org/1999/xhtml"),i&&s.attr("class","labelBkg");let c=s.node().getBoundingClientRect();return c.width===r&&(s.style("display","table"),s.style("white-space","break-spaces"),s.style("width",r+"px"),c=s.node().getBoundingClientRect()),l.style("width",c.width),l.style("height",c.height),l.node()}(t,l,g,c,y)}{let r=function(t){let e=function(t){let e=t.replace(/\n{2,}/g,"\n"),r=(0,n.Z)(e);return r}(t),{children:r}=(0,i.V)(e),a=[[]],l=0;return r.forEach(t=>{"paragraph"===t.type&&t.children.forEach(t=>{!function t(e,r="normal"){if("text"===e.type){let t=e.value.split("\n");t.forEach((t,e)=>{0!==e&&(l++,a.push([])),t.split(" ").forEach(t=>{t&&a[l].push({content:t,type:r})})})}else("strong"===e.type||"emphasis"===e.type)&&e.children.forEach(r=>{t(r,e.type)})}(t)})}),a}(e),o=function(t,e,r,i=!1){let n=e.append("g"),o=n.insert("rect").attr("class","background"),c=n.append("text").attr("y","-10.1"),h=0;if(r.forEach(e=>{let r=e.map(t=>t.content).join(" "),i="",o=[],p=0;if(s(n,1.1,r)<=t)o.push(r);else{for(let e=0;e<=r.length;e++)if(i=r.slice(p,e),a.l.info(i,p,e),s(n,1.1,i)>t){let t=r.slice(p,e),a=t.lastIndexOf(" ");a>-1&&(e=p+a+1),o.push(r.slice(p,e).trim()),p=e,i=null}null!=i&&o.push(i)}let g=o.map(t=>({content:t,type:e.type}));for(let t of g)d(l(c,h,1.1),[t]),h++}),!i)return c.node();{let t=c.node().getBBox();return o.attr("x",-2).attr("y",-2).attr("width",t.width+4).attr("height",t.height+4),n.node()}}(g,t,r,y);return o}}},79072:function(t,e,r){r.d(e,{a:function(){return d},b:function(){return _},c:function(){return o},d:function(){return D},e:function(){return I},f:function(){return X},g:function(){return V},h:function(){return Z},i:function(){return y},l:function(){return c},p:function(){return j},s:function(){return O},u:function(){return h}});var a=r(86742),i=r(7128),n=r(11254),l=r(81302);let s={extension:(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",e+"-extensionStart").attr("class","marker extension "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-compositionStart").attr("class","marker composition "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},point:(t,e)=>{t.append("marker").attr("id",e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e)=>{t.append("marker").attr("id",e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e)=>{t.append("marker").attr("id",e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},d=(t,e,r,a)=>{e.forEach(e=>{s[e](t,r,a)})},o=(t,e,r,n)=>{let l=t||"";if("object"==typeof l&&(l=l[0]),(0,a.n)((0,a.c)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),a.l.info("vertexText"+l);let t={isNode:n,label:(0,a.H)(l).replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),labelStyle:e.replace("fill:","color:")};return function(t){var e;let r=(0,i.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=r.append("xhtml:div"),n=t.label,l=t.isNode?"nodeLabel":"edgeLabel";return a.html('<span class="'+l+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+n+"</span>"),(e=t.labelStyle)&&a.attr("style",e),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}(t)}{let t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));for(let e of"string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[]){let a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},c=async(t,e,r,l)=>{let s,d,c;let h=e.useHtmlLabels||(0,a.n)((0,a.c)().flowchart.htmlLabels);s=r||"node default";let p=t.insert("g").attr("class",s).attr("id",e.domId||e.id),g=p.insert("g").attr("class","label").attr("style",e.labelStyle);d=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];let y=g.node(),f=(c="markdown"===e.labelType?(0,n.c)(g,(0,a.d)((0,a.H)(d),(0,a.c)()),{useHtmlLabels:h,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):y.appendChild(o((0,a.d)((0,a.H)(d),(0,a.c)()),e.labelStyle,!1,l))).getBBox(),u=e.padding/2;if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=c.children[0],e=(0,i.Ys)(c),r=t.getElementsByTagName("img");if(r){let t=""===d.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map(e=>new Promise(r=>e.addEventListener("load",function(){if(e.style.display="flex",e.style.flexDirection="column",t){let t=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize;e.style.width=5*parseInt(t,10)+"px"}else e.style.width="100%";r(e)}))))}f=t.getBoundingClientRect(),e.attr("width",f.width),e.attr("height",f.height)}return h?g.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):g.attr("transform","translate(0, "+-f.height/2+")"),e.centerLabel&&g.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),g.insert("rect",":first-child"),{shapeSvg:p,bbox:f,halfPadding:u,label:g}},h=(t,e)=>{let r=e.node().getBBox();t.width=r.width,t.height=r.height};function p(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function g(t,e,r,a){var i=t.x,n=t.y,l=i-a.x,s=n-a.y,d=Math.sqrt(e*e*s*s+r*r*l*l),o=Math.abs(e*r*l/d);a.x<i&&(o=-o);var c=Math.abs(e*r*s/d);return a.y<n&&(c=-c),{x:i+o,y:n+c}}let y=(t,e)=>{var r,a,i=t.x,n=t.y,l=e.x-i,s=e.y-n,d=t.width/2,o=t.height/2;return Math.abs(s)*d>Math.abs(l)*o?(s<0&&(o=-o),r=0===s?0:o*l/s,a=o):(l<0&&(d=-d),r=d,a=0===l?0:d*s/l),{x:i+r,y:n+a}},f={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return g(t,e,e,r)},ellipse:g,polygon:function(t,e,r){var a=t.x,i=t.y,n=[],l=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach(function(t){l=Math.min(l,t.x),s=Math.min(s,t.y)}):(l=Math.min(l,e.x),s=Math.min(s,e.y));for(var d=a-t.width/2-l,o=i-t.height/2-s,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],g=function(t,e,r,a){var i,n,l,s,d,o,c,h,p,g,y,f,u;if(i=e.y-t.y,l=t.x-e.x,d=e.x*t.y-t.x*e.y,p=i*r.x+l*r.y+d,g=i*a.x+l*a.y+d,(0===p||0===g||!(p*g>0))&&(n=a.y-r.y,s=r.x-a.x,o=a.x*r.y-r.x*a.y,c=n*t.x+s*t.y+o,h=n*e.x+s*e.y+o,!(0!==c&&0!==h&&c*h>0)&&0!=(y=i*s-n*l)))return f=Math.abs(y/2),{x:(u=l*o-s*d)<0?(u-f)/y:(u+f)/y,y:(u=n*d-i*o)<0?(u-f)/y:(u+f)/y}}(t,r,{x:d+h.x,y:o+h.y},{x:d+p.x,y:o+p.y});g&&n.push(g)}return n.length?(n.length>1&&n.sort(function(t,e){var a=t.x-r.x,i=t.y-r.y,n=Math.sqrt(a*a+i*i),l=e.x-r.x,s=e.y-r.y,d=Math.sqrt(l*l+s*s);return n<d?-1:n===d?0:1}),n[0]):t},rect:y},u=async(t,e)=>{let r=e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels;r||(e.centerLabel=!0);let{shapeSvg:i,bbox:n,halfPadding:l}=await c(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);let s=i.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-l).attr("y",-n.height/2-l).attr("width",n.width+e.padding).attr("height",n.height+e.padding),h(e,s),e.intersect=function(t){return f.rect(e,t)},i},x=async(t,e)=>{let{shapeSvg:r,bbox:i}=await c(t,e,void 0,!0),n=i.width+e.padding,l=i.height+e.padding,s=n+l,d=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}];a.l.info("Question main (Circle)");let o=p(r,s,s,d);return o.attr("style",e.style),h(e,o),e.intersect=function(t){return a.l.warn("Intersect called"),f.polygon(e,d,t)},r},w=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.height+e.padding,n=i/4,l=a.width+2*n+e.padding,s=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-i/2},{x:l-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}],d=p(r,l,i,s);return d.attr("style",e.style),h(e,d),e.intersect=function(t){return f.polygon(e,s,t)},r},b=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-n/2,y:0},{x:i,y:0},{x:i,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],s=p(r,i,n,l);return s.attr("style",e.style),e.width=i+n,e.height=n,e.intersect=function(t){return f.polygon(e,l,t)},r},m=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:n/6,y:-n}],s=p(r,i,n,l);return s.attr("style",e.style),h(e,s),e.intersect=function(t){return f.polygon(e,l,t)},r},k=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:2*n/6,y:0},{x:i+n/6,y:0},{x:i-2*n/6,y:-n},{x:-n/6,y:-n}],s=p(r,i,n,l);return s.attr("style",e.style),h(e,s),e.intersect=function(t){return f.polygon(e,l,t)},r},L=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i+2*n/6,y:0},{x:i-n/6,y:-n},{x:n/6,y:-n}],s=p(r,i,n,l);return s.attr("style",e.style),h(e,s),e.intersect=function(t){return f.polygon(e,l,t)},r},v=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:-2*n/6,y:-n}],s=p(r,i,n,l);return s.attr("style",e.style),h(e,s),e.intersect=function(t){return f.polygon(e,l,t)},r},S=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i+n/2,y:0},{x:i,y:-n/2},{x:i+n/2,y:-n},{x:0,y:-n}],s=p(r,i,n,l);return s.attr("style",e.style),h(e,s),e.intersect=function(t){return f.polygon(e,l,t)},r},B=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=i/2,l=n/(2.5+i/50),s=a.height+l+e.padding,d="M 0,"+l+" a "+n+","+l+" 0,0,0 "+i+" 0 a "+n+","+l+" 0,0,0 "+-i+" 0 l 0,"+s+" a "+n+","+l+" 0,0,0 "+i+" 0 l 0,"+-s,o=r.attr("label-offset-y",l).insert("path",":first-child").attr("style",e.style).attr("d",d).attr("transform","translate("+-i/2+","+-(s/2+l)+")");return h(e,o),e.intersect=function(t){let r=f.rect(e,t),a=r.x-e.x;if(0!=n&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,t.y-e.y>0&&(i=-i),r.y+=i}return r},r},E=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await c(t,e,"node "+e.classes,!0),l=r.insert("rect",":first-child"),s=i.width+e.padding,d=i.height+e.padding;if(l.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-i.width/2-n).attr("y",-i.height/2-n).attr("width",s).attr("height",d),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(M(l,e.props.borders,s,d),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return h(e,l),e.intersect=function(t){return f.rect(e,t)},r},T=async(t,e)=>{let{shapeSvg:r}=await c(t,e,"label",!0);a.l.trace("Classes = ",e.classes);let i=r.insert("rect",":first-child");if(i.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(M(i,e.props.borders,0,0),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return h(e,i),e.intersect=function(t){return f.rect(e,t)},r};function M(t,e,r,i){let n=[],l=t=>{n.push(t,0)},s=t=>{n.push(0,t)};e.includes("t")?(a.l.debug("add top border"),l(r)):s(r),e.includes("r")?(a.l.debug("add right border"),l(i)):s(i),e.includes("b")?(a.l.debug("add bottom border"),l(r)):s(r),e.includes("l")?(a.l.debug("add left border"),l(i)):s(i),t.attr("stroke-dasharray",n.join(" "))}let C=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.height+e.padding,n=a.width+i/4+e.padding,l=r.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-n/2).attr("y",-i/2).attr("width",n).attr("height",i);return h(e,l),e.intersect=function(t){return f.rect(e,t)},r},N=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await c(t,e,void 0,!0),l=r.insert("circle",":first-child");return l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("Circle main"),h(e,l),e.intersect=function(t){return a.l.info("Circle intersect",e,i.width/2+n,t),f.circle(e,i.width/2+n,t)},r},Y=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await c(t,e,void 0,!0),l=r.insert("g",":first-child"),s=l.insert("circle"),d=l.insert("circle");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n+5).attr("width",i.width+e.padding+10).attr("height",i.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("DoubleCircle main"),h(e,s),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,i.width/2+n+5,t),f.circle(e,i.width/2+n+5,t)},r},H=async(t,e)=>{let{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i,y:0},{x:i,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],s=p(r,i,n,l);return s.attr("style",e.style),h(e,s),e.intersect=function(t){return f.polygon(e,l,t)},r},P=(t,e,r)=>{let a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),i=70,n=10;"LR"===r&&(i=10,n=70);let l=a.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join");return h(e,l),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return f.rect(e,t)},a},R={rhombus:x,question:x,rect:E,labelRect:T,rectWithTitle:(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";let n=t.insert("g").attr("class",r).attr("id",e.domId||e.id),l=n.insert("rect",":first-child"),s=n.insert("line"),d=n.insert("g").attr("class","label"),c=e.labelText.flat?e.labelText.flat():e.labelText,p="";p="object"==typeof c?c[0]:c,a.l.info("Label text abc79",p,c,"object"==typeof c);let g=d.node().appendChild(o(p,e.labelStyle,!0,!0)),y={width:0,height:0};if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=g.children[0],e=(0,i.Ys)(g);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}a.l.info("Text 2",c);let u=c.slice(1,c.length),x=g.getBBox(),w=d.node().appendChild(o(u.join?u.join("<br/>"):u,e.labelStyle,!0,!0));if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=w.children[0],e=(0,i.Ys)(w);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}let b=e.padding/2;return(0,i.Ys)(w).attr("transform","translate( "+(y.width>x.width?0:(x.width-y.width)/2)+", "+(x.height+b+5)+")"),(0,i.Ys)(g).attr("transform","translate( "+(y.width<x.width?0:-(x.width-y.width)/2)+", 0)"),y=d.node().getBBox(),d.attr("transform","translate("+-y.width/2+", "+(-y.height/2-b+3)+")"),l.attr("class","outer title-state").attr("x",-y.width/2-b).attr("y",-y.height/2-b).attr("width",y.width+e.padding).attr("height",y.height+e.padding),s.attr("class","divider").attr("x1",-y.width/2-b).attr("x2",y.width/2+b).attr("y1",-y.height/2-b+x.height+b).attr("y2",-y.height/2-b+x.height+b),h(e,l),e.intersect=function(t){return f.rect(e,t)},n},choice:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(t){return t.x+","+t.y}).join(" "));return a.attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return f.circle(e,14,t)},r},circle:N,doublecircle:Y,stadium:C,hexagon:w,rect_left_inv_arrow:b,lean_right:m,lean_left:k,trapezoid:L,inv_trapezoid:v,rect_right_inv_arrow:S,cylinder:B,start:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),h(e,a),e.intersect=function(t){return f.circle(e,7,t)},r},end:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),h(e,i),e.intersect=function(t){return f.circle(e,7,t)},r},note:u,subroutine:H,fork:P,join:P,class_box:(t,e)=>{let r;let n=e.padding/2;r=e.classes?"node "+e.classes:"node default";let s=t.insert("g").attr("class",r).attr("id",e.domId||e.id),d=s.insert("rect",":first-child"),c=s.insert("line"),p=s.insert("line"),g=0,y=4,u=s.insert("g").attr("class","label"),x=0,w=e.classData.annotations&&e.classData.annotations[0],b=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",m=u.node().appendChild(o(b,e.labelStyle,!0,!0)),k=m.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=m.children[0],e=(0,i.Ys)(m);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}e.classData.annotations[0]&&(y+=k.height+4,g+=k.width);let L=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?L+="&lt;"+e.classData.type+"&gt;":L+="<"+e.classData.type+">");let v=u.node().appendChild(o(L,e.labelStyle,!0,!0));(0,i.Ys)(v).attr("class","classTitle");let S=v.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=v.children[0],e=(0,i.Ys)(v);S=t.getBoundingClientRect(),e.attr("width",S.width),e.attr("height",S.height)}y+=S.height+4,S.width>g&&(g=S.width);let B=[];e.classData.members.forEach(t=>{let r=(0,l.p)(t),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let s=u.node().appendChild(o(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),d=s.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=s.children[0],e=(0,i.Ys)(s);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>g&&(g=d.width),y+=d.height+4,B.push(s)}),y+=8;let E=[];if(e.classData.methods.forEach(t=>{let r=(0,l.p)(t),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let s=u.node().appendChild(o(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),d=s.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=s.children[0],e=(0,i.Ys)(s);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>g&&(g=d.width),y+=d.height+4,E.push(s)}),y+=8,w){let t=(g-k.width)/2;(0,i.Ys)(m).attr("transform","translate( "+(-1*g/2+t)+", "+-1*y/2+")"),x=k.height+4}let T=(g-S.width)/2;return(0,i.Ys)(v).attr("transform","translate( "+(-1*g/2+T)+", "+(-1*y/2+x)+")"),x+=S.height+4,c.attr("class","divider").attr("x1",-g/2-n).attr("x2",g/2+n).attr("y1",-y/2-n+8+x).attr("y2",-y/2-n+8+x),x+=8,B.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-g/2+", "+(-1*y/2+x+4)+")"),x+=S.height+4}),x+=8,p.attr("class","divider").attr("x1",-g/2-n).attr("x2",g/2+n).attr("y1",-y/2-n+8+x).attr("y2",-y/2-n+8+x),x+=8,E.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-g/2+", "+(-1*y/2+x)+")"),x+=S.height+4}),d.attr("class","outer title-state").attr("x",-g/2-n).attr("y",-(y/2)-n).attr("width",g+e.padding).attr("height",y+e.padding),h(e,d),e.intersect=function(t){return f.rect(e,t)},s}},$={},I=async(t,e,r)=>{let i,n;if(e.link){let l;"sandbox"===(0,a.c)().securityLevel?l="_top":e.linkTarget&&(l=e.linkTarget||"_blank"),i=t.insert("svg:a").attr("xlink:href",e.link).attr("target",l),n=await R[e.shape](i,e,r)}else i=n=await R[e.shape](t,e,r);return e.tooltip&&n.attr("title",e.tooltip),e.class&&n.attr("class","node default "+e.class),$[e.id]=i,e.haveCallback&&$[e.id].attr("class",$[e.id].attr("class")+" clickable"),i},O=(t,e)=>{$[e.id]=t},_=()=>{$={}},j=t=>{let e=$[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");let r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},W={},A={},D=()=>{W={},A={}},X=(t,e)=>{let r;let l=(0,a.n)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,n.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:l,addSvgBackground:!0}):o(e.label,e.labelStyle);a.l.info("abc82",e,e.labelType);let d=t.insert("g").attr("class","edgeLabel"),c=d.insert("g").attr("class","label");c.node().appendChild(s);let h=s.getBBox();if(l){let t=s.children[0],e=(0,i.Ys)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(c.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),W[e.id]=d,e.width=h.width,e.height=h.height,e.startLabelLeft){let a=o(e.startLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),A[e.id]||(A[e.id]={}),A[e.id].startLeft=i,U(r,e.startLabelLeft)}if(e.startLabelRight){let a=o(e.startLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=i.node().appendChild(a),n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),A[e.id]||(A[e.id]={}),A[e.id].startRight=i,U(r,e.startLabelRight)}if(e.endLabelLeft){let a=o(e.endLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),i.node().appendChild(a),A[e.id]||(A[e.id]={}),A[e.id].endLeft=i,U(r,e.endLabelLeft)}if(e.endLabelRight){let a=o(e.endLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),i.node().appendChild(a),A[e.id]||(A[e.id]={}),A[e.id].endRight=i,U(r,e.endLabelRight)}return s};function U(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}let Z=(t,e)=>{a.l.info("Moving label abc78 ",t.id,t.label,W[t.id]);let r=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){let i=W[t.id],n=t.x,l=t.y;if(r){let i=a.u.calcLabelPosition(r);a.l.info("Moving label "+t.label+" from (",n,",",l,") to (",i.x,",",i.y,") abc78"),e.updatedPath&&(n=i.x,l=i.y)}i.attr("transform","translate("+n+", "+l+")")}if(t.startLabelLeft){let e=A[t.id].startLeft,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.startLabelRight){let e=A[t.id].startRight,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.endLabelLeft){let e=A[t.id].endLeft,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.endLabelRight){let e=A[t.id].endRight,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}},z=(t,e)=>{let r=t.x,a=t.y,i=Math.abs(e.x-r),n=Math.abs(e.y-a),l=t.width/2,s=t.height/2;return i>=l||n>=s},q=(t,e,r)=>{a.l.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);let i=t.x,n=t.y,l=Math.abs(i-r.x),s=t.width/2,d=r.x<e.x?s-l:s+l,o=t.height/2,c=Math.abs(e.y-r.y),h=Math.abs(e.x-r.x);if(Math.abs(n-e.y)*s>Math.abs(i-e.x)*o){let t=r.y<e.y?e.y-o-n:n-o-e.y;d=h*t/c;let i={x:r.x<e.x?r.x+d:r.x-h+d,y:r.y<e.y?r.y+c-t:r.y-c+t};return 0===d&&(i.x=e.x,i.y=e.y),0===h&&(i.x=e.x),0===c&&(i.y=e.y),a.l.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${d}`,i),i}{let t=c*(d=r.x<e.x?e.x-s-i:i-s-e.x)/h,n=r.x<e.x?r.x+h-d:r.x-h+d,l=r.y<e.y?r.y+t:r.y-t;return a.l.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${d}`,{_x:n,_y:l}),0===d&&(n=e.x,l=e.y),0===h&&(n=e.x),0===c&&(l=e.y),{x:n,y:l}}},J=(t,e)=>{a.l.warn("abc88 cutPathAtIntersect",t,e);let r=[],i=t[0],n=!1;return t.forEach(t=>{if(a.l.info("abc88 checking point",t,e),z(e,t)||n)a.l.warn("abc88 outside",t,i),i=t,n||r.push(t);else{let l=q(e,i,t);a.l.warn("abc88 inside",t,i,l),a.l.warn("abc88 intersection",l);let s=!1;r.forEach(t=>{s=s||t.x===l.x&&t.y===l.y}),r.some(t=>t.x===l.x&&t.y===l.y)?a.l.warn("abc88 no intersect",l,r):r.push(l),n=!0}}),a.l.warn("abc88 returning points",r),r},V=function(t,e,r,n,l,s){let d,o,c=r.points,h=!1,p=s.node(e.v);var g=s.node(e.w);a.l.info("abc88 InsertEdge: ",r),g.intersect&&p.intersect&&((c=c.slice(1,r.points.length-1)).unshift(p.intersect(c[0])),a.l.info("Last point",c[c.length-1],g,g.intersect(c[c.length-1])),c.push(g.intersect(c[c.length-1]))),r.toCluster&&(a.l.info("to cluster abc88",n[r.toCluster]),c=J(r.points,n[r.toCluster].node),h=!0),r.fromCluster&&(a.l.info("from cluster abc88",n[r.fromCluster]),c=J(c.reverse(),n[r.fromCluster].node).reverse(),h=!0);let y=c.filter(t=>!Number.isNaN(t.y));d=("graph"===l||"flowchart"===l)&&r.curve||i.$0Z;let f=(0,i.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d);switch(r.thickness){case"normal":o="edge-thickness-normal";break;case"thick":case"invisible":o="edge-thickness-thick";break;default:o=""}switch(r.pattern){case"solid":o+=" edge-pattern-solid";break;case"dotted":o+=" edge-pattern-dotted";break;case"dashed":o+=" edge-pattern-dashed"}let u=t.append("path").attr("d",f(y)).attr("id",r.id).attr("class"," "+o+(r.classes?" "+r.classes:"")).attr("style",r.style),x="";switch(((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(x=(x=(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),a.l.info("arrowTypeStart",r.arrowTypeStart),a.l.info("arrowTypeEnd",r.arrowTypeEnd),r.arrowTypeStart){case"arrow_cross":u.attr("marker-start","url("+x+"#"+l+"-crossStart)");break;case"arrow_point":u.attr("marker-start","url("+x+"#"+l+"-pointStart)");break;case"arrow_barb":u.attr("marker-start","url("+x+"#"+l+"-barbStart)");break;case"arrow_circle":u.attr("marker-start","url("+x+"#"+l+"-circleStart)");break;case"aggregation":u.attr("marker-start","url("+x+"#"+l+"-aggregationStart)");break;case"extension":u.attr("marker-start","url("+x+"#"+l+"-extensionStart)");break;case"composition":u.attr("marker-start","url("+x+"#"+l+"-compositionStart)");break;case"dependency":u.attr("marker-start","url("+x+"#"+l+"-dependencyStart)");break;case"lollipop":u.attr("marker-start","url("+x+"#"+l+"-lollipopStart)")}switch(r.arrowTypeEnd){case"arrow_cross":u.attr("marker-end","url("+x+"#"+l+"-crossEnd)");break;case"arrow_point":u.attr("marker-end","url("+x+"#"+l+"-pointEnd)");break;case"arrow_barb":u.attr("marker-end","url("+x+"#"+l+"-barbEnd)");break;case"arrow_circle":u.attr("marker-end","url("+x+"#"+l+"-circleEnd)");break;case"aggregation":u.attr("marker-end","url("+x+"#"+l+"-aggregationEnd)");break;case"extension":u.attr("marker-end","url("+x+"#"+l+"-extensionEnd)");break;case"composition":u.attr("marker-end","url("+x+"#"+l+"-compositionEnd)");break;case"dependency":u.attr("marker-end","url("+x+"#"+l+"-dependencyEnd)");break;case"lollipop":u.attr("marker-end","url("+x+"#"+l+"-lollipopEnd)")}let w={};return h&&(w.updatedPath=c),w.originalPath=r.points,w}},81302:function(t,e,r){r.d(e,{p:function(){return s},s:function(){return c}});var a=r(7128),i=r(86742);let n=0,l=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},s=function(t){let e="",r="",a="",n="",l=t.substring(0,1),s=t.substring(t.length-1,t.length);l.match(/[#+~-]/)&&(n=l);let d=/[\s\w)~]/;s.match(d)||(r=o(s));let c=""===n?0:1,h=""===r?t.length:t.length-1;t=t.substring(c,h);let p=t.indexOf("("),g=t.indexOf(")"),y=p>1&&g>p&&g<=t.length;if(y){let l=t.substring(0,p).trim(),s=t.substring(p+1,g);if(e=n+l+"("+(0,i.x)(s.trim())+")",g<t.length){let n=t.substring(g+1,g+2);""!==r||n.match(d)?a=t.substring(g+1).trim():(r=o(n),a=t.substring(g+2).trim()),""!==a&&(":"===a.charAt(0)&&(a=a.substring(1).trim()),e+=a=" : "+(0,i.x)(a))}}else e=n+(0,i.x)(t);return{displayText:e,cssStyle:r}},d=function(t,e,r,a){let i=s(e),n=t.append("tspan").attr("x",a.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),r||n.attr("dy",a.textHeight)},o=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},c={getClassTitleString:l,drawClass:function(t,e,r,a){let n;i.l.debug("Rendering class ",e,r);let s=e.id,o={id:s,label:e.id,width:0,height:0},c=t.append("g").attr("id",a.db.lookUpDomId(s)).attr("class","classGroup");n=e.link?c.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):c.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let h=!0;e.annotations.forEach(function(t){let e=n.append("tspan").text("\xab"+t+"\xbb");h||e.attr("dy",r.textHeight),h=!1});let p=l(e),g=n.append("tspan").text(p).attr("class","title");h||g.attr("dy",r.textHeight);let y=n.node().getBBox().height,f=c.append("line").attr("x1",0).attr("y1",r.padding+y+r.dividerMargin/2).attr("y2",r.padding+y+r.dividerMargin/2),u=c.append("text").attr("x",r.padding).attr("y",y+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");h=!0,e.members.forEach(function(t){d(u,t,h,r),h=!1});let x=u.node().getBBox(),w=c.append("line").attr("x1",0).attr("y1",r.padding+y+r.dividerMargin+x.height).attr("y2",r.padding+y+r.dividerMargin+x.height),b=c.append("text").attr("x",r.padding).attr("y",y+2*r.dividerMargin+x.height+r.textHeight).attr("fill","white").attr("class","classText");h=!0,e.methods.forEach(function(t){d(b,t,h,r),h=!1});let m=c.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));let L=c.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*r.padding).attr("height",m.height+r.padding+.5*r.dividerMargin).attr("class",k),v=L.node().getBBox().width;return n.node().childNodes.forEach(function(t){t.setAttribute("x",(v-t.getBBox().width)/2)}),e.tooltip&&n.insert("title").text(e.tooltip),f.attr("x2",v),w.attr("x2",v),o.width=v,o.height=m.height+r.padding+.5*r.dividerMargin,o},drawEdge:function(t,e,r,l,s){let d,o,c,h,p,g;let y=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let f=e.points,u=(0,a.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(a.$0Z),x=t.append("path").attr("d",u(f)).attr("id","edge"+n).attr("class","relation"),w="";l.arrowMarkerAbsolute&&(w=(w=(w=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==r.relation.lineType&&x.attr("class","relation dashed-line"),10==r.relation.lineType&&x.attr("class","relation dotted-line"),"none"!==r.relation.type1&&x.attr("marker-start","url("+w+"#"+y(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&x.attr("marker-end","url("+w+"#"+y(r.relation.type2)+"End)");let b=e.points.length,m=i.u.calcLabelPosition(e.points);if(d=m.x,o=m.y,b%2!=0&&b>1){let t=i.u.calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),a=i.u.calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[b-1]);i.l.debug("cardinality_1_point "+JSON.stringify(t)),i.l.debug("cardinality_2_point "+JSON.stringify(a)),c=t.x,h=t.y,p=a.x,g=a.y}if(void 0!==r.title){let e=t.append("g").attr("class","classLabel"),a=e.append("text").attr("class","label").attr("x",d).attr("y",o).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=a;let i=a.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-l.padding/2).attr("y",i.y-l.padding/2).attr("width",i.width+l.padding).attr("height",i.height+l.padding)}if(i.l.info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type1").attr("x",c).attr("y",h).attr("fill","black").attr("font-size","6").text(r.relationTitle1)}if(void 0!==r.relationTitle2&&"none"!==r.relationTitle2){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type2").attr("x",p).attr("y",g).attr("fill","black").attr("font-size","6").text(r.relationTitle2)}n++},drawNote:function(t,e,r,a){i.l.debug("Rendering note ",e,r);let n=e.id,l={id:n,text:e.text,width:0,height:0},s=t.append("g").attr("id",n).attr("class","classGroup"),d=s.append("text").attr("y",r.textHeight+r.padding).attr("x",0),o=JSON.parse(`"${e.text}"`).split("\n");o.forEach(function(t){i.l.debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)});let c=s.node().getBBox(),h=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*r.padding).attr("height",c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin),p=h.node().getBBox().width;return d.node().childNodes.forEach(function(t){t.setAttribute("x",(p-t.getBBox().width)/2)}),l.width=p,l.height=c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin,l},parseMember:s}}}]);