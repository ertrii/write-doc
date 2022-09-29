export default function comparePath(path1: string, path2: string) {
  const _path1 =
    path1[path1.length - 1] === "/" ? path1.slice(0, path1.length - 1) : path1;
  const _path2 =
    path2[path2.length - 1] === "/" ? path2.slice(0, path2.length - 1) : path2;

  return _path1 === _path2;
}
