export const setCookie = (name, value, days) => {
  const date = new Date()
  date.setTime(date.getTime() + (days*24*60*60*1000))
  const expires = "expires="+ date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export const getCookie = (name) => {
  const _name = name + "="
  const decodedCookie = decodeURIComponent(document.cookie).split(';')

  for(let i= 0; i<decodedCookie.length; i++) {
      let cookie = decodedCookie[i];
      while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(_name) == 0) {
          return cookie.substring(_name.length, cookie.length);
      }
  }
  return "";
}
