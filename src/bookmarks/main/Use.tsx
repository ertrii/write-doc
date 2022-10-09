import { Heading, Image, Page, Text } from "../../lib";
import imgSrc from "../../images/tower.webp";

export default function Use() {
  return (
    <Page>
      <Heading />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint
        quaerat facere voluptates numquam cupiditate in. Dicta a, quis aliquid,
        officiis ipsam repudiandae, voluptatum eaque ducimus culpa numquam aut
        eligendi?
      </Text>
      <Heading type="heading-2">Title</Heading>
      <Text>
        Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
        Quod odio perferendis accusamus rem, inventore illum, sapiente alias non
        officiis repellendus eius a nostrum, aut praesentium pariatur sequi
        dolores quas nemo?
      </Text>
      <Heading type="heading-3">Subtitle</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt
        sint ea qui assumenda! Dolore, corporis fuga nam enim neque asperiores
        voluptatibus vel esse ratione unde nostrum autem praesentium placeat.
      </Text>
      <Heading type="heading-4">Re Subtitle</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dicta,
        veniam soluta obcaecati vitae atque <b>praesentium</b> porro ratione in
        exercitationem consectetur a nesciunt optio id repellat omnis incidunt
        unde quasi!
      </Text>
      <Image src={imgSrc} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta
        in optio aliquam placeat vel, hic, reprehenderit, cumque maiores enim ab
        veritatis molestias quam commodi eos sunt? Sit, quos sed.
      </Text>
    </Page>
  );
}
