"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[852],{6852:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var n=a(3396),s=a(9242),r=a(7139);const l=t=>((0,n.dD)("data-v-199210a4"),t=t(),(0,n.Cn)(),t),i={class:"col col-xs-9 col-lg-12 mt-4 list"},c={class:"col col-12"},o={class:"mb-3 col col-12"},u=l((()=>(0,n._)("i",{class:"material-icons-outlined"},"add",-1))),d={class:"col col-3 float-end"},h={key:0,class:"table"},g=l((()=>(0,n._)("td",null,[(0,n._)("div",{class:"skeleton skeleton-animate"})],-1))),_=l((()=>(0,n._)("td",null,[(0,n._)("div",{class:"skeleton skeleton-animate"})],-1))),p=l((()=>(0,n._)("td",null,[(0,n._)("div",{class:"skeleton skeleton-animate"})],-1))),m=l((()=>(0,n._)("td",null,[(0,n._)("div",{class:"skeleton skeleton-animate"})],-1))),y=l((()=>(0,n._)("td",null,[(0,n._)("div",{class:"skeleton skeleton-animate"})],-1))),P=l((()=>(0,n._)("td",null,[(0,n._)("div",{class:"skeleton skeleton-animate"})],-1))),b=[g,_,p,m,y,P],k={key:1,class:"table"},v=l((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"ID договора"),(0,n._)("th",null,"ФИО слушателя"),(0,n._)("th",null,"ФИО плательщика"),(0,n._)("th",null,"Требуемая сумма"),(0,n._)("th",null,"Внесённая сумма"),(0,n._)("th",null,"Дата окончания срока")])],-1))),C=["onClick"],w=l((()=>(0,n._)("i",{class:"material-icons-outlined"},"visibility",-1))),f={class:"float-start"},D={class:"pagination"},Q=l((()=>(0,n._)("i",{class:"material-icons-outlined"},"chevron_left",-1))),x=[Q],q=["onClick"],S=l((()=>(0,n._)("i",{class:"material-icons-outlined"},"chevron_right",-1))),$=[S],z={class:"float-end"};function A(t,e,a,l,g,_){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",c,[(0,n._)("div",o,[(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>_.navigateToAddContract&&_.navigateToAddContract(...t)),class:"btn btn-primary float-start",type:"button"},[u,(0,n.Uk)("Добавить договор")]),(0,n._)("div",d,[(0,n.wy)((0,n._)("input",{class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>g.searchQuery=t),onInput:e[2]||(e[2]=(...t)=>_.updateSearchQuery&&_.updateSearchQuery(...t)),placeholder:"Поиск..."},null,544),[[s.nr,g.searchQuery]])])]),g.loading?((0,n.wg)(),(0,n.iD)("table",h,[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.contractsPerPage,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t},b)))),128))])])):((0,n.wg)(),(0,n.iD)("table",k,[v,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.paginatedContracts,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.contract_id},[(0,n._)("td",null,(0,r.zw)(t.contract_id),1),(0,n._)("td",null,(0,r.zw)(t.listener_full_name),1),(0,n._)("td",null,(0,r.zw)(t.payer_full_name),1),(0,n._)("td",null,(0,r.zw)(t.required_amount),1),(0,n._)("td",null,(0,r.zw)(t.deposited_amount),1),(0,n._)("td",null,(0,r.zw)(t.expiration_date),1),(0,n._)("td",null,[(0,n._)("button",{onClick:e=>_.viewContractDetail(t.contract_id),class:"btn btn-primary btn-sm"},[w,(0,n.Uk)("Детали")],8,C)])])))),128))])])),(0,n._)("nav",f,[(0,n._)("ul",D,[(0,n._)("li",{class:(0,r.C_)(["page-item",{disabled:1===g.currentPage}])},[(0,n._)("button",{onClick:e[3]||(e[3]=(...t)=>_.prevPage&&_.prevPage(...t)),class:"btn page-link btn-sm"},x)],2),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.pageRange,(t=>((0,n.wg)(),(0,n.iD)("li",{class:(0,r.C_)(["page-item",{active:t==g.currentPage}]),key:t},[(0,n._)("button",{onClick:e=>_.changePage(t),class:"btn page-link nmbr btn-sm"},(0,r.zw)(t),9,q)],2)))),128)),(0,n._)("li",{class:(0,r.C_)(["page-item",{disabled:g.currentPage===_.totalPages}])},[(0,n._)("button",{onClick:e[4]||(e[4]=(...t)=>_.nextPage&&_.nextPage(...t)),class:"btn page-link btn-sm"},$)],2)])]),(0,n._)("div",z,[(0,n._)("button",{onClick:e[5]||(e[5]=t=>_.viewRightsDetail()),class:"btn btn-primary btn-sm"},"Права ролей")])])])}a(7658);var R=a(5124),I={data(){return{contracts:[],currentPage:1,contractsPerPage:10,maxPageButtons:3,loading:!0,searchQuery:""}},computed:{totalPages(){const t=this.filterContracts();return Math.ceil(t.length/this.contractsPerPage)},paginatedContracts(){const t=(this.currentPage-1)*this.contractsPerPage,e=t+this.contractsPerPage,a=this.filterContracts();return a.slice(t,e)},pageRange(){const t=this.totalPages,e=this.currentPage,a=this.maxPageButtons,n="...";if(t<=a)return Array.from({length:t},((t,e)=>e+1));const s=Math.floor(a/2);let r=Math.max(1,e-s),l=Math.min(t,r+a-1);l-r+1<a&&(r=l-a+1);const i=[];r>1&&i.push(1,n);for(let c=r;c<=l;c++)i.push(c);return l<t&&i.push(n,t),i}},methods:{filterContracts(){const t=this.searchQuery.toLowerCase();return this.contracts.filter((e=>String(e.listener_full_name).toLowerCase().includes(t)||String(e.payer_full_name).toLowerCase().includes(t)||String(e.required_amount).includes(t)||String(e.deposited_amount).includes(t)||String(e.expiration_date).includes(t)))},async loadContractsData(){try{const t=await R.Z.getAllContracts();this.contracts=Array.isArray(t.data)?t.data:[t.data],this.loading=!1}catch(t){console.error("Error loading contracts data:",t)}},updateSearchQuery(){const t={page:1};""!==this.searchQuery.trim()&&(t.search=this.searchQuery),this.currentPage=1,this.$router.replace({query:t})},changePage(t){const e={...this.$route.query,page:t};""!==this.searchQuery.trim()&&(e.search=this.searchQuery),this.$router.replace({query:e})},prevPage(){this.currentPage>1&&this.changePage(this.currentPage-1)},nextPage(){this.currentPage<this.totalPages&&this.changePage(this.currentPage+1)},viewContractDetail(t){this.$router.push(`/contracts/${t}`)},viewRightsDetail(){this.$router.push("/Rights/contracts")},navigateToAddContract(){this.$router.push("/addContract")}},beforeRouteUpdate(t,e,a){this.searchQuery=t.query.search||"",this.currentPage=parseInt(t.query.page)||1,a()},created(){const t=this.$route.query;this.currentPage=parseInt(t.page)||1,this.searchQuery=t.search||"",this.loadContractsData()}},M=a(89);const U=(0,M.Z)(I,[["render",A],["__scopeId","data-v-199210a4"]]);var H=U}}]);
//# sourceMappingURL=852.3c52f6ab.js.map