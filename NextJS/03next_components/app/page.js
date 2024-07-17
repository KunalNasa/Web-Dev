import Image from "next/image";

export default function Home() {
  return (
    <div className="container ">
      <Image className="mx-auto my-10 object-contain" fill = {true} src="https://cdn.smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png" alt="Image" />
    </div>
  );
}
