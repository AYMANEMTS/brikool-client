const displayImage = (preview, user) => {
    const defaultImageUrl = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    const backendBaseUrl =  "https://brikool-server-2.vercel.app/";

    return preview
        ? preview
        : user?.image
            ? user.googleId
                ? user.image.startsWith("https")
                    ? user.image
                    : `${backendBaseUrl}${user.image}`
                : `${backendBaseUrl}${user.image}`
            : defaultImageUrl;
};

export default displayImage;


export const defaultImageUrl = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
