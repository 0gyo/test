import testSvg from "./assets/test.svg";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src={testSvg.src}
        alt="Test SVG"
        width={testSvg.width}
        height={testSvg.height}
      />
    </main>
  );
}
