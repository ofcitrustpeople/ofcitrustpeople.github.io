"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[567],{2494:function(e,t,i){i.d(t,{Z:function(){return u}});var a=i(3396);const r=e=>((0,a.dD)("data-v-2054b495"),e=e(),(0,a.Cn)(),e),l={class:"krasivsk"},n=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function s(e,t,i,r,s,o){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>o.onClick&&o.onClick(...e)),class:"btn btn-primary btn-sm"},[n,(0,a.Uk)("Детали")])])}i(7658);var o={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/listeners/${this.params.data.list_id}`)}}},d=i(89);const c=(0,d.Z)(o,[["render",s],["__scopeId","data-v-2054b495"]]);var u=c},3488:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396),r=i(7139);const l=["href"];function n(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("a",{href:"#/lgroups?filterModel="+JSON.stringify({group_number:{filterType:"text",type:"contains",filter:this.params.data.group_number}})},(0,r.zw)(this.params.data.group_number),9,l)}var s={props:["params"],computed:{},methods:{}},o=i(89);const d=(0,o.Z)(s,[["render",n],["__scopeId","data-v-1dbeda58"]]);var c=d},4173:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396),r=i(7139);const l=["href"];function n(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("a",{href:"#/contracts?filterModel="+JSON.stringify({listener_full_name:{filterType:"text",type:"contains",filter:this.params.data.full_name}})},(0,r.zw)(this.params.data.full_name),9,l)}var s={props:["params"],computed:{},methods:{}},o=i(89);const d=(0,o.Z)(s,[["render",n],["__scopeId","data-v-331bb5ae"]]);var c=d},8567:function(e,t,i){i.r(t),i.d(t,{default:function(){return w}});var a=i(3396),r=i(9242);const l=e=>((0,a.dD)("data-v-4f284d07"),e=e(),(0,a.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},o={class:"mb-3 col col-12"},d=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),c={class:"col col-6 float-end d-inline-flex align-items-center mb-2"},u=["disabled"],f=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"close",-1))),h={style:{height:"50vh"}},p={class:"h-100 pt-5"};function m(e,t,i,l,m,g){const v=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>g.navigateToAddListener&&g.navigateToAddListener(...e)),class:"btn btn-primary float-start",type:"button"},[d,(0,a.Uk)("Добавить слушателя")]),(0,a._)("div",c,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>g.clearFilters&&g.clearFilters(...e)),disabled:!m.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[f,(0,a.Uk)("Очистить фильтры")],8,u),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>m.quickFilterValue=e),id:"filter-text-box",onInput:t[3]||(t[3]=e=>l.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[r.nr,m.quickFilterValue]])])])]),(0,a._)("div",h,[(0,a._)("div",p,[(0,a.Wm)(v,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:l.columnDefs.value,rowData:l.rowData.value,defaultColDef:l.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:l.cellWasClicked,onGridReady:l.onGridReady,onFirstDataRendered:g.onFirstDataRendered,onFilterChanged:g.onFilterChanged,pagination:!0,paginationPageSize:l.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var g=i(6732),v=i(4870),_=i(2494),b=i(3488),k=i(4173),y=i(5124),C={name:"App",components:{AgGridVue:g.n,ButtonCell:_.Z,ListenerHref:b.Z,ListenerHref2:k.Z},setup(){const e=(0,v.iH)(null),t=(0,v.iH)(),i=60,r=i=>{e.value=i.api,t.value=i.columnApi},l=()=>{},n=(0,v.qj)({}),s=(0,v.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",cellRenderer:"ButtonCell",cellRendererParams:{onClick:l,label:"View Details"},maxWidth:120,resizable:!1},{field:"full_name",headerName:"ФИО",cellRenderer:"ListenerHref2"},{field:"group_number",headerName:"Группа",cellRenderer:"ListenerHref"},{field:"people_count",headerName:"Желаемое количество человек",hide:!0},{field:"days_of_week",headerName:"Желаемые дни",hide:!0},{field:"phone_number",headerName:"Номер телефона",hide:!0},{field:"email",headerName:"Email",hide:!0},{field:"full_name2",headerName:"ФИО законного представителя",hide:!0}]}),o={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,a.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:r,columnDefs:s,rowData:n,defaultColDef:o,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:i,navigateToStudent:l}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadListenersData(){try{const e=await y.Z.getAllListeners();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddListener(){this.$router.push("/addListener")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadListenersData()}},F=i(89);const D=(0,F.Z)(C,[["render",m],["__scopeId","data-v-4f284d07"]]);var w=D}}]);
//# sourceMappingURL=567.691e0822.js.map