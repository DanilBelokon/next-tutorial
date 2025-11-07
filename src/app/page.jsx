import Button from "@/components/Button";

export const metadata = {
  title: "Next JS tutorial",
  description: "Learning Next JS",
  keywords: "business, next js, react",
};

export default function Home() {
  return (
    <section className="content">
      <h1>Изучаем Next JS</h1>
      <p>
        Next.js — это современный React-фреймворк, который позволяет создавать
        быстрые, масштабируемые и SEO-дружественные приложения.
      </p>
      <Button></Button>
    </section>
  );
}
