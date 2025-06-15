const $paletteBox = document.getElementById("palette-box");

class Palette {
  constructor(imageData) {
    this.data = imageData.data;
    this.colors = new Set();
  }

  // 추출
  extract() {
    for (let i = 0; i < this.data.length; i += 4) {
      let r = this.data[i];
      let g = this.data[i + 1];
      let b = this.data[i + 2];
      let a = this.data[i + 3];
      this.colors.add(`rgb(${r}, ${g}, ${b}, ${a})`);
    }

    return this;
  }

  // 추출 색상 DOM 렌더링
  render() {
    $paletteBox.innerHTML = "";

    for (let color of this.colors.values()) {
      const $item = document.createElement("div");
      $item.style.width = `10px`;
      $item.style.height = `50px`;
      $item.style.backgroundColor = color;

      $paletteBox.append($item);
    }
  }
}
