"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[9931],{6069:function(e,t,l){l.d(t,{Z:function(){return c}});var a=l(3396);const i=e=>((0,a.dD)("data-v-1b3cee9c"),e=e(),(0,a.Cn)(),e),r={class:"krasivsk"},s=i((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function o(e,t,l,i,o,n){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>n.onClick&&n.onClick(...e)),class:"btn btn-primary btn-sm"},[s,(0,a.Uk)("Детали")])])}l(7658);var n={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/students/${this.params.data.student_id}`)}}},u=l(89);const d=(0,u.Z)(n,[["render",o],["__scopeId","data-v-1b3cee9c"]]);var c=d},6805:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(3396),i=l(7139);const r=["href"];function s(e,t,l,s,o,n){return(0,a.wg)(),(0,a.iD)("a",{href:"/students/"+this.params.data.student_id},(0,i.zw)(this.params.data.student_id),9,r)}var o={props:["params"],computed:{},methods:{}},n=l(89);const u=(0,n.Z)(o,[["render",s],["__scopeId","data-v-84d4269a"]]);var d=u},9931:function(e,t,l){l.r(t),l.d(t,{default:function(){return le}});var a=l(3396),i=l(7139),r=l(9242);const s=e=>((0,a.dD)("data-v-d39ed510"),e=e(),(0,a.Cn)(),e),o={key:0},n={class:"col col-xs-9 col-lg-12 list"},u={class:"col col-12"},d={class:"d-inline-flex"},c={key:0},p=s((()=>(0,a._)("h1",null," Список всех студентов ",-1))),h=[p],g={key:1},m={key:2},f={class:"col col-12"},_=s((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),b={class:"col col-6 float-end d-inline-flex align-items-center"},v=["disabled"],y=s((()=>(0,a._)("i",{class:"material-icons-outlined"},"close",-1))),k={class:"col col-6 float-start"},w={class:"form-group d-inline-flex align-items-center"},C=s((()=>(0,a._)("label",{class:"bigger form-label",for:"group_id"},"Фильтр по группе:",-1))),F=s((()=>(0,a._)("option",{selected:"selected",value:""}," Нет ",-1))),D=["value"],x={class:"col col-6 float-start"},S={class:"form-group d-inline-flex align-items-center"},A=s((()=>(0,a._)("label",{class:"bigger form-label",for:"subgroup_id"},"Фильтр по подгруппе:",-1))),V=s((()=>(0,a._)("option",{selected:"selected",value:""},"Нет",-1))),q=s((()=>(0,a._)("option",{value:"1"},"1",-1))),N=s((()=>(0,a._)("option",{value:"2"},"2",-1))),M=[V,q,N],R={style:{height:"90vh"}},z={class:"h-100 pt-5"},H={class:"container mt-3"},W={class:"table table-striped"},Z=s((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"#"),(0,a._)("th",{scope:"col"},"First Name"),(0,a._)("th",{scope:"col"},"Last Name"),(0,a._)("th",{scope:"col"},"Sum")])],-1))),T={scope:"row"};function G(e,t,l,s,p,V){const q=(0,a.up)("ag-grid-vue");return e.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",n,[(0,a._)("div",u,[(0,a._)("div",d,[p.spisok?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",c,h)),p.spisok?((0,a.wg)(),(0,a.iD)("h1",g," Список студентов "+(0,i.zw)(p.groupn)+" группы ",1)):(0,a.kq)("",!0),p.subg?((0,a.wg)(),(0,a.iD)("h1",m,", "+(0,i.zw)(p.subgn)+" подгруппы",1)):(0,a.kq)("",!0)]),(0,a._)("div",f,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>V.navigateToAddStudent&&V.navigateToAddStudent(...e)),class:"btn btn-primary float-start",type:"button"},[_,(0,a.Uk)("Добавить студента")]),(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>V.previewDocx&&V.previewDocx(...e)),class:"mx-2 btn btn-primary float-start",type:"button"},"Отчёт о формах обучения"),(0,a._)("div",b,[(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>V.clearFilters&&V.clearFilters(...e)),disabled:!p.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[y,(0,a.Uk)("Очистить фильтры")],8,v),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>p.quickFilterValue=e),id:"filter-text-box",onInput:t[4]||(t[4]=e=>s.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[r.nr,p.quickFilterValue]])])])]),(0,a._)("div",null,[(0,a._)("div",k,[(0,a._)("div",w,[C,(0,a.wy)((0,a._)("select",{class:"form-select",id:"group_id","onUpdate:modelValue":t[5]||(t[5]=e=>p.myValue=e),onChange:t[6]||(t[6]=e=>s.handleSelectChange(p.myValue))},[F,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.groups,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e.text},(0,i.zw)(e.text),9,D)))),128))],544),[[r.bM,p.myValue]])])]),(0,a._)("div",x,[(0,a._)("div",S,[A,(0,a.wy)((0,a._)("select",{class:"form-select",id:"subgroup_id","onUpdate:modelValue":t[7]||(t[7]=e=>p.myValue4=e),onChange:t[8]||(t[8]=e=>s.handleSelectChange2(p.myValue4))},M,544),[[r.bM,p.myValue4]])])])]),(0,a._)("div",R,[(0,a._)("div",z,[(0,a.Wm)(q,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:s.columnDefs.value,rowData:s.rowData.value,defaultColDef:s.defaultColDef,rowSelection:"multiple",animateRows:"true",includeHiddenColumnsInQuickFilter:"true",onCellClicked:s.cellWasClicked,onGridReady:s.onGridReady,onFirstDataRendered:V.onFirstDataRendered,onFilterChanged:V.onFilterChanged},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged"])])])]),(0,a._)("div",H,[(0,a._)("table",W,[(0,a.Uk)(" Список отстающих студентов "),Z,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.dataFromApi,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("th",T,(0,i.zw)(t),1),(0,a._)("td",null,(0,i.zw)(e.first_name),1),(0,a._)("td",null,(0,i.zw)(e.last_name),1),(0,a._)("td",null,(0,i.zw)(e.sum),1)])))),128))])])])]))}l(7658);var I=l(5708),O=l(6732),B=l(4870),J=l(6069),U=l(6805);const $=["href"];function j(e,t,l,r,s,o){return(0,a.wg)(),(0,a.iD)("a",{href:"#/courseworks?filterModel="+JSON.stringify({full_name:{filterType:"text",type:"equals",filter:this.params.data.full_name}})},(0,i.zw)(this.params.data.full_name),9,$)}var E={props:["params"],computed:{},methods:{}},Q=l(89);const P=(0,Q.Z)(E,[["render",j],["__scopeId","data-v-10d7501c"]]);var K=P,L=l(5124),Y=l(2483),X={name:"App",components:{AgGridVue:O.n,ButtonCell:J.Z,StudentHref:U.Z,StudentHref2:K,Form:I.l0,Field:I.gN,ErrorMessage:I.Bc},setup(){const e=(0,B.iH)(null),t=(0,B.iH)(),l=(0,B.iH)(null),i=(0,B.iH)(!1),r=(0,Y.yj)(),s=60,o=l=>{e.value=l.api,t.value=l.columnApi},n=()=>{},u=(0,B.qj)({}),d=(0,B.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",headerClass:"text-center",cellRenderer:"ButtonCell",cellRendererParams:{onClick:n,label:"View Details"},maxWidth:120,resizable:!1},{field:"full_name",headerName:"ФИО",minWidth:250,cellRenderer:"StudentHref2"},{field:"group_number",headerName:"Группа",maxWidth:129},{field:"subgroup",headerName:"Подгруппа",maxWidth:129},{field:"enrollment_order",headerName:"Приказ о зачислении",minWidth:200,hide:!0},{field:"formatted_enrolled_date",filter:"agDateColumnFilter",filterParams:ee,headerName:"Дата зачисления",minWidth:170,hide:!0},{field:"formatted_date_of_birth",filter:"agDateColumnFilter",filterParams:ee,headerName:"Дата рождения",minWidth:170,hide:!0}]}),c=t=>{const l=r.query.filterModel;if(l){const a=JSON.parse(l),i={subgroup:{type:"equals",filter:t}},r={...a,...i};console.log(r),e.value.setFilterModel(r)}else{const l={subgroup:{type:"equals",filter:t}};e.value.setFilterModel(l)}},p=async e=>{c(e)},h=t=>{const l=r.query.filterModel;if(l){const a=JSON.parse(l),i={group_number:{type:"equals",filter:t}},r={...a,...i};console.log(r),e.value.setFilterModel(r)}else{const l={group_number:{type:"equals",filter:t}};e.value.setFilterModel(l)}},g=async e=>{l.value=(await L.Z.getRetardsByGroupId(e)).data,i.value=!0,h(e)},m={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:150};(0,a.bv)((()=>{}));const f=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:o,columnDefs:d,rowData:u,defaultColDef:m,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:f,paginationPageSize:s,navigateToStudent:n,restoreFromHardCoded:h,restoreFromHardCoded2:c,handleSelectChange:g,handleSelectChange2:p,dataFromApi:l,dataLoaded:i}},data(){return{quickFilterValue:"",filters:!1,groups:["Нет"],myValue:"",myValue4:"",spisok:!1,subg:!1,groupn:null,subgn:null}},methods:{previewDocx(){window.open("https://docs.google.com/viewerng/viewer?url=http://195.93.252.168:5050/api/Students/Export")},async loadGroupsData(){try{const e=await L.Z.getGroupsAsKOSTIL();console.log("aaaa"),console.log(e),this.groups=Array.isArray(e.data)?e.data:[e.data]}catch(e){console.error("Error loading students data:",e)}},async loadStudentsData(){try{const e=await L.Z.getAllFormattedStudents();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddStudent(){this.groupn?this.$router.push("/addStudent/"+this.groupn):this.$router.push("/addStudent")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0,e.group_number&&(this.myValue=e.group_number.filter,this.groupn=e.group_number.filter,this.groupn&&(this.spisok=!0)),e.subgroup&&(this.myValue4=e.subgroup.filter,this.subgn=e.subgroup.filter,this.subgn&&(this.subg=!0))}const l=this.$route.query.quickFilter;if(l){const e=JSON.parse(l);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),l={};e&&(l.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0?(l.filterModel=JSON.stringify(t),this.filters=!0,t.group_number?(this.myValue=t.group_number.filter,this.groupn=t.group_number.filter,this.groupn&&(this.spisok=!0)):this.spisok=!1,t.subgroup?(this.myValue4=t.subgroup.filter,this.subgn=t.subgroup.filter,this.subgn&&(this.subg=!0)):this.subg=!1):(this.spisok=!1,this.subg=!1),this.$router.push({query:l})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.myValue="",this.myValue4="",this.subg=!1,this.spisok=!1,this.filters=!1}},created(){this.loadGroupsData(),this.loadStudentsData()}},ee={comparator:(e,t)=>{var l=t;if(null==l)return-1;var a=l.split("/"),i=new Date(Number(a[2]),Number(a[1])-1,Number(a[0]));return e.getTime()===i.getTime()?0:i<e?-1:i>e?1:0}};const te=(0,Q.Z)(X,[["render",G],["__scopeId","data-v-d39ed510"]]);var le=te}}]);
//# sourceMappingURL=9931.c40fd923.js.map