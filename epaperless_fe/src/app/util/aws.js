import AWS from "aws-sdk";

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const s3 = new AWS.S3();

export function getSignedUrl(objectName) {
  console.log("Region: ", process.env.AWS_S3);
  const params = {
    Bucket: process.env.AWS_S3,
    Key: objectName,
    Expires: 60 * 60, // URL expires in 1 hour
  };

  const url = s3.getSignedUrl("getObject", params);
  return url;
}
