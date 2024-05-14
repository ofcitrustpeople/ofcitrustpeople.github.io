"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[3310],{3310:function(e,t,i){i.r(t),i.d(t,{default:function(){return w}});var a=i(3396),l=i(9242);const r=e=>((0,a.dD)("data-v-21b2b8e4"),e=e(),(0,a.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},o={class:"col col-12"},d=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),u={class:"col col-6 float-end d-inline-flex align-items-center mb-2"},c=["disabled"],h=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"close",-1))),p={style:{height:"95vh"}},m={class:"h-100 pt-5"};function f(e,t,i,r,f,g){const v=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",o,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>g.navigateToAddCourse&&g.navigateToAddCourse(...e)),class:"btn btn-primary float-start",type:"button"},[d,(0,a.Uk)("Добавить курс")]),(0,a._)("div",u,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>g.clearFilters&&g.clearFilters(...e)),disabled:!f.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[h,(0,a.Uk)("Очистить фильтры")],8,c),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>f.quickFilterValue=e),id:"filter-text-box",onInput:t[3]||(t[3]=e=>r.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[l.nr,f.quickFilterValue]])])])]),(0,a._)("div",p,[(0,a._)("div",m,[(0,a.Wm)(v,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",includeHiddenColumnsInQuickFilter:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:g.onFirstDataRendered,onFilterChanged:g.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var g=i(6732),v=i(4870),b=i(6069),C=i(6805),k=i(5124),_={name:"App",components:{AgGridVue:g.n,ButtonCell:b.Z,StudentHref:C.Z},setup(){const e=(0,v.iH)(null),t=(0,v.iH)(),i=60,l=i=>{e.value=i.api,t.value=i.columnApi},r=()=>{},n=(0,v.qj)({}),s=(0,v.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",headerClass:"text-center",cellRenderer:"ButtonCell",cellRendererParams:{onClick:r,label:"View Details"},maxWidth:120,resizable:!1},{field:"course",headerName:"Курс",minWidth:250},{field:"group_number",headerName:"Группа",maxWidth:129},{field:"formatted_date_of_birth",filter:"agDateColumnFilter",filterParams:F,headerName:"Дата рождения",minWidth:170,hide:!0}]}),o={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:150};(0,a.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:s,rowData:n,defaultColDef:o,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:i,navigateToStudent:r}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadStudentsData(){try{const e=await k.Z.getAllCourses();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddCourse(){this.$router.push("/addCourse")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadStudentsData()}},F={comparator:(e,t)=>{var i=t;if(null==i)return-1;var a=i.split("/"),l=new Date(Number(a[2]),Number(a[1])-1,Number(a[0]));return e.getTime()===l.getTime()?0:l<e?-1:l>e?1:0}},D=i(89);const y=(0,D.Z)(_,[["render",f],["__scopeId","data-v-21b2b8e4"]]);var w=y},6069:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(3396);const l=e=>((0,a.dD)("data-v-1b3cee9c"),e=e(),(0,a.Cn)(),e),r={class:"krasivsk"},n=l((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function s(e,t,i,l,s,o){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>o.onClick&&o.onClick(...e)),class:"btn btn-primary btn-sm"},[n,(0,a.Uk)("Детали")])])}i(7658);var o={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/students/${this.params.data.student_id}`)}}},d=i(89);const u=(0,d.Z)(o,[["render",s],["__scopeId","data-v-1b3cee9c"]]);var c=u},6805:function(e,t,i){i.d(t,{Z:function(){return u}});var a=i(3396),l=i(7139);const r=["href"];function n(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("a",{href:"/students/"+this.params.data.student_id},(0,l.zw)(this.params.data.student_id),9,r)}var s={props:["params"],computed:{},methods:{}},o=i(89);const d=(0,o.Z)(s,[["render",n],["__scopeId","data-v-84d4269a"]]);var u=d}}]);
//# sourceMappingURL=3310.09630235.js.map