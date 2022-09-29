const getUrl = (base: string, path: string) => {
  if (base === "/" && path === "/") {
    return "/";
  }
  if (base === "/") {
    return path;
  }
  if (path === "/") {
    return base;
  }
  return `${base}${path}`;
};

export default getUrl;
