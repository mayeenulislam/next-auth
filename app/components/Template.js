import Image from "next/image";

const Template = ({ children, logoSrc }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8">
      {logoSrc && (
        <div className="mb-8">
          <Image src={logoSrc} alt="Logo of Auth" width={109} height={150} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Template;
