export default function Home() {
  return (
    <main style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial'}}>
      <div style={{maxWidth:900, margin:'60px auto', padding:'0 16px'}}>
        <h1>ASTIG Golf Club</h1>
        <p>Bay Area Golf · Community · Good Vibes</p>
        <ul>
          <li><strong>Next Up:</strong> Update this page with your tournaments.</li>
          <li>When this deploys, we can upgrade the design and add Tailwind.</li>
        </ul>
        <p><a href="mailto:info@astiggolf.org">Contact us</a></p>
      </div>
    </main>
  );
}