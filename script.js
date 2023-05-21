var url = document.location.href;
console.log(url);
var k = url.lastIndexOf("k=")>0 ? url.substr(url.lastIndexOf("k=")+2) : "";

if(k){
  console.log(k);
  fetch(AS_URL_BASE+'?k='+k)
  .then(r => r.text())
  .then((r) => {
    console.log(r);
    //document.write(r);
    if(r){
      document.location.replace(r);
    }
  })
  .catch(err => console.log(err))
}
