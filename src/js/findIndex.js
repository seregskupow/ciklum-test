export const findIndex = (parent, child) => {
  var i = parent.length - 1;
  for (; i >= 0; i--) {
    if (child === parent[i]) {
      break;
    }
  }
  return i;
};
