"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[1375],{1375:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var a=i(3396);const r=e=>((0,a.dD)("data-v-1182168a"),e=e(),(0,a.Cn)(),e),l={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},n={class:"col col-12"},o=r((()=>(0,a._)("i",{class:"material-icons-outlined"},null,-1))),d=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),c={style:{height:"80vh"}},u={class:"h-100 pt-5"};function h(e,t,i,r,h,f){const p=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",s,[(0,a._)("div",n,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>f.Back&&f.Back(...e)),class:"btn btn-primary float-start",type:"button",style:{"margin-right":"25px"}},[o,(0,a.Uk)("Назад")]),(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>f.SaveToDB&&f.SaveToDB(...e)),class:"btn btn-primary float-start",type:"button"},[d,(0,a.Uk)("Сохранить")])])]),(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Wm)(p,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:f.onFirstDataRendered,onFilterChanged:f.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var f=i(6732),p=i(4870),m=i(6074),g=i(4495),v=i(5124),k={name:"App",components:{AgGridVue:f.n,ButtonCell:m.Z,ProfileHref:g.Z},setup(){const e=(0,p.iH)(null),t=(0,p.iH)(),i=60,r=i=>{e.value=i.api,t.value=i.columnApi},l=()=>{},s=(0,p.qj)({}),n=(0,p.qj)({value:[{maxWidth:150,field:"short_name",headerName:"Факультет"},{minWidth:400,field:"dep",headerName:"Кафедра"},{maxWidth:200,field:"napr",headerName:"Код направления"},{maxWidth:100,field:"kurs",headerName:"Курс"},{minWidth:400,field:"disc",headerName:"Дисциплина"},{maxWidth:150,field:"number_of_streams",headerName:"Потоки"},{maxWidth:150,field:"number_of_groups",headerName:"Группы"},{maxWidth:150,field:"lec_h",headerName:"Лекции, ч"},{minWidth:300,field:"fio",headerName:"ФИО"}]}),o={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,a.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:r,columnDefs:n,rowData:s,defaultColDef:o,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:i,deleteRow:l}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadTempKIT(){try{const e=await v.Z.getForShedLec();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],console.log(e.data.bpi),this.loading=!1}catch(e){console.error("Error loading students data:",e)}},SaveToDB(){this.Back()},Back(){this.$router.push("/xlparse")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadTempKIT()}},_=i(89);const y=(0,_.Z)(k,[["render",h],["__scopeId","data-v-1182168a"]]);var C=y},6074:function(e,t,i){i.d(t,{Z:function(){return u}});var a=i(3396);const r=e=>((0,a.dD)("data-v-e73962e4"),e=e(),(0,a.Cn)(),e),l={class:"krasivsk"},s=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function n(e,t,i,r,n,o){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>o.onClick&&o.onClick(...e)),class:"btn btn-primary btn-sm"},[s,(0,a.Uk)("Детали")])])}i(7658);var o={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/profiles/${this.params.data.prof_id}`)}}},d=i(89);const c=(0,d.Z)(o,[["render",n],["__scopeId","data-v-e73962e4"]]);var u=c},4495:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396),r=i(7139);const l=["href"];function s(e,t,i,s,n,o){return(0,a.wg)(),(0,a.iD)("a",{href:"#/directions?filterModel="+JSON.stringify({dir_code:{filterType:"text",type:"equals",filter:this.params.data.dir_code}})},(0,r.zw)(this.params.data.dir_code),9,l)}var n={props:["params"],computed:{},methods:{}},o=i(89);const d=(0,o.Z)(n,[["render",s],["__scopeId","data-v-5139e79a"]]);var c=d}}]);
//# sourceMappingURL=1375.3974fe8f.js.map