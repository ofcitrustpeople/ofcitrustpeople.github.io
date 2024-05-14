"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[6245],{6245:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var a=i(3396);const l=e=>((0,a.dD)("data-v-105be2b2"),e=e(),(0,a.Cn)(),e),r={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},n={class:"col col-12"},o=l((()=>(0,a._)("i",{class:"material-icons-outlined"},null,-1))),d=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),c={style:{height:"80vh"}},u={class:"h-100 pt-5"};function h(e,t,i,l,h,p){const f=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",s,[(0,a._)("div",n,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>p.Back&&p.Back(...e)),class:"btn btn-primary float-start",type:"button",style:{"margin-right":"25px"}},[o,(0,a.Uk)("Назад")]),(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>p.SaveToDB&&p.SaveToDB(...e)),class:"btn btn-primary float-start",type:"button"},[d,(0,a.Uk)("Сохранить")])])]),(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Wm)(f,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:l.columnDefs.value,rowData:l.rowData.value,defaultColDef:l.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:l.cellWasClicked,onGridReady:l.onGridReady,onFirstDataRendered:p.onFirstDataRendered,onFilterChanged:p.onFilterChanged,pagination:!0,paginationPageSize:l.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var p=i(6732),f=i(4870),m=i(6074),g=i(4495),v=i(5124),k={name:"App",components:{AgGridVue:p.n,ButtonCell:m.Z,ProfileHref:g.Z},setup(){const e=(0,f.iH)(null),t=(0,f.iH)(),i=60,l=i=>{e.value=i.api,t.value=i.columnApi},r=()=>{},s=(0,f.qj)({}),n=(0,f.qj)({value:[{maxWidth:300,field:"name1",headerName:"Фамилия"},{maxWidth:200,field:"name2",headerName:"Имя"},{maxWidth:230,field:"name3",headerName:"Отчество"},{maxWidth:250,field:"short_name",headerName:"Факультет"},{maxWidth:250,field:"dep",headerName:"Кафедра"},{maxWidth:250,field:"dolj",headerName:"Должность"},{field:"deg",headerName:"Степень, звание"},{field:"status",headerName:"Статус"}]}),o={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,a.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:n,rowData:s,defaultColDef:o,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:i,deleteRow:r}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadTempKIT(){try{const e=await v.Z.getTempSostav();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],console.log(e.data.bpi),this.loading=!1}catch(e){console.error("Error loading students data:",e)}},SaveToDB(){this.Back()},Back(){this.$router.push("/xlparse")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadTempKIT()}},y=i(89);const _=(0,y.Z)(k,[["render",h],["__scopeId","data-v-105be2b2"]]);var C=_},6074:function(e,t,i){i.d(t,{Z:function(){return u}});var a=i(3396);const l=e=>((0,a.dD)("data-v-e73962e4"),e=e(),(0,a.Cn)(),e),r={class:"krasivsk"},s=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function n(e,t,i,l,n,o){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>o.onClick&&o.onClick(...e)),class:"btn btn-primary btn-sm"},[s,(0,a.Uk)("Детали")])])}i(7658);var o={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/profiles/${this.params.data.prof_id}`)}}},d=i(89);const c=(0,d.Z)(o,[["render",n],["__scopeId","data-v-e73962e4"]]);var u=c},4495:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396),l=i(7139);const r=["href"];function s(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("a",{href:"#/directions?filterModel="+JSON.stringify({dir_code:{filterType:"text",type:"equals",filter:this.params.data.dir_code}})},(0,l.zw)(this.params.data.dir_code),9,r)}var n={props:["params"],computed:{},methods:{}},o=i(89);const d=(0,o.Z)(n,[["render",s],["__scopeId","data-v-5139e79a"]]);var c=d}}]);
//# sourceMappingURL=6245.d8c22f3a.js.map