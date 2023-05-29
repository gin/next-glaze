import Image from 'next/image'

interface Vessel4Props {
  photo: string,
  meta: {
    clay: string,
    glaze: string,
    underglaze?: string,
    date: string,
  },
  caption?: string,
}

function Vessel4({photo, meta, caption}: Vessel4Props) {
  let url0 = `/${photo}0.jpeg`
  let url1 = `/${photo}1.jpeg`
  let url2 = `/${photo}2.jpeg`
  let alt = `Ceramic ${photo}`

  return (
    <div style={{
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }}>
      <div>
        <h2> </h2>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={url0}
          alt={alt}
          width={480}
          height={640} />
      </div>

      <div>
        <h2> </h2>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={url1}
          alt={alt}
          width={480}
          height={640} />
      </div>

      <div>
        <h2> </h2>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={url2}
          alt={alt}
          width={480}
          height={640} />
      </div>

      <div>
        <h2 className={`mb-3 text-2xl font-semibold`}>{photo.slice(0,2)}: {caption}</h2>
        <code className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Date trimmed:&nbsp;{meta.date}<br /><br />
          Clay:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{meta.clay}<br /><br />
          Glaze:
          <div style={
            {
              display: 'grid',
              placeItems: 'end',
              gridTemplateRows: '1fr 1fr',
            }
          }>
            <div>{meta.glaze}</div>
            <div>{meta.underglaze}</div>
          </div>
        </code>
      </div>

      <div><br /></div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Luigi Leung's&nbsp;
          <code className="font-mono font-bold">ceramics</code>&nbsp;from Jane's 2023 Winter class
        </p>
      </div>

      <div>
        <br/><br/>
        <h2 className={`mb-3 text-2xl font-semibold`}>🏺 Group photo</h2>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/0.jpeg"
          alt="All ceramic vessels from Winter 2023"
          width={1280}
          height={960}
          priority
        />
      </div>

      <div>
        <br/><br/>
        <h2 className={`mb-3 text-2xl font-semibold`}>🤩 Select vessels in detail</h2>
      </div>

      <Vessel4 photo={"00"} meta={{clay: "Artic White", glaze: "Cappuccino & Stormy Sea", underglaze: "over Temmoku", date: "2023-03-28"}} caption="Waterfall"/>
      <Vessel4 photo={"01"} meta={{clay: "Artic White", glaze: "Blue & Golden Green", underglaze: "over White", date: "2023-03-14"}} caption="Pond" />
      <Vessel4 photo={"02"} meta={{clay: "Texas White", glaze: "Cappuccino & White", date: "2023-04-07"}} caption="Coffee" />
      <Vessel4 photo={"03"} meta={{clay: "Texas White", glaze: "Black & Yellow", date: "2023-04-13"}} caption="Wiz Khalifa" />
      <Vessel4 photo={"04"} meta={{clay: "Sedona Red", glaze: "Stormy Sea & White", underglaze: "over Blue", date: "2023-03-02"}} caption="Breaking Wave" />
      <Vessel4 photo={"05"} meta={{clay: "Artic White", glaze: "Black & Shino", date: "2023-03-17"}} caption="Shino Aburame" />
      <Vessel4 photo={"06"} meta={{clay: "Texas White", glaze: "Temmoku", underglaze: "stripe of Green underglaze", date: "2023-04-09"}} caption="Electric Fence" />
      <Vessel4 photo={"07"} meta={{clay: "Texas White", glaze: "Yellow", underglaze: "Green filled sgraffito", date: "2023-04-09"}} caption="Wheatfield" />
      <Vessel4 photo={"08"} meta={{clay: "Texas White", glaze: "Opal", underglaze: "over Temmoku", date: "2023-02-04"}} caption="Dream" />
      <Vessel4 photo={"09"} meta={{clay: "Sedona & Artic", glaze: "Black", underglaze: "over Clear", date: "2023-04-13"}} caption="Waking Up" />
      <Vessel4 photo={"10"} meta={{clay: "Texas White", glaze: "White & Lobster Red", date: "2023-02-14"}} caption="Winter Rose" />
      <Vessel4 photo={"11"} meta={{clay: "SBF with grog", glaze: "unglazed", date: "2023-04-27"}} caption="two plates" />
      <Vessel4 photo={"12"} meta={{clay: "Sedona Red", glaze: "unglazed", date: "2023-02-17"}} caption="a vase" />
      <Vessel4 photo={"13"} meta={{clay: "SBF", glaze: "Clear & Mottled Jade", underglaze: "over Temmoku", date: "2023-04-27"}} caption="Drool" />
      <Vessel4 photo={"14"} meta={{clay: "Texas White", glaze: "brush of Black", underglaze: "over Matte White", date: "2023-03-29"}} caption="Meditate" />
    </main>
  )
}
