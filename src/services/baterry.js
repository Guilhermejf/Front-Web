export async function getData() {
  const url = "https://luizg4370.c44.integrator.host/api";
  const rawData = await fetch(url);
  const data = await rawData.json();
  return data;
}
export async function delData(id) {
  alert(`Registro com id: ${id} excluido !`)
}
