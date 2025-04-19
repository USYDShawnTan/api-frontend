"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[328],{3328:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var i=a(9872),n=a(3574),s=a(7153),r=a(4974),l=a(3575),o=a(8097);function d(e,t){[...t].reverse().forEach((a=>{const i=e.getVariant(a);i&&(0,l.U)(e,i),e.variantChildren&&e.variantChildren.forEach((e=>{d(e,t)}))}))}function c(){let e=!1;const t=new Set,a={subscribe:e=>(t.add(e),()=>{t.delete(e)}),start(a,i){(0,r.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const n=[];return t.forEach((e=>{n.push((0,o._)(e,a,{transitionOverride:i}))})),Promise.all(n)},set:a=>((0,r.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((e=>{!function(e,t){Array.isArray(t)?d(e,t):"string"===typeof t?d(e,[t]):(0,l.U)(e,t)}(e,a)}))),stop(){t.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,a.stop()})};return a}var x=a(6552),m=a(9211);function h(){const e=(0,x.M)(c);return(0,m.E)(e.mount,[]),e}const p=["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight","bounceIn","zoomIn","flipInX","flipInY"],u=e=>`hsl(${360*e%360}, 85%, 70%)`,g={initial:{scale:1,boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)",backgroundColor:"rgba(45, 45, 65, 0.35)",backdropFilter:"blur(6px)",border:"1px solid rgba(255, 255, 255, 0.15)",zIndex:1},hover:{scale:1.03,boxShadow:"0 10px 25px rgba(255, 255, 255, 0.15)",backgroundColor:"rgba(55, 55, 80, 0.45)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.25)",zIndex:3,transition:{type:"spring",stiffness:300,damping:25}}},f={initial:{color:"rgba(255, 255, 255, 0.9)",y:0},hover:{color:"#ffffff",y:-2,transition:{type:"spring",stiffness:500,damping:10}}},b={initial:{color:"rgba(255, 255, 255, 0.7)",opacity:.9},hover:{color:"rgba(255, 255, 255, 0.95)",opacity:1,transition:{delay:.1}}},y={initial:{x:"-100%",opacity:0,background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 80%, transparent)"},animate:{x:"200%",opacity:.9,transition:{duration:1.2,ease:"easeInOut",repeat:1/0,repeatDelay:1.5}}},w={hidden:{opacity:0,y:5},visible:{opacity:1,y:0,transition:{duration:.2}}};var v=a(6380);const j=e=>{let{id:t}=e;return(0,v.jsx)("div",{className:"absolute px-2 py-1 rounded-md text-xs font-mono z-20 flex items-center gap-1",style:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",backfaceVisibility:"hidden"},children:(0,v.jsx)("span",{className:"text-white",children:t})})},N=e=>{let{controls:t,isHovered:a}=e;return(0,v.jsx)(n.P.div,{className:"absolute inset-0 z-0 pointer-events-none",variants:y,initial:"initial",animate:t,style:{height:"150%",backfaceVisibility:"hidden",transform:"translateZ(0)",willChange:"opacity, transform"}})};var k=a(2256),I=a(2049),S=a(4600);const P=e=>{let{title:t,description:a,endpoint:i,isHovered:s,rainbowProgress:r,totalRequests:l=0}=e;const o={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",backfaceVisibility:"hidden"};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k.N_,{to:`/${i}`,className:"block p-6 z-10 relative h-full",style:o,children:(0,v.jsxs)("div",{className:"group relative z-10 flex flex-col h-full",children:[(0,v.jsxs)(n.P.div,{className:"flex items-center",children:[(0,v.jsx)(n.P.h2,{variants:f,className:"text-lg font-bold mb-2.5",style:o,children:t}),(0,v.jsx)(n.P.div,{initial:{x:-10,opacity:0},whileHover:{x:0,opacity:1},className:"ml-2 text-white opacity-0 group-hover:opacity-100 transition-all",children:(0,v.jsx)(I.g,{icon:S.dmS,size:"sm"})})]}),(0,v.jsx)(n.P.p,{variants:b,className:"text-sm leading-relaxed flex-grow",style:o,children:a}),(0,v.jsxs)("div",{className:"mt-4 flex items-center justify-between text-xs text-white/60",style:o,children:[(0,v.jsxs)("div",{className:"flex items-center",children:[(0,v.jsx)(I.g,{icon:S.kNw,className:"mr-1"}),(0,v.jsx)("span",{children:(d=l,d>=1e4?(d/1e4).toFixed(2)+"w":d>=1e3?(d/1e3).toFixed(1)+"k":d.toString())})]}),(0,v.jsx)("span",{className:"text-white/40 text-xs",children:"\u67e5\u770b\u8be6\u60c5"})]})]})}),(0,v.jsx)(n.P.div,{className:"absolute bottom-0 left-0 h-1.5 rounded-b-xl",style:{background:`linear-gradient(90deg, ${u(r)}, ${u((r+.5)%1)})`,boxShadow:s?"0 0 8px rgba(255, 255, 255, 0.6)":"none"},variants:{hover:{width:"100%",opacity:1,transition:{width:{duration:.5,ease:"easeOut"},opacity:{duration:.3,ease:"easeIn"}}},initial:{width:"0%",opacity:0,transition:{width:{duration:.5,ease:"easeIn"},opacity:{duration:.3,delay:.2,ease:"easeOut"}}}},initial:"initial",animate:s?"hover":"initial"}),s&&(0,v.jsx)(n.P.div,{initial:"hidden",animate:"visible",variants:w,className:"absolute top-0 right-0 bg-black/85 px-3 py-1.5 rounded-br-none rounded-tl-none rounded-tr-xl rounded-bl-md text-xs font-mono shadow-lg z-20 border-l border-b border-white/10",style:{fontWeight:500,letterSpacing:"0.03em",...o},children:(0,v.jsxs)("span",{className:"text-green-400 font-medium flex items-center",children:[(0,v.jsx)("span",{className:"text-white/70 mr-1 text-[10px]",children:"GET"}),"/",i]})})]});var d},_=e=>{let{api:t,index:a}=e;const{title:s,description:r,endpoint:l,_id:o,totalRequests:d}=t,[c]=(0,i.useState)(p[Math.floor(Math.random()*p.length)]),[x]=(0,i.useState)(`animate__delay-${Math.floor(3*Math.random())+1}00ms`),[m,u]=(0,i.useState)(0),[f,b]=(0,i.useState)(!1),y=(0,i.useRef)(null),w=h(),k={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",backfaceVisibility:"hidden",transform:"translateZ(0)"};(0,i.useEffect)((()=>{let e;return f&&(e=setInterval((()=>{u((e=>(e+.01)%1))}),50)),()=>{e&&clearInterval(e)}}),[f]);return(0,v.jsx)("div",{className:`animate__animated animate__${c} ${x} relative api-card px-2`,style:{"--animate-duration":"1.2s",...k},children:(0,v.jsxs)(n.P.div,{className:"rounded-xl overflow-hidden max-w-xs mx-auto h-full shadow-lg",ref:y,layout:!0,layoutId:`card-${a}`,initial:"initial",whileHover:"hover",variants:g,transition:{layout:{type:"spring",stiffness:300,damping:30}},onHoverStart:()=>{b(!0),w.start("animate")},onHoverEnd:()=>{b(!1)},style:k,children:[(0,v.jsx)(j,{id:o,index:a}),(0,v.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-0 opacity-50 rounded-xl"}),(0,v.jsx)(N,{controls:w}),(0,v.jsx)(P,{title:s,description:r,endpoint:l,isHovered:f,rainbowProgress:m,totalRequests:d})]})})},z={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",backfaceVisibility:"hidden"},C=()=>(0,v.jsx)("div",{className:"w-full h-screen flex justify-center items-center",style:z,children:(0,v.jsxs)("div",{className:"backdrop-blur-md bg-white/5 p-8 rounded-xl shadow-xl",children:[(0,v.jsx)("p",{className:"text-white text-xl font-medium",children:"\u52a0\u8f7d API \u6570\u636e\u4e2d..."}),(0,v.jsx)("div",{className:"mt-3 flex justify-center",children:(0,v.jsx)(n.P.div,{animate:{rotate:360},transition:{duration:1.5,repeat:1/0,ease:"linear"},className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full",style:{transform:"translateZ(0)",willChange:"transform"}})})]})}),E=e=>{let{error:t,errorDetails:a}=e;return(0,v.jsxs)("div",{className:"w-full flex flex-col justify-center items-center backdrop-blur-lg bg-white/10 shadow-lg rounded-xl p-8 m-4 max-w-2xl border border-white/10",style:z,children:[(0,v.jsxs)("p",{className:"text-white text-xl mb-4 font-medium",children:["\u52a0\u8f7d\u5931\u8d25: ",t,". \u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5."]}),a&&(0,v.jsx)("div",{className:"mt-4 text-left w-full",children:(0,v.jsxs)("details",{className:"bg-white/20 p-4 rounded-lg text-white/90",children:[(0,v.jsx)("summary",{className:"cursor-pointer font-medium",children:"\u663e\u793a\u9519\u8bef\u8be6\u60c5\uff08\u5f00\u53d1\u4eba\u5458\u7528\uff09"}),(0,v.jsx)("pre",{className:"mt-3 p-4 bg-black/30 rounded-lg overflow-auto text-sm",children:JSON.stringify(a,null,2)})]})}),(0,v.jsx)(n.P.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.reload(),className:"mt-6 px-8 py-3 bg-gradient-to-r from-white/80 to-white/90 text-[#3a1c71] rounded-full font-medium hover:shadow-lg transition-all",style:{transform:"translateZ(0)",willChange:"transform"},children:"\u5237\u65b0\u9875\u9762"})]})},F=()=>(0,v.jsxs)(n.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"text-center mb-8 mt-10 max-w-4xl px-4",style:{...z,transform:"translateZ(0)",willChange:"opacity, transform"},children:[(0,v.jsxs)("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-6 text-shadow-lg leading-tight animate__animated animate__fadeInDown",children:["API"," ",(0,v.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200",children:"\u5408\u96c6"})]}),(0,v.jsx)("p",{className:"text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeInUp backdrop-blur-md bg-white/10 p-5 rounded-2xl shadow-lg border border-white/10",children:"\u6d4f\u89c8\u6211\u4eec\u4e30\u5bcc\u7684API\u96c6\u5408\uff0c\u6240\u6709API\u90fd\u6709\u8be6\u7ec6\u7684\u6587\u6863\u548c\u793a\u4f8b\u3002\u70b9\u51fb\u5361\u7247\u67e5\u770b\u8be6\u60c5\u3002"})]}),D=e=>{let{apiData:t}=e;return(0,v.jsx)(n.P.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-6 w-full max-w-7xl mx-auto px-4",initial:{opacity:0},animate:{opacity:1},layout:!0,transition:{type:"spring",stiffness:260,damping:30,layout:{duration:.3},staggerChildren:.1},style:{...z,transform:"translateZ(0)",willChange:"opacity"},children:t.map(((e,t)=>(0,v.jsx)(_,{api:e,index:t},e.id||t)))})},M=e=>{let{count:t}=e;return(0,v.jsx)("div",{className:"py-10",style:z,children:(0,v.jsx)(n.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"backdrop-blur-md bg-white/10 p-4 px-6 rounded-full shadow-lg border border-white/10",style:{transform:"translateZ(0)",willChange:"opacity"},children:(0,v.jsxs)("p",{className:"text-white/70 text-sm",children:["\u603b\u8ba1 ",t," \u4e2aAPI\u8d44\u6e90\u53ef\u7528"]})})})},O=()=>{const{apiData:e,loading:t,error:a,errorDetails:n}=i.useContext(s.Ay),[r,l]=(0,i.useState)([]);return(0,i.useEffect)((()=>{e&&e.length>0&&l([...e])}),[e]),t?(0,v.jsx)(C,{}):a?(0,v.jsx)(E,{error:a,errorDetails:n}):(0,v.jsxs)("div",{className:"w-full flex flex-col items-center",style:z,children:[(0,v.jsx)(F,{}),(0,v.jsx)(D,{apiData:r}),(0,v.jsx)(M,{count:r.length})]})}}}]);
//# sourceMappingURL=328.57476127.chunk.js.map