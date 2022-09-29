import Group from "./Group";
import Item from "./Item";
import useBookmark from "../hooks/useBookmark";
import getUrl from "../utilities/getUrl";

export default function Menu() {
  const { bookmark } = useBookmark();

  return (
    <div className="menu">
      {bookmark.groups.map((group, i) => (
        <Group name={group.name} key={i}>
          {Object.entries(group.routes).map(([path, values]) => (
            <Item
              key={getUrl(bookmark.path, path)}
              path={getUrl(bookmark.path, path)}
            >
              {values.title}
            </Item>
          ))}
        </Group>
      ))}
    </div>
  );
}
