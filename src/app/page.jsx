import Button from "@/components/Button";

export const metadata = {
  title: "Next JS tutorial",
  description: "Learning Next JS",
  keywords: "business, next js, react",
};

export default function Home() {
  return (
    <section className="content">
      <h1>Илья Белоконь - начинающий преподаватель</h1>
      <p>
        Любит играть в игры и много есть. Очень вспыльчивый, но очень ранимый.
      </p>
      <Button></Button>
    </section>
  );
}
