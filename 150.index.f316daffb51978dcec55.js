"use strict";(self.webpackChunkmodsen_currency_tracker=self.webpackChunkmodsen_currency_tracker||[]).push([[150],{676:(e,t,r)=>{r.d(t,{Wx:()=>m,gE:()=>g,zx:()=>u});const a=r.p+"7568973855fa351b900e.svg",i=r.p+"aa6fa5b7d6a096597acf.svg",n=r.p+"15f8f7ed3ce26d810c1f.svg",o=r.p+"25c52698d8fc1872869c.svg",s=r.p+"8426b63f9741d9af88c4.svg",d=r.p+"a67a313cdb55c49ce292.svg",c=r.p+"ddcbe6e6306680d862e1.svg",l=r.p+"8f5640cec377a4428a07.svg",p=r.p+"85ecbdf958dc0db5bb0d.svg",h=r.p+"ea6742e4e4709cfe2a29.svg",x=r.p+"8b0fa5ad758b963b4720.svg",m={id:"USD",imgPath:n,title:"Commercial Dollar"},u=[{imgPath:a,title:"Bovespa Index",rateValue:"0.15%"},{imgPath:i,title:"IFIX",rateValue:"0.15%"}],g=[{id:"USD",imgPath:n,title:"Commercial Dollar"},{id:"ARS",imgPath:o,title:"Argentine Peso"},{id:"CAD",imgPath:s,title:"Canadian Dollar"},{id:"JPY",imgPath:d,title:"Yen"},{id:"AUD",imgPath:c,title:"Australian Dollar"},{id:"CNY",imgPath:l,title:"Yuan"},{id:"EUR",imgPath:p,title:"Euro"},{id:"BTC",imgPath:h,title:"Bitcoin"},{id:"LBP",imgPath:x,title:"Libra"}]},753:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(294),i=r(935);const n=r(861).Z.create(),o=async e=>{const t={method:"GET",url:"https://api.currencyapi.com/v3/latest",params:{apikey:"cur_live_dpsrCthUi3VEostV1BQj10XwbHELUgbaZqgwz9Xk",currencies:e.join(",")}},r=await(async({headers:e={},method:t,url:r,data:a,params:i})=>{const o={headers:e,method:t,url:r,data:a,params:i};return(await n(o)).data})(t);return r.data};var s=r(29),d=r(676),c=r(697),l=r.n(c),p=r(604),h=r(394);const x=h.ZP.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  height: fit-content;
  padding: 30px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.darkGray};
  background-color: ${({theme:e})=>e.colors.borderGray};
  margin-bottom: 56px;
  transition: ${({onClick:e})=>e?"transform 0.5s":"none"};

  &:hover {
    transform: ${({onClick:e})=>e?"scale(1.03)":"none"};
    cursor: ${({onClick:e})=>e?"pointer":"arrow"};
    box-shadow: ${({onClick:e})=>e?"0px 0px 25px 4px #84dd3770":""};
  }

  @media (max-width: 1200px) {
    max-width: unset;
  }

  @media (max-width: 500px) {
    height: 100px;
    padding: 0 0 0 30px;
  }
`,m=h.ZP.img`
  user-select: none;

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`,u=h.ZP.div`
  display: block;
`,g=h.ZP.p`
  color: #d9d9d9;
  font-size: ${({theme:e})=>e.fontSize.l};
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;

  @media (max-width: 500px) {
    font-size: ${({theme:e})=>e.fontSize.s};
    line-height: normal;
  }
`,b=h.ZP.span`
  color: #a7b2c3;
  font-size: ${({theme:e})=>e.fontSize.l};
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;

  @media (max-width: 500px) {
    font-size: ${({theme:e})=>e.fontSize.m};
    line-height: normal;
  }
`;var f=r(893);const y=({imgPath:e,title:t,rateValue:r,onClick:a})=>(0,f.jsxs)(x,{"data-cy":"currency-card",onClick:a,children:[(0,f.jsx)(m,{alt:"Currency icon",height:"80px",src:e,width:"80px"}),(0,f.jsxs)(u,{children:[(0,f.jsx)(g,{children:t}),(0,f.jsx)(b,{children:r})]})]});y.propTypes={imgPath:l().string.isRequired,title:l().string.isRequired,rateValue:l().string,onClick:l().func};const k=y,w=h.ZP.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 86px;
  width: 100%;
  max-width: 1140px;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }
`,P=h.ZP.p`
  max-width: 520px;
  flex-shrink: 0;
  color: ${({theme:e})=>e.textColor};
  font-size: ${({theme:e})=>e.fontSize.m};
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  border-bottom: 2px solid ${({theme:e})=>e.colors.darkGray};
  padding-bottom: 25px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    max-width: unset;
  }

  @media (max-width: 500px) {
    font-size: ${({theme:e})=>e.fontSize.m};
  }
`,j=h.ZP.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    justify-content: unset;
    flex-direction: column;
  }
`,v=({title:e,cardsArray:t,onClick:r,rates:a})=>{const i=(e,t)=>()=>{r({id:e,imgPath:t})};return(0,f.jsxs)(w,{children:[(0,f.jsx)(P,{children:e}),(0,f.jsx)(j,{children:t.map((e=>{const{id:t,imgPath:n,title:o,rateValue:s}=e;return(0,f.jsx)(k,{imgPath:n,rateValue:(0,p.Cl)(a,t,s),title:o,onClick:r&&i(t,n)},o)}))})]})};v.propTypes={title:l().string.isRequired,cardsArray:l().array.isRequired,onClick:l().func,rates:l().object};const C=v,$=r.p+"4e19a291fc0a2044d1c0.svg";var z=r(355),S=r(90);const Z=h.iv`
  color: #ffffff;
`,A=h.ZP.img``,R=h.ZP.label`
  ${Z}
  padding-left: 25px;
`,E=h.ZP.div`
  ${Z}
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  align-items: center;
  margin: 0 25px 15px 25px;
`,D=h.ZP.input`
  ${Z}
  background: transparent;
  font-size: ${({theme:e})=>e.fontSize.s};
  height: 50px;
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }
`,q=h.ZP.div`
  ${Z}
  margin: 10px 25px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #474747;
  gap: 20px;
`,G=(0,h.ZP)(q)`
  padding: 0;
`,V=h.ZP.span`
  ${Z}
  background: transparent;
  font-size: ${({theme:e})=>e.fontSize.s};
  text-align: center;
`,T=h.ZP.button`
  ${Z}
  height: 50px;
  margin: 25px;
  background: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSize.s};
  background-color: #3b71d3;

  &:hover {
    background-color: #6193ed;
  }
`,I=h.ZP.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.textColor};
  font-size: ${({theme:e})=>e.fontSize.s};
  cursor: pointer;

  &:hover {
    background-color: #303036;
  }
`,O=h.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: transparent;
`,U=h.ZP.img`
  transition: transform 0.3s;

  transform: ${e=>e.$isOpen?"rotate(180deg)":"rotate(360deg)"};
`,_=h.ZP.ul`
  position: absolute;
  top: 66.1%;
  width: 287px;
  left: 35px;
  list-style-type: none;
  height: 183px;
  overflow: auto;

  display: ${e=>e.$isOpen?"block":"none"};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.borderGray};
    border-right: 1px solid ${({theme:e})=>e.colors.darkGray};
    border-bottom: 1px solid ${({theme:e})=>e.colors.darkGray};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.colors.darkGray};

    &:hover {
      background-color: #303036;
    }
  }
`,B=h.ZP.li`
  padding: 10px 25px;
  background-color: ${({theme:e})=>e.colors.borderGray};
  border-bottom: 1px solid ${({theme:e})=>e.colors.darkGray};
  border-right: 1px solid ${({theme:e})=>e.colors.darkGray};
  border-left: 1px solid ${({theme:e})=>e.colors.darkGray};
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;

  &:hover {
    background-color: #303036;
  }
`,N=({selectedCurrency:e,setSelectedCurrency:t,setConvertedCurrencyValue:r})=>{const{id:i,imgPath:n}=e,[o,s]=(0,a.useState)(!1),c=e=>()=>{t({id:e.id,imgPath:e.imgPath,valueRate:e.valueRate}),s(!1),r("")};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(I,{"data-cy":"to-currency",onClick:()=>{s((e=>!e))},children:[(0,f.jsxs)(O,{children:[(0,f.jsx)(A,{alt:`${i} icon`,height:"40px",src:n,width:"40px"}),(0,f.jsx)(V,{children:i})]}),(0,f.jsx)(U,{$isOpen:o,alt:"Arrow icon",height:"20px",src:S,width:"20px"})]}),(0,f.jsx)(_,{$isOpen:o,children:d.gE.map((e=>{const{id:t,imgPath:r}=e;return(0,f.jsxs)(B,{"data-cy":`select-option-${t}`,onClick:c(e),children:[(0,f.jsx)(A,{alt:`${t} icon`,height:"40px",src:r,width:"40px"}),(0,f.jsx)(V,{children:t})]},t)}))})]})};N.propTypes={selectedCurrency:l().object.isRequired,setSelectedCurrency:l().func.isRequired,setConvertedCurrencyValue:l().func.isRequired};const F=N,Y=({setIsModalOpen:e,targetCurrency:t,exchangeAmount:r,setExchangeAmount:i,rates:n})=>{const{id:o,imgPath:s}=t,c=o,[l,h]=(0,a.useState)(""),[x,m]=(0,a.useState)(d.Wx);return(0,f.jsxs)(z.u_,{onClose:()=>{e(!1)},children:[(0,f.jsx)(R,{children:"Amount"}),(0,f.jsxs)(E,{children:[(0,f.jsx)(D,{"data-cy":"amount-input",min:"0",type:"number",value:r,onChange:e=>{const t=Number(e.target.value);i(t),h("")}}),(0,f.jsx)(A,{alt:"Convert icon",height:"35px",src:$,width:"35px"})]}),(0,f.jsx)(R,{children:"From:"}),(0,f.jsxs)(q,{children:[(0,f.jsx)(A,{alt:`${o} icon`,height:"40px",src:s,width:"40px"}),(0,f.jsx)(V,{children:o})]}),(0,f.jsx)(R,{children:"To:"}),(0,f.jsx)(G,{children:(0,f.jsx)(F,{selectedCurrency:x,setConvertedCurrencyValue:h,setSelectedCurrency:m})}),(0,f.jsx)(T,{"data-cy":"convert-button",onClick:()=>{const e=x.id,t=((e,t,r,a)=>{const i=(e*(a.data[r].value/a.data[t].value)).toFixed("5");return Number(i)})(r,c,e,n);h(Number(t))},children:"Convert"}),(0,f.jsx)(V,{"data-cy":"converted-result",children:""!==l&&(0,p.cP)(r,c,l,x.id)})]})};Y.propTypes={setIsModalOpen:l().func.isRequired,targetCurrency:l().object.isRequired,exchangeAmount:l().number.isRequired,setExchangeAmount:l().func.isRequired,rates:l().object};const L=Y;var M=r(221);const W=h.ZP.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`,X=Number("86400000"),J="currencyRates",Q=()=>{const[e,t]=(0,a.useState)({expirationDate:(new Date).getTime()+X,data:{}}),[r,n]=(0,a.useState)(!1),[c,l]=(0,a.useState)(0),[p,h]=(0,a.useState)(d.Wx);return(0,a.useEffect)((()=>{const e=(0,s.lJ)(J);(0,s.kI)(e)?t(e):(async()=>{const e=(new Date).getTime(),r=d.gE.map((e=>e.id)),a=await o(r);t({expirationDate:e+X,data:a}),(0,s.fv)("lastUpdated",e),(0,s.fv)(J,{expirationDate:e+X,data:a})})()}),[]),(0,f.jsxs)(W,{children:[(0,f.jsx)(C,{cardsArray:d.zx,title:"Stocks"}),(0,f.jsx)(C,{cardsArray:d.gE,rates:e,title:"Quotes",onClick:({id:t,imgPath:r})=>{0!==Object.keys(e.data).length&&(n((e=>!e)),l(e.data[t].value),h({id:t,imgPath:r}))}}),r&&(0,i.createPortal)((0,f.jsx)(L,{exchangeAmount:c,rates:e,setExchangeAmount:l,setIsModalOpen:n,targetCurrency:p}),document.getElementById("root")),r&&(0,f.jsx)(M.P,{})]})},H=()=>(0,f.jsx)(Q,{})}}]);