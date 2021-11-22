type Props = {
  title: string
}

const bla = 'kweqek'

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
