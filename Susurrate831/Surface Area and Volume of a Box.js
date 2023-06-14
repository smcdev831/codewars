function getSize(width, height, depth) {
  let area = 2 * depth * height + 2 * width * height + 2 * depth * width;
  let volume = depth * width * height;
  return [area, volume];
}
