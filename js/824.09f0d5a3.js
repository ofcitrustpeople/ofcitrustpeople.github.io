"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[824],{5824:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var i=a(3396),s=a(9242),n=a(7139);const r=e=>((0,i.dD)("data-v-057ecff0"),e=e(),(0,i.Cn)(),e),l={class:"col col-xs-9 col-lg-12 mt-4 list"},c={class:"col col-12"},o={class:"mb-3 col col-12"},u=r((()=>(0,i._)("i",{class:"material-icons-outlined"},"add",-1))),d={class:"col col-3 float-end"},h={key:0,class:"table"},g=r((()=>(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})],-1))),_=r((()=>(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})],-1))),p=r((()=>(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})],-1))),P=r((()=>(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})],-1))),m=r((()=>(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})],-1))),y=r((()=>(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})],-1))),b=[g,_,p,P,m,y],k={key:1,class:"table"},v=r((()=>(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"ID группы"),(0,i._)("th",null,"Название направления"),(0,i._)("th",null,"Код направления")])],-1))),D=["onClick"],w=r((()=>(0,i._)("i",{class:"material-icons-outlined"},"visibility",-1))),f={class:"float-start"},C={class:"pagination"},Q=r((()=>(0,i._)("i",{class:"material-icons-outlined"},"chevron_left",-1))),$=[Q],x=["onClick"],A=r((()=>(0,i._)("i",{class:"material-icons-outlined"},"chevron_right",-1))),q=[A],R={class:"float-end"};function I(e,t,a,r,g,_){return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",c,[(0,i._)("div",o,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>_.navigateToAddDirection&&_.navigateToAddDirection(...e)),class:"btn btn-primary float-start",type:"button"},[u,(0,i.Uk)("Добавить направление")]),(0,i._)("div",d,[(0,i.wy)((0,i._)("input",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>g.searchQuery=e),onInput:t[2]||(t[2]=(...e)=>_.updateSearchQuery&&_.updateSearchQuery(...e)),placeholder:"Поиск..."},null,544),[[s.nr,g.searchQuery]])])]),g.loading?((0,i.wg)(),(0,i.iD)("table",h,[(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.studentsPerPage,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e},b)))),128))])])):((0,i.wg)(),(0,i.iD)("table",k,[v,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.paginatedDirections,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.dir_id},[(0,i._)("td",null,(0,n.zw)(e.dir_id),1),(0,i._)("td",null,(0,n.zw)(e.dir_name),1),(0,i._)("td",null,(0,n.zw)(e.dir_code),1),(0,i._)("td",null,[(0,i._)("button",{onClick:t=>_.viewDirectionDetail(e.dir_id),class:"btn btn-primary btn-sm"},[w,(0,i.Uk)("Детали")],8,D)])])))),128))])])),(0,i._)("nav",f,[(0,i._)("ul",C,[(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:1===g.currentPage}])},[(0,i._)("button",{onClick:t[3]||(t[3]=(...e)=>_.prevPage&&_.prevPage(...e)),class:"btn page-link btn-sm"},$)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.pageRange,(e=>((0,i.wg)(),(0,i.iD)("li",{class:(0,n.C_)(["page-item",{active:e==g.currentPage}]),key:e},[(0,i._)("button",{onClick:t=>_.changePage(e),class:"btn page-link nmbr btn-sm"},(0,n.zw)(e),9,x)],2)))),128)),(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:g.currentPage===_.totalPages}])},[(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>_.nextPage&&_.nextPage(...e)),class:"btn page-link btn-sm"},q)],2)])]),(0,i._)("div",R,[(0,i._)("button",{onClick:t[5]||(t[5]=e=>_.viewRightsDetail()),class:"btn btn-primary btn-sm"},"Права ролей")])])])}a(7658);var S=a(5124),z={data(){return{directions:[],currentPage:1,directionsPerPage:10,maxPageButtons:3,loading:!0,searchQuery:""}},computed:{totalPages(){const e=this.filterDirections();return Math.ceil(e.length/this.directionsPerPage)},paginatedDirections(){const e=(this.currentPage-1)*this.directionsPerPage,t=e+this.directionsPerPage,a=this.filterDirections();return a.slice(e,t)},pageRange(){const e=this.totalPages,t=this.currentPage,a=this.maxPageButtons,i="...";if(e<=a)return Array.from({length:e},((e,t)=>t+1));const s=Math.floor(a/2);let n=Math.max(1,t-s),r=Math.min(e,n+a-1);r-n+1<a&&(n=r-a+1);const l=[];n>1&&l.push(1,i);for(let c=n;c<=r;c++)l.push(c);return r<e&&l.push(i,e),l}},methods:{filterDirections(){const e=this.searchQuery.toLowerCase();return this.directions.filter((t=>String(t.dir_name).toLowerCase().includes(e)||String(t.dir_code).toLowerCase().includes(e)))},async loadDirectionsData(){try{const e=await S.Z.getAllDirections();this.directions=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error:",e)}},updateSearchQuery(){const e={page:1};""!==this.searchQuery.trim()&&(e.search=this.searchQuery),this.currentPage=1,this.$router.replace({query:e})},changePage(e){const t={...this.$route.query,page:e};""!==this.searchQuery.trim()&&(t.search=this.searchQuery),this.$router.replace({query:t})},prevPage(){this.currentPage>1&&this.changePage(this.currentPage-1)},nextPage(){this.currentPage<this.totalPages&&this.changePage(this.currentPage+1)},viewDirectionDetail(e){this.$router.push(`/directions/${e}`)},viewRightsDetail(){this.$router.push("/Rights/directions")},navigateToAddDirection(){this.$router.push("/addDirection")}},beforeRouteUpdate(e,t,a){this.searchQuery=e.query.search||"",this.currentPage=parseInt(e.query.page)||1,a()},created(){const e=this.$route.query;this.currentPage=parseInt(e.page)||1,this.searchQuery=e.search||"",this.loadDirectionsData()}},M=a(89);const U=(0,M.Z)(z,[["render",I],["__scopeId","data-v-057ecff0"]]);var H=U}}]);
//# sourceMappingURL=824.09f0d5a3.js.map