import { getOrCreateUserProfile } from '../lib/auth';
import { profileTable } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';

export const load = (async ({ locals }) => {
  const userProfile = await getOrCreateUserProfile(locals)
  return {
    userProfile
  }
});

export const actions = {
  default: async ({ request, locals }) => {
    const userProfile = await getOrCreateUserProfile(locals);
    
    if (!userProfile) {
      error(401, 'You need to be logged in to do that');
    }

    const schema = zfd.formData({
      firstName: zfd.text(),
      lastName: zfd.text(),
      email: zfd.text(),
    });

    const { data } = schema.safeParse(await request.formData());

    if (!data) {
      error(400, "Invalid form data");
    }

    await db.update(profileTable).set({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    }).where(eq(profileTable.id, userProfile.id));

    return { success: true };
  }
}