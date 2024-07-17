export default function Home({ params }) {
  return (
    <main>
      <p>Domain {params.domain}</p>
      <p>Org slug {params.orgSlug}</p>
    </main>
  );
}
