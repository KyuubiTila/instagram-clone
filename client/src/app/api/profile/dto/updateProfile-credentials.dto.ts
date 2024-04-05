export default class UpdateProfileCredentialDto {
  id!: number;

  bio?: string;

  website?: string;

  gender?: string;

  photo?: string;

  followersCount!: number;

  followingCount!: number;

  createdAt!: Date;

  updatedAt!: Date;

  userId!: number;
}
