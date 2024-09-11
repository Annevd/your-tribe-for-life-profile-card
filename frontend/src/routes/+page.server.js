import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/11'

  const person = await fetchJson(url)
  
  person.data.custom = JSON.parse(person.data.custom) 

  return {
    person: person.data,
    custom: person.data.custom
  }
}