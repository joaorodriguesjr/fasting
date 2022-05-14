export default function Progress({ start, target }: { start: number, target: number }) {
  const difference = Date.now() - start
  const max = target * 1000 * 60 * 60

  return <progress value={ difference } max={ max }></progress>
}
