import{v as a,r as _,B as g,o as i,c,aq as r,a as u,_ as d,d as p,b as l}from"./entry.62ced46c.js";const f=a({__name:"SignInWithGoogle",setup(s){const n=r(),e=_(),o=t=>{console.log(t,t.credential)};return g(()=>{google.accounts.id.initialize({client_id:n.public.GOOGLE_CLIENT_ID,callback:o,context:"signin"}),google.accounts.id.renderButton(e.value,{type:"standard",size:"large",text:"signin_with",theme:"filled_blue",shape:"pill",logo_alignment:"left",width:250}),google.accounts.id.prompt()}),(t,b)=>(i(),c("div",{id:"google-signin",ref_key:"googleSignInButton",ref:e},"Sign In With Google",512))}}),h=a({__name:"SignInWithGitHub",setup(s){const n=r();console.log(n);const e=`https://github.com/login/oauth/authorize?scope=user&client_id=${n.public.GITHUB_CLIENT_ID}&redirect_uri=${n.public.GITHUB_REDIRECT_URI}`;return(o,t)=>(i(),c("div",null,[u("a",{href:e},"Sign In With GitHub")]))}}),m={};function I(s,n){const e=f,o=h;return i(),c("div",null,[p(" login "),l(e),l(o)])}const B=d(m,[["render",I]]);export{B as default};