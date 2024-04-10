import CreatePostCredentialDto from '../posts/dto/createPost-credential.dto';
import UpdatePostCredentialDto from '../posts/dto/updatePost-credential.dto';
import ProfileCredentialDto from '../profile/dto/profile-credentials.dto';
import UpdateProfileCredentialDto from '../profile/dto/updateProfile-credentials.dto';

export function convertFormDataToProfileCredentialDto(
  formData: FormData
): ProfileCredentialDto {
  const profileCredentialDto = new ProfileCredentialDto();
  profileCredentialDto.id = Number(formData.get('id'));
  profileCredentialDto.bio = formData.get('bio') as string;
  profileCredentialDto.website = formData.get('website') as string;
  profileCredentialDto.gender = formData.get('gender') as string;
  profileCredentialDto.image = formData.get('image') as string;
  profileCredentialDto.followersCount = Number(formData.get('followersCount'));
  profileCredentialDto.followingCount = Number(formData.get('followingCount'));
  profileCredentialDto.createdAt = new Date(
    formData.get('createdAt') as string
  );
  profileCredentialDto.updatedAt = new Date(
    formData.get('updatedAt') as string
  );
  profileCredentialDto.userId = Number(formData.get('userId'));

  return profileCredentialDto;
}

export function convertFormDataToUpdateProfileCredentialDto(
  formData: FormData
): UpdateProfileCredentialDto {
  const updateProfileCredentialDto = new UpdateProfileCredentialDto();

  const bio = formData.get('bio');
  updateProfileCredentialDto.bio = typeof bio === 'string' ? bio : undefined;

  const website = formData.get('website');
  updateProfileCredentialDto.website =
    typeof website === 'string' ? website : undefined;

  const gender = formData.get('gender');
  updateProfileCredentialDto.gender =
    typeof gender === 'string' ? gender : undefined;

  updateProfileCredentialDto.updatedAt = new Date();

  return updateProfileCredentialDto;
}

export function convertFormDataToPostCredentialDto(
  formData: FormData
): CreatePostCredentialDto {
  const createPostCredentialDto = new CreatePostCredentialDto();
  createPostCredentialDto.id = Number(formData.get('id'));
  createPostCredentialDto.image = formData.get('image') as string;
  createPostCredentialDto.text = formData.get('text') as string;
  createPostCredentialDto.createdAt = new Date(
    formData.get('createdAt') as string
  );
  createPostCredentialDto.updatedAt = new Date(
    formData.get('updatedAt') as string
  );
  createPostCredentialDto.author = Number(formData.get('author'));

  return createPostCredentialDto;
}

export function convertFormDataToUpdatePostCredentialDto(
  formData: FormData
): UpdatePostCredentialDto {
  const updateProfileCredentialDto = new UpdatePostCredentialDto();

  const text = formData.get('text');
  updateProfileCredentialDto.text = typeof text === 'string' ? text : undefined;

  updateProfileCredentialDto.updatedAt = new Date();

  return updateProfileCredentialDto;
}
