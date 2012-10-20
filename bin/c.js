(function(e){"use strict";try{(function(){}).bind(e)}catch(t){Object.defineProperty(Function.prototype,"bind",{value:function(e){var t=this;return function(){return t.apply(e,arguments)}},enumerable:!1,configurable:!0,writable:!0})}var n=typeof e["HTMLElement"]!="undefined",r=function(e){var t=null;while(e&&e!=Object.prototype){if(e.tagName){t=e.tagName;break}e=e.prototype}return t||"div"},i=1e-8;e.c={debug:!1,trace:!1,verbose:!1,traceAdded:!1,GC:!1,GEQ:1,LEQ:2,inherit:function(t){var i=null,s=null;t["extends"]&&(s=t["extends"],delete t["extends"]),t.initialize&&(i=t.initialize,delete t.initialize);var o=i||function(){},u=o.prototype=Object.create(s?s.prototype:Object.prototype);this.extend(u,t);if(n&&s&&s.prototype instanceof e.HTMLElement){var a=o,f=r(u),l=function(e){return e.__proto__=u,a.apply(e,arguments),u.created&&e.created(),u.decorate&&e.decorate(),e};this.extend(u,{upgrade:l}),o=function(){return l(e.document.createElement(f))},o.prototype=u,this.extend(o,{ctor:a})}return o},extend:function(e,t){return this.own(t,function(n){var r=Object.getOwnPropertyDescriptor(t,n);typeof r["get"]=="function"||typeof r["set"]=="function"?Object.defineProperty(e,n,r):typeof r["value"]=="function"||n.charAt(0)==="_"?(r.writable=!0,r.configurable=!0,r.enumerable=!1,Object.defineProperty(e,n,r)):e[n]=t[n]}),e},own:function(t,n,r){return Object.getOwnPropertyNames(t).forEach(n,r||e),t},debugprint:function(e){c.verbose&&console.log(e)},traceprint:function(e){c.verbose&&console.log(e)},fnenterprint:function(e){console.log("* "+e)},fnexitprint:function(e){console.log("- "+e)},Assert:function(e,t){if(!e)throw new c.InternalError("Assertion failed: "+t)},Plus:function(e,t){return e instanceof c.Expression||(e=new c.Expression(e)),t instanceof c.Expression||(t=new c.Expression(t)),e.plus(t)},Minus:function(e,t){return e instanceof c.Expression||(e=new c.Expression(e)),t instanceof c.Expression||(t=new c.Expression(t)),e.minus(t)},Times:function(e,t){if(typeof e=="number"||e instanceof c.Variable)e=new c.Expression(e);if(typeof t=="number"||t instanceof c.Variable)t=new c.Expression(t);return e.times(t)},Divide:function(e,t){if(typeof e=="number"||e instanceof c.Variable)e=new c.Expression(e);if(typeof t=="number"||t instanceof c.Variable)t=new c.Expression(t);return e.divide(t)},approx:function(e,t){if(e===t)return!0;var n,r;return n=e instanceof c.Variable?e.value:e,r=t instanceof c.Variable?t.value:t,n==0?Math.abs(r)<i:r==0?Math.abs(n)<i:Math.abs(n-r)<Math.abs(n)*i},_inc:function(e){return function(){return e++}}(0),_json_receivers:{},fromJSON:function(e){JSON.parse(e,function(e,t){this["class"]})}}})(this),function(e){"use strict";var t=function(e){var t=e.hashCode?e.hashCode:e.toString();return t},n=function(e,t){Object.keys(e).forEach(function(n){t[n]=e[n]})},r={};e.HashTable=e.inherit({initialize:function(){this.size=0,this._store={},this._keyStrMap={}},set:function(e,n){var r=t(e),i=null;this._store.hasOwnProperty(r)?i=this._store[r]:this.size++,this._store[r]=n,this._keyStrMap[r]=e},get:function(e){if(!this.size)return null;e=t(e);var n=this._store[e];return typeof n!="undefined"?this._store[e]:null},clear:function(){this.size=0,this._store={},this._keyStrMap={}},"delete":function(e){e=t(e);if(!this._store.hasOwnProperty(e))return null;delete this._store[e],delete this._keyStrMap[e],this.size>0&&this.size--},each:function(e,t){if(!this.size)return;Object.keys(this._store).forEach(function(n){e.call(t||null,this._keyStrMap[n],this._store[n])},this)},escapingEach:function(e,t){if(!this.size)return;var n=this,i=r,s=Object.keys(this._store);for(var o=0;o<s.length;o++){(function(r){n._store.hasOwnProperty(r)&&(i=e.call(t||null,n._keyStrMap[r],n._store[r]))})(s[o]);if(i){if(i.retval!==undefined)return i;if(i.brk)break}}},clone:function(){var t=new e.HashTable;return this.size&&(t.size=this.size,n(this._store,t._store),n(this._keyStrMap,t._keyStrMap)),t},equals:function(t){if(t===this)return!0;if(t instanceof e.HashTable&&t._size===this._size){var n=Object.keys(this._keyStrMap);for(var r=0;r<n.length;r++){var i=n[r];if(this._keyStrMap[i]!==t._keyStrMap[i]||this._store[i]!==t._store[i])return!1}return!0}return!1},toString:function(e){var t="";return this.each(function(e,n){t+=e+" => "+n+"\n"}),t}})}(c),function(e){"use strict";e.HashSet=e.inherit({initialize:function(){this.storage=[],this.size=0},add:function(e){var t=this.storage,n=t.indexOf(e);t.indexOf(e)==-1&&t.push(e),this.size=this.storage.length},values:function(){return this.storage},"delete":function(e){var t=this.storage.indexOf(e);if(t==-1)return null;this.storage.splice(t,1)[0],this.size=this.storage.length},clear:function(){this.storage.length=0},each:function(e,t){this.storage.forEach(e,t)},escapingEach:function(e,t){this.storage.forEach(e,t)},toString:function(){var e=this.size+" {",t=!0;return this.each(function(n){t?t=!1:e+=", ",e+=n}),e+="}\n",e}})}(c),function(e){"use strict";e.Error=e.inherit({initialize:function(e){e&&(this._description=e)},_name:"c.Error",_description:"An error has occured in Cassowary",set description(e){this._description=e},get description(){return"("+this._name+") "+this._description},get message(){return this.description},toString:function(){return this.description}});var t=function(t,n){return e.inherit({"extends":e.Error,initialize:function(){e.Error.apply(this,arguments)},_name:t||"",_description:n||""})};e.ConstraintNotFound=t("c.ConstraintNotFound","Tried to remove a constraint never added to the tableu"),e.InternalError=t("c.InternalError"),e.NonExpression=t("c.NonExpression","The resulting expression would be non"),e.NotEnoughStays=t("c.NotEnoughStays","There are not enough stays to give specific values to every variable"),e.RequiredFailure=t("c.RequiredFailure","A required constraint cannot be satisfied"),e.TooDifficult=t("c.TooDifficult","The constraints are too difficult to solve")}(c),function(e){"use strict";var t=1e3;e.SymbolicWeight=e.inherit({initialize:function(){this.value=0;var e=1;for(var n=arguments.length-1;n>=0;--n)this.value+=arguments[n]*e,e*=t},valueOf:function(){return this.value},toJSON:function(){return JSON.stringify({"class":"c.SymbolicWeight",value:this.value})}}),e.SymbolicWeight.clsZero=new e.SymbolicWeight(0,0,0);var n="c.SymbolicWeight";e._json_receivers[n]=function(t){if(t.value&&t.class==n){var r=new e.SymbolicWeight;return r.value=t.value,r}}}(c),function(e){e.Strength=e.inherit({initialize:function(t,n,r,i){this.name=t,n instanceof e.SymbolicWeight?this.symbolicWeight=n:this.symbolicWeight=new e.SymbolicWeight(n,r,i)},get required(){return this===e.Strength.required},toString:function(){return this.name+(this.isRequired()?"":":"+this.symbolicWeight)}}),e.Strength.required=new e.Strength("<Required>",1e3,1e3,1e3),e.Strength.strong=new e.Strength("strong",1,0,0),e.Strength.medium=new e.Strength("medium",0,1,0),e.Strength.weak=new e.Strength("weak",0,0,1)}(c),function(e){"use strict";var t=e.AbstractVariable=e.inherit({initialize:function(t,n){this._name="",this.hash_code=e._inc();var r=typeof t;r=="string"||r!="undefined"?this._name=t||"v"+this.hash_code:this._name=t+n},get hashCode(){return this.hash_code},isDummy:!1,isExternal:!1,isPivotable:!1,isRestricted:!1,_value:"",_prefix:"",toString:function(){return this._prefix+"["+this._name+":"+this._value+"]"}});e.Variable=e.inherit({"extends":e.AbstractVariable,initialize:function(n,r){typeof n=="string"?(t.call(this,n),this._value=r||0):(t.call(this),typeof n=="number"&&(this._value=n));var i=e.Variable._map;i&&(i[this._name]=this)},isExternal:!0,get value(){return this._value}}),e.DummyVariable=e.inherit({"extends":e.AbstractVariable,initialize:function(e,n){t.call(this,e),n&&(this._prefix=n)},isDummy:!0,isRestricted:!0,_value:"dummy"}),e.ObjectiveVariable=e.inherit({"extends":e.AbstractVariable,initialize:function(e,n){t.call(this,e),n&&(this._prefix=n)},_value:"obj"}),e.SlackVariable=e.inherit({"extends":e.AbstractVariable,initialize:function(e,n){t.call(this,e),n&&(this._prefix=n)},isPivotable:!0,isRestricted:!0,_value:"slack"})}(c),function(e){"use strict";e.Point=e.inherit({initialize:function(t,n,r){t instanceof e.Variable?this.x=t:r!=null?this.x=new e.Variable("x"+r,t):this.x=new e.Variable(t),n instanceof e.Variable?this.y=n:r!=null?this.y=new e.Variable("y"+r,n):this.y=new e.Variable(n)},SetXY:function(t,n){t instanceof e.Variable?this.x=t:this.x._value=t,n instanceof e.Variable?this.y=n:this.y._value=n},X:function(){return this.x},Y:function(){return this.y},Xvalue:function(){return this.x.value},Yvalue:function(){return this.y.value},toString:function(){return"("+this.x+", "+this.y+")"}})}(c),function(e){"use strict";e.Expression=e.inherit({initialize:function(t,n,r){e.GC&&console.log("new c.Expression"),this.constant=typeof r=="number"&&!isNaN(r)?r:0,this.terms=new e.HashTable,t instanceof e.AbstractVariable?this.terms.set(t,typeof n=="number"?n:1):typeof t=="number"&&(isNaN(t)||(this.constant=t))},initializeFromHash:function(t,n){return e.verbose&&(console.log("*******************************"),console.log("clone c.initializeFromHash"),console.log("*******************************")),e.GC&&console.log("clone c.Expression"),this.constant=t,this.terms=n.clone(),this},multiplyMe:function(e){this.constant*=e;var t=this.terms;return t.each(function(n,r){t.set(n,r*e)}),this},clone:function(){e.verbose&&(console.log("*******************************"),console.log("clone c.Expression"),console.log("*******************************"));var t=new e.Expression;return t.initializeFromHash(this.constant,this.terms),t},times:function(t){if(typeof t=="number")return this.clone().multiplyMe(t);if(this.isConstant())return t.times(this.constant);if(t.isConstant())return this.times(t.constant);throw new e.NonExpression},plus:function(t){if(t instanceof e.Expression)return this.clone().addExpression(t,1);if(t instanceof e.Variable)return this.clone().addVariable(t,1)},minus:function(t){if(t instanceof e.Expression)return this.clone().addExpression(t,-1);if(t instanceof e.Variable)return this.clone().addVariable(t,-1)},divide:function(t){if(typeof t=="number"){if(e.approx(t,0))throw new e.NonExpression;return this.times(1/t)}if(t instanceof e.Expression){if(!t.isConstant())throw new e.NonExpression;return this.times(1/t.constant)}},addExpression:function(t,n,r,i){return t instanceof e.AbstractVariable&&(t=new e.Expression(t),e.trace&&console.log("addExpression: Had to cast a var to an expression")),n=n||1,this.constant+=n*t.constant,t.terms.each(function(e,t){this.addVariable(e,t*n,r,i)},this),this},addVariable:function(t,n,r,i){n==null&&(n=1),e.trace&&e.fnenterprint("CLE: addVariable:"+t+", "+n);var s=this.terms.get(t);if(s){var o=s+n;e.approx(o,0)?(i&&i.noteRemovedVariable(t,r),this.terms.delete(t)):this.terms.set(t,o)}else e.approx(n,0)||(this.terms.set(t,n),i&&i.noteAddedVariable(t,r));return this},setVariable:function(e,t){return this.terms.set(e,t),this},anyPivotableVariable:function(){if(this.isConstant())throw new e.InternalError("anyPivotableVariable called on a constant");var t=this.terms.escapingEach(function(e,t){if(e.isPivotable)return{retval:e}});return t&&t.retval!==undefined?t.retval:null},substituteOut:function(t,n,r,i){e.trace&&(e.fnenterprint("CLE:substituteOut: "+t+", "+n+", "+r+", ..."),e.traceprint("this = "+this));var s=this.terms,o=s.get(t);s.delete(t),this.constant+=o*n.constant,n.terms.each(function(t,n){var u=s.get(t);if(u){var a=u+o*n;e.approx(a,0)?(i.noteRemovedVariable(t,r),s.delete(t)):s.set(t,a)}else s.set(t,o*n),i&&i.noteAddedVariable(t,r)}),e.trace&&e.traceprint("Now this is "+this)},changeSubject:function(e,t){this.terms.set(e,this.newSubject(t))},newSubject:function(t){e.trace&&e.fnenterprint("newSubject:"+t);var n=1/this.terms.get(t);return this.terms.delete(t),this.multiplyMe(-n),n},coefficientFor:function(e){return this.terms.get(e)||0},isConstant:function(){return this.terms.size==0},toString:function(){var t="",n=!1;if(!e.approx(this.constant,0)||this.isConstant()){t+=this.constant;if(this.isConstant())return t;n=!0}return this.terms.each(function(e,r){n&&(t+=" + "),t+=r+"*"+e,n=!0}),t},equals:function(t){return t===this?!0:t instanceof e.Expression&&t.constant===this.constant&&t.terms.equals(this.terms)},Plus:function(e,t){return e.plus(t)},Minus:function(e,t){return e.minus(t)},Times:function(e,t){return e.times(t)},Divide:function(e,t){return e.divide(t)}})}(c),function(e){"use strict";e.AbstractConstraint=e.inherit({initialize:function(t,n){this.hash_code=e._inc(),this.strength=t||e.Strength.required,this.weight=n||1},isEditConstraint:!1,isInequality:!1,isStayConstraint:!1,get hashCode(){return this.hash_code},get required(){return this.strength===e.Strength.required},toString:function(){return this.strength+" {"+this.weight+"} ("+this.expression+")"}});var t=e.AbstractConstraint.prototype.toString,n=function(t,n,r){e.AbstractConstraint.call(this,n||e.Strength.strong,r),this.variable=t,this.expression=new e.Expression(t,-1,t.value)};e.EditConstraint=e.inherit({"extends":e.AbstractConstraint,initialize:function(){n.apply(this,arguments)},isEditConstraint:!0,toString:function(){return"edit:"+t.call(this)}}),e.StayConstraint=e.inherit({"extends":e.AbstractConstraint,initialize:function(){n.apply(this,arguments)},isStayConstraint:!0,toString:function(){return"stay:"+t.call(this)}});var r=e.Constraint=e.inherit({"extends":e.AbstractConstraint,initialize:function(t,n,r){e.AbstractConstraint.call(this,n,r),this.expression=t}});e.Inequality=e.inherit({"extends":e.Constraint,_cloneOrNewCle:function(t){return t.clone?t.clone():new e.Expression(t)},initialize:function(t,n,i,s,o){var u=t instanceof e.Expression,a=i instanceof e.Expression,f=t instanceof e.AbstractVariable,l=i instanceof e.AbstractVariable,h=typeof t=="number",p=typeof i=="number";if((u||h)&&l){var d=t,v=n,m=i,g=s,y=o;r.call(this,this._cloneOrNewCle(d),g,y);if(v==e.LEQ)this.expression.multiplyMe(-1),this.expression.addVariable(m);else{if(v!=e.GEQ)throw new e.InternalError("Invalid operator in c.Inequality constructor");this.expression.addVariable(m,-1)}}else if(f&&(a||p)){var d=i,v=n,m=t,g=s,y=o;r.call(this,this._cloneOrNewCle(d),g,y);if(v==e.GEQ)this.expression.multiplyMe(-1),this.expression.addVariable(m);else{if(v!=e.LEQ)throw new e.InternalError("Invalid operator in c.Inequality constructor");this.expression.addVariable(m,-1)}}else{if(u&&p){var b=t,v=n,w=i,g=s,y=o;r.call(this,this._cloneOrNewCle(b),g,y);if(v==e.LEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(w));else{if(v!=e.GEQ)throw new e.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(w),-1)}return this}if(h&&a){var b=i,v=n,w=t,g=s,y=o;r.call(this,this._cloneOrNewCle(b),g,y);if(v==e.GEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(w));else{if(v!=e.LEQ)throw new e.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(w),-1)}return this}if(u&&a){var b=t,v=n,w=i,g=s,y=o;r.call(this,this._cloneOrNewCle(w),g,y);if(v==e.GEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(b));else{if(v!=e.LEQ)throw new e.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(b),-1)}}else{if(u)return r.call(this,t,n,i);if(n==e.GEQ)r.call(this,new e.Expression(i),s,o),this.expression.multiplyMe(-1),this.expression.addVariable(t);else{if(n!=e.LEQ)throw new e.InternalError("Invalid operator in c.Inequality constructor");r.call(this,new e.Expression(i),s,o),this.expression.addVariable(t,-1)}}}},isInequality:!0,toString:function(){return r.prototype.toString.call(this)+" >= 0 ) id: "+this.hash_code}}),e.Equation=e.inherit({"extends":e.Constraint,initialize:function(t,n,i,s){if(t instanceof e.Expression&&!n||n instanceof e.Strength)r.call(this,t,n,i);else if(t instanceof e.AbstractVariable&&n instanceof e.Expression){var o=t,u=n,a=i,f=s;r.call(this,u.clone(),a,f),this.expression.addVariable(o,-1)}else if(t instanceof e.AbstractVariable&&typeof n=="number"){var o=t,l=n,a=i,f=s;r.call(this,new e.Expression(l),a,f),this.expression.addVariable(o,-1)}else if(t instanceof e.Expression&&n instanceof e.AbstractVariable){var u=t,o=n,a=i,f=s;r.call(this,u.clone(),a,f),this.expression.addVariable(o,-1)}else{if(!(t instanceof e.Expression||t instanceof e.AbstractVariable||typeof t=="number")||!(n instanceof e.Expression||n instanceof e.AbstractVariable||typeof n=="number"))throw"Bad initializer to c.Equation";t instanceof e.Expression?t=t.clone():t=new e.Expression(t),n instanceof e.Expression?n=n.clone():n=new e.Expression(n),r.call(this,t,i,s),this.expression.addExpression(n,-1)}e.Assert(this.strength instanceof e.Strength,"_strength not set")},toString:function(){return r.prototype.toString.call(this)+" = 0 )"}})}(c),function(e){"use strict";e.EditInfo=e.inherit({initialize:function(e,t,n,r,i){this.constraint=e,this.editPlus=t,this.editMinus=n,this.prevEditConstant=r,this.index=i},toString:function(){return"<cn="+this.constraint+", ep="+this.editPlus+", em="+this.editMinus+", pec="+this.prevEditConstant+", index="+this.index+">"}})}(c),function(e){"use strict";e.Tableau=e.inherit({initialize:function(){this.columns=new e.HashTable,this.rows=new e.HashTable,this._infeasibleRows=new e.HashSet,this._externalRows=new e.HashSet,this._externalParametricVars=new e.HashSet},noteRemovedVariable:function(t,n){e.verbose&&e.fnenterprint("noteRemovedVariable: "+t+", "+n),n!=null&&this.columns.get(t).delete(n)},noteAddedVariable:function(t,n){e.verbose&&e.fnenterprint("noteAddedVariable: "+t+", "+n),n&&this.insertColVar(t,n)},getInternalInfo:function(){var e="Tableau Information:\n";return e+="Rows: "+this.rows.size,e+=" (= "+(this.rows.size-1)+" constraints)",e+="\nColumns: "+this.columns.size,e+="\nInfeasible Rows: "+this._infeasibleRows.size,e+="\nExternal basic variables: "+this._externalRows.size,e+="\nExternal parametric variables: ",e+=this._externalParametricVars.size,e+="\n",e},toString:function(){var e="Tableau:\n";return this.rows.each(function(t,n){e+=t,e+=" <==> ",e+=n,e+="\n"}),e+="\nColumns:\n",e+=this.columns,e+="\nInfeasible rows: ",e+=this._infeasibleRows,e+="External basic variables: ",e+=this._externalRows,e+="External parametric variables: ",e+=this._externalParametricVars,e},insertColVar:function(t,n){var r=this.columns.get(t);r||(r=new e.HashSet,this.columns.set(t,r)),r.add(n)},addRow:function(t,n){e.trace&&e.fnenterprint("addRow: "+t+", "+n),this.rows.set(t,n),n.terms.each(function(e,n){this.insertColVar(e,t),e.isExternal&&this._externalParametricVars.add(e)},this),t.isExternal&&this._externalRows.add(t),e.trace&&e.traceprint(this.toString())},removeColumn:function(t){e.trace&&e.fnenterprint("removeColumn:"+t);var n=this.columns.get(t);n?(this.columns.delete(t),n.each(function(e){var n=this.rows.get(e);n.terms.delete(t)},this)):e.trace&&e.debugprint("Could not find var "+t+" in columns"),t.isExternal&&(this._externalRows.delete(t),this._externalParametricVars.delete(t))},removeRow:function(t){e.trace&&e.fnenterprint("removeRow:"+t);var n=this.rows.get(t);return e.Assert(n!=null),n.terms.each(function(n,r){var i=this.columns.get(n);i!=null&&(e.trace&&e.debugprint("removing from varset "+t),i.delete(t))},this),this._infeasibleRows.delete(t),t.isExternal&&this._externalRows.delete(t),this.rows.delete(t),e.trace&&e.fnexitprint("returning "+n),n},substituteOut:function(t,n){e.trace&&e.fnenterprint("substituteOut:"+t+", "+n),e.trace&&e.traceprint(this.toString());var r=this.columns.get(t);r.each(function(e){var r=this.rows.get(e);r.substituteOut(t,n,e,this),e.isRestricted&&r.constant<0&&this._infeasibleRows.add(e)},this),t.isExternal&&(this._externalRows.add(t),this._externalParametricVars.delete(t)),this.columns.delete(t)},columnsHasKey:function(e){return this.columns.get(e)!=null}})}(c),function(e){var t=e.Tableau,n=t.prototype,r=1e-8;e.SimplexSolver=e.inherit({"extends":e.Tableau,initialize:function(){e.Tableau.call(this),this._stayMinusErrorVars=[],this._stayPlusErrorVars=[],this._errorVars=new e.HashTable,this._markerVars=new e.HashTable,this._objective=new e.ObjectiveVariable("Z"),this._editVarMap=new e.HashTable,this._editVarList=[],this._slackCounter=0,this._artificialCounter=0,this._dummyCounter=0,this.autoSolve=!0,this._fNeedsSolving=!1,this.rows=new e.HashTable,this.rows.set(this._objective,new e.Expression),this._stkCedcns=[0],e.trace&&e.traceprint("objective expr == "+this.rows.get(this._objective))},addLowerBound:function(t,n){var r=new e.Inequality(t,e.GEQ,new e.Expression(n));return this.addConstraint(r)},addUpperBound:function(t,n){var r=new e.Inequality(t,e.LEQ,new e.Expression(n));return this.addConstraint(r)},addBounds:function(e,t,n){return this.addLowerBound(e,t),this.addUpperBound(e,n),this},add:function(){for(var e=0;e<arguments.length;e++)this.addConstraint(arguments[e]);return this},addConstraint:function(t){e.trace&&e.fnenterprint("addConstraint: "+t);var n=new Array(2),r=new Array(1),i=this.newExpression(t,n,r);r=r[0];var s=!1;s=this.tryAddingDirectly(i),s||this.addWithArtificialVariable(i),this._fNeedsSolving=!0;if(t.isEditConstraint){var o=this._editVarMap.size,u=n[0],a=n[1];!u instanceof e.SlackVariable&&console.log("cvEplus not a slack variable = "+u),!a instanceof e.SlackVariable&&console.log("cvEminus not a slack variable = "+a);var f=new e.EditInfo(t,u,a,r,o);this._editVarMap.set(t.variable,f),this._editVarList[o]={v:t.variable,info:f}}return this.autoSolve&&(this.optimize(this._objective),this._setExternalVariables()),this},addConstraintNoException:function(t){e.trace&&e.fnenterprint("addConstraintNoException: "+t);try{return this.addConstraint(t),!0}catch(n){return!1}},addEditVar:function(t,n){return e.trace&&e.fnenterprint("addEditVar: "+t+" @ "+n),this.addConstraint(new e.EditConstraint(t,n||e.Strength.strong))},removeEditVar:function(e){return this.removeConstraint(this._editVarMap.get(e).constraint)},beginEdit:function(){return e.Assert(this._editVarMap.size>0,"_editVarMap.size > 0"),this._infeasibleRows.clear(),this._resetStayConstants(),this._stkCedcns.push(this._editVarMap.size),this},endEdit:function(){e.Assert(this._editVarMap.size>0,"_editVarMap.size > 0"),this.resolve(),this._stkCedcns.pop();var t=this._stkCedcns[this._stkCedcns.length-1];return this.removeEditVarsTo(t),this},removeAllEditVars:function(){return this.removeEditVarsTo(0)},removeEditVarsTo:function(t){try{var n=this._editVarList.length;for(var r=t;r<n;r++)this._editVarList[r]&&this.removeEditVar(this._editVarList[r].v);return this._editVarList.length=t,e.Assert(this._editVarMap.size==t,"_editVarMap.size == n"),this}catch(i){throw new e.InternalError("Constraint not found in removeEditVarsTo")}},addPointStays:function(t){return e.trace&&e.fnenterprint("addPointStays"+t),t.forEach(function(e,t){this.addPointStay(e,Math.pow(2,t))},this),this},addPointStay:function(t,n,r){if(t instanceof e.Point){var i=t,s=n;this.addStay(i.X(),e.Strength.weak,s||1),this.addStay(i.Y(),e.Strength.weak,s||1)}else{var o=t,u=n,s=r;this.addStay(o,e.Strength.weak,s||1),this.addStay(u,e.Strength.weak,s||1)}return this},addStay:function(t,n,r){var i=new e.StayConstraint(t,n||e.Strength.weak,r||1);return this.addConstraint(i)},removeConstraint:function(e){return this.removeConstraintInternal(e),this},removeConstraintInternal:function(t){e.trace&&e.fnenterprint("removeConstraint: "+t),e.trace&&e.traceprint(this.toString()),this._fNeedsSolving=!0,this._resetStayConstants();var n=this.rows.get(this._objective),r=this._errorVars.get(t);e.trace&&e.traceprint("eVars == "+r),r!=null&&r.each(function(i){var s=this.rows.get(i);s==null?n.addVariable(i,-t.weight*t.strength.symbolicWeight,this._objective,this):n.addExpression(s,-t.weight*t.strength.symbolicWeight,this._objective,this),e.trace&&e.traceprint("now eVars == "+r)},this);var i=this._markerVars.get(t);this._markerVars.delete(t);if(i==null)throw new Exc.ConstraintNotFound;e.trace&&e.traceprint("Looking to remove var "+i);if(this.rows.get(i)==null){var s=this.columns.get(i);e.trace&&e.traceprint("Must pivot -- columns are "+s);var o=null,u=0;s.each(function(t){if(t.isRestricted){var n=this.rows.get(t),r=n.coefficientFor(i);e.trace&&e.traceprint("Marker "+i+"'s coefficient in "+n+" is "+r);if(r<0){var s=-n.constant/r;if(o==null||s<u||e.approx(s,u)&&t.hashCode<o.hashCode)u=s,o=t}}},this),o==null&&(e.trace&&e.traceprint("exitVar is still null"),s.each(function(e){if(e.isRestricted){var t=this.rows.get(e),n=t.coefficientFor(i),r=t.constant/n;if(o==null||r<u)u=r,o=e}},this)),o==null&&(s.size==0?this.removeColumn(i):s.escapingEach(function(e){if(e!=this._objective)return o=e,{brk:!0}},this)),o!=null&&this.pivot(i,o)}if(this.rows.get(i)!=null)var a=this.removeRow(i);r!=null&&r.each(function(e){e!=i&&this.removeColumn(e)},this);if(t.isStayConstraint){if(r!=null)for(var f=0;f<this._stayPlusErrorVars.length;f++)r.delete(this._stayPlusErrorVars[f]),r.delete(this._stayMinusErrorVars[f])}else if(t.isEditConstraint){e.Assert(r!=null,"eVars != null");var l=this._editVarMap.get(t.variable);this.removeColumn(l.editMinus),this._editVarMap.delete(t.variable)}return r!=null&&this._errorVars.delete(r),this.autoSolve&&(this.optimize(this._objective),this._setExternalVariables()),this},reset:function(){throw e.trace&&e.fnenterprint("reset"),new e.InternalError("reset not implemented")},resolveArray:function(t){e.trace&&e.fnenterprint("resolveArray"+t);var n=t.length;this._editVarMap.each(function(e,r){var i=r.index;i<n&&this.suggestValue(e,t[i])},this),this.resolve()},resolvePair:function(e,t){this.suggestValue(this._editVarList[0].v,e),this.suggestValue(this._editVarList[1].v,t),this.resolve()},resolve:function(){e.trace&&e.fnenterprint("resolve()"),this.dualOptimize(),this._setExternalVariables(),this._infeasibleRows.clear(),this._resetStayConstants()},suggestValue:function(t,n){e.trace&&e.fnenterprint("suggestValue("+t+", "+n+")");var r=this._editVarMap.get(t);if(r==null)throw new e.Error("suggestValue for variable "+t+", but var is not an edit variable");var i=n-r.prevEditConstant;return r.prevEditConstant=n,this.deltaEditConstant(i,r.editPlus,r.editMinus),this},solve:function(){return this._fNeedsSolving&&(this.optimize(this._objective),this._setExternalVariables()),this},setEditedValue:function(t,n){if(!this.columnsHasKey(t)&&this.rows.get(t)==null)return t._value=n,this;if(!e.approx(n,t.value)){this.addEditVar(t),this.beginEdit();try{this.suggestValue(t,n)}catch(r){throw new e.InternalError("Error in setEditedValue")}this.endEdit()}return this},addVar:function(t){if(!this.columnsHasKey(t)&&this.rows.get(t)==null){try{this.addStay(t)}catch(n){throw new e.InternalError("Error in addVar -- required failure is impossible")}e.trace&&e.traceprint("added initial stay on "+t)}return this},getInternalInfo:function(){var e=n.getInternalInfo.call(this);return e+="\nSolver info:\n",e+="Stay Error Variables: ",e+=this._stayPlusErrorVars.length+this._stayMinusErrorVars.length,e+=" ("+this._stayPlusErrorVars.length+" +, ",e+=this._stayMinusErrorVars.length+" -)\n",e+="Edit Variables: "+this._editVarMap.size,e+="\n",e},getDebugInfo:function(){return this.toString()+this.getInternalInfo()+"\n"},toString:function(){var e=n.getInternalInfo.call(this);return e+="\n_stayPlusErrorVars: ",e+="["+this._stayPlusErrorVars+"]",e+="\n_stayMinusErrorVars: ",e+="["+this._stayMinusErrorVars+"]",e+="\n",e+="_editVarMap:\n"+this._editVarMap,e+="\n",e},getConstraintMap:function(){return this._markerVars},addWithArtificialVariable:function(t){e.trace&&e.fnenterprint("addWithArtificialVariable: "+t);var n=new e.SlackVariable(++this._artificialCounter,"a"),r=new e.ObjectiveVariable("az"),i=t.clone();e.trace&&e.traceprint("before addRows:\n"+this),this.addRow(r,i),this.addRow(n,t),e.trace&&e.traceprint("after addRows:\n"+this),this.optimize(r);var s=this.rows.get(r);e.trace&&e.traceprint("azTableauRow.constant == "+s.constant);if(!e.approx(s.constant,0))throw this.removeRow(r),this.removeColumn(n),new e.RequiredFailure;var o=this.rows.get(n);if(o!=null){if(o.isConstant()){this.removeRow(n),this.removeRow(r);return}var u=o.anyPivotableVariable();this.pivot(u,n)}e.Assert(this.rows.get(n)==null,"rowExpression(av) == null"),this.removeColumn(n),this.removeRow(r)},tryAddingDirectly:function(t){e.trace&&e.fnenterprint("tryAddingDirectly: "+t);var n=this.chooseSubject(t);return n==null?(e.trace&&e.fnexitprint("returning false"),!1):(t.newSubject(n),this.columnsHasKey(n)&&this.substituteOut(n,t),this.addRow(n,t),e.trace&&e.fnexitprint("returning true"),!0)},chooseSubject:function(t){e.trace&&e.fnenterprint("chooseSubject: "+t);var n=null,r=!1,i=!1,s=t.terms,o=s.escapingEach(function(e,t){if(r){if(!e.isRestricted&&!this.columnsHasKey(e))return{retval:e}}else if(e.isRestricted){if(!i&&!e.isDummy&&t<0){var s=this.columns.get(e);if(s==null||s.size==1&&this.columnsHasKey(this._objective))n=e,i=!0}}else n=e,r=!0},this);if(o&&o.retval!==undefined)return o.retval;if(n!=null)return n;var u=0,o=s.escapingEach(function(e,t){if(!e.isDummy)return{retval:null};this.columnsHasKey(e)||(n=e,u=t)},this);if(o&&o.retval!==undefined)return o.retval;if(!e.approx(t.constant,0))throw new e.RequiredFailure;return u>0&&t.multiplyMe(-1),n},deltaEditConstant:function(t,n,r){e.trace&&e.fnenterprint("deltaEditConstant :"+t+", "+n+", "+r);var i=this.rows.get(n);if(i!=null){i.constant+=t,i.constant<0&&this._infeasibleRows.add(n);return}var s=this.rows.get(r);if(s!=null){s.constant+=-t,s.constant<0&&this._infeasibleRows.add(r);return}var o=this.columns.get(r);o||console.log("columnVars is null -- tableau is:\n"+this),o.each(function(e){var n=this.rows.get(e),i=n.coefficientFor(r);n.constant+=i*t,e.isRestricted&&n.constant<0&&this._infeasibleRows.add(e)},this)},dualOptimize:function(){e.trace&&e.fnenterprint("dualOptimize:");var t=this.rows.get(this._objective);while(this._infeasibleRows.size){var n=this._infeasibleRows.values()[0];this._infeasibleRows.delete(n);var r=null,i=this.rows.get(n);if(i!=null&&i.constant<0){var s=Number.MAX_VALUE,o,u=i.terms;u.each(function(n,i){if(i>0&&n.isPivotable){var u=t.coefficientFor(n);o=u/i;if(o<s||e.approx(o,s)&&n.hashCode<r.hashCode)r=n,s=o}});if(s==Number.MAX_VALUE)throw new e.InternalError("ratio == nil (MAX_VALUE) in dualOptimize");this.pivot(r,n)}}},newExpression:function(t,n,r){e.trace&&(e.fnenterprint("newExpression: "+t),e.traceprint("cn.isInequality == "+t.isInequality),e.traceprint("cn.required == "+t.required));var i=t.expression,s=new e.Expression(i.constant),o=new e.SlackVariable,u=new e.DummyVariable,a=new e.SlackVariable,f=new e.SlackVariable,l=i.terms;l.each(function(e,t){var n=this.rows.get(e);n?s.addExpression(n,t):s.addVariable(e,t)},this);if(t.isInequality){e.trace&&e.traceprint("Inequality, adding slack"),++this._slackCounter,o=new e.SlackVariable(this._slackCounter,"s"),s.setVariable(o,-1),this._markerVars.set(t,o);if(!t.required){++this._slackCounter,a=new e.SlackVariable(this._slackCounter,"em"),s.setVariable(a,1);var h=this.rows.get(this._objective);h.setVariable(a,t.strength.symbolicWeight*t.weight),this.insertErrorVar(t,a),this.noteAddedVariable(a,this._objective)}}else if(t.required)e.trace&&e.traceprint("Equality, required"),++this._dummyCounter,u=new e.DummyVariable(this._dummyCounter,"d"),s.setVariable(u,1),this._markerVars.set(t,u),e.trace&&e.traceprint("Adding dummyVar == d"+this._dummyCounter);else{e.trace&&e.traceprint("Equality, not required"),++this._slackCounter,f=new e.SlackVariable(this._slackCounter,"ep"),a=new e.SlackVariable(this._slackCounter,"em"),s.setVariable(f,-1),s.setVariable(a,1),this._markerVars.set(t,f);var h=this.rows.get(this._objective);e.trace&&console.log(h);var p=t.strength.symbolicWeight*t.weight;p==0&&(e.trace&&e.traceprint("cn == "+t),e.trace&&e.traceprint("adding "+f+" and "+a+" with swCoeff == "+p)),h.setVariable(f,p),this.noteAddedVariable(f,this._objective),h.setVariable(a,p),this.noteAddedVariable(a,this._objective),this.insertErrorVar(t,a),this.insertErrorVar(t,f),t.isStayConstraint?(this._stayPlusErrorVars.push(f),this._stayMinusErrorVars.push(a)):t.isEditConstraint&&(n[0]=f,n[1]=a,r[0]=i.constant)}return s.constant<0&&s.multiplyMe(-1),e.trace&&e.fnexitprint("returning "+s),s},optimize:function(t){e.trace&&e.fnenterprint("optimize: "+t),e.trace&&e.traceprint(this.toString());var n=this.rows.get(t);e.Assert(n!=null,"zRow != null");var i=null,s=null;for(;;){var o=0,u=n.terms;u.escapingEach(function(e,t){if(e.isPivotable&&t<o)return o=t,i=e,{brk:1}},this);if(o>=-r)return;e.trace&&e.traceprint("entryVar == "+i+", objectiveCoeff == "+o);var a=Number.MAX_VALUE,f=this.columns.get(i),l=0;f.each(function(t){e.trace&&e.traceprint("Checking "+t);if(t.isPivotable){var n=this.rows.get(t),r=n.coefficientFor(i);e.trace&&e.traceprint("pivotable, coeff = "+r);if(r<0){l=-n.constant/r;if(l<a||e.approx(l,a)&&t.hashCode<s.hashCode)a=l,s=t}}},this);if(a==Number.MAX_VALUE)throw new e.InternalError("Objective function is unbounded in optimize");this.pivot(i,s),e.trace&&e.traceprint(this.toString())}},pivot:function(t,n){e.trace&&e.fnenterprint("pivot: "+t+", "+n),t==null&&console.warn("pivot: entryVar == null"),n==null&&console.warn("pivot: exitVar == null");var r=this.removeRow(n);r.changeSubject(n,t),this.substituteOut(t,r),this.addRow(t,r)},_resetStayConstants:function(){e.trace&&e.fnenterprint("_resetStayConstants");for(var t=0;t<this._stayPlusErrorVars.length;t++){var n=this.rows.get(this._stayPlusErrorVars[t]);n==null&&(n=this.rows.get(this._stayMinusErrorVars[t])),n!=null&&(n.constant=0)}},_setExternalVariables:function(){e.trace&&e.fnenterprint("_setExternalVariables:"),e.trace&&e.traceprint(this.toString()),this._externalParametricVars.each(function(e){this.rows.get(e)!=null?console.log("Error: variable"+e+" in _externalParametricVars is basic"):e._value=0},this),this._externalRows.each(function(t){var n=this.rows.get(t);e.trace&&e.debugprint("v == "+t),e.trace&&e.debugprint("expr == "+n),t._value=n.constant},this),this._fNeedsSolving=!1,this.onsolved()},onsolved:function(){},insertErrorVar:function(t,n){e.trace&&e.fnenterprint("insertErrorVar:"+t+", "+n);var r=this._errorVars.get(n),i;r?i=r:(i=new e.HashSet,this._errorVars.set(t,i)),i.add(n)}})}(c),function(e,t){"use strict";e.Timer=t.inherit({initialize:function(){this._timerIsRunning=!1,this._elapsedMs=0},Start:function(){this._timerIsRunning=!0,this._startReading=new Date},Stop:function(){this._timerIsRunning=!1,this._elapsedMs+=new Date-this._startReading},Reset:function(){this._timerIsRunning=!1,this._elapsedMs=0},IsRunning:function(){return this._timerIsRunning},ElapsedTime:function(){return this._timerIsRunning?(this._elapsedMs+(new Date-this._startReading))/1e3:this._elapsedMs/1e3}})}(this,c)
