<Header
  name="App"
  siteUrl="#"
  renderAnchor={(data) => (
    <a href={data.to}>{data.text}</a>
  )}
  nav={[
    { text: 'About', to: '/about' },
    { text: 'My Account', href: 'https://www.lib.umich.edu/my-account/' }
  ]}
/>