import Image from "next/image";
import testSvg from "./assets/test.svg";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image
        src={testSvg.src}
        alt="Test SVG"
        width={testSvg.width}
        height={testSvg.height}
      />
    </main>
  );
}
