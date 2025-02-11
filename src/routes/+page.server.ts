import { db } from '$lib/server/db';

export const load = (async () => {
  const profiles = await db.query.profileTable.findMany();
  return {
    profiles
  }
});
