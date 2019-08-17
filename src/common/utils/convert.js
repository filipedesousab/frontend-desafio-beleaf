const fetchAsBlob = url => fetch(url)
  .then(response => response.blob());

export const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});

export const convertURLBlobToBase64 = url => new Promise((resolve, reject) => {
  fetchAsBlob(url)
    .then(convertBlobToBase64)
    .then(resolve)
    .catch(reject);
});
