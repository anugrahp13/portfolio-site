// utils.js
// export const createSlug = (name) => {
//   return name
//     .toLowerCase()
//     .replace(/\s+/g, "-") // Mengganti spasi dengan "-"
//     .replace(/[^\w-]+/g, ""); // Menghapus karakter selain huruf, angka, dan "-"
// };

export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-") // Mengganti spasi dengan "-"
    .replace(/[^\w-]+/g, "") // Menghapus karakter selain huruf, angka, dan "-"
    .replace(/--+/g, "-") // Menghindari tanda hubung ganda
    .replace(/^-+/, "") // Menghapus tanda hubung di awal
    .replace(/-+$/, ""); // Menghapus tanda hubung di akhir
};
