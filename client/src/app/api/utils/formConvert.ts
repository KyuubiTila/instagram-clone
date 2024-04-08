import ProfileCredentialDto from '../profile/dto/profile-credentials.dto';

export default function convertFormDataToProfileCredentialDto(
  formData: FormData
): ProfileCredentialDto {
  const profileCredentialDto = new ProfileCredentialDto();
  profileCredentialDto.id = Number(formData.get('id'));
  profileCredentialDto.bio = formData.get('bio') as string;
  profileCredentialDto.website = formData.get('website') as string;
  profileCredentialDto.gender = formData.get('gender') as string;
  profileCredentialDto.photo = formData.get('photo') as string;
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
