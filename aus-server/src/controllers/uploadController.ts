import { Request, Response } from 'express';
import s3 from '../utils/s3';
import { v4 as uuid } from 'uuid';

export const generateTestimonialUploadURL = async (_req: Request, res: Response) => {
  try {
    const fileName = `aus/testimonials/${uuid()}.jpg`; // unique name
    const params = {
      Bucket: process.env.DO_SPACES_BUCKET!,
      Key: fileName,
      Expires: 60, // URL expires in 60 seconds
      ContentType: 'image/jpeg', // frontend will use correct type
      // ACL: 'public-read',
    };

    const uploadURL = await s3.getSignedUrlPromise('putObject', params);

    const publicURL = `https://${process.env.DO_SPACES_BUCKET}.${process.env.DO_SPACES_ENDPOINT}/${fileName}`;

    res.json({ uploadURL, publicURL });
  } catch (err) {
    console.error('Error generating upload URL:', err);
    res.status(500).json({ error: 'Failed to generate upload URL' });
  }
};
