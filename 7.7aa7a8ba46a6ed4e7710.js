(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9RCi":function(t,e,a){"use strict";a.r(e),a.d(e,"StateModule",function(){return M});var s=a("ofXK"),i=a("YUcS"),n=a("9i+i"),o=a("1OXg"),c=a("By0Q"),r=a("tyNb"),l=a("XNiG"),b=a("1G5W"),u=a("TYc0"),d=a("fXoL"),p=a("eJHD"),h=a("RJTb"),f=a("RZa/"),S=a("XiUz"),m=a("kmnG"),v=a("d3UM"),g=a("FKr1"),y=a("4QAB"),w=a("OLMq");function O(t,e){if(1&t&&(d.Rb(0,"mat-option",6),d.uc(1),d.Qb()),2&t){const t=e.$implicit;d.ic("value",t),d.Bb(1),d.wc(" ",t.name," ")}}function C(t,e){1&t&&(d.Pb(0),d.Nb(1,"app-statistics"),d.Nb(2,"app-time-selection"),d.Ob())}const R=[{path:"",component:(()=>{class t{constructor(t,e,a){this.store=t,this.api=e,this.snack=a,this.destroy$=new l.a,this.states=[]}ngOnInit(){this.store.setAreaTypeSelected(u.a.State),this.api.getStateList().pipe(Object(b.a)(this.destroy$)).subscribe(t=>{this.states=t,void 0===this.stateSelected&&this.states.length>0&&this.setSelectedState(this.states[0])},()=>{this.snack.show("Could not fetch states")}),this.store.getStateSelected$().subscribe(t=>{this.stateSelected=t})}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}setSelectedState(t){this.store.setStateSelected(t)}compareState(t,e){return void 0!==t&&void 0!==e&&t.id===e.id}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(p.a),d.Mb(h.a),d.Mb(f.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-state"]],decls:8,vars:5,consts:[["fxLayout","column","fxLayoutGap","10px","fxLayoutAlign","center center"],["appearance","outline",1,"state-selection"],["aria-label","State selection","role","select",3,"value","compareWith","valueChange","selectionChange"],["aria-label","No state selected","role","option",3,"value"],["aria-label","Selected state","role","option",3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Selected state","role","option",3,"value"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"mat-form-field",1),d.Rb(2,"mat-label"),d.uc(3,"State"),d.Qb(),d.Rb(4,"mat-select",2),d.Zb("valueChange",function(t){return e.stateSelected=t})("selectionChange",function(t){return e.setSelectedState(t.value)}),d.Nb(5,"mat-option",3),d.tc(6,O,2,2,"mat-option",4),d.Qb(),d.Qb(),d.tc(7,C,3,0,"ng-container",5),d.Qb()),2&t&&(d.Bb(4),d.ic("value",e.stateSelected)("compareWith",e.compareState),d.Bb(1),d.ic("value",void 0),d.Bb(1),d.ic("ngForOf",e.states),d.Bb(1),d.ic("ngIf",void 0!==e.stateSelected))},directives:[S.b,S.c,S.a,m.b,m.e,v.a,g.f,s.j,s.k,y.a,w.a],styles:[".state-selection[_ngcontent-%COMP%]{min-width:260px}"]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({imports:[[r.d.forChild(R)],r.d]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({imports:[[s.c,B,i.a,c.a,n.a,o.a]]}),t})()}}]);