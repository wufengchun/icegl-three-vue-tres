var p=Object.defineProperty,g=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var a=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,o=(e,s)=>{for(var t in s||(s={}))m.call(s,t)&&a(e,t,s[t]);if(c)for(var t of c(s))w.call(s,t)&&a(e,t,s[t]);return e},d=(e,s)=>g(e,u(s));const i=class i{constructor(){this._controller=new AbortController,this.listeners=new Set}fetch(s,t={}){i.pendings.has(s)||(i.pendings.set(s,this),fetch(s,d(o({},t),{signal:this._controller.signal})).then(r=>{this.listeners.forEach(h=>h.resolve(r.clone()))}).catch(r=>{this.listeners.forEach(h=>h.reject(r))}).finally(()=>{i.pendings.delete(s)}))}abort(){this._controller.abort()}};i.pendings=new Map;let l=i;class j{constructor(s,t){this.url=s,this.init=t,this.promise=new Promise((r,h)=>{this.resolve=r,this.reject=h})}ready(){let s=l.pendings.get(this.url);return s||(s=new l,s.fetch(this.url,this.init)),s.listeners.add(this),this.promise}abort(){this.reject("User abort.");const s=l.pendings.get(this.url);s&&(s.listeners.delete(this),s.listeners.size===0&&s.abort())}}const n=class n{constructor(s){this.mode=n.DOWN,this.geometry=s}};n.UP=1,n.DOWN=2,n.MATCH=3;let f=n;export{j as F};
