"use strict";(self.webpackChunkmodsen_currency_tracker=self.webpackChunkmodsen_currency_tracker||[]).push([[470],{676:(e,t,r)=>{r.d(t,{Wx:()=>m,gE:()=>C,zx:()=>g});const i=r.p+"7568973855fa351b900e.svg",n=r.p+"aa6fa5b7d6a096597acf.svg",a=r.p+"15f8f7ed3ce26d810c1f.svg",s=r.p+"25c52698d8fc1872869c.svg",o=r.p+"8426b63f9741d9af88c4.svg",c=r.p+"a67a313cdb55c49ce292.svg",l=r.p+"ddcbe6e6306680d862e1.svg",d=r.p+"8f5640cec377a4428a07.svg",u=r.p+"85ecbdf958dc0db5bb0d.svg",h=r.p+"ea6742e4e4709cfe2a29.svg",p=r.p+"8b0fa5ad758b963b4720.svg",m={id:"USD",imgPath:a,title:"Commercial Dollar"},g=[{imgPath:i,title:"Bovespa Index",rateValue:"0.15%"},{imgPath:n,title:"IFIX",rateValue:"0.15%"}],C=[{id:"USD",imgPath:a,title:"Commercial Dollar"},{id:"ARS",imgPath:s,title:"Argentine Peso"},{id:"CAD",imgPath:o,title:"Canadian Dollar"},{id:"JPY",imgPath:c,title:"Yen"},{id:"AUD",imgPath:l,title:"Australian Dollar"},{id:"CNY",imgPath:d,title:"Yuan"},{id:"EUR",imgPath:u,title:"Euro"},{id:"BTC",imgPath:h,title:"Bitcoin"},{id:"LBP",imgPath:p,title:"Libra"}]},278:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var i=r(294),n=r(676),a=r(697),s=r.n(a);const o=r.p+"fe1b2f9d315e41ace5cb.svg";var c=r(394);const l=c.ZP.div`
  position: relative;
  max-width: 450px;
  width: 100%;

  @media (max-width: 500px) {
    max-width: 350px;
  }
`,d=c.ZP.div`
  display: flex;
  flex-direction: row;
  height: 65px;
  border-radius: 5px;
  background-color: #1b2028;
  margin: 25px 0 80px 0;
  gap: 20px;
`,u=c.ZP.input`
  height: 65px;
  width: 100%;
  padding-left: 20px;
  font-size: ${({theme:e})=>e.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  color: #9e9e9e;
  background-color: transparent;
  outline: none;
  border: none;
`,h=c.ZP.img`
  margin-right: 20px;
  align-self: center;
`,p=c.ZP.ul`
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.colors.darkGray};
  border-radius: 5px;
  z-index: 1;

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
`,m=c.ZP.li`
  padding: 10px 25px;
  background-color: #1b2028;
  border-bottom: 1px solid ${({theme:e})=>e.colors.darkGray};
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;
  color: #9e9e9e;

  &:hover {
    background-color: #303036;
  }
`;var g=r(893);class C extends i.Component{state={searchInputValue:""};handleInputCurrenciesSearch=e=>{const t=e.target.value.toLowerCase(),{currencies:r,setSearchCurrencies:i}=this.props;let n=[];""!==t.trim()&&(n=r.filter((e=>e.id.toLowerCase().includes(t)||e.title.toLowerCase().includes(t)))),i(n),this.setState({searchInputValue:e.target.value})};handleSearchCurrencyClick=e=>()=>{this.props.onCurrencySelection(e),this.setState({searchInputValue:""})};render(){const{placeholder:e,searchCurrencies:t}=this.props,{searchInputValue:r}=this.state;return(0,g.jsxs)(l,{children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(u,{placeholder:e,value:r,onChange:this.handleInputCurrenciesSearch}),(0,g.jsx)(h,{alt:"Search icon",height:"24px",src:o,width:"24px"})]}),r.length>0&&(0,g.jsx)(p,{children:0!==t.length?t.map((({id:e,title:t})=>(0,g.jsxs)(m,{onClick:this.handleSearchCurrencyClick(e),children:[t," (",e,")"]},e))):(0,g.jsx)(m,{children:"Not found"})})]})}}C.propTypes={placeholder:s().string.isRequired,currencies:s().array.isRequired,setSearchCurrencies:s().func.isRequired,searchCurrencies:s().array.isRequired,onCurrencySelection:s().func.isRequired};const x=C;var b=r(158),f=r.n(b);const k={center:[23.799660434222,53.67184676224526],style:"mapbox://styles/mapbox/streets-v11",zoom:10,attributionControl:!1},P=[{name:"Белагропромбанк",latitude:53.67184676224526,longitude:23.799660434222,currencies:["USD","EUR","ARS"]},{name:"Банк РРБ",latitude:53.6576601234156,longitude:23.78070085868956,currencies:["ARS","CAD"]},{name:"Беларусбанк",latitude:53.66491803830769,longitude:23.835104412134847,currencies:["CAD","BTC"]},{name:"МТБанк",latitude:53.680760142911986,longitude:23.841330712035308,currencies:["JPY","ARS"]},{name:"Белорусский народный банк",latitude:53.679430118964966,longitude:23.83459406189011,currencies:["AUD","EUR","CNY"]},{name:"МТБанк",latitude:53.672085532044704,longitude:23.86663701372747,currencies:["CNY","LBP"]},{name:"Белагропромбанк",latitude:53.648873819694145,longitude:23.83963952023741,currencies:["EUR","ARS"]},{name:"Беларусбанк",latitude:53.68830165840084,longitude:23.848723791113333,currencies:["BTC","JPY"]},{name:"Технобанк",latitude:53.70256399193914,longitude:23.833719433060732,currencies:["LBP","AUD"]},{name:"Банк Решение",latitude:53.69151518178308,longitude:23.835560815292048,currencies:["LBP","EUR"]},{name:"Дримкас бел",latitude:53.672332086702816,longitude:23.809766522992078,currencies:["BTC","CNY","JPY"]},{name:"Белинвестбанк",latitude:53.67156938536866,longitude:23.808908216180274,currencies:["EUR","BTC"]},{name:"Банк БелВЭБ",latitude:53.679972709293956,longitude:23.83099115310157,currencies:["CNY","LBP","EUR"]},{name:"Paritetbank",latitude:53.67742908406812,longitude:23.828140251972695,currencies:["AUD","LBP","CNY"]},{name:"Альфа-Банк",latitude:53.68298279511608,longitude:23.833206120753676,currencies:["JPY","BTC"]},{name:"Приорбанк",latitude:53.674349288141656,longitude:23.828222287169446,currencies:["CAD","EUR"]},{name:"Банк Дабрабыт",latitude:53.675709632241606,longitude:23.84162857547961,currencies:["ARS","CNY"]},{name:"Банк ВТБ",latitude:53.64480544846846,longitude:23.847179488440403,currencies:["USD","AUD","EUR"]},{name:"Приорбанк",latitude:53.65013681482404,longitude:23.85448209352428,currencies:["USD","JPY","ARS","BTC"]},{name:"Белорусский народный банк",latitude:53.6781846004123,longitude:23.83463147826866,currencies:["ARS","JPY"]}],S=c.ZP.div`
  width: 100%;
  height: 460px;
  margin-bottom: 200px;
`;class v extends i.Component{mapContainer=i.createRef();markers=[];componentDidMount(){f().accessToken="pk.eyJ1IjoibGt2YXNpa2wiLCJhIjoiY2xuMnpuajFhMGVyeDJxbXVvZ3p2bHVxcSJ9.ZIXSOffwNkeBV4FAtr8eXQ",this.map=new(f().Map)({container:this.mapContainer.current,...k})}componentWillUnmount(){this.map&&this.map.remove()}componentDidUpdate(e){e.banksCoords!==this.props.banksCoords&&(this.removeMarkers(),this.addMarkers())}addMarkers(){const{banksCoords:e}=this.props;e.forEach((e=>{const t=(new(f().Marker)).setLngLat([e.longitude,e.latitude]).setPopup((new(f().Popup)).setHTML(`<h4>${e.name}</h4>`)).addTo(this.map);this.markers.push(t)}))}removeMarkers(){this.markers.forEach((e=>{e.remove()})),this.markers=[]}render(){return(0,g.jsx)(S,{ref:this.mapContainer})}}v.propTypes={banksCoords:s().array};const y=v,w=c.ZP.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`,R=c.ZP.h2`
  color: ${({theme:e})=>e.textColor};
  font-size: ${({theme:e})=>e.fontSize.l};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 110px;
  text-align: center;

  @media (max-width: 650px) {
    padding: 0 20px;
  }
`;class D extends i.Component{state={currencies:[],searchCurrencies:[],banksCoords:[]};componentDidMount(){const e=n.gE.map((e=>({id:e.id,title:e.title})));this.setState({currencies:e})}setSearchCurrencies=e=>{this.setState({searchCurrencies:e})};handleCurrencySelection=e=>{const t=P.filter((t=>t.currencies.includes(e)));this.setState({banksCoords:t})};render(){const{currencies:e,searchCurrencies:t,banksCoords:r}=this.state;return(0,g.jsxs)(w,{children:[(0,g.jsx)(R,{children:"Search currency in the bank"}),(0,g.jsx)(x,{currencies:e,placeholder:"Сurrency search...",searchCurrencies:t,setSearchCurrencies:this.setSearchCurrencies,onCurrencySelection:this.handleCurrencySelection}),(0,g.jsx)(y,{banksCoords:r})]})}}const U=D;class A extends i.Component{render(){return(0,g.jsx)(U,{})}}const Y=A}}]);