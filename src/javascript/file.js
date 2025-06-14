const $canvas = document.getElementById("preview");
const ctx = $canvas.getContext("2d");

const $fileInput = document.getElementById("file"); // Input type = "file"

const $paletteList = document.getElementById("palette-list");

const changeFileInput = (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  if (/^(image\/?)(:?png|jpg|jpeg)/i.test(file.type)) {
    const image = new Image();

    image.onload = () => {
      $canvas.classList.remove("unloaded");
      $canvas.width = image.width;
      $canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      // 이미지에서 데이터 값 추출 후, DOM 렌더링
      const imageData = ctx.getImageData(0, 0, image.width, image.height);
      const palette = new Palette(imageData);
      palette.extract().render();
    };

    image.src = url;
  } else {
    alert("PNG, JPG 파일만 지원합니다.");
  }
};

const initFileInput = () => {
  $fileInput.addEventListener("change", changeFileInput);
};

document.addEventListener("DOMContentLoaded", initFileInput);
