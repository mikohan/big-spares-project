export function compare( a, b ) {
  // sorting category array first level
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
} 