"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[606],{6606:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i=a(3396);const l=e=>((0,i.dD)("data-v-740157c3"),e=e(),(0,i.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},o={class:"col col-12"},r={class:"mb-3 col col-12"},s=l((()=>(0,i._)("i",{class:"material-icons-outlined"},"add",-1))),d={class:"col col-3 float-end"},c={style:{height:"50vh"}},u={class:"h-100 pt-5"};function p(e,t,a,l,p,h){const f=(0,i.up)("ag-grid-vue");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",o,[(0,i._)("div",r,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>h.navigateToAddCW&&h.navigateToAddCW(...e)),class:"btn btn-primary float-start",type:"button"},[s,(0,i.Uk)("Добавить курсовую работу")]),(0,i._)("div",d,[(0,i._)("input",{class:"form-control",id:"filter-text-box",onInput:t[1]||(t[1]=e=>l.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,32)])])]),(0,i._)("div",c,[(0,i._)("div",u,[(0,i.Wm)(f,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:l.columnDefs.value,rowData:l.rowData.value,defaultColDef:l.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:l.cellWasClicked,onGridReady:l.onGridReady,onFirstDataRendered:h.onFirstDataRendered,onFilterChanged:h.onFilterChanged,pagination:!0,paginationPageSize:l.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}a(7658);var h=a(6732),f=a(4870),g=a(1146),m=a(5151),v=a(5124),C={name:"App",components:{AgGridVue:h.n,ButtonCell:g.Z,GroupHref:m.Z},setup(){const e=(0,f.iH)(null),t=(0,f.iH)(),a=60,l=a=>{e.value=a.api,t.value=a.columnApi},n=()=>{},o=(0,f.qj)({}),r=(0,f.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",cellRenderer:"ButtonCell",cellRendererParams:{onClick:n,label:"View Details"},minWidth:150,cellClass:"grid-cell-centered"},{field:"course_work_id",headerName:"ID",filter:"agSetColumnFilter"},{field:"course_work_kafedra",headerName:"Кафедра"},{field:"course_work_theme",headerName:"Тема"},{field:"full_name",headerName:"ФИО студента"}]}),s={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,i.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:r,rowData:o,defaultColDef:s,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:a,navigateToStudent:n}},methods:{async loadGroupsData(){try{const e=await v.Z.getAllCws();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddCW(){this.$router.push("/addCw")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e)}},onFilterChanged(){const e=this.gridApi.getFilterModel(),t={filterModel:JSON.stringify(e)};this.$router.push({query:t})}},created(){this.loadGroupsData()}},_=a(89);const D=(0,_.Z)(C,[["render",p],["__scopeId","data-v-740157c3"]]);var w=D},1146:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(3396);const l=e=>((0,i.dD)("data-v-a6a8a394"),e=e(),(0,i.Cn)(),e),n=l((()=>(0,i._)("i",{class:"material-icons-outlined"},"visibility",-1)));function o(e,t,a,l,o,r){return(0,i.wg)(),(0,i.iD)("button",{onClick:t[0]||(t[0]=(...e)=>r.onClick&&r.onClick(...e)),class:"btn btn-primary btn-sm"},[n,(0,i.Uk)("Детали")])}a(7658);var r={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/groups/${this.params.data.group_id}`)}}},s=a(89);const d=(0,s.Z)(r,[["render",o],["__scopeId","data-v-a6a8a394"]]);var c=d},5151:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(3396),l=a(7139);const n=["href"];function o(e,t,a,o,r,s){return(0,i.wg)(),(0,i.iD)("a",{href:"#/students?filterModel="+JSON.stringify({group_name:{filterType:"text",type:"contains",filter:this.params.data.group_number}})},(0,l.zw)(this.params.data.group_number),9,n)}var r={props:["params"],computed:{},methods:{}},s=a(89);const d=(0,s.Z)(r,[["render",o],["__scopeId","data-v-ab160c4e"]]);var c=d}}]);
//# sourceMappingURL=606.93834ffc.js.map