"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[488],{488:function(e,t,i){i.r(t),i.d(t,{default:function(){return j}});var a=i(3396),l=i(9242);const r=e=>((0,a.dD)("data-v-4e105c82"),e=e(),(0,a.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},d={class:"col col-12"},o=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),c={class:"col col-6 float-end d-inline-flex align-items-center mb-2"},u=["disabled"],h=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"close",-1))),m={style:{height:"95vh"}},p={class:"h-100 pt-5"};function f(e,t,i,r,f,g){const v=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",d,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>g.navigateToAddAudit&&g.navigateToAddAudit(...e)),class:"btn btn-primary float-start",type:"button"},[o,(0,a.Uk)("Добавить аудиторию")]),(0,a._)("div",c,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>g.clearFilters&&g.clearFilters(...e)),disabled:!f.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[h,(0,a.Uk)("Очистить фильтры")],8,u),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>f.quickFilterValue=e),id:"filter-text-box",onInput:t[3]||(t[3]=e=>r.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[l.nr,f.quickFilterValue]])])])]),(0,a._)("div",m,[(0,a._)("div",p,[(0,a.Wm)(v,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",includeHiddenColumnsInQuickFilter:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:g.onFirstDataRendered,onFilterChanged:g.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var g=i(6732),v=i(4870);const b=e=>((0,a.dD)("data-v-2bb24e40"),e=e(),(0,a.Cn)(),e),k={class:"krasivsk"},C=b((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function _(e,t,i,l,r,n){return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>n.onClick&&n.onClick(...e)),class:"btn btn-primary btn-sm"},[C,(0,a.Uk)("Выбрать")])])}var F={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/audits/${this.params.data.schedule_id}`)}}},y=i(89);const A=(0,y.Z)(F,[["render",_],["__scopeId","data-v-2bb24e40"]]);var D=A,w=i(7139);const x=["href"];function q(e,t,i,l,r,n){return(0,a.wg)(),(0,a.iD)("a",{href:"/schedule/"+this.params.data.schedule_id},(0,w.zw)(this.params.data.schedule_id),9,x)}var R={props:["params"],computed:{},methods:{}};const N=(0,y.Z)(R,[["render",q],["__scopeId","data-v-0690bd7e"]]);var W=N,S=i(5124),V={name:"App",components:{AgGridVue:g.n,ButtonCell:D,AuditHref:W},setup(){const e=(0,v.iH)(null),t=(0,v.iH)(),i=60,l=i=>{e.value=i.api,t.value=i.columnApi},r=()=>{},n=(0,v.qj)({}),s=(0,v.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",headerClass:"text-center",cellRenderer:"ButtonCell",cellRendererParams:{onClick:r,label:"View Details"},maxWidth:120,resizable:!1},{field:"number",headerName:"Аудитория",minWidth:50},{field:"full_name",headerName:"Преподаватель",minWidth:250},{field:"type",headerName:"Тип",maxWidth:129},{field:"count",headerName:"Вместимость",minWidth:129},{field:"subject_name",headerName:"Дисциплина",minWidth:200},{field:"dayofweek",headerName:"День недели",minWidth:50}]}),d={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:50};(0,a.bv)((()=>{}));const o=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:s,rowData:n,defaultColDef:d,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:o,paginationPageSize:i,navigate:r}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadAuditoriumData(){try{const e=await S.Z.getAllAudit();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error:",e)}},navigateToAddAudit(){this.$router.push("/addAudit")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadAuditoriumData()}};const z=(0,y.Z)(V,[["render",f],["__scopeId","data-v-4e105c82"]]);var j=z}}]);
//# sourceMappingURL=488.18410f75.js.map