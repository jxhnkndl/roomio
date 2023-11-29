import Hero from "./layout/Hero"

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <Hero />
    </main>
  )
}

const styles = {
  main: 'grow'
}