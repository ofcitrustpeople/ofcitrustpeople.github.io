"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[642],{1146:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(3396);const r=e=>((0,i.dD)("data-v-a6a8a394"),e=e(),(0,i.Cn)(),e),n=r((()=>(0,i._)("i",{class:"material-icons-outlined"},"visibility",-1)));function l(e,t,a,r,l,o){return(0,i.wg)(),(0,i.iD)("button",{onClick:t[0]||(t[0]=(...e)=>o.onClick&&o.onClick(...e)),class:"btn btn-primary btn-sm"},[n,(0,i.Uk)("Детали")])}a(7658);var o={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/groups/${this.params.data.group_id}`)}}},d=a(89);const s=(0,d.Z)(o,[["render",l],["__scopeId","data-v-a6a8a394"]]);var c=s},5151:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(3396),r=a(7139);const n=["href"];function l(e,t,a,l,o,d){return(0,i.wg)(),(0,i.iD)("a",{href:"#/students?filterModel="+JSON.stringify({group_name:{filterType:"text",type:"contains",filter:this.params.data.group_number}})},(0,r.zw)(this.params.data.group_number),9,n)}var o={props:["params"],computed:{},methods:{}},d=a(89);const s=(0,d.Z)(o,[["render",l],["__scopeId","data-v-ab160c4e"]]);var c=s},4642:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var i=a(3396);const r=e=>((0,i.dD)("data-v-733f5a87"),e=e(),(0,i.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},l={class:"col col-12"},o={class:"mb-3 col col-12"},d=r((()=>(0,i._)("i",{class:"material-icons-outlined"},"add",-1))),s={class:"col col-3 float-end"},c={style:{height:"50vh"}},u={class:"h-100 pt-5"};function p(e,t,a,r,p,m){const g=(0,i.up)("ag-grid-vue");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",l,[(0,i._)("div",o,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>m.navigateToAddProgram&&m.navigateToAddProgram(...e)),class:"btn btn-primary float-start",type:"button"},[d,(0,i.Uk)("Добавить программу")]),(0,i._)("div",s,[(0,i._)("input",{class:"form-control",id:"filter-text-box",onInput:t[1]||(t[1]=e=>r.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,32)])])]),(0,i._)("div",c,[(0,i._)("div",u,[(0,i.Wm)(g,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:m.onFirstDataRendered,onFilterChanged:m.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}a(7658);var m=a(6732),g=a(4870),h=a(1146),f=a(5151),v=a(5124),C={name:"App",components:{AgGridVue:m.n,ButtonCell:h.Z,GroupHref:f.Z},setup(){const e=(0,g.iH)(null),t=(0,g.iH)(),a=60,r=a=>{e.value=a.api,t.value=a.columnApi},n=()=>{},l=(0,g.qj)({}),o=(0,g.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",cellRenderer:"ButtonCell",cellRendererParams:{onClick:n,label:"View Details"},minWidth:150,cellClass:"grid-cell-centered"},{field:"id",headerName:"ID",filter:"agSetColumnFilter"},{field:"required_amount",headerName:"Цена за обучение"},{field:"program_name",headerName:"Название программы"},{field:"hours",headerName:"Часы"},{field:"start_date",headerName:"Дата начала"},{field:"end_date",headerName:"Дата окончания"}]}),d={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,i.bv)((()=>{}));const s=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:r,columnDefs:o,rowData:l,defaultColDef:d,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:s,paginationPageSize:a,navigateToStudent:n}},methods:{async loadListenersData(){try{const e=await v.Z.getAllPrograms();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddProgram(){this.$router.push("/addProgram")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e)}},onFilterChanged(){const e=this.gridApi.getFilterModel(),t={filterModel:JSON.stringify(e)};this.$router.push({query:t})}},created(){this.loadListenersData()}},_=a(89);const D=(0,_.Z)(C,[["render",p],["__scopeId","data-v-733f5a87"]]);var b=D}}]);
//# sourceMappingURL=642.2fda19d4.js.map