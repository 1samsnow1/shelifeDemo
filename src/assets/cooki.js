export function setCookie(key, value, day, path = "/") {
  let milisecond = 30 * 24 * 3600 * 1000;
  let newDate = new Date();
  // now
  newDate.setTime(newDate.getTime() + milisecond);
  document.cookie = `${key}=${value};expirse=${newDate};Path=${path}`;
}

export function getCookie(key) {
  let res;
  let myCookies = document.cookie;
  //   username=ali; token=123; lname=rez
  let findedCookie = myCookies.split("; ").find(function (cookie) {
    if (cookie.startsWith(key)) {
      return cookie;
    }
  });
  if (findedCookie) {
    res = findedCookie.split("=")[1];
  }
  return res;
}

export function removeCookie(key) {
    let newDate=new Date();
    newDate.setFullYear(1980)
    document.cookie = `${key}=;expirse=${newDate}`;
}