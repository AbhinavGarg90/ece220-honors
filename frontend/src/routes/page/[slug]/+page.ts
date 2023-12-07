import { DEV_API_URL } from "$lib/constants";
import type { IPageData } from "$lib/interfaces.js";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
  const components = await fetch(`${DEV_API_URL}/page/${params.slug}`)
  const componentData: IPageData = await components.json()
  return {componentData}
}

