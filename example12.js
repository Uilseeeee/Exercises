let a=7209
let b=(Math.floor(a/3600))
let c=(Math.floor((a-b*3600)/60))
let d=a-b*3600-c*60
console.log(b,c,d)