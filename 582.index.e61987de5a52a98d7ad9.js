"use strict";(self.webpackChunkmodsen_currency_tracker=self.webpackChunkmodsen_currency_tracker||[]).push([[582],{676:(e,t,n)=>{n.d(t,{Wx:()=>g,gE:()=>C,zx:()=>x});const i=n.p+"7568973855fa351b900e.svg",r=n.p+"aa6fa5b7d6a096597acf.svg",a=n.p+"15f8f7ed3ce26d810c1f.svg",o=n.p+"25c52698d8fc1872869c.svg",s=n.p+"8426b63f9741d9af88c4.svg",c=n.p+"a67a313cdb55c49ce292.svg",l=n.p+"ddcbe6e6306680d862e1.svg",d=n.p+"8f5640cec377a4428a07.svg",h=n.p+"85ecbdf958dc0db5bb0d.svg",p=n.p+"ea6742e4e4709cfe2a29.svg",u=n.p+"8b0fa5ad758b963b4720.svg",g={id:"USD",imgPath:a,title:"Commercial Dollar"},x=[{imgPath:i,title:"Bovespa Index",rateValue:"0.15%"},{imgPath:r,title:"IFIX",rateValue:"0.15%"}],C=[{id:"USD",imgPath:a,title:"Commercial Dollar"},{id:"ARS",imgPath:o,title:"Argentine Peso"},{id:"CAD",imgPath:s,title:"Canadian Dollar"},{id:"JPY",imgPath:c,title:"Yen"},{id:"AUD",imgPath:l,title:"Australian Dollar"},{id:"CNY",imgPath:d,title:"Yuan"},{id:"EUR",imgPath:h,title:"Euro"},{id:"BTC",imgPath:p,title:"Bitcoin"},{id:"LBP",imgPath:u,title:"Libra"}]},371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var i=n(294),r=n(935),a=n(676),o=n(604),s=n(29),c=n(697),l=n.n(c),d=n(394);const h=d.ZP.select`
  background-color: transparent;
  max-width: 400px;
  color: ${({theme:e})=>e.textColor};
  font-size: ${({theme:e})=>e.fontSize.s};
  border: none;
  outline: none;
  padding-right: 25px;
  cursor: pointer;
  margin-bottom: 155px;
`,p=d.ZP.option`
  background-color: ${({theme:e})=>e.backgroundColor};

  &:hover {
    cursor: pointer;
  }
`;var u=n(893);class g extends i.Component{handleSelectChange=e=>{const t=a.gE.find((t=>t.title===e.target.value));this.props.onCurrencyChange(t)};render(){return(0,u.jsx)(h,{"data-cy":"currency-select",value:this.props.selectedCurrency.title,onChange:this.handleSelectChange,children:a.gE.map((e=>{const{id:t,title:n}=e;return(0,u.jsx)(p,{children:n},t)}))})}}g.propTypes={onCurrencyChange:l().func.isRequired,selectedCurrency:l().object.isRequired};const x=g,C=d.ZP.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  align-items: center;
  gap: 25px;
  margin-bottom: 50px;
  border: none;
  cursor: ${e=>e.$isChartCanBuild?"arrow":"pointer"};
  padding: 30px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.darkGray};
  background-color: ${({theme:e})=>e.colors.borderGray};
  transition: transform 0.5s;

  &:hover {
    transform: ${e=>e.$isChartCanBuild?"none":"scale(1.03)"};
    box-shadow: ${e=>e.$isChartCanBuild?"none":"0px 0px 25px 4px #84dd3770"};
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`,m=d.ZP.img`
  user-select: none;

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`,b=d.ZP.div`
  display: flex;
  flex-direction: column;
`,P=d.ZP.p`
  color: #d9d9d9;
  font-size: ${({theme:e})=>e.fontSize.l};
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;

  @media (max-width: 600px) {
    font-size: ${({theme:e})=>e.fontSize.m};
  }

  @media (max-width: 500px) {
    line-height: normal;
  }
`,f=d.ZP.span`
  color: #d9d9d9;
  font-size: ${({theme:e})=>e.fontSize.xs};
  font-style: normal;
  font-weight: 300;
  line-height: 49.371px;
  text-align: left;

  @media (max-width: 500px) {
    line-height: normal;
  }
`;class y extends i.Component{handleCurrencyInfoClick=()=>{this.props.isChartCanBuild||this.props.onClick()};render(){const{id:e,imgPath:t,title:n}=this.props.selectedCurrency;return(0,u.jsxs)(C,{$isChartCanBuild:this.props.isChartCanBuild,"data-cy":"currency-info",onClick:this.handleCurrencyInfoClick,children:[(0,u.jsx)(m,{alt:`${e} icon`,height:"80px",src:t,width:"80px"}),(0,u.jsxs)(b,{children:[(0,u.jsx)(P,{"data-cy":"currency-info-text",children:n}),(0,u.jsx)(f,{"data-cy":"currency-info-id",children:e})]})]})}}const k=y;y.propTypes={selectedCurrency:l().object.isRequired,onClick:l().func.isRequired,isChartCanBuild:l().bool.isRequired};var w=n(355);const v=d.ZP.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
`,j=d.ZP.button`
  background-color: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.textColor};
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: ${({theme:e})=>e.colors.darkGray};
  }
`,D=d.ZP.p`
  font-size: ${({theme:e})=>e.fontSize.m};
  color: ${({theme:e})=>e.textColor};
  margin: 10px 0;
`;class I extends i.Component{handleUpdateDate=e=>()=>{this.props.onChange(e)};render(){return(0,u.jsxs)(v,{"data-cy":"date-picker",children:[(0,u.jsx)(j,{"data-cy":"prev-date",onClick:this.handleUpdateDate("prev"),children:"<"}),(0,u.jsx)(D,{children:(0,o.p6)(this.props.currentDate)}),(0,u.jsx)(j,{"data-cy":"next-date",onClick:this.handleUpdateDate("next"),children:">"})]})}}I.propTypes={currentDate:l().instanceOf(Date).isRequired,onChange:l().func.isRequired};const B=I,$=d.ZP.label`
  padding-left: 25px;
  color: ${({theme:e})=>e.textColor};
`,S=d.ZP.div`
  color: ${({theme:e})=>e.textColor};
  display: flex;
  height: 50px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.darkGray};
  align-items: center;
  margin: 0 25px 15px 25px;
`,R=d.ZP.input`
  background: transparent;
  font-size: ${({theme:e})=>e.fontSize.s};
  height: 50px;
  color: ${({theme:e})=>e.textColor};
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }
`;class Z extends i.Component{handleInputChange=e=>{this.props.onChange(e)};render(){const{label:e,name:t,value:n,onBlur:i}=this.props;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)($,{children:e}),(0,u.jsx)(S,{children:(0,u.jsx)(R,{name:t,type:"number",value:n,onChange:this.handleInputChange,onBlur:i})})]})}}Z.propTypes={label:l().string.isRequired,name:l().string.isRequired,value:l().string.isRequired,onChange:l().func.isRequired,onBlur:l().func.isRequired};const M=Z,z=d.ZP.button`
  background-color: ${({theme:e})=>e.colors.darkGreen};
  color: ${({theme:e})=>e.textColor};
  height: 50px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSize.s};

  &:hover {
    background-color: ${({theme:e})=>e.colors.yellow};
  }
`,q=d.ZP.p`
  margin-bottom: 10px;
  align-self: center;
  width: 250px;
  text-align: center;
  color: ${({theme:e})=>e.colors.red};
`,A={openPriceInput:"0",highPriceInput:"0",lowPriceInput:"0",closePriceInput:"0"},T=1e6;class E extends i.Component{state={currentDate:new Date,inputValue:A};loadCachedData(e){const t=(0,o.p6)(e),n=(0,s.lJ)(this.props.id)[t];n?this.setState({inputValue:{openPriceInput:n.openPrice,highPriceInput:n.highPrice,lowPriceInput:n.lowPrice,closePriceInput:n.closePrice},isError:!1}):this.setState({inputValue:A})}componentDidMount(){this.loadCachedData(this.state.currentDate)}handleCloseModal=()=>{this.props.onClose()};handleUpdateDate=e=>{const{currentDate:t}=this.state,n="prev"===e?-1:1,i=new Date(t);i.setDate(i.getDate()+n),this.setState({currentDate:i}),this.loadCachedData(i)};handleInputChange=e=>{const{name:t,value:n}=e.target;this.setState((e=>({inputValue:{...e.inputValue,[t]:n},isError:!1})))};handleBlur=e=>{const{name:t,value:n}=e.target;(isNaN(n)||n<0||n>T||""===n.trim())&&this.setState((e=>({inputValue:{...e.inputValue,[t]:"0"},isError:!0})))};handleAddPriceButtonClick=()=>{const{currentDate:e,inputValue:t}=this.state;this.props.onAddPrice(e,t)};render(){const{currentDate:e,inputValue:t,isError:n}=this.state;return(0,u.jsxs)(w.u_,{onClose:this.handleCloseModal,children:[(0,u.jsx)(B,{currentDate:e,onChange:this.handleUpdateDate}),n&&(0,u.jsx)(q,{children:"The price must be more then 0 and less then 1000000."}),(0,u.jsx)(M,{label:"Open price",name:"openPriceInput",value:t.openPriceInput,onChange:this.handleInputChange,onBlur:this.handleBlur}),(0,u.jsx)(M,{label:"High price",name:"highPriceInput",value:t.highPriceInput,onChange:this.handleInputChange,onBlur:this.handleBlur}),(0,u.jsx)(M,{label:"Low price",name:"lowPriceInput",value:t.lowPriceInput,onChange:this.handleInputChange,onBlur:this.handleBlur}),(0,u.jsx)(M,{label:"Close price",name:"closePriceInput",value:t.closePriceInput,onChange:this.handleInputChange,onBlur:this.handleBlur}),(0,u.jsx)(z,{"data-cy":"add-price-button",onClick:this.handleAddPriceButtonClick,children:"Add Price"})]})}}E.propTypes={id:l().string.isRequired,onClose:l().func.isRequired,onAddPrice:l().func.isRequired};const O=E,V=e=>e.map(((e,t,n)=>0===t||n[t-1].openPrice<e.closePrice?"#16C782":"#EA3943"));var U=n(261);const N={type:"bar",parsing:{xAxisKey:"x",yAxisKey:"s"},scales:{x:{title:{display:!0,text:"Date"},grid:{color:"#474747",borderWidth:1},ticks:{autoSkip:!0,maxTicksLimit:10,maxRotation:0,minRotation:0}},y:{title:{display:!0,text:"Values"},grid:{color:"#474747",borderWidth:1},beginAtZero:!0,grace:10}},plugins:{tooltip:{callbacks:{label:e=>{const t=e.dataset.data[e.dataIndex];return`Open: ${t.o},  High: ${t.h}, Low: ${t.l}, Close: ${t.c}`}}},legend:{display:!1}}},G={id:"candlestick",beforeDatasetsDraw(e){const{ctx:t,data:n,scales:{y:i}}=e;t.save(),t.lineWidth=2,n.datasets[0].data.forEach(((r,a)=>{const o=n.datasets[0].borderColor[a];t.strokeStyle=o,t.beginPath(),t.moveTo(e.getDatasetMeta(0).data[a].x,e.getDatasetMeta(0).data[a].y),t.lineTo(e.getDatasetMeta(0).data[a].x,i.getPixelForValue(n.datasets[0].data[a].h)),t.stroke(),t.beginPath(),t.moveTo(e.getDatasetMeta(0).data[a].x,e.getDatasetMeta(0).data[a].y),t.lineTo(e.getDatasetMeta(0).data[a].x,i.getPixelForValue(n.datasets[0].data[a].l)),t.stroke()}))}},J=d.ZP.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`,L=d.ZP.canvas`
  min-width: 840px;
  min-height: 540px;
`;class W extends i.Component{chartRef=i.createRef();chart=null;createChart(e,t){const n=this.chartRef.current.getContext("2d"),i={labels:Object.keys(e),datasets:[{backgroundColor:t,borderColor:t,data:Object.keys(e).map((t=>{const n=e[t];return{x:t,o:n.openPrice,h:n.highPrice,l:n.lowPrice,c:n.closePrice,s:[n.openPrice,n.closePrice]}}))}]};this.chart&&this.chart.destroy(),this.chart=new U.kL(n,{type:"bar",data:i,options:N,plugins:[G]})}componentDidMount(){const{id:e}=this.props,t=(0,s.lJ)(e),n=V(Object.values(t));this.createChart(t,n)}componentDidUpdate(e){if(e.id!==this.props.id){const e=(0,s.lJ)(this.props.id),t=V(Object.values(e));this.createChart(e,t)}}render(){return(0,u.jsx)(J,{children:(0,u.jsx)(L,{ref:this.chartRef})})}}W.propTypes={id:l().string.isRequired};const _=W;const F=new class{constructor(){this.observers=[]}subscribe(e){this.observers.push(e)}unsubscribe(e){this.observers=this.observers.filter((t=>t!==e))}notifySubscribers(){this.observers.forEach((e=>{e.update()}))}},Y=d.ZP.span`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${e=>e.color};
  text-align: center;
  transition: transform 0.3s ease-in-out;
  color: ${({theme:e})=>e.textColor};
  z-index: 1;
  padding: 15px 0;
`;class H extends i.Component{render(){const{color:e,message:t}=this.props;return(0,u.jsx)(Y,{color:e,"data-cy":"notification",children:t})}}H.propTypes={color:l().string.isRequired,message:l().string.isRequired};const K=H,X="#EA3943",Q="#16C782";var ee=n(221);const te=d.ZP.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ne=d.ZP.section`
  width: 100%;
  max-width: 1140px;
  margin-bottom: 50px;
  padding: 0 30px;
`,ie=d.ZP.div`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`,re=d.ZP.button`
  width: 100%;
  max-width: 230px;
  background-color: ${({theme:e})=>e.colors.darkGreen};
  color: ${({theme:e})=>e.textColor};
  height: 50px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSize.s};

  &:hover {
    background-color: ${({theme:e})=>e.colors.yellow};
  }

  @media (max-width: 500px) {
    margin: 0 0 20px 0;
  }
`;class ae extends i.Component{state={selectedCurrency:a.Wx,isModalOpen:!1,isChartCanBuild:!1,showNotification:!1,notification:{message:"",backgroundColor:""},showChart:!1};update(){this.setState({showNotification:!0}),setTimeout((()=>{this.setState({showNotification:!1})}),3e3)}componentDidMount(){F.subscribe(this),this.checkChartBuildStatus()}componentWillUnmount(){F.unsubscribe(this)}handleCurrencyChange=e=>{this.setState({showChart:!1,selectedCurrency:e},(()=>{this.checkChartBuildStatus()}))};handleOpenModal=()=>{this.setState({isModalOpen:!0})};handleCloseModal=()=>{this.setState({isModalOpen:!1})};handleAddPrice=(e,t)=>{const n=(0,o.p6)(e),i=this.state.selectedCurrency.id,r=(0,s.lJ)(i);if(t.highPriceInput<t.lowPriceInput||t.highPriceInput<t.openPriceInput||t.highPriceInput<t.closePriceInput||t.lowPriceInput>t.openPriceInput||t.lowPriceInput>t.closePriceInput)return this.setState({notification:{message:"The high price value cannot be less than the low.",backgroundColor:X}}),void F.notifySubscribers();r[n]={openPrice:t.openPriceInput,highPrice:t.highPriceInput,lowPrice:t.lowPriceInput,closePrice:t.closePriceInput},(0,s.fv)(i,r),this.checkChartBuildStatus()};handleBuildChartButtonClick=()=>{this.setState({showChart:!0})};handleClearChartDataButtonClick=()=>{this.setState({showChart:!1}),(0,s.TC)(this.state.selectedCurrency.id),this.checkChartBuildStatus()};checkChartBuildStatus(){const e=this.state.selectedCurrency.id,t=(0,s.lJ)(e);Object.keys(t).length>=30?(this.handleCloseModal(),this.setState({notification:{message:"The chart can be successfully built!",backgroundColor:Q},isChartCanBuild:!0},(()=>{F.notifySubscribers()}))):this.setState({isChartCanBuild:!1})}render(){const{selectedCurrency:e,isChartCanBuild:t,isModalOpen:n,showNotification:i,notification:a,showChart:o}=this.state;return(0,u.jsxs)(te,{children:[(0,u.jsxs)(ne,{children:[(0,u.jsx)(x,{selectedCurrency:e,onCurrencyChange:this.handleCurrencyChange}),(0,u.jsx)(k,{isChartCanBuild:t,selectedCurrency:e,onClick:this.handleOpenModal}),t&&(0,u.jsxs)(ie,{children:[(0,u.jsx)(re,{"data-cy":"build-chart-button",onClick:this.handleBuildChartButtonClick,children:"Build chart"}),(0,u.jsx)(re,{"data-cy":"clear-chart-data-button",onClick:this.handleClearChartDataButtonClick,children:"Clear chart data"})]})]}),o&&(0,u.jsx)(ne,{children:(0,u.jsx)(_,{id:e.id})}),n&&r.createPortal((0,u.jsx)(O,{id:e.id,onAddPrice:this.handleAddPrice,onClose:this.handleCloseModal}),document.getElementById("root")),n&&(0,u.jsx)(ee.P,{}),i&&r.createPortal((0,u.jsx)(K,{color:a.backgroundColor,message:a.message}),document.getElementById("root"))]})}}const oe=ae;class se extends i.Component{render(){return(0,u.jsx)(oe,{})}}const ce=se}}]);