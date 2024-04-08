import { extname, join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, '_');
}

export const config = {
  api: { bodyParser: false },
};

export async function upload(formData: FormData): Promise<string> {
  const file = formData.get('photo') as Blob | null;
  if (!file) {
    throw new Error('File blob is required.');
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const pathDist: string = join(process.cwd(), './Images');
  const uploadDir = join(pathDist);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        'Error while trying to create directory when uploading a file\n',
        e
      );
      throw new Error('Something went wrong.');
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const fileExtension = extname(file.name);
    const originalFilename = file.name.replace(/\.[^/.]+$/, '');
    const sanitizedFilename = sanitizeFilename(originalFilename);
    const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    return filename;
  } catch (e) {
    console.error('Error while trying to upload a file\n', e);
    throw new Error('Something went wrong.');
  }
}
