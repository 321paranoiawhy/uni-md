import{f as p,r as m,an as I,af as b,n as v,o as s,c as a,ao as h,a as G,_ as S,b as d}from"./entry.695f4977.js";import{u as x}from"./fetch.b6fba6da.js";const B=p({__name:"SignInWithGoogle",setup(c){const e=h(),o=m(),t=I(),l=b(),f=async n=>{var r,_,u,g;console.log(n,n.credential);const{data:i,pending:y,refresh:E,error:H,status:T}=await x("http://localhost:3002/uni-md/api/auth/google",{method:"post",body:{credential:n.credential}},"$1WirO7jS7a");console.log("token",(_=(r=i.value)==null?void 0:r.data)==null?void 0:_.token),(u=i.value)!=null&&u.data&&t.login((g=i.value)==null?void 0:g.data),console.log(l.getRoutes())};return v(()=>{google.accounts.id.initialize({client_id:e.public.GOOGLE_CLIENT_ID,callback:f,context:"signin"}),google.accounts.id.renderButton(o.value,{type:"standard",size:"large",text:"signin_with",theme:"filled_blue",shape:"pill",logo_alignment:"left",width:250}),google.accounts.id.prompt()}),(n,i)=>(s(),a("div",{id:"google-signin",ref_key:"googleSignInButton",ref:o},"Sign In With Google",512))}}),C=p({__name:"SignInWithGitHub",setup(c){const e=h();console.log(e);const o=`https://github.com/login/oauth/authorize?scope=user&client_id=${e.public.GITHUB_CLIENT_ID}&redirect_uri=${e.public.GITHUB_REDIRECT_URI}`;return(t,l)=>(s(),a("div",null,[G("a",{href:o},"Sign In With GitHub")]))}});const R={},W={class:"login"};function k(c,e){const o=B,t=C;return s(),a("div",W,[d(o),d(t)])}const w=S(R,[["render",k],["__scopeId","data-v-e2475118"]]);export{w as default};
