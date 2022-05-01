

export const client = async <T,>(url: string, requestInit?: RequestInit): Promise<T | undefined> => {

  try {
    const res = await fetch(url, requestInit)
    return await res.json() as T
  } catch (error) {
    console.error(error)
  }
}