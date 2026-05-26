import EditableImage from "./editing/EditableImage";

const ProfileMedia = ({ about, onImageChange }) => {
  const useEmbed =
    about.profileMediaType === "embed" && Boolean(about.profileEmbedUrl);

  if (useEmbed) {
    return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden bg-white">
        <iframe
          src={about.profileEmbedUrl}
          width={about.profileEmbedWidth ?? 345}
          height={about.profileEmbedHeight ?? 295}
          frameBorder="0"
          scrolling="no"
          title={`${about.name} profile`}
          className="border-0 max-w-full max-h-full w-auto h-auto scale-110 md:scale-125 lg:scale-[1.35]"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <EditableImage
      src={about.profileImage}
      alt={about.name}
      className="w-full h-full"
      imgClassName="w-full h-full object-cover"
      onChange={onImageChange}
    />
  );
};

export default ProfileMedia;
