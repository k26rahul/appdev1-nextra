import Footer from '@/components/Footer';

export default {
  logo: <span>📘 AppDev 1 - Web Development Course</span>,
  project: {
    link: 'https://github.com/k26rahul/appdev1-nextra',
  },
  docsRepositoryBase: 'https://github.com/k26rahul/appdev1-nextra',
  footer: {
    text: <Footer />,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AppDev 1 - Web Development Course</title>
      <meta
        name="description"
        content="Here you will find lessons, demos, and guides to help you learn."
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📘</text></svg>"
      />
    </>
  ),
};
