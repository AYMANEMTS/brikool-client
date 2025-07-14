const displayImage = (preview, user) => {
    const defaultImageUrl = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    const backendBaseUrl = "https://brikool-server-2.vercel.app/";

    // 1. Show preview if available
    if (preview) return preview;

    // 2. If no user or no image, return default
    if (!user || !user.image) return defaultImageUrl;

    // 3. If Google user and image is full URL, return it directly
    if (user.googleId && user.image.startsWith("https")) {
        return user.image;
    }

    // 4. Else, assume it's a relative path and prefix with backend URL
    return `${user.image}`;
};

export default displayImage;

export const defaultImageUrl = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
