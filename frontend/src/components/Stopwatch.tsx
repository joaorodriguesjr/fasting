export default function Stopwatch({ activation }: { activation: number }) {
  const difference = Date.now() - activation

  const HH = String(Math.floor(difference / 1000 / 60 / 60)).padStart(2, '0')
  const MM = String(Math.floor(difference / 1000 / 60 % 60)).padStart(2, '0')
  const SS = String(Math.floor(difference / 1000 % 60     )).padStart(2, '0')

  return <>
    { HH }:{ MM }:{ SS }
  </>
}
