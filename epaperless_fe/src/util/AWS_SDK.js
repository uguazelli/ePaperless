import AWS from "aws-sdk";

const s3client = (aws_region, aws_access_key, aws_secret_key) => {
  AWS.config.update({
    region: aws_region,
    accessKeyId: aws_access_key,
    secretAccessKey: aws_secret_key,
  });

  return new AWS.S3();
};

export const getPreSignedUrl = async (
  objectKey,
  aws_s3,
  aws_region,
  aws_access_key,
  aws_secret_key
) => {
  try {
    const s3 = s3client(aws_region, aws_access_key, aws_secret_key);

    const url = await s3.getSignedUrlPromise("putObject", {
      Bucket: aws_s3,
      Key: objectKey,
      Expires: 3600, // Expiration time in seconds
    });

    return url;
  } catch (error) {
    console.error("Error generating pre-signed URL:", error);
    return error;
  }
};
