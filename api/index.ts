import { api } from "@/axios/axiosBase";

export async function getCurrentAnime(id: number) {
  return await api.get(`/title?id=${id}&playlist_type=array`);
}

export async function SearchAnime(search: string) {
  return await api.get(
    `/title/search?search=${search}&filter=posters,names,description`,
  );
}
