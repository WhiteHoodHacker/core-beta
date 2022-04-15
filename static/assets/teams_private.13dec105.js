import{m as i,s as d,b as o,g as r,f as n}from"./vendor.52debd16.js";import"./index.4c3687bd.js";import{g as c,a as u,b as p,c as h,d as g,e as f}from"./userscore.6a7c2714.js";import{c as w}from"./clipboard.bc8e2784.js";import"./math.4d82e9ba.js";window.Alpine=i;i.store("inviteToken","");i.data("TeamEditModal",()=>({success:null,error:null,initial:null,errors:[],init(){this.initial=d(this.$el.querySelector("form"))},async updateProfile(){let e=d(this.$el,this.initial,!0);e.fields=[];for(const s in e)if(s.match(/fields\[\d+\]/)){let t={},l=parseInt(s.slice(7,-1));t.field_id=l,t.value=e[s],e.fields.push(t),delete e[s]}let a=await o.pages.teams.updateTeamSettings(e);a.success?(this.success=!0,this.error=!1,setTimeout(()=>{this.success=null,this.error=null},3e3)):(this.success=!1,this.error=!0,Object.keys(a.errors).map(s=>{const t=a.errors[s];this.errors.push(t)}))}}));i.data("TeamCaptainModal",()=>({success:null,error:null,errors:[],async updateCaptain(){let e=d(this.$el,null,!0),a=await o.pages.teams.updateTeamSettings(e);a.success?window.location.reload():(this.success=!1,this.error=!0,Object.keys(a.errors).map(s=>{const t=a.errors[s];this.errors.push(t)}))}}));i.data("TeamInviteModal",()=>({copy(){w(this.$refs.link)}}));i.data("TeamDisbandModal",()=>({errors:[],async disbandTeam(){let e=await o.pages.teams.disbandTeam();e.success?window.location.reload():this.errors=e.errors[""]}}));i.data("CaptainMenu",()=>({captain:!1,editTeam(){this.teamEditModal=new r(document.getElementById("team-edit-modal")),this.teamEditModal.show()},chooseCaptain(){this.teamCaptainModal=new r(document.getElementById("team-captain-modal")),this.teamCaptainModal.show()},async inviteMembers(){const e=await o.pages.teams.getInviteToken();if(e.success){const a=e.data.code,s=`${window.location.origin}${o.config.urlRoot}/teams/invite?code=${a}`;document.querySelector("#team-invite-modal input[name=link]").value=s,this.$store.inviteToken=s,this.teamInviteModal=new r(document.getElementById("team-invite-modal")),this.teamInviteModal.show()}},disbandTeam(){this.teamDisbandModal=new r(document.getElementById("team-disband-modal")),this.teamDisbandModal.show()}}));i.data("TeamGraphs",()=>({solves:null,fails:null,awards:null,async init(){this.solves=await o.pages.teams.teamSolves("me"),this.fails=await o.pages.teams.teamFails("me"),this.awards=await o.pages.teams.teamAwards("me");let e=c(this.solves,this.fails),a=h("Solves Percentage",e);n(this.$refs.solvepercentage,a);let s=u(this.solves),t=g("Category Breakdown",s);n(this.$refs.categorybreakdown,t);let l=p(this.solves,this.awards),m=f("Score Graph",l);n(this.$refs.scoregraph,m)}}));i.start();
