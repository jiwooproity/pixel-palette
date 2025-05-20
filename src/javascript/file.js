const $preview = document.getElementById("preview"); // Image element
const $fileInput = document.getElementById("file"); // Input type = "file"

const changeFileInput = (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);

  if (/^(image\/?)(:?png|jpg|jpeg)/i.test(file.type)) {
    $preview.classList.remove("unloaded");
    $preview.src = url;
  } else {
    alert("PNG, JPG 파일만 지원합니다.");
  }
};

const initFileInput = () => {
  $fileInput.addEventListener("change", changeFileInput);
};

document.addEventListener("DOMContentLoaded", initFileInput);
