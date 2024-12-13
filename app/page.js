import testPng from "./assets/test.png";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src={testPng.src}
        alt="Test PNG"
        width={testPng.width / 4}
        height={testPng.height / 4}

      />
    </main>
  );
}
