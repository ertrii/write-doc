interface GroupProps {
  children: React.ReactNode;
  name: string;
}

export default function Group({ children, name }: GroupProps) {
  return (
    <>
      {name && <h3>{name}</h3>}
      <ul>{children}</ul>
    </>
  );
}
