export function findById(o, id) {
  //Early return
  if (o.id === id) {
    return o;
  }
  var result, p;
  for (p in o) {
    if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
      result = findById(o[p], id);
      if (result) {
        return result;
      }
    }
  }
  return result;
}

export function findBySlug(o, slug) {
  //Early return
  if (o.slug === slug) {
    return o;
  }
  var result, p;
  for (p in o) {
    if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
       result = findBySlug(o[p], slug);
      if (result) {
        return result;
      }
    }
  }
  return result;
}