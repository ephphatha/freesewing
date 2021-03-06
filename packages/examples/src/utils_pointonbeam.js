export default (part) => {
  let { Point, points, Path, paths, Snippet, snippets, utils } = part.shorthand()

  points.from1 = new Point(10, 10)
  points.to1 = new Point(90, 60)
  points.from2 = new Point(10, 30)
  points.to2 = new Point(90, 80)
  points.b1 = new Point(170, 110)
  points.b2 = new Point(170, 130)

  let scatter = []
  for (let i = 1; i < 36; i++) {
    for (let j = 1; j < 27; j++) {
      scatter.push(new Point(i * 10, j * 10))
    }
  }
  let snippet
  for (let point of scatter) {
    if (utils.pointOnBeam(points.from1, points.to1, point)) snippet = 'notch'
    else snippet = 'bnotch'
    snippets[part.getId()] = new Snippet(snippet, point)
    if (utils.pointOnBeam(points.from2, points.to2, point, 0.01)) {
      snippet = 'notch'
    } else snippet = 'bnotch'
    snippets[part.getId()] = new Snippet(snippet, point)
  }
  paths.line1 = new Path().move(points.from1).line(points.to1).attr('class', 'fabric stroke-lg')
  paths.lne1 = new Path().move(points.to1).line(points.b1).attr('class', 'fabric dashed')
  paths.line2 = new Path().move(points.from2).line(points.to2).attr('class', 'fabric stroke-lg')
  paths.lne2 = new Path().move(points.to2).line(points.b2).attr('class', 'fabric dashed')

  return part
}
