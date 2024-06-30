function ym(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(i){if(i!=="default"&&!(i in t)){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const rv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};rv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="165",xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ov=0,md=1,sv=2,Sm=1,av=2,Wn=3,Pi=0,$t=1,jn=2,Zn=0,$r=1,tc=2,gd=3,_d=4,lv=5,Qi=100,uv=101,cv=102,fv=103,dv=104,hv=200,pv=201,mv=202,gv=203,nc=204,ic=205,_v=206,vv=207,xv=208,yv=209,Sv=210,Mv=211,Ev=212,Tv=213,wv=214,Av=0,Cv=1,Rv=2,Va=3,bv=4,Pv=5,Lv=6,Dv=7,Mm=0,Uv=1,Iv=2,xi=0,Nv=1,Ov=2,Fv=3,kv=4,Bv=5,zv=6,Hv=7,Em=300,lo=301,uo=302,rc=303,oc=304,El=306,sc=1e3,er=1001,ac=1002,fn=1003,Vv=1004,Xs=1005,Sn=1006,ql=1007,tr=1008,Li=1009,Gv=1010,Wv=1011,Ga=1012,Tm=1013,co=1014,pi=1015,yi=1016,wm=1017,Am=1018,fo=1020,Xv=35902,jv=1021,Yv=1022,Rn=1023,qv=1024,$v=1025,Kr=1026,ho=1027,Kv=1028,Cm=1029,Zv=1030,Rm=1031,bm=1033,$l=33776,Kl=33777,Zl=33778,Ql=33779,vd=35840,xd=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,Td=37496,wd=37808,Ad=37809,Cd=37810,Rd=37811,bd=37812,Pd=37813,Ld=37814,Dd=37815,Ud=37816,Id=37817,Nd=37818,Od=37819,Fd=37820,kd=37821,Jl=36492,Bd=36494,zd=36495,Qv=36283,Hd=36284,Vd=36285,Gd=36286,Jv=3200,e0=3201,t0=0,n0=1,di="",wn="srgb",Fi="srgb-linear",Jc="display-p3",Tl="display-p3-linear",Wa="linear",rt="srgb",Xa="rec709",ja="p3",Sr=7680,Wd=519,i0=512,r0=513,o0=514,Pm=515,s0=516,a0=517,l0=518,u0=519,Xd=35044,jd="300 es",qn=2e3,Ya=2001;class dr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yd=1234567;const ts=Math.PI/180,po=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function ef(t,e){return(t%e+e)%e}function c0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function f0(t,e,n){return t!==e?(n-t)/(e-t):0}function ns(t,e,n){return(1-n)*t+n*e}function d0(t,e,n,i){return ns(t,e,1-Math.exp(-n*i))}function h0(t,e=1){return e-Math.abs(ef(t,e*2)-e)}function p0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function m0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function g0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function _0(t,e){return t+Math.random()*(e-t)}function v0(t){return t*(.5-Math.random())}function x0(t){t!==void 0&&(Yd=t);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y0(t){return t*ts}function S0(t){return t*po}function M0(t){return(t&t-1)===0&&t!==0}function E0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function T0(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function w0(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),d=s((e+i)/2),p=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),y=s((i-e)/2);switch(r){case"XYX":t.set(a*d,l*p,l*h,a*u);break;case"YZY":t.set(l*h,a*d,l*p,a*u);break;case"ZXZ":t.set(l*p,l*h,a*d,a*u);break;case"XZX":t.set(a*d,l*y,l*m,a*u);break;case"YXY":t.set(l*m,a*d,l*y,a*u);break;case"ZYZ":t.set(l*y,l*m,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Br(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const A0={DEG2RAD:ts,RAD2DEG:po,generateUUID:So,clamp:Ot,euclideanModulo:ef,mapLinear:c0,inverseLerp:f0,lerp:ns,damp:d0,pingpong:h0,smoothstep:p0,smootherstep:m0,randInt:g0,randFloat:_0,randFloatSpread:v0,seededRandom:x0,degToRad:y0,radToDeg:S0,isPowerOfTwo:M0,ceilPowerOfTwo:E0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:w0,normalize:Ht,denormalize:Br};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,o,s,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],d=i[4],p=i[7],h=i[2],m=i[5],y=i[8],_=r[0],f=r[3],c=r[6],g=r[1],v=r[4],S=r[7],b=r[2],A=r[5],C=r[8];return o[0]=s*_+a*g+l*b,o[3]=s*f+a*v+l*A,o[6]=s*c+a*S+l*C,o[1]=u*_+d*g+p*b,o[4]=u*f+d*v+p*A,o[7]=u*c+d*S+p*C,o[2]=h*_+m*g+y*b,o[5]=h*f+m*v+y*A,o[8]=h*c+m*S+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*a*u-i*o*d+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],p=d*s-a*u,h=a*l-d*o,m=u*o-s*l,y=n*p+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=p*_,e[1]=(r*u-d*i)*_,e[2]=(a*i-r*s)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=m*_,e[7]=(i*l-u*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new ze;function Lm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function C0(){const t=qa("canvas");return t.style.display="block",t}const qd={};function Dm(t){t in qd||(qd[t]=!0,console.warn(t))}function R0(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const $d=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kd=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[Fi]:{transfer:Wa,primaries:Xa,toReference:t=>t,fromReference:t=>t},[wn]:{transfer:rt,primaries:Xa,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tl]:{transfer:Wa,primaries:ja,toReference:t=>t.applyMatrix3(Kd),fromReference:t=>t.applyMatrix3($d)},[Jc]:{transfer:rt,primaries:ja,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Kd),fromReference:t=>t.applyMatrix3($d).convertLinearToSRGB()}},b0=new Set([Fi,Tl]),Je={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!b0.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=js[e].toReference,r=js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return js[t].primaries},getTransfer:function(t){return t===di?Wa:js[t].transfer}};function Zr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Mr;class P0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=qa("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=qa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Zr(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zr(n[i]/255)*255):n[i]=Zr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L0=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(nu(r[s].image)):o.push(nu(r[s]))}else o=nu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?P0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class Kt extends dr{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=er,r=er,o=Sn,s=tr,a=Rn,l=Li,u=Kt.DEFAULT_ANISOTROPY,d=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=So(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Em;Kt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],d=l[4],p=l[8],h=l[1],m=l[5],y=l[9],_=l[2],f=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-_)<.01&&Math.abs(y-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+_)<.1&&Math.abs(y+f)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(m+1)/2,b=(c+1)/2,A=(d+h)/4,C=(p+_)/4,D=(y+f)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=A/i,o=C/i):S>b?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=A/r,o=D/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=C/o,r=D/o),this.set(i,r,o,n),this}let g=Math.sqrt((f-y)*(f-y)+(p-_)*(p-_)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(f-y)/g,this.y=(p-_)/g,this.z=(h-d)/g,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U0 extends dr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Um(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends U0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Im extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3];const h=o[s+0],m=o[s+1],y=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=_;return}if(p!==_||l!==h||u!==m||d!==y){let f=1-a;const c=l*h+u*m+d*y+p*_,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,c*g);f=Math.sin(f*A)/b,a=Math.sin(a*A)/b}const S=a*g;if(l=l*f+h*S,u=u*f+m*S,d=d*f+y*S,p=p*f+_*S,f===1-a){const b=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=b,u*=b,d*=b,p*=b}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],p=o[s],h=o[s+1],m=o[s+2],y=o[s+3];return e[n]=a*y+d*p+l*m-u*h,e[n+1]=l*y+d*h+u*p-a*m,e[n+2]=u*y+d*m+a*h-l*p,e[n+3]=d*y-a*p-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),p=a(o/2),h=l(i/2),m=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=h*d*p+u*m*y,this._y=u*m*p-h*d*y,this._z=u*d*y+h*m*p,this._w=u*d*p-h*m*y;break;case"YXZ":this._x=h*d*p+u*m*y,this._y=u*m*p-h*d*y,this._z=u*d*y-h*m*p,this._w=u*d*p+h*m*y;break;case"ZXY":this._x=h*d*p-u*m*y,this._y=u*m*p+h*d*y,this._z=u*d*y+h*m*p,this._w=u*d*p-h*m*y;break;case"ZYX":this._x=h*d*p-u*m*y,this._y=u*m*p+h*d*y,this._z=u*d*y-h*m*p,this._w=u*d*p+h*m*y;break;case"YZX":this._x=h*d*p+u*m*y,this._y=u*m*p+h*d*y,this._z=u*d*y-h*m*p,this._w=u*d*p-h*m*y;break;case"XZY":this._x=h*d*p-u*m*y,this._y=u*m*p-h*d*y,this._z=u*d*y+h*m*p,this._w=u*d*p+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],d=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*a+r*u-o*l,this._y=r*d+s*l+o*a-i*u,this._z=o*d+s*u+i*l-r*a,this._w=s*d-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),p=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=s*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=o*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),d=2*(a*n-o*r),p=2*(o*i-s*n);return this.x=n+l*u+s*p-a*d,this.y=i+l*d+a*u-o*p,this.z=r+l*p+o*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new U,Zd=new lr;class Ls{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,gn):gn.fromBufferAttribute(o,s),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),qs.subVectors(this.max,Lo),Er.subVectors(e.a,Lo),Tr.subVectors(e.b,Lo),wr.subVectors(e.c,Lo),ri.subVectors(Tr,Er),oi.subVectors(wr,Tr),Gi.subVectors(Er,wr);let n=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Gi.z,Gi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Gi.z,0,-Gi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Gi.y,Gi.x,0];return!ru(n,Er,Tr,wr,qs)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,Er,Tr,wr,qs))?!1:($s.crossVectors(ri,oi),n=[$s.x,$s.y,$s.z],ru(n,Er,Tr,wr,qs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new U,new U,new U,new U,new U,new U,new U,new U],gn=new U,Ys=new Ls,Er=new U,Tr=new U,wr=new U,ri=new U,oi=new U,Gi=new U,Lo=new U,qs=new U,$s=new U,Wi=new U;function ru(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Wi.fromArray(t,o);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),u=n.dot(Wi),d=i.dot(Wi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const N0=new Ls,Do=new U,ou=new U;class wl{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):N0.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(ou)),this.expandByPoint(Do.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new U,su=new U,Ks=new U,si=new U,au=new U,Zs=new U,lu=new U;class tf{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,n),zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){su.copy(e).add(n).multiplyScalar(.5),Ks.copy(n).sub(e).normalize(),si.copy(this.origin).sub(su);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ks),a=si.dot(this.direction),l=-si.dot(Ks),u=si.lengthSq(),d=Math.abs(1-s*s);let p,h,m,y;if(d>0)if(p=s*l-a,h=s*a-l,y=o*d,p>=0)if(h>=-y)if(h<=y){const _=1/d;p*=_,h*=_,m=p*(p+s*h+2*a)+h*(s*p+h+2*l)+u}else h=o,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*l)+u;else h=-o,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*l)+u;else h<=-y?(p=Math.max(0,-(-s*o+a)),h=p>0?-o:Math.min(Math.max(-o,-l),o),m=-p*p+h*(h+2*l)+u):h<=y?(p=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(p=Math.max(0,-(s*o+a)),h=p>0?o:Math.min(Math.max(-o,-l),o),m=-p*p+h*(h+2*l)+u);else h=s>0?-o:o,p=Math.max(0,-(s*h+a)),m=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(su).addScaledVector(Ks,h),m}intersectSphere(e,n){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,n,i,r,o){au.subVectors(n,e),Zs.subVectors(i,e),lu.crossVectors(au,Zs);let s=this.direction.dot(lu),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(Zs.crossVectors(si,Zs));if(l<0)return null;const u=a*this.direction.dot(au.cross(si));if(u<0||l+u>s)return null;const d=-a*si.dot(lu);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,o,s,a,l,u,d,p,h,m,y,_,f){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,d,p,h,m,y,_,f)}set(e,n,i,r,o,s,a,l,u,d,p,h,m,y,_,f){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=p,c[14]=h,c[3]=m,c[7]=y,c[11]=_,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),o=1/Ar.setFromMatrixColumn(e,1).length(),s=1/Ar.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const h=s*d,m=s*p,y=a*d,_=a*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=m+y*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=y+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,m=l*p,y=u*d,_=u*p;n[0]=h+_*a,n[4]=y*a-m,n[8]=s*u,n[1]=s*p,n[5]=s*d,n[9]=-a,n[2]=m*a-y,n[6]=_+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,m=l*p,y=u*d,_=u*p;n[0]=h-_*a,n[4]=-s*p,n[8]=y+m*a,n[1]=m+y*a,n[5]=s*d,n[9]=_-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,m=s*p,y=a*d,_=a*p;n[0]=l*d,n[4]=y*u-m,n[8]=h*u+_,n[1]=l*p,n[5]=_*u+h,n[9]=m*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,y=a*l,_=a*u;n[0]=l*d,n[4]=_-h*p,n[8]=y*p+m,n[1]=p,n[5]=s*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*p+y,n[10]=h-_*p}else if(e.order==="XZY"){const h=s*l,m=s*u,y=a*l,_=a*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=h*p+_,n[5]=s*d,n[9]=m*p-y,n[2]=y*p-m,n[6]=a*d,n[10]=_*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,F0)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(i,nn),ai.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(i,nn)),ai.normalize(),Qs.crossVectors(nn,ai),r[0]=ai.x,r[4]=Qs.x,r[8]=nn.x,r[1]=ai.y,r[5]=Qs.y,r[9]=nn.y,r[2]=ai.z,r[6]=Qs.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],d=i[1],p=i[5],h=i[9],m=i[13],y=i[2],_=i[6],f=i[10],c=i[14],g=i[3],v=i[7],S=i[11],b=i[15],A=r[0],C=r[4],D=r[8],E=r[12],T=r[1],L=r[5],X=r[9],F=r[13],$=r[2],q=r[6],Y=r[10],K=r[14],j=r[3],de=r[7],ge=r[11],G=r[15];return o[0]=s*A+a*T+l*$+u*j,o[4]=s*C+a*L+l*q+u*de,o[8]=s*D+a*X+l*Y+u*ge,o[12]=s*E+a*F+l*K+u*G,o[1]=d*A+p*T+h*$+m*j,o[5]=d*C+p*L+h*q+m*de,o[9]=d*D+p*X+h*Y+m*ge,o[13]=d*E+p*F+h*K+m*G,o[2]=y*A+_*T+f*$+c*j,o[6]=y*C+_*L+f*q+c*de,o[10]=y*D+_*X+f*Y+c*ge,o[14]=y*E+_*F+f*K+c*G,o[3]=g*A+v*T+S*$+b*j,o[7]=g*C+v*L+S*q+b*de,o[11]=g*D+v*X+S*Y+b*ge,o[15]=g*E+v*F+S*K+b*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],d=e[2],p=e[6],h=e[10],m=e[14],y=e[3],_=e[7],f=e[11],c=e[15];return y*(+o*l*p-r*u*p-o*a*h+i*u*h+r*a*m-i*l*m)+_*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*d-o*l*d)+f*(+n*u*p-n*a*m-o*s*p+i*s*m+o*a*d-i*u*d)+c*(-r*a*d-n*l*p+n*a*h+r*s*p-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],d=e[8],p=e[9],h=e[10],m=e[11],y=e[12],_=e[13],f=e[14],c=e[15],g=p*f*u-_*h*u+_*l*m-a*f*m-p*l*c+a*h*c,v=y*h*u-d*f*u-y*l*m+s*f*m+d*l*c-s*h*c,S=d*_*u-y*p*u+y*a*m-s*_*m-d*a*c+s*p*c,b=y*p*l-d*_*l-y*a*h+s*_*h+d*a*f-s*p*f,A=n*g+i*v+r*S+o*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(_*h*o-p*f*o-_*r*m+i*f*m+p*r*c-i*h*c)*C,e[2]=(a*f*o-_*l*o+_*r*u-i*f*u-a*r*c+i*l*c)*C,e[3]=(p*l*o-a*h*o-p*r*u+i*h*u+a*r*m-i*l*m)*C,e[4]=v*C,e[5]=(d*f*o-y*h*o+y*r*m-n*f*m-d*r*c+n*h*c)*C,e[6]=(y*l*o-s*f*o-y*r*u+n*f*u+s*r*c-n*l*c)*C,e[7]=(s*h*o-d*l*o+d*r*u-n*h*u-s*r*m+n*l*m)*C,e[8]=S*C,e[9]=(y*p*o-d*_*o-y*i*m+n*_*m+d*i*c-n*p*c)*C,e[10]=(s*_*o-y*a*o+y*i*u-n*_*u-s*i*c+n*a*c)*C,e[11]=(d*a*o-s*p*o-d*i*u+n*p*u+s*i*m-n*a*m)*C,e[12]=b*C,e[13]=(d*_*r-y*p*r+y*i*h-n*_*h-d*i*f+n*p*f)*C,e[14]=(y*a*r-s*_*r-y*i*l+n*_*l+s*i*f-n*a*f)*C,e[15]=(s*p*r-d*a*r+d*i*l-n*p*l-s*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,d=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*s,0,u*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,d=s+s,p=a+a,h=o*u,m=o*d,y=o*p,_=s*d,f=s*p,c=a*p,g=l*u,v=l*d,S=l*p,b=i.x,A=i.y,C=i.z;return r[0]=(1-(_+c))*b,r[1]=(m+S)*b,r[2]=(y-v)*b,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(h+c))*A,r[6]=(f+g)*A,r[7]=0,r[8]=(y+v)*C,r[9]=(f-g)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Ar.set(r[0],r[1],r[2]).length();const s=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const u=1/o,d=1/s,p=1/a;return _n.elements[0]*=u,_n.elements[1]*=u,_n.elements[2]*=u,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=p,_n.elements[9]*=p,_n.elements[10]*=p,n.setFromRotationMatrix(_n),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=qn){const l=this.elements,u=2*o/(n-e),d=2*o/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(a===qn)m=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===Ya)m=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=qn){const l=this.elements,u=1/(n-e),d=1/(i-r),p=1/(s-o),h=(n+e)*u,m=(i+r)*d;let y,_;if(a===qn)y=(s+o)*p,_=-2*p;else if(a===Ya)y=o*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ar=new U,_n=new ut,O0=new U(0,0,0),F0=new U(1,1,1),ai=new U,Qs=new U,nn=new U,Qd=new ut,Jd=new lr;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],d=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k0=0;const eh=new U,Cr=new lr,Hn=new ut,Js=new U,Uo=new U,B0=new U,z0=new lr,th=new U(1,0,0),nh=new U(0,1,0),ih=new U(0,0,1),rh={type:"added"},H0={type:"removed"},Rr={type:"childadded",child:null},uu={type:"childremoved",child:null};class Et extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new U,n=new Jn,i=new lr,r=new U(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,n){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Js.copy(e):Js.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Uo,Js,this.up):Hn.lookAt(Js,Uo,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(Hn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(H0),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),p=s(e.shapes),h=s(e.skeletons),m=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new U(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new U,Vn=new U,cu=new U,Gn=new U,br=new U,Pr=new U,oh=new U,fu=new U,du=new U,hu=new U;class Cn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vn.subVectors(e,n),r.cross(vn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){vn.subVectors(r,n),Vn.subVectors(i,n),cu.subVectors(e,n);const s=vn.dot(vn),a=vn.dot(Vn),l=vn.dot(cu),u=Vn.dot(Vn),d=Vn.dot(cu),p=s*u-a*a;if(p===0)return o.set(0,0,0),null;const h=1/p,m=(u*l-a*d)*h,y=(s*d-a*l)*h;return o.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Gn.x),l.addScaledVector(s,Gn.y),l.addScaledVector(a,Gn.z),l)}static isFrontFacing(e,n,i,r){return vn.subVectors(i,n),Vn.subVectors(e,n),vn.cross(Vn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;br.subVectors(r,i),Pr.subVectors(o,i),fu.subVectors(e,i);const l=br.dot(fu),u=Pr.dot(fu);if(l<=0&&u<=0)return n.copy(i);du.subVectors(e,r);const d=br.dot(du),p=Pr.dot(du);if(d>=0&&p<=d)return n.copy(r);const h=l*p-d*u;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(br,s);hu.subVectors(e,o);const m=br.dot(hu),y=Pr.dot(hu);if(y>=0&&m<=y)return n.copy(o);const _=m*u-l*y;if(_<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(Pr,a);const f=d*y-m*p;if(f<=0&&p-d>=0&&m-y>=0)return oh.subVectors(o,r),a=(p-d)/(p-d+(m-y)),n.copy(r).addScaledVector(oh,a);const c=1/(f+_+h);return s=_*c,a=h*c,n.copy(i).addScaledVector(br,s).addScaledVector(Pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ea={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=ef(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=pu(s,o,e+1/3),this.g=pu(s,o,e),this.b=pu(s,o,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=wn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=Om[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=tu(e.r),this.g=tu(e.g),this.b=tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Je.fromWorkingColorSpace(It.copy(this),e),Math.round(Ot(It.r*255,0,255))*65536+Math.round(Ot(It.g*255,0,255))*256+Math.round(Ot(It.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,o=It.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const d=(a+s)/2;if(a===s)l=0,u=0;else{const p=s-a;switch(u=d<=.5?p/(s+a):p/(2-s-a),s){case i:l=(r-o)/p+(r<o?6:0);break;case r:l=(o-i)/p+2;break;case o:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=wn){Je.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+n,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(li),e.getHSL(ea);const i=ns(li.h,ea.h,n),r=ns(li.s,ea.s,n),o=ns(li.l,ea.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new qe;qe.NAMES=Om;let V0=0;class Ds extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=So(),this.name="",this.type="Material",this.blending=$r,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nf extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new U,ta=new Me;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ta.fromBufferAttribute(this,n),ta.applyMatrix3(e),this.setXY(n,ta.x,ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Br(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Br(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Br(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Br(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Br(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array),o=Ht(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xd&&(e.usage=this.usage),e}}class Fm extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class km extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class In extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let G0=0;const ln=new ut,mu=new Et,Lr=new U,rn=new Ls,Io=new Ls,Ct=new U;class Tn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lm(e)?km:Fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,n,i){return ln.makeTranslation(e,n,i),this.applyMatrix4(ln),this}scale(e,n,i){return ln.makeScale(e,n,i),this.applyMatrix4(ln),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new In(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,Io.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,Io.max),rn.expandByPoint(Ct)):(rn.expandByPoint(Io.min),rn.expandByPoint(Io.max))}rn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ct.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Ct.fromBufferAttribute(a,u),l&&(Lr.fromBufferAttribute(e,u),Ct.add(Lr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new U,l[D]=new U;const u=new U,d=new U,p=new U,h=new Me,m=new Me,y=new Me,_=new U,f=new U;function c(D,E,T){u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,T),h.fromBufferAttribute(o,D),m.fromBufferAttribute(o,E),y.fromBufferAttribute(o,T),d.sub(u),p.sub(u),m.sub(h),y.sub(h);const L=1/(m.x*y.y-y.x*m.y);!isFinite(L)||(_.copy(d).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(L),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(L),a[D].add(_),a[E].add(_),a[T].add(_),l[D].add(f),l[E].add(f),l[T].add(f))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let D=0,E=g.length;D<E;++D){const T=g[D],L=T.start,X=T.count;for(let F=L,$=L+X;F<$;F+=3)c(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new U,S=new U,b=new U,A=new U;function C(D){b.fromBufferAttribute(r,D),A.copy(b);const E=a[D];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(A,E);const L=S.dot(l[D])<0?-1:1;s.setXYZW(D,v.x,v.y,v.z,L)}for(let D=0,E=g.length;D<E;++D){const T=g[D],L=T.start,X=T.count;for(let F=L,$=L+X;F<$;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,o=new U,s=new U,a=new U,l=new U,u=new U,d=new U,p=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),_=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,f),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,f),a.add(d),l.add(d),u.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),p.subVectors(r,o),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,p=a.normalized,h=new u.constructor(l.length*d);let m=0,y=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let c=0;c<d;c++)h[y++]=u[m++]}return new Un(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let d=0,p=u.length;d<p;d++){const h=u[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,h=u.length;p<h;p++){const m=u[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const o=e.morphAttributes;for(const u in o){const d=[],p=o[u];for(let h=0,m=p.length;h<m;h++)d.push(p[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new ut,Xi=new tf,na=new wl,ah=new U,Dr=new U,Ur=new U,Ir=new U,gu=new U,ia=new U,ra=new Me,oa=new Me,sa=new Me,lh=new U,uh=new U,ch=new U,aa=new U,la=new U;class bn extends Et{constructor(e=new Tn,n=new nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ia.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const d=a[l],p=o[l];d!==0&&(gu.fromBufferAttribute(p,e),s?ia.addScaledVector(gu,d):ia.addScaledVector(gu.sub(n),d))}n.add(ia)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(o),Xi.copy(e.ray).recast(e.near),!(na.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(na,ah)===null||Xi.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(sh.copy(o).invert(),Xi.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,d=o.attributes.uv1,p=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,_=h.length;y<_;y++){const f=h[y],c=s[f.materialIndex],g=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=g,b=v;S<b;S+=3){const A=a.getX(S),C=a.getX(S+1),D=a.getX(S+2);r=ua(this,c,e,i,u,d,p,A,C,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=y,c=_;f<c;f+=3){const g=a.getX(f),v=a.getX(f+1),S=a.getX(f+2);r=ua(this,s,e,i,u,d,p,g,v,S),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,_=h.length;y<_;y++){const f=h[y],c=s[f.materialIndex],g=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=g,b=v;S<b;S+=3){const A=S,C=S+1,D=S+2;r=ua(this,c,e,i,u,d,p,A,C,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=y,c=_;f<c;f+=3){const g=f,v=f+1,S=f+2;r=ua(this,s,e,i,u,d,p,g,v,S),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function W0(t,e,n,i,r,o,s,a){let l;if(e.side===$t?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Pi,a),l===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(la);return u<n.near||u>n.far?null:{distance:u,point:la.clone(),object:t}}function ua(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Dr),t.getVertexPosition(l,Ur),t.getVertexPosition(u,Ir);const d=W0(t,e,n,i,Dr,Ur,Ir,aa);if(d){r&&(ra.fromBufferAttribute(r,a),oa.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,u),d.uv=Cn.getInterpolation(aa,Dr,Ur,Ir,ra,oa,sa,new Me)),o&&(ra.fromBufferAttribute(o,a),oa.fromBufferAttribute(o,l),sa.fromBufferAttribute(o,u),d.uv1=Cn.getInterpolation(aa,Dr,Ur,Ir,ra,oa,sa,new Me)),s&&(lh.fromBufferAttribute(s,a),uh.fromBufferAttribute(s,l),ch.fromBufferAttribute(s,u),d.normal=Cn.getInterpolation(aa,Dr,Ur,Ir,lh,uh,ch,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new U,materialIndex:0};Cn.getNormal(Dr,Ur,Ir,p.normal),d.face=p}return d}class Us extends Tn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],d=[],p=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new In(u,3)),this.setAttribute("normal",new In(d,3)),this.setAttribute("uv",new In(p,2));function y(_,f,c,g,v,S,b,A,C,D,E){const T=S/C,L=b/D,X=S/2,F=b/2,$=A/2,q=C+1,Y=D+1;let K=0,j=0;const de=new U;for(let ge=0;ge<Y;ge++){const G=ge*L-F;for(let se=0;se<q;se++){const pe=se*T-X;de[_]=pe*g,de[f]=G*v,de[c]=$,u.push(de.x,de.y,de.z),de[_]=0,de[f]=0,de[c]=A>0?1:-1,d.push(de.x,de.y,de.z),p.push(se/C),p.push(1-ge/D),K+=1}}for(let ge=0;ge<D;ge++)for(let G=0;G<C;G++){const se=h+G+q*ge,pe=h+G+q*(ge+1),z=h+(G+1)+q*(ge+1),Z=h+(G+1)+q*ge;l.push(se,pe,Z),l.push(pe,z,Z),j+=6}a.addGroup(m,j,E),m+=j,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function X0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const $a={clone:mo,merge:Vt};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class zm extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=qn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new U,fh=new Me,dh=new Me;class Yt extends zm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,n){return this.getViewBounds(e,fh,dh),n.subVectors(dh,fh)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ts*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Or=1;class q0 extends Et{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(Nr,Or,e,n);r.layers=this.layers,this.add(r);const o=new Yt(Nr,Or,e,n);o.layers=this.layers,this.add(o);const s=new Yt(Nr,Or,e,n);s.layers=this.layers,this.add(s);const a=new Yt(Nr,Or,e,n);a.layers=this.layers,this.add(a);const l=new Yt(Nr,Or,e,n);l.layers=this.layers,this.add(l);const u=new Yt(Nr,Or,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Hm extends Kt{constructor(e,n,i,r,o,s,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:lo,super(e,n,i,r,o,s,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends En{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Us(5,5,5),o=new qt({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Zn});o.uniforms.tEquirect.value=n;const s=new bn(r,o),a=n.minFilter;return n.minFilter===tr&&(n.minFilter=Sn),new q0(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const _u=new U,K0=new U,Z0=new ze;class ci{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(K0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Z0.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new wl,ca=new U;class rf{constructor(e=new ci,n=new ci,i=new ci,r=new ci,o=new ci,s=new ci){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qn){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],d=r[5],p=r[6],h=r[7],m=r[8],y=r[9],_=r[10],f=r[11],c=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-o,h-u,f-m,S-c).normalize(),i[1].setComponents(l+o,h+u,f+m,S+c).normalize(),i[2].setComponents(l+s,h+d,f+y,S+g).normalize(),i[3].setComponents(l-s,h-d,f-y,S-g).normalize(),i[4].setComponents(l-a,h-p,f-_,S-v).normalize(),n===qn)i[5].setComponents(l+a,h+p,f+_,S+v).normalize();else if(n===Ya)i[5].setComponents(a,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vm(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Q0(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,u){const d=l.array,p=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),p.count===-1&&h.length===0&&t.bufferSubData(u,0,d),h.length!==0){for(let m=0,y=h.length;m<y;m++){const _=h[m];t.bufferSubData(u,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class Al extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,p=e/a,h=n/l,m=[],y=[],_=[],f=[];for(let c=0;c<d;c++){const g=c*h-s;for(let v=0;v<u;v++){const S=v*p-o;y.push(S,-g,0),_.push(0,0,1),f.push(v/a),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,S=g+u*(c+1),b=g+1+u*(c+1),A=g+1+u*c;m.push(v,S,A),m.push(S,b,A)}this.setIndex(m),this.setAttribute("position",new In(y,3)),this.setAttribute("normal",new In(_,3)),this.setAttribute("uv",new In(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,My=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ES=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:J0,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:ox,aomap_pars_fragment:sx,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:ux,beginnormal_vertex:cx,bsdfs:fx,iridescence_fragment:dx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:Sx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:Tx,displacementmap_pars_vertex:wx,displacementmap_vertex:Ax,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:bx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ux,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Xx,envmap_vertex:Nx,fog_vertex:Ox,fog_pars_vertex:Fx,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Qx,lights_fragment_maps:Jx,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:oy,map_pars_fragment:sy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:uy,metalnessmap_pars_fragment:cy,morphinstance_vertex:fy,morphcolor_vertex:dy,morphnormal_vertex:hy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:vy,normal_pars_vertex:xy,normal_vertex:yy,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:My,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:wy,opaque_fragment:Ay,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:by,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Oy,shadowmask_pars_fragment:Fy,skinbase_vertex:ky,skinning_pars_vertex:By,skinning_vertex:zy,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:jy,transmission_pars_fragment:Yy,uv_pars_fragment:qy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Qy,background_frag:Jy,backgroundCube_vert:eS,backgroundCube_frag:tS,cube_vert:nS,cube_frag:iS,depth_vert:rS,depth_frag:oS,distanceRGBA_vert:sS,distanceRGBA_frag:aS,equirect_vert:lS,equirect_frag:uS,linedashed_vert:cS,linedashed_frag:fS,meshbasic_vert:dS,meshbasic_frag:hS,meshlambert_vert:pS,meshlambert_frag:mS,meshmatcap_vert:gS,meshmatcap_frag:_S,meshnormal_vert:vS,meshnormal_frag:xS,meshphong_vert:yS,meshphong_frag:SS,meshphysical_vert:MS,meshphysical_frag:ES,meshtoon_vert:TS,meshtoon_frag:wS,points_vert:AS,points_frag:CS,shadow_vert:RS,shadow_frag:bS,sprite_vert:PS,sprite_frag:LS},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},An={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const fa={r:0,b:0,g:0},Yi=new Jn,DS=new ut;function US(t,e,n,i,r,o,s){const a=new qe(0);let l=o===!0?0:1,u,d,p=null,h=0,m=null;function y(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function _(g){let v=!1;const S=y(g);S===null?c(a,l):S&&S.isColor&&(c(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(g,v){const S=y(v);S&&(S.isCubeTexture||S.mapping===El)?(d===void 0&&(d=new bn(new Us(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:mo(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Yi.copy(v.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(Yi)),d.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,(p!==S||h!==S.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=S,h=S.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new bn(new Al(2,2),new qt({name:"BackgroundMaterial",uniforms:mo(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,h=S.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,v){g.getRGB(fa,Bm(t)),i.buffers.color.setClear(fa.r,fa.g,fa.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:_,addToRenderList:f}}function IS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(T,L,X,F,$){let q=!1;const Y=p(F,X,L);o!==Y&&(o=Y,u(o.object)),q=m(T,F,X,$),q&&y(T,F,X,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,S(T,L,X,F),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(T){return t.bindVertexArray(T)}function d(T){return t.deleteVertexArray(T)}function p(T,L,X){const F=X.wireframe===!0;let $=i[T.id];$===void 0&&($={},i[T.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let Y=q[F];return Y===void 0&&(Y=h(l()),q[F]=Y),Y}function h(T){const L=[],X=[],F=[];for(let $=0;$<n;$++)L[$]=0,X[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:F,object:T,attributes:{},index:null}}function m(T,L,X,F){const $=o.attributes,q=L.attributes;let Y=0;const K=X.getAttributes();for(const j in K)if(K[j].location>=0){const ge=$[j];let G=q[j];if(G===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(G=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(G=T.instanceColor)),ge===void 0||ge.attribute!==G||G&&ge.data!==G.data)return!0;Y++}return o.attributesNum!==Y||o.index!==F}function y(T,L,X,F){const $={},q=L.attributes;let Y=0;const K=X.getAttributes();for(const j in K)if(K[j].location>=0){let ge=q[j];ge===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor));const G={};G.attribute=ge,ge&&ge.data&&(G.data=ge.data),$[j]=G,Y++}o.attributes=$,o.attributesNum=Y,o.index=F}function _(){const T=o.newAttributes;for(let L=0,X=T.length;L<X;L++)T[L]=0}function f(T){c(T,0)}function c(T,L){const X=o.newAttributes,F=o.enabledAttributes,$=o.attributeDivisors;X[T]=1,F[T]===0&&(t.enableVertexAttribArray(T),F[T]=1),$[T]!==L&&(t.vertexAttribDivisor(T,L),$[T]=L)}function g(){const T=o.newAttributes,L=o.enabledAttributes;for(let X=0,F=L.length;X<F;X++)L[X]!==T[X]&&(t.disableVertexAttribArray(X),L[X]=0)}function v(T,L,X,F,$,q,Y){Y===!0?t.vertexAttribIPointer(T,L,X,$,q):t.vertexAttribPointer(T,L,X,F,$,q)}function S(T,L,X,F){_();const $=F.attributes,q=X.getAttributes(),Y=L.defaultAttributeValues;for(const K in q){const j=q[K];if(j.location>=0){let de=$[K];if(de===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(de=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(de=T.instanceColor)),de!==void 0){const ge=de.normalized,G=de.itemSize,se=e.get(de);if(se===void 0)continue;const pe=se.buffer,z=se.type,Z=se.bytesPerElement,he=z===t.INT||z===t.UNSIGNED_INT||de.gpuType===Tm;if(de.isInterleavedBufferAttribute){const ae=de.data,Ue=ae.stride,Re=de.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<j.locationSize;We++)c(j.location+We,ae.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<j.locationSize;We++)f(j.location+We);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let We=0;We<j.locationSize;We++)v(j.location+We,G/j.locationSize,z,ge,Ue*Z,(Re+G/j.locationSize*We)*Z,he)}else{if(de.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)c(j.location+ae,de.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<j.locationSize;ae++)f(j.location+ae);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let ae=0;ae<j.locationSize;ae++)v(j.location+ae,G/j.locationSize,z,ge,G*Z,G/j.locationSize*ae*Z,he)}}else if(Y!==void 0){const ge=Y[K];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(j.location,ge);break;case 3:t.vertexAttrib3fv(j.location,ge);break;case 4:t.vertexAttrib4fv(j.location,ge);break;default:t.vertexAttrib1fv(j.location,ge)}}}}g()}function b(){D();for(const T in i){const L=i[T];for(const X in L){const F=L[X];for(const $ in F)d(F[$].object),delete F[$];delete L[X]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const L=i[T.id];for(const X in L){const F=L[X];for(const $ in F)d(F[$].object),delete F[$];delete L[X]}delete i[T.id]}function C(T){for(const L in i){const X=i[L];if(X[T.id]===void 0)continue;const F=X[T.id];for(const $ in F)d(F[$].object),delete F[$];delete X[T.id]}}function D(){E(),s=!0,o!==r&&(o=r,u(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:f,disableUnusedAttributes:g}}function NS(t,e,n){let i;function r(u){i=u}function o(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,p){p!==0&&(t.drawArraysInstanced(i,u,d,p),n.update(d,i,p))}function a(u,d,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<p;m++)this.render(u[m],d[m]);else{h.multiDrawArraysWEBGL(i,u,0,d,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];n.update(m,i,1)}}function l(u,d,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<u.length;y++)s(u[y],d[y],h[y]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,p);let y=0;for(let _=0;_<p;_++)y+=d[_];for(let _=0;_<h.length;_++)n.update(y,i,h[_])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OS(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==Rn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Li&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:S,maxSamples:b}}function FS(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ci,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,m){const y=p.clippingPlanes,_=p.clipIntersection,f=p.clipShadows,c=t.get(p);if(!r||y===null||y.length===0||o&&!f)o?d(null):u();else{const g=o?0:i,v=g*4;let S=c.clippingState||null;l.value=S,S=d(y,h,v,m);for(let b=0;b!==v;++b)S[b]=n[b];c.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,m,y){const _=p!==null?p.length:0;let f=null;if(_!==0){if(f=l.value,y!==!0||f===null){const c=m+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<c)&&(f=new Float32Array(c));for(let v=0,S=m;v!==_;++v,S+=4)s.copy(p[v]).applyMatrix4(g,a),s.normal.toArray(f,S),f[S+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function kS(t){let e=new WeakMap;function n(s,a){return a===rc?s.mapping=lo:a===oc&&(s.mapping=uo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===rc||a===oc)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new $0(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class of extends zm{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vr=4,hh=[.125,.215,.35,.446,.526,.582],Ji=20,vu=new of,ph=new qe;let xu=null,yu=0,Su=0,Mu=!1;const $i=(1+Math.sqrt(5))/2,Fr=1/$i,mh=[new U(-$i,Fr,0),new U($i,Fr,0),new U(-Fr,0,$i),new U(Fr,0,$i),new U(0,$i,-Fr),new U(0,$i,Fr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,yu,Su),this._renderer.xr.enabled=Mu,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:yi,format:Rn,colorSpace:Fi,depthBuffer:!1},r=_h(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BS(o)),this._blurMaterial=zS(o,e,n)}return r}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,vu)}_sceneToCubeUV(e,n,i,r){const a=new Yt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(ph),d.toneMapping=xi,d.autoClear=!1;const m=new nf({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),y=new bn(new Us,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(ph),_=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;da(r,g*v,c>2?v:0,v,v),d.setRenderTarget(r),_&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===lo||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;da(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=mh[(r-o-1)%mh.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new bn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ji-1),_=o/y,f=isFinite(o)?1+Math.floor(d*_):Ji;f>Ji&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ji}`);const c=[];let g=0;for(let C=0;C<Ji;++C){const D=C/_,E=Math.exp(-D*D/2);c.push(E),C===0?g+=E:C<f&&(g+=2*E)}for(let C=0;C<c.length;C++)c[C]=c[C]/g;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Vr?r-v+Vr:0),A=4*(this._cubeSize-S);da(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(p,vu)}}function BS(t){const e=[],n=[],i=[];let r=t;const o=t-Vr+1+hh.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Vr?l=hh[s-t+Vr-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,p=1+u,h=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,y=6,_=3,f=2,c=1,g=new Float32Array(_*y*m),v=new Float32Array(f*y*m),S=new Float32Array(c*y*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,D=A>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];g.set(E,_*y*A),v.set(h,f*y*A);const T=[A,A,A,A,A,A];S.set(T,c*y*A)}const b=new Tn;b.setAttribute("position",new Un(g,_)),b.setAttribute("uv",new Un(v,f)),b.setAttribute("faceIndex",new Un(S,c)),e.push(b),r>Vr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _h(t,e,n){const i=new En(t,e,n);return i.texture.mapping=El,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zS(t,e,n){const i=new Float32Array(Ji),r=new U(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function vh(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function xh(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===rc||l===oc,d=l===lo||l===uo;if(u||d){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gh(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new gh(t)),p=u?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",o),p.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function VS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Dm("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GS(t,e,n,i){const r={},o=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let f=0,c=_.length;f<c;f++)e.remove(_[f])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const y in m){const _=m[y];for(let f=0,c=_.length;f<c;f++)e.update(_[f],t.ARRAY_BUFFER)}}function u(p){const h=[],m=p.index,y=p.attributes.position;let _=0;if(m!==null){const g=m.array;_=m.version;for(let v=0,S=g.length;v<S;v+=3){const b=g[v+0],A=g[v+1],C=g[v+2];h.push(b,A,A,C,C,b)}}else if(y!==void 0){const g=y.array;_=y.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const b=v+0,A=v+1,C=v+2;h.push(b,A,A,C,C,b)}}else return;const f=new(Lm(h)?km:Fm)(h,1);f.version=_;const c=o.get(p);c&&e.remove(c),o.set(p,f)}function d(p){const h=o.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&u(p)}else u(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function WS(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,m){t.drawElements(i,m,o,h*s),n.update(m,i,1)}function u(h,m,y){y!==0&&(t.drawElementsInstanced(i,m,o,h*s,y),n.update(m,i,y))}function d(h,m,y){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<y;f++)this.render(h[f]/s,m[f]);else{_.multiDrawElementsWEBGL(i,m,0,o,h,0,y);let f=0;for(let c=0;c<y;c++)f+=m[c];n.update(f,i,1)}}function p(h,m,y,_){if(y===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<h.length;c++)u(h[c]/s,m[c],_[c]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,o,h,0,_,0,y);let c=0;for(let g=0;g<y;g++)c+=m[g];for(let g=0;g<_.length;g++)n.update(c,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function XS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jS(t,e,n){const i=new WeakMap,r=new st;function o(s,a,l){const u=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var m=T;h!==void 0&&h.texture.dispose();const y=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),_===!0&&(S=2),f===!0&&(S=3);let b=a.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*p),D=new Im(C,b,A,p);D.type=pi,D.needsUpdate=!0;const E=S*4;for(let L=0;L<p;L++){const X=c[L],F=g[L],$=v[L],q=b*A*4*L;for(let Y=0;Y<X.count;Y++){const K=Y*E;y===!0&&(r.fromBufferAttribute(X,Y),C[q+K+0]=r.x,C[q+K+1]=r.y,C[q+K+2]=r.z,C[q+K+3]=0),_===!0&&(r.fromBufferAttribute(F,Y),C[q+K+4]=r.x,C[q+K+5]=r.y,C[q+K+6]=r.z,C[q+K+7]=0),f===!0&&(r.fromBufferAttribute($,Y),C[q+K+8]=r.x,C[q+K+9]=r.y,C[q+K+10]=r.z,C[q+K+11]=$.itemSize===4?r.w:1)}}h={count:p,texture:D,size:new Me(b,A)},i.set(a,h),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let y=0;for(let f=0;f<u.length;f++)y+=u[f];const _=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function YS(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class Gm extends Kt{constructor(e,n,i,r,o,s,a,l,u,d=Kr){if(d!==Kr&&d!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Kr&&(i=co),i===void 0&&d===ho&&(i=fo),super(null,r,o,s,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Wm=new Kt,Xm=new Gm(1,1);Xm.compareFunction=Pm;const jm=new Im,Ym=new I0,qm=new Hm,yh=[],Sh=[],Mh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=yh[r];if(o===void 0&&(o=new Float32Array(r),yh[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cl(t,e){let n=Sh[e];n===void 0&&(n=new Int32Array(e),Sh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function KS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function ZS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function QS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Th.set(i),t.uniformMatrix2fv(this.addr,!1,Th),wt(n,i)}}function JS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Eh.set(i),t.uniformMatrix3fv(this.addr,!1,Eh),wt(n,i)}}function eM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Mh.set(i),t.uniformMatrix4fv(this.addr,!1,Mh),wt(n,i)}}function tM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function iM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function rM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function oM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function aM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function lM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function uM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?Xm:Wm;n.setTexture2D(e||o,r)}function cM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ym,r)}function fM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qm,r)}function dM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||jm,r)}function hM(t){switch(t){case 5126:return qS;case 35664:return $S;case 35665:return KS;case 35666:return ZS;case 35674:return QS;case 35675:return JS;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return oM;case 36294:return sM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return dM}}function pM(t,e){t.uniform1fv(this.addr,e)}function mM(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function gM(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function _M(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function vM(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xM(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yM(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SM(t,e){t.uniform1iv(this.addr,e)}function MM(t,e){t.uniform2iv(this.addr,e)}function EM(t,e){t.uniform3iv(this.addr,e)}function TM(t,e){t.uniform4iv(this.addr,e)}function wM(t,e){t.uniform1uiv(this.addr,e)}function AM(t,e){t.uniform2uiv(this.addr,e)}function CM(t,e){t.uniform3uiv(this.addr,e)}function RM(t,e){t.uniform4uiv(this.addr,e)}function bM(t,e,n){const i=this.cache,r=e.length,o=Cl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Wm,o[s])}function PM(t,e,n){const i=this.cache,r=e.length,o=Cl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Ym,o[s])}function LM(t,e,n){const i=this.cache,r=e.length,o=Cl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||qm,o[s])}function DM(t,e,n){const i=this.cache,r=e.length,o=Cl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||jm,o[s])}function UM(t){switch(t){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return DM}}class IM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hM(n.type)}}class NM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UM(n.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function wh(t,e){t.seq.push(e),t.map[e.id]=e}function FM(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const o=Eu.exec(i),s=Eu.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){wh(n,u===void 0?new IM(a,t,e):new NM(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new OM(a),wh(n,p)),n=p}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);FM(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Ah(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kM=37297;let BM=0;function zM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function HM(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===ja&&n===Xa?i="LinearDisplayP3ToLinearSRGB":e===Xa&&n===ja&&(i="LinearSRGBToLinearDisplayP3"),t){case Fi:case Tl:return[i,"LinearTransferOETF"];case wn:case Jc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ch(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+zM(t.getShaderSource(e),s)}else return r}function VM(t,e){const n=HM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function GM(t,e){let n;switch(e){case Nv:n="Linear";break;case Ov:n="Reinhard";break;case Fv:n="OptimizedCineon";break;case kv:n="ACESFilmic";break;case zv:n="AgX";break;case Hv:n="Neutral";break;case Bv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function XM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function $o(t){return t!==""}function Rh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(t){return t.replace(YM,$M)}const qM=new Map;function $M(t,e){let n=Be[e];if(n===void 0){const i=qM.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(n)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(t){return t.replace(KM,ZM)}function ZM(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Lh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===av?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function tE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Mm:e="ENVMAP_BLENDING_MULTIPLY";break;case Uv:e="ENVMAP_BLENDING_MIX";break;case Iv:e="ENVMAP_BLENDING_ADD";break}return e}function nE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iE(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=QM(n),u=JM(n),d=eE(n),p=tE(n),h=nE(n),m=WM(n),y=XM(o),_=r.createProgram();let f,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter($o).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter($o).join(`
`),c.length>0&&(c+=`
`)):(f=[Lh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),c=[Lh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?Be.tonemapping_pars_fragment:"",n.toneMapping!==xi?GM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,VM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),s=lc(s),s=Rh(s,n),s=bh(s,n),a=lc(a),a=Rh(a,n),a=bh(a,n),s=Ph(s),a=Ph(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",n.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+f+s,S=g+c+a,b=Ah(r,r.VERTEX_SHADER,v),A=Ah(r,r.FRAGMENT_SHADER,S);r.attachShader(_,b),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(L){if(t.debug.checkShaderErrors){const X=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(b).trim(),$=r.getShaderInfoLog(A).trim();let q=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,A);else{const K=Ch(r,b,"vertex"),j=Ch(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+K+`
`+j)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(F===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:q,programLog:X,vertexShader:{log:F,prefix:f},fragmentShader:{log:$,prefix:c}})}r.deleteShader(b),r.deleteShader(A),D=new Pa(r,_),E=jM(r,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,kM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let rE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sE(e),n.set(e,i)),i}}class sE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function aE(t,e,n,i,r,o,s){const a=new Nm,l=new oE,u=new Set,d=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function f(E,T,L,X,F){const $=X.fog,q=F.geometry,Y=E.isMeshStandardMaterial?X.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||Y),j=!!K&&K.mapping===El?K.image.height:null,de=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,G=ge!==void 0?ge.length:0;let se=0;q.morphAttributes.position!==void 0&&(se=1),q.morphAttributes.normal!==void 0&&(se=2),q.morphAttributes.color!==void 0&&(se=3);let pe,z,Z,he;if(de){const Ke=An[de];pe=Ke.vertexShader,z=Ke.fragmentShader}else pe=E.vertexShader,z=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const ae=t.getRenderTarget(),Ue=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,We=!!E.map,P=!!E.matcap,Xe=!!K,Ge=!!E.aoMap,tt=!!E.lightMap,Ae=!!E.bumpMap,je=!!E.normalMap,He=!!E.displacementMap,Ne=!!E.emissiveMap,lt=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,Q=E.dispersion>0,ee=E.iridescence>0,te=E.sheen>0,Ee=E.transmission>0,ue=M&&!!E.anisotropyMap,le=H&&!!E.clearcoatMap,Oe=H&&!!E.clearcoatNormalMap,re=H&&!!E.clearcoatRoughnessMap,ye=ee&&!!E.iridescenceMap,Ve=ee&&!!E.iridescenceThicknessMap,be=te&&!!E.sheenColorMap,fe=te&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,ke=!!E.specularColorMap,ct=!!E.specularIntensityMap,x=Ee&&!!E.transmissionMap,V=Ee&&!!E.thicknessMap,O=!!E.gradientMap,W=!!E.alphaMap,J=E.alphaTest>0,Te=!!E.alphaHash,Ie=!!E.extensions;let ft=xi;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ft=t.toneMapping);const _t={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:pe,fragmentShader:z,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Fi,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:P,envMap:Xe,envMapMode:Xe&&K.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:tt,bumpMap:Ae,normalMap:je,displacementMap:h&&He,emissiveMap:Ne,normalMapObjectSpace:je&&E.normalMapType===n0,normalMapTangentSpace:je&&E.normalMapType===t0,metalnessMap:lt,roughnessMap:R,anisotropy:M,anisotropyMap:ue,clearcoat:H,clearcoatMap:le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ee,iridescenceMap:ye,iridescenceThicknessMap:Ve,sheen:te,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:Fe,specularColorMap:ke,specularIntensityMap:ct,transmission:Ee,transmissionMap:x,thicknessMap:V,gradientMap:O,opaque:E.transparent===!1&&E.blending===$r&&E.alphaToCoverage===!1,alphaMap:W,alphaTest:J,alphaHash:Te,combine:E.combine,mapUv:We&&_(E.map.channel),aoMapUv:Ge&&_(E.aoMap.channel),lightMapUv:tt&&_(E.lightMap.channel),bumpMapUv:Ae&&_(E.bumpMap.channel),normalMapUv:je&&_(E.normalMap.channel),displacementMapUv:He&&_(E.displacementMap.channel),emissiveMapUv:Ne&&_(E.emissiveMap.channel),metalnessMapUv:lt&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:le&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:Fe&&_(E.specularMap.channel),specularColorMapUv:ke&&_(E.specularColorMap.channel),specularIntensityMapUv:ct&&_(E.specularIntensityMap.channel),transmissionMapUv:x&&_(E.transmissionMap.channel),thicknessMapUv:V&&_(E.thicknessMap.channel),alphaMapUv:W&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(je||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(We||W),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jn,flipSided:E.side===$t,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ie&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=u.has(1),_t.vertexUv2s=u.has(2),_t.vertexUv3s=u.has(3),u.clear(),_t}function c(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)T.push(L),T.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(g(T,E),v(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function g(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.transmission&&a.enable(14),T.sheen&&a.enable(15),T.opaque&&a.enable(16),T.pointsUvs&&a.enable(17),T.decodeVideoTexture&&a.enable(18),T.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const T=y[E.type];let L;if(T){const X=An[T];L=$a.clone(X.uniforms)}else L=E.uniforms;return L}function b(E,T){let L;for(let X=0,F=d.length;X<F;X++){const $=d[X];if($.cacheKey===T){L=$,++L.usedTimes;break}}return L===void 0&&(L=new iE(t,T,E,o),d.push(L)),L}function A(E){if(--E.usedTimes===0){const T=d.indexOf(E);d[T]=d[d.length-1],d.pop(),E.destroy()}}function C(E){l.remove(E)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:D}}function lE(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function uE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Uh(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(p,h,m,y,_,f){let c=t[e];return c===void 0?(c={id:p.id,object:p,geometry:h,material:m,groupOrder:y,renderOrder:p.renderOrder,z:_,group:f},t[e]=c):(c.id=p.id,c.object=p,c.geometry=h,c.material=m,c.groupOrder=y,c.renderOrder=p.renderOrder,c.z=_,c.group=f),e++,c}function a(p,h,m,y,_,f){const c=s(p,h,m,y,_,f);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(p,h,m,y,_,f){const c=s(p,h,m,y,_,f);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(p,h){n.length>1&&n.sort(p||uE),i.length>1&&i.sort(h||Dh),r.length>1&&r.sort(h||Dh)}function d(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:u}}function cE(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Uh,t.set(i,[s])):r>=o.length?(s=new Uh,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function fE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new qe};break;case"SpotLight":n={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function dE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hE=0;function pE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mE(t){const e=new fE,n=dE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new ut,s=new ut;function a(u){let d=0,p=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,y=0,_=0,f=0,c=0,g=0,v=0,S=0,b=0,A=0,C=0;u.sort(pE);for(let E=0,T=u.length;E<T;E++){const L=u[E],X=L.color,F=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=X.r*F,p+=X.g*F,h+=X.b*F;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],F);C++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,j=n.get(L);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=L.shadow.matrix,g++}i.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(X).multiplyScalar(F),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[_]=Y;const K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=K.matrix,L.castShadow){const j=n.get(L);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=q,S++}_++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(X).multiplyScalar(F),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[f]=Y,f++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const K=L.shadow,j=n.get(L);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=q,i.pointShadowMatrix[y]=L.shadow.matrix,v++}i.point[y]=Y,y++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(F),Y.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[c]=Y,c++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==m||D.pointLength!==y||D.spotLength!==_||D.rectAreaLength!==f||D.hemiLength!==c||D.numDirectionalShadows!==g||D.numPointShadows!==v||D.numSpotShadows!==S||D.numSpotMaps!==b||D.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=y,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,D.directionalLength=m,D.pointLength=y,D.spotLength=_,D.rectAreaLength=f,D.hemiLength=c,D.numDirectionalShadows=g,D.numPointShadows=v,D.numSpotShadows=S,D.numSpotMaps=b,D.numLightProbes=C,i.version=hE++)}function l(u,d){let p=0,h=0,m=0,y=0,_=0;const f=d.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const v=u[c];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),p++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),m++}else if(v.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),s.identity(),o.copy(v.matrixWorld),o.premultiply(f),s.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),y++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:i}}function Ih(t){const e=new mE(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function gE(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Ih(t),e.set(r,[a])):o>=s.length?(a=new Ih(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class _E extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vE extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SE(t,e,n){let i=new rf;const r=new Me,o=new Me,s=new st,a=new _E({depthPacking:e0}),l=new vE,u={},d=n.maxTextureSize,p={[Pi]:$t,[$t]:Pi,[jn]:jn},h=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:xE,fragmentShader:yE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new Tn;y.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bn(y,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let c=this.type;this.render=function(A,C,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Zn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const F=c!==Wn&&this.type===Wn,$=c===Wn&&this.type!==Wn;for(let q=0,Y=A.length;q<Y;q++){const K=A[q],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const de=j.getFrameExtents();if(r.multiply(de),o.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/de.x),r.x=o.x*de.x,j.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/de.y),r.y=o.y*de.y,j.mapSize.y=o.y)),j.map===null||F===!0||$===!0){const G=this.type!==Wn?{minFilter:fn,magFilter:fn}:{};j.map!==null&&j.map.dispose(),j.map=new En(r.x,r.y,G),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const ge=j.getViewportCount();for(let G=0;G<ge;G++){const se=j.getViewport(G);s.set(o.x*se.x,o.y*se.y,o.x*se.z,o.y*se.w),X.viewport(s),j.updateMatrices(K,G),i=j.getFrustum(),S(C,D,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Wn&&g(j,D),j.needsUpdate=!1}c=this.type,f.needsUpdate=!1,t.setRenderTarget(E,T,L)};function g(A,C){const D=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new En(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,D,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,D,m,_,null)}function v(A,C,D,E){let T=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)T=L;else if(T=D.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=T.uuid,F=C.uuid;let $=u[X];$===void 0&&($={},u[X]=$);let q=$[F];q===void 0&&(q=T.clone(),$[F]=q,C.addEventListener("dispose",b)),T=q}if(T.visible=C.visible,T.wireframe=C.wireframe,E===Wn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:p[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=t.properties.get(T);X.light=D}return T}function S(A,C,D,E,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=e.update(A),$=A.material;if(Array.isArray($)){const q=F.groups;for(let Y=0,K=q.length;Y<K;Y++){const j=q[Y],de=$[j.materialIndex];if(de&&de.visible){const ge=v(A,de,E,T);A.onBeforeShadow(t,A,C,D,F,ge,j),t.renderBufferDirect(D,null,F,ge,A,j),A.onAfterShadow(t,A,C,D,F,ge,j)}}}else if($.visible){const q=v(A,$,E,T);A.onBeforeShadow(t,A,C,D,F,q,null),t.renderBufferDirect(D,null,F,q,A,null),A.onAfterShadow(t,A,C,D,F,q,null)}}const X=A.children;for(let F=0,$=X.length;F<$;F++)S(X[F],C,D,E,T)}function b(A){A.target.removeEventListener("dispose",b);for(const D in u){const E=u[D],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function ME(t){function e(){let x=!1;const V=new st;let O=null;const W=new st(0,0,0,0);return{setMask:function(J){O!==J&&!x&&(t.colorMask(J,J,J,J),O=J)},setLocked:function(J){x=J},setClear:function(J,Te,Ie,ft,_t){_t===!0&&(J*=ft,Te*=ft,Ie*=ft),V.set(J,Te,Ie,ft),W.equals(V)===!1&&(t.clearColor(J,Te,Ie,ft),W.copy(V))},reset:function(){x=!1,O=null,W.set(-1,0,0,0)}}}function n(){let x=!1,V=null,O=null,W=null;return{setTest:function(J){J?he(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(J){V!==J&&!x&&(t.depthMask(J),V=J)},setFunc:function(J){if(O!==J){switch(J){case Av:t.depthFunc(t.NEVER);break;case Cv:t.depthFunc(t.ALWAYS);break;case Rv:t.depthFunc(t.LESS);break;case Va:t.depthFunc(t.LEQUAL);break;case bv:t.depthFunc(t.EQUAL);break;case Pv:t.depthFunc(t.GEQUAL);break;case Lv:t.depthFunc(t.GREATER);break;case Dv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}O=J}},setLocked:function(J){x=J},setClear:function(J){W!==J&&(t.clearDepth(J),W=J)},reset:function(){x=!1,V=null,O=null,W=null}}}function i(){let x=!1,V=null,O=null,W=null,J=null,Te=null,Ie=null,ft=null,_t=null;return{setTest:function(Ke){x||(Ke?he(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ke){V!==Ke&&!x&&(t.stencilMask(Ke),V=Ke)},setFunc:function(Ke,vt,xt){(O!==Ke||W!==vt||J!==xt)&&(t.stencilFunc(Ke,vt,xt),O=Ke,W=vt,J=xt)},setOp:function(Ke,vt,xt){(Te!==Ke||Ie!==vt||ft!==xt)&&(t.stencilOp(Ke,vt,xt),Te=Ke,Ie=vt,ft=xt)},setLocked:function(Ke){x=Ke},setClear:function(Ke){_t!==Ke&&(t.clearStencil(Ke),_t=Ke)},reset:function(){x=!1,V=null,O=null,W=null,J=null,Te=null,Ie=null,ft=null,_t=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,h=[],m=null,y=!1,_=null,f=null,c=null,g=null,v=null,S=null,b=null,A=new qe(0,0,0),C=0,D=!1,E=null,T=null,L=null,X=null,F=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=Y>=2);let j=null,de={};const ge=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),se=new st().fromArray(ge),pe=new st().fromArray(G);function z(x,V,O,W){const J=new Uint8Array(4),Te=t.createTexture();t.bindTexture(x,Te),t.texParameteri(x,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(x,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<O;Ie++)x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY?t.texImage3D(V,0,t.RGBA,1,1,W,0,t.RGBA,t.UNSIGNED_BYTE,J):t.texImage2D(V+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,J);return Te}const Z={};Z[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),he(t.DEPTH_TEST),o.setFunc(Va),Ae(!1),je(md),he(t.CULL_FACE),Ge(Zn);function he(x){u[x]!==!0&&(t.enable(x),u[x]=!0)}function ae(x){u[x]!==!1&&(t.disable(x),u[x]=!1)}function Ue(x,V){return d[x]!==V?(t.bindFramebuffer(x,V),d[x]=V,x===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=V),x===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=V),!0):!1}function Re(x,V){let O=h,W=!1;if(x){O=p.get(V),O===void 0&&(O=[],p.set(V,O));const J=x.textures;if(O.length!==J.length||O[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,Ie=J.length;Te<Ie;Te++)O[Te]=t.COLOR_ATTACHMENT0+Te;O.length=J.length,W=!0}}else O[0]!==t.BACK&&(O[0]=t.BACK,W=!0);W&&t.drawBuffers(O)}function We(x){return m!==x?(t.useProgram(x),m=x,!0):!1}const P={[Qi]:t.FUNC_ADD,[uv]:t.FUNC_SUBTRACT,[cv]:t.FUNC_REVERSE_SUBTRACT};P[fv]=t.MIN,P[dv]=t.MAX;const Xe={[hv]:t.ZERO,[pv]:t.ONE,[mv]:t.SRC_COLOR,[nc]:t.SRC_ALPHA,[Sv]:t.SRC_ALPHA_SATURATE,[xv]:t.DST_COLOR,[_v]:t.DST_ALPHA,[gv]:t.ONE_MINUS_SRC_COLOR,[ic]:t.ONE_MINUS_SRC_ALPHA,[yv]:t.ONE_MINUS_DST_COLOR,[vv]:t.ONE_MINUS_DST_ALPHA,[Mv]:t.CONSTANT_COLOR,[Ev]:t.ONE_MINUS_CONSTANT_COLOR,[Tv]:t.CONSTANT_ALPHA,[wv]:t.ONE_MINUS_CONSTANT_ALPHA};function Ge(x,V,O,W,J,Te,Ie,ft,_t,Ke){if(x===Zn){y===!0&&(ae(t.BLEND),y=!1);return}if(y===!1&&(he(t.BLEND),y=!0),x!==lv){if(x!==_||Ke!==D){if((f!==Qi||v!==Qi)&&(t.blendEquation(t.FUNC_ADD),f=Qi,v=Qi),Ke)switch(x){case $r:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tc:t.blendFunc(t.ONE,t.ONE);break;case gd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _d:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case $r:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _d:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}c=null,g=null,S=null,b=null,A.set(0,0,0),C=0,_=x,D=Ke}return}J=J||V,Te=Te||O,Ie=Ie||W,(V!==f||J!==v)&&(t.blendEquationSeparate(P[V],P[J]),f=V,v=J),(O!==c||W!==g||Te!==S||Ie!==b)&&(t.blendFuncSeparate(Xe[O],Xe[W],Xe[Te],Xe[Ie]),c=O,g=W,S=Te,b=Ie),(ft.equals(A)===!1||_t!==C)&&(t.blendColor(ft.r,ft.g,ft.b,_t),A.copy(ft),C=_t),_=x,D=!1}function tt(x,V){x.side===jn?ae(t.CULL_FACE):he(t.CULL_FACE);let O=x.side===$t;V&&(O=!O),Ae(O),x.blending===$r&&x.transparent===!1?Ge(Zn):Ge(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),o.setFunc(x.depthFunc),o.setTest(x.depthTest),o.setMask(x.depthWrite),r.setMask(x.colorWrite);const W=x.stencilWrite;s.setTest(W),W&&(s.setMask(x.stencilWriteMask),s.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),s.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Ne(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(x){E!==x&&(x?t.frontFace(t.CW):t.frontFace(t.CCW),E=x)}function je(x){x!==ov?(he(t.CULL_FACE),x!==T&&(x===md?t.cullFace(t.BACK):x===sv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),T=x}function He(x){x!==L&&(q&&t.lineWidth(x),L=x)}function Ne(x,V,O){x?(he(t.POLYGON_OFFSET_FILL),(X!==V||F!==O)&&(t.polygonOffset(V,O),X=V,F=O)):ae(t.POLYGON_OFFSET_FILL)}function lt(x){x?he(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function R(x){x===void 0&&(x=t.TEXTURE0+$-1),j!==x&&(t.activeTexture(x),j=x)}function M(x,V,O){O===void 0&&(j===null?O=t.TEXTURE0+$-1:O=j);let W=de[O];W===void 0&&(W={type:void 0,texture:void 0},de[O]=W),(W.type!==x||W.texture!==V)&&(j!==O&&(t.activeTexture(O),j=O),t.bindTexture(x,V||Z[x]),W.type=x,W.texture=V)}function H(){const x=de[j];x!==void 0&&x.type!==void 0&&(t.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Oe(){try{t.texStorage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function be(x){se.equals(x)===!1&&(t.scissor(x.x,x.y,x.z,x.w),se.copy(x))}function fe(x){pe.equals(x)===!1&&(t.viewport(x.x,x.y,x.z,x.w),pe.copy(x))}function Fe(x,V){let O=l.get(V);O===void 0&&(O=new WeakMap,l.set(V,O));let W=O.get(x);W===void 0&&(W=t.getUniformBlockIndex(V,x.name),O.set(x,W))}function ke(x,V){const W=l.get(V).get(x);a.get(V)!==W&&(t.uniformBlockBinding(V,W,x.__bindingPointIndex),a.set(V,W))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},j=null,de={},d={},p=new WeakMap,h=[],m=null,y=!1,_=null,f=null,c=null,g=null,v=null,S=null,b=null,A=new qe(0,0,0),C=0,D=!1,E=null,T=null,L=null,X=null,F=null,se.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:he,disable:ae,bindFramebuffer:Ue,drawBuffers:Re,useProgram:We,setBlending:Ge,setMaterial:tt,setFlipSided:Ae,setCullFace:je,setLineWidth:He,setPolygonOffset:Ne,setScissorTest:lt,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:ye,texImage3D:Ve,updateUBOMapping:Fe,uniformBlockBinding:ke,texStorage2D:Oe,texStorage3D:re,texSubImage2D:te,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:le,scissor:be,viewport:fe,reset:ct}}function EE(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Me,d=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return m?new OffscreenCanvas(R,M):qa("canvas")}function _(R,M,H){let Q=1;const ee=lt(R);if((ee.width>H||ee.height>H)&&(Q=H/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const te=Math.floor(Q*ee.width),Ee=Math.floor(Q*ee.height);p===void 0&&(p=y(te,Ee));const ue=M?y(te,Ee):p;return ue.width=te,ue.height=Ee,ue.getContext("2d").drawImage(R,0,0,te,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+Ee+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function f(R){return R.generateMipmaps&&R.minFilter!==fn&&R.minFilter!==Sn}function c(R){t.generateMipmap(R)}function g(R,M,H,Q,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=M;if(M===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),M===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RG8UI),H===t.UNSIGNED_SHORT&&(te=t.RG16UI),H===t.UNSIGNED_INT&&(te=t.RG32UI),H===t.BYTE&&(te=t.RG8I),H===t.SHORT&&(te=t.RG16I),H===t.INT&&(te=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),M===t.RGBA){const Ee=ee?Wa:Je.getTransfer(Q);H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=Ee===rt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(R,M){let H;return R?M===null||M===co||M===fo?H=t.DEPTH24_STENCIL8:M===pi?H=t.DEPTH32F_STENCIL8:M===Ga&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===co||M===fo?H=t.DEPTH_COMPONENT24:M===pi?H=t.DEPTH_COMPONENT32F:M===Ga&&(H=t.DEPTH_COMPONENT16),H}function S(R,M){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),C(M),M.isVideoTexture&&d.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),E(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,Q=h.get(H);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(R),Object.keys(Q).length===0&&h.delete(H)}i.remove(R)}function D(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,Q=h.get(H);delete Q[M.__cacheKey],s.memory.textures--}function E(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,ee=H.length;Q<ee;Q++){const te=i.get(H[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(H[Q])}i.remove(R)}let T=0;function L(){T=0}function X(){const R=T;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),T+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const H=i.get(R);if(R.isVideoTexture&&He(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(H,R,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function q(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){pe(H,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){pe(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function K(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){z(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const j={[sc]:t.REPEAT,[er]:t.CLAMP_TO_EDGE,[ac]:t.MIRRORED_REPEAT},de={[fn]:t.NEAREST,[Vv]:t.NEAREST_MIPMAP_NEAREST,[Xs]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[ql]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR},ge={[i0]:t.NEVER,[u0]:t.ALWAYS,[r0]:t.LESS,[Pm]:t.LEQUAL,[o0]:t.EQUAL,[l0]:t.GEQUAL,[s0]:t.GREATER,[a0]:t.NOTEQUAL};function G(R,M){if(M.type===pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===ql||M.magFilter===Xs||M.magFilter===tr||M.minFilter===Sn||M.minFilter===ql||M.minFilter===Xs||M.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,j[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,j[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,j[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,de[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==Xs&&M.minFilter!==tr||M.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const te=F(M);if(te!==R.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),ee[te].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(M)),R.__cacheKey=te,R.__webglTexture=ee[te].texture}return H}function pe(R,M,H){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=se(R,M),te=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+H);const Ee=i.get(te);if(te.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ue=Je.getPrimaries(Je.workingColorSpace),le=M.colorSpace===di?null:Je.getPrimaries(M.colorSpace),Oe=M.colorSpace===di||ue===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let re=_(M.image,!1,r.maxTextureSize);re=Ne(M,re);const ye=o.convert(M.format,M.colorSpace),Ve=o.convert(M.type);let be=g(M.internalFormat,ye,Ve,M.colorSpace,M.isVideoTexture);G(Q,M);let fe;const Fe=M.mipmaps,ke=M.isVideoTexture!==!0,ct=Ee.__version===void 0||ee===!0,x=te.dataReady,V=S(M,re);if(M.isDepthTexture)be=v(M.format===ho,M.type),ct&&(ke?n.texStorage2D(t.TEXTURE_2D,1,be,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,ye,Ve,null));else if(M.isDataTexture)if(Fe.length>0){ke&&ct&&n.texStorage2D(t.TEXTURE_2D,V,be,Fe[0].width,Fe[0].height);for(let O=0,W=Fe.length;O<W;O++)fe=Fe[O],ke?x&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,fe.width,fe.height,ye,Ve,fe.data):n.texImage2D(t.TEXTURE_2D,O,be,fe.width,fe.height,0,ye,Ve,fe.data);M.generateMipmaps=!1}else ke?(ct&&n.texStorage2D(t.TEXTURE_2D,V,be,re.width,re.height),x&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ye,Ve,re.data)):n.texImage2D(t.TEXTURE_2D,0,be,re.width,re.height,0,ye,Ve,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,be,Fe[0].width,Fe[0].height,re.depth);for(let O=0,W=Fe.length;O<W;O++)if(fe=Fe[O],M.format!==Rn)if(ye!==null)if(ke){if(x)if(M.layerUpdates.size>0){for(const J of M.layerUpdates){const Te=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,J,fe.width,fe.height,1,ye,fe.data.slice(Te*J,Te*(J+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,re.depth,ye,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,O,be,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?x&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,re.depth,ye,Ve,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,O,be,fe.width,fe.height,re.depth,0,ye,Ve,fe.data)}else{ke&&ct&&n.texStorage2D(t.TEXTURE_2D,V,be,Fe[0].width,Fe[0].height);for(let O=0,W=Fe.length;O<W;O++)fe=Fe[O],M.format!==Rn?ye!==null?ke?x&&n.compressedTexSubImage2D(t.TEXTURE_2D,O,0,0,fe.width,fe.height,ye,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,O,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?x&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,fe.width,fe.height,ye,Ve,fe.data):n.texImage2D(t.TEXTURE_2D,O,be,fe.width,fe.height,0,ye,Ve,fe.data)}else if(M.isDataArrayTexture)if(ke){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,V,be,re.width,re.height,re.depth),x)if(M.layerUpdates.size>0){let O;switch(Ve){case t.UNSIGNED_BYTE:switch(ye){case t.ALPHA:O=1;break;case t.LUMINANCE:O=1;break;case t.LUMINANCE_ALPHA:O=2;break;case t.RGB:O=3;break;case t.RGBA:O=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:O=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const W=re.width*re.height*O;for(const J of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ye,Ve,re.data.slice(W*J,W*(J+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Ve,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,ye,Ve,re.data);else if(M.isData3DTexture)ke?(ct&&n.texStorage3D(t.TEXTURE_3D,V,be,re.width,re.height,re.depth),x&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Ve,re.data)):n.texImage3D(t.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,ye,Ve,re.data);else if(M.isFramebufferTexture){if(ct)if(ke)n.texStorage2D(t.TEXTURE_2D,V,be,re.width,re.height);else{let O=re.width,W=re.height;for(let J=0;J<V;J++)n.texImage2D(t.TEXTURE_2D,J,be,O,W,0,ye,Ve,null),O>>=1,W>>=1}}else if(Fe.length>0){if(ke&&ct){const O=lt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,V,be,O.width,O.height)}for(let O=0,W=Fe.length;O<W;O++)fe=Fe[O],ke?x&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ye,Ve,fe):n.texImage2D(t.TEXTURE_2D,O,be,ye,Ve,fe);M.generateMipmaps=!1}else if(ke){if(ct){const O=lt(re);n.texStorage2D(t.TEXTURE_2D,V,be,O.width,O.height)}x&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ve,re)}else n.texImage2D(t.TEXTURE_2D,0,be,ye,Ve,re);f(M)&&c(Q),Ee.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function z(R,M,H){if(M.image.length!==6)return;const Q=se(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const te=i.get(ee);if(ee.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const Ee=Je.getPrimaries(Je.workingColorSpace),ue=M.colorSpace===di?null:Je.getPrimaries(M.colorSpace),le=M.colorSpace===di||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let W=0;W<6;W++)!Oe&&!re?ye[W]=_(M.image[W],!0,r.maxCubemapSize):ye[W]=re?M.image[W].image:M.image[W],ye[W]=Ne(M,ye[W]);const Ve=ye[0],be=o.convert(M.format,M.colorSpace),fe=o.convert(M.type),Fe=g(M.internalFormat,be,fe,M.colorSpace),ke=M.isVideoTexture!==!0,ct=te.__version===void 0||Q===!0,x=ee.dataReady;let V=S(M,Ve);G(t.TEXTURE_CUBE_MAP,M);let O;if(Oe){ke&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Fe,Ve.width,Ve.height);for(let W=0;W<6;W++){O=ye[W].mipmaps;for(let J=0;J<O.length;J++){const Te=O[J];M.format!==Rn?be!==null?ke?x&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,0,0,Te.width,Te.height,be,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,0,0,Te.width,Te.height,be,fe,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J,Fe,Te.width,Te.height,0,be,fe,Te.data)}}}else{if(O=M.mipmaps,ke&&ct){O.length>0&&V++;const W=lt(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,V,Fe,W.width,W.height)}for(let W=0;W<6;W++)if(re){ke?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ye[W].width,ye[W].height,be,fe,ye[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Fe,ye[W].width,ye[W].height,0,be,fe,ye[W].data);for(let J=0;J<O.length;J++){const Ie=O[J].image[W].image;ke?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,0,0,Ie.width,Ie.height,be,fe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,Fe,Ie.width,Ie.height,0,be,fe,Ie.data)}}else{ke?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,be,fe,ye[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Fe,be,fe,ye[W]);for(let J=0;J<O.length;J++){const Te=O[J];ke?x&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,0,0,be,fe,Te.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,J+1,Fe,be,fe,Te.image[W])}}}f(M)&&c(t.TEXTURE_CUBE_MAP),te.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Z(R,M,H,Q,ee,te){const Ee=o.convert(H.format,H.colorSpace),ue=o.convert(H.type),le=g(H.internalFormat,Ee,ue,H.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>te),ye=Math.max(1,M.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,le,re,ye,M.depth,0,Ee,ue,null):n.texImage2D(ee,te,le,re,ye,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(H).__webglTexture,0,Ae(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(H).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,te=v(M.stencilBuffer,ee),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ae(M);je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,te,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let ee=0;ee<Q.length;ee++){const te=Q[ee],Ee=o.convert(te.format,te.colorSpace),ue=o.convert(te.type),le=g(te.internalFormat,Ee,ue,te.colorSpace),Oe=Ae(M);H&&je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,le,M.width,M.height):je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ee=Ae(M);if(M.depthTexture.format===Kr)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===ho)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),he(M.__webglDepthbuffer[Q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(R,M,H){const Q=i.get(R);M!==void 0&&Z(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ue(R)}function We(R){const M=R.texture,H=i.get(R),Q=i.get(M);R.addEventListener("dispose",A);const ee=R.textures,te=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,s.memory.textures++),te){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let le=0;le<M.mipmaps.length;le++)H.__webglFramebuffer[ue][le]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,le=ee.length;ue<le;ue++){const Oe=i.get(ee[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&je(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const le=ee[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const Oe=o.convert(le.format,le.colorSpace),re=o.convert(le.type),ye=g(le.internalFormat,Oe,re,le.colorSpace,R.isXRRenderTarget===!0),Ve=Ae(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),he(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),G(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)Z(H.__webglFramebuffer[ue][le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,le);else Z(H.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);f(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,le=ee.length;ue<le;ue++){const Oe=ee[ue],re=i.get(Oe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),G(t.TEXTURE_2D,Oe),Z(H.__webglFramebuffer,R,Oe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),f(Oe)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),G(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)Z(H.__webglFramebuffer[le],R,M,t.COLOR_ATTACHMENT0,ue,le);else Z(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ue,0);f(M)&&c(ue),n.unbindTexture()}R.depthBuffer&&Ue(R)}function P(R){const M=R.textures;for(let H=0,Q=M.length;H<Q;H++){const ee=M[H];if(f(ee)){const te=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(ee).__webglTexture;n.bindTexture(te,Ee),c(te),n.unbindTexture()}}}const Xe=[],Ge=[];function tt(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,H=R.width,Q=R.height;let ee=t.COLOR_BUFFER_BIT;const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),ue=M.length>1;if(ue)for(let le=0;le<M.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let le=0;le<M.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Oe=i.get(M[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Oe,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,t.NEAREST),l===!0&&(Xe.length=0,Ge.length=0,Xe.push(t.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Xe.push(te),Ge.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let le=0;le<M.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Oe=i.get(M[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ae(R){return Math.min(r.maxSamples,R.samples)}function je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(R){const M=s.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Ne(R,M){const H=R.colorSpace,Q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Fi&&H!==di&&(Je.getTransfer(H)===rt?(Q!==Rn||ee!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function lt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=Re,this.setupRenderTarget=We,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=je}function TE(t,e){function n(i,r=di){let o;const s=Je.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===wm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Am)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gv)return t.BYTE;if(i===Wv)return t.SHORT;if(i===Ga)return t.UNSIGNED_SHORT;if(i===Tm)return t.INT;if(i===co)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===yi)return t.HALF_FLOAT;if(i===jv)return t.ALPHA;if(i===Yv)return t.RGB;if(i===Rn)return t.RGBA;if(i===qv)return t.LUMINANCE;if(i===$v)return t.LUMINANCE_ALPHA;if(i===Kr)return t.DEPTH_COMPONENT;if(i===ho)return t.DEPTH_STENCIL;if(i===Kv)return t.RED;if(i===Cm)return t.RED_INTEGER;if(i===Zv)return t.RG;if(i===Rm)return t.RG_INTEGER;if(i===bm)return t.RGBA_INTEGER;if(i===$l||i===Kl||i===Zl||i===Ql)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===$l)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ql)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===$l)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ql)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===xd||i===yd||i===Sd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===vd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===Ed||i===Td)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Md||i===Ed)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Td)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wd||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Ld||i===Dd||i===Ud||i===Id||i===Nd||i===Od||i===Fd||i===kd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===wd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===Bd||i===zd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Jl)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qv||i===Hd||i===Vd||i===Gd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Jl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Hd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class wE extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ha extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const _ of e.hand.values()){const f=n.getJointPose(_,i),c=this._getHandJoint(u,_);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=d.position.distanceTo(p.position),m=.02,y=.005;u.inputState.pinching&&h>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qt({vertexShader:CE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Al(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class PE extends dr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,d=null,p=null,h=null,m=null,y=null;const _=new bE,f=n.getContextAttributes();let c=null,g=null;const v=[],S=[],b=new Me;let A=null;const C=new Yt;C.layers.enable(1),C.viewport=new st;const D=new Yt;D.layers.enable(2),D.viewport=new st;const E=[C,D],T=new wE;T.layers.enable(1),T.layers.enable(2);let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=v[z];return Z===void 0&&(Z=new Tu,v[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=v[z];return Z===void 0&&(Z=new Tu,v[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=v[z];return Z===void 0&&(Z=new Tu,v[z]=Z),Z.getHandSpace()};function F(z){const Z=S.indexOf(z.inputSource);if(Z===-1)return;const he=v[Z];he!==void 0&&(he.update(z.inputSource,z.frame,u||s),he.dispatchEvent({type:z.type,data:z.inputSource}))}function $(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let z=0;z<v.length;z++){const Z=S[z];Z!==null&&(S[z]=null,v[z].disconnect(Z))}L=null,X=null,_.reset(),e.setRenderTarget(c),m=null,h=null,p=null,r=null,g=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new En(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,he=null,ae=null;f.depth&&(ae=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=f.stencil?ho:Kr,he=f.stencil?fo:co);const Ue={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:o};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new En(h.textureWidth,h.textureHeight,{format:Rn,type:Li,depthTexture:new Gm(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(z){for(let Z=0;Z<z.removed.length;Z++){const he=z.removed[Z],ae=S.indexOf(he);ae>=0&&(S[ae]=null,v[ae].disconnect(he))}for(let Z=0;Z<z.added.length;Z++){const he=z.added[Z];let ae=S.indexOf(he);if(ae===-1){for(let Re=0;Re<v.length;Re++)if(Re>=S.length){S.push(he),ae=Re;break}else if(S[Re]===null){S[Re]=he,ae=Re;break}if(ae===-1)break}const Ue=v[ae];Ue&&Ue.connect(he)}}const Y=new U,K=new U;function j(z,Z,he){Y.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const ae=Y.distanceTo(K),Ue=Z.projectionMatrix.elements,Re=he.projectionMatrix.elements,We=Ue[14]/(Ue[10]-1),P=Ue[14]/(Ue[10]+1),Xe=(Ue[9]+1)/Ue[5],Ge=(Ue[9]-1)/Ue[5],tt=(Ue[8]-1)/Ue[0],Ae=(Re[8]+1)/Re[0],je=We*tt,He=We*Ae,Ne=ae/(-tt+Ae),lt=Ne*-tt;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(lt),z.translateZ(Ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const R=We+Ne,M=P+Ne,H=je-lt,Q=He+(ae-lt),ee=Xe*P/M*R,te=Ge*P/M*R;z.projectionMatrix.makePerspective(H,Q,ee,te,R,M),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function de(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;_.texture!==null&&(z.near=_.depthNear,z.far=_.depthFar),T.near=D.near=C.near=z.near,T.far=D.far=C.far=z.far,(L!==T.near||X!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,X=T.far,C.near=L,C.far=X,D.near=L,D.far=X,C.updateProjectionMatrix(),D.updateProjectionMatrix(),z.updateProjectionMatrix());const Z=z.parent,he=T.cameras;de(T,Z);for(let ae=0;ae<he.length;ae++)de(he[ae],Z);he.length===2?j(T,C,D):T.projectionMatrix.copy(C.projectionMatrix),ge(z,T,Z)};function ge(z,Z,he){he===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=po*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let G=null;function se(z,Z){if(d=Z.getViewerPose(u||s),y=Z,d!==null){const he=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;he.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let Re=0;Re<he.length;Re++){const We=he[Re];let P=null;if(m!==null)P=m.getViewport(We);else{const Ge=p.getViewSubImage(h,We);P=Ge.viewport,Re===0&&(e.setRenderTargetTextures(g,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(g))}let Xe=E[Re];Xe===void 0&&(Xe=new Yt,Xe.layers.enable(Re),Xe.viewport=new st,E[Re]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(P.x,P.y,P.width,P.height),Re===0&&(T.matrix.copy(Xe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ae===!0&&T.cameras.push(Xe)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Re=p.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,r.renderState)}}for(let he=0;he<v.length;he++){const ae=S[he],Ue=v[he];ae!==null&&Ue!==void 0&&Ue.update(ae,Z,u||s)}G&&G(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),y=null}const pe=new Vm;pe.setAnimationLoop(se),this.setAnimationLoop=function(z){G=z},this.dispose=function(){}}}const qi=new Jn,LE=new ut;function DE(t,e){function n(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,Bm(t)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,g,v,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(f,c):c.isMeshToonMaterial?(o(f,c),p(f,c)):c.isMeshPhongMaterial?(o(f,c),d(f,c)):c.isMeshStandardMaterial?(o(f,c),h(f,c),c.isMeshPhysicalMaterial&&m(f,c,S)):c.isMeshMatcapMaterial?(o(f,c),y(f,c)):c.isMeshDepthMaterial?o(f,c):c.isMeshDistanceMaterial?(o(f,c),_(f,c)):c.isMeshNormalMaterial?o(f,c):c.isLineBasicMaterial?(s(f,c),c.isLineDashedMaterial&&a(f,c)):c.isPointsMaterial?l(f,c,g,v):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,n(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===$t&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,n(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===$t&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,n(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,n(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const g=e.get(c),v=g.envMap,S=g.envMapRotation;v&&(f.envMap.value=v,qi.copy(S),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),f.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(qi)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,f.aoMapTransform))}function s(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform))}function a(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,g,v){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*g,f.scale.value=v*.5,c.map&&(f.map.value=c.map,n(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,n(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,n(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function d(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function p(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function h(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function m(f,c,g){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===$t&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,c){c.matcap&&(f.matcap.value=c.matcap)}function _(f,c){const g=e.get(c).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UE(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function u(g,v){let S=r[g.id];S===void 0&&(y(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",f));const b=v.program;i.updateUBOMapping(g,b);const A=e.render.frame;o[g.id]!==A&&(h(g),o[g.id]=A)}function d(g){const v=p();g.__bindingPointIndex=v;const S=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=S.length;A<C;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,T=D.length;E<T;E++){const L=D[E];if(m(L,A,E,b)===!0){const X=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let q=0;q<F.length;q++){const Y=F[q],K=_(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,X+$,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,S,b){const A=g.value,C=v+"_"+S;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const D=b[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return b[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function y(g){const v=g.uniforms;let S=0;const b=16;for(let C=0,D=v.length;C<D;C++){const E=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,L=E.length;T<L;T++){const X=E[T],F=Array.isArray(X.value)?X.value:[X.value];for(let $=0,q=F.length;$<q;$++){const Y=F[$],K=_(Y),j=S%b;j!==0&&b-j<K.boundary&&(S+=b-j),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=K.storage}}}const A=S%b;return A>0&&(S+=b-A),g.__size=S,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function f(g){const v=g.target;v.removeEventListener("dispose",f);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class IE{constructor(e={}){const{canvas:n=C0(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const m=new Uint32Array(4),y=new Int32Array(4);let _=null,f=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=xi,this.toneMappingExposure=1;const v=this;let S=!1,b=0,A=0,C=null,D=-1,E=null;const T=new st,L=new st;let X=null;const F=new qe(0);let $=0,q=n.width,Y=n.height,K=1,j=null,de=null;const ge=new st(0,0,q,Y),G=new st(0,0,q,Y);let se=!1;const pe=new rf;let z=!1,Z=!1;const he=new ut,ae=new U,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function We(){return C===null?K:1}let P=i;function Xe(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qc}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",O,!1),n.addEventListener("webglcontextcreationerror",W,!1),P===null){const I="webgl2";if(P=Xe(I,w),P===null)throw Xe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,tt,Ae,je,He,Ne,lt,R,M,H,Q,ee,te,Ee,ue,le,Oe,re,ye,Ve,be,fe,Fe,ke;function ct(){Ge=new VS(P),Ge.init(),fe=new TE(P,Ge),tt=new OS(P,Ge,e,fe),Ae=new ME(P),je=new XS(P),He=new lE,Ne=new EE(P,Ge,Ae,He,tt,fe,je),lt=new kS(v),R=new HS(v),M=new Q0(P),Fe=new IS(P,M),H=new GS(P,M,je,Fe),Q=new YS(P,H,M,je),ye=new jS(P,tt,Ne),le=new FS(He),ee=new aE(v,lt,R,Ge,tt,Fe,le),te=new DE(v,He),Ee=new cE,ue=new gE(Ge),re=new US(v,lt,R,Ae,Q,h,l),Oe=new SE(v,Q,tt),ke=new UE(P,je,tt,Ae),Ve=new NS(P,Ge,je),be=new WS(P,Ge,je),je.programs=ee.programs,v.capabilities=tt,v.extensions=Ge,v.properties=He,v.renderLists=Ee,v.shadowMap=Oe,v.state=Ae,v.info=je}ct();const x=new PE(v,P);this.xr=x,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(q,Y,!1))},this.getSize=function(w){return w.set(q,Y)},this.setSize=function(w,I,k=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,Y=I,n.width=Math.floor(w*K),n.height=Math.floor(I*K),k===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(q*K,Y*K).floor()},this.setDrawingBufferSize=function(w,I,k){q=w,Y=I,K=k,n.width=Math.floor(w*k),n.height=Math.floor(I*k),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,I,k,B){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,I,k,B),Ae.viewport(T.copy(ge).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,I,k,B){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,I,k,B),Ae.scissor(L.copy(G).multiplyScalar(K).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){Ae.setScissorTest(se=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(w=!0,I=!0,k=!0){let B=0;if(w){let N=!1;if(C!==null){const oe=C.texture.format;N=oe===bm||oe===Rm||oe===Cm}if(N){const oe=C.texture.type,me=oe===Li||oe===co||oe===Ga||oe===fo||oe===wm||oe===Am,xe=re.getClearColor(),Se=re.getClearAlpha(),Pe=xe.r,Le=xe.g,Ce=xe.b;me?(m[0]=Pe,m[1]=Le,m[2]=Ce,m[3]=Se,P.clearBufferuiv(P.COLOR,0,m)):(y[0]=Pe,y[1]=Le,y[2]=Ce,y[3]=Se,P.clearBufferiv(P.COLOR,0,y))}else B|=P.COLOR_BUFFER_BIT}I&&(B|=P.DEPTH_BUFFER_BIT),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",O,!1),n.removeEventListener("webglcontextcreationerror",W,!1),Ee.dispose(),ue.dispose(),He.dispose(),lt.dispose(),R.dispose(),Q.dispose(),Fe.dispose(),ke.dispose(),ee.dispose(),x.dispose(),x.removeEventListener("sessionstart",vt),x.removeEventListener("sessionend",xt),Jt.stop()};function V(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=je.autoReset,I=Oe.enabled,k=Oe.autoUpdate,B=Oe.needsUpdate,N=Oe.type;ct(),je.autoReset=w,Oe.enabled=I,Oe.autoUpdate=k,Oe.needsUpdate=B,Oe.type=N}function W(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){const I=w.target;I.removeEventListener("dispose",J),Te(I)}function Te(w){Ie(w),He.remove(w)}function Ie(w){const I=He.get(w).programs;I!==void 0&&(I.forEach(function(k){ee.releaseProgram(k)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,k,B,N,oe){I===null&&(I=Ue);const me=N.isMesh&&N.matrixWorld.determinant()<0,xe=ev(w,I,k,B,N);Ae.setMaterial(B,me);let Se=k.index,Pe=1;if(B.wireframe===!0){if(Se=H.getWireframeAttribute(k),Se===void 0)return;Pe=2}const Le=k.drawRange,Ce=k.attributes.position;let Ze=Le.start*Pe,dt=(Le.start+Le.count)*Pe;oe!==null&&(Ze=Math.max(Ze,oe.start*Pe),dt=Math.min(dt,(oe.start+oe.count)*Pe)),Se!==null?(Ze=Math.max(Ze,0),dt=Math.min(dt,Se.count)):Ce!=null&&(Ze=Math.max(Ze,0),dt=Math.min(dt,Ce.count));const ht=dt-Ze;if(ht<0||ht===1/0)return;Fe.setup(N,B,xe,k,Se);let tn,Qe=Ve;if(Se!==null&&(tn=M.get(Se),Qe=be,Qe.setIndex(tn)),N.isMesh)B.wireframe===!0?(Ae.setLineWidth(B.wireframeLinewidth*We()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(N.isLine){let we=B.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*We()),N.isLineSegments?Qe.setMode(P.LINES):N.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else N.isPoints?Qe.setMode(P.POINTS):N.isSprite&&Qe.setMode(P.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Qe.renderInstances(Ze,ht,N.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,zt=Math.min(k.instanceCount,we);Qe.renderInstances(Ze,ht,zt)}else Qe.render(Ze,ht)};function ft(w,I,k){w.transparent===!0&&w.side===jn&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Gs(w,I,k),w.side=Pi,w.needsUpdate=!0,Gs(w,I,k),w.side=jn):Gs(w,I,k)}this.compile=function(w,I,k=null){k===null&&(k=w),f=ue.get(k),f.init(I),g.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==k&&w.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return w.traverse(function(N){const oe=N.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const xe=oe[me];ft(xe,k,N),B.add(xe)}else ft(oe,k,N),B.add(oe)}),g.pop(),f=null,B},this.compileAsync=function(w,I,k=null){const B=this.compile(w,I,k);return new Promise(N=>{function oe(){if(B.forEach(function(me){He.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){N(w);return}setTimeout(oe,10)}Ge.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let _t=null;function Ke(w){_t&&_t(w)}function vt(){Jt.stop()}function xt(){Jt.start()}const Jt=new Vm;Jt.setAnimationLoop(Ke),typeof self!="undefined"&&Jt.setContext(self),this.setAnimationLoop=function(w){_t=w,x.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},x.addEventListener("sessionstart",vt),x.addEventListener("sessionend",xt),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(I),I=x.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,C),f=ue.get(w,g.length),f.init(I),g.push(f),he.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),pe.setFromProjectionMatrix(he),Z=this.localClippingEnabled,z=le.init(this.clippingPlanes,Z),_=Ee.get(w,c.length),_.init(),c.push(_),x.enabled===!0&&x.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&en(oe,I,-1/0,v.sortObjects)}en(w,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,de),Re=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Re&&re.addToRenderList(_,w),this.info.render.frame++,z===!0&&le.beginShadows();const k=f.state.shadowsArray;Oe.render(k,w,I),z===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(f.setupLights(),I.isArrayCamera){const oe=I.cameras;if(N.length>0)for(let me=0,xe=oe.length;me<xe;me++){const Se=oe[me];zi(B,N,w,Se)}Re&&re.render(w);for(let me=0,xe=oe.length;me<xe;me++){const Se=oe[me];ni(_,w,Se,Se.viewport)}}else N.length>0&&zi(B,N,w,I),Re&&re.render(w),ni(_,w,I);C!==null&&(Ne.updateMultisampleRenderTarget(C),Ne.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,I),Fe.resetDefaultState(),D=-1,E=null,g.pop(),g.length>0?(f=g[g.length-1],z===!0&&le.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,c.pop(),c.length>0?_=c[c.length-1]:_=null};function en(w,I,k,B){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pe.intersectsSprite(w)){B&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const me=Q.update(w),xe=w.material;xe.visible&&_.push(w,me,xe,k,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pe.intersectsObject(w))){const me=Q.update(w),xe=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ae.copy(me.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(xe)){const Se=me.groups;for(let Pe=0,Le=Se.length;Pe<Le;Pe++){const Ce=Se[Pe],Ze=xe[Ce.materialIndex];Ze&&Ze.visible&&_.push(w,me,Ze,k,ae.z,Ce)}}else xe.visible&&_.push(w,me,xe,k,ae.z,null)}}const oe=w.children;for(let me=0,xe=oe.length;me<xe;me++)en(oe[me],I,k,B)}function ni(w,I,k,B){const N=w.opaque,oe=w.transmissive,me=w.transparent;f.setupLightsView(k),z===!0&&le.setGlobalState(v.clippingPlanes,k),B&&Ae.viewport(T.copy(B)),N.length>0&&Hi(N,I,k),oe.length>0&&Hi(oe,I,k),me.length>0&&Hi(me,I,k),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function zi(w,I,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new En(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?yi:Li,minFilter:tr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const oe=f.state.transmissionRenderTarget[B.id],me=B.viewport||T;oe.setSize(me.z,me.w);const xe=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(F),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),Re?re.render(k):v.clear();const Se=v.toneMapping;v.toneMapping=xi;const Pe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),z===!0&&le.setGlobalState(v.clippingPlanes,B),Hi(w,k,B),Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ce=0,Ze=I.length;Ce<Ze;Ce++){const dt=I[Ce],ht=dt.object,tn=dt.geometry,Qe=dt.material,we=dt.group;if(Qe.side===jn&&ht.layers.test(B.layers)){const zt=Qe.side;Qe.side=$t,Qe.needsUpdate=!0,fd(ht,k,B,tn,Qe,we),Qe.side=zt,Qe.needsUpdate=!0,Le=!0}}Le===!0&&(Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe))}v.setRenderTarget(xe),v.setClearColor(F,$),Pe!==void 0&&(B.viewport=Pe),v.toneMapping=Se}function Hi(w,I,k){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,oe=w.length;N<oe;N++){const me=w[N],xe=me.object,Se=me.geometry,Pe=B===null?me.material:B,Le=me.group;xe.layers.test(k.layers)&&fd(xe,I,k,Se,Pe,Le)}}function fd(w,I,k,B,N,oe){w.onBeforeRender(v,I,k,B,N,oe),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,I,k,B,w,oe),N.transparent===!0&&N.side===jn&&N.forceSinglePass===!1?(N.side=$t,N.needsUpdate=!0,v.renderBufferDirect(k,I,B,N,w,oe),N.side=Pi,N.needsUpdate=!0,v.renderBufferDirect(k,I,B,N,w,oe),N.side=jn):v.renderBufferDirect(k,I,B,N,w,oe),w.onAfterRender(v,I,k,B,N,oe)}function Gs(w,I,k){I.isScene!==!0&&(I=Ue);const B=He.get(w),N=f.state.lights,oe=f.state.shadowsArray,me=N.state.version,xe=ee.getParameters(w,N.state,oe,I,k),Se=ee.getProgramCacheKey(xe);let Pe=B.programs;B.environment=w.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(w.isMeshStandardMaterial?R:lt).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",J),Pe=new Map,B.programs=Pe);let Le=Pe.get(Se);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===me)return hd(w,xe),Le}else xe.uniforms=ee.getUniforms(w),w.onBuild(k,xe,v),w.onBeforeCompile(xe,v),Le=ee.acquireProgram(xe,Se),Pe.set(Se,Le),B.uniforms=xe.uniforms;const Ce=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=le.uniform),hd(w,xe),B.needsLights=nv(w),B.lightsStateVersion=me,B.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function dd(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Pa.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function hd(w,I){const k=He.get(w);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function ev(w,I,k,B,N){I.isScene!==!0&&(I=Ue),Ne.resetTextureUnits();const oe=I.fog,me=B.isMeshStandardMaterial?I.environment:null,xe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fi,Se=(B.isMeshStandardMaterial?R:lt).get(B.envMap||me),Pe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color;let ht=xi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ht=v.toneMapping);const tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=tn!==void 0?tn.length:0,we=He.get(B),zt=f.state.lights;if(z===!0&&(Z===!0||w!==E)){const an=w===E&&B.id===D;le.setState(B,w,an)}let et=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==zt.state.version||we.outputColorSpace!==xe||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==Se||B.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==le.numPlanes||we.numIntersection!==le.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==Ce||we.morphNormals!==Ze||we.morphColors!==dt||we.toneMapping!==ht||we.morphTargetsCount!==Qe)&&(et=!0):(et=!0,we.__version=B.version);let kn=we.currentProgram;et===!0&&(kn=Gs(B,I,N));let Ws=!1,Vi=!1,Xl=!1;const At=kn.getUniforms(),ii=we.uniforms;if(Ae.useProgram(kn.program)&&(Ws=!0,Vi=!0,Xl=!0),B.id!==D&&(D=B.id,Vi=!0),Ws||E!==w){At.setValue(P,"projectionMatrix",w.projectionMatrix),At.setValue(P,"viewMatrix",w.matrixWorldInverse);const an=At.map.cameraPosition;an!==void 0&&an.setValue(P,ae.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Vi=!0,Xl=!0)}if(N.isSkinnedMesh){At.setOptional(P,N,"bindMatrix"),At.setOptional(P,N,"bindMatrixInverse");const an=N.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),At.setValue(P,"boneTexture",an.boneTexture,Ne))}N.isBatchedMesh&&(At.setOptional(P,N,"batchingTexture"),At.setValue(P,"batchingTexture",N._matricesTexture,Ne),At.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&At.setValue(P,"batchingColorTexture",N._colorsTexture,Ne));const jl=k.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&ye.update(N,k,kn),(Vi||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,At.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ii.envMap.value=Se,ii.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(ii.envMapIntensity.value=I.environmentIntensity),Vi&&(At.setValue(P,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&tv(ii,Xl),oe&&B.fog===!0&&te.refreshFogUniforms(ii,oe),te.refreshMaterialUniforms(ii,B,K,Y,f.state.transmissionRenderTarget[w.id]),Pa.upload(P,dd(we),ii,Ne)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Pa.upload(P,dd(we),ii,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(P,"center",N.center),At.setValue(P,"modelViewMatrix",N.modelViewMatrix),At.setValue(P,"normalMatrix",N.normalMatrix),At.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const an=B.uniformsGroups;for(let Yl=0,iv=an.length;Yl<iv;Yl++){const pd=an[Yl];ke.update(pd,kn),ke.bind(pd,kn)}}return kn}function tv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function nv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,I,k){He.get(w.texture).__webglTexture=I,He.get(w.depthTexture).__webglTexture=k;const B=He.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const k=He.get(w);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,k=0){C=w,b=I,A=k;let B=!0,N=null,oe=!1,me=!1;if(w){const Se=He.get(w);Se.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):Se.__webglFramebuffer===void 0?Ne.setupRenderTarget(w):Se.__hasExternalTextures&&Ne.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(me=!0);const Le=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?N=Le[I][k]:N=Le[I],oe=!0):w.samples>0&&Ne.useMultisampledRTT(w)===!1?N=He.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[k]:N=Le,T.copy(w.viewport),L.copy(w.scissor),X=w.scissorTest}else T.copy(ge).multiplyScalar(K).floor(),L.copy(G).multiplyScalar(K).floor(),X=se;if(Ae.bindFramebuffer(P.FRAMEBUFFER,N)&&B&&Ae.drawBuffers(w,N),Ae.viewport(T),Ae.scissor(L),Ae.setScissorTest(X),oe){const Se=He.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,k)}else if(me){const Se=He.get(w.texture),Pe=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,Pe)}D=-1},this.readRenderTargetPixels=function(w,I,k,B,N,oe,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Ae.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Se=w.texture,Pe=Se.format,Le=Se.type;if(!tt.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-B&&k>=0&&k<=w.height-N&&P.readPixels(I,k,B,N,fe.convert(Pe),fe.convert(Le),oe)}finally{const Se=C!==null?He.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,I,k,B,N,oe,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Ae.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Se=w.texture,Pe=Se.format,Le=Se.type;if(!tt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-B&&k>=0&&k<=w.height-N){const Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(I,k,B,N,fe.convert(Pe),fe.convert(Le),0),P.flush();const Ze=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await R0(P,Ze,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe)}finally{P.deleteBuffer(Ce),P.deleteSync(Ze)}return oe}}finally{const Se=C!==null?He.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(w,I=null,k=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(w.image.width*B),oe=Math.floor(w.image.height*B),me=I!==null?I.x:0,xe=I!==null?I.y:0;Ne.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,me,xe,N,oe),Ae.unbindTexture()},this.copyTextureToTexture=function(w,I,k=null,B=null,N=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],I=arguments[2],N=arguments[3]||0,k=null);let oe,me,xe,Se,Pe,Le;k!==null?(oe=k.max.x-k.min.x,me=k.max.y-k.min.y,xe=k.min.x,Se=k.min.y):(oe=w.image.width,me=w.image.height,xe=0,Se=0),B!==null?(Pe=B.x,Le=B.y):(Pe=0,Le=0);const Ce=fe.convert(I.format),Ze=fe.convert(I.type);Ne.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const dt=P.getParameter(P.UNPACK_ROW_LENGTH),ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Qe=P.getParameter(P.UNPACK_SKIP_ROWS),we=P.getParameter(P.UNPACK_SKIP_IMAGES),zt=w.isCompressedTexture?w.mipmaps[N]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Pe,Le,oe,me,Ce,Ze,zt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Pe,Le,zt.width,zt.height,Ce,zt.data):P.texSubImage2D(P.TEXTURE_2D,N,Pe,Le,Ce,Ze,zt),P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we),N===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,I,k=null,B=null,N=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,w=arguments[2],I=arguments[3],N=arguments[4]||0);let oe,me,xe,Se,Pe,Le,Ce,Ze,dt;const ht=w.isCompressedTexture?w.mipmaps[N]:w.image;k!==null?(oe=k.max.x-k.min.x,me=k.max.y-k.min.y,xe=k.max.z-k.min.z,Se=k.min.x,Pe=k.min.y,Le=k.min.z):(oe=ht.width,me=ht.height,xe=ht.depth,Se=0,Pe=0,Le=0),B!==null?(Ce=B.x,Ze=B.y,dt=B.z):(Ce=0,Ze=0,dt=0);const tn=fe.convert(I.format),Qe=fe.convert(I.type);let we;if(I.isData3DTexture)Ne.setTexture3D(I,0),we=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ne.setTexture2DArray(I,0),we=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const zt=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),kn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ws=P.getParameter(P.UNPACK_SKIP_ROWS),Vi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(we,N,Ce,Ze,dt,oe,me,xe,tn,Qe,ht.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(we,N,Ce,Ze,dt,oe,me,xe,tn,ht.data):P.texSubImage3D(we,N,Ce,Ze,dt,oe,me,xe,tn,Qe,ht),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ws),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vi),N===0&&I.generateMipmaps&&P.generateMipmap(we),Ae.unbindTexture()},this.initRenderTarget=function(w){He.get(w).__webglFramebuffer===void 0&&Ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,Ae.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Jc?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Tl?"display-p3":"srgb"}}class NE extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $m extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ka=new U,Za=new U,Nh=new ut,No=new tf,pa=new wl,wu=new U,Oh=new U;class Fh extends Et{constructor(e=new Tn,n=new $m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Ka.fromBufferAttribute(n,r-1),Za.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ka.distanceTo(Za);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),pa.radius+=o,e.ray.intersectsSphere(pa)===!1)return;Nh.copy(r).invert(),No.copy(e.ray).applyMatrix4(Nh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,s.start),y=Math.min(d.count,s.start+s.count);for(let _=m,f=y-1;_<f;_+=u){const c=d.getX(_),g=d.getX(_+1),v=ma(this,e,No,l,c,g);v&&n.push(v)}if(this.isLineLoop){const _=d.getX(y-1),f=d.getX(m),c=ma(this,e,No,l,_,f);c&&n.push(c)}}else{const m=Math.max(0,s.start),y=Math.min(h.count,s.start+s.count);for(let _=m,f=y-1;_<f;_+=u){const c=ma(this,e,No,l,_,_+1);c&&n.push(c)}if(this.isLineLoop){const _=ma(this,e,No,l,y-1,m);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ma(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(Ka.fromBufferAttribute(s,r),Za.fromBufferAttribute(s,o),n.distanceSqToSegment(Ka,Za,wu,Oh)>i)return;wu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(wu);if(!(l<e.near||l>e.far))return{distance:l,point:Oh.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class Rl extends Et{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Au=new ut,kh=new U,Bh=new U;class af{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),n.position.copy(kh),Bh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bh),n.updateMatrixWorld(),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OE extends af{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=po*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class FE extends Rl{constructor(e,n,i=0,r=Math.PI/3,o=0,s=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=r,this.penumbra=o,this.decay=s,this.map=null,this.shadow=new OE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zh=new ut,Oo=new U,Cu=new U;class kE extends af{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oo),Cu.copy(i.position),Cu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Cu),i.updateMatrixWorld(),r.makeTranslation(-Oo.x,-Oo.y,-Oo.z),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh)}}class Ru extends Rl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BE extends af{constructor(){super(new of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zE extends Rl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HE extends Rl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class VE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Hh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Hh(){return(typeof performance=="undefined"?Date:performance).now()}class Vh{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const Gh={type:"change"},bu={type:"start"},Wh={type:"end"},ga=new tf,Xh=new ci,GE=Math.cos(70*A0.DEG2RAD);class WE extends dr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",le),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gh),i.update(),o=r.NONE},this.update=function(){const x=new U,V=new lr().setFromUnitVectors(e.up,new U(0,1,0)),O=V.clone().invert(),W=new U,J=new lr,Te=new U,Ie=2*Math.PI;return function(_t=null){const Ke=i.object.position;x.copy(Ke).sub(i.target),x.applyQuaternion(V),a.setFromVector3(x),i.autoRotate&&o===r.NONE&&X(T(_t)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let vt=i.minAzimuthAngle,xt=i.maxAzimuthAngle;isFinite(vt)&&isFinite(xt)&&(vt<-Math.PI?vt+=Ie:vt>Math.PI&&(vt-=Ie),xt<-Math.PI?xt+=Ie:xt>Math.PI&&(xt-=Ie),vt<=xt?a.theta=Math.max(vt,Math.min(xt,a.theta)):a.theta=a.theta>(vt+xt)/2?Math.max(vt,a.theta):Math.min(xt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Jt=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=ge(a.radius);else{const en=a.radius;a.radius=ge(a.radius*u),Jt=en!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(O),Ke.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&A){let en=null;if(i.object.isPerspectiveCamera){const ni=x.length();en=ge(ni*u);const zi=ni-en;i.object.position.addScaledVector(S,zi),i.object.updateMatrixWorld(),Jt=!!zi}else if(i.object.isOrthographicCamera){const ni=new U(b.x,b.y,0);ni.unproject(i.object);const zi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Jt=zi!==i.object.zoom;const Hi=new U(b.x,b.y,0);Hi.unproject(i.object),i.object.position.sub(Hi).add(ni),i.object.updateMatrixWorld(),en=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;en!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(en).add(i.object.position):(ga.origin.copy(i.object.position),ga.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ga.direction))<GE?e.lookAt(i.target):(Xh.setFromNormalAndCoplanarPoint(i.object.up,i.target),ga.intersectPlane(Xh,i.target))))}else if(i.object.isOrthographicCamera){const en=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),en!==i.object.zoom&&(i.object.updateProjectionMatrix(),Jt=!0)}return u=1,A=!1,Jt||W.distanceToSquared(i.object.position)>s||8*(1-J.dot(i.object.quaternion))>s||Te.distanceToSquared(i.target)>s?(i.dispatchEvent(Gh),W.copy(i.object.position),J.copy(i.object.quaternion),Te.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",lt),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",M),i.domElement.getRootNode().removeEventListener("keydown",Ee,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Vh,l=new Vh;let u=1;const d=new U,p=new Me,h=new Me,m=new Me,y=new Me,_=new Me,f=new Me,c=new Me,g=new Me,v=new Me,S=new U,b=new Me;let A=!1;const C=[],D={};let E=!1;function T(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function L(x){const V=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*V)}function X(x){l.theta-=x}function F(x){l.phi-=x}const $=function(){const x=new U;return function(O,W){x.setFromMatrixColumn(W,0),x.multiplyScalar(-O),d.add(x)}}(),q=function(){const x=new U;return function(O,W){i.screenSpacePanning===!0?x.setFromMatrixColumn(W,1):(x.setFromMatrixColumn(W,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(O),d.add(x)}}(),Y=function(){const x=new U;return function(O,W){const J=i.domElement;if(i.object.isPerspectiveCamera){const Te=i.object.position;x.copy(Te).sub(i.target);let Ie=x.length();Ie*=Math.tan(i.object.fov/2*Math.PI/180),$(2*O*Ie/J.clientHeight,i.object.matrix),q(2*W*Ie/J.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(O*(i.object.right-i.object.left)/i.object.zoom/J.clientWidth,i.object.matrix),q(W*(i.object.top-i.object.bottom)/i.object.zoom/J.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function de(x,V){if(!i.zoomToCursor)return;A=!0;const O=i.domElement.getBoundingClientRect(),W=x-O.left,J=V-O.top,Te=O.width,Ie=O.height;b.x=W/Te*2-1,b.y=-(J/Ie)*2+1,S.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function ge(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function G(x){p.set(x.clientX,x.clientY)}function se(x){de(x.clientX,x.clientX),c.set(x.clientX,x.clientY)}function pe(x){y.set(x.clientX,x.clientY)}function z(x){h.set(x.clientX,x.clientY),m.subVectors(h,p).multiplyScalar(i.rotateSpeed);const V=i.domElement;X(2*Math.PI*m.x/V.clientHeight),F(2*Math.PI*m.y/V.clientHeight),p.copy(h),i.update()}function Z(x){g.set(x.clientX,x.clientY),v.subVectors(g,c),v.y>0?K(L(v.y)):v.y<0&&j(L(v.y)),c.copy(g),i.update()}function he(x){_.set(x.clientX,x.clientY),f.subVectors(_,y).multiplyScalar(i.panSpeed),Y(f.x,f.y),y.copy(_),i.update()}function ae(x){de(x.clientX,x.clientY),x.deltaY<0?j(L(x.deltaY)):x.deltaY>0&&K(L(x.deltaY)),i.update()}function Ue(x){let V=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),V=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),V=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),V=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),V=!0;break}V&&(x.preventDefault(),i.update())}function Re(x){if(C.length===1)p.set(x.pageX,x.pageY);else{const V=ke(x),O=.5*(x.pageX+V.x),W=.5*(x.pageY+V.y);p.set(O,W)}}function We(x){if(C.length===1)y.set(x.pageX,x.pageY);else{const V=ke(x),O=.5*(x.pageX+V.x),W=.5*(x.pageY+V.y);y.set(O,W)}}function P(x){const V=ke(x),O=x.pageX-V.x,W=x.pageY-V.y,J=Math.sqrt(O*O+W*W);c.set(0,J)}function Xe(x){i.enableZoom&&P(x),i.enablePan&&We(x)}function Ge(x){i.enableZoom&&P(x),i.enableRotate&&Re(x)}function tt(x){if(C.length==1)h.set(x.pageX,x.pageY);else{const O=ke(x),W=.5*(x.pageX+O.x),J=.5*(x.pageY+O.y);h.set(W,J)}m.subVectors(h,p).multiplyScalar(i.rotateSpeed);const V=i.domElement;X(2*Math.PI*m.x/V.clientHeight),F(2*Math.PI*m.y/V.clientHeight),p.copy(h)}function Ae(x){if(C.length===1)_.set(x.pageX,x.pageY);else{const V=ke(x),O=.5*(x.pageX+V.x),W=.5*(x.pageY+V.y);_.set(O,W)}f.subVectors(_,y).multiplyScalar(i.panSpeed),Y(f.x,f.y),y.copy(_)}function je(x){const V=ke(x),O=x.pageX-V.x,W=x.pageY-V.y,J=Math.sqrt(O*O+W*W);g.set(0,J),v.set(0,Math.pow(g.y/c.y,i.zoomSpeed)),K(v.y),c.copy(g);const Te=(x.pageX+V.x)*.5,Ie=(x.pageY+V.y)*.5;de(Te,Ie)}function He(x){i.enableZoom&&je(x),i.enablePan&&Ae(x)}function Ne(x){i.enableZoom&&je(x),i.enableRotate&&tt(x)}function lt(x){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",M)),!fe(x)&&(Ve(x),x.pointerType==="touch"?Oe(x):H(x)))}function R(x){i.enabled!==!1&&(x.pointerType==="touch"?re(x):Q(x))}function M(x){switch(be(x),C.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",M),i.dispatchEvent(Wh),o=r.NONE;break;case 1:const V=C[0],O=D[V];Oe({pointerId:V,pageX:O.x,pageY:O.y});break}}function H(x){let V;switch(x.button){case 0:V=i.mouseButtons.LEFT;break;case 1:V=i.mouseButtons.MIDDLE;break;case 2:V=i.mouseButtons.RIGHT;break;default:V=-1}switch(V){case xr.DOLLY:if(i.enableZoom===!1)return;se(x),o=r.DOLLY;break;case xr.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;pe(x),o=r.PAN}else{if(i.enableRotate===!1)return;G(x),o=r.ROTATE}break;case xr.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;G(x),o=r.ROTATE}else{if(i.enablePan===!1)return;pe(x),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(bu)}function Q(x){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;z(x);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(x);break;case r.PAN:if(i.enablePan===!1)return;he(x);break}}function ee(x){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(x.preventDefault(),i.dispatchEvent(bu),ae(te(x)),i.dispatchEvent(Wh))}function te(x){const V=x.deltaMode,O={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(V){case 1:O.deltaY*=16;break;case 2:O.deltaY*=100;break}return x.ctrlKey&&!E&&(O.deltaY*=10),O}function Ee(x){x.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(x){x.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function le(x){i.enabled===!1||i.enablePan===!1||Ue(x)}function Oe(x){switch(Fe(x),C.length){case 1:switch(i.touches.ONE){case yr.ROTATE:if(i.enableRotate===!1)return;Re(x),o=r.TOUCH_ROTATE;break;case yr.PAN:if(i.enablePan===!1)return;We(x),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(x),o=r.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ge(x),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(bu)}function re(x){switch(Fe(x),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;tt(x),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ae(x),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;He(x),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(x),i.update();break;default:o=r.NONE}}function ye(x){i.enabled!==!1&&x.preventDefault()}function Ve(x){C.push(x.pointerId)}function be(x){delete D[x.pointerId];for(let V=0;V<C.length;V++)if(C[V]==x.pointerId){C.splice(V,1);return}}function fe(x){for(let V=0;V<C.length;V++)if(C[V]==x.pointerId)return!0;return!1}function Fe(x){let V=D[x.pointerId];V===void 0&&(V=new Me,D[x.pointerId]=V),V.set(x.pageX,x.pageY)}function ke(x){const V=x.pointerId===C[0]?C[1]:C[0];return D[V]}i.domElement.addEventListener("contextmenu",ye),i.domElement.addEventListener("pointerdown",lt),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}const Km={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XE=new of(-1,1,1,-1,0,1);class jE extends Tn{constructor(){super(),this.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new In([0,2,0,0,2,0],2))}}const YE=new jE;class Zm{constructor(e){this._mesh=new bn(YE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qE extends Is{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$a.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zm(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jh extends Is{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class $E extends Is{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class KE{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Me);this._width=i.width,this._height=i.height,n=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qE(Km),this.copyPass.material.blending=Zn,this.clock=new VE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jh!==void 0&&(s instanceof jh?i=!0:s instanceof $E&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ZE extends Is{constructor(e,n,i=null,r=null,o=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const QE={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class go extends Is{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new En(o,s,{type:yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const h=new En(o,s,{type:yi});h.texture.name="UnrealBloomPass.h"+p,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new En(o,s,{type:yi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),s=Math.round(s/2)}const a=QE;this.highPassUniforms=$a.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new Me(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Km;this.copyUniforms=$a.clone(d.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:tc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this.basic=new nf,this.fsQuad=new Zm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new Me(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=go.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=go.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}go.BlurDirectionX=new Me(1,0);go.BlurDirectionY=new Me(0,1);var ve={exports:{}},$e={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Yh=Object.getOwnPropertySymbols,JE=Object.prototype.hasOwnProperty,eT=Object.prototype.propertyIsEnumerable;function tT(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function nT(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(o){r[o]=o}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Qm=nT()?Object.assign:function(t,e){for(var n,i=tT(t),r,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)JE.call(n,s)&&(i[s]=n[s]);if(Yh){r=Yh(n);for(var a=0;a<r.length;a++)eT.call(n,r[a])&&(i[r[a]]=n[r[a]])}}return i};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=Qm,Eo=60103,Jm=60106;$e.Fragment=60107;$e.StrictMode=60108;$e.Profiler=60114;var eg=60109,tg=60110,ng=60112;$e.Suspense=60113;var ig=60115,rg=60116;if(typeof Symbol=="function"&&Symbol.for){var xn=Symbol.for;Eo=xn("react.element"),Jm=xn("react.portal"),$e.Fragment=xn("react.fragment"),$e.StrictMode=xn("react.strict_mode"),$e.Profiler=xn("react.profiler"),eg=xn("react.provider"),tg=xn("react.context"),ng=xn("react.forward_ref"),$e.Suspense=xn("react.suspense"),ig=xn("react.memo"),rg=xn("react.lazy")}var qh=typeof Symbol=="function"&&Symbol.iterator;function iT(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}function Ns(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg={};function To(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||og}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Ns(85));this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ag(){}ag.prototype=To.prototype;function uf(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||og}var cf=uf.prototype=new ag;cf.constructor=uf;lf(cf,To.prototype);cf.isPureReactComponent=!0;var ff={current:null},lg=Object.prototype.hasOwnProperty,ug={key:!0,ref:!0,__self:!0,__source:!0};function cg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)lg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Eo,type:t,key:o,ref:s,props:r,_owner:ff.current}}function rT(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function oT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $h=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oT(""+t.key):e.toString(36)}function La(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Eo:case Jm:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Pu(s,0):i,Array.isArray(r)?(n="",t!=null&&(n=t.replace($h,"$&/")+"/"),La(r,e,n,"",function(u){return u})):r!=null&&(df(r)&&(r=rT(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace($h,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Array.isArray(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Pu(o,a);s+=La(o,e,n,l,r)}else if(l=iT(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Pu(o,a++),s+=La(o,e,n,l,r);else if(o==="object")throw e=""+t,Error(Ns(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return s}function _a(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(o){return e.call(n,o,r++)}),i}function sT(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var fg={current:null};function ti(){var t=fg.current;if(t===null)throw Error(Ns(321));return t}var aT={ReactCurrentDispatcher:fg,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:ff,IsSomeRendererActing:{current:!1},assign:lf};$e.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error(Ns(143));return t}};$e.Component=To;$e.PureComponent=uf;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aT;$e.cloneElement=function(t,e,n){if(t==null)throw Error(Ns(267,t));var i=lf({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ff.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Eo,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:tg,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:eg,_context:t},t.Consumer=t};$e.createElement=cg;$e.createFactory=function(t){var e=cg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:ng,render:t}};$e.isValidElement=df;$e.lazy=function(t){return{$$typeof:rg,_payload:{_status:-1,_result:t},_init:sT}};$e.memo=function(t,e){return{$$typeof:ig,type:t,compare:e===void 0?null:e}};$e.useCallback=function(t,e){return ti().useCallback(t,e)};$e.useContext=function(t,e){return ti().useContext(t,e)};$e.useDebugValue=function(){};$e.useEffect=function(t,e){return ti().useEffect(t,e)};$e.useImperativeHandle=function(t,e,n){return ti().useImperativeHandle(t,e,n)};$e.useLayoutEffect=function(t,e){return ti().useLayoutEffect(t,e)};$e.useMemo=function(t,e){return ti().useMemo(t,e)};$e.useReducer=function(t,e,n){return ti().useReducer(t,e,n)};$e.useRef=function(t){return ti().useRef(t)};$e.useState=function(t){return ti().useState(t)};$e.version="17.0.2";ve.exports=$e;var hf=ve.exports,pf=ym({__proto__:null,default:hf},[ve.exports]),mf={exports:{}},mn={},dg={exports:{}},hg={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,i,r;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,d=function(){if(l!==null)try{var G=t.unstable_now();l(!0,G),l=null}catch(se){throw setTimeout(d,0),se}};e=function(G){l!==null?setTimeout(e,0,G):(l=G,setTimeout(d,0))},n=function(G,se){u=setTimeout(G,se)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},r=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,_=null,f=-1,c=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},r=function(){},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<G?Math.floor(1e3/G):5};var v=new MessageChannel,S=v.port2;v.port1.onmessage=function(){if(_!==null){var G=t.unstable_now();g=G+c;try{_(!0,G)?S.postMessage(null):(y=!1,_=null)}catch(se){throw S.postMessage(null),se}}else y=!1},e=function(G){_=G,y||(y=!0,S.postMessage(null))},n=function(G,se){f=p(function(){G(t.unstable_now())},se)},i=function(){h(f),f=-1}}function b(G,se){var pe=G.length;G.push(se);e:for(;;){var z=pe-1>>>1,Z=G[z];if(Z!==void 0&&0<D(Z,se))G[z]=se,G[pe]=Z,pe=z;else break e}}function A(G){return G=G[0],G===void 0?null:G}function C(G){var se=G[0];if(se!==void 0){var pe=G.pop();if(pe!==se){G[0]=pe;e:for(var z=0,Z=G.length;z<Z;){var he=2*(z+1)-1,ae=G[he],Ue=he+1,Re=G[Ue];if(ae!==void 0&&0>D(ae,pe))Re!==void 0&&0>D(Re,ae)?(G[z]=Re,G[Ue]=pe,z=Ue):(G[z]=ae,G[he]=pe,z=he);else if(Re!==void 0&&0>D(Re,pe))G[z]=Re,G[Ue]=pe,z=Ue;else break e}}return se}return null}function D(G,se){var pe=G.sortIndex-se.sortIndex;return pe!==0?pe:G.id-se.id}var E=[],T=[],L=1,X=null,F=3,$=!1,q=!1,Y=!1;function K(G){for(var se=A(T);se!==null;){if(se.callback===null)C(T);else if(se.startTime<=G)C(T),se.sortIndex=se.expirationTime,b(E,se);else break;se=A(T)}}function j(G){if(Y=!1,K(G),!q)if(A(E)!==null)q=!0,e(de);else{var se=A(T);se!==null&&n(j,se.startTime-G)}}function de(G,se){q=!1,Y&&(Y=!1,i()),$=!0;var pe=F;try{for(K(se),X=A(E);X!==null&&(!(X.expirationTime>se)||G&&!t.unstable_shouldYield());){var z=X.callback;if(typeof z=="function"){X.callback=null,F=X.priorityLevel;var Z=z(X.expirationTime<=se);se=t.unstable_now(),typeof Z=="function"?X.callback=Z:X===A(E)&&C(E),K(se)}else C(E);X=A(E)}if(X!==null)var he=!0;else{var ae=A(T);ae!==null&&n(j,ae.startTime-se),he=!1}return he}finally{X=null,F=pe,$=!1}}var ge=r;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){q||$||(q=!0,e(de))},t.unstable_getCurrentPriorityLevel=function(){return F},t.unstable_getFirstCallbackNode=function(){return A(E)},t.unstable_next=function(G){switch(F){case 1:case 2:case 3:var se=3;break;default:se=F}var pe=F;F=se;try{return G()}finally{F=pe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=ge,t.unstable_runWithPriority=function(G,se){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var pe=F;F=G;try{return se()}finally{F=pe}},t.unstable_scheduleCallback=function(G,se,pe){var z=t.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?z+pe:z):pe=z,G){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=pe+Z,G={id:L++,callback:se,priorityLevel:G,startTime:pe,expirationTime:Z,sortIndex:-1},pe>z?(G.sortIndex=pe,b(T,G),A(E)===null&&G===A(T)&&(Y?i():Y=!0,n(j,pe-z))):(G.sortIndex=Z,b(E,G),q||$||(q=!0,e(de))),G},t.unstable_wrapCallback=function(G){var se=F;return function(){var pe=F;F=se;try{return G.apply(this,arguments)}finally{F=pe}}}})(hg);dg.exports=hg;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=ve.exports,at=Qm,bt=dg.exports;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!bl)throw Error(ie(227));var pg=new Set,ms={};function hr(t,e){_o(t,e),_o(t+"Capture",e)}function _o(t,e){for(ms[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var ei=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),lT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh=Object.prototype.hasOwnProperty,Zh={},Qh={};function uT(t){return Kh.call(Qh,t)?!0:Kh.call(Zh,t)?!1:lT.test(t)?Qh[t]=!0:(Zh[t]=!0,!1)}function cT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,i){if(e===null||typeof e=="undefined"||cT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gf,_f);Dt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gf,_f);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gf,_f);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vf(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null,o=r!==null?r.type===0:i?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");o||(fT(e,n,r,i)&&(n=null),i||r===null?uT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pr=bl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=60103,nr=60106,hi=60107,xf=60108,is=60114,yf=60109,Sf=60110,Pl=60112,rs=60113,Qa=60120,Ll=60115,Mf=60116,Ef=60121,Tf=60128,mg=60129,wf=60130,uc=60131;if(typeof Symbol=="function"&&Symbol.for){var Rt=Symbol.for;Ko=Rt("react.element"),nr=Rt("react.portal"),hi=Rt("react.fragment"),xf=Rt("react.strict_mode"),is=Rt("react.profiler"),yf=Rt("react.provider"),Sf=Rt("react.context"),Pl=Rt("react.forward_ref"),rs=Rt("react.suspense"),Qa=Rt("react.suspense_list"),Ll=Rt("react.memo"),Mf=Rt("react.lazy"),Ef=Rt("react.block"),Rt("react.scope"),Tf=Rt("react.opaque.id"),mg=Rt("react.debug_trace_mode"),wf=Rt("react.offscreen"),uc=Rt("react.legacy_hidden")}var Jh=typeof Symbol=="function"&&Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=Jh&&t[Jh]||t["@@iterator"],typeof t=="function"?t:null)}var Lu;function Zo(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Du=!1;function va(t,e){if(!t||Du)return"";Du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a])return`
`+r[s].replace(" at new "," at ");while(1<=s&&0<=a);break}}}finally{Du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function dT(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=va(t.type,!1),t;case 11:return t=va(t.type.render,!1),t;case 22:return t=va(t.type._render,!1),t;case 1:return t=va(t.type,!0),t;default:return""}}function Qr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case nr:return"Portal";case is:return"Profiler";case xf:return"StrictMode";case rs:return"Suspense";case Qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sf:return(t.displayName||"Context")+".Consumer";case yf:return(t._context.displayName||"Context")+".Provider";case Pl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Ll:return Qr(t.type);case Ef:return Qr(t._render);case Mf:e=t._payload,t=t._init;try{return Qr(t(e))}catch{}}return null}function Di(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hT(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=hT(t))}function _g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Di(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(t,e){e=e.checked,e!=null&&vf(t,"checked",e,!1)}function fc(t,e){vg(t,e);var n=Di(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&dc(t,e.type,Di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dc(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function pT(t){var e="";return bl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function hc(t,e){return t=at({children:void 0},e),(e=pT(e.children))&&(t.children=e),t}function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Di(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Di(n)}}function xg(t,e){var n=Di(e.value),i=Di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var mc={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,Sg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!==mc.svg||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var os={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mT=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(t){mT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),os[e]=os[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||os.hasOwnProperty(t)&&os[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gT=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(gT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,eo=null,to=null;function rp(t){if(t=Fs(t)){if(typeof xc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Fl(e),xc(t.stateNode,t.type,e))}}function Tg(t){eo?to?to.push(t):to=[t]:eo=t}function wg(){if(eo){var t=eo,e=to;if(to=eo=null,rp(t),e)for(t=0;t<e.length;t++)rp(e[t])}}function Cf(t,e){return t(e)}function Ag(t,e,n,i,r){return t(e,n,i,r)}function Rf(){}var Cg=Cf,ir=!1,Uu=!1;function bf(){(eo!==null||to!==null)&&(Rf(),wg())}function _T(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return Cg(t,e,n)}finally{Uu=!1,bf()}}function _s(t,e){var n=t.stateNode;if(n===null)return null;var i=Fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var yc=!1;if(ei)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){yc=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{yc=!1}function vT(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ss=!1,el=null,tl=!1,Sc=null,xT={onError:function(t){ss=!0,el=t}};function yT(t,e,n,i,r,o,s,a,l){ss=!1,el=null,vT.apply(xT,arguments)}function ST(t,e,n,i,r,o,s,a,l){if(yT.apply(this,arguments),ss){if(ss){var u=el;ss=!1,el=null}else throw Error(ie(198));tl||(tl=!0,Sc=u)}}function mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(mr(t)!==t)throw Error(ie(188))}function MT(t){var e=t.alternate;if(!e){if(e=mr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return op(r),t;if(o===i)return op(r),e;o=o.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function bg(t){if(t=MT(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function sp(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Pg,Pf,Lg,Dg,Mc=!1,Pn=[],Si=null,Mi=null,Ei=null,vs=new Map,xs=new Map,Bo=[],ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(t,e,n,i,r){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:r,targetContainers:[i]}}function lp(t,e){switch(t){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(e.pointerId)}}function zo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t=Ec(e,n,i,r,o),e!==null&&(e=Fs(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ET(t,e,n,i,r){switch(e){case"focusin":return Si=zo(Si,t,e,n,i,r),!0;case"dragenter":return Mi=zo(Mi,t,e,n,i,r),!0;case"mouseover":return Ei=zo(Ei,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return vs.set(o,zo(vs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,xs.set(o,zo(xs.get(o)||null,t,e,n,i,r)),!0}return!1}function TT(t){var e=rr(t.target);if(e!==null){var n=mr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rg(n),e!==null){t.blockedOn=e,Dg(t.lanePriority,function(){bt.unstable_runWithPriority(t.priority,function(){Lg(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=If(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Fs(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function up(t,e,n){Da(t)&&n.delete(e)}function wT(){for(Mc=!1;0<Pn.length;){var t=Pn[0];if(t.blockedOn!==null){t=Fs(t.blockedOn),t!==null&&Pg(t);break}for(var e=t.targetContainers;0<e.length;){var n=If(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Pn.shift()}Si!==null&&Da(Si)&&(Si=null),Mi!==null&&Da(Mi)&&(Mi=null),Ei!==null&&Da(Ei)&&(Ei=null),vs.forEach(up),xs.forEach(up)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,wT)))}function Ug(t){function e(r){return Ho(r,t)}if(0<Pn.length){Ho(Pn[0],t);for(var n=1;n<Pn.length;n++){var i=Pn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Si!==null&&Ho(Si,t),Mi!==null&&Ho(Mi,t),Ei!==null&&Ho(Ei,t),vs.forEach(e),xs.forEach(e),n=0;n<Bo.length;n++)i=Bo[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bo.length&&(n=Bo[0],n.blockedOn===null);)TT(n),n.blockedOn===null&&Bo.shift()}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gr={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Iu={},Ig={};ei&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function Dl(t){if(Iu[t])return Iu[t];if(!Gr[t])return t;var e=Gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return Iu[t]=e[n];return t}var Ng=Dl("animationend"),Og=Dl("animationiteration"),Fg=Dl("animationstart"),kg=Dl("transitionend"),Bg=new Map,Lf=new Map,AT=["abort","abort",Ng,"animationEnd",Og,"animationIteration",Fg,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",kg,"transitionEnd","waiting","waiting"];function Df(t,e){for(var n=0;n<t.length;n+=2){var i=t[n],r=t[n+1];r="on"+(r[0].toUpperCase()+r.slice(1)),Lf.set(i,e),Bg.set(i,r),hr(r,[i])}}var CT=bt.unstable_now;CT();var nt=8;function zr(t){if((1&t)!==0)return nt=15,1;if((2&t)!==0)return nt=14,2;if((4&t)!==0)return nt=13,4;var e=24&t;return e!==0?(nt=12,e):(t&32)!==0?(nt=11,32):(e=192&t,e!==0?(nt=10,e):(t&256)!==0?(nt=9,256):(e=3584&t,e!==0?(nt=8,e):(t&4096)!==0?(nt=7,4096):(e=4186112&t,e!==0?(nt=6,e):(e=62914560&t,e!==0?(nt=5,e):t&67108864?(nt=4,67108864):(t&134217728)!==0?(nt=3,134217728):(e=805306368&t,e!==0?(nt=2,e):(1073741824&t)!==0?(nt=1,1073741824):(nt=8,t))))))}function RT(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function bT(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(ie(358,t))}}function ys(t,e){var n=t.pendingLanes;if(n===0)return nt=0;var i=0,r=0,o=t.expiredLanes,s=t.suspendedLanes,a=t.pingedLanes;if(o!==0)i=o,r=nt=15;else if(o=n&134217727,o!==0){var l=o&~s;l!==0?(i=zr(l),r=nt):(a&=o,a!==0&&(i=zr(a),r=nt))}else o=n&~s,o!==0?(i=zr(o),r=nt):a!==0&&(i=zr(a),r=nt);if(i===0)return 0;if(i=31-Ui(i),i=n&((0>i?0:1<<i)<<1)-1,e!==0&&e!==i&&(e&s)===0){if(zr(e),r<=nt)return e;nt=r}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ui(e),r=1<<n,i|=t[n],e&=~r;return i}function zg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Hr(24&~e),t===0?nl(10,e):t;case 10:return t=Hr(192&~e),t===0?nl(8,e):t;case 8:return t=Hr(3584&~e),t===0&&(t=Hr(4186112&~e),t===0&&(t=512)),t;case 2:return e=Hr(805306368&~e),e===0&&(e=268435456),e}throw Error(ie(358,t))}function Hr(t){return t&-t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ul(t,e,n){t.pendingLanes|=e;var i=e-1;t.suspendedLanes&=i,t.pingedLanes&=i,t=t.eventTimes,e=31-Ui(e),t[e]=n}var Ui=Math.clz32?Math.clz32:DT,PT=Math.log,LT=Math.LN2;function DT(t){return t===0?32:31-(PT(t)/LT|0)|0}var UT=bt.unstable_UserBlockingPriority,IT=bt.unstable_runWithPriority,Ua=!0;function NT(t,e,n,i){ir||Rf();var r=Uf,o=ir;ir=!0;try{Ag(r,t,e,n,i)}finally{(ir=o)||bf()}}function OT(t,e,n,i){IT(UT,Uf.bind(null,t,e,n,i))}function Uf(t,e,n,i){if(Ua){var r;if((r=(e&4)===0)&&0<Pn.length&&-1<ap.indexOf(t))t=Ec(null,t,e,n,i),Pn.push(t);else{var o=If(t,e,n,i);if(o===null)r&&lp(t,i);else{if(r){if(-1<ap.indexOf(t)){t=Ec(o,t,e,n,i),Pn.push(t);return}if(ET(o,t,e,n,i))return;lp(t,i)}Jg(t,e,i,null,n)}}}}function If(t,e,n,i){var r=Af(i);if(r=rr(r),r!==null){var o=mr(r);if(o===null)r=null;else{var s=o.tag;if(s===13){if(r=Rg(o),r!==null)return r;r=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null)}}return Jg(t,e,i,r,n),null}var mi=null,Nf=null,Ia=null;function Hg(){if(Ia)return Ia;var t,e=Nf,n=e.length,i,r="value"in mi?mi.value:mi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ia=r.slice(t,1<i?1-i:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function cp(){return!1}function sn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ma:cp,this.isPropagationStopped=cp,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=sn(wo),Os=at({},wo,{view:0,detail:0}),FT=sn(Os),Ou,Fu,Vo,Il=at({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(Ou=t.screenX-Vo.screenX,Fu=t.screenY-Vo.screenY):Fu=Ou=0,Vo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),fp=sn(Il),kT=at({},Il,{dataTransfer:0}),BT=sn(kT),zT=at({},Os,{relatedTarget:0}),ku=sn(zT),HT=at({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),VT=sn(HT),GT=at({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WT=sn(GT),XT=at({},wo,{data:0}),dp=sn(XT),jT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $T(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qT[t])?!!e[t]:!1}function Ff(){return $T}var KT=at({},Os,{key:function(t){if(t.key){var e=jT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZT=sn(KT),QT=at({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=sn(QT),JT=at({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),ew=sn(JT),tw=at({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),nw=sn(tw),iw=at({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=sn(iw),ow=[9,13,27,32],kf=ei&&"CompositionEvent"in window,as=null;ei&&"documentMode"in document&&(as=document.documentMode);var sw=ei&&"TextEvent"in window&&!as,Vg=ei&&(!kf||as&&8<as&&11>=as),pp=String.fromCharCode(32),mp=!1;function Gg(t,e){switch(t){case"keyup":return ow.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function aw(t,e){switch(t){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(mp=!0,pp);case"textInput":return t=e.data,t===pp&&mp?null:t;default:return null}}function lw(t,e){if(Wr)return t==="compositionend"||!kf&&Gg(t,e)?(t=Hg(),Ia=Nf=mi=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vg&&e.locale!=="ko"?null:e.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uw[t.type]:e==="textarea"}function Xg(t,e,n,i){Tg(i),e=il(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ls=null,Ss=null;function cw(t){Kg(t,0)}function Nl(t){var e=jr(t);if(_g(e))return t}function fw(t,e){if(t==="change")return e}var jg=!1;if(ei){var Bu;if(ei){var zu="oninput"in document;if(!zu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),zu=typeof _p.oninput=="function"}Bu=zu}else Bu=!1;jg=Bu&&(!document.documentMode||9<document.documentMode)}function vp(){ls&&(ls.detachEvent("onpropertychange",Yg),Ss=ls=null)}function Yg(t){if(t.propertyName==="value"&&Nl(Ss)){var e=[];if(Xg(e,Ss,t,Af(t)),t=cw,ir)t(e);else{ir=!0;try{Cf(t,e)}finally{ir=!1,bf()}}}}function dw(t,e,n){t==="focusin"?(vp(),ls=e,Ss=n,ls.attachEvent("onpropertychange",Yg)):t==="focusout"&&vp()}function hw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Ss)}function pw(t,e){if(t==="click")return Nl(e)}function mw(t,e){if(t==="input"||t==="change")return Nl(e)}function gw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:gw,_w=Object.prototype.hasOwnProperty;function Ms(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++)if(!_w.call(e,n[i])||!un(t[n[i]],e[n[i]]))return!1;return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yp(t,e){var n=xp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sp(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function Tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var vw=ei&&"documentMode"in document&&11>=document.documentMode,Xr=null,wc=null,us=null,Ac=!1;function Mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||Xr==null||Xr!==Ja(i)||(i=Xr,"selectionStart"in i&&Tc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),us&&Ms(us,i)||(us=i,i=il(wc,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xr)))}Df("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Df("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Df(AT,2);for(var Ep="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Hu=0;Hu<Ep.length;Hu++)Lf.set(Ep[Hu],0);_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ST(i,e,void 0,t),t.currentTarget=null}function Kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Tp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Tp(r,a,u),o=l}}}if(tl)throw t=Sc,tl=!1,Sc=null,t}function it(t,e){var n=t_(e),i=t+"__bubble";n.has(i)||(Qg(e,t,2,!1),n.add(i))}var wp="_reactListening"+Math.random().toString(36).slice(2);function Zg(t){t[wp]||(t[wp]=!0,pg.forEach(function(e){$g.has(e)||Ap(e,!1,t,null),Ap(e,!0,t,null)}))}function Ap(t,e,n,i){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(t==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),i!==null&&!e&&$g.has(t)){if(t!=="scroll")return;r|=2,o=i}var s=t_(o),a=t+"__"+(e?"capture":"bubble");s.has(a)||(e&&(r|=4),Qg(o,t,r,e),s.add(a))}function Qg(t,e,n,i){var r=Lf.get(e);switch(r===void 0?2:r){case 0:r=NT;break;case 1:r=OT;break;default:r=Uf}n=r.bind(null,e,n,t),r=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jg(t,e,n,i,r){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=rr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}_T(function(){var u=o,d=Af(n),p=[];e:{var h=Bg.get(t);if(h!==void 0){var m=Of,y=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":m=ZT;break;case"focusin":y="focus",m=ku;break;case"focusout":y="blur",m=ku;break;case"beforeblur":case"afterblur":m=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=BT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ew;break;case Ng:case Og:case Fg:m=VT;break;case kg:m=nw;break;case"scroll":m=FT;break;case"wheel":m=rw;break;case"copy":case"cut":case"paste":m=WT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hp}var _=(e&4)!==0,f=!_&&t==="scroll",c=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,c!==null&&(S=_s(g,c),S!=null&&_.push(Es(g,S,v)))),f)break;g=g.return}0<_.length&&(h=new m(h,y,null,n,d),p.push({event:h,listeners:_}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&(e&16)===0&&(y=n.relatedTarget||n.fromElement)&&(rr(y)||y[Ao]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?rr(y):null,y!==null&&(f=mr(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=fp,S="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=hp,S="onPointerLeave",c="onPointerEnter",g="pointer"),f=m==null?h:jr(m),v=y==null?h:jr(y),h=new _(S,g+"leave",m,n,d),h.target=f,h.relatedTarget=v,S=null,rr(d)===u&&(_=new _(c,g+"enter",y,n,d),_.target=v,_.relatedTarget=f,S=_),f=S,m&&y)t:{for(_=m,c=y,g=0,v=_;v;v=kr(v))g++;for(v=0,S=c;S;S=kr(S))v++;for(;0<g-v;)_=kr(_),g--;for(;0<v-g;)c=kr(c),v--;for(;g--;){if(_===c||c!==null&&_===c.alternate)break t;_=kr(_),c=kr(c)}_=null}else _=null;m!==null&&Cp(p,h,m,_,!1),y!==null&&f!==null&&Cp(p,f,y,_,!0)}}e:{if(h=u?jr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=fw;else if(gp(h))if(jg)b=mw;else{b=hw;var A=dw}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=pw);if(b&&(b=b(t,u))){Xg(p,b,n,d);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&dc(h,"number",h.value)}switch(A=u?jr(u):window,t){case"focusin":(gp(A)||A.contentEditable==="true")&&(Xr=A,wc=u,us=null);break;case"focusout":us=wc=Xr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Mp(p,n,d);break;case"selectionchange":if(vw)break;case"keydown":case"keyup":Mp(p,n,d)}var C;if(kf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Wr?Gg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Vg&&n.locale!=="ko"&&(Wr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Wr&&(C=Hg()):(mi=d,Nf="value"in mi?mi.value:mi.textContent,Wr=!0)),A=il(u,D),0<A.length&&(D=new dp(D,t,null,n,d),p.push({event:D,listeners:A}),C?D.data=C:(C=Wg(n),C!==null&&(D.data=C)))),(C=sw?aw(t,n):lw(t,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(d=new dp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Kg(p,e)})}function Es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=_s(t,n),o!=null&&i.unshift(Es(t,o,r)),o=_s(t,e),o!=null&&i.push(Es(t,o,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=_s(n,o),l!=null&&s.unshift(Es(n,l,a))):r||(l=_s(n,o),l!=null&&s.push(Es(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}function rl(){}var Vu=null,Gu=null;function e_(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Cc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rp=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0;function Bf(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function no(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wu=0;function yw(t){return{$$typeof:Tf,toString:t,valueOf:t}}var Ol=Math.random().toString(36).slice(2),gi="__reactFiber$"+Ol,ol="__reactProps$"+Ol,Ao="__reactContainer$"+Ol,Pp="__reactEvents$"+Ol;function rr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ao]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bp(t);t!==null;){if(n=t[gi])return n;t=bp(t)}return e}t=n,n=t.parentNode}return null}function Fs(t){return t=t[gi]||t[Ao],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Fl(t){return t[ol]||null}function t_(t){var e=t[Pp];return e===void 0&&(e=t[Pp]=new Set),e}var Rc=[],Yr=-1;function ki(t){return{current:t}}function ot(t){0>Yr||(t.current=Rc[Yr],Rc[Yr]=null,Yr--)}function mt(t,e){Yr++,Rc[Yr]=t.current,t.current=e}var Ii={},Bt=ki(Ii),Zt=ki(!1),ur=Ii;function vo(t,e){var n=t.type.contextTypes;if(!n)return Ii;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function sl(){ot(Zt),ot(Bt)}function Lp(t,e,n){if(Bt.current!==Ii)throw Error(ie(168));mt(Bt,e),mt(Zt,n)}function n_(t,e,n){var i=t.stateNode;if(t=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(ie(108,Qr(e)||"Unknown",r));return at({},n,i)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,ur=Bt.current,mt(Bt,t),mt(Zt,Zt.current),!0}function Dp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=n_(t,e,ur),i.__reactInternalMemoizedMergedChildContext=t,ot(Zt),ot(Bt),mt(Bt,t)):ot(Zt),mt(Zt,n)}var zf=null,ar=null,Sw=bt.unstable_runWithPriority,Hf=bt.unstable_scheduleCallback,bc=bt.unstable_cancelCallback,Mw=bt.unstable_shouldYield,Up=bt.unstable_requestPaint,Pc=bt.unstable_now,Ew=bt.unstable_getCurrentPriorityLevel,kl=bt.unstable_ImmediatePriority,i_=bt.unstable_UserBlockingPriority,r_=bt.unstable_NormalPriority,o_=bt.unstable_LowPriority,s_=bt.unstable_IdlePriority,Xu={},Tw=Up!==void 0?Up:function(){},Xn=null,Fa=null,ju=!1,Ip=Pc(),Ft=1e4>Ip?Pc:function(){return Pc()-Ip};function xo(){switch(Ew()){case kl:return 99;case i_:return 98;case r_:return 97;case o_:return 96;case s_:return 95;default:throw Error(ie(332))}}function a_(t){switch(t){case 99:return kl;case 98:return i_;case 97:return r_;case 96:return o_;case 95:return s_;default:throw Error(ie(332))}}function cr(t,e){return t=a_(t),Sw(t,e)}function Ts(t,e,n){return t=a_(t),Hf(t,e,n)}function Fn(){if(Fa!==null){var t=Fa;Fa=null,bc(t)}l_()}function l_(){if(!ju&&Xn!==null){ju=!0;var t=0;try{var e=Xn;cr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Xn=null}catch(n){throw Xn!==null&&(Xn=Xn.slice(t+1)),Hf(kl,Fn),n}finally{ju=!1}}}var ww=pr.ReactCurrentBatchConfig;function yn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var al=ki(null),ll=null,qr=null,ul=null;function Vf(){ul=qr=ll=null}function Gf(t){var e=al.current;ot(al),t.type._context._currentValue=e}function u_(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function io(t,e){ll=t,ul=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Mn=!0),t.firstContext=null)}function hn(t,e){if(ul!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(ul=t,e=1073741823),e={context:t,observedBits:e,next:null},qr===null){if(ll===null)throw Error(ie(308));qr=e,ll.dependencies={lanes:0,firstContext:e,responders:null}}else qr=qr.next=e;return t._currentValue}var fi=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function c_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wi(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ws(t,e,n,i){var r=t.updateQueue;fi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;if(d!==null){d=d.updateQueue;var p=d.lastBaseUpdate;p!==s&&(p===null?d.firstBaseUpdate=u:p.next=u,d.lastBaseUpdate=l)}}if(o!==null){p=r.baseState,s=0,d=u=l=null;do{a=o.lane;var h=o.eventTime;if((i&a)===a){d!==null&&(d=d.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,y=o;switch(a=e,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){p=m.call(h,p,a);break e}p=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=y.payload,a=typeof m=="function"?m.call(h,p,a):m,a==null)break e;p=at({},p,a);break e;case 2:fi=!0}}o.callback!==null&&(t.flags|=32,a=r.effects,a===null?r.effects=[o]:a.push(o))}else h={eventTime:h,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,s|=a;if(o=o.next,o===null){if(a=r.shared.pending,a===null)break;o=a.next,a.next=null,r.lastBaseUpdate=a,r.shared.pending=null}}while(1);d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,Bs|=s,t.lanes=s,t.memoizedState=p}}function Op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var f_=new bl.Component().refs;function cl(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=Ai(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),wi(t,o),Ci(t,r,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=Ai(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),wi(t,o),Ci(t,r,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=Ai(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),wi(t,r),Ci(t,i,n)}};function Fp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ms(n,i)||!Ms(r,o):!0}function d_(t,e,n){var i=!1,r=Ii,o=e.contextType;return typeof o=="object"&&o!==null?o=hn(o):(r=Qt(e)?ur:Bt.current,i=e.contextTypes,o=(i=i!=null)?vo(t,r):Ii),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function Lc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=f_,Wf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=hn(o):(o=Qt(e)?ur:Bt.current,r.context=vo(t,o)),ws(t,n,r,i),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(cl(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bl.enqueueReplaceState(r,r.state,null),ws(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4)}var Ea=Array.isArray;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(o){var s=i.refs;s===f_&&(s=i.refs={}),o===null?delete s[r]:s[r]=o},e._stringRef=r,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ta(t,e){if(t.type!=="textarea")throw Error(ie(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function h_(t){function e(f,c){if(t){var g=f.lastEffect;g!==null?(g.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function i(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function r(f,c){return f=Oi(f,c),f.index=0,f.sibling=null,f}function o(f,c,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags=2,c):g):(f.flags=2,c)):c}function s(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,c,g,v){return c===null||c.tag!==6?(c=Zu(g,f.mode,v),c.return=f,c):(c=r(c,g),c.return=f,c)}function l(f,c,g,v){return c!==null&&c.elementType===g.type?(v=r(c,g.props),v.ref=Go(f,c,g),v.return=f,v):(v=Ha(g.type,g.key,g.props,null,f.mode,v),v.ref=Go(f,c,g),v.return=f,v)}function u(f,c,g,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Qu(g,f.mode,v),c.return=f,c):(c=r(c,g.children||[]),c.return=f,c)}function d(f,c,g,v,S){return c===null||c.tag!==7?(c=ao(g,f.mode,v,S),c.return=f,c):(c=r(c,g),c.return=f,c)}function p(f,c,g){if(typeof c=="string"||typeof c=="number")return c=Zu(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ko:return g=Ha(c.type,c.key,c.props,null,f.mode,g),g.ref=Go(f,null,c),g.return=f,g;case nr:return c=Qu(c,f.mode,g),c.return=f,c}if(Ea(c)||Fo(c))return c=ao(c,f.mode,g,null),c.return=f,c;Ta(f,c)}return null}function h(f,c,g,v){var S=c!==null?c.key:null;if(typeof g=="string"||typeof g=="number")return S!==null?null:a(f,c,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return g.key===S?g.type===hi?d(f,c,g.props.children,v,S):l(f,c,g,v):null;case nr:return g.key===S?u(f,c,g,v):null}if(Ea(g)||Fo(g))return S!==null?null:d(f,c,g,v,null);Ta(f,g)}return null}function m(f,c,g,v,S){if(typeof v=="string"||typeof v=="number")return f=f.get(g)||null,a(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return f=f.get(v.key===null?g:v.key)||null,v.type===hi?d(c,f,v.props.children,S,v.key):l(c,f,v,S);case nr:return f=f.get(v.key===null?g:v.key)||null,u(c,f,v,S)}if(Ea(v)||Fo(v))return f=f.get(g)||null,d(c,f,v,S,null);Ta(c,v)}return null}function y(f,c,g,v){for(var S=null,b=null,A=c,C=c=0,D=null;A!==null&&C<g.length;C++){A.index>C?(D=A,A=null):D=A.sibling;var E=h(f,A,g[C],v);if(E===null){A===null&&(A=D);break}t&&A&&E.alternate===null&&e(f,A),c=o(E,c,C),b===null?S=E:b.sibling=E,b=E,A=D}if(C===g.length)return n(f,A),S;if(A===null){for(;C<g.length;C++)A=p(f,g[C],v),A!==null&&(c=o(A,c,C),b===null?S=A:b.sibling=A,b=A);return S}for(A=i(f,A);C<g.length;C++)D=m(A,f,C,g[C],v),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?C:D.key),c=o(D,c,C),b===null?S=D:b.sibling=D,b=D);return t&&A.forEach(function(T){return e(f,T)}),S}function _(f,c,g,v){var S=Fo(g);if(typeof S!="function")throw Error(ie(150));if(g=S.call(g),g==null)throw Error(ie(151));for(var b=S=null,A=c,C=c=0,D=null,E=g.next();A!==null&&!E.done;C++,E=g.next()){A.index>C?(D=A,A=null):D=A.sibling;var T=h(f,A,E.value,v);if(T===null){A===null&&(A=D);break}t&&A&&T.alternate===null&&e(f,A),c=o(T,c,C),b===null?S=T:b.sibling=T,b=T,A=D}if(E.done)return n(f,A),S;if(A===null){for(;!E.done;C++,E=g.next())E=p(f,E.value,v),E!==null&&(c=o(E,c,C),b===null?S=E:b.sibling=E,b=E);return S}for(A=i(f,A);!E.done;C++,E=g.next())E=m(A,f,C,E.value,v),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?C:E.key),c=o(E,c,C),b===null?S=E:b.sibling=E,b=E);return t&&A.forEach(function(L){return e(f,L)}),S}return function(f,c,g,v){var S=typeof g=="object"&&g!==null&&g.type===hi&&g.key===null;S&&(g=g.props.children);var b=typeof g=="object"&&g!==null;if(b)switch(g.$$typeof){case Ko:e:{for(b=g.key,S=c;S!==null;){if(S.key===b){switch(S.tag){case 7:if(g.type===hi){n(f,S.sibling),c=r(S,g.props.children),c.return=f,f=c;break e}break;default:if(S.elementType===g.type){n(f,S.sibling),c=r(S,g.props),c.ref=Go(f,S,g),c.return=f,f=c;break e}}n(f,S);break}else e(f,S);S=S.sibling}g.type===hi?(c=ao(g.props.children,f.mode,v,g.key),c.return=f,f=c):(v=Ha(g.type,g.key,g.props,null,f.mode,v),v.ref=Go(f,c,g),v.return=f,f=v)}return s(f);case nr:e:{for(S=g.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),c=r(c,g.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=Qu(g,f.mode,v),c.return=f,f=c}return s(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),c=r(c,g),c.return=f,f=c):(n(f,c),c=Zu(g,f.mode,v),c.return=f,f=c),s(f);if(Ea(g))return y(f,c,g,v);if(Fo(g))return _(f,c,g,v);if(b&&Ta(f,g),typeof g=="undefined"&&!S)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(ie(152,Qr(f.type)||"Component"))}return n(f,c)}}var fl=h_(!0),p_=h_(!1),ks={},Nn=ki(ks),As=ki(ks),Cs=ki(ks);function or(t){if(t===ks)throw Error(ie(174));return t}function Dc(t,e){switch(mt(Cs,e),mt(As,t),mt(Nn,ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}ot(Nn),mt(Nn,e)}function yo(){ot(Nn),ot(As),ot(Cs)}function Bp(t){or(Cs.current);var e=or(Nn.current),n=gc(e,t.type);e!==n&&(mt(As,t),mt(Nn,n))}function Xf(t){As.current===t&&(ot(Nn),ot(As))}var pt=ki(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $n=null,_i=null,On=!1;function m_(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Uc(t){if(On){var e=_i;if(e){var n=e;if(!zp(t,e)){if(e=no(n.nextSibling),!e||!zp(t,e)){t.flags=t.flags&-1025|2,On=!1,$n=t;return}m_($n,n)}$n=t,_i=no(e.firstChild)}else t.flags=t.flags&-1025|2,On=!1,$n=t}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function wa(t){if(t!==$n)return!1;if(!On)return Hp(t),On=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Cc(e,t.memoizedProps))for(e=_i;e;)m_(t,e),e=no(e.nextSibling);if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_i=no(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_i=null}}else _i=$n?no(t.stateNode.nextSibling):null;return!0}function Yu(){_i=$n=null,On=!1}var ro=[];function jf(){for(var t=0;t<ro.length;t++)ro[t]._workInProgressVersionPrimary=null;ro.length=0}var cs=pr.ReactCurrentDispatcher,dn=pr.ReactCurrentBatchConfig,Rs=0,gt=null,Nt=null,Pt=null,hl=!1,fs=!1;function Xt(){throw Error(ie(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,o){if(Rs=o,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cs.current=t===null||t.memoizedState===null?Cw:Rw,t=n(i,r),fs){o=0;do{if(fs=!1,!(25>o))throw Error(ie(301));o+=1,Pt=Nt=null,e.updateQueue=null,cs.current=bw,t=n(i,r)}while(fs)}if(cs.current=_l,e=Nt!==null&&Nt.next!==null,Rs=0,Pt=Nt=gt=null,hl=!1,e)throw Error(ie(300));return t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?gt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function gr(){if(Nt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Pt===null?gt.memoizedState:Pt.next;if(e!==null)Pt=e,Nt=t;else{if(t===null)throw Error(ie(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Pt===null?gt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ln(t,e){return typeof e=="function"?e(t):e}function Wo(t){var e=gr(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){r=r.next,i=i.baseState;var a=s=o=null,l=r;do{var u=l.lane;if((Rs&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),i=l.eagerReducer===t?l.eagerState:t(i,l.action);else{var d={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(s=a=d,o=i):a=a.next=d,gt.lanes|=u,Bs|=u}l=l.next}while(l!==null&&l!==r);a===null?o=i:a.next=s,un(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=a,n.lastRenderedState=i}return[e.memoizedState,n.dispatch]}function Xo(t){var e=gr(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);un(o,e.memoizedState)||(Mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Vp(t,e,n){var i=e._getVersion;i=i(e._source);var r=e._workInProgressVersionPrimary;if(r!==null?t=r===i:(t=t.mutableReadLanes,(t=(Rs&t)===t)&&(e._workInProgressVersionPrimary=i,ro.push(e))),t)return n(e._source);throw ro.push(e),Error(ie(350))}function g_(t,e,n,i){var r=Gt;if(r===null)throw Error(ie(349));var o=e._getVersion,s=o(e._source),a=cs.current,l=a.useState(function(){return Vp(r,e,n)}),u=l[1],d=l[0];l=Pt;var p=t.memoizedState,h=p.refs,m=h.getSnapshot,y=p.source;p=p.subscribe;var _=gt;return t.memoizedState={refs:h,source:e,subscribe:i},a.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var f=o(e._source);if(!un(s,f)){f=n(e._source),un(d,f)||(u(f),f=Ai(_),r.mutableReadLanes|=f&r.pendingLanes),f=r.mutableReadLanes,r.entangledLanes|=f;for(var c=r.entanglements,g=f;0<g;){var v=31-Ui(g),S=1<<v;c[v]|=f,g&=~S}}},[n,e,i]),a.useEffect(function(){return i(e._source,function(){var f=h.getSnapshot,c=h.setSnapshot;try{c(f(e._source));var g=Ai(_);r.mutableReadLanes|=g&r.pendingLanes}catch(v){c(function(){throw v})}})},[e,i]),un(m,n)&&un(y,e)&&un(p,i)||(t={pending:null,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:d},t.dispatch=u=Zf.bind(null,gt,t),l.queue=t,l.baseQueue=null,d=Vp(r,e,n),l.memoizedState=l.baseState=d),d}function __(t,e,n){var i=gr();return g_(i,t,e,n)}function jo(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:t},t=t.dispatch=Zf.bind(null,gt,t),[e.memoizedState,t]}function pl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gp(t){var e=sr();return t={current:t},e.memoizedState=t}function ml(){return gr().memoizedState}function Ic(t,e,n,i){var r=sr();gt.flags|=t,r.memoizedState=pl(1|e,n,void 0,i===void 0?null:i)}function $f(t,e,n,i){var r=gr();i=i===void 0?null:i;var o=void 0;if(Nt!==null){var s=Nt.memoizedState;if(o=s.destroy,i!==null&&Yf(i,s.deps)){pl(e,n,o,i);return}}gt.flags|=t,r.memoizedState=pl(1|e,n,o,i)}function Wp(t,e){return Ic(516,4,t,e)}function gl(t,e){return $f(516,4,t,e)}function v_(t,e){return $f(4,2,t,e)}function x_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,$f(4,2,x_.bind(null,e,t),n)}function Kf(){}function S_(t,e){var n=gr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M_(t,e){var n=gr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Aw(t,e){var n=xo();cr(98>n?98:n,function(){t(!0)}),cr(97<n?97:n,function(){var i=dn.transition;dn.transition=1;try{t(!1),e()}finally{dn.transition=i}})}function Zf(t,e,n){var i=on(),r=Ai(t),o={lane:r,action:n,eagerReducer:null,eagerState:null,next:null},s=e.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),e.pending=o,s=t.alternate,t===gt||s!==null&&s===gt)fs=hl=!0;else{if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(o.eagerReducer=s,o.eagerState=l,un(l,a))return}catch{}finally{}Ci(t,r,i)}}var _l={readContext:hn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useOpaqueIdentifier:Xt,unstable_isNewReconciler:!1},Cw={readContext:hn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,2,x_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=sr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t=i.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Zf.bind(null,gt,t),[i.memoizedState,t]},useRef:Gp,useState:jo,useDebugValue:Kf,useDeferredValue:function(t){var e=jo(t),n=e[0],i=e[1];return Wp(function(){var r=dn.transition;dn.transition=1;try{i(t)}finally{dn.transition=r}},[t]),n},useTransition:function(){var t=jo(!1),e=t[0];return t=Aw.bind(null,t[1]),Gp(t),[t,e]},useMutableSource:function(t,e,n){var i=sr();return i.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},g_(i,t,e,n)},useOpaqueIdentifier:function(){if(On){var t=!1,e=yw(function(){throw t||(t=!0,n("r:"+(Wu++).toString(36))),Error(ie(355))}),n=jo(e)[1];return(gt.mode&2)===0&&(gt.flags|=516,pl(5,function(){n("r:"+(Wu++).toString(36))},void 0,null)),e}return e="r:"+(Wu++).toString(36),jo(e),e},unstable_isNewReconciler:!1},Rw={readContext:hn,useCallback:S_,useContext:hn,useEffect:gl,useImperativeHandle:y_,useLayoutEffect:v_,useMemo:M_,useReducer:Wo,useRef:ml,useState:function(){return Wo(Ln)},useDebugValue:Kf,useDeferredValue:function(t){var e=Wo(Ln),n=e[0],i=e[1];return gl(function(){var r=dn.transition;dn.transition=1;try{i(t)}finally{dn.transition=r}},[t]),n},useTransition:function(){var t=Wo(Ln)[0];return[ml().current,t]},useMutableSource:__,useOpaqueIdentifier:function(){return Wo(Ln)[0]},unstable_isNewReconciler:!1},bw={readContext:hn,useCallback:S_,useContext:hn,useEffect:gl,useImperativeHandle:y_,useLayoutEffect:v_,useMemo:M_,useReducer:Xo,useRef:ml,useState:function(){return Xo(Ln)},useDebugValue:Kf,useDeferredValue:function(t){var e=Xo(Ln),n=e[0],i=e[1];return gl(function(){var r=dn.transition;dn.transition=1;try{i(t)}finally{dn.transition=r}},[t]),n},useTransition:function(){var t=Xo(Ln)[0];return[ml().current,t]},useMutableSource:__,useOpaqueIdentifier:function(){return Xo(Ln)[0]},unstable_isNewReconciler:!1},Pw=pr.ReactCurrentOwner,Mn=!1;function jt(t,e,n,i){e.child=t===null?p_(e,null,n,i):fl(e,t.child,n,i)}function Xp(t,e,n,i,r){n=n.render;var o=e.ref;return io(e,r),i=qf(t,e,n,i,o,r),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,Kn(t,e,r)):(e.flags|=1,jt(t,e,i,r),e.child)}function jp(t,e,n,i,r,o){if(t===null){var s=n.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E_(t,e,s,i,r,o)):(t=Ha(n.type,null,i,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}return s=t.child,(r&o)===0&&(r=s.memoizedProps,n=n.compare,n=n!==null?n:Ms,n(r,i)&&t.ref===e.ref)?Kn(t,e,o):(e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t)}function E_(t,e,n,i,r,o){if(t!==null&&Ms(t.memoizedProps,i)&&t.ref===e.ref)if(Mn=!1,(o&r)!==0)(t.flags&16384)!==0&&(Mn=!0);else return e.lanes=t.lanes,Kn(t,e,o);return Nc(t,e,n,i,o)}function qu(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden"||i.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Ca(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Ca(e,o!==null?o.baseLanes:n);else return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Ca(e,t),null;else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ca(e,i);return jt(t,e,r,n),e.child}function T_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Nc(t,e,n,i,r){var o=Qt(n)?ur:Bt.current;return o=vo(e,o),io(e,r),n=qf(t,e,n,i,o,r),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~r,Kn(t,e,r)):(e.flags|=1,jt(t,e,n,r),e.child)}function Yp(t,e,n,i,r){if(Qt(n)){var o=!0;Oa(e)}else o=!1;if(io(e,r),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),d_(e,n,i),Lc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Qt(n)?ur:Bt.current,u=vo(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&kp(e,s,i,u),fi=!1;var h=e.memoizedState;s.state=h,ws(e,i,s,r),l=e.memoizedState,a!==i||h!==l||Zt.current||fi?(typeof d=="function"&&(cl(e,n,d,i),l=e.memoizedState),(a=fi||Fp(e,n,a,i,h,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4)):(typeof s.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4),i=!1)}else{s=e.stateNode,c_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yn(e.type,a),s.props=u,p=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=Qt(n)?ur:Bt.current,l=vo(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==l)&&kp(e,s,i,l),fi=!1,h=e.memoizedState,s.state=h,ws(e,i,s,r);var y=e.memoizedState;a!==p||h!==y||Zt.current||fi?(typeof m=="function"&&(cl(e,n,m,i),y=e.memoizedState),(u=fi||Fp(e,n,u,i,h,y,l))?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),i=!1)}return Oc(t,e,n,i,o,r)}function Oc(t,e,n,i,r,o){T_(t,e);var s=(e.flags&64)!==0;if(!i&&!s)return r&&Dp(e,n,!1),Kn(t,e,o);i=e.stateNode,Pw.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=fl(e,t.child,null,o),e.child=fl(e,null,a,o)):jt(t,e,a,o),e.memoizedState=i.state,r&&Dp(e,n,!0),e.child}function qp(t){var e=t.stateNode;e.pendingContext?Lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(t,e.context,!1),Dc(t,e.containerInfo)}var Aa={dehydrated:null,retryLane:0};function $p(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s;return(s=(e.flags&64)!==0)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(o=!0,e.flags&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(r|=1),mt(pt,r&1),t===null?(i.fallback!==void 0&&Uc(e),t=i.children,r=i.fallback,o?(t=Kp(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Aa,t):typeof i.unstable_expectedLoadTime=="number"?(t=Kp(e,t,r,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Aa,e.lanes=33554432,t):(n=rd({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?o?(i=Qp(t,e,i.children,i.fallback,n),o=e.child,r=t.child.memoizedState,o.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},o.childLanes=t.childLanes&~n,e.memoizedState=Aa,i):(n=Zp(t,e,i.children,n),e.memoizedState=null,n):o?(i=Qp(t,e,i.children,i.fallback,n),o=e.child,r=t.child.memoizedState,o.memoizedState=r===null?{baseLanes:n}:{baseLanes:r.baseLanes|n},o.childLanes=t.childLanes&~n,e.memoizedState=Aa,i):(n=Zp(t,e,i.children,n),e.memoizedState=null,n)}function Kp(t,e,n,i){var r=t.mode,o=t.child;return e={mode:"hidden",children:e},(r&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=e):o=rd(e,r,0,null),n=ao(n,r,i,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n}function Zp(t,e,n,i){var r=t.child;return t=r.sibling,n=Oi(r,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Qp(t,e,n,i,r){var o=e.mode,s=t.child;t=s.sibling;var a={mode:"hidden",children:n};return(o&2)===0&&e.child!==s?(n=e.child,n.childLanes=0,n.pendingProps=a,s=n.lastEffect,s!==null?(e.firstEffect=n.firstEffect,e.lastEffect=s,s.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Oi(s,a),t!==null?i=Oi(t,i):(i=ao(i,o,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,i}function Jp(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),u_(t.return,e)}function $u(t,e,n,i,r,o){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,lastEffect:o}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r,s.lastEffect=o)}function em(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(jt(t,e,i.children,n),i=pt.current,(i&2)!==0)i=i&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jp(t,n);else if(t.tag===19)Jp(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(pt,i),(e.mode&2)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$u(e,!1,r,n,o,e.lastEffect);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$u(e,!0,n,null,o,e.lastEffect);break;case"together":$u(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bs|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var w_,Fc,A_,C_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fc=function(){};A_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,or(Nn.current);var o=null;switch(n){case"input":r=cc(t,r),i=cc(t,i),o=[];break;case"option":r=hc(t,r),i=hc(t,i),o=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),o=[];break;case"textarea":r=pc(t,r),i=pc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rl)}_c(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ms.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ms.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),o||a===l||(o=[])):typeof l=="object"&&l!==null&&l.$$typeof===Tf?l.toString():(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};C_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Yo(t,e){if(!On)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Lw(t,e,n){var i=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Qt(e.type)&&sl(),null;case 3:return yo(),ot(Zt),ot(Bt),jf(),i=e.stateNode,i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wa(e)?e.flags|=4:i.hydrate||(e.flags|=256)),Fc(e),null;case 5:Xf(e);var r=or(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)A_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=128);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return null}if(t=or(Nn.current),wa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[gi]=e,i[ol]=o,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(t=0;t<Qo.length;t++)it(Qo[t],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":ep(i,o),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},it("invalid",i);break;case"textarea":np(i,o),it("invalid",i)}_c(n,o),t=null;for(var s in o)o.hasOwnProperty(s)&&(r=o[s],s==="children"?typeof r=="string"?i.textContent!==r&&(t=["children",r]):typeof r=="number"&&i.textContent!==""+r&&(t=["children",""+r]):ms.hasOwnProperty(s)&&r!=null&&s==="onScroll"&&it("scroll",i));switch(n){case"input":xa(i),tp(i,o,!0);break;case"textarea":xa(i),ip(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=rl)}i=t,e.updateQueue=i,i!==null&&(e.flags|=4)}else{switch(s=r.nodeType===9?r:r.ownerDocument,t===mc.html&&(t=yg(n)),t===mc.html?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[gi]=e,t[ol]=i,w_(t,e,!1,!1),e.stateNode=t,s=vc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)it(Qo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":ep(t,i),r=cc(t,i),it("invalid",t);break;case"option":r=hc(t,i);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),it("invalid",t);break;case"textarea":np(t,i),r=pc(t,i),it("invalid",t);break;default:r=i}_c(n,r);var a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Eg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gs(t,l):typeof l=="number"&&gs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ms.hasOwnProperty(o)?l!=null&&o==="onScroll"&&it("scroll",t):l!=null&&vf(t,o,l,s))}switch(n){case"input":xa(t),tp(t,i,!1);break;case"textarea":xa(t),ip(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Di(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Jr(t,!!i.multiple,o,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rl)}e_(n,i)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)C_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));n=or(Cs.current),or(Nn.current),wa(e)?(i=e.stateNode,n=e.memoizedProps,i[gi]=e,i.nodeValue!==n&&(e.flags|=4)):(i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i)}return null;case 13:return ot(pt),i=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(i=i!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&wa(e):n=t.memoizedState!==null,i&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(pt.current&1)!==0?Lt===0&&(Lt=3):((Lt===0||Lt===3)&&(Lt=4),Gt===null||(Bs&134217727)===0&&(Ro&134217727)===0||oo(Gt,kt))),(i||n)&&(e.flags|=4),null);case 4:return yo(),Fc(e),t===null&&Zg(e.stateNode.containerInfo),null;case 10:return Gf(e),null;case 17:return Qt(e.type)&&sl(),null;case 19:if(ot(pt),i=e.memoizedState,i===null)return null;if(o=(e.flags&64)!==0,s=i.rendering,s===null)if(o)Yo(i,!1);else{if(Lt!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(s=dl(t),s!==null){for(e.flags|=64,Yo(i,!1),o=s.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),i.lastEffect===null&&(e.firstEffect=null),e.lastEffect=i.lastEffect,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(pt,pt.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ft()>Gc&&(e.flags|=64,o=!0,Yo(i,!1),e.lanes=33554432)}else{if(!o)if(t=dl(s),t!==null){if(e.flags|=64,o=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!On)return e=e.lastEffect=i.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ft()-i.renderingStartTime>Gc&&n!==1073741824&&(e.flags|=64,o=!0,Yo(i,!1),e.lanes=33554432);i.isBackwards?(s.sibling=e.child,e.child=s):(n=i.last,n!==null?n.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.lastEffect=e.lastEffect,i.renderingStartTime=Ft(),n.sibling=null,e=pt.current,mt(pt,o?e&1|2:e&1),n):null;case 23:case 24:return nd(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&i.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(ie(156,e.tag))}function Dw(t){switch(t.tag){case 1:Qt(t.type)&&sl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(yo(),ot(Zt),ot(Bt),jf(),e=t.flags,(e&64)!==0)throw Error(ie(285));return t.flags=e&-4097|64,t;case 5:return Xf(t),null;case 13:return ot(pt),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ot(pt),null;case 4:return yo(),null;case 10:return Gf(t),null;case 23:case 24:return nd(),null;default:return null}}function Qf(t,e){try{var n="",i=e;do n+=dT(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r}}function kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xl||(xl=!0,Wc=i),kc(t,e)},n}function b_(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return kc(t,e),i(r)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof i!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this),kc(t,e));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}var Iw=typeof WeakSet=="function"?WeakSet:Set;function tm(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Ri(t,n)}else e.current=null}function Nw(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,i=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:yn(e.type,n),i),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Bf(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(ie(163))}function Ow(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var r=t;i=r.next,r=r.tag,(r&4)!==0&&(r&1)!==0&&(k_(n,t),Ww(n,t)),t=i}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(i=n.elementType===n.type?e.memoizedProps:yn(n.type,e.memoizedProps),t.componentDidUpdate(i,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Op(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Op(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&e_(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Ug(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(ie(163))}function nm(t,e){for(var n=t;;){if(n.tag===5){var i=n.stateNode;if(e)i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{i=n.stateNode;var r=n.memoizedProps.style;r=r!=null&&r.hasOwnProperty("display")?r.display:null,i.style.display=Mg("display",r)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function im(t,e){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(zf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var i=n,r=i.destroy;if(i=i.tag,r!==void 0)if((i&4)!==0)k_(e,n);else{i=e;try{r()}catch(o){Ri(i,o)}}n=n.next}while(n!==t)}break;case 1:if(tm(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){Ri(e,o)}break;case 5:tm(e);break;case 4:P_(t,e)}}function rm(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function om(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:{for(var e=t.return;e!==null;){if(om(e))break e;e=e.return}throw Error(ie(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var i=!1;break;case 3:e=e.containerInfo,i=!0;break;case 4:e=e.containerInfo,i=!0;break;default:throw Error(ie(161))}n.flags&16&&(gs(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||om(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}i?Bc(t,n,e):zc(t,n,e)}function Bc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(i!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function zc(t,e,n){var i=t.tag,r=i===5||i===6;if(r)t=r?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}function P_(t,e){for(var n=e,i=!1,r,o;;){if(!i){i=n.return;e:for(;;){if(i===null)throw Error(ie(160));switch(r=i.stateNode,i.tag){case 5:o=!1;break e;case 3:r=r.containerInfo,o=!0;break e;case 4:r=r.containerInfo,o=!0;break e}i=i.return}i=!0}if(n.tag===5||n.tag===6){e:for(var s=t,a=n,l=a;;)if(im(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=r,a=n.stateNode,s.nodeType===8?s.parentNode.removeChild(a):s.removeChild(a)):r.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){r=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(im(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(i=!1)}n.sibling.return=n.return,n=n.sibling}}function Ku(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do(i.tag&3)===3&&(t=i.destroy,i.destroy=void 0,t!==void 0&&t()),i=i.next;while(i!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){i=e.memoizedProps;var r=t!==null?t.memoizedProps:i;t=e.type;var o=e.updateQueue;if(e.updateQueue=null,o!==null){for(n[ol]=i,t==="input"&&i.type==="radio"&&i.name!=null&&vg(n,i),vc(t,r),e=vc(t,i),r=0;r<o.length;r+=2){var s=o[r],a=o[r+1];s==="style"?Eg(n,a):s==="dangerouslySetInnerHTML"?Sg(n,a):s==="children"?gs(n,a):vf(n,s,a,e)}switch(t){case"input":fc(n,i);break;case"textarea":xg(n,i);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!i.multiple,o=i.value,o!=null?Jr(n,!!i.multiple,o,!1):t!==!!i.multiple&&(i.defaultValue!=null?Jr(n,!!i.multiple,i.defaultValue,!0):Jr(n,!!i.multiple,i.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(ie(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Ug(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(td=Ft(),nm(e.child,!0)),am(e);return;case 19:am(e);return;case 17:return;case 23:case 24:nm(e,e.memoizedState!==null);return}throw Error(ie(163))}function am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Iw),e.forEach(function(i){var r=Yw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fw(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var kw=Math.ceil,vl=pr.ReactCurrentDispatcher,Jf=pr.ReactCurrentOwner,De=0,Gt=null,Mt=null,kt=0,fr=0,Hc=ki(0),Lt=0,zl=null,Co=0,Bs=0,Ro=0,ed=0,Vc=null,td=0,Gc=1/0;function bo(){Gc=Ft()+500}var _e=null,xl=!1,Wc=null,Dn=null,Ni=!1,ds=null,Jo=90,Xc=[],jc=[],Qn=null,hs=0,Yc=null,ka=-1,Yn=0,Ba=0,ps=null,za=!1;function on(){return(De&48)!==0?Ft():ka!==-1?ka:ka=Ft()}function Ai(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return xo()===99?1:2;if(Yn===0&&(Yn=Co),ww.transition!==0){Ba!==0&&(Ba=Vc!==null?Vc.pendingLanes:0),t=Yn;var e=4186112&~Ba;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=xo(),(De&4)!==0&&t===98?t=nl(12,Yn):(t=RT(t),t=nl(t,Yn)),t}function Ci(t,e,n){if(50<hs)throw hs=0,Yc=null,Error(ie(185));if(t=Hl(t,e),t===null)return null;Ul(t,e,n),t===Gt&&(Ro|=e,Lt===4&&oo(t,kt));var i=xo();e===1?(De&8)!==0&&(De&48)===0?qc(t):(pn(t,n),De===0&&(bo(),Fn())):((De&4)===0||i!==98&&i!==99||(Qn===null?Qn=new Set([t]):Qn.add(t)),pn(t,n)),Vc=t}function Hl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function pn(t,e){for(var n=t.callbackNode,i=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ui(s),l=1<<a,u=o[a];if(u===-1){if((l&i)===0||(l&r)!==0){u=e,zr(l);var d=nt;o[a]=10<=d?u+250:6<=d?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);s&=~l}if(i=ys(t,t===Gt?kt:0),e=nt,i===0)n!==null&&(n!==Xu&&bc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Xu&&bc(n)}e===15?(n=qc.bind(null,t),Xn===null?(Xn=[n],Fa=Hf(kl,l_)):Xn.push(n),n=Xu):e===14?n=Ts(99,qc.bind(null,t)):(n=bT(e),n=Ts(n,L_.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function L_(t){if(ka=-1,Ba=Yn=0,(De&48)!==0)throw Error(ie(327));var e=t.callbackNode;if(Bi()&&t.callbackNode!==e)return null;var n=ys(t,t===Gt?kt:0);if(n===0)return null;var i=n,r=De;De|=16;var o=N_();(Gt!==t||kt!==i)&&(bo(),so(t,i));do try{Hw();break}catch(a){I_(t,a)}while(1);if(Vf(),vl.current=o,De=r,Mt!==null?i=0:(Gt=null,kt=0,i=Lt),(Co&Ro)!==0)so(t,0);else if(i!==0){if(i===2&&(De|=64,t.hydrate&&(t.hydrate=!1,Bf(t.containerInfo)),n=zg(t),n!==0&&(i=es(t,n))),i===1)throw e=zl,so(t,0),oo(t,n),pn(t,Ft()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,i){case 0:case 1:throw Error(ie(345));case 2:Ki(t);break;case 3:if(oo(t,n),(n&62914560)===n&&(i=td+500-Ft(),10<i)){if(ys(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Rp(Ki.bind(null,t),i);break}Ki(t);break;case 4:if(oo(t,n),(n&4186112)===n)break;for(i=t.eventTimes,r=-1;0<n;){var s=31-Ui(n);o=1<<s,s=i[s],s>r&&(r=s),n&=~o}if(n=r,n=Ft()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*kw(n/1960))-n,10<n){t.timeoutHandle=Rp(Ki.bind(null,t),n);break}Ki(t);break;case 5:Ki(t);break;default:throw Error(ie(329))}}return pn(t,Ft()),t.callbackNode===e?L_.bind(null,t):null}function oo(t,e){for(e&=~ed,e&=~Ro,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ui(e),i=1<<n;t[n]=-1,e&=~i}}function qc(t){if((De&48)!==0)throw Error(ie(327));if(Bi(),t===Gt&&(t.expiredLanes&kt)!==0){var e=kt,n=es(t,e);(Co&Ro)!==0&&(e=ys(t,e),n=es(t,e))}else e=ys(t,0),n=es(t,e);if(t.tag!==0&&n===2&&(De|=64,t.hydrate&&(t.hydrate=!1,Bf(t.containerInfo)),e=zg(t),e!==0&&(n=es(t,e))),n===1)throw n=zl,so(t,0),oo(t,e),pn(t,Ft()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t),pn(t,Ft()),null}function Bw(){if(Qn!==null){var t=Qn;Qn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,pn(e,Ft())})}Fn()}function D_(t,e){var n=De;De|=1;try{return t(e)}finally{De=n,De===0&&(bo(),Fn())}}function U_(t,e){var n=De;De&=-2,De|=8;try{return t(e)}finally{De=n,De===0&&(bo(),Fn())}}function Ca(t,e){mt(Hc,fr),fr|=e,Co|=e}function nd(){fr=Hc.current,ot(Hc)}function so(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xw(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(i.tag){case 1:i=i.type.childContextTypes,i!=null&&sl();break;case 3:yo(),ot(Zt),ot(Bt),jf();break;case 5:Xf(i);break;case 4:yo();break;case 13:ot(pt);break;case 19:ot(pt);break;case 10:Gf(i);break;case 23:case 24:nd()}n=n.return}Gt=t,Mt=Oi(t.current,null),kt=fr=Co=e,Lt=0,zl=null,ed=Ro=Bs=0}function I_(t,e){do{var n=Mt;try{if(Vf(),cs.current=_l,hl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hl=!1}if(Rs=0,Pt=Nt=gt=null,fs=!1,Jf.current=null,n===null||n.return===null){Lt=1,zl=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var d=a.alternate;d?(a.updateQueue=d.updateQueue,a.memoizedState=d.memoizedState,a.lanes=d.lanes):(a.updateQueue=null,a.memoizedState=null)}var p=(pt.current&1)!==0,h=s;do{var m;if(m=h.tag===13){var y=h.memoizedState;if(y!==null)m=y.dehydrated!==null;else{var _=h.memoizedProps;m=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!p}}if(m){var f=h.updateQueue;if(f===null){var c=new Set;c.add(u),h.updateQueue=c}else f.add(u);if((h.mode&2)===0){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=Ti(-1,1);g.tag=2,wi(a,g)}a.lanes|=1;break e}l=void 0,a=e;var v=o.pingCache;if(v===null?(v=o.pingCache=new Uw,l=new Set,v.set(u,l)):(l=v.get(u),l===void 0&&(l=new Set,v.set(u,l))),!l.has(a)){l.add(a);var S=jw.bind(null,o,u,a);u.then(S,S)}h.flags|=4096,h.lanes=e;break e}h=h.return}while(h!==null);l=Error((Qr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Lt!==5&&(Lt=2),l=Qf(l,a),h=s;do{switch(h.tag){case 3:o=l,h.flags|=4096,e&=-e,h.lanes|=e;var b=R_(h,o,e);Np(h,b);break e;case 1:o=l;var A=h.type,C=h.stateNode;if((h.flags&64)===0&&(typeof A.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Dn===null||!Dn.has(C)))){h.flags|=4096,e&=-e,h.lanes|=e;var D=b_(h,o,e);Np(h,D);break e}}h=h.return}while(h!==null)}F_(n)}catch(E){e=E,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function N_(){var t=vl.current;return vl.current=_l,t===null?_l:t}function es(t,e){var n=De;De|=16;var i=N_();Gt===t&&kt===e||so(t,e);do try{zw();break}catch(r){I_(t,r)}while(1);if(Vf(),De=n,vl.current=i,Mt!==null)throw Error(ie(261));return Gt=null,kt=0,Lt}function zw(){for(;Mt!==null;)O_(Mt)}function Hw(){for(;Mt!==null&&!Mw();)O_(Mt)}function O_(t){var e=B_(t.alternate,t,fr);t.memoizedProps=t.pendingProps,e===null?F_(t):Mt=e,Jf.current=null}function F_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=Lw(n,e,fr),n!==null){Mt=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(fr&1073741824)!==0||(n.mode&4)===0){for(var i=0,r=n.child;r!==null;)i|=r.lanes|r.childLanes,r=r.sibling;n.childLanes=i}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=Dw(e),n!==null){n.flags&=2047,Mt=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Ki(t){var e=xo();return cr(99,Vw.bind(null,t,e)),null}function Vw(t,e){do Bi();while(ds!==null);if((De&48)!==0)throw Error(ie(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null;var i=n.lanes|n.childLanes,r=i,o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;for(var s=t.eventTimes,a=t.expirationTimes;0<o;){var l=31-Ui(o),u=1<<l;r[l]=0,s[l]=-1,a[l]=-1,o&=~u}if(Qn!==null&&(i&24)===0&&Qn.has(t)&&Qn.delete(t),t===Gt&&(Mt=Gt=null,kt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){if(r=De,De|=32,Jf.current=null,Vu=Ua,s=Sp(),Tc(s)){if("selectionStart"in s)a={start:s.selectionStart,end:s.selectionEnd};else e:if(a=(a=s.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var d=0,p=-1,h=-1,m=0,y=0,_=s,f=null;t:for(;;){for(var c;_!==a||o!==0&&_.nodeType!==3||(p=d+o),_!==l||u!==0&&_.nodeType!==3||(h=d+u),_.nodeType===3&&(d+=_.nodeValue.length),(c=_.firstChild)!==null;)f=_,_=c;for(;;){if(_===s)break t;if(f===a&&++m===o&&(p=d),f===l&&++y===u&&(h=d),(c=_.nextSibling)!==null)break;_=f,f=_.parentNode}_=c}a=p===-1||h===-1?null:{start:p,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;Gu={focusedElem:s,selectionRange:a},Ua=!1,ps=null,za=!1,_e=i;do try{Gw()}catch(E){if(_e===null)throw Error(ie(330));Ri(_e,E),_e=_e.nextEffect}while(_e!==null);ps=null,_e=i;do try{for(s=t;_e!==null;){var g=_e.flags;if(g&16&&gs(_e.stateNode,""),g&128){var v=_e.alternate;if(v!==null){var S=v.ref;S!==null&&(typeof S=="function"?S(null):S.current=null)}}switch(g&1038){case 2:sm(_e),_e.flags&=-3;break;case 6:sm(_e),_e.flags&=-3,Ku(_e.alternate,_e);break;case 1024:_e.flags&=-1025;break;case 1028:_e.flags&=-1025,Ku(_e.alternate,_e);break;case 4:Ku(_e.alternate,_e);break;case 8:a=_e,P_(s,a);var b=a.alternate;rm(a),b!==null&&rm(b)}_e=_e.nextEffect}}catch(E){if(_e===null)throw Error(ie(330));Ri(_e,E),_e=_e.nextEffect}while(_e!==null);if(S=Gu,v=Sp(),g=S.focusedElem,s=S.selectionRange,v!==g&&g&&g.ownerDocument&&qg(g.ownerDocument.documentElement,g)){for(s!==null&&Tc(g)&&(v=s.start,S=s.end,S===void 0&&(S=v),"selectionStart"in g?(g.selectionStart=v,g.selectionEnd=Math.min(S,g.value.length)):(S=(v=g.ownerDocument||document)&&v.defaultView||window,S.getSelection&&(S=S.getSelection(),a=g.textContent.length,b=Math.min(s.start,a),s=s.end===void 0?b:Math.min(s.end,a),!S.extend&&b>s&&(a=s,s=b,b=a),a=yp(g,b),o=yp(g,s),a&&o&&(S.rangeCount!==1||S.anchorNode!==a.node||S.anchorOffset!==a.offset||S.focusNode!==o.node||S.focusOffset!==o.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),S.removeAllRanges(),b>s?(S.addRange(v),S.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),S.addRange(v)))))),v=[],S=g;S=S.parentNode;)S.nodeType===1&&v.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<v.length;g++)S=v[g],S.element.scrollLeft=S.left,S.element.scrollTop=S.top}Ua=!!Vu,Gu=Vu=null,t.current=n,_e=i;do try{for(g=t;_e!==null;){var A=_e.flags;if(A&36&&Ow(g,_e.alternate,_e),A&128){v=void 0;var C=_e.ref;if(C!==null){var D=_e.stateNode;switch(_e.tag){case 5:v=D;break;default:v=D}typeof C=="function"?C(v):C.current=v}}_e=_e.nextEffect}}catch(E){if(_e===null)throw Error(ie(330));Ri(_e,E),_e=_e.nextEffect}while(_e!==null);_e=null,Tw(),De=r}else t.current=n;if(Ni)Ni=!1,ds=t,Jo=e;else for(_e=i;_e!==null;)e=_e.nextEffect,_e.nextEffect=null,_e.flags&8&&(A=_e,A.sibling=null,A.stateNode=null),_e=e;if(i=t.pendingLanes,i===0&&(Dn=null),i===1?t===Yc?hs++:(hs=0,Yc=t):hs=0,n=n.stateNode,ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(zf,n,void 0,(n.current.flags&64)===64)}catch{}if(pn(t,Ft()),xl)throw xl=!1,t=Wc,Wc=null,t;return(De&8)!==0||Fn(),null}function Gw(){for(;_e!==null;){var t=_e.alternate;za||ps===null||((_e.flags&8)!==0?sp(_e,ps)&&(za=!0):_e.tag===13&&Fw(t,_e)&&sp(_e,ps)&&(za=!0));var e=_e.flags;(e&256)!==0&&Nw(t,_e),(e&512)===0||Ni||(Ni=!0,Ts(97,function(){return Bi(),null})),_e=_e.nextEffect}}function Bi(){if(Jo!==90){var t=97<Jo?97:Jo;return Jo=90,cr(t,Xw)}return!1}function Ww(t,e){Xc.push(e,t),Ni||(Ni=!0,Ts(97,function(){return Bi(),null}))}function k_(t,e){jc.push(e,t),Ni||(Ni=!0,Ts(97,function(){return Bi(),null}))}function Xw(){if(ds===null)return!1;var t=ds;if(ds=null,(De&48)!==0)throw Error(ie(331));var e=De;De|=32;var n=jc;jc=[];for(var i=0;i<n.length;i+=2){var r=n[i],o=n[i+1],s=r.destroy;if(r.destroy=void 0,typeof s=="function")try{s()}catch(l){if(o===null)throw Error(ie(330));Ri(o,l)}}for(n=Xc,Xc=[],i=0;i<n.length;i+=2){r=n[i],o=n[i+1];try{var a=r.create;r.destroy=a()}catch(l){if(o===null)throw Error(ie(330));Ri(o,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return De=e,Fn(),!0}function lm(t,e,n){e=Qf(n,e),e=R_(t,e,1),wi(t,e),e=on(),t=Hl(t,1),t!==null&&(Ul(t,1,e),pn(t,e))}function Ri(t,e){if(t.tag===3)lm(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){lm(n,t,e);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i))){t=Qf(e,t);var r=b_(n,t,1);if(wi(n,r),r=on(),n=Hl(n,1),n!==null)Ul(n,1,r),pn(n,r);else if(typeof i.componentDidCatch=="function"&&(Dn===null||!Dn.has(i)))try{i.componentDidCatch(e,t)}catch{}break}}n=n.return}}function jw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(kt&n)===n&&(Lt===4||Lt===3&&(kt&62914560)===kt&&500>Ft()-td?so(t,0):ed|=n),pn(t,e)}function Yw(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=xo()===99?1:2:(Yn===0&&(Yn=Co),e=Hr(62914560&~Yn),e===0&&(e=4194304))),n=on(),t=Hl(t,e),t!==null&&(Ul(t,e,n),pn(t,n))}var B_;B_=function(t,e,n){var i=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Mn=!0;else if((n&i)!==0)Mn=(t.flags&16384)!==0;else{switch(Mn=!1,e.tag){case 3:qp(e),Yu();break;case 5:Bp(e);break;case 1:Qt(e.type)&&Oa(e);break;case 4:Dc(e,e.stateNode.containerInfo);break;case 10:i=e.memoizedProps.value;var r=e.type._context;mt(al,r._currentValue),r._currentValue=i;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?$p(t,e,n):(mt(pt,pt.current&1),e=Kn(t,e,n),e!==null?e.sibling:null);mt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&64)!==0){if(i)return em(t,e,n);e.flags|=64}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(pt,pt.current),i)break;return null;case 23:case 24:return e.lanes=0,qu(t,e,n)}return Kn(t,e,n)}else Mn=!1;switch(e.lanes=0,e.tag){case 2:if(i=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,r=vo(e,Bt.current),io(e,n),r=qf(null,e,i,t,r,n),e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)){var o=!0;Oa(e)}else o=!1;e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wf(e);var s=i.getDerivedStateFromProps;typeof s=="function"&&cl(e,i,s,t),r.updater=Bl,e.stateNode=r,r._reactInternals=e,Lc(e,i,t,n),e=Oc(null,e,i,!0,o,n)}else e.tag=0,jt(null,e,r,n),e=e.child;return e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=$w(r),t=yn(r,t),o){case 0:e=Nc(null,e,r,t,n);break e;case 1:e=Yp(null,e,r,t,n);break e;case 11:e=Xp(null,e,r,t,n);break e;case 14:e=jp(null,e,r,yn(r.type,t),i,n);break e}throw Error(ie(306,r,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yn(i,r),Nc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yn(i,r),Yp(t,e,i,r,n);case 3:if(qp(e),i=e.updateQueue,t===null||i===null)throw Error(ie(282));if(i=e.pendingProps,r=e.memoizedState,r=r!==null?r.element:null,c_(t,e),ws(e,i,null,n),i=e.memoizedState.element,i===r)Yu(),e=Kn(t,e,n);else{if(r=e.stateNode,(o=r.hydrate)&&(_i=no(e.stateNode.containerInfo.firstChild),$n=e,o=On=!0),o){if(t=r.mutableSourceEagerHydrationData,t!=null)for(r=0;r<t.length;r+=2)o=t[r],o._workInProgressVersionPrimary=t[r+1],ro.push(o);for(n=p_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else jt(t,e,i,n),Yu();e=e.child}return e;case 5:return Bp(e),t===null&&Uc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Cc(i,r)?s=null:o!==null&&Cc(i,o)&&(e.flags|=16),T_(t,e),jt(t,e,s,n),e.child;case 6:return t===null&&Uc(e),null;case 13:return $p(t,e,n);case 4:return Dc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fl(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yn(i,r),Xp(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value;var a=e.type._context;if(mt(al,a._currentValue),a._currentValue=o,s!==null)if(a=s.value,o=un(a,o)?0:(typeof i._calculateChangedBits=="function"?i._calculateChangedBits(a,o):1073741823)|0,o===0){if(s.children===r.children&&!Zt.current){e=Kn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var u=l.firstContext;u!==null;){if(u.context===i&&(u.observedBits&o)!==0){a.tag===1&&(u=Ti(-1,n&-n),u.tag=2,wi(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),u_(a.return,n),l.lanes|=n;break}u=u.next}}else s=a.tag===10&&a.type===e.type?null:a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,o=e.pendingProps,i=o.children,io(e,n),r=hn(r,o.unstable_observedBits),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return r=e.type,o=yn(r,e.pendingProps),o=yn(r.type,o),jp(t,e,r,o,i,n);case 15:return E_(t,e,e.type,e.pendingProps,i,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yn(i,r),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Qt(i)?(t=!0,Oa(e)):t=!1,io(e,n),d_(e,i,r),Lc(e,i,r,n),Oc(null,e,i,!0,t,n);case 19:return em(t,e,n);case 23:return qu(t,e,n);case 24:return qu(t,e,n)}throw Error(ie(156,e.tag))};function qw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,i){return new qw(t,e,n,i)}function id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $w(t){if(typeof t=="function")return id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pl)return 11;if(t===Ll)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")id(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case hi:return ao(n.children,r,o,e);case mg:s=8,r|=16;break;case xf:s=8,r|=1;break;case is:return t=cn(12,n,e,r|8),t.elementType=is,t.type=is,t.lanes=o,t;case rs:return t=cn(13,n,e,r),t.type=rs,t.elementType=rs,t.lanes=o,t;case Qa:return t=cn(19,n,e,r),t.elementType=Qa,t.lanes=o,t;case wf:return rd(n,r,o,e);case uc:return t=cn(24,n,e,r),t.elementType=uc,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yf:s=10;break e;case Sf:s=9;break e;case Pl:s=11;break e;case Ll:s=14;break e;case Mf:s=16,i=null;break e;case Ef:s=22;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=cn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function ao(t,e,n,i){return t=cn(7,t,i,e),t.lanes=n,t}function rd(t,e,n,i){return t=cn(23,t,i,e),t.elementType=wf,t.lanes=n,t}function Zu(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kw(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.mutableSourceEagerHydrationData=null}function Zw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yl(t,e,n,i){var r=e.current,o=on(),s=Ai(r);e:if(n){n=n._reactInternals;t:{if(mr(n)!==n||n.tag!==1)throw Error(ie(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Qt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(ie(171))}if(n.tag===1){var l=n.type;if(Qt(l)){n=n_(n,l,a);break e}}n=a}else n=Ii;return e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),wi(r,e),Ci(r,s,o),s}function Ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function od(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function Qw(){return null}function sd(t,e,n){var i=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new Kw(t,e,n!=null&&n.hydrate===!0),e=cn(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Wf(e),t[Ao]=n.current,Zg(t.nodeType===8?t.parentNode:t),i)for(t=0;t<i.length;t++){e=i[t];var r=e._getVersion;r=r(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,r]:n.mutableSourceEagerHydrationData.push(e,r)}this._internalRoot=n}sd.prototype.render=function(t){yl(t,this._internalRoot,null,null)};sd.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;yl(null,t,null,function(){e[Ao]=null})};function zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jw(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new sd(t,0,e?{hydrate:!0}:void 0)}function Vl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof r=="function"){var a=r;r=function(){var u=Ju(s);a.call(u)}}yl(e,s,t,r)}else{if(o=n._reactRootContainer=Jw(n,i),s=o._internalRoot,typeof r=="function"){var l=r;r=function(){var u=Ju(s);l.call(u)}}U_(function(){yl(e,s,t,r)})}return Ju(s)}Pg=function(t){if(t.tag===13){var e=on();Ci(t,4,e),od(t,4)}};Pf=function(t){if(t.tag===13){var e=on();Ci(t,67108864,e),od(t,67108864)}};Lg=function(t){if(t.tag===13){var e=on(),n=Ai(t);Ci(t,n,e),od(t,n)}};Dg=function(t,e){return e()};xc=function(t,e,n){switch(e){case"input":if(fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fl(i);if(!r)throw Error(ie(90));_g(i),fc(i,r)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};Cf=D_;Ag=function(t,e,n,i,r){var o=De;De|=4;try{return cr(98,t.bind(null,e,n,i,r))}finally{De=o,De===0&&(bo(),Fn())}};Rf=function(){(De&49)===0&&(Bw(),Bi())};Cg=function(t,e){var n=De;De|=2;try{return t(e)}finally{De=n,De===0&&(bo(),Fn())}};function z_(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(e))throw Error(ie(200));return Zw(t,e,null,n)}var e1={Events:[Fs,jr,Fl,Tg,wg,Bi,{current:!1}]},qo={findFiberByHostInstance:rr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},t1={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bg(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||Qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{zf=Ra.inject(t1),ar=Ra}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;mn.createPortal=z_;mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):Error(ie(268,Object.keys(t)));return t=bg(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t,e){var n=De;if((n&48)!==0)return t(e);De|=1;try{if(t)return cr(99,t.bind(null,e))}finally{De=n,Fn()}};mn.hydrate=function(t,e,n){if(!zs(e))throw Error(ie(200));return Vl(null,t,e,!0,n)};mn.render=function(t,e,n){if(!zs(e))throw Error(ie(200));return Vl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!zs(t))throw Error(ie(40));return t._reactRootContainer?(U_(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ao]=null})}),!0):!1};mn.unstable_batchedUpdates=D_;mn.unstable_createPortal=function(t,e){return z_(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zs(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Vl(t,e,n,!1,i)};mn.version="17.0.2";function H_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H_)}catch(t){console.error(t)}}H_(),mf.exports=mn;var ad=mf.exports,n1=ym({__proto__:null,default:ad},[mf.exports]);/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bs.apply(this,arguments)}var vi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vi||(vi={}));const cm="popstate";function i1(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return $c("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Sl(r)}return o1(e,n,null,t)}function St(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}function V_(t,e){if(!t){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch{}}}function r1(){return Math.random().toString(36).substr(2,8)}function fm(t,e){return{usr:t.state,key:t.key,idx:e}}function $c(t,e,n,i){return n===void 0&&(n=null),bs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Po(e):e,{state:n,key:e&&e.key||i||r1()})}function Sl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function o1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=vi.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(bs({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=vi.Pop;let f=d(),c=f==null?null:f-u;u=f,l&&l({action:a,location:_.location,delta:c})}function h(f,c){a=vi.Push;let g=$c(_.location,f,c);n&&n(g,f),u=d()+1;let v=fm(g,u),S=_.createHref(g);try{s.pushState(v,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}o&&l&&l({action:a,location:_.location,delta:1})}function m(f,c){a=vi.Replace;let g=$c(_.location,f,c);n&&n(g,f),u=d();let v=fm(g,u),S=_.createHref(g);s.replaceState(v,"",S),o&&l&&l({action:a,location:_.location,delta:0})}function y(f){let c=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof f=="string"?f:Sl(f);return g=g.replace(/ $/,"%20"),St(c,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,c)}let _={get action(){return a},get location(){return t(r,s)},listen(f){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(cm,p),l=f,()=>{r.removeEventListener(cm,p),l=null}},createHref(f){return e(r,f)},createURL:y,encodeLocation(f){let c=y(f);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(f){return s.go(f)}};return _}var dm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dm||(dm={}));function s1(t,e,n){return n===void 0&&(n="/"),a1(t,e,n,!1)}function a1(t,e,n,i){let r=typeof e=="string"?Po(e):e,o=ld(r.pathname||"/",n);if(o==null)return null;let s=G_(t);l1(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=x1(o);a=_1(s[l],u,i)}return a}function G_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(St(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=bi([i,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(St(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),G_(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:m1(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of W_(o.path))r(o,s,l)}),e}function W_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=W_(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function l1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:g1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const u1=/^:[\w-]+$/,c1=3,f1=2,d1=1,h1=10,p1=-2,hm=t=>t==="*";function m1(t,e){let n=t.split("/"),i=n.length;return n.some(hm)&&(i+=p1),e&&(i+=f1),n.filter(r=>!hm(r)).reduce((r,o)=>r+(u1.test(o)?c1:o===""?d1:h1),i)}function g1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function _1(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,d=o==="/"?e:e.slice(o.length)||"/",p=pm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!p&&u&&n&&!i[i.length-1].route.index&&(p=pm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(r,p.params),s.push({params:r,pathname:bi([o,p.pathname]),pathnameBase:E1(bi([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=bi([o,p.pathnameBase]))}return s}function pm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=v1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,d,p)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let _=a[p]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[p];return m&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function v1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),V_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function x1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return V_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ld(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function y1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Po(t):t;return{pathname:n?n.startsWith("/")?n:S1(n,e):e,search:T1(i),hash:w1(r)}}function S1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ec(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function X_(t,e){let n=M1(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function j_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Po(t):(r=bs({},t),St(!r.pathname||!r.pathname.includes("?"),ec("?","pathname","search",r)),St(!r.pathname||!r.pathname.includes("#"),ec("#","pathname","hash",r)),St(!r.search||!r.search.includes("#"),ec("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let p=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;r.pathname=h.join("/")}a=p>=0?e[p]:"/"}let l=y1(r,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const bi=t=>t.join("/").replace(/\/\/+/g,"/"),E1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),T1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,w1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function A1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const C1=["post","put","patch","delete"];[...C1];/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ps(){return Ps=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ps.apply(this,arguments)}const ud=ve.exports.createContext(null),R1=ve.exports.createContext(null),_r=ve.exports.createContext(null),Gl=ve.exports.createContext(null),vr=ve.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),Y_=ve.exports.createContext(null);function b1(t,e){let{relative:n}=e===void 0?{}:e;Hs()||St(!1);let{basename:i,navigator:r}=ve.exports.useContext(_r),{hash:o,pathname:s,search:a}=$_(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:bi([i,s])),r.createHref({pathname:l,search:a,hash:o})}function Hs(){return ve.exports.useContext(Gl)!=null}function Wl(){return Hs()||St(!1),ve.exports.useContext(Gl).location}function q_(t){ve.exports.useContext(_r).static||ve.exports.useLayoutEffect(t)}function P1(){let{isDataRoute:t}=ve.exports.useContext(vr);return t?G1():L1()}function L1(){Hs()||St(!1);let t=ve.exports.useContext(ud),{basename:e,future:n,navigator:i}=ve.exports.useContext(_r),{matches:r}=ve.exports.useContext(vr),{pathname:o}=Wl(),s=JSON.stringify(X_(r,n.v7_relativeSplatPath)),a=ve.exports.useRef(!1);return q_(()=>{a.current=!0}),ve.exports.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let p=j_(u,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:bi([e,p.pathname])),(d.replace?i.replace:i.push)(p,d.state,d)},[e,i,s,o,t])}function $_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ve.exports.useContext(_r),{matches:r}=ve.exports.useContext(vr),{pathname:o}=Wl(),s=JSON.stringify(X_(r,i.v7_relativeSplatPath));return ve.exports.useMemo(()=>j_(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function D1(t,e){return U1(t,e)}function U1(t,e,n,i){Hs()||St(!1);let{navigator:r}=ve.exports.useContext(_r),{matches:o}=ve.exports.useContext(vr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Wl(),d;if(e){var p;let f=typeof e=="string"?Po(e):e;l==="/"||((p=f.pathname)==null?void 0:p.startsWith(l))||St(!1),d=f}else d=u;let h=d.pathname||"/",m=h;if(l!=="/"){let f=l.replace(/^\//,"").split("/"),c=h.replace(/^\//,"").split("/");m="/"+c.slice(f.length).join("/")}let y=s1(t,{pathname:m}),_=k1(y&&y.map(f=>Object.assign({},f,{params:Object.assign({},a,f.params),pathname:bi([l,r.encodeLocation?r.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?l:bi([l,r.encodeLocation?r.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,n,i);return e&&_?ve.exports.createElement(Gl.Provider,{value:{location:Ps({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:vi.Pop}},_):_}function I1(){let t=V1(),e=A1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return ve.exports.createElement(ve.exports.Fragment,null,ve.exports.createElement("h2",null,"Unexpected Application Error!"),ve.exports.createElement("h3",{style:{fontStyle:"italic"}},e),n?ve.exports.createElement("pre",{style:r},n):null,o)}const N1=ve.exports.createElement(I1,null);class O1 extends ve.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ve.exports.createElement(vr.Provider,{value:this.props.routeContext},ve.exports.createElement(Y_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F1(t){let{routeContext:e,match:n,children:i}=t,r=ve.exports.useContext(ud);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ve.exports.createElement(vr.Provider,{value:e},i)}function k1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||St(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:h,errors:m}=n,y=p.route.loader&&h[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,h)=>{let m,y=!1,_=null,f=null;n&&(m=a&&p.route.id?a[p.route.id]:void 0,_=p.route.errorElement||N1,l&&(u<0&&h===0?(W1("route-fallback",!1),y=!0,f=null):u===h&&(y=!0,f=p.route.hydrateFallbackElement||null)));let c=e.concat(s.slice(0,h+1)),g=()=>{let v;return m?v=_:y?v=f:p.route.Component?v=ve.exports.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,ve.exports.createElement(F1,{match:p,routeContext:{outlet:d,matches:c,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?ve.exports.createElement(O1,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:g(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):g()},null)}var K_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K_||{}),Ml=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ml||{});function B1(t){let e=ve.exports.useContext(ud);return e||St(!1),e}function z1(t){let e=ve.exports.useContext(R1);return e||St(!1),e}function H1(t){let e=ve.exports.useContext(vr);return e||St(!1),e}function Z_(t){let e=H1(),n=e.matches[e.matches.length-1];return n.route.id||St(!1),n.route.id}function V1(){var t;let e=ve.exports.useContext(Y_),n=z1(Ml.UseRouteError),i=Z_(Ml.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function G1(){let{router:t}=B1(K_.UseNavigateStable),e=Z_(Ml.UseNavigateStable),n=ve.exports.useRef(!1);return q_(()=>{n.current=!0}),ve.exports.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ps({fromRouteId:e},o)))},[t,e])}const mm={};function W1(t,e,n){!e&&!mm[t]&&(mm[t]=!0)}const X1="startTransition";pf[X1];function Zi(t){St(!1)}function j1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=vi.Pop,navigator:o,static:s=!1,future:a}=t;Hs()&&St(!1);let l=e.replace(/^\/*/,"/"),u=ve.exports.useMemo(()=>({basename:l,navigator:o,static:s,future:Ps({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Po(i));let{pathname:d="/",search:p="",hash:h="",state:m=null,key:y="default"}=i,_=ve.exports.useMemo(()=>{let f=ld(d,l);return f==null?null:{location:{pathname:f,search:p,hash:h,state:m,key:y},navigationType:r}},[l,d,p,h,m,y,r]);return _==null?null:ve.exports.createElement(_r.Provider,{value:u},ve.exports.createElement(Gl.Provider,{children:n,value:_}))}function Y1(t){let{children:e,location:n}=t;return D1(Kc(e),n)}new Promise(()=>{});function Kc(t,e){e===void 0&&(e=[]);let n=[];return ve.exports.Children.forEach(t,(i,r)=>{if(!ve.exports.isValidElement(i))return;let o=[...e,r];if(i.type===ve.exports.Fragment){n.push.apply(n,Kc(i.props.children,o));return}i.type!==Zi&&St(!1),!i.props.index||!i.props.children||St(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Kc(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zc(){return Zc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zc.apply(this,arguments)}function q1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function $1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function K1(t,e){return t.button===0&&(!e||e==="_self")&&!$1(t)}const Z1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Q1="6";try{window.__reactRouterVersion=Q1}catch{}const J1="startTransition",gm=pf[J1],eA="flushSync";n1[eA];const tA="useId";pf[tA];function nA(t){let{basename:e,children:n,future:i,window:r}=t,o=ve.exports.useRef();o.current==null&&(o.current=i1({window:r,v5Compat:!0}));let s=o.current,[a,l]=ve.exports.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},d=ve.exports.useCallback(p=>{u&&gm?gm(()=>l(p)):l(p)},[l,u]);return ve.exports.useLayoutEffect(()=>s.listen(d),[s,d]),ve.exports.createElement(j1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}const iA=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",rA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ba=ve.exports.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:p}=e,h=q1(e,Z1),{basename:m}=ve.exports.useContext(_r),y,_=!1;if(typeof u=="string"&&rA.test(u)&&(y=u,iA))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),b=ld(S.pathname,m);S.origin===v.origin&&b!=null?u=b+S.search+S.hash:_=!0}catch{}let f=b1(u,{relative:r}),c=oA(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:r,unstable_viewTransition:p});function g(v){i&&i(v),v.defaultPrevented||c(v)}return ve.exports.createElement("a",Zc({},h,{href:y||f,onClick:_||o?i:g,ref:n,target:l}))});var _m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_m||(_m={}));var vm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vm||(vm={}));function oA(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=P1(),u=Wl(),d=$_(t,{relative:s});return ve.exports.useCallback(p=>{if(K1(p,n)){p.preventDefault();let h=i!==void 0?i:Sl(u)===Sl(d);l(t,{replace:h,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,i,r,n,t,o,s,a])}var cd={exports:{}},Vs={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sA=ve.exports,Q_=60103;Vs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var xm=Symbol.for;Q_=xm("react.element"),Vs.Fragment=xm("react.fragment")}var aA=sA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lA=Object.prototype.hasOwnProperty,uA={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)lA.call(e,i)&&!uA.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Q_,type:t,key:o,ref:s,props:r,_owner:aA.current}}Vs.jsx=J_;Vs.jsxs=J_;cd.exports=Vs;const ne=cd.exports.jsx,Ye=cd.exports.jsxs,cA=()=>Ye("div",{id:"bottomBar",children:[ne("a",{href:"https://github.com/adityaj2003",className:"socialLink",target:"_blank",rel:"noopener noreferrer",children:ne("img",{src:"/github.png",alt:"GitHub"})}),ne("a",{href:"https://twitter.com/Adi_not_Aadi",className:"socialLink",target:"_blank",rel:"noopener noreferrer",children:ne("img",{src:"/twitter.png",alt:"Twitter"})}),ne("a",{href:"https://www.linkedin.com/in/adityarjadhav",className:"socialLink",target:"_blank",rel:"noopener noreferrer",children:ne("img",{src:"/linkedin.png",alt:"LinkedIn"})}),ne("a",{href:"mailto:adityaj2003@gmail.com",className:"socialLink",target:"_blank",rel:"noopener noreferrer",children:ne("img",{src:"/gmail.png",alt:"Mail"})})]}),fA=()=>Ye("div",{id:"foreground",children:[Ye("div",{id:"introSection",children:[ne("div",{id:"introImage"}),Ye("div",{id:"introText",children:[ne("p",{children:"Hello! Welcome to my personal website. This is a place to share my personality and experiences a little more than what is seen on a 1 page resume."}),ne("p",{children:"I am Aditya Jadhav, junior at the University of Arizona currently majoring in CS with a minor in SDS (Statistics and Data Science). I have experience with Java and Python. Currently interested and working on ML/AI projects with Python, TensorFlow, Scikit-learn, NumPy. I have experience working with Web development mainly MERN Stack. Have also worked with AWS and Database Systems (MongoDB and PostGreSQL). My Projects can be accessed through the Projects section at the bottom."}),ne("p",{children:"I currently work as a Software Engineer Intern at Astrocomm Technologies mainly in building GUIs using wxPython and writing Arduino C code to handle ADC data. My future work involves elasticsearch analyzing data using ML techniques. Apart from that I worked under Dr. Chicheng Zhang at the UArizona CS Department on active learning using early stopping gradient descent under Tsybakov Noise. Wrote the theoretical algorithm into code for reducing label complexity in Python. I also previously worked as an Undergraduate Research Assistant at the ToMCAT project. I made a Flask webapp using Python for the project previously and data visualisation dashboard using wxWidgets and C++ for displaying sensor data captured throughout the experiment."})]})]}),ne("div",{id:"tilesSection",children:Ye("div",{id:"tilesContainer",children:[Ye("a",{href:"/projects",class:"tile",children:["Projects ",ne("img",{src:"terminal.png",alt:"Projects Icon"})]}),Ye("a",{href:"Aditya_Resume.p",class:"tile",children:["Resume",ne("img",{src:"resume.png",alt:"Resume Icon"})]})]})})]}),dA=()=>Ye("div",{id:"foreground",children:[Ye("div",{id:"introSection",children:[ne("div",{id:"introImage",style:{backgroundImage:"url(ChessLogo.svg)",borderRadius:"0"}}),Ye("div",{id:"introText",children:[ne("p",{children:"Built a chess playing website using JS, React, Express, NodeJS. The website allows you to play with a computer engine, analyse a game, evaluate a position using the StockFish 14 chess engine, Chess.js and ChessBoard.js OSS projects."}),Ye("p",{children:["Update 1:",ne("br",{})," I added the ability to draw arrows on the chessboard using SVGs. In the project, I utilize dynamic SVG sprites to create interactive arrow icons. This feature is implemented through a combination of HTML, CSS, and JavaScript. "]}),Ye("p",{children:["Update 2:",ne("br",{})," I added a login feature which used Java Web Tokens and an encryption algorithm to securely send and verify users on the platform. I currently implemented it just for finding out how encryption and authentication works but plan on adding user specific data when I have money to store the data. "]}),Ye("p",{children:["Update 3: ",ne("br",{})," I disabled the ability to fetch puzzles from AWS because of the high cost of AWS RDS DB. There are a 1000 visitors on the platform every month which adds to the inflation of cost."]}),ne("br",{}),ne("p",{children:"My initial idea was to build using PHP as that was what I learned in the Web Dev class at school but I quickly realized that finding resources for PHP is difficult and new age tech stacks are quickly taking over. I learned NodeJS, React as much as I needed and built the website over the summer. I am pretty happy with the result but I would definitely want to understand CDNs, load balancing and other large scale network management stuff from here on. I use an AWS PostGreSql RDBMS to store puzzle data. I now decided to call in 10 puzzle data at once at each ping of the server instead of calling 1 once and contantly pinging."}),ne("p",{children:"This project also resulted in me contributing to lichess.org on their github. Looking at the scale of their github repo makes mine look like a drop in the ocean but I gained how to manage deployment ready code from looking over there code to make the changes (and the procedures they follow before pushing to prod)."})]})]}),ne("div",{id:"imageSection",children:Ye("div",{class:"imageContainer",children:[Ye("div",{class:"imageRow",children:[ne("div",{class:"imageItem",style:{backgroundImage:"url('Chess1.png')"}}),ne("div",{class:"imageItem",style:{backgroundImage:"url('Chess2.png')"}}),ne("div",{class:"imageItem",style:{backgroundImage:"url('Chess3.png')"}})]}),ne("div",{class:"imageDescription",children:"This image shows the features of the game. Engine evaluating best move. The depth of evaluation is set to 20. Also seen are the toggles for computer play. We also see multiplayer screen in the middle and the successful puzzle screen on the right."})]})})]}),hA=()=>Ye("div",{id:"foreground",children:[Ye("div",{id:"introSection",children:[ne("div",{id:"introImage",style:{backgroundImage:"url(Chess_Vision_SS1.jpg)",borderRadius:"0"}}),Ye("div",{id:"introText",children:[ne("h1",{children:" Chess Vision Program"}),ne("h4",{style:{color:"#AAA"},children:" Get a chess position from a picture of a chess board"}),ne("p",{children:"Developed an computer vision program capable of recognizing and analyzing chessboard positions from images. The program efficiently extracts a chessboard from a given picture and accurately identifies the positions of the pieces, facilitating the conversion of these positions into a standard chess notation (FEN - Forsyth-Edwards Notation)."}),ne("p",{children:"This program is written in Python, using ML libraries such as TensorFlow for machine learning, OpenCV for image processing. The system is adept at handling various lighting conditions and angles, ensuring reliable performance across diverse scenarios. The primary application of this tool is to digitize chess games from physical boards, offering a cost-effective alternative to expensive digital boards."}),Ye("p",{children:[" The step by step process is shown in the images below. I group the lines in the 3rd picture which are closer together into 1 and divide chessboard into 64 individual squares. Then we sent the subsquare into a trained model to predict the chess piece. Then we finally construct fen from it. We get the output like this:- ",ne("br",{}),"Image: test4.jpg",ne("br",{})," Ground Truth FEN: r1b1kbnr/1pp11ppp/p1p11111/11111111/111NP111/11111111/PPP11PPP/RNB1K11R ",ne("br",{}),"Inception Model FEN: rnrNkrnr/npp11ppp/pnp11111/11111111/111NP111/11111111/PPP11BPN/rNB1N11N, Accuracy: 84.50704225352112% ",ne("br",{}),"ResNet Model FEN: rNrNkrnr/Nbp11ppp/pNp11111/1111111N/11NNQ111/1111111N/BPN1NPPP/RNNNNPPR, Accuracy: 73.23943661971832%"]})]})]}),ne("div",{id:"imageSection",children:Ye("div",{class:"imageContainer",children:[Ye("div",{class:"imageRow",children:[ne("div",{class:"imageItem",style:{backgroundImage:"url('Chess_Vision_SS1.jpg')"}}),ne("div",{class:"imageItem",style:{backgroundImage:"url('Chess_Vision_SS2.jpg')"}}),ne("div",{class:"imageItem",style:{backgroundImage:"url('Chess_Vision_SS3.jpg')"}})]}),ne("div",{class:"imageDescription",children:"These images showcase the program\u2019s step by step process of recognizing a chessboard."})]})})]}),pA=()=>Ye("div",{id:"foreground",children:[ne("div",{id:"introSection",children:Ye("div",{id:"introText",children:[ne("h1",{children:"Wordle Game"}),ne("p",{children:"Built a working replica of the popular wordle game implementing Object Oriented Programming. The GUI works exactly like the wordle game with animations, on screen buttons and keyboard input."}),ne("p",{children:"The program is made using Java and JavaFX keeping OOP in mind. This was built as a class project which I implemented further and implemented on-screen buttons along with keyboard input and further improved the aesthetics with getting the original colors of wordle by inspect-element. Also has animations which are implemented by JavaFX"})]})}),ne("div",{id:"imageSection",children:Ye("div",{class:"imageContainer",children:[ne("div",{class:"imageRow",children:ne("div",{class:"imageItem",style:{backgroundImage:"url(Wordle_SS.jpg)"}})}),ne("div",{class:"imageDescription",children:"First image shows the Extension on the chrome web browser. It automatically extracts the url of the current youtube page being played and sends it to the server for processing. The second image shows the summary of the URL in your selected notion page."})]})})]}),mA=()=>Ye("div",{id:"foreground",children:[Ye("div",{id:"introSection",children:[ne("div",{id:"introImage",style:{backgroundImage:"url(YoutubeToNotion.png)",width:"60%",borderRadius:"0px"}}),Ye("div",{id:"introText",children:[ne("h1",{children:" YouTube Transcript to Notion Exporter Extension"}),ne("h4",{style:{color:"#AAA"},children:" Get a summary of the video you are watching right into your Notion Workspace"}),ne("p",{children:"This project aims to export the summary of a YouTube video you are currently watching into your notion notebook. It uses OpenAI API, GoogleCloud, Node and Express to get summary of the youtube video."}),ne("p",{children:"I use PyTube to get the YouTube URL\u2019s audio, GCloud to get the transcript of the audio and the OpenAI API to get a summary of the video. I then use the NotionAPI to export the summary to the Notion Page. It uses Node to manage all packages and Express to handle all server-client networking."})]})]}),ne("div",{id:"imageSection",children:Ye("div",{class:"imageContainer",children:[Ye("div",{class:"imageRow",children:[ne("div",{class:"imageItem",style:{backgroundImage:"url('YTNotion1.png')"}}),ne("div",{class:"imageItem",style:{backgroundImage:"url('YTNotion2.png')"}})]}),ne("div",{class:"imageDescription",children:"First image shows the Extension on the chrome web browser. It automatically extracts the url of the current youtube page being played and sends it to the server for processing. The second image shows the summary of the URL in your selected notion page."})]})})]}),gA=()=>ne("div",{id:"foreground",children:Ye("div",{id:"projectsSection",children:[ne("h2",{id:"heading",children:"Projects: A growing collection of my projects"}),Ye("div",{id:"tilesContainerProjects",children:[ne("a",{href:"vision",className:"tile tile1"}),ne("a",{href:"chess",className:"tile tile2"}),ne("a",{href:"youtube",className:"tile tile3"}),ne("a",{href:"wordle",className:"tile tile4"})]})]})}),_A=()=>(ve.exports.useEffect(()=>{const t=new NE,e=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),n=new IE;n.setSize(window.innerWidth,window.innerHeight),document.getElementById("threejs-container").appendChild(n.domElement),new WE(e,n.domElement);for(let _=-3;_<=3;_++){const f=new FE(16777215);f.position.set(_,-5,0),t.add(f)}const i=new zE(16777215,100);i.position.set(1,1,1).normalize(),i.castShadow=!0,i.shadow.camera.near=.5,i.shadow.camera.far=500,i.shadow.camera.left=-50,i.shadow.camera.right=50,i.shadow.camera.top=50,i.shadow.camera.bottom=-50,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,t.add(i);const r=new HE(16777215,.5);t.add(r);const o=[new Ru(16755455,2,50),new Ru(11206655,2,50),new Ru(11206570,2,50)];o[0].position.set(-5,0,5),o[1].position.set(5,0,5),o[2].position.set(0,5,5),o.forEach(_=>t.add(_)),e.position.set(0,-20,20),e.lookAt(0,0,0);const s=new $m({color:16777215});for(let _=-100;_<101;_+=5)if(_!==0){const f=[new U(_,-100,0),new U(_,100,0)],c=new Tn().setFromPoints(f),g=new Fh(c,s);t.add(g)}for(let _=-100;_<101;_+=5){const f=[new U(-100,_,0),new U(100,_,0)],c=new Tn().setFromPoints(f),g=new Fh(c,s);t.add(g)}let a=0,l=0,u=-200,d=20,p=0;function h(){u=-50+.5*a*a,d=10-a,e.position.set(l,u,d),d<1?(p+=53e-6,p<.03&&(a+=.03-p),e.lookAt(0,3e3,0)):(a+=.005,e.lookAt(0,0,0)),m.render()}const m=new KE(n);m.addPass(new ZE(t,e));const y=new go(new Me(window.innerWidth,window.innerHeight),1.5,.4,.85);m.addPass(y),n.setAnimationLoop(h),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)})},[]),Ye(nA,{children:[Ye("div",{id:"navigation",children:[ne(ba,{to:"/",style:{textDecoration:"none"},children:ne("div",{id:"foregroundName",children:"Aditya Jadhav"})}),Ye("div",{id:"navLinks",children:[ne(ba,{to:"/",className:"navLink",children:"Home"}),ne(ba,{to:"/projects",className:"navLink",children:"Projects"}),ne(ba,{to:"/resume",className:"navLink",children:"Resume"})]})]}),ne("div",{id:"threejs-container"}),ne("div",{id:"bottomBarContainer"}),Ye(Y1,{children:[ne(Zi,{path:"/projects",element:ne(gA,{})}),ne(Zi,{path:"/",element:ne(fA,{})}),ne(Zi,{path:"/chess",element:ne(dA,{})}),ne(Zi,{path:"/vision",element:ne(hA,{})}),ne(Zi,{path:"/wordle",element:ne(pA,{})}),ne(Zi,{path:"/youtube",element:ne(mA,{})})]})]}));ad.render(ne(hf.StrictMode,{children:ne(_A,{})}),document.getElementById("root"));ad.render(ne(hf.StrictMode,{children:ne(cA,{})}),document.getElementById("bottomBarContainer"));
