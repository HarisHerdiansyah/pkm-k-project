import {
  S3Client,
  PutObjectCommand,
  PutObjectRequest,
  DeleteObjectsCommand,
  ObjectIdentifier,
} from '@aws-sdk/client-s3';

const S3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT as string,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY as string,
    secretAccessKey: process.env.R2_SECRET as string,
  },
});

type UploadType = {
  bucket: string;
  key: string;
  body: File;
  type: string;
};

export async function uploadObject({ bucket, key, body, type }: UploadType) {
  const bodyBuffer = (await body.arrayBuffer()) as never;
  const inputCommand: PutObjectRequest = {
    Bucket: bucket,
    Key: key,
    Body: bodyBuffer,
    ContentType: type,
  };

  return S3.send(new PutObjectCommand(inputCommand));
}

export async function deleteMultipleObjects(
  bucket: string,
  objects: ObjectIdentifier[],
) {
  return S3.send(
    new DeleteObjectsCommand({
      Bucket: bucket,
      Delete: {
        Objects: objects,
      },
    }),
  );
}
