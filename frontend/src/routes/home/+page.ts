import { DEV_API_URL } from "$lib/constants";
import type { IPage } from "$lib/interfaces.js";
import type { PageLoad } from "./$types";
export const load: PageLoad = async ({fetch}) => {
  const postsRes = await fetch(`${DEV_API_URL}/page/get`)
  const postsData: IPage[] = await postsRes.json()
return {postsData}
}