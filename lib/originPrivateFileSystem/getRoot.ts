export async function getRoot() {
  return  await navigator.storage.getDirectory();
}