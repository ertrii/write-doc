import { Heading, Page, Text } from "../../lib";

export default function Main() {
  return (
    <Page>
      <Heading />
      <Text>
        This is a simple static web, structured in <b>React</b> for
        documentation use only.
      </Text>
      <Heading type="heading-2">Lorem Ipsum</Heading>
      <Text>
        The objective is to centralize all the documentation to facilitate the
        search.
      </Text>
    </Page>
  );
}
