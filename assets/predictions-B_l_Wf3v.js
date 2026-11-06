import{B as e,O as t,P as n,b as r,j as i,p as a,r as o,w as s,z as c}from"./framework-D3f530qH.js";import{n as l,t as u}from"./twitchPredictions-rmuKQaNA.js";var d=r(`<style>
          html,
          body,
          #root {
            width: 100%;
            height: 100%;
            margin: 0;
            overflow: hidden;
            background: transparent;
          }

          .predictions-page {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 28px;
            box-sizing: border-box;
            pointer-events: none;
          }

          .predictions-debug {
            position: fixed;
            top: 12px;
            left: 12px;
            max-width: min(520px, calc(100vw - 24px));
            padding: 10px 12px;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.72);
            color: #fff;
            font: 12px/1.35 Consolas, monospace;
            pointer-events: auto;
            white-space: pre-wrap;
          }

          .predictions-error {
            color: #ff8f8f;
          }
        `),f=r(`<main class=predictions-page>`),p=r(`<div class=predictions-debug>`),m=r(`<div class="predictions-debug predictions-error">Error: channel query parameter is required.`);function h(e){return(e||``).trim().replace(/^#|^@/,``).toLowerCase()}function g(){let r=typeof window<`u`?new URLSearchParams(window.location.search):new URLSearchParams,g=h(r.get(`c`)||r.get(`channel`)),_=r.get(`debug`)===`true`,[v,y]=n(null),[b,x]=n(`idle`),[S,C]=n(``),[w,T]=n(Date.now()),E=i(()=>g?`ChatYX Predictions • ${g}`:`ChatYX Predictions`);return e(()=>{let e=window.setInterval(()=>T(Date.now()),1e3),t;g&&(t=u({channelLogin:g,onPrediction:y,onStateChange:x,onError:e=>C(e.message)}),t.start()),c(()=>{window.clearInterval(e),t?.stop()})}),[t(o,{get children(){return E()}}),d(),t(s,{when:g,get fallback(){return m()},get children(){return[(()=>{var e=f();return a(e,t(l,{get event(){return v()},get now(){return w()}})),e})(),t(s,{when:_,get children(){var e=p();return a(e,()=>JSON.stringify({channel:g,state:b(),error:S()||null,prediction:v()?{id:v()?.id,title:v()?.title,status:v()?.status,source:v()?.source,outcomes:v()?.outcomes.map(e=>({title:e.title,points:e.totalPoints,users:e.totalUsers}))}:null},null,2)),e}})]}})]}export{g as default};