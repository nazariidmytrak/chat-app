export interface ProfileProps {
  id: string;
  userId: string;
  name: string;
  imageUrl: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServerProps {
  id: string;
  name: string;
  imageUrl: string;
  inviteCode: string;
  createdAt: Date;
  updatedAt: Date;
  profileId: string;
}
