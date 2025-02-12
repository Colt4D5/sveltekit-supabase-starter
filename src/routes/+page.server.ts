  import { getOrCreateUserProfile } from './auth';

export const load = (async ({ locals }) => {
  const userProfile = await getOrCreateUserProfile(locals)
  return {
    userProfile
  }
});
