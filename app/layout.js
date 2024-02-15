import Detail from './data/settings.json';

export const metadata = {
  title: Detail.title + ' - ' + Detail.description,
  description: Detail.description,
  author: Detail.author,
  version: Detail.version,
  license: Detail.license,
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
