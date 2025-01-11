const cloudinaryBaseUrl = 'https://res.cloudinary.com/dfxi2xyyw/image/upload/';

export const generateImageUrl = (publicId) => {
    return `${cloudinaryBaseUrl}q_auto,f_auto/${publicId}`;
};
