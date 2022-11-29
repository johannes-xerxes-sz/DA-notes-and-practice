function generateBC(url, separator) {
  var splittedUrl = url.split('/');
  splittedUrl[0] = '<a href="/">HOME</a>';

  var priorHref = '/';
  for (var i = 1; i < splittedUrl.length; i++) {
    if (splittedUrl[i].includes('.')) {
      splittedUrl[i] = splittedUrl[i].split('.')[0];
    }

    var href = priorHref + splittedUrl[i] + '/',
        priorHref = href;
/*----------------------------------------------------------------------*/
    if (splittedUrl[i].length > 30) {
      var acronymizingIgnoreList = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
          acronym = '',
          splitted = splittedUrl[i].split('-');

      for (var i = 0; i < splitted.length; i++) {
        if (acronymizingIgnoreList.includes(splitted[i])) {
          continue;
        }

        acronym += splitted[i][0].toUpperCase();
      }

    }
/*----------------------------------------------------------------------*/
    if (i === splittedUrl.length - 2 && splittedUrl[i + 1].includes('index')) {
      splittedUrl[i] = `<span class="active">${splittedUrl[i].toUpperCase()}</span>`
      splittedUrl.pop()
      break;
    }

    if (i === splittedUrl.length - 1) {
      splittedUrl[i] = `<span class="active">${splittedUrl[i].toUpperCase()}</span>`
      continue;
    }

    splittedUrl[i] = `<a href="${href}">${splittedUrl[i].toUpperCase()}</a>`
  }

  return splittedUrl.join(`${separator}`)
}

generateBC("www.microsoft.com/important-100-200-300-400-500-600/confidential/docs/index.htm#top", " * ")
