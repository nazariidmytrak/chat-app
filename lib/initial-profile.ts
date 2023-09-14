import { currentUser, redirectToSignIn } from '@clerk/nextjs';

import { db } from '@/lib/db';

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    redirectToSignIn();
    return null;
  }

  const existingProfile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (existingProfile) {
    return existingProfile;
  }

  const newProfileData = {
    userId: user.id,
    name: `${user?.firstName} ${user?.lastName}`,
    imageUrl: user?.imageUrl,
    email: user?.emailAddresses[0]?.emailAddress,
  };

  const newProfile = await db.profile.create({
    data: newProfileData,
  });

  return newProfile;
};
