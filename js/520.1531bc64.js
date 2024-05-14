"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[520],{5151:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396),l=i(7139);const r=["href"];function n(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("a",{href:"#/students?filterModel="+JSON.stringify({group_name:{filterType:"text",type:"contains",filter:this.params.data.group_number}})},(0,l.zw)(this.params.data.group_number),9,r)}var s={props:["params"],computed:{},methods:{}},o=i(89);const d=(0,o.Z)(s,[["render",n],["__scopeId","data-v-ab160c4e"]]);var c=d},8873:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396);const l=e=>((0,a.dD)("data-v-2e7f24ec"),e=e(),(0,a.Cn)(),e),r=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function n(e,t,i,l,n,s){return(0,a.wg)(),(0,a.iD)("button",{onClick:t[0]||(t[0]=(...e)=>s.onClick&&s.onClick(...e)),class:"btn btn-primary btn-sm"},[r,(0,a.Uk)("Детали")])}i(7658);var s={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/payers/${this.params.data.id}`)}}},o=i(89);const d=(0,o.Z)(s,[["render",n],["__scopeId","data-v-2e7f24ec"]]);var c=d},4520:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var a=i(3396),l=i(9242);const r=e=>((0,a.dD)("data-v-6b3ddd2e"),e=e(),(0,a.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},o={class:"mb-3 col col-12"},d=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),c={class:"col col-6 float-end d-inline-flex align-items-center mb-2"},u=["disabled"],h=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"close",-1))),p={style:{height:"50vh"}},f={class:"h-100 pt-5"};function m(e,t,i,r,m,g){const v=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>g.navigateToAddPayment&&g.navigateToAddPayment(...e)),class:"btn btn-primary float-start",type:"button"},[d,(0,a.Uk)("Добавить платёж")]),(0,a._)("div",c,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>g.clearFilters&&g.clearFilters(...e)),disabled:!m.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[h,(0,a.Uk)("Очистить фильтры")],8,u),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>m.quickFilterValue=e),id:"filter-text-box",onInput:t[3]||(t[3]=e=>r.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[l.nr,m.quickFilterValue]])])])]),(0,a._)("div",p,[(0,a._)("div",f,[(0,a.Wm)(v,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:g.onFirstDataRendered,onFilterChanged:g.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var g=i(6732),v=i(4870),y=i(8873),b=i(5151),k=i(5124),_={name:"App",components:{AgGridVue:g.n,ButtonCell:y.Z,GroupHref:b.Z},setup(){const e=(0,v.iH)(null),t=(0,v.iH)(),i=60,l=i=>{e.value=i.api,t.value=i.columnApi},r=()=>{},n=(0,v.qj)({}),s=(0,v.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",cellRenderer:"ButtonCell",cellRendererParams:{onClick:r,label:"View Details"},maxWidth:120,resizable:!1},{field:"contr_number",headerName:"Номер договора"},{field:"full_name",headerName:"ФИО слушателя"},{field:"full_name2",headerName:"ФИО законного представителя",hide:!0},{field:"deposited_amount",headerName:"Внёсенная сумма",hide:!0},{field:"expiration_date",headerName:"Просрочка",hide:!0}]}),o={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,a.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:s,rowData:n,defaultColDef:o,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:i,navigateToStudent:r}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadPayersData(){try{const e=await k.Z.getAllPayments();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddPayment(){this.$router.push("/AddPayment")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadPayersData()}},C=i(89);const F=(0,C.Z)(_,[["render",m],["__scopeId","data-v-6b3ddd2e"]]);var D=F}}]);
//# sourceMappingURL=520.1531bc64.js.map