module.exports = {
  palindrome
}

function palindrome(s){
  return shortPalindrome()(s);
}

function shortPalindrome(s) {
  const sPalindrome = `y=a=>(d=a.length,f=parseInt)&&!a||!(f(a[0],36)-f(a[d-1],36))&&y(a.substr(1,d-2).trim())`;

  console.log(sPalindrome.length);
  o=s=>{a=s.replace(/\W/g,'').toLocaleLowerCase();return a==a.split('').reverse().join('')} //88

  n=s=>{
    a=s.replace(/\W/g, '').toLocaleLowerCase();  
    return a==a.split('').reverse().join('');
  }

  c=a=>{a=a.replace(/\W/g,'').toLowerCase();d=a.length;return!a||a[0]==a[d-1]&&c(a.substr(1,d-2))} //95

  b = a => {
    a=a.replace(/\W/g,'').toLowerCase();
    d=a.length;
    return !a || a[0] == a[d-1] && b(a.substr(1, d-2))
  };

  z=a=>{d=a.length;f=parseInt;return!a||!(f(a[0])-f(a[d-1]))&&b(a.substr(1,d-2))} //79

  x = a => {
    d=a.length;
    f=parseInt;
    return !a || !(f(a[0]) - f(a[d-1])) && b(a.substr(1, d-2))
  };

  u=a=>(d=a.length,f=parseInt)&&!a||!(f(a[0])-f(a[d-1]))&&b(a.substr(1,d-2)) //74

  i = a => (d=a.length, f=parseInt) && !a || !(f(a[0]) - f(a[d-1])) && b(a.substr(1, d-2))
  
  xxx=e=>(a=e.replace(/\W/g,''),d=a.length,f=parseInt)&&!a||!(f(a[0],36)-f(a[d-1],36))&&XXX(a.substr(1,d-2))
  
  y=a=>(d=a.length,f=parseInt)&&!a||!(f(a[0],36)-f(a[d-1],36))&&y(a.substr(1,d-2).trim()) //87
  

  return y;
}

function nicePalindrome(s) {
  const nString = s.replace(/\W/g, '');
  const nReversedString = nString.split('').reverse().join('');

  return nString.toLocaleLowerCase() === nReversedString.toLocaleLowerCase();
}
