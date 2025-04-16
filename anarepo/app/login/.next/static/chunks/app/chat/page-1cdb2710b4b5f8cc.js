(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{551:(e,r,t)=>{Promise.resolve().then(t.bind(t,6608))},6608:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(5155),a=t(6545),l=t(2115),i=t(8657);function o(){let[e,r]=(0,l.useState)([]),[t,a]=(0,l.useState)(""),[o,d]=(0,l.useState)(!1),[c,p]=(0,l.useState)(""),x=(0,l.useRef)(null),h=()=>{var e;null==(e=x.current)||e.scrollIntoView({behavior:"smooth"})};(0,l.useEffect)(()=>{h()},[e]);let u=async s=>{if(s.preventDefault(),!t.trim())return;let l=t.trim();a(""),r(e=>[...e,{role:"user",parts:[{text:l}]}]),d(!0);try{let t=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:l,repoUrl:c,chatHistory:e})});if(!t.ok)throw Error("Failed to get response");let s=await t.json();r(e=>[...e,{role:"assistant",parts:[{text:s.response}]}])}catch(e){console.error("Chat error:",e),r(e=>[...e,{role:"assistant",parts:[{text:"I apologize, but I encountered an error processing your request. Please try again."}]}])}finally{d(!1)}};return(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900",children:[(0,s.jsx)(i.A,{}),(0,s.jsx)("main",{className:"pt-20 pb-16 px-4 sm:px-6 lg:px-8 h-screen",children:(0,s.jsx)("div",{className:"max-w-4xl mx-auto h-[calc(100vh-8rem)]",children:(0,s.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm h-full flex flex-col",children:[(0,s.jsx)("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center",children:(0,s.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Rapy"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Your AI Repository Analysis Assistant"})]})]})}),(0,s.jsx)("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:(0,s.jsx)("input",{type:"text",placeholder:"Enter GitHub repository URL (optional)",value:c,onChange:e=>p(e.target.value),className:"w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"})}),(0,s.jsxs)("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[(0,s.jsx)(n,{type:"assistant",content:"Hi! I'm Rapy, your AI assistant for evaluating GitHub repositories. How can I help you today?"}),(0,s.jsx)(n,{type:"assistant",content:"You can ask me questions like: • What are the most active React state management libraries? • Can you analyze the community support for a specific Python library? • How does this repository compare to ones we looked at before?"}),e.map((e,r)=>(0,s.jsx)(n,{type:e.role,content:e.parts[0].text},r)),o&&(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"animate-pulse text-purple-600 dark:text-purple-400",children:"Thinking..."})}),(0,s.jsx)("div",{ref:x})]}),(0,s.jsx)("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:(0,s.jsxs)("form",{className:"flex gap-2",onSubmit:u,children:[(0,s.jsx)("input",{type:"text",placeholder:"Type your message...",value:t,onChange:e=>a(e.target.value),className:"flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500",disabled:o}),(0,s.jsxs)("button",{type:"submit",className:"bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:o||!t.trim(),children:[(0,s.jsx)("span",{children:"Send"}),(0,s.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})]})})]})})})]})}function n(e){let{type:r,content:t}=e;return(0,s.jsx)(a.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex ".concat("user"===r?"justify-end":"justify-start"),children:(0,s.jsx)("div",{className:"max-w-[80%] rounded-lg px-4 py-2 ".concat("user"===r?"bg-purple-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"),children:(0,s.jsx)("p",{className:"whitespace-pre-wrap",children:t})})})}},8657:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});var s=t(5155),a=t(6874),l=t.n(a),i=t(6545);function o(){return(0,s.jsx)("nav",{className:"fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-purple-100 dark:border-purple-900",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex justify-between h-16",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)(l(),{href:"/",className:"flex items-center",children:(0,s.jsx)(i.P.div,{whileHover:{scale:1.05},className:"text-2xl font-bold text-purple-600 dark:text-purple-400",children:"ANAREPO"})})}),(0,s.jsxs)("div",{className:"hidden sm:flex items-center space-x-8",children:[(0,s.jsx)(n,{href:"/",children:"Home"}),(0,s.jsx)(n,{href:"/problem",children:"Problem"}),(0,s.jsx)(n,{href:"/solution",children:"Solution"}),(0,s.jsx)(n,{href:"/need",children:"Need for Rapy"}),(0,s.jsx)(n,{href:"/chat",children:"Rapy AI"}),(0,s.jsx)(n,{href:"/login",className:"bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors",children:"Login"})]})]})})})}function n(e){let{href:r,children:t,className:a=""}=e;return(0,s.jsx)(l(),{href:r,children:(0,s.jsx)(i.P.span,{whileHover:{y:-2},className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ".concat(a),children:t})})}}},e=>{var r=r=>e(e.s=r);e.O(0,[545,874,441,684,358],()=>r(551)),_N_E=e.O()}]);